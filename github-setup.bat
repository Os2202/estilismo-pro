@echo off
echo =====================================
echo   PREPARAR PROYECTO PARA GITHUB
echo =====================================
echo.

echo 📁 Verificando estructura del proyecto...
dir /B

echo.
echo 📋 INSTRUCCIONES PARA SUBIR A GITHUB:
echo.
echo 1. Ve a https://github.com/new
echo 2. Crea un nuevo repositorio llamado 'estilismo-pro'
echo 3. NO inicialices con README (ya tenemos uno)
echo 4. Copia estos comandos en Git Bash o CMD:
echo.
echo    git init
echo    git add .
echo    git commit -m "🎉 Initial commit - Estilismo Pro App"
echo    git branch -M main
echo    git remote add origin https://github.com/TU-USUARIO/estilismo-pro.git
echo    git push -u origin main
echo.
echo 5. Una vez en GitHub, ve a https://vercel.com
echo 6. Conecta tu repositorio de GitHub
echo 7. ¡Vercel desplegará automáticamente!
echo.
echo 💡 VENTAJAS DE USAR GITHUB + VERCEL:
echo    ✅ Despliegues automáticos en cada cambio
echo    ✅ Historial de versiones
echo    ✅ Fácil colaboración
echo    ✅ Backups automáticos
echo.
pause
