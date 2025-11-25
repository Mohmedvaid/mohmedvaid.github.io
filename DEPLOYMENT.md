# Deploying to GitHub Pages

This portfolio is a **100% static frontend website** - no backend server needed! It's configured to automatically deploy to GitHub Pages.

## Quick Setup

### 1. Enable GitHub Pages

1. Go to your GitHub repository: `https://github.com/mohmedvaid/mohmedvaid.github.io`
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: **GitHub Actions**
   - The workflow file is already included in `.github/workflows/deploy.yml`

### 2. Push Your Code

```bash
git add .
git commit -m "Deploy portfolio"
git push origin main
```

That's it! GitHub Actions will automatically:
- Build your site
- Deploy to GitHub Pages
- Your site will be live at `https://mohmedvaid.github.io/`

**Note**: Other apps like `/algo-visualizer/` are in separate repositories and won't be affected by this deployment.

## How It Works

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will:
1. Checkout your code
2. Install Node.js and dependencies
3. Build the static site (`npm run build`)
4. Deploy the `dist/` folder to GitHub Pages

## Manual Deployment (Alternative)

If you prefer to deploy manually:

```bash
# Build the static site
npm run build

# The static files are now in dist/
# You can manually copy these to your gh-pages branch or use GitHub CLI
```

## Configuration

The site is configured with:
- **Base URL**: `./` (relative paths) - works for root domain deployment
- **Build Output**: `dist/` folder
- **Port**: Vite default (5173) for local development

## Testing Locally

Before deploying, test locally:

```bash
# Development server
npm run dev
# Visit http://localhost:5173

# Preview production build
npm run build
npm run preview
# Visit http://localhost:5173
```

## Troubleshooting

**Assets not loading?**
- Make sure GitHub Pages is enabled with "GitHub Actions" as the source
- Check that the workflow ran successfully under the "Actions" tab
- Verify the build completed without errors

**Build failing?**
- Check the Actions tab for error logs
- Ensure all dependencies are in `package.json`
- Run `npm run check` locally to verify TypeScript compiles

**Site not updating?**
- Wait a few minutes for GitHub Pages to propagate changes
- Check the Actions tab to ensure the workflow completed successfully
- Clear your browser cache

## Repository Structure

This repository (`mohmedvaid.github.io`) serves the main portfolio site at the root domain.

Other projects are in separate repositories:
- `/algo-visualizer/` - Separate repo, deployed independently
- Other apps - Each in their own repository

This setup allows each project to be managed independently while all being accessible under your GitHub Pages domain.
