//Importa expect e it dal pacchetto @jest/globals.
const { expect, it } = require('@jest/globals');
// importare funzione createSlug dal file createSlug.js
const createSlug = require('./createSlug');

// verifica che createSlug ritorni una stringa in lowercase
test('createSlug dovrebbe ritornare una stringa in lowercase', () => {
  // Titolo del post da convertire in slug
  const titolo = 'Il Milan Vince Lo Scudetto 2025';
  // Lista di esempio dei post esistenti con i loro slug
  const posts = [{ slug: 'il-milan-vince-lo-scudetto-2025' }];
  // Chiamiamo la funzione createSlug con il titolo e la lista di post
  const result = createSlug(titolo, posts);
  // Verifica: risultato della funzione sia in lowercase
  expect(result).toBe(result.toLowerCase());
});
