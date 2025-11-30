# CI/CD Automation - Complete Guide

## ✅ Setup Complete!

Your portfolio is now connected to **GitHub** and **Vercel** with automatic deployment!

---

## 🚀 How to Deploy Changes

### **Method 1: Full Deploy (Recommended)**

Builds the project, tests it, then deploys:

```bash
./deploy.sh "وصف التغييرات"
```

**أو بدون رسالة (سيضع تاريخ ووقت تلقائياً):**
```bash
./deploy.sh
```

**Example:**
```bash
./deploy.sh "Added new blog article about AI"
```

**This will:**
1. ✅ Build the project (`npm run build`)
2. ✅ Add all changes to git
3. ✅ Commit with your message
4. ✅ Push to GitHub
5. ✅ Vercel auto-deploys (1-2 minutes)

---

### **Method 2: Quick Update**

For content changes only (no build check):

```bash
./quick-update.sh "رسالة مختصرة"
```

**Example:**
```bash
./quick-update.sh "Fixed typo in blog"
```

**Faster but skips build testing!**

---

### **Method 3: Using npm scripts**

```bash
# Full deploy with build
npm run deploy

# Quick update without build
npm run update

# Another quick option
npm run quick-push
```

---

### **Method 4: Manual (Traditional)**

```bash
# Build first (optional)
npm run build

# Add changes
git add .

# Commit
git commit -m "Your message"

# Push to GitHub
git push

# Vercel auto-deploys!
```

---

## 📝 Common Workflows

### **Adding a New Blog Article**

1. Edit `data/blog/posts.json`
2. Add your article
3. Deploy:
```bash
./deploy.sh "Added new article: React vs Vue"
```

### **Updating Project Images**

1. Add images to `public/projects/`
2. Update `components/projects.tsx`
3. Deploy:
```bash
./deploy.sh "Updated project images"
```

### **Changing Content**

1. Edit any content file
2. Quick update:
```bash
./quick-update.sh "Updated about section"
```

### **Design Changes**

1. Edit CSS/components
2. Full deploy (with build test):
```bash
./deploy.sh "Redesigned hero section"
```

---

## 🔄 Auto-Deployment Flow

```
Local Changes
    ↓
./deploy.sh
    ↓
npm run build (tests)
    ↓
git add + commit
    ↓
git push to GitHub
    ↓
Vercel detects push
    ↓
Vercel builds & deploys
    ↓
Live in 1-2 minutes! 🎉
```

---

## 🛠️ Troubleshooting

### **"Build failed" error**

```bash
# Test build locally first
npm run build

# Fix errors, then deploy
./deploy.sh "Fixed build errors"
```

### **"Permission denied" when running scripts**

```bash
# Make scripts executable
chmod +x deploy.sh
chmod +x quick-update.sh
```

### **"Everything up-to-date" message**

No changes to deploy. This is normal if you haven't edited anything.

### **Push fails - Authentication error**

GitHub may require a **Personal Access Token**:

1. Go to GitHub → Settings → Developer settings → Personal access tokens
2. Generate new token (classic)
3. Select `repo` scope
4. Copy token
5. Use token as password when prompted

Or configure credential helper:
```bash
git config --global credential.helper osxkeychain
```

---

## 📊 Monitoring Deployments

### **Check Vercel Dashboard**

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. See deployment status
3. View build logs
4. Check deployment preview

### **Check GitHub**

1. Go to your repository
2. See commit history
3. Verify pushes

---

## 🎯 Best Practices

### ✅ **DO:**
- Use `./deploy.sh` for important changes (tests build)
- Write descriptive commit messages
- Test locally before deploying (`npm run build`)
- Deploy frequently (small changes)

### ❌ **DON'T:**
- Don't commit `.env.local` (already in .gitignore)
- Don't deploy broken code
- Don't use generic messages like "update"
- Don't skip build testing for code changes

---

## 🔐 Environment Variables

Already configured on Vercel:
- ✅ `NEXT_PUBLIC_GA_MEASUREMENT_ID` = `G-3FPJQHZ97M`

To add more:
```bash
# Via Vercel Dashboard
Vercel → Project → Settings → Environment Variables

# Or via CLI
vercel env add VARIABLE_NAME
```

---

## 📈 Deployment Stats

- ⚡ Average build time: **1-2 minutes**
- 🌐 Auto-deploy on every push
- 🔄 Unlimited deployments (free tier)
- 🌍 Global CDN
- 📱 Mobile-optimized
- 🔒 HTTPS by default

---

## 🚀 Quick Commands Cheat Sheet

```bash
# Deploy with build check
./deploy.sh "message"

# Quick update (no build)
./quick-update.sh "message"

# Using npm
npm run deploy
npm run update

# Manual
git add . && git commit -m "msg" && git push

# Check status
git status

# View commit history
git log --oneline -5

# View remote URL
git remote -v
```

---

## ✨ What's Automated

✅ **Build Process** - Automatic on Vercel  
✅ **Deployment** - Automatic after push  
✅ **SSL Certificate** - Automatic  
✅ **Cache Invalidation** - Automatic  
✅ **Preview Deployments** - For branches  
✅ **Rollback** - One click on Vercel  

---

## 🎉 You're All Set!

Now you can:
1. Make changes locally
2. Run `./deploy.sh "what you changed"`
3. Wait 1-2 minutes
4. See changes live!

**That's it! Fully automated CI/CD pipeline!**

---

**Need help?**
- Check Vercel logs for deployment issues
- Run `npm run build` locally to test
- Check GitHub for push confirmation
