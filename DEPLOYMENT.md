# Deployment Guide — vizagairportcabs.in

This project is configured for automatic deployment to Hostinger via GitHub Actions + FTP.

## How it works

Every time you push to the `main` branch on GitHub, GitHub Actions:
1. Installs dependencies
2. Builds the Vite production bundle into `dist/`
3. Uploads the contents of `dist/` to `public_html/` on Hostinger via FTP

You can also trigger a manual deploy from the GitHub Actions tab.

## Initial setup (one-time)

The FTP deploy uses 3 GitHub repository secrets:

| Secret | Value |
|---|---|
| `HOSTINGER_HOST` | `147.93.17.17` (from your hPanel) |
| `HOSTINGER_USERNAME` | `u649594474.vizagairportcabs.in` |
| `HOSTINGER_PASSWORD` | Your FTP password |

### Add the secrets

1. Go to https://github.com/5xfuture-Mahasana/vizag-airport-cabs/settings/secrets/actions
2. Click **"New repository secret"** for each of the 3 secrets above.

> If you ever rotate your Hostinger FTP password, update `HOSTINGER_PASSWORD` here too.

## Pushing changes from your IDE

From the project root in your terminal:

```bash
git add -A
git commit -m "Describe your change"
git push origin main
```

GitHub Actions will pick up the push and deploy automatically (1–2 minutes later).

To check deploy status: https://github.com/5xfuture-Mahasana/vizag-airport-cabs/actions

## Local development

```bash
npm install      # install dependencies
npm run dev      # start dev server at http://localhost:3000
npm run build    # build production bundle into dist/
npm run preview  # preview the built site locally
```

## Notes

- The build target is `dist/` — only `dist/` contents are uploaded to Hostinger.
- `dist/` is gitignored, so each deploy rebuilds from source.
- If Hostinger shows a stale page after deploy, clear Hostinger's cache (hPanel → Dashboard → Cache → Clear cache).