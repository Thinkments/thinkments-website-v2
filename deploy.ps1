# ThinkMents Netlify Deployment Script for Windows
# Run this in PowerShell

Write-Host "🚀 ThinkMents Website - Netlify Deployment" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""

# Check if in correct directory
if (-not (Test-Path "package.json")) {
    Write-Host "❌ Error: package.json not found!" -ForegroundColor Red
    Write-Host "Please run this script from the project root directory." -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Example:" -ForegroundColor Yellow
    Write-Host "  cd C:\Users\dad\Desktop\ThinkMents_Website" -ForegroundColor Gray
    Write-Host "  .\deploy.ps1" -ForegroundColor Gray
    exit 1
}

Write-Host "✅ Found package.json" -ForegroundColor Green
Write-Host ""

# Step 1: Initialize Git
Write-Host "📁 Step 1: Initializing Git repository..." -ForegroundColor Yellow
if (-not (Test-Path ".git")) {
    git init
    Write-Host "✅ Git repository initialized" -ForegroundColor Green
} else {
    Write-Host "✅ Git repository already exists" -ForegroundColor Green
}
Write-Host ""

# Step 2: Add all files
Write-Host "📝 Step 2: Adding files to Git..." -ForegroundColor Yellow
git add .
Write-Host "✅ Files added" -ForegroundColor Green
Write-Host ""

# Step 3: Commit
Write-Host "💾 Step 3: Creating initial commit..." -ForegroundColor Yellow
git commit -m "Initial commit - ThinkMents website ready for Netlify"
Write-Host "✅ Commit created" -ForegroundColor Green
Write-Host ""

# Step 4: Prompt for GitHub
Write-Host "🔗 Step 4: GitHub Setup" -ForegroundColor Yellow
Write-Host ""
Write-Host "Have you created a GitHub repository yet? (y/n): " -NoNewline -ForegroundColor Cyan
$hasRepo = Read-Host

if ($hasRepo -eq "y" -or $hasRepo -eq "Y") {
    Write-Host ""
    Write-Host "Enter your GitHub repository URL:" -ForegroundColor Cyan
    Write-Host "Example: https://github.com/yourusername/thinkments-website.git" -ForegroundColor Gray
    $repoUrl = Read-Host

    git remote add origin $repoUrl
    git branch -M main
    
    Write-Host ""
    Write-Host "🚀 Pushing to GitHub..." -ForegroundColor Yellow
    git push -u origin main
    
    Write-Host "✅ Code pushed to GitHub" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "Please create a GitHub repository first:" -ForegroundColor Yellow
    Write-Host "1. Go to https://github.com/new" -ForegroundColor Gray
    Write-Host "2. Create a private repository named 'thinkments-website'" -ForegroundColor Gray
    Write-Host "3. Do NOT initialize with README or .gitignore" -ForegroundColor Gray
    Write-Host "4. Copy the repository URL" -ForegroundColor Gray
    Write-Host "5. Run this script again" -ForegroundColor Gray
    Write-Host ""
    exit 0
}

Write-Host ""
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "✅ Git Setup Complete!" -ForegroundColor Green
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Next Steps:" -ForegroundColor Yellow
Write-Host "1. Go to https://app.netlify.com" -ForegroundColor Gray
Write-Host "2. Click 'Add new site' → 'Import an existing project'" -ForegroundColor Gray
Write-Host "3. Choose GitHub and select your repository" -ForegroundColor Gray
Write-Host "4. Netlify will auto-detect settings from netlify.toml" -ForegroundColor Gray
Write-Host "5. Click 'Deploy site'" -ForegroundColor Gray
Write-Host ""
Write-Host "Your site will be live in 2-3 minutes!" -ForegroundColor Green
Write-Host ""

Write-Host "Press any key to exit..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
