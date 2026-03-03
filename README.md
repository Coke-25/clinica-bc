# Clinica B&C (Next.js)

Proyecto web en Next.js (App Router) preparado para despliegue estatico en GitHub Pages.

## Desarrollo local

```bash
npm install
npm run dev
```

Abrir `http://localhost:3000`.

## Build estatico

```bash
npm run build:pages
```

El sitio generado queda en `out/`.

Para previsualizarlo localmente:

```bash
npm run preview:pages
```

## Despliegue en GitHub Pages

El repositorio ya incluye workflow en `.github/workflows/deploy-pages.yml`.

1. Sube los cambios a la rama `main`.
2. En GitHub, entra en `Settings > Pages`.
3. En `Build and deployment`, selecciona `Source: Deploy from a branch`.
4. En `Branch`, selecciona `gh-pages` y carpeta `/(root)`.
5. El workflow `Deploy to GitHub Pages` publicara automaticamente al hacer push en `main`.

## Notas de configuracion

- `next.config.ts` usa `output: "export"` para generar sitio estatico.
- Se configura `basePath` y `assetPrefix` automaticamente en GitHub Actions para repositorios tipo `usuario/repo`.
- Si el repo es de tipo `usuario.github.io`, se publica en raiz sin subruta.
- Se incluye `public/.nojekyll` para evitar problemas con rutas de `_next`.
