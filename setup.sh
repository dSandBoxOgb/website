#!/bin/bash

echo "🐕 Setting up Husky with pnpm..."

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null; then
    echo "❌ pnpm not found. Installing pnpm..."
    npm install -g pnpm
fi

# Install dependencies
echo "📦 Installing dependencies..."
pnpm install

# Initialize Husky
echo "🐕 Setting up Husky..."
pnpm exec husky init

# Make hooks executable
chmod +x .husky/pre-commit

if [ -f .husky/pre-push ]; then
    chmod +x .husky/pre-push
fi

echo "✅ Setup complete!"
echo ""
echo "🧪 Test: git add . && git commit -m 'test'"
