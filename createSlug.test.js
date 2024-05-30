//Importa expect e it dal pacchetto @jest/globals.
const { expect, it } = require('@jest/globals');
// importare funzione createSlug dal file createSlug.js
const createSlug = require('./createSlug');

//verifica che createSlug ritorni una stringa con JEST
test('createSlug dovrebbe ritornare una stringa', () => {
  //titolo del post da convertire in slug
  const titolo = 'Il Milan vince lo scudetto 2025';
  //lista di esempio dei post esistenti con i loro slug
  const posts = [{ slug: 'il-milan-vince-lo-scudetto-2025' }];
  //Chiamiamo la funzione createSlug con il titolo e la lista di post
  const result = createSlug(titolo, posts);
  // Verifica: risultato della funzione sia di tipo stringa
  expect(typeof result).toBe('string');
});
