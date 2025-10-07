// Real data from the spreadsheet
const dashboardData = {
    total_clientes: 22,
    clientes_com_verba: 21,
    total_verba: 49335.0,
    media_verba: 2349.29,
    objetivos: {
        "Social": 11,
        "Leads": 9,
        "E-commerce": 1,
        "Leads | E-commerce": 1
    },
    plataformas: {
        "Meta": 13,
        "Meta, Google": 6,
        "Meta, Tik Tok": 2,
        "Google, Meta": 1
    },
    top_clientes: [
        {"cliente": "Muffato Malls", "verba": 10000.0},
        {"cliente": "Fert Embryo", "verba": 5785.0},
        {"cliente": "Askov", "verba": 5000.0},
        {"cliente": "Unimed", "verba": 5000.0},
        {"cliente": "Catuaí", "verba": 4500.0},
        {"cliente": "Vedere", "verba": 2600.0},
        {"cliente": "SR Óticas ", "verba": 2000.0},
        {"cliente": "Taquito", "verba": 2000.0},
        {"cliente": "Lider Alimentos", "verba": 1600.0},
        {"cliente": "Shopping Total", "verba": 1500.0}
    ],
    todos_clientes: [
        {"0 CLIENTE": "Askov", "OBJETIVO PRINCIPAL": "Social", "PLATAFORMA": "Meta, Tik Tok", "VERBA - LÍQUIDA": 5000, "BV - MOOTPLY": "NÃO", "Google Ads": "Não", "Meta Ads": "R$3.000,00", "Tiktok Ads": "R$2.000,00", "META DIA/VERBA": 100.0, "GOOGLE DIA/VERBA": 66, "ANALISTA RESPONSÁVEL": "André/Rafa"},
        {"0 CLIENTE": "Campos Nutrition", "OBJETIVO PRINCIPAL": "E-commerce", "PLATAFORMA": "Meta, Google", "VERBA - LÍQUIDA": null, "BV - MOOTPLY": null, "Google Ads": null, "Meta Ads": null, "Tiktok Ads": null, "META DIA/VERBA": null, "GOOGLE DIA/VERBA": null, "ANALISTA RESPONSÁVEL": "André/Rafa"},
        {"0 CLIENTE": "Catuaí", "OBJETIVO PRINCIPAL": "Leads", "PLATAFORMA": "Meta, Google", "VERBA - LÍQUIDA": 4500, "BV - MOOTPLY": "NÃO", "Google Ads": "R$1000,00", "Meta Ads": "R$3,500,00", "Tiktok Ads": "Não", "META DIA/VERBA": 116.0, "GOOGLE DIA/VERBA": 33, "ANALISTA RESPONSÁVEL": "André/Rafa"},
        {"0 CLIENTE": "Dr. Gabriel Carapeba", "OBJETIVO PRINCIPAL": "Social", "PLATAFORMA": "Meta", "VERBA - LÍQUIDA": 1200, "BV - MOOTPLY": "NÃO", "Google Ads": "Não", "Meta Ads": "R$1.200,00", "Tiktok Ads": "Não", "META DIA/VERBA": 40.0, "GOOGLE DIA/VERBA": "Não", "ANALISTA RESPONSÁVEL": "André/Rafa"},
        {"0 CLIENTE": "Dr. Mateus Louzada", "OBJETIVO PRINCIPAL": "Leads", "PLATAFORMA": "Meta", "VERBA - LÍQUIDA": 850, "BV - MOOTPLY": "NÃO", "Google Ads": "Não", "Meta Ads": "R$850,00", "Tiktok Ads": "Não", "META DIA/VERBA": 28.0, "GOOGLE DIA/VERBA": "Não", "ANALISTA RESPONSÁVEL": "André/Rafa"},
        {"0 CLIENTE": "Edubolsas", "OBJETIVO PRINCIPAL": "Leads", "PLATAFORMA": "Meta", "VERBA - LÍQUIDA": 800, "BV - MOOTPLY": "NÃO", "Google Ads": "Não", "Meta Ads": "800", "Tiktok Ads": "Não", "META DIA/VERBA": 26.0, "GOOGLE DIA/VERBA": "Não", "ANALISTA RESPONSÁVEL": "André/Rafa"},
        {"0 CLIENTE": "Edubolsas Loja", "OBJETIVO PRINCIPAL": "Leads | E-commerce", "PLATAFORMA": "Meta", "VERBA - LÍQUIDA": 800, "BV - MOOTPLY": "NÃO", "Google Ads": "Não", "Meta Ads": "R$800,00", "Tiktok Ads": "Não", "META DIA/VERBA": 26.0, "GOOGLE DIA/VERBA": "Não", "ANALISTA RESPONSÁVEL": "André/Rafa"},
        {"0 CLIENTE": "Fert Embryo", "OBJETIVO PRINCIPAL": "Leads", "PLATAFORMA": "Google, Meta", "VERBA - LÍQUIDA": 5785, "BV - MOOTPLY": "0,15", "Google Ads": "R$1.785,00", "Meta Ads": "", "Tiktok Ads": "Não", "META DIA/VERBA": 126.0, "GOOGLE DIA/VERBA": 96, "ANALISTA RESPONSÁVEL": "André/Rafa"},
        {"0 CLIENTE": "Gold ", "OBJETIVO PRINCIPAL": "Social", "PLATAFORMA": "Meta", "VERBA - LÍQUIDA": 1000, "BV - MOOTPLY": "NÃO", "Google Ads": "Não", "Meta Ads": "1000", "Tiktok Ads": "Não", "META DIA/VERBA": 33.0, "GOOGLE DIA/VERBA": "Não", "ANALISTA RESPONSÁVEL": "André/Rafa"},
        {"0 CLIENTE": "Hinomoto ", "OBJETIVO PRINCIPAL": "Social", "PLATAFORMA": "Meta", "VERBA - LÍQUIDA": 700, "BV - MOOTPLY": "NÃO", "Google Ads": "Não", "Meta Ads": "700", "Tiktok Ads": "Não", "META DIA/VERBA": 23.0, "GOOGLE DIA/VERBA": "Não", "ANALISTA RESPONSÁVEL": "André/Rafa"},
        {"0 CLIENTE": "Jardim Suinga", "OBJETIVO PRINCIPAL": "Social", "PLATAFORMA": "Meta", "VERBA - LÍQUIDA": 400, "BV - MOOTPLY": "0,2", "Google Ads": "Não", "Meta Ads": "400", "Tiktok Ads": "Não", "META DIA/VERBA": 13.0, "GOOGLE DIA/VERBA": "Não", "ANALISTA RESPONSÁVEL": "André/Rafa"},
        {"0 CLIENTE": "Lider Alimentos", "OBJETIVO PRINCIPAL": "Social", "PLATAFORMA": "Meta, Tik Tok", "VERBA - LÍQUIDA": 1600, "BV - MOOTPLY": "NÃO", "Google Ads": "Não", "Meta Ads": "1000", "Tiktok Ads": "R$600,00", "META DIA/VERBA": 13.0, "GOOGLE DIA/VERBA": 20, "ANALISTA RESPONSÁVEL": "André/Rafa"},
        {"0 CLIENTE": "Mabraco", "OBJETIVO PRINCIPAL": "Social", "PLATAFORMA": "Meta", "VERBA - LÍQUIDA": 600, "BV - MOOTPLY": "0,2", "Google Ads": "Não", "Meta Ads": "600", "Tiktok Ads": "Não", "META DIA/VERBA": 20.0, "GOOGLE DIA/VERBA": "Não", "ANALISTA RESPONSÁVEL": "André/Rafa"},
        {"0 CLIENTE": "Muffato Malls", "OBJETIVO PRINCIPAL": "Social", "PLATAFORMA": "Meta, Google", "VERBA - LÍQUIDA": 10000, "BV - MOOTPLY": "0,15", "Google Ads": "R$5.000,00", "Meta Ads": "R$5.000,00", "Tiktok Ads": "Não", "META DIA/VERBA": 166.0, "GOOGLE DIA/VERBA": 166, "ANALISTA RESPONSÁVEL": "André/Rafa"},
        {"0 CLIENTE": "Ottos", "OBJETIVO PRINCIPAL": "Social", "PLATAFORMA": "Meta", "VERBA - LÍQUIDA": 1000, "BV - MOOTPLY": "NÃO", "Google Ads": "Não", "Meta Ads": "1000", "Tiktok Ads": "Não", "META DIA/VERBA": 33.0, "GOOGLE DIA/VERBA": "Não", "ANALISTA RESPONSÁVEL": "André/Rafa"},
        {"0 CLIENTE": "Portal dos Condomínios", "OBJETIVO PRINCIPAL": "Leads", "PLATAFORMA": "Google, Meta", "VERBA - LÍQUIDA": 2400, "BV - MOOTPLY": "0,15", "Google Ads": "R$1.000,00", "Meta Ads": "R$1.400,00", "Tiktok Ads": "Não", "META DIA/VERBA": 46.0, "GOOGLE DIA/VERBA": 53, "ANALISTA RESPONSÁVEL": "André/Rafa"},
        {"0 CLIENTE": "Prime Veículos", "OBJETIVO PRINCIPAL": "Leads", "PLATAFORMA": "Google, Meta", "VERBA - LÍQUIDA": 4000, "BV - MOOTPLY": "0,15", "Google Ads": "R$2.000,00", "Meta Ads": "R$2.000,00", "Tiktok Ads": "Não", "META DIA/VERBA": 66.0, "GOOGLE DIA/VERBA": 66, "ANALISTA RESPONSÁVEL": "André/Rafa"},
        {"0 CLIENTE": "Shopping Total", "OBJETIVO PRINCIPAL": "Social", "PLATAFORMA": "Meta", "VERBA - LÍQUIDA": 1500, "BV - MOOTPLY": "NÃO", "Google Ads": "Não", "Meta Ads": "1500", "Tiktok Ads": "Não", "META DIA/VERBA": 50.0, "GOOGLE DIA/VERBA": "Não", "ANALISTA RESPONSÁVEL": "André/Rafa"},
        {"0 CLIENTE": "SR Óticas ", "OBJETIVO PRINCIPAL": "Leads", "PLATAFORMA": "Meta, Google", "VERBA - LÍQUIDA": 2000, "BV - MOOTPLY": "0,15", "Google Ads": "R$1.000,00", "Meta Ads": "R$1.000,00", "Tiktok Ads": "Não", "META DIA/VERBA": 33.0, "GOOGLE DIA/VERBA": 33, "ANALISTA RESPONSÁVEL": "André/Rafa"},
        {"0 CLIENTE": "Taquito", "OBJETIVO PRINCIPAL": "Leads", "PLATAFORMA": "Meta", "VERBA - LÍQUIDA": 2000, "BV - MOOTPLY": "0,15", "Google Ads": "Não", "Meta Ads": "R$2.000,00", "Tiktok Ads": "Não", "META DIA/VERBA": 66.0, "GOOGLE DIA/VERBA": "Não", "ANALISTA RESPONSÁVEL": "André/Rafa"},
        {"0 CLIENTE": "Unimed", "OBJETIVO PRINCIPAL": "Leads", "PLATAFORMA": "Meta, Google", "VERBA - LÍQUIDA": 5000, "BV - MOOTPLY": "0,15", "Google Ads": "R$2.500,00", "Meta Ads": "R$2.500,00", "Tiktok Ads": "Não", "META DIA/VERBA": 83.0, "GOOGLE DIA/VERBA": 83, "ANALISTA RESPONSÁVEL": "André/Rafa"},
        {"0 CLIENTE": "Vedere", "OBJETIVO PRINCIPAL": "Social", "PLATAFORMA": "Meta", "VERBA - LÍQUIDA": 2600, "BV - MOOTPLY": "0,15", "Google Ads": "Não", "Meta Ads": "R$2.600,00", "Tiktok Ads": "Não", "META DIA/VERBA": 86.0, "GOOGLE DIA/VERBA": "Não", "ANALISTA RESPONSÁVEL": "André/Rafa"}
    ]
};

