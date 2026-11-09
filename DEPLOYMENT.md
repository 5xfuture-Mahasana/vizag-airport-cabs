# Deployment Guide — vizagairportcabs.in

This project is a Vite + React application. GitHub Actions builds the production files into `dist/` and uploads those files to Hostinger using explicit FTPS.

## How deployment works

Every push to the `main` branch triggers `.github/workflows/deploy.yml`:

1. Checks out the repository.
2. Installs dependencies with `npm ci`.
3. Builds the Vite app with `npm run build`.
4. Uploads the contents of `dist/` using FTPS.

A push to another branch (including `seo-fix`) does not deploy to the live website.

## Required GitHub Actions secrets

The workflow currently reads these exact secret names. Secret names are case-sensitive.

| Secret | What to enter |
|---|---|
| `FTP_SERVER` | The FTP host shown in Hostinger hPanel → Files → FTP Accounts / connection details. |
| `FTP_USERNAME` | The FTP account username shown in Hostinger. This is **not necessarily** the SSH username. |
| `FTP_PASSWORD` | The password for that FTP account. |

Add them under **GitHub → Settings → Secrets and variables → Actions → New repository secret**.

Do not put FTP or SSH passwords in repository files, commits, screenshots, or chat messages.

## Confirm the remote directory before the first live deployment

The workflow currently sets `server-dir: ./`. This is safe only if the FTP account's starting directory is the website's document root (the directory containing the live site's `index.html`, commonly `public_html`).

Before enabling production deployment, verify the FTP account's root directory in Hostinger. If it starts one level above the document root, update `server-dir` in the workflow to the correct relative path (for example, `./public_html/`). Do not guess this path.

The workflow uploads the contents of `dist/`, not the source files. Keep a backup of the current live document root before the first deployment.

## Deploying changes

From the project root:

```bash
git add -A
git commit -m "Describe your change"
git push origin main
```

Only pushes to `main` trigger production deployment. Review and merge tested changes from feature branches before deploying.

Check deployment status in the repository's **Actions** tab.

## Local verification

```bash
npm ci
npm run build
npm run preview
```

The production build output is `dist/`.

If the website still shows an older version after a successful deployment, clear the Hostinger website cache and browser cache.
