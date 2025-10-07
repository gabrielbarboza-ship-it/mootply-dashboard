// Real data from Mootply spreadsheet - EXACT DATA AS PROVIDED
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
        {"cliente": "SR Óticas", "verba": 2000.0},
        {"cliente": "Taquito", "verba": 2000.0},
        {"cliente": "Lider Alimentos", "verba": 1600.0},
        {"cliente": "Shopping Total", "verba": 1500.0}
    ],
    todos_clientes: [
        {"0 CLIENTE": "Askov", "OBJETIVO PRINCIPAL": "Social", "PLATAFORMA": "Meta, Tik Tok", "VERBA - LÍQUIDA": 5000.0, "BV - MOOTPLY": "NÃO", "Google Ads": "Não", "Meta Ads": "R$3.000,00", "Tiktok Ads": "R$2.000,00", "META DIA/VERBA": 100.0, "GOOGLE DIA/VERBA": "Não", "ANALISTA RESPONSÁVEL": "André/Rafa"},
        {"0 CLIENTE": "Campos Nutrition", "OBJETIVO PRINCIPAL": "E-commerce", "PLATAFORMA": "Meta, Google", "VERBA - LÍQUIDA": null, "BV - MOOTPLY": null, "Google Ads": null, "Meta Ads": null, "Tiktok Ads": null, "META DIA/VERBA": null, "GOOGLE DIA/VERBA": null, "ANALISTA RESPONSÁVEL": "André/Rafa"},
        {"0 CLIENTE": "Catuaí", "OBJETIVO PRINCIPAL": "Leads", "PLATAFORMA": "Meta, Google", "VERBA - LÍQUIDA": 4500.0, "BV - MOOTPLY": "NÃO", "Google Ads": "R$1000,00", "Meta Ads": "R$3,500,00", "Tiktok Ads": "Não", "META DIA/VERBA": 116.0, "GOOGLE DIA/VERBA": "33", "ANALISTA RESPONSÁVEL": "André/Rafa"},
        {"0 CLIENTE": "Dr. Gabriel Carapeba", "OBJETIVO PRINCIPAL": "Social", "PLATAFORMA": "Meta", "VERBA - LÍQUIDA": 1200.0, "BV - MOOTPLY": "NÃO", "Google Ads": "Não", "Meta Ads": "R$1.200,00", "Tiktok Ads": "Não", "META DIA/VERBA": 40.0, "GOOGLE DIA/VERBA": "Não", "ANALISTA RESPONSÁVEL": "André/Rafa"},
        {"0 CLIENTE": "Dr. Mateus Louzada", "OBJETIVO PRINCIPAL": "Leads", "PLATAFORMA": "Meta", "VERBA - LÍQUIDA": 850.0, "BV - MOOTPLY": "NÃO", "Google Ads": "Não", "Meta Ads": "R$850,00", "Tiktok Ads": "Não", "META DIA/VERBA": 28.0, "GOOGLE DIA/VERBA": "Não", "ANALISTA RESPONSÁVEL": "André/Rafa"},
        {"0 CLIENTE": "Edubolsas", "OBJETIVO PRINCIPAL": "Leads", "PLATAFORMA": "Meta", "VERBA - LÍQUIDA": 800.0, "BV - MOOTPLY": "NÃO", "Google Ads": "Não", "Meta Ads": "800", "Tiktok Ads": "Não", "META DIA/VERBA": 26.0, "GOOGLE DIA/VERBA": "Não", "ANALISTA RESPONSÁVEL": "André/Rafa"},
        {"0 CLIENTE": "Edubolsas Loja", "OBJETIVO PRINCIPAL": "Leads | E-commerce", "PLATAFORMA": "Meta", "VERBA - LÍQUIDA": 800.0, "BV - MOOTPLY": "NÃO", "Google Ads": "Não", "Meta Ads": "R$800,00", "Tiktok Ads": "Não", "META DIA/VERBA": 26.0, "GOOGLE DIA/VERBA": "Não", "ANALISTA RESPONSÁVEL": "André/Rafa"},
        {"0 CLIENTE": "Fert Embryo", "OBJETIVO PRINCIPAL": "Leads", "PLATAFORMA": "Google, Meta", "VERBA - LÍQUIDA": 5785.0, "BV - MOOTPLY": "0,15", "Google Ads": "R$1.785,00", "Meta Ads": "", "Tiktok Ads": "Não", "META DIA/VERBA": 126.0, "GOOGLE DIA/VERBA": "96", "ANALISTA RESPONSÁVEL": "André/Rafa"},
        {"0 CLIENTE": "Gold", "OBJETIVO PRINCIPAL": "Social", "PLATAFORMA": "Meta", "VERBA - LÍQUIDA": 1000.0, "BV - MOOTPLY": "NÃO", "Google Ads": "Não", "Meta Ads": "1000", "Tiktok Ads": "Não", "META DIA/VERBA": 33.0, "GOOGLE DIA/VERBA": "Não", "ANALISTA RESPONSÁVEL": "André/Rafa"},
        {"0 CLIENTE": "Hinomoto", "OBJETIVO PRINCIPAL": "Social", "PLATAFORMA": "Meta", "VERBA - LÍQUIDA": 700.0, "BV - MOOTPLY": "NÃO", "Google Ads": "Não", "Meta Ads": "700", "Tiktok Ads": "Não", "META DIA/VERBA": 23.0, "GOOGLE DIA/VERBA": "Não", "ANALISTA RESPONSÁVEL": "André/Rafa"},
        {"0 CLIENTE": "Jardim Suinga", "OBJETIVO PRINCIPAL": "Social", "PLATAFORMA": "Meta", "VERBA - LÍQUIDA": 400.0, "BV - MOOTPLY": "0,2", "Google Ads": "Não", "Meta Ads": "400", "Tiktok Ads": "Não", "META DIA/VERBA": 13.0, "GOOGLE DIA/VERBA": "Não", "ANALISTA RESPONSÁVEL": "André/Rafa"},
        {"0 CLIENTE": "Lider Alimentos", "OBJETIVO PRINCIPAL": "Social", "PLATAFORMA": "Meta, Tik Tok", "VERBA - LÍQUIDA": 1600.0, "BV - MOOTPLY": "NÃO", "Google Ads": "Não", "Meta Ads": "1000", "Tiktok Ads": "R$600,00", "META DIA/VERBA": 13.0, "GOOGLE DIA/VERBA": "20", "ANALISTA RESPONSÁVEL": "André/Rafa"},
        {"0 CLIENTE": "Mabraco", "OBJETIVO PRINCIPAL": "Social", "PLATAFORMA": "Meta", "VERBA - LÍQUIDA": 600.0, "BV - MOOTPLY": "0,2", "Google Ads": "Não", "Meta Ads": "600", "Tiktok Ads": "Não", "META DIA/VERBA": 20.0, "GOOGLE DIA/VERBA": "Não", "ANALISTA RESPONSÁVEL": "André/Rafa"},
        {"0 CLIENTE": "Muffato Malls", "OBJETIVO PRINCIPAL": "Leads", "PLATAFORMA": "Meta, Google", "VERBA - LÍQUIDA": 10000.0, "BV - MOOTPLY": "0,15", "Google Ads": "R$5.000,00", "Meta Ads": "R$5.000,00", "Tiktok Ads": "Não", "META DIA/VERBA": 166.0, "GOOGLE DIA/VERBA": "166", "ANALISTA RESPONSÁVEL": "André/Rafa"},
        {"0 CLIENTE": "Regina Celia", "OBJETIVO PRINCIPAL": "Leads", "PLATAFORMA": "Meta", "VERBA - LÍQUIDA": 1000.0, "BV - MOOTPLY": "NÃO", "Google Ads": "Não", "Meta Ads": "1000", "Tiktok Ads": "Não", "META DIA/VERBA": 33.0, "GOOGLE DIA/VERBA": "Não", "ANALISTA RESPONSÁVEL": "André/Rafa"},
        {"0 CLIENTE": "Shefa", "OBJETIVO PRINCIPAL": "Social", "PLATAFORMA": "Meta", "VERBA - LÍQUIDA": 1000.0, "BV - MOOTPLY": "NÃO", "Google Ads": "Não", "Meta Ads": "1000", "Tiktok Ads": "Não", "META DIA/VERBA": 33.0, "GOOGLE DIA/VERBA": "Não", "ANALISTA RESPONSÁVEL": "André/Rafa"},
        {"0 CLIENTE": "Shopping Total", "OBJETIVO PRINCIPAL": "Social", "PLATAFORMA": "Meta", "VERBA - LÍQUIDA": 1500.0, "BV - MOOTPLY": "NÃO", "Google Ads": "Não", "Meta Ads": "1500", "Tiktok Ads": "Não", "META DIA/VERBA": 50.0, "GOOGLE DIA/VERBA": "Não", "ANALISTA RESPONSÁVEL": "André/Rafa"},
        {"0 CLIENTE": "SR Óticas", "OBJETIVO PRINCIPAL": "Leads", "PLATAFORMA": "Meta, Google", "VERBA - LÍQUIDA": 2000.0, "BV - MOOTPLY": "0,15", "Google Ads": "R$1.000,00", "Meta Ads": "R$1.000,00", "Tiktok Ads": "Não", "META DIA/VERBA": 33.0, "GOOGLE DIA/VERBA": "33", "ANALISTA RESPONSÁVEL": "André/Rafa"},
        {"0 CLIENTE": "Tânia", "OBJETIVO PRINCIPAL": "Social", "PLATAFORMA": "Meta", "VERBA - LÍQUIDA": 1000.0, "BV - MOOTPLY": "NÃO", "Google Ads": "Não", "Meta Ads": "1000", "Tiktok Ads": "Não", "META DIA/VERBA": 33.0, "GOOGLE DIA/VERBA": "Não", "ANALISTA RESPONSÁVEL": "André/Rafa"},
        {"0 CLIENTE": "Taquito", "OBJETIVO PRINCIPAL": "Social", "PLATAFORMA": "Meta", "VERBA - LÍQUIDA": 2000.0, "BV - MOOTPLY": "0,15", "Google Ads": "Não", "Meta Ads": "R$2.000,00", "Tiktok Ads": "Não", "META DIA/VERBA": 66.0, "GOOGLE DIA/VERBA": "Não", "ANALISTA RESPONSÁVEL": "André/Rafa"},
        {"0 CLIENTE": "Unimed", "OBJETIVO PRINCIPAL": "Leads", "PLATAFORMA": "Meta, Google", "VERBA - LÍQUIDA": 5000.0, "BV - MOOTPLY": "0,15", "Google Ads": "R$2.500,00", "Meta Ads": "R$2.500,00", "Tiktok Ads": "Não", "META DIA/VERBA": 83.0, "GOOGLE DIA/VERBA": "83", "ANALISTA RESPONSÁVEL": "André/Rafa"},
        {"0 CLIENTE": "Vedere", "OBJETIVO PRINCIPAL": "Leads", "PLATAFORMA": "Meta, Google", "VERBA - LÍQUIDA": 2600.0, "BV - MOOTPLY": "0,15", "Google Ads": "Não", "Meta Ads": "R$2.600,00", "Tiktok Ads": "Não", "META DIA/VERBA": 86.0, "GOOGLE DIA/VERBA": "Não", "ANALISTA RESPONSÁVEL": "André/Rafa"}
    ]
};

