//Importa expect e it dal pacchetto @jest/globals.
const { expect, it } = require('@jest/globals');
// importare funzione createSlug dal file createSlug.js
const createSlug = require('./createSlug');

// verifica che createSlug lanci un errore in caso di titolo non presente o formato errato
test('createSlug dovrebbe lanciare un errore in caso di titolo non presente o formato errato', () => {
  // Titolo del post non presente
  const titoloNonPresente = '';
  // Lista di esempio dei post esistenti
  const posts = [
    { slug: 'il-milan-vince-lo-scudetto-2025' },
    { slug: 'bari-ritorna-in-serie-a' },
    { slug: 'inter-retrocede-in-b' },
  ];
  // chiamare createSlug con un titolo non presente dovrebbe lanciare un errore
  expect(() => createSlug(titoloNonPresente, posts)).toThrow();
  // Titolo del post con formato errato (non stringa)
  const titoloFormatoErrato = 6969;
  // chiamare createSlug con un titolo con formato errato dovrebbe lanciare un errore
  expect(() => createSlug(titoloFormatoErrato, posts)).toThrow();
});
