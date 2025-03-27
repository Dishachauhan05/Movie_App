import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "Movie_App",  // Ensure this is correct!
  plugins: [react()],
});
