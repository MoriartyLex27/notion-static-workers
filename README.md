# Notion Static Starter – Shopify Business Blueprint

Menjalankan template Notion secara statis dan deploy ke Cloudflare Workers.

## 🚀 Deploy Otomatis ke Cloudflare Workers

1. Fork repo ini
2. Tambahkan secret ke repo:
   - CLOUDFLARE_API_TOKEN → dengan izin edit Workers
3. Edit wrangler.toml dengan:
   - account_id
   - name

## 🔧 Jalankan Lokal

```bash
npm install
npm run prefetch
npm run build
npm run export
wrangler publish
```
