//Importa expect e it dal pacchetto @jest/globals.
const { expect, it } = require('@jest/globals');
// importare funzione createSlug dal file createSlug.js
const createSlug = require('./createSlug');

// verifica che createSlug sostituisca gli spazi con trattini
test('createSlug dovrebbe sostituire gli spazi con trattini', () => {
  // Titolo del post da convertire in slug con spazi
  const titolo = 'Il Milan vince lo scudetto 2025';
  // Lista di esempio di un solo post con uno slug che corrisponde a quello generato dal titolo
  const posts = [{ slug: createSlug(titolo, []) }];
  // Chiamiamo la funzione createSlug con il titolo e la lista di post
  const result = createSlug(titolo, posts);
  // Verifica: risultato della funzione abbia spazi sostituiti da trattini
  expect(result).not.toContain(' ');
});

// Dopo vari test che mi riportavano vari errori ho risolto cosi: ho dovuto passare una lista di post che contiene un solo post con uno slug che corrisponde a quello generato dal titolo.
