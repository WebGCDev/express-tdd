//Importa expect e it dal pacchetto @jest/globals.
const { expect, it } = require('@jest/globals');
// importare funzione createSlug dal file createSlug.js
const createSlug = require('./createSlug');

// verifica che createSlug lanci un errore se manca l'array dei post
test("createSlug dovrebbe lanciare un errore se manca l'array dei post", () => {
  // Titolo del post
  const titolo = 'Titolo del post';
  // Lista vuota dei post
  const posts = undefined;
  // chiamare createSlug con l'array dei post mancante lancia un errore
  expect(createSlug.bind(null, titolo, posts)).toThrow(
    "L'array dei post è mancante o non valido."
  );
});

//Evita l'allocazione di una nuova funzione ad ogni chiamata al test.
