// app.js atualizado para carregamento dinâmico do Excel via fetch e SheetJS
function updateDateTime() {
  // Exemplo simples: pode popular com data ou deixar vazio se não precisa
  // document.getElementById('current-date').textContent = new Date().toLocaleString('pt-BR');
}

function showOverview() {
  // Coloque aqui lógica para mostrar a aba Overview e esconder outras seções
  // Exemplo básico:
  document.getElementById('overview-section').classList.remove('hidden');
  document.getElementById('client-list-section').classList.add('hidden');
}

function showClientList() {
  // Lógica para mostrar client-list
  document.getElementById('overview-section').classList.add('hidden');
  document.getElementById('client-list-section').classList.remove('hidden');
}

let dashboardData = {};
let filteredClients = [];
let objectivesChart, platformsChart, topClientsChart, distributionChart;

const xlsxUrl = 'https://raw.githubusercontent.com/gabrielbarboza-ship-it/mootply-dashboard/main/mootply-distribuicao-clientes.xlsx?v=' + new Date().getTime();

document.addEventListener('DOMContentLoaded', () => {
  fetch(xlsxUrl)
    .then(response => response.arrayBuffer())
    .then(data => {
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const rawRows = XLSX.utils.sheet_to_json(worksheet);

      dashboardData = processRowsToDashboardData(rawRows);
      filteredClients = [...dashboardData.todos_clientes];
      
      initDashboard();
    })
    .catch(e => console.error('Erro ao carregar XLSX:', e));
});

function processRowsToDashboardData(rows) {
  let data = {
    total_clientes: rows.length,
    clientes_com_verba: rows.filter(r => r['VERBA - LÍQUIDA'] != null && r['VERBA - LÍQUIDA'] !== '').length,
    total_verba: 0,
    media_verba: 0,
    objetivos: {},
    plataformas: {},
    top_clientes: [],
    todos_clientes: rows
  };

  rows.forEach(r => {
    if (typeof r['VERBA - LÍQUIDA'] === 'string') {
      r['VERBA - LÍQUIDA'] = Number(r['VERBA - LÍQUIDA'].replace(/[^\d.-]/g, '')) || 0;
    }
  });

  let verbas = rows.map(r => Number(r['VERBA - LÍQUIDA']) || 0);
  data.total_verba = verbas.reduce((a, b) => a + b, 0);
  data.media_verba = data.total_verba / Math.max(data.clientes_com_verba, 1);

  rows.forEach(row => {
    if (row['OBJETIVO PRINCIPAL']) {
      data.objetivos[row['OBJETIVO PRINCIPAL']] = (data.objetivos[row['OBJETIVO PRINCIPAL']] || 0) + 1;
    }
    if (row['PLATAFORMA']) {
      data.plataformas[row['PLATAFORMA']] = (data.plataformas[row['PLATAFORMA']] || 0) + 1;
    }
  });

  data.top_clientes = rows
    .filter(r => r['VERBA - LÍQUIDA'] != null && r['VERBA - LÍQUIDA'] !== '')
    .sort((a,b) => b['VERBA - LÍQUIDA'] - a['VERBA - LÍQUIDA'])
    .slice(0,10)
    .map(r => ({cliente: r['0 CLIENTE'], verba: r['VERBA - LÍQUIDA'] }));

  return data;
}

function initDashboard() {
  updateDateTime();
  setupEventListeners();
  updateKPIs();
  createAllCharts();
  loadClientTable();
}

function updateKPIs() {
  document.querySelector('.kpi-cards .kpi-card:nth-child(1) .kpi-value').textContent = dashboardData.total_clientes;
  document.querySelector('.kpi-cards .kpi-card:nth-child(2) .kpi-value').textContent = dashboardData.clientes_com_verba;
  document.querySelector('.kpi-cards .kpi-card:nth-child(3) .kpi-value').textContent = `R$${dashboardData.total_verba.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;
  document.querySelector('.kpi-cards .kpi-card:nth-child(4) .kpi-value').textContent = `R$${dashboardData.media_verba.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;
}

function createAllCharts() {
  createObjectivesChart();
  createPlatformsChart();
  createTopClientsChart();
  createDistributionChart();
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
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
  `;
  filteredClients.forEach((client, index) => {
    const verba = client['VERBA - LÍQUIDA'] ? `R$${client['VERBA - LÍQUIDA'].toLocaleString('pt-BR', {minimumFractionDigits: 2})}` : 'N/D';
    html += `
      <tr>
        <td class="client-name">${client['0 CLIENTE']}</td>
        <td><span class="badge badge-objective">${client['OBJETIVO PRINCIPAL']}</span></td>
        <td><span class="badge badge-platform">${client['PLATAFORMA']}</span></td>
        <td class="verba-value">${verba}</td>
        <td>${client['ANALISTA RESPONSÁVEL']}</td>
        <td><button class="btn btn-sm btn-primary" onclick="showClientDetails(${index})">Ver Detalhes</button></td>
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

// As funções showClientDetails, updateDateTime, setupEventListeners, switchSection, createObjectivesChart, createPlatformsChart, createTopClientsChart, createDistributionChart
// devem ser mantidas e adaptadas para sempre usar dashboardData e filteredClients para dados dinâmicos
