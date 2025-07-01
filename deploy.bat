@echo off
echo ================================
echo   ESTILISMO PRO - DEPLOY SCRIPT
echo ================================
echo.

echo 🔍 Verificando archivos necesarios...
if not exist "package.json" (
    echo ❌ Error: package.json no encontrado
    exit /b 1
)

if not exist "vercel.json" (
    echo ❌ Error: vercel.json no encontrado  
    exit /b 1
)

if not exist "index.html" (
    echo ❌ Error: index.html no encontrado
    exit /b 1
)

if not exist "estilismo_app.html" (
    echo ❌ Error: estilismo_app.html no encontrado
    exit /b 1
)

echo ✅ Todos los archivos necesarios están presentes

echo.
echo 📦 Instalando dependencias...
call npm install
if %errorlevel% neq 0 (
    echo ❌ Error instalando dependencias
    exit /b 1
)

echo.
echo 🚀 Iniciando despliegue en Vercel...
echo.
echo Opciones disponibles:
echo 1. Preview (desarrollo)
echo 2. Producción
echo.
set /p choice="Selecciona una opción (1 o 2): "

if "%choice%"=="1" (
    echo.
    echo 🔄 Desplegando preview...
    call npx vercel
) else if "%choice%"=="2" (
    echo.
    echo 🔄 Desplegando a producción...
    call npx vercel --prod
) else (
    echo ❌ Opción inválida
    exit /b 1
)

if %errorlevel% neq 0 (
    echo ❌ Error durante el despliegue
    exit /b 1
)

echo.
echo ✅ ¡Despliegue completado exitosamente!
echo.
echo 🌐 Tu aplicación está ahora disponible en Vercel
echo 💡 Puedes configurar un dominio personalizado desde el dashboard de Vercel
echo.
pause