// Modern color palette - cyan, coral, yellow, purple as specified
const mootplyColors = ['#06edd3', '#ff6b6b', '#ffd93d', '#6c5ce7', '#fd79a8', '#00cec9', '#fdcb6e', '#e17055', '#a29bfe', '#6c5ce7'];

// Application state
let filteredClients = [...dashboardData.todos_clientes];
let currentSearchTerm = '';
let currentObjectiveFilter = '';
let currentPlatformFilter = '';

// Chart instances
let objectivesChart, platformsChart, topClientsChart, budgetChart;

// DOM elements
let searchInput, objectiveFilter, platformFilter, clientList;

// Initialize the application
function init() {
    updateDateTime();
    setInterval(updateDateTime, 60000); // Update every minute
    
    // Wait for DOM to be fully ready
    setTimeout(() => {
        setupFilters();
        setupEventListeners();
        initializeCharts();
        renderClientList();
        
        // Debug: Log client count
        console.log('Total clients in data:', dashboardData.todos_clientes.length);
        console.log('Filtered clients:', filteredClients.length);
    }, 100);
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
    const dateEl = document.getElementById('current-date');
    if (dateEl) {
        dateEl.textContent = dateString;
    }
}

// Show success message
function showSuccessMessage(message) {
    // Create success notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #06edd3;
        color: #111827;
        padding: 16px 24px;
        border-radius: 8px;
        font-weight: 600;
        box-shadow: 0 4px 12px rgba(6, 237, 211, 0.3);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    `;
    notification.innerHTML = `<i class="fas fa-check-circle" style="margin-right: 8px;"></i>${message}`;
    
    // Add animation keyframes
    if (!document.getElementById('success-animation-styles')) {
        const style = document.createElement('style');
        style.id = 'success-animation-styles';
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Navigation functions
function showOverview() {
    document.getElementById('overview-section').classList.remove('hidden');
    document.getElementById('client-list-section').classList.add('hidden');
    
    // Update active tab
    document.querySelectorAll('.nav-tab').forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');
    
    // Refresh charts
    setTimeout(() => {
        if (objectivesChart) objectivesChart.resize();
        if (platformsChart) platformsChart.resize();
        if (topClientsChart) topClientsChart.resize();
        if (budgetChart) budgetChart.resize();
    }, 100);
}

function showClientList() {
    document.getElementById('overview-section').classList.add('hidden');
    document.getElementById('client-list-section').classList.remove('hidden');
    
    // Update active tab
    document.querySelectorAll('.nav-tab').forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');
}

// Initialize charts
function initializeCharts() {
    createObjectivesChart();
    createPlatformsChart();
    createTopClientsChart();
    createBudgetDistributionChart();
}

// Create objectives pie chart
function createObjectivesChart() {
    const ctx = document.getElementById('objectives-chart').getContext('2d');
    const data = dashboardData.objetivos;
    
    objectivesChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: Object.keys(data),
            datasets: [{
                data: Object.values(data),
                backgroundColor: mootplyColors.slice(0, Object.keys(data).length),
                borderWidth: 3,
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
                            size: 12
                        },
                        padding: 15
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.parsed} clientes`;
                        }
                    }
                }
            }
        }
    });
}

