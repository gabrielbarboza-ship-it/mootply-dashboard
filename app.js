// Mootply Dashboard - Carregamento dinâmico de Excel GitHub

let dashboardData = {};
let filteredClients = [];
let objectivesChart, platformsChart, topClientsChart, budgetChart;

// Link raw do Excel no seu GitHub
const xlsxUrl = 'https://raw.githubusercontent.com/gabrielbarboza-ship-it/mootply-dashboard/main/mootply-distribuicao-clientes.xlsx?v=' + new Date().getTime();

document.addEventListener('DOMContentLoaded', () => {
  fetch(xlsxUrl)
    .then(response => response.arrayBuffer())
    .then(data => {
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const rows = XLSX.utils.sheet_to_json(worksheet);

      dashboardData = processRowsToDashboardData(rows);
      filteredClients = [...dashboardData.todos_clientes];

      initDashboard();
    })
    .catch(e => {
      console.error('Erro ao carregar XLSX:', e);
    });
});

function processRowsToDashboardData(rows) {
  let objetivos = {};
  let plataformas = {};
  let verbas = [];
  let top_clientes = [];

  rows.forEach(r => {
    let verba = Number(r['VERBA - LÍQUIDA']) || 0;
    verbas.push(verba);

    // Objetivo
    if (r['OBJETIVO PRINCIPAL']) {
      objetivos[r['OBJETIVO PRINCIPAL']] = (objetivos[r['OBJETIVO PRINCIPAL']] || 0) + 1;
    }
    // Plataforma
    if (r['PLATAFORMA']) {
      plataformas[r['PLATAFORMA']] = (plataformas[r['PLATAFORMA']] || 0) + 1;
    }
  });

  // top 10 clientes por verba
  top_clientes = rows
    .filter(r => Number(r['VERBA - LÍQUIDA']) > 0)
    .sort((a, b) => Number(b['VERBA - LÍQUIDA']) - Number(a['VERBA - LÍQUIDA']))
    .slice(0, 10)
    .map(r => ({
      cliente: r['0 CLIENTE'],
      verba: Number(r['VERBA - LÍQUIDA'])
    }));

  return {
    total_clientes: rows.length,
    clientes_com_verba: verbas.filter(v => v > 0).length,
    total_verba: verbas.reduce((a,b)=>a+b,0),
    media_verba: verbas.filter(v => v > 0).reduce((a,b)=>a+b,0) / Math.max(1, verbas.filter(v=>v>0).length),
    objetivos, plataformas, top_clientes, todos_clientes: rows
  };
}

function initDashboard() {
  updateKPIs();
  createObjectivesChart();
  createPlatformsChart();
  createTopClientsChart();
  createBudgetDistributionChart();
  loadClientTable();
  setupEventListeners();
}

function updateKPIs() {
  document.querySelector('.kpi-cards .kpi-card:nth-child(1) .kpi-value').textContent = dashboardData.total_clientes;
  document.querySelector('.kpi-cards .kpi-card:nth-child(2) .kpi-value').textContent = dashboardData.clientes_com_verba;
  document.querySelector('.kpi-cards .kpi-card:nth-child(3) .kpi-value').textContent = 'R$' + dashboardData.total_verba.toLocaleString('pt-BR', {minimumFractionDigits:2});
  document.querySelector('.kpi-cards .kpi-card:nth-child(4) .kpi-value').textContent = 'R$' + dashboardData.media_verba.toLocaleString('pt-BR', {minimumFractionDigits:2});
}

function createObjectivesChart() {
  const ctx = document.getElementById('objectivesChart');
  if (!ctx) return;
  if (objectivesChart) objectivesChart.destroy();
  let data = dashboardData.objetivos;
  objectivesChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: Object.keys(data),
      datasets: [{
        data: Object.values(data),
        backgroundColor: ['#06edd3','#ff6b6b','#ffd93d','#6c5ce7']
      }]
    },
    options: { responsive: true, maintainAspectRatio: false }
  });
}

function createPlatformsChart() {
  const ctx = document.getElementById('platformsChart');
  if (!ctx) return;
  if (platformsChart) platformsChart.destroy();
  let data = dashboardData.plataformas;
  platformsChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: Object.keys(data),
      datasets: [{
        label: 'Clientes',
        data: Object.values(data),
        backgroundColor: ['#06edd3','#ff6b6b','#ffd93d','#6c5ce7']
      }]
    },
    options: { responsive: true, maintainAspectRatio: false, indexAxis: 'y' }
  });
}

function createTopClientsChart() {
  const ctx = document.getElementById('topClientsChart');
  if (!ctx) return;
  if (topClientsChart) topClientsChart.destroy();
  let data = dashboardData.top_clientes;
  topClientsChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.map(x => x.cliente),
      datasets: [{
        label: 'Verba (R$)',
        data: data.map(x => x.verba),
        backgroundColor: ['#06edd3','#ff6b6b','#ffd93d','#6c5ce7']
      }]
    },
    options: { responsive: true, maintainAspectRatio: false }
  });
}

function createBudgetDistributionChart() {
  const ctx = document.getElementById('distributionChart');
  if (!ctx) return;
  if (budgetChart) budgetChart.destroy();

  const budgets = dashboardData.todos_clientes.map(x => Number(x['VERBA - LÍQUIDA']) || 0).filter(v => v > 0);
  const ranges = {'0-1K': 0, '1K-3K': 0, '3K-5K': 0, '5K+': 0};
  budgets.forEach(v => {
    if (v <= 1000) ranges['0-1K']++;
    else if (v <= 3000) ranges['1K-3K']++;
    else if (v <= 5000) ranges['3K-5K']++;
    else ranges['5K+']++;
  });

  budgetChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: Object.keys(ranges),
      datasets: [{
        label: 'Clientes',
        data: Object.values(ranges),
        backgroundColor: ['#06edd3','#ff6b6b','#ffd93d','#6c5ce7']
      }]
    },
    options: { responsive: true, maintainAspectRatio: false }
  });
}

function loadClientTable() {
  const container = document.getElementById('client-table-container');
  if (!container) return;
  let html = `
    <div class="table-responsive">
      <table class="client-table">
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Objetivo</th>
            <th>Plataforma</th>
            <th>Verba</th>
            <th>Analista</th>
          </tr>
        </thead>
        <tbody>
  `;
  filteredClients.forEach(client => {
    const verba = client['VERBA - LÍQUIDA'] ? `R$${client['VERBA - LÍQUIDA'].toLocaleString('pt-BR', {minimumFractionDigits: 2})}` : 'N/D';
    html += `
      <tr>
        <td class="client-name">${client['0 CLIENTE']}</td>
        <td>${client['OBJETIVO PRINCIPAL']}</td>
        <td>${client['PLATAFORMA']}</td>
        <td class="verba-value">${verba}</td>
        <td>${client['ANALISTA RESPONSÁVEL']}</td>
      </tr>
    `;
  });
  html += `
        </tbody>
      </table>
    </div>
  `;
  container.innerHTML = html;
}

function setupEventListeners() {
  // Exemplo: pode adicionar navegação, filtro etc aqui
  // Deixe vazio se não usar nada ainda
