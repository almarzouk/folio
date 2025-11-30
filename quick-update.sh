#!/bin/bash

# Quick Update Script - No Build Required
# للتحديثات السريعة بدون بناء المشروع

echo "⚡ Quick Update Mode..."
echo ""

# Commit message
if [ -z "$1" ]; then
    COMMIT_MSG="Quick update: $(date '+%Y-%m-%d %H:%M:%S')"
else
    COMMIT_MSG="$1"
fi

# Add, commit, push
git add -A
git commit -m "$COMMIT_MSG"
git push

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Update pushed to GitHub!"
    echo "🌐 Vercel will auto-deploy"
else
    echo "❌ Failed to push"
fi
