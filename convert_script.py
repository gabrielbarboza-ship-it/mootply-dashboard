import pandas as pd
import json

# Ler planilha Excel
df = pd.read_excel('Mootply-Distribuicao-de-clientes-1.xlsx')

# Ajustar nomes de colunas se necessário
df.rename(columns={'0 CLIENTE': 'CLIENTE'}, inplace=True)

# Converter para lista de dicionários
data_dict = df.to_dict(orient='records')

# Salvar JSON formatado
with open('clientes_data.json', 'w', encoding='utf-8') as f:
    json.dump(data_dict, f, ensure_ascii=False, indent=2)

print("Arquivo clientes_data.json atualizado com sucesso!")
