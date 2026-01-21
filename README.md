# PLAC Cáceres — Painel Climático (ERA5-Land)

## Como usar (GitHub Pages ou local)
1. Mantenha a estrutura:
   - index.html
   - data/caceres_era5land_daily.csv
2. Para GitHub Pages:
   - Suba esta pasta no seu repositório.
   - Ative Pages em Settings → Pages (branch main / root).
3. Para rodar localmente:
   - Use um servidor local (recomendado): `python -m http.server 8000`
   - Abra: http://localhost:8000

## Dados
Este painel lê o arquivo `data/caceres_era5land_daily.csv` (diário) exportado do Google Earth Engine (ERA5-Land).

## Extras
- Você pode carregar CSVs de outros municípios (mesma estrutura) via botão **Adicionar município** para comparar (até 5).
