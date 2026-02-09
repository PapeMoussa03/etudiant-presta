@echo off
echo ========================================
echo  INSTALLATION ETUDIANTPRESTA
echo ========================================
echo.
echo 1. INSTALLATION BACKEND (Django)
echo    cd backend
echo    python -m venv venv
echo    venv\Scripts\activate
echo    pip install -r requirements.txt
echo.
echo 2. INSTALLATION FRONTEND (Next.js)
echo    cd frontend
echo    npm install
echo.
echo 3. LANCEMENT DATABASE (Docker)
echo    docker-compose up -d postgres
echo.
echo 4. LANCEMENT APPLICATION
echo    docker-compose up
echo.
echo ========================================
pause