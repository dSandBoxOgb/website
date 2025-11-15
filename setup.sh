#!/bin/bash

echo "🐕 Setting up Husky with pnpm..."

# Check if pnpm is installed
if ! command -v pnpm &>/dev/null; then
    echo "❌ pnpm not found. Installing pnpm..."
    npm install -g pnpm
fi

# Install dependencies
echo "📦 Installing dependencies..."
pnpm install

# Initialize Husky
echo "🐕 Setting up Husky..."
pnpm exec husky init

# Ensure pre-commit runs lint instead of test
if [ -f .husky/pre-commit ]; then
    # Replace common defaults with lint; support both pnpm and npm variants (macOS sed)
    if grep -q "pnpm test" .husky/pre-commit || grep -q "npm test" .husky/pre-commit; then
        sed -i '' -e 's/pnpm test/pnpm lint/g' -e 's/npm test/pnpm lint/g' .husky/pre-commit
    else
        echo "pnpm lint" >.husky/pre-commit
    fi
    chmod +x .husky/pre-commit
fi

# Ensure pre-push runs build
if [ -f .husky/pre-push ]; then
    if grep -q "pnpm build" .husky/pre-push; then
        : # already set
    elif grep -q -e "pnpm test" -e "npm test" -e "pnpm lint" -e "npm run build" -e "npm build" .husky/pre-push; then
        sed -i '' \
            -e 's/pnpm test/pnpm build/g' \
            -e 's/npm test/pnpm build/g' \
            -e 's/pnpm lint/pnpm build/g' \
            -e 's/npm run build/pnpm build/g' \
            -e 's/npm build/pnpm build/g' .husky/pre-push
    else
        printf "\npnpm build\n" >>.husky/pre-push
    fi
else
    echo "pnpm build" >.husky/pre-push
fi
chmod +x .husky/pre-push

echo "✅ Setup complete!"
echo ""
echo "🧪 Test: git add . && git commit -m 'test'"
