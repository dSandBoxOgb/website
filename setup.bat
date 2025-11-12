@echo off

echo 🐕 Setting up Husky with pnpm...

REM Check if pnpm is installed
pnpm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ pnpm not found. Installing pnpm...
    npm install -g pnpm
)

REM Install dependencies
echo 📦 Installing dependencies...
pnpm install

REM Initialize Husky
echo 🐕 Setting up Husky...
pnpm exec husky init

echo ✅ Setup complete!
echo.
echo 🧪 Test: git add . && git commit -m "test"
pause

