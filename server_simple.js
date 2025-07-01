const http = require('http');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuración del servidor
const PORT = 3000;

// Función para obtener el tipo MIME
function getMimeType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.wav': 'audio/wav',
    '.mp4': 'video/mp4',
    '.woff': 'application/font-woff',
    '.ttf': 'application/font-ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'application/font-otf',
    '.wasm': 'application/wasm'
  };
  return mimeTypes[ext] || 'application/octet-stream';
}

// Función para servir archivos
function serveFile(req, res) {
  let filePath = '.' + req.url;
  if (filePath === './') {
    filePath = './estilismo_app.html';
  }

  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = getMimeType(filePath);

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 - Archivo no encontrado</h1>', 'utf-8');
      } else {
        res.writeHead(500);
        res.end('Error del servidor: ' + error.code + ' ..\n');
      }
    } else {
      res.writeHead(200, { 
        'Content-Type': contentType,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
      });
      res.end(content, 'utf-8');
    }
  });
}

// Obtener la IP local
function getLocalIP() {
  const { networkInterfaces } = require('os');
  const nets = networkInterfaces();
  const results = {};

  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === 'IPv4' && !net.internal) {
        if (!results[name]) {
          results[name] = [];
        }
        results[name].push(net.address);
      }
    }
  }

  // Retornar la primera IP encontrada
  for (const name of Object.keys(results)) {
    if (results[name].length > 0) {
      return results[name][0];
    }
  }
  
  return '192.168.1.100'; // IP por defecto si no se encuentra
}

// Crear servidor HTTP
const server = http.createServer(serveFile);

// Iniciar servidor
const localIP = getLocalIP();

server.listen(PORT, '0.0.0.0', () => {
  console.log('🌐 Servidor Estilismo Pro iniciado');
  console.log('================================================');
  console.log(`📱 Local:    http://localhost:${PORT}`);
  console.log(`📱 Red:      http://${localIP}:${PORT}`);
  console.log('================================================');
  console.log('');
  console.log('📱 PARA PROBAR EN TU TELÉFONO:');
  console.log('1. Conecta tu teléfono a la misma red WiFi');
  console.log(`2. Abre en tu navegador móvil: http://${localIP}:${PORT}`);
  console.log('3. ¡El escáner funcionará una vez que permitas el acceso a la cámara!');
  console.log('');
  console.log('⚠️  NOTA: Para usar la cámara en móviles reales,');
  console.log('   idealmente necesitas HTTPS, pero para pruebas locales');
  console.log('   algunos navegadores permitirán el acceso HTTP.');
  console.log('');
  console.log('🔄 Para detener el servidor: Ctrl+C');
});

// Manejo de errores
process.on('uncaughtException', (err) => {
  console.error('Error no capturado:', err);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Promesa rechazada no manejada:', reason);
});