// Create platforms bar chart
function createPlatformsChart() {
    const ctx = document.getElementById('platforms-chart').getContext('2d');
    const data = dashboardData.plataformas;
    
    platformsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(data),
            datasets: [{
                label: 'Número de Clientes',
                data: Object.values(data),
                backgroundColor: mootplyColors.slice(0, Object.keys(data).length),
                borderWidth: 2,
                borderColor: '#111827'
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
                        color: '#f5f5f5'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                },
                x: {
                    ticks: {
                        color: '#f5f5f5'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                }
            }
        }
    });
}

// Create top clients bar chart
function createTopClientsChart() {
    const ctx = document.getElementById('top-clients-chart').getContext('2d');
    const data = dashboardData.top_clientes;
    
    topClientsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.map(item => item.cliente),
            datasets: [{
                label: 'Verba (R$)',
                data: data.map(item => item.verba),
                backgroundColor: mootplyColors.slice(0, data.length),
                borderWidth: 2,
                borderColor: '#111827'
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
                        label: function(context) {
                            return `R$${context.parsed.x.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    ticks: {
                        color: '#f5f5f5',
                        font: {
                            size: 10
                        }
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                },
                x: {
                    ticks: {
                        color: '#f5f5f5',
                        callback: function(value) {
                            return 'R$' + value.toLocaleString('pt-BR');
                        }
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                }
            }
        }
    });
}

// Create budget distribution chart - Real data ranges
function createBudgetDistributionChart() {
    const ctx = document.getElementById('budget-distribution-chart').getContext('2d');
    
    // Create budget ranges as specified in requirements
    const budgets = dashboardData.todos_clientes
        .filter(client => client['VERBA - LÍQUIDA'] !== null && client['VERBA - LÍQUIDA'] !== undefined)
        .map(client => client['VERBA - LÍQUIDA']);
    
    const ranges = [
        { label: '0-1K', min: 0, max: 1000, count: 0 },
        { label: '1K-3K', min: 1001, max: 3000, count: 0 },
        { label: '3K-5K', min: 3001, max: 5000, count: 0 },
        { label: '5K+', min: 5001, max: Infinity, count: 0 }
    ];
    
    budgets.forEach(budget => {
        for (let range of ranges) {
            if (budget >= range.min && budget <= range.max) {
                range.count++;
                break;
            }
        }
    });
    
    budgetChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ranges.map(r => r.label),
            datasets: [{
                label: 'Número de Clientes',
                data: ranges.map(r => r.count),
                backgroundColor: mootplyColors.slice(0, ranges.length),
                borderWidth: 2,
                borderColor: '#111827'
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
                        color: '#f5f5f5'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                },
                x: {
                    ticks: {
                        color: '#f5f5f5'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                }
            }
        }
    });
}

// Setup filter options
function setupFilters() {
    searchInput = document.getElementById('search-input');
    objectiveFilter = document.getElementById('objective-filter');
    platformFilter = document.getElementById('platform-filter');
    clientList = document.getElementById('client-list');
    
    if (!objectiveFilter || !platformFilter) {
        console.error('Filter elements not found');
        return;
    }

    // Clear existing options
    while (objectiveFilter.children.length > 1) {
        objectiveFilter.removeChild(objectiveFilter.lastChild);
    }
    
    while (platformFilter.children.length > 1) {
        platformFilter.removeChild(platformFilter.lastChild);
    }

    // Get unique objectives
    const objectivesSet = new Set();
    dashboardData.todos_clientes.forEach(client => {
        const objective = client['OBJETIVO PRINCIPAL'];
        if (objective && objective.trim() !== '') {
            objectivesSet.add(objective.trim());
        }
    });
    
    const objectives = [...objectivesSet].sort();
    objectives.forEach(objective => {
        const option = document.createElement('option');
        option.value = objective;
        option.textContent = objective;
        objectiveFilter.appendChild(option);
    });

    // Get unique platforms
    const platformsSet = new Set();
    dashboardData.todos_clientes.forEach(client => {
        const platforms = client['PLATAFORMA'];
        if (platforms && platforms.trim() !== '') {
            platformsSet.add(platforms.trim());
        }
    });
    
    const platforms = [...platformsSet].sort();
    platforms.forEach(platform => {
        const option = document.createElement('option');
        option.value = platform;
        option.textContent = platform;
        platformFilter.appendChild(option);
    });
    
    console.log('Filters populated:', { objectives: objectives.length, platforms: platforms.length });
}

// Setup event listeners
function setupEventListeners() {
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

// Apply all filters
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

    console.log('Filters applied. Showing', filteredClients.length, 'of', dashboardData.todos_clientes.length, 'clients');
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

// Format value for display
function formatValue(value) {
    if (value === null || value === undefined || value === '') return '-';
    if (value === 'Não' || value === 'NÃO') return 'Não';
    if (typeof value === 'number') {
        return value.toString();
    }
    return value.toString();
}

// Render client list
function renderClientList() {
    if (!clientList) return;

    if (filteredClients.length === 0) {
        clientList.innerHTML = '';
        const noResultsEl = document.getElementById('no-results');
        if (noResultsEl) {
            noResultsEl.classList.remove('hidden');
        }
        return;
    }

    const noResultsEl = document.getElementById('no-results');
    if (noResultsEl) {
        noResultsEl.classList.add('hidden');
    }
    
    // Ensure all clients are rendered
    const clientRowsHTML = filteredClients.map((client, index) => {
        const originalIndex = dashboardData.todos_clientes.findIndex(c => c === client);
        return `
            <div class="client-row" onclick="showClientDetail(${originalIndex})" data-client-name="${client['0 CLIENTE'] || ''}">
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
        `;
    }).join('');
    
    clientList.innerHTML = clientRowsHTML;
    
    // Debug: Log rendered rows
    console.log('Rendered', filteredClients.length, 'client rows');
}

// Show client detail modal
function showClientDetail(clientIndex) {
    if (clientIndex < 0 || clientIndex >= dashboardData.todos_clientes.length) return;
    
    const client = dashboardData.todos_clientes[clientIndex];
    
    // Helper function to safely get element and set content
    function setElementContent(id, content) {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = content;
        }
    }
    
    // Update modal content
    setElementContent('modal-client-name', `Detalhes - ${client['0 CLIENTE'] || 'Cliente'}`);
    setElementContent('modal-client', client['0 CLIENTE'] || '-');
    setElementContent('modal-objective', client['OBJETIVO PRINCIPAL'] || '-');
    setElementContent('modal-platform', client['PLATAFORMA'] || '-');
    setElementContent('modal-analyst', client['ANALISTA RESPONSÁVEL'] || '-');
    setElementContent('modal-budget', formatCurrency(client['VERBA - LÍQUIDA']));
    setElementContent('modal-bv', formatValue(client['BV - MOOTPLY']));
    setElementContent('modal-google-ads', formatValue(client['Google Ads']));
    setElementContent('modal-meta-ads', formatValue(client['Meta Ads']));
    setElementContent('modal-tiktok-ads', formatValue(client['Tiktok Ads']));
    setElementContent('modal-meta-daily', formatValue(client['META DIA/VERBA']));
    setElementContent('modal-google-daily', formatValue(client['GOOGLE DIA/VERBA']));
    
    // Show modal
    const modal = document.getElementById('client-modal');
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

// Close modal
function closeModal() {
    const modal = document.getElementById('client-modal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

// Export data functionality with user feedback
function exportData() {
    try {
        const csvContent = "data:text/csv;charset=utf-8," 
            + "Cliente,Objetivo,Plataforma,Verba,Analista\n"
            + filteredClients.map(client => 
                `"${client['0 CLIENTE'] || '-'}","${client['OBJETIVO PRINCIPAL'] || '-'}","${client['PLATAFORMA'] || '-'}","${formatCurrency(client['VERBA - LÍQUIDA'])}","${client['ANALISTA RESPONSÁVEL'] || '-'}"`
            ).join("\n");

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "mootply_clientes.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Show success message
        showSuccessMessage(`Dados exportados com sucesso! ${filteredClients.length} clientes exportados.`);
        
    } catch (error) {
        console.error('Export error:', error);
        showSuccessMessage('Erro ao exportar dados. Tente novamente.'); // Show error as success message for consistency
    }
}

// Make functions globally available
window.showOverview = showOverview;
window.showClientList = showClientList;
window.showClientDetail = showClientDetail;
window.closeModal = closeModal;
window.exportData = exportData;

// Click outside modal to close
window.addEventListener('click', function(event) {
    const modal = document.getElementById('client-modal');
    if (event.target === modal) {
        closeModal();
    }
});

// Escape key to close modal
window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);