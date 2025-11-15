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

REM Ensure pre-commit runs lint instead of test
IF EXIST .husky\pre-commit (
    powershell -NoProfile -Command "(Get-Content .husky/pre-commit) -replace 'pnpm test','pnpm lint' -replace 'npm test','pnpm lint' | Set-Content -NoNewline .husky/pre-commit"
    for %%I in (".husky\pre-commit") do set size=%%~zI
    if "%size%"=="0" echo pnpm lint>.husky\pre-commit
) ELSE (
    echo pnpm lint>.husky\pre-commit
)

REM Ensure pre-push runs build
IF EXIST .husky\pre-push (
    powershell -NoProfile -Command "(Get-Content .husky/pre-push) -replace 'pnpm test','pnpm build' -replace 'npm test','pnpm build' -replace 'pnpm lint','pnpm build' -replace 'npm run build','pnpm build' -replace 'npm build','pnpm build' | Set-Content -NoNewline .husky/pre-push"
    for %%I in (".husky\pre-push") do set size=%%~zI
    if "%size%"=="0" echo pnpm build>.husky\pre-push
) ELSE (
    echo pnpm build>.husky\pre-push
)

echo ✅ Setup complete!
echo.
echo 🧪 Test: git add . && git commit -m "test"
pause