// Modern color palette
const modernColors = ['#06edd3', '#ff6b6b', '#ffd93d', '#6c5ce7', '#00d4aa', '#fd79a8'];

// Application state
let filteredClients = [...dashboardData.todos_clientes];
let currentSearchTerm = '';
let currentObjectiveFilter = '';
let currentPlatformFilter = '';

// Chart instances
let objetivosChart, plataformasChart, topClientesChart, distribuicaoChart;

// Initialize the application
function init() {
    updateDateTime();
    setupFilters();
    setupEventListeners();
    renderClientList();
    
    // Initialize all charts for overview
    initAllCharts();
    
    // Set interval to update time every minute
    setInterval(updateDateTime, 60000);
}

// Update date and time
function updateDateTime() {
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'America/Sao_Paulo'
    };
    
    const dateString = now.toLocaleDateString('pt-BR', options);
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        dateElement.textContent = dateString;
    }
}

// Setup filters
function setupFilters() {
    const objectiveFilter = document.getElementById('objective-filter');
    const platformFilter = document.getElementById('platform-filter');
    
    if (objectiveFilter) {
        // Clear existing options except first one
        while (objectiveFilter.children.length > 1) {
            objectiveFilter.removeChild(objectiveFilter.lastChild);
        }
        
        const objectives = [...new Set(dashboardData.todos_clientes
            .map(client => client['OBJETIVO PRINCIPAL'])
            .filter(obj => obj && obj.trim() !== ''))];
        
        objectives.sort().forEach(objective => {
            const option = document.createElement('option');
            option.value = objective;
            option.textContent = objective;
            option.style.color = '#111827';
            option.style.backgroundColor = '#f5f5f5';
            objectiveFilter.appendChild(option);
        });
    }
    
    if (platformFilter) {
        // Clear existing options except first one
        while (platformFilter.children.length > 1) {
            platformFilter.removeChild(platformFilter.lastChild);
        }
        
        const platforms = new Set();
        dashboardData.todos_clientes.forEach(client => {
            const platStr = client['PLATAFORMA'];
            if (platStr && platStr.trim() !== '') {
                platStr.split(',').forEach(plat => {
                    const cleanPlat = plat.trim();
                    if (cleanPlat !== '') platforms.add(cleanPlat);
                });
            }
        });
        
        [...platforms].sort().forEach(platform => {
            const option = document.createElement('option');
            option.value = platform;
            option.textContent = platform;
            option.style.color = '#111827';
            option.style.backgroundColor = '#f5f5f5';
            platformFilter.appendChild(option);
        });
    }
}

