let clientsData = [];

const fileUpload = document.getElementById('fileUpload');
const uploadStatus = document.getElementById('uploadStatus');
const searchInput = document.getElementById('searchInput');
const clientsTableBody = document.querySelector('#clientsTable tbody');
const currentDate = document.getElementById('current-date');

function updateDate() {
  const now = new Date();
  currentDate.textContent = now.toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

// Renderiza a tabela
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

// Carrega dados JSON estático automaticamente
function loadData() {
  fetch('clientes_data.json')
    .then(response => {
      if(!response.ok) throw new Error('Erro ao carregar JSON');
      return response.json();
    })
    .then(data => {
      clientsData = data;
      renderTable();
      uploadStatus.textContent = '';
    })
    .catch(error => {
      console.error('Erro ao carregar dados JSON:', error);
      uploadStatus.textContent = "Dados não disponíveis. Faça upload manual da planilha.";
    });
}

// Lê o arquivo Excel enviado no upload
function handleFileUpload(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = evt => {
    try {
      const data = evt.target.result;
      const workbook = XLSX.read(data, { type: 'array' });
      const worksheet = workbook.Sheets['Página1'];
      if (!worksheet) {
        uploadStatus.textContent = "Erro: Aba 'Página1' não encontrada na planilha.";
        return;
      }
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { defval: '' });

      clientsData = jsonData.map(row => ({
        CLIENTE: row['CLIENTE'] || row['0 CLIENTE'] || '',
        OBJETIVO_PRINCIPAL: row['OBJETIVO PRINCIPAL'] || '',
        PLATAFORMA: row['PLATAFORMA'] || '',
        VERBA_LIQUIDA: row['VERBA - LÍQUIDA'] || '',
        ANALISTA_RESPONSAVEL: row['ANALISTA RESPONSÁVEL'] || ''
      }));

      uploadStatus.textContent = `Planilha '${file.name}' carregada com sucesso! ${clientsData.length} registros encontrados.`;
      renderTable(searchInput.value);
    } catch (error) {
      uploadStatus.textContent = `Erro ao ler arquivo: ${error.message}`;
      console.error('Erro no upload:', error);
    }
  };
  reader.readAsArrayBuffer(file);
}

// Eventos e inicialização
fileUpload.addEventListener('change', handleFileUpload);
searchInput.addEventListener('input', e => renderTable(e.target.value));

updateDate();
loadData();
