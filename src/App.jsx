node_modules/
build/
.env
.env.local
.DS_Store

{
  "name": "legends-choice",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test"
  },
  "eslintConfig": {
    "extends": ["react-app"]
  },
  "browserslist": {
    "production": [">0.2%", "not dead", "not op_mini all"],
    "development": ["last 1 chrome version", "last 1 firefox version", "last 1 safari version"]
  }
}

# Legends Choice — Premium Leadership Simulation

## Deployment

This is a React PWA. To deploy:

1. Push this folder to GitHub
2. Connect to Vercel (vercel.com) — import the GitHub repo
3. Vercel builds and deploys automatically

## Adding New Simulations

To add Malta or Athens:
1. Open `src/App.jsx`
2. Find the `SIMULATIONS` object
3. Update `valletta` or `athens` — set `comingSoon: false` and add modules
4. Push to GitHub → Vercel redeploys automatically

## Local Development

```
npm install
npm start
```

{
  "buildCommand": "react-scripts build",
  "outputDirectory": "build",
  "framework": "create-react-app",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
