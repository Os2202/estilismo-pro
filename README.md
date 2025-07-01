# 💄 Estilismo Pro

Sistema completo de gestión profesional para salones de belleza y estética.

## 🌟 Características Principales

### 👥 Gestión de Clientes
- Registro completo de clientes con fotos
- Historial de servicios y tratamientos
- Notas y observaciones personalizadas
- Sistema de búsqueda y filtrado avanzado

### 📅 Sistema de Citas
- Calendario visual interactivo
- Generación automática de horarios disponibles
- Notificaciones y recordatorios
- Gestión de citas pendientes, confirmadas y completadas

### ✨ Tratamientos y Servicios
- Catálogo completo de tratamientos
- Gestión de precios y duraciones
- Procesos detallados paso a paso
- Calculadora de costos integrada

### 📊 Inventario y Ventas
- Control de stock de productos
- Lector de códigos de barras
- Registro de ventas y ganancias
- Reportes y estadísticas

### 🔒 Seguridad Avanzada
- Encriptación con Web Crypto API
- Sistema de autenticación robusto
- Backup y restauración de datos
- Logs de seguridad y auditoría

## 🚀 Tecnologías Utilizadas

- **Frontend**: HTML5, CSS3 (Tailwind), JavaScript vanilla
- **Seguridad**: Web Crypto API, CSP headers
- **PWA**: Service Worker, Manifest
- **Almacenamiento**: LocalStorage con encriptación
- **UI/UX**: Responsive design, animaciones CSS

## 📱 Instalación

### Despliegue en Vercel (Recomendado)

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Login en Vercel**:
   ```bash
   npx vercel login
   ```

3. **Despliegue de preview**:
   ```bash
   npm run preview
   ```

4. **Despliegue a producción**:
   ```bash
   npm run deploy
   ```

5. **Configuración automática**:
   - Headers de seguridad configurados via `vercel.json`
   - HTTPS habilitado por defecto
   - PWA totalmente funcional
   - CDN global automático

### Despliegue en Netlify (Alternativo)

1. **Subir a GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Estilismo Pro"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/estilismo-pro.git
   git push -u origin main
   ```

2. **Conectar con Netlify**:
   - Ve a [netlify.com](https://netlify.com)
   - Conecta tu repositorio de GitHub
   - El sitio se desplegará automáticamente

### Despliegue Local

1. **Servidor simple**:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (si tienes http-server instalado)
   npx http-server -p 8000
   ```

2. **Acceder**:
   - Abre `http://localhost:8000`
   - La aplicación se cargará automáticamente

## 🛡️ Seguridad

El proyecto incluye múltiples capas de seguridad:

- **CSP (Content Security Policy)**: Previene ataques XSS
- **HTTPS**: Encriptación en tránsito
- **Encriptación de datos**: Web Crypto API para datos sensibles
- **Headers de seguridad**: X-Frame-Options, X-Content-Type-Options, etc.
- **Rate limiting**: Protección contra ataques de fuerza bruta
- **Sanitización**: Validación y limpieza de entradas

## 📁 Estructura del Proyecto

```
estilismo/
├── index.html              # Página de entrada
├── estilismo_app.html       # Aplicación principal
├── manifest.json           # Configuración PWA
├── service-worker.js       # Service Worker para PWA
├── netlify.toml            # Configuración de Netlify
├── icon-192.png           # Icono PWA 192x192
├── icon-512.png           # Icono PWA 512x512
├── .gitignore             # Archivos a ignorar en Git
└── README.md              # Este archivo
```

## 🎯 Uso

1. **Primera vez**:
   - La aplicación se inicializará automáticamente
   - Configura tu sesión de administrador
   - Importa datos existentes si los tienes

2. **Gestión diaria**:
   - Registra nuevos clientes
   - Programa citas
   - Actualiza inventario
   - Revisa reportes

3. **Mantenimiento**:
   - Realiza backups regulares
   - Revisa logs de seguridad
   - Actualiza precios y servicios

## 🔧 Personalización

Puedes personalizar:

- **Colores y tema**: Modifica las variables CSS en `estilismo_app.html`
- **Servicios**: Añade o modifica tratamientos y precios
- **Campos de cliente**: Personaliza la información que recopilas
- **Reportes**: Ajusta las métricas que quieres seguir

## 📱 PWA (Progressive Web App)

La aplicación funciona como una PWA:

- **Instalable**: Puede instalarse en dispositivos móviles
- **Offline**: Funciona sin conexión a internet
- **Responsive**: Se adapta a cualquier tamaño de pantalla
- **Rápida**: Carga instantáneamente después de la primera visita

## 🆘 Soporte

Si encuentras algún problema:

1. Revisa la consola del navegador para errores
2. Verifica que estés usando un navegador moderno
3. Asegúrate de que JavaScript esté habilitado
4. Para problemas de SSL, acepta el certificado autofirmado

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Puedes usarlo libremente para fines comerciales y personales.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

---

**Desarrollado con ❤️ para profesionales de la belleza**
