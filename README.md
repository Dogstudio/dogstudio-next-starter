## Motley Crowd

The stack brings all the features you'll need to build a blazing-fast experience.

- Opinionated dependencies
- Next.js 10.x.x
- ESLint
- i18n
- Shaders
- SCSS/SASS
- CSS Modules
- Web Workers
- [**Custom SCSS toolkit**](/src/styles/kennel)

## Prerequisites

- [Node.js - LTS](https://nodejs.org/en/download/)

## Getting Started

```bash
git clone git@github.com:setsnail/motleycrowd-website.git motleycrowd-website
```

```bash
cd motleycrowd-website
cp .env.example .env.local
```

```bash
npm i
npm run dev
```

## Documentation

We recommend the following documentations to master the stack:

- [React](https://reactjs.org/docs/getting-started.html)
- [Next.js](https://nextjs.org/docs/getting-started)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [Localization](https://github.com/isaachinman/next-i18next/tree/master/examples/simple)

## References

```bash
# Run Next.js in development-mode with a local server.
# Visit http://localhost:3001 to see your application running.
npm run dev

# Run Next.js in production-mode and creates a production build.
npm run build

# Run Next.js in production-mode with a local server.
# Visit http://localhost:3001 to see your production build.
npm run start

# Lints all `.js` and `.jsx` files in `pages` and `src`.
# ESLint extends the `react-app` configurations.
npm run lint

# Sync locales namespaces with Locize
# See: https://github.com/locize/locize-cli
npm run i18n:sync

# Saves missing locales namespaces with Locize
# See: https://github.com/locize/locize-cli
npm run i18n:save

# Upgrade the dependencies and devDependencies with interactive mode
# See: https://www.npmjs.com/package/npm-check-updates
npm run upgrade
```
