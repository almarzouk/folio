#!/bin/bash

# Auto Deploy Script - CI/CD Automation
# الاستخدام: ./deploy.sh "commit message"

echo "🚀 Starting Auto Deployment..."
echo ""

# Check if commit message provided
if [ -z "$1" ]; then
    COMMIT_MSG="Auto update: $(date '+%Y-%m-%d %H:%M:%S')"
else
    COMMIT_MSG="$1"
fi

# Build the project
echo "📦 Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed! Fix errors before deploying."
    exit 1
fi

echo "✅ Build successful!"
echo ""

# Add all changes
echo "📝 Adding changes to git..."
git add -A

# Check if there are changes
if git diff --staged --quiet; then
    echo "ℹ️  No changes to commit"
    exit 0
fi

# Commit changes
echo "💾 Committing changes..."
git commit -m "$COMMIT_MSG"

# Push to GitHub
echo "⬆️  Pushing to GitHub..."
git push

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully deployed!"
    echo "🌐 Vercel will auto-deploy in 1-2 minutes"
    echo "📊 Check: https://vercel.com/dashboard"
else
    echo ""
    echo "❌ Push failed! Check your credentials or connection."
    exit 1
fi
