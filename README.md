# Dhana Lakshmi Loans — source export

## Run locally

Requirements: Node.js 20.9+ and pnpm 11.25.0.

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Project notes

- The Next.js App Router source is in `app/`, reusable UI in `components/`, and editable website content in `data/siteContent.js`.
- All six generated hero images are bundled under `public/images/`. In this ZIP export, the six carousel records in `data/siteContent.js` point to those local files.
- The live Manus project continues to use its Managed Storage URLs; only this portable ZIP copy uses local image paths.
- The enquiry form is a front-end demo: it validates fields in the browser but does not send or retain submitted details. Connect it to a verified DLL contact channel before accepting enquiries.
- Phone, email, business hours, customer reviews, and legal copy are intentionally marked as placeholders; replace them with verified, approved details before publication.