// Setup event listeners
function setupEventListeners() {
    const searchInput = document.getElementById('search-input');
    const objectiveFilter = document.getElementById('objective-filter');
    const platformFilter = document.getElementById('platform-filter');
    
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }
    if (objectiveFilter) {
        objectiveFilter.addEventListener('change', handleObjectiveFilter);
    }
    if (platformFilter) {
        platformFilter.addEventListener('change', handlePlatformFilter);
    }
}

// Handle search
function handleSearch(e) {
    currentSearchTerm = e.target.value.toLowerCase().trim();
    applyFilters();
}

// Handle objective filter
function handleObjectiveFilter(e) {
    currentObjectiveFilter = e.target.value;
    applyFilters();
}

// Handle platform filter
function handlePlatformFilter(e) {
    currentPlatformFilter = e.target.value;
    applyFilters();
}

// Apply filters
function applyFilters() {
    filteredClients = dashboardData.todos_clientes.filter(client => {
        const clientName = (client['0 CLIENTE'] || '').toLowerCase();
        const matchesSearch = !currentSearchTerm || clientName.includes(currentSearchTerm);
        
        const matchesObjective = !currentObjectiveFilter || 
            client['OBJETIVO PRINCIPAL'] === currentObjectiveFilter;
        
        const matchesPlatform = !currentPlatformFilter || 
            (client['PLATAFORMA'] && client['PLATAFORMA'].includes(currentPlatformFilter));
        
        return matchesSearch && matchesObjective && matchesPlatform;
    });
    
    renderClientList();
}

