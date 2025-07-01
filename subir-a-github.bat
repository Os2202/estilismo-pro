@echo off
chcp 65001 >nul
echo ========================================
echo   🚀 SUBIR ESTILISMO PRO A GITHUB
echo ========================================
echo.

echo 📋 INSTRUCCIONES RÁPIDAS:
echo.
echo 1. Ve a https://github.com/new
echo 2. Nombre del repositorio: estilismo-pro
echo 3. Descripción: Sistema profesional para salones de belleza
echo 4. Marca PÚBLICO ✅
echo 5. NO marques "Add a README file" ❌
echo 6. Clic en "Create repository"
echo.

set /p usuario="🔑 Ingresa tu nombre de usuario de GitHub: "

if "%usuario%"=="" (
    echo ❌ Error: Debes ingresar tu nombre de usuario
    pause
    exit /b 1
)

echo.
echo 🔄 Configurando repositorio remoto...

REM Remover origin si existe
git remote remove origin 2>nul

REM Agregar nuevo origin
git remote add origin https://github.com/%usuario%/estilismo-pro.git

if %errorlevel% neq 0 (
    echo ❌ Error configurando repositorio remoto
    pause
    exit /b 1
)

echo ✅ Repositorio remoto configurado: https://github.com/%usuario%/estilismo-pro.git
echo.

echo 📤 Subiendo código a GitHub...
git push -u origin main

if %errorlevel% neq 0 (
    echo.
    echo ❌ Error al subir el código
    echo.
    echo 💡 POSIBLES SOLUCIONES:
    echo 1. Verifica que creaste el repositorio en GitHub
    echo 2. Asegúrate de que el repositorio esté VACÍO (sin README)
    echo 3. Verifica tu conexión a internet
    echo 4. Si pide autenticación, usa tu token de GitHub
    echo.
    echo 🔗 Ayuda con tokens: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token
    pause
    exit /b 1
)

echo.
echo ✅ ¡CÓDIGO SUBIDO EXITOSAMENTE!
echo.
echo 🌐 Tu repositorio está en: https://github.com/%usuario%/estilismo-pro
echo.
echo 📋 PRÓXIMO PASO - DESPLEGAR EN VERCEL:
echo.
echo 1. Ve a https://vercel.com
echo 2. Clic en "Continue with GitHub" 
echo 3. Clic en "New Project"
echo 4. Busca y selecciona "estilismo-pro"
echo 5. Clic en "Deploy" (NO cambies nada)
echo 6. ¡Espera 2 minutos y tendrás tu app online!
echo.
echo 🎉 Tu app estará en: https://estilismo-pro-%usuario%.vercel.app
echo.
pause
