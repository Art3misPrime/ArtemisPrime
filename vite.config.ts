import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set base to your GitHub repo name for GitHub Pages deployment
// e.g. if your repo is github.com/yourname/artemis-prime → base: '/artemis-prime/'
// For a custom domain or root deployment, set base: '/'
export default defineConfig({
  plugins: [react()],
  base: '/Art3misPrime/',
})