// Format currency
function formatCurrency(value) {
    if (value === null || value === undefined || value === '' || isNaN(value)) return '-';
    if (typeof value === 'number') {
        return `R$${value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
    }
    return value;
}

// Render client list
function renderClientList() {
    const clientList = document.getElementById('client-list');
    const noResults = document.getElementById('no-results');
    
    if (!clientList) return;

    if (filteredClients.length === 0) {
        clientList.innerHTML = '';
        if (noResults) noResults.classList.remove('hidden');
        return;
    }

    if (noResults) noResults.classList.add('hidden');
    
    clientList.innerHTML = filteredClients.map((client) => `
        <div class="client-row">
            <div class="client-cell">
                <span class="client-name">${client['0 CLIENTE'] || '-'}</span>
            </div>
            <div class="client-cell">
                ${client['OBJETIVO PRINCIPAL'] || '-'}
            </div>
            <div class="client-cell">
                ${client['PLATAFORMA'] || '-'}
            </div>
            <div class="client-cell">
                <span class="client-budget">${formatCurrency(client['VERBA - LÍQUIDA'])}</span>
            </div>
            <div class="client-cell">
                ${client['ANALISTA RESPONSÁVEL'] || '-'}
            </div>
        </div>
    `).join('');
}

// Tab switching
function showTab(tabName) {
    // Hide all sections
    document.querySelectorAll('.dashboard-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Remove active class from all buttons
    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected section
    const selectedSection = document.getElementById(tabName);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }
    
    // Add active class to clicked button
    event.target.classList.add('active');
}

// Initialize all charts
function initAllCharts() {
    initObjetivosChart();
    initPlataformasChart();
    initTopClientesChart();
    initDistribuicaoChart();
}

// Truncate labels for better display
function truncateLabel(label, maxLength = 15) {
    return label.length > maxLength ? label.substring(0, maxLength) + '...' : label;
}

// Initialize Objetivos Chart
function initObjetivosChart() {
    const ctx = document.getElementById('objetivos-chart');
    if (!ctx) return;
    
    const data = dashboardData.objetivos;
    
    objetivosChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: Object.keys(data),
            datasets: [{
                data: Object.values(data),
                backgroundColor: modernColors.slice(0, Object.keys(data).length),
                borderWidth: 2,
                borderColor: '#111827'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#f5f5f5',
                        font: {
                            size: 11
                        },
                        padding: 10
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed || 0;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((value / total) * 100).toFixed(1);
                            return `${label}: ${value} clientes (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
}

// Initialize Plataformas Chart
function initPlataformasChart() {
    const ctx = document.getElementById('plataformas-chart');
    if (!ctx) return;
    
    const data = dashboardData.plataformas;
    
    plataformasChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(data).map(label => truncateLabel(label, 12)),
            datasets: [{
                label: 'Clientes',
                data: Object.values(data),
                backgroundColor: modernColors[0],
                borderColor: modernColors[1],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        title: function(context) {
                            return Object.keys(data)[context[0].dataIndex];
                        },
                        label: function(context) {
                            return `${context.parsed.x} clientes`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    ticks: {
                        color: '#f5f5f5',
                        font: {
                            size: 10
                        }
                    },
                    grid: {
                        color: '#374151'
                    }
                },
                y: {
                    ticks: {
                        color: '#f5f5f5',
                        font: {
                            size: 10
                        }
                    },
                    grid: {
                        color: '#374151'
                    }
                }
            }
        }
    });
}

