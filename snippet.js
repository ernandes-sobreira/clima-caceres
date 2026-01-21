/** Loader para CSV compactado (.csv.gz) usando Pako.
 *  Uso: const csvText = await loadGzCSV('data/caceres_era5land_daily.csv.gz');
 */
async function loadGzCSV(url){
  const resp = await fetch(url);
  if(!resp.ok) throw new Error('Falha ao baixar: ' + url + ' ('+resp.status+')');
  const ab = await resp.arrayBuffer();
  const uint8 = new Uint8Array(ab);
  const decompressed = window.pako.ungzip(uint8);
  return new TextDecoder('utf-8').decode(decompressed);
}

// Exemplo de uso:
const csvText = await loadGzCSV('data/caceres_era5land_daily.csv.gz');
// depois você chama sua função atual que parseia CSV:
parseCsv(csvText);
