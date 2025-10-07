import os
from zipfile import ZipFile

# Estrutura de app React simples baseada na resposta anterior
src_dir = "src"
public_dir = "public"

os.makedirs(src_dir, exist_ok=True)
os.makedirs(public_dir, exist_ok=True)

app_js = '''import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';

const EXCEL_URL = "https://raw.githubusercontent.com/SEU_USUARIO/SEU_REPOSITORIO/BRANCH/mootply-distribuicao-clientes.xlsx";

function App() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [plataforma, setPlataforma] = useState("");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch(EXCEL_URL)
      .then(res => res.arrayBuffer())
      .then(buffer => {
        const wb = XLSX.read(buffer, {type: "array"});
        const ws = wb.Sheets[wb.SheetNames[0]];
        const raw = XLSX.utils.sheet_to_json(ws);
        setData(raw);
      });
  }, []);

  // Filtros aplicados
  const filtered = data.filter(cl =>
    (!filter || cl.CLIENTE.toLowerCase().includes(filter.toLowerCase()))
    && (!objetivo || cl['OBJETIVO PRINCIPAL'] === objetivo)
    && (!plataforma || cl.PLATAFORMA === plataforma)
  );

  // Métricas para cards
  const totalClientes = filtered.length;
  const totalVerba = filtered.reduce((acc, cl) => {
    const valor = typeof cl['VERBA - LQUIDA'] === "number"
      ? cl['VERBA - LQUIDA']
      : parseFloat((cl['VERBA - LQUIDA'] || '').replace('R', '').replace(/\./g,'').replace(',','.'));
    if (isNaN(valor)) return acc;
    return acc + valor;
  }, 0);

  if (selected) {
    return (
      <div className="min-h-screen bg-[#111827] text-white p-6">
        <button className="mb-4 text-[#278392]" onClick={()=>setSelected(null)}>&lt; Voltar</button>
        <h1 className="text-2xl mb-3 font-bold">{selected.CLIENTE}</h1>
        <ul>{Object.entries(selected).map(([campo, valor]) =>
          <li key={campo}><span className="font-bold">{campo}:</span> {valor}</li>)}</ul>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#111827] text-white p-6">
      <h1 className="text-3xl mb-4 font-bold">Clientes - Mootply</h1>
      <div className="flex gap-6 mb-6">
        <div className="bg-[#278392] p-4 rounded">Total clientes: <span className="font-bold">{totalClientes}</span></div>
        <div className="bg-[#06edd3] text-black p-4 rounded">Verba total ativa: <span className="font-bold">R$ {totalVerba.toLocaleString("pt-BR", {minimumFractionDigits:2})}</span></div>
      </div>
      <div className="flex gap-3 mb-4">
        <input className="p-2 rounded text-black" value={filter} onChange={e=>setFilter(e.target.value)} placeholder="Buscar cliente" />
        <select className="p-2 rounded text-black" value={objetivo} onChange={e=>setObjetivo(e.target.value)}>
          <option value="">Objetivo Principal</option>
          {[...new Set(data.map(cl=>cl['OBJETIVO PRINCIPAL']))].map(obj=>(<option key={obj} value={obj}>{obj}</option>))}
        </select>
        <select className="p-2 rounded text-black" value={plataforma} onChange={e=>setPlataforma(e.target.value)}>
          <option value="">Plataforma</option>
          {[...new Set(data.map(cl=>cl['PLATAFORMA']))].map(pl=>(<option key={pl} value={pl}>{pl}</option>))}
        </select>
      </div>
      <table className="w-full bg-white text-black rounded">
        <thead className="bg-[#278392] text-white">
          <tr>
            <th>Cliente</th>
            <th>Objetivo</th>
            <th>Plataforma</th>
            <th>Verba Líquida</th>
            <th>BV Mootply</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(cl => (
            <tr key={cl.CLIENTE} className="cursor-pointer hover:bg-[#06edd3]" onClick={()=>setSelected(cl)}>
              <td>{cl.CLIENTE}</td>
              <td>{cl['OBJETIVO PRINCIPAL']}</td>
              <td>{cl.PLATAFORMA}</td>
              <td>{cl['VERBA - LQUIDA']}</td>
              <td>{cl['BV - MOOTPLY']}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
'''

index_js = '''import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
'''

index_html = '''<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Clientes - Mootply</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
'''

index_css = '''body {
  margin: 0;
  font-family: 'Inter', Arial, sans-serif;
  background: #111827;
}
input, select {
  outline: none;
  border: 1px solid #278392;
}
button {
  cursor: pointer;
}
table {
  min-width: 600px;
  border-spacing: 0;
}
td, th {
  padding: 0.5rem 1rem;
}
tr:hover {
  background: #06edd3;
  color: #111827;
}
'''

with open(os.path.join(src_dir, 'App.js'), 'w', encoding='utf-8') as f:
    f.write(app_js)

with open(os.path.join(src_dir, 'index.js'), 'w', encoding='utf-8') as f:
    f.write(index_js)

with open(os.path.join(src_dir, 'index.css'), 'w', encoding='utf-8') as f:
    f.write(index_css)

with open(os.path.join(public_dir, 'index.html'), 'w', encoding='utf-8') as f:
    f.write(index_html)

# Empacotar tudo em um ZIP
with ZipFile('clientes-mootply-dashboard.zip', 'w') as zipf:
    # Código fonte
    for root, _, files in os.walk('.'):
        if root.startswith('./src') or root.startswith('./public'):
            for file in files:
                zipf.write(os.path.join(root, file), os.path.join(root, file))
