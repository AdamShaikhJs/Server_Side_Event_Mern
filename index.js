const express = require('express');
const http = require('http');
const cors = require('cors');

const app = express();
const server = http.createServer(app);

app.use(cors());

app.get('/sse', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  let count = 0;

  const intervalId = setInterval(() => {
    count++;
    res.write(
      `data:Event Count ${count} -- Time--> ${new Date().toLocaleTimeString()}\n\n`
    );
    if (count === 10) {
      clearInterval(intervalId);
      res.end();
    }
  }, 1000);
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`SSE server running on http://localhost:${PORT}`);
});
