# 🚀 Guía de Despliegue en Netlify - Estilismo Pro

## 📋 Pre-requisitos

- [ ] Cuenta en [Netlify](https://netlify.com)
- [ ] Cuenta en GitHub (recomendado para CI/CD)
- [ ] Archivos del proyecto preparados

## 🔄 Métodos de Despliegue

### Método 1: Drag & Drop (Más Rápido)

1. **Preparar archivos:**
   - Comprimir toda la carpeta `estilismo` en un ZIP
   - O seleccionar todos los archivos de la carpeta

2. **Subir a Netlify:**
   - Ir a [app.netlify.com](https://app.netlify.com)
   - Hacer clic en "Add new site" → "Deploy manually"
   - Arrastrar la carpeta o ZIP al área indicada
   - Esperar la construcción automática

### Método 2: Git Deploy (Recomendado para producción)

1. **Preparar repositorio:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Estilismo Pro"
   git branch -M main
   git remote add origin [URL-DE-TU-REPO]
   git push -u origin main
   ```

2. **Conectar a Netlify:**
   - En Netlify: "Add new site" → "Import an existing project"
   - Conectar con GitHub/GitLab/Bitbucket
   - Seleccionar el repositorio
   - Configurar build settings (ya están en `netlify.toml`)

## ⚙️ Configuración Automática

El proyecto incluye:

- ✅ `netlify.toml` - Configuración completa
- ✅ `_headers` - Headers de seguridad
- ✅ `index.html` - Punto de entrada
- ✅ `manifest.json` - PWA configurada
- ✅ `service-worker.js` - Cache offline

## 🛠️ Configuración Manual (si es necesaria)

### Build Settings
- **Build command:** `echo 'No build needed'`
- **Publish directory:** `.` (raíz del proyecto)
- **Functions directory:** `netlify/functions`

### Environment Variables
```
NODE_ENV=production
NETLIFY_ENV=production
```

## 🚦 Verificaciones Post-Despliegue

### ✅ Checklist de Funcionamiento

- [ ] La aplicación carga correctamente
- [ ] PWA se instala en dispositivos móviles
- [ ] Service Worker funciona (cache offline)
- [ ] Formularios guardan datos en localStorage
- [ ] Cámara funciona para escaneo de códigos
- [ ] Redirecciones funcionan correctamente
- [ ] Headers de seguridad están activos

### 🔍 URLs de Prueba

Después del despliegue, verificar:
- `https://tu-sitio.netlify.app/` → Debe redirigir a la app
- `https://tu-sitio.netlify.app/cualquier-ruta` → Debe mostrar la app
- `https://tu-sitio.netlify.app/manifest.json` → Debe mostrar el manifest
- `https://tu-sitio.netlify.app/scanner-help.html` → Ayuda del escáner

### 📷 **Problemas del Escáner de Códigos**

Si el escáner no funciona en Chrome:

1. **Verificar HTTPS:** Solo funciona en `https://tu-sitio.netlify.app`
2. **Permisos de cámara:**
   - Haz clic en el 🔒 candado junto a la URL
   - Selecciona "Permitir" para Cámara
   - Recarga la página
3. **Alternativa:** Ve a `chrome://settings/content/camera` y verifica permisos
4. **Ayuda completa:** Abre `/scanner-help.html` en tu sitio desplegado

## 🎯 Dominio Personalizado

### Configurar dominio propio:

1. **En Netlify:**
   - Site settings → Domain management
   - Add custom domain
   - Agregar tu dominio

2. **En tu proveedor de DNS:**
   - Agregar CNAME record: `www` → `tu-sitio.netlify.app`
   - O usar Netlify DNS para gestión completa

## 🔒 SSL/HTTPS

- Netlify proporciona SSL automático
- Para dominios personalizados: Let's Encrypt se configura automáticamente
- Forzar HTTPS está habilitado en `netlify.toml`

## 📱 PWA en Producción

### Verificar instalación PWA:

1. **En Chrome:** DevTools → Application → Manifest
2. **En móvil:** Debería aparecer "Agregar a pantalla de inicio"
3. **Offline:** La app debe funcionar sin conexión

## 🐛 Troubleshooting

### Problemas Comunes:

**Error 404 en rutas:**
- Verificar que `netlify.toml` tenga las redirects configuradas
- Confirmar que `index.html` redirige correctamente

**PWA no se instala:**
- Verificar que `manifest.json` sea válido
- Confirmar que `service-worker.js` se registra

**Errores de seguridad:**
- Revisar CSP en headers si hay problemas con scripts externos
- Verificar que todos los recursos usan HTTPS

**LocalStorage no persiste:**
- Verificar configuración de cookies en headers
- Confirmar que no hay conflictos con CSP

### 📞 Recursos de Ayuda:

- [Documentación Netlify](https://docs.netlify.com)
- [PWA Testing](https://web.dev/pwa-checklist)
- [Headers Testing](https://securityheaders.com)

## 🎉 ¡Felicidades!

Tu aplicación Estilismo Pro debería estar funcionando perfectamente en Netlify con:
- ⚡ Carga rápida
- 🔒 Seguridad optimizada  
- 📱 Funcionalidad PWA completa
- 🚀 Despliegue automático (si usas Git)

---

*Última actualización: Enero 2025*
