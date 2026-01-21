/** Loader para CSV compactado (.csv.gz) usando Pako.
 *  Uso: const csvText = await loadGzCSV('data/caceres_era5land_daily.csv.gz');
 */
async function loadGzCSV(url){
  const resp = await fetch(url);
  if(!resp.ok) throw new Error('Falha ao baixar: ' + url + ' ('+resp.status+')');
  const ab = await resp.arrayBuffer();
  const uint8 = new Uint8Array(ab);
  // pako.ungzip retorna Uint8Array do conteúdo
  const decompressed = window.pako.ungzip(uint8);
  // converte bytes -> string
  const decoder = new TextDecoder('utf-8');
  return decoder.decode(decompressed);
}

// Exemplo de uso:
// const csvText = await loadGzCSV('data/caceres_era5land_daily.csv.gz');
// parseCsv(csvText); // use sua função atual de parse