// Initialize Top Clientes Chart
function initTopClientesChart() {
    const ctx = document.getElementById('top-clientes-chart');
    if (!ctx) return;
    
    const data = dashboardData.top_clientes;
    
    topClientesChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.map(item => truncateLabel(item.cliente, 12)),
            datasets: [{
                label: 'Verba (R$)',
                data: data.map(item => item.verba),
                backgroundColor: modernColors[3],
                borderColor: modernColors[4],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        title: function(context) {
                            return data[context[0].dataIndex].cliente;
                        },
                        label: function(context) {
                            return `R$${context.parsed.x.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    ticks: {
                        color: '#f5f5f5',
                        font: {
                            size: 10
                        },
                        callback: function(value) {
                            return 'R$' + value.toLocaleString('pt-BR');
                        }
                    },
                    grid: {
                        color: '#374151'
                    }
                },
                y: {
                    ticks: {
                        color: '#f5f5f5',
                        font: {
                            size: 10
                        }
                    },
                    grid: {
                        color: '#374151'
                    }
                }
            }
        }
    });
}

// Initialize Distribuição Chart
function initDistribuicaoChart() {
    const ctx = document.getElementById('distribuicao-chart');
    if (!ctx) return;
    
    // Create histogram data from client budgets
    const budgets = dashboardData.todos_clientes
        .filter(client => client['VERBA - LÍQUIDA'] !== null && client['VERBA - LÍQUIDA'] !== undefined)
        .map(client => client['VERBA - LÍQUIDA']);
    
    // Create bins for histogram
    const bins = [
        { label: 'R$0 - R$1.000', min: 0, max: 1000, count: 0 },
        { label: 'R$1.001 - R$2.000', min: 1001, max: 2000, count: 0 },
        { label: 'R$2.001 - R$3.000', min: 2001, max: 3000, count: 0 },
        { label: 'R$3.001 - R$5.000', min: 3001, max: 5000, count: 0 },
        { label: 'R$5.001+', min: 5001, max: Infinity, count: 0 }
    ];
    
    budgets.forEach(budget => {
        for (let bin of bins) {
            if (budget >= bin.min && budget <= bin.max) {
                bin.count++;
                break;
            }
        }
    });
    
    distribuicaoChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: bins.map(bin => bin.label),
            datasets: [{
                label: 'Clientes',
                data: bins.map(bin => bin.count),
                backgroundColor: modernColors[2],
                borderColor: modernColors[5],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.parsed.y} clientes`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: '#f5f5f5',
                        font: {
                            size: 10
                        }
                    },
                    grid: {
                        color: '#374151'
                    }
                },
                x: {
                    ticks: {
                        color: '#f5f5f5',
                        font: {
                            size: 10
                        },
                        maxRotation: 45
                    },
                    grid: {
                        color: '#374151'
                    }
                }
            }
        }
    });
}

// Make showTab available globally
window.showTab = showTab;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);