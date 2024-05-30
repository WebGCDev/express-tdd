//Funzione createSlug che prende due argomenti: titolo(stringa che rappresenta il titolo del post da convertire in slug) e posts(array di oggetti esistenti con proprietà slug)
function createSlug(titolo, posts) {
  if (typeof titolo !== 'string' || titolo.trim() === '') {
    throw new Error('Il titolo non è valido.');
  }
  //converte titolo in minuscolo, sostituendo spazi con trattini, rimuove tutti i caratteri non alfanumerici ad esclusione di trattine e underscore
  let slug = titolo
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');
  //memorizza valore slug
  let originalSlug = slug;
  //contatore che useremo per creare slugs unici in caso di duplicati
  let counter = 1;

  // Ciclo while per controllare se lo slug generato è già presente nella lista dei post
  while (posts.some((post) => post.slug === slug)) {
    //slug già presente, aggiungiamo un numero incrementale alla fine dello slug originale
    slug = `${originalSlug}-${counter}`;
    //Incrementiamo il contatore per il prossimo controllo
    counter++;
  }
  //Ritorniamo lo slug unico generato
  return slug;
}

//Esporto la funzione in modo che possa essere utilizzata in altri moduli
module.exports = createSlug;
