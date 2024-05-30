//Importa expect e it dal pacchetto @jest/globals.
const { expect, it } = require('@jest/globals');
// importare funzione createSlug dal file createSlug.js
const createSlug = require('./createSlug');

// verifica che createSlug incrementi di 1 lo slug quando esiste già
test('createSlug dovrebbe incrementare di 1 lo slug quando esiste già', () => {
  // Titolo del post da convertire in slug
  const titolo = 'Il Milan vince lo scudetto 2025';
  // Lista di esempio dei post esistenti con uno slug simile già presente
  const posts = [{ slug: 'il-milan-vince-lo-scudetto-2025' }];
  // Chiamiamo la funzione createSlug con il titolo e la lista di post
  const result = createSlug(titolo, posts);
  // Risultato della funzione deve avere uno slug incrementato di 1
  expect(result).toBe('il-milan-vince-lo-scudetto-2025-1');
});
