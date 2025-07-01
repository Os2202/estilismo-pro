# 📷 Solución para Escáner en Chrome - Estilismo Pro

## 🚨 Problema: Chrome no da permisos para la cámara

### ✅ **Soluciones paso a paso:**

## 1. **Verificar URL HTTPS (OBLIGATORIO)**

Chrome solo permite acceso a la cámara en sitios HTTPS. Asegúrate de que:

- ✅ Tu sitio esté desplegado en Netlify (automáticamente tiene HTTPS)
- ✅ La URL comience con `https://` no `http://`
- ❌ NO funciona en `localhost` sin certificado SSL
- ❌ NO funciona en archivos locales (`file://`)

**URL correcta:** `https://tu-sitio.netlify.app`

## 2. **Configurar permisos en Chrome**

### Método A: Desde la barra de direcciones
1. Haz clic en el **🔒 candado** o **ℹ️ icono** junto a la URL
2. Selecciona **"Configuración del sitio"**
3. En **"Cámara"** selecciona **"Permitir"**
4. Recarga la página

### Método B: Desde configuración de Chrome
1. Ve a **Chrome → Configuración** (⚙️)
2. **Privacidad y seguridad → Configuración de sitios**
3. **Cámara**
4. Busca tu sitio y cambia a **"Permitir"**

### Método C: Reset completo de permisos
1. Ve a **chrome://settings/content/camera**
2. En **"Bloqueados"**, busca tu sitio y **elimínalo**
3. Recarga la página y acepta el permiso cuando aparezca

## 3. **Habilitar permisos cuando aparezca el popup**

Cuando pruebes el escáner por primera vez:

1. Haz clic en **"Activar Escáner"**
2. Chrome mostrará un popup: **"¿Permitir usar tu cámara?"**
3. Haz clic en **"Permitir"** ✅
4. **NO** hagas clic en "Bloquear" ❌

## 4. **Verificar configuración del navegador**

### Comprobar que Chrome puede acceder a la cámara:
1. Ve a **chrome://settings/content/camera**
2. Verifica que **"Los sitios pueden pedir usar tu cámara"** esté **activado**
3. Verifica que tu sitio NO esté en la lista **"Bloqueados"**

### Comprobar hardware:
1. Ve a **chrome://settings/content/camera**
2. Haz clic en **"Comprobar cámara"**
3. Debe mostrarte la imagen de tu cámara

## 5. **Solución para móviles (Android/iOS)**

### Chrome en Android:
1. **Configuración de Android → Aplicaciones → Chrome → Permisos**
2. Activar **"Cámara"** ✅
3. En Chrome: **Menú → Configuración → Configuración de sitios → Cámara**
4. Permitir el acceso

### Safari en iOS:
1. **Configuración → Safari → Cámara**
2. Seleccionar **"Preguntar"** o **"Permitir"**

## 6. **Códigos de error comunes y soluciones**

### `NotAllowedError`
- **Causa:** Permisos denegados
- **Solución:** Seguir pasos 2 y 3 arriba

### `NotFoundError`
- **Causa:** No se encuentra cámara
- **Solución:** Verificar que el dispositivo tenga cámara funcionando

### `NotSupportedError`
- **Causa:** Navegador no compatible
- **Solución:** Usar Chrome, Firefox, Safari o Edge actualizado

### `SecurityError`
- **Causa:** Sitio no es HTTPS
- **Solución:** Usar solo la URL HTTPS de Netlify

## 7. **Testing del escáner**

### ✅ Checklist de funcionamiento:
- [ ] URL es HTTPS (`https://tu-sitio.netlify.app`)
- [ ] Chrome tiene permisos de cámara activados
- [ ] Aparece popup pidiendo permisos (primera vez)
- [ ] Se acepta el permiso ✅
- [ ] Se ve imagen de la cámara en la aplicación
- [ ] El escáner puede leer códigos de barras

### 🧪 **Test rápido:**
1. Abre tu app en `https://tu-sitio.netlify.app`
2. Ve a **Inventario** o **Ventas**
3. Haz clic en **"📷 Activar Escáner"**
4. Debe aparecer popup pidiendo permisos
5. Acepta y verifica que se ve tu cámara

## 8. **Troubleshooting avanzado**

### Si sigue sin funcionar:

1. **Limpiar cache de Chrome:**
   ```
   chrome://settings/clearBrowserData
   ```
   - Seleccionar "Datos de sitios web" y "Imágenes y archivos en caché"
   - Período: "Desde siempre"

2. **Reiniciar Chrome completamente:**
   - Cerrar Chrome completamente
   - Abrir de nuevo
   - Ir directamente a tu sitio HTTPS

3. **Probar en modo incógnito:**
   - `Ctrl+Shift+N` (Windows) o `Cmd+Shift+N` (Mac)
   - Ir a tu sitio HTTPS
   - Aceptar permisos de cámara

4. **Verificar otras aplicaciones:**
   - Cerrar otras aplicaciones que usen la cámara
   - (Zoom, Teams, Skype, etc.)

## 9. **Alternativas si el escáner no funciona**

Si por alguna razón el escáner sigue sin funcionar:

1. **Entrada manual de código:**
   - Usa el campo "Código de barras"
   - Escribe el código manualmente

2. **Otros navegadores:**
   - Firefox: Mejor compatibilidad con cámaras
   - Edge: Buena alternativa en Windows
   - Safari: Recomendado en iOS/Mac

3. **Apps móviles:**
   - Usar cualquier app de escaneo de códigos
   - Copiar el código a la aplicación

## 🎯 **Resultado esperado**

Después de seguir estos pasos:

- ✅ Chrome pide permiso para usar la cámara
- ✅ El usuario acepta el permiso
- ✅ Se ve la imagen de la cámara en la aplicación
- ✅ El escáner puede leer códigos de barras automáticamente
- ✅ Los códigos se procesan y buscan productos

## 📞 **Soporte adicional**

Si sigues teniendo problemas:

1. Verifica tu **versión de Chrome** (debe ser 90+)
2. Asegúrate de que el **sitio sea HTTPS**
3. Comprueba que la **cámara funcione** en otras aplicaciones
4. Intenta en **modo incógnito**
5. Prueba en **otro dispositivo**

---

*💡 Tip: El escáner funciona mejor con buena iluminación y códigos de barras nítidos*
