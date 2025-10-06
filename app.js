// Atualiza a data no header
function updateDate() {
  const now = new Date();
  currentDate.textContent = now.toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

// Renderiza tabelas com filtro opcional
function renderTable(filter = '') {
  clientsTableBody.innerHTML = '';
  const filteredData = clientsData.filter(client =>
    client.CLIENTE.toLowerCase().includes(filter.toLowerCase())
  );
  if(filteredData.length === 0){
    clientsTableBody.innerHTML = '<tr><td colspan="5" style="text-align:center;">Nenhum cliente encontrado</td></tr>';
    return;
  }
  filteredData.forEach(client => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${client.CLIENTE}</td>
      <td>${client.OBJETIVO_PRINCIPAL}</td>
      <td>${client.PLATAFORMA}</td>
      <td>${client.VERBA_LIQUIDA}</td>
      <td>${client.ANALISTA_RESPONSAVEL}</td>
    `;
    clientsTableBody.appendChild(tr);
  });
}

// Lê arquivo Excel e carrega dados
function handleFileUpload(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = evt => {
    const data = evt.target.result;
    const workbook = XLSX.read(data, { type: 'binary' });
    const worksheet = workbook.Sheets['Página1'];
    if (!worksheet) {
      uploadStatus.textContent = "Erro: Aba 'Página1' não encontrada na planilha.";
      return;
    }
    const jsonData = XLSX.utils.sheet_to_json(worksheet, { defval: '' });

    // Mapeia para formato esperado (normalização)
    clientsData = jsonData.map(row => ({
      CLIENTE: row['CLIENTE'] || row['0 CLIENTE'] || '',
      OBJETIVO_PRINCIPAL: row['OBJETIVO PRINCIPAL'] || '',
      PLATAFORMA: row['PLATAFORMA'] || '',
      VERBA_LIQUIDA: row['VERBA - LÍQUIDA'] || '',
      ANALISTA_RESPONSAVEL: row['ANALISTA RESPONSÁVEL'] || ''
    }));

    uploadStatus.textContent = `Planilha '${file.name}' carregada com sucesso! ${clientsData.length} registros encontrados.`;
    renderTable(searchInput.value);
  };
  reader.readAsBinaryString(file);
}

// Eventos
fileUpload.addEventListener('change', handleFileUpload);

searchInput.addEventListener('input', e => {
  renderTable(e.target.value);
});

// Inicializa a data e renderiza tabela vazia
updateDate();
renderTable();
// Client data with detailed information
const clientsData = [
  {
    "CLIENTE": "Askov",
    "OBJETIVO_PRINCIPAL": "Social",
    "PLATAFORMA": "Meta, Tik Tok",
    "VERBA_LIQUIDA": "5000",
    "VERBA_NUMERICA": 5000,
    "BV_MOOTPLY": "NÃO",
    "GOOGLE_ADS": "Não",
    "META_ADS": "R$3.000,00",
    "TIKTOK_ADS": "R$2.000,00",
    "META_DIA_VERBA": "100.0",
    "GOOGLE_DIA_VERBA": "66",
    "ANALISTA_RESPONSAVEL": "André/Rafa",
    "TEM_DETALHES_EXTRAS": false
  },
  {
    "CLIENTE": "Campos Nutrition",
    "OBJETIVO_PRINCIPAL": "E-commerce",
    "PLATAFORMA": "Meta, Google",
    "VERBA_LIQUIDA": "-",
    "VERBA_NUMERICA": 0,
    "BV_MOOTPLY": "N/A",
    "GOOGLE_ADS": "N/A",
    "META_ADS": "N/A",
    "TIKTOK_ADS": "N/A",
    "META_DIA_VERBA": "N/A",
    "GOOGLE_DIA_VERBA": "N/A",
    "ANALISTA_RESPONSAVEL": "André/Rafa",
    "TEM_DETALHES_EXTRAS": false
  },
  {
    "CLIENTE": "Catuaí",
    "OBJETIVO_PRINCIPAL": "Leads",
    "PLATAFORMA": "Meta, Google",
    "VERBA_LIQUIDA": "4500",
    "VERBA_NUMERICA": 4500,
    "BV_MOOTPLY": "NÃO",
    "GOOGLE_ADS": "R$1000,00",
    "META_ADS": "R$3,500,00",
    "TIKTOK_ADS": "Não",
    "META_DIA_VERBA": "116.0",
    "GOOGLE_DIA_VERBA": "33",
    "ANALISTA_RESPONSAVEL": "André/Rafa",
    "TEM_DETALHES_EXTRAS": false
  },
  {
    "CLIENTE": "Dr. Gabriel Carapeba",
    "OBJETIVO_PRINCIPAL": "Social",
    "PLATAFORMA": "Meta",
    "VERBA_LIQUIDA": "1200",
    "VERBA_NUMERICA": 1200,
    "BV_MOOTPLY": "NÃO",
    "GOOGLE_ADS": "Não",
    "META_ADS": "R$1.200,00",
    "TIKTOK_ADS": "Não",
    "META_DIA_VERBA": "40.0",
    "GOOGLE_DIA_VERBA": "Não",
    "ANALISTA_RESPONSAVEL": "André/Rafa",
    "TEM_DETALHES_EXTRAS": false
  },
  {
    "CLIENTE": "Dr. Mateus Louzada",
    "OBJETIVO_PRINCIPAL": "Leads",
    "PLATAFORMA": "Meta",
    "VERBA_LIQUIDA": "850",
    "VERBA_NUMERICA": 850,
    "BV_MOOTPLY": "NÃO",
    "GOOGLE_ADS": "Não",
    "META_ADS": "R$850,00",
    "TIKTOK_ADS": "Não",
    "META_DIA_VERBA": "28.0",
    "GOOGLE_DIA_VERBA": "Não",
    "ANALISTA_RESPONSAVEL": "André/Rafa",
    "TEM_DETALHES_EXTRAS": false
  },
  {
    "CLIENTE": "Edubolsas",
    "OBJETIVO_PRINCIPAL": "Leads",
    "PLATAFORMA": "Meta",
    "VERBA_LIQUIDA": "800",
    "VERBA_NUMERICA": 800,
    "BV_MOOTPLY": "NÃO",
    "GOOGLE_ADS": "Não",
    "META_ADS": "800",
    "TIKTOK_ADS": "Não",
    "META_DIA_VERBA": "26.0",
    "GOOGLE_DIA_VERBA": "Não",
    "ANALISTA_RESPONSAVEL": "André/Rafa",
    "TEM_DETALHES_EXTRAS": true,
    "DETALHES_EXTRAS": {
      "descricao_negocio": "Marca de bolsas com fábrica localizada na cidade de Indiana que trabalha com produtos em couro legítimo.",
      "estrategia": "Captação de leads para Private Label e Lojistas. O Private Label tem o objetivo de atrair investidores que queiram ter a sua própria marca de bolsas mas que não tenham possibilidades de fabricação.",
      "modelo_negocio": "A Edubolsas cuida de todos os quesitos relacionados à fabricação e coloca a marca do empreendedor contratante.",
      "atendimento": "Campanhas de mensagens para WhatsApp, atendidas por Juliana, funcionária na área de Atacado.",
      "restricoes_geograficas": "Não trabalhamos Prudente e região - configurados com raio de exclusão dessa localidade.",
      "posicionamento": "Excluímos o posicionamento de Facebook por leads desqualificados. Trabalhamos apenas com os demais posicionamentos.",
      "observacoes": "Custo por lead interessante, mas precisa verificar qualificação - muito lead pessoa física chegando. Verificar outros formatos para público mais qualificado.",
      "contato_principal": "Lívia define área de atuação e solicita mudanças. Checar mensalmente ajustes de área.",
      "recursos_externos": [
        "[Edubolsas] - Planilha Acompanhamento de Leads",
        "12152 - Anúncios Ciclo 1/2024",
        "Anúncios - Ciclo 1 - 2025"
      ]
    }
  },
  {
    "CLIENTE": "Edubolsas Loja",
    "OBJETIVO_PRINCIPAL": "Leads | E-commerce",
    "PLATAFORMA": "Meta",
    "VERBA_LIQUIDA": "800",
    "VERBA_NUMERICA": 800,
    "BV_MOOTPLY": "NÃO",
    "GOOGLE_ADS": "Não",
    "META_ADS": "R$800,00",
    "TIKTOK_ADS": "Não",
    "META_DIA_VERBA": "26.0",
    "GOOGLE_DIA_VERBA": "Não",
    "ANALISTA_RESPONSAVEL": "André/Rafa",
    "TEM_DETALHES_EXTRAS": false
  },
  {
    "CLIENTE": "Fert Embryo",
    "OBJETIVO_PRINCIPAL": "Leads",
    "PLATAFORMA": "Google, Meta",
    "VERBA_LIQUIDA": "5785",
    "VERBA_NUMERICA": 5785,
    "BV_MOOTPLY": "0.15",
    "GOOGLE_ADS": "R$1.785,00",
    "META_ADS": "N/A",
    "TIKTOK_ADS": "Não",
    "META_DIA_VERBA": "126.0",
    "GOOGLE_DIA_VERBA": "96",
    "ANALISTA_RESPONSAVEL": "André/Rafa",
    "TEM_DETALHES_EXTRAS": false
  },
  {
    "CLIENTE": "Gold ",
    "OBJETIVO_PRINCIPAL": "Social",
    "PLATAFORMA": "Meta",
    "VERBA_LIQUIDA": "1000",
    "VERBA_NUMERICA": 1000,
    "BV_MOOTPLY": "NÃO",
    "GOOGLE_ADS": "Não",
    "META_ADS": "1000",
    "TIKTOK_ADS": "Não",
    "META_DIA_VERBA": "33.0",
    "GOOGLE_DIA_VERBA": "Não",
    "ANALISTA_RESPONSAVEL": "André/Rafa",
    "TEM_DETALHES_EXTRAS": false
  },
  {
    "CLIENTE": "Hinomoto ",
    "OBJETIVO_PRINCIPAL": "Social",
    "PLATAFORMA": "Meta",
    "VERBA_LIQUIDA": "700",
    "VERBA_NUMERICA": 700,
    "BV_MOOTPLY": "NÃO",
    "GOOGLE_ADS": "Não",
    "META_ADS": "700",
    "TIKTOK_ADS": "Não",
    "META_DIA_VERBA": "23.0",
    "GOOGLE_DIA_VERBA": "Não",
    "ANALISTA_RESPONSAVEL": "André/Rafa",
    "TEM_DETALHES_EXTRAS": false
  },
  {
    "CLIENTE": "Jardim Suinga",
    "OBJETIVO_PRINCIPAL": "Social",
    "PLATAFORMA": "Meta",
    "VERBA_LIQUIDA": "400",
    "VERBA_NUMERICA": 400,
    "BV_MOOTPLY": "0.2",
    "GOOGLE_ADS": "Não",
    "META_ADS": "400",
    "TIKTOK_ADS": "Não",
    "META_DIA_VERBA": "13.0",
    "GOOGLE_DIA_VERBA": "Não",
    "ANALISTA_RESPONSAVEL": "André/Rafa",
    "TEM_DETALHES_EXTRAS": false
  },
  {
    "CLIENTE": "Lider Alimentos",
    "OBJETIVO_PRINCIPAL": "Social",
    "PLATAFORMA": "Meta, Tik Tok",
    "VERBA_LIQUIDA": "1600",
    "VERBA_NUMERICA": 1600,
    "BV_MOOTPLY": "NÃO",
    "GOOGLE_ADS": "Não",
    "META_ADS": "1000",
    "TIKTOK_ADS": "R$600,00",
    "META_DIA_VERBA": "13.0",
    "GOOGLE_DIA_VERBA": "20",
    "ANALISTA_RESPONSAVEL": "André/Rafa",
    "TEM_DETALHES_EXTRAS": false
  },
  {
    "CLIENTE": "Mabraco",
    "OBJETIVO_PRINCIPAL": "Social",
    "PLATAFORMA": "Meta",
    "VERBA_LIQUIDA": "600",
    "VERBA_NUMERICA": 600,
    "BV_MOOTPLY": "0.2",
    "GOOGLE_ADS": "Não",
    "META_ADS": "600",
    "TIKTOK_ADS": "Não",
    "META_DIA_VERBA": "20.0",
    "GOOGLE_DIA_VERBA": "Não",
    "ANALISTA_RESPONSAVEL": "André/Rafa",
    "TEM_DETALHES_EXTRAS": false
  },
  {
    "CLIENTE": "Muffato Malls",
    "OBJETIVO_PRINCIPAL": "Leads",
    "PLATAFORMA": "Meta, Google",
    "VERBA_LIQUIDA": "10000",
    "VERBA_NUMERICA": 10000,
    "BV_MOOTPLY": "0.15",
    "GOOGLE_ADS": "R$4.000,00",
    "META_ADS": "R$6.000,00",
    "TIKTOK_ADS": "Não",
    "META_DIA_VERBA": "200.0",
    "GOOGLE_DIA_VERBA": "133",
    "ANALISTA_RESPONSAVEL": "André/Rafa",
    "TEM_DETALHES_EXTRAS": false
  },
  {
    "CLIENTE": "Regina Celia ",
    "OBJETIVO_PRINCIPAL": "Leads",
    "PLATAFORMA": "Meta",
    "VERBA_LIQUIDA": "1000",
    "VERBA_NUMERICA": 1000,
    "BV_MOOTPLY": "NÃO",
    "GOOGLE_ADS": "Não",
    "META_ADS": "R$1.000,00",
    "TIKTOK_ADS": "Não",
    "META_DIA_VERBA": "33.0",
    "GOOGLE_DIA_VERBA": "Não",
    "ANALISTA_RESPONSAVEL": "André/Rafa",
    "TEM_DETALHES_EXTRAS": false
  },
  {
    "CLIENTE": "Shefa",
    "OBJETIVO_PRINCIPAL": "Social",
    "PLATAFORMA": "Meta",
    "VERBA_LIQUIDA": "1000",
    "VERBA_NUMERICA": 1000,
    "BV_MOOTPLY": "NÃO",
    "GOOGLE_ADS": "Não",
    "META_ADS": "1000",
    "TIKTOK_ADS": "Não",
    "META_DIA_VERBA": "33.0",
    "GOOGLE_DIA_VERBA": "Não",
    "ANALISTA_RESPONSAVEL": "André/Rafa",
    "TEM_DETALHES_EXTRAS": false
  },
  {
    "CLIENTE": "Shopping Total",
    "OBJETIVO_PRINCIPAL": "Social",
    "PLATAFORMA": "Meta",
    "VERBA_LIQUIDA": "1500",
    "VERBA_NUMERICA": 1500,
    "BV_MOOTPLY": "NÃO",
    "GOOGLE_ADS": "Não",
    "META_ADS": "1500",
    "TIKTOK_ADS": "Não",
    "META_DIA_VERBA": "50.0",
    "GOOGLE_DIA_VERBA": "Não",
    "ANALISTA_RESPONSAVEL": "André/Rafa",
    "TEM_DETALHES_EXTRAS": false
  },
  {
    "CLIENTE": "SR Óticas ",
    "OBJETIVO_PRINCIPAL": "Leads",
    "PLATAFORMA": "Meta, Google",
    "VERBA_LIQUIDA": "2000",
    "VERBA_NUMERICA": 2000,
    "BV_MOOTPLY": "0.15",
    "GOOGLE_ADS": "R$800,00",
    "META_ADS": "R$1.200,00",
    "TIKTOK_ADS": "Não",
    "META_DIA_VERBA": "40.0",
    "GOOGLE_DIA_VERBA": "26",
    "ANALISTA_RESPONSAVEL": "André/Rafa",
    "TEM_DETALHES_EXTRAS": false
  },
  {
    "CLIENTE": "Tânia",
    "OBJETIVO_PRINCIPAL": "Social",
    "PLATAFORMA": "Meta",
    "VERBA_LIQUIDA": "1000",
    "VERBA_NUMERICA": 1000,
    "BV_MOOTPLY": "NÃO",
    "GOOGLE_ADS": "Não",
    "META_ADS": "1000",
    "TIKTOK_ADS": "Não",
    "META_DIA_VERBA": "33.0",
    "GOOGLE_DIA_VERBA": "Não",
    "ANALISTA_RESPONSAVEL": "André/Rafa",
    "TEM_DETALHES_EXTRAS": false
  },
  {
    "CLIENTE": "Taquito",
    "OBJETIVO_PRINCIPAL": "Social",
    "PLATAFORMA": "Meta",
    "VERBA_LIQUIDA": "2000",
    "VERBA_NUMERICA": 2000,
    "BV_MOOTPLY": "NÃO",
    "GOOGLE_ADS": "Não",
    "META_ADS": "2000",
    "TIKTOK_ADS": "Não",
    "META_DIA_VERBA": "66.0",
    "GOOGLE_DIA_VERBA": "Não",
    "ANALISTA_RESPONSAVEL": "André/Rafa",
    "TEM_DETALHES_EXTRAS": false
  },
  {
    "CLIENTE": "Unimed",
    "OBJETIVO_PRINCIPAL": "Leads",
    "PLATAFORMA": "Meta, Google",
    "VERBA_LIQUIDA": "5000",
    "VERBA_NUMERICA": 5000,
    "BV_MOOTPLY": "0.15",
    "GOOGLE_ADS": "R$2.000,00",
    "META_ADS": "R$3.000,00",
    "TIKTOK_ADS": "Não",
    "META_DIA_VERBA": "100.0",
    "GOOGLE_DIA_VERBA": "66",
    "ANALISTA_RESPONSAVEL": "André/Rafa",
    "TEM_DETALHES_EXTRAS": false
  },
  {
    "CLIENTE": "Vedere",
    "OBJETIVO_PRINCIPAL": "Leads",
    "PLATAFORMA": "Meta, Google",
    "VERBA_LIQUIDA": "2600",
    "VERBA_NUMERICA": 2600,
    "BV_MOOTPLY": "0.15",
    "GOOGLE_ADS": "R$1.040,00",
    "META_ADS": "R$1.560,00",
    "TIKTOK_ADS": "Não",
    "META_DIA_VERBA": "52.0",
    "GOOGLE_DIA_VERBA": "34",
    "ANALISTA_RESPONSAVEL": "André/Rafa",
    "TEM_DETALHES_EXTRAS": false
  }
];

// Global state
let filteredClientsData = [...clientsData];
let currentActiveTab = 'overview';
let charts = {};

// Chart colors
const chartColors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B'];

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setCurrentDate();
    setupTabNavigation();
    setupOverviewTab();
    setupAnalysisTab();
    setupClientsTab();
    updateMetrics();
}

function setCurrentDate() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    const dateString = now.toLocaleDateString('pt-BR', options);
    document.getElementById('current-date').textContent = dateString;
}

// ===== TAB NAVIGATION =====
function setupTabNavigation() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.dataset.tab;
            
            // Update active tab button
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Update active tab content
            tabContents.forEach(content => content.classList.remove('active'));
            document.getElementById(`${targetTab}-tab`).classList.add('active');
            
            currentActiveTab = targetTab;
            
            // Initialize tab-specific functionality
            if (targetTab === 'analysis' && !charts.topClientsChart) {
                setTimeout(initializeAnalysisCharts, 200);
            } else if (targetTab === 'overview' && !charts.objectiveChart) {
                setTimeout(initializeOverviewCharts, 200);
            }
        });
    });
}

// ===== TAB 1: VISÃO GERAL =====
function setupOverviewTab() {
    // Quick filters
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filter = button.dataset.filter;
            applyQuickFilter(filter);
        });
    });
    
    // Initialize charts after a short delay
    setTimeout(initializeOverviewCharts, 100);
}

function applyQuickFilter(filter) {
    if (filter === 'all') {
        filteredClientsData = [...clientsData];
    } else {
        filteredClientsData = clientsData.filter(client => 
            client.OBJETIVO_PRINCIPAL.includes(filter)
        );
    }
    updateMetrics();
    updateOverviewCharts();
}

function initializeOverviewCharts() {
    createObjectiveChart();
    createPlatformChart();
}

function updateOverviewCharts() {
    if (charts.objectiveChart) {
        charts.objectiveChart.destroy();
    }
    if (charts.platformChart) {
        charts.platformChart.destroy();
    }
    createObjectiveChart();
    createPlatformChart();
}

function createObjectiveChart() {
    const ctx = document.getElementById('objectiveChart');
    if (!ctx) return;
    
    const objectives = {};
    filteredClientsData.forEach(client => {
        const obj = client.OBJETIVO_PRINCIPAL;
        objectives[obj] = (objectives[obj] || 0) + 1;
    });
    
    charts.objectiveChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: Object.keys(objectives),
            datasets: [{
                data: Object.values(objectives),
                backgroundColor: chartColors,
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true
                    }
                }
            }
        }
    });
}

function createPlatformChart() {
    const ctx = document.getElementById('platformChart');
    if (!ctx) return;
    
    const platformData = {};
    filteredClientsData.forEach(client => {
        const platforms = client.PLATAFORMA.split(', ');
        platforms.forEach(platform => {
            const cleanPlatform = platform.trim();
            if (!platformData[cleanPlatform]) {
                platformData[cleanPlatform] = 0;
            }
            platformData[cleanPlatform] += client.VERBA_NUMERICA;
        });
    });
    
    charts.platformChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(platformData),
            datasets: [{
                label: 'Verba Total',
                data: Object.values(platformData),
                backgroundColor: chartColors[0],
                borderColor: chartColors[0],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return formatCurrency(value);
                        }
                    }
                }
            }
        }
    });
}

// ===== TAB 2: ANÁLISES =====
function setupAnalysisTab() {
    // Charts will be initialized when tab is first accessed
}

function initializeAnalysisCharts() {
    setTimeout(() => {
        createTopClientsChart();
        createActiveCampaignsChart();
        createDailyBudgetChart();
        createAnalystChart();
    }, 100);
}

function createTopClientsChart() {
    const ctx = document.getElementById('topClientsChart');
    if (!ctx) return;
    
    const sortedClients = [...clientsData]
        .filter(client => client.VERBA_NUMERICA > 0)
        .sort((a, b) => b.VERBA_NUMERICA - a.VERBA_NUMERICA)
        .slice(0, 10);
    
    charts.topClientsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: sortedClients.map(client => client.CLIENTE),
            datasets: [{
                label: 'Verba',
                data: sortedClients.map(client => client.VERBA_NUMERICA),
                backgroundColor: chartColors[1],
                borderColor: chartColors[1],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return formatCurrency(value);
                        }
                    }
                }
            }
        }
    });
}

function createActiveCampaignsChart() {
    const ctx = document.getElementById('activeCampaignsChart');
    if (!ctx) return;
    
    const campaigns = {
        'Meta': 0,
        'Google': 0,
        'TikTok': 0
    };
    
    clientsData.forEach(client => {
        if (client.META_ADS && client.META_ADS !== 'Não' && client.META_ADS !== 'N/A') campaigns.Meta++;
        if (client.GOOGLE_ADS && client.GOOGLE_ADS !== 'Não' && client.GOOGLE_ADS !== 'N/A') campaigns.Google++;
        if (client.TIKTOK_ADS && client.TIKTOK_ADS !== 'Não' && client.TIKTOK_ADS !== 'N/A') campaigns.TikTok++;
    });
    
    charts.activeCampaignsChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: Object.keys(campaigns),
            datasets: [{
                data: Object.values(campaigns),
                backgroundColor: [chartColors[2], chartColors[3], chartColors[4]],
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true
                    }
                }
            }
        }
    });
}

function createDailyBudgetChart() {
    const ctx = document.getElementById('dailyBudgetChart');
    if (!ctx) return;
    
    const validClients = clientsData.filter(client => 
        client.META_DIA_VERBA && !isNaN(parseFloat(client.META_DIA_VERBA))
    );
    
    const ranges = {
        '0-25': 0,
        '26-50': 0,
        '51-100': 0,
        '100+': 0
    };
    
    validClients.forEach(client => {
        const daily = parseFloat(client.META_DIA_VERBA);
        if (daily <= 25) ranges['0-25']++;
        else if (daily <= 50) ranges['26-50']++;
        else if (daily <= 100) ranges['51-100']++;
        else ranges['100+']++;
    });
    
    charts.dailyBudgetChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(ranges),
            datasets: [{
                label: 'Número de Clientes',
                data: Object.values(ranges),
                backgroundColor: chartColors[5],
                borderColor: chartColors[5],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        }
    });
}

function createAnalystChart() {
    const ctx = document.getElementById('analystChart');
    if (!ctx) return;
    
    const analysts = {};
    clientsData.forEach(client => {
        const analyst = client.ANALISTA_RESPONSAVEL;
        if (!analysts[analyst]) {
            analysts[analyst] = {
                clients: 0,
                revenue: 0
            };
        }
        analysts[analyst].clients++;
        analysts[analyst].revenue += client.VERBA_NUMERICA;
    });
    
    charts.analystChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(analysts),
            datasets: [
                {
                    label: 'Número de Clientes',
                    data: Object.values(analysts).map(a => a.clients),
                    backgroundColor: chartColors[6],
                    yAxisID: 'y'
                },
                {
                    label: 'Receita Total',
                    data: Object.values(analysts).map(a => a.revenue),
                    backgroundColor: chartColors[7],
                    yAxisID: 'y1'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    type: 'linear',
                    position: 'left',
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Número de Clientes'
                    }
                },
                y1: {
                    type: 'linear',
                    position: 'right',
                    beginAtZero: true,
                    grid: {
                        drawOnChartArea: false,
                    },
                    title: {
                        display: true,
                        text: 'Receita (R$)'
                    },
                    ticks: {
                        callback: function(value) {
                            return formatCurrency(value);
                        }
                    }
                }
            }
        }
    });
}

// ===== TAB 3: CLIENTES =====
function setupClientsTab() {
    const searchInput = document.getElementById('client-search');
    const objectiveFilter = document.getElementById('client-objective-filter');
    const platformFilter = document.getElementById('client-platform-filter');
    const detailsFilter = document.getElementById('details-filter');
    const clearFiltersBtn = document.getElementById('clear-client-filters');
    const modal = document.getElementById('client-details-modal');
    const closeModalBtn = document.getElementById('close-client-modal');
    const modalOverlay = document.querySelector('.modal-overlay');
    
    // Event listeners
    searchInput.addEventListener('input', debounce(applyClientFilters, 300));
    objectiveFilter.addEventListener('change', applyClientFilters);
    platformFilter.addEventListener('change', applyClientFilters);
    detailsFilter.addEventListener('change', applyClientFilters);
    clearFiltersBtn.addEventListener('click', clearClientFilters);
    closeModalBtn.addEventListener('click', closeClientModal);
    modalOverlay.addEventListener('click', closeClientModal);
    
    // Escape key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeClientModal();
        }
    });
    
    // Initial render
    renderClientsGrid();
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function applyClientFilters() {
    const searchTerm = document.getElementById('client-search').value.toLowerCase().trim();
    const objectiveValue = document.getElementById('client-objective-filter').value;
    const platformValue = document.getElementById('client-platform-filter').value;
    const showDetailsOnly = document.getElementById('details-filter').checked;
    
    filteredClientsData = clientsData.filter(client => {
        // Search filter - search in name and extra details
        let matchesSearch = true;
        if (searchTerm) {
            const searchableContent = [
                client.CLIENTE.toLowerCase(),
                client.OBJETIVO_PRINCIPAL.toLowerCase(),
                client.PLATAFORMA.toLowerCase(),
                client.ANALISTA_RESPONSAVEL.toLowerCase()
            ];
            
            // If client has extra details, search in them too
            if (client.TEM_DETALHES_EXTRAS && client.DETALHES_EXTRAS) {
                const extras = client.DETALHES_EXTRAS;
                searchableContent.push(
                    extras.descricao_negocio?.toLowerCase() || '',
                    extras.estrategia?.toLowerCase() || '',
                    extras.modelo_negocio?.toLowerCase() || '',
                    extras.atendimento?.toLowerCase() || '',
                    extras.restricoes_geograficas?.toLowerCase() || '',
                    extras.posicionamento?.toLowerCase() || '',
                    extras.observacoes?.toLowerCase() || '',
                    extras.contato_principal?.toLowerCase() || ''
                );
            }
            
            matchesSearch = searchableContent.some(content => 
                content.includes(searchTerm)
            );
        }
        
        // Objective filter
        const matchesObjective = !objectiveValue || 
            client.OBJETIVO_PRINCIPAL === objectiveValue;
        
        // Platform filter
        const matchesPlatform = !platformValue || 
            client.PLATAFORMA.includes(platformValue);
        
        // Details filter
        const matchesDetails = !showDetailsOnly || client.TEM_DETALHES_EXTRAS;
        
        return matchesSearch && matchesObjective && matchesPlatform && matchesDetails;
    });
    
    renderClientsGrid();
    updateResultsCounter();
}

function clearClientFilters() {
    document.getElementById('client-search').value = '';
    document.getElementById('client-objective-filter').value = '';
    document.getElementById('client-platform-filter').value = '';
    document.getElementById('details-filter').checked = false;
    
    filteredClientsData = [...clientsData];
    renderClientsGrid();
    updateResultsCounter();
}

function updateResultsCounter() {
    const totalClients = clientsData.length;
    const filteredCount = filteredClientsData.length;
    document.getElementById('results-count').textContent = 
        `Mostrando ${filteredCount} de ${totalClients} clientes`;
}

function renderClientsGrid() {
    const grid = document.getElementById('clients-grid');
    
    if (filteredClientsData.length === 0) {
        grid.innerHTML = `
            <div class="empty-state">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.35-4.35"/>
                </svg>
                <p>Nenhum cliente encontrado com os filtros aplicados.</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = filteredClientsData.map((client, index) => {
        const originalIndex = clientsData.indexOf(client);
        const isSpecial = client.TEM_DETALHES_EXTRAS;
        
        return `
            <div class="client-card ${isSpecial ? 'client-card--special' : ''} fade-in" 
                 onclick="openClientDetailsModal(${originalIndex})">
                <div class="client-card-header">
                    <h3 class="client-name">${client.CLIENTE}</h3>
                    ${isSpecial ? '<span class="info-badge">Info+</span>' : ''}
                </div>
                
                <div class="client-info">
                    <div class="client-info-item">
                        <span class="client-info-label">Plataforma:</span>
                        <span class="client-info-value">${client.PLATAFORMA}</span>
                    </div>
                    <div class="client-info-item">
                        <span class="client-info-label">Verba:</span>
                        <span class="client-info-value client-verba">
                            ${client.VERBA_NUMERICA > 0 ? formatCurrency(client.VERBA_NUMERICA) : '-'}
                        </span>
                    </div>
                    <div class="client-info-item">
                        <span class="client-info-label">Analista:</span>
                        <span class="client-info-value">${client.ANALISTA_RESPONSAVEL}</span>
                    </div>
                </div>
                
                <div class="client-card-footer">
                    <span class="objective-badge ${getObjectiveBadgeClass(client.OBJETIVO_PRINCIPAL)}">
                        ${client.OBJETIVO_PRINCIPAL}
                    </span>
                    <button class="details-btn" onclick="event.stopPropagation(); openClientDetailsModal(${originalIndex})">
                        Ver Detalhes
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

function openClientDetailsModal(index) {
    const client = clientsData[index];
    const modal = document.getElementById('client-details-modal');
    
    // Populate basic information
    document.getElementById('modal-client-title').textContent = `Detalhes - ${client.CLIENTE}`;
    document.getElementById('detail-cliente').textContent = client.CLIENTE;
    document.getElementById('detail-objetivo').textContent = client.OBJETIVO_PRINCIPAL;
    document.getElementById('detail-plataforma').textContent = client.PLATAFORMA;
    document.getElementById('detail-analista').textContent = client.ANALISTA_RESPONSAVEL;
    
    // Financial information
    document.getElementById('detail-verba').textContent = 
        client.VERBA_NUMERICA > 0 ? formatCurrency(client.VERBA_NUMERICA) : '-';
    document.getElementById('detail-bv').textContent = client.BV_MOOTPLY || '-';
    
    // Platform investment
    document.getElementById('detail-google').textContent = client.GOOGLE_ADS || '-';
    document.getElementById('detail-meta').textContent = client.META_ADS || '-';
    document.getElementById('detail-tiktok').textContent = client.TIKTOK_ADS || '-';
    
    // Daily budget
    document.getElementById('detail-meta-dia').textContent = 
        client.META_DIA_VERBA ? `R$ ${client.META_DIA_VERBA}` : '-';
    document.getElementById('detail-google-dia').textContent = 
        (client.GOOGLE_DIA_VERBA && client.GOOGLE_DIA_VERBA !== 'Não') ? 
        `R$ ${client.GOOGLE_DIA_VERBA}` : '-';
    
    // Extra details for special clients
    const extraSection = document.getElementById('extra-details-section');
    if (client.TEM_DETALHES_EXTRAS && client.DETALHES_EXTRAS) {
        const extras = client.DETALHES_EXTRAS;
        
        document.getElementById('detail-descricao-negocio').textContent = extras.descricao_negocio || '-';
        document.getElementById('detail-estrategia').textContent = extras.estrategia || '-';
        document.getElementById('detail-modelo-negocio').textContent = extras.modelo_negocio || '-';
        document.getElementById('detail-atendimento').textContent = extras.atendimento || '-';
        document.getElementById('detail-restricoes').textContent = extras.restricoes_geograficas || '-';
        document.getElementById('detail-posicionamento').textContent = extras.posicionamento || '-';
        document.getElementById('detail-observacoes').textContent = extras.observacoes || '-';
        document.getElementById('detail-contato').textContent = extras.contato_principal || '-';
        
        // Resources list
        const resourcesList = document.getElementById('detail-recursos');
        if (extras.recursos_externos && extras.recursos_externos.length > 0) {
            resourcesList.innerHTML = extras.recursos_externos
                .map(resource => `<li>${resource}</li>`)
                .join('');
        } else {
            resourcesList.innerHTML = '<li>Nenhum recurso externo disponível</li>';
        }
        
        extraSection.classList.remove('hidden');
    } else {
        extraSection.classList.add('hidden');
    }
    
    // Show modal
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeClientModal() {
    const modal = document.getElementById('client-details-modal');
    modal.classList.add('hidden');
    document.body.style.overflow = '';
}

// ===== UTILITY FUNCTIONS =====
function updateMetrics() {
    const totalClients = filteredClientsData.length;
    const totalRevenue = filteredClientsData.reduce((sum, client) => sum + client.VERBA_NUMERICA, 0);
    const averageTicket = totalClients > 0 ? totalRevenue / totalClients : 0;
    const activeCampaigns = calculateActiveCampaigns();
    
    document.getElementById('total-clients').textContent = totalClients;
    document.getElementById('total-revenue').textContent = formatCurrency(totalRevenue);
    document.getElementById('average-ticket').textContent = formatCurrency(averageTicket);
    document.getElementById('active-campaigns').textContent = activeCampaigns;
}

function calculateActiveCampaigns() {
    let count = 0;
    filteredClientsData.forEach(client => {
        if (client.META_ADS && client.META_ADS !== 'Não' && client.META_ADS !== 'N/A') count++;
        if (client.GOOGLE_ADS && client.GOOGLE_ADS !== 'Não' && client.GOOGLE_ADS !== 'N/A') count++;
        if (client.TIKTOK_ADS && client.TIKTOK_ADS !== 'Não' && client.TIKTOK_ADS !== 'N/A') count++;
    });
    return count;
}

function formatCurrency(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);
}

function getObjectiveBadgeClass(objective) {
    switch (objective) {
        case 'Social':
            return 'objective-badge--social';
        case 'Leads':
            return 'objective-badge--leads';
        case 'E-commerce':
            return 'objective-badge--ecommerce';
        case 'Leads | E-commerce':
            return 'objective-badge--mixed';
        default:
            return 'objective-badge--social';
    }
}
