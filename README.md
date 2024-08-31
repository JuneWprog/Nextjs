This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# 1. File System-Based Routing
## 1.1 Nested Route  ->nested folder
## 1.2 Dynamic Route ->products/[productId]
## 1.3 Nested Dynamic Route  ->products/[productId]/reviews/[reviewId]
## 1.4 Group Route ->(auth)/login  "()"
## 1.5 Intercept Route ->"(.)f2 /f1/f2" 
## 1.6 Parallel Route ->complex-dashboard/ slots: @notification @users @revenue
## 1.7 Parallel Intercepting Route
# 2. Special Files
## 2.1 loading
## 2.2 not-found (404 page)
## 2.3 error
## 2.4 Layout (share data across children) 
###2.4.1 Root Layout
## 2.5 template (not sharing data, create new instances)
# 3.  Data Fetching and Requests
## 3.1 GET
## 3.2 POST
## 3.3 PATCH
## 3.4 DELETE
# 4.  Rendering (SSR vs CSR)
# 5.  Metadata



