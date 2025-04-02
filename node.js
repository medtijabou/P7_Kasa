// server.js
const WebSocket = require('ws');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Créer un serveur WebSocket
const wss = new WebSocket.Server({ noServer: true });

// Gérer les connexions WebSocket
wss.on('connection', (ws) => {
  console.log('Client connecté');
  
  ws.on('message', (message) => {
    console.log('Message reçu :', message);
  });

  ws.send('Bienvenue sur le serveur WebSocket');
});

// Gérer les demandes HTTP
app.get('/', (req, res) => {
  res.send('Serveur WebSocket en cours d\'exécution');
});

// Créer un serveur HTTP et y attacher le serveur WebSocket
app.server = app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});

app.server.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit('connection', ws, request);
  });
});
