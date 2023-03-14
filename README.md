# React Proto - React TypeScript Boilerplate

![node.js@16](https://img.shields.io/badge/node.js-16-339933?style=for-the-badge&logo=nodedotjs) ![typescript@4](https://img.shields.io/badge/typescript-4-3178C6?style=for-the-badge&logo=typescript) ![reactjs@18](https://img.shields.io/badge/Reactjs-18-61DAFB?style=for-the-badge&logo=react) ![webpack@5](https://img.shields.io/badge/webpack-5-8dd6f9?style=for-the-badge&logo=webpack) ![sass@1.5](https://img.shields.io/badge/sass-1.5-CC6699?style=for-the-badge&logo=sass) ![ts-standard](https://img.shields.io/badge/standard-ts-F3DF49?style=for-the-badge&logo=standardjs)

<img align="right" width="100" src="src/assets/images/logo.png">

**Template React project with full TypeScript and SSR support.**

This project is a compilation of different approaches in React development that allows not only to start a new project quickly, but to learn how it works under the hood.

---

## Issue

Every new React developer knows that React is a library, not a complete framework. Thus, it provides maximum flexibility. However, a lot of knowledge is required to create a fully functional web application powered with React.

That is why there exist such a famous framework as [Next.js](https://nextjs.org/) as well as a tool [Create React App (CRA)](https://create-react-app.dev/).

Despite the advantages that such tools have, there are some cons that their user may face:

- Lack of understanding how exactly certain solutions work and why they are applied;
- Lack of flexibility: applied solutions are difficult to fine-tune to your needs;
- The complexity of the codebase of these tools.

As a result, novice React developers have two options for action:

1. Simply apply these tools and frameworks to get the product without going into the nuances of their implementation;
2. Independently collect bit by bit information on how to implement certain functions in React ecosystem.

Thus, the goal of this project is to **collect in one place all the most common methods of working with the React ecosystem** without being tied to a specific framework or tool like CRA.

## What's Inside

Core:

- **React** 18+ (**Preact** 10+ as an option, see [comparison](#react-vs-preact) below)
- **webpack** 5+ (with optional **SWC** support and SSR or static build; [why not Vite?](#why-not-vite))
- **TypeScript** (with strict rules, including webpack configuration)

SSR:

- **Express** (with render to stream option including helmet data and initial state pushing)

State:

- **Redux** 4+

Router:

- **React Router**

Code Splitting:

- **Loadable Components** (SSR compatible)

API:

- **RTK Query**

i18n (Internationalization):

- **Lightweight custom solution** based on Redux (with async loading and SSR support; [why not any common i18n package?](#why-not-any-common-i18n-package))

Styles:

- **(S)CSS modules** (with TypeScript support)

Linters:

- **TS Standard** (TypeScript Style Guide, with linter and automatic code fixer based on [StandardJS](https://standardjs.com/))
- **Stylelint** (including rules order)
- **Prettier**

Tests:

- **Jest** 29+
- **React Testing Library**
- Utility for Redux Testing
- One example of integration test of a component with user event and Redux

Other:

- API request caching (powered by RTK Query)
- Data prefetching on server side
- Hot reload (including state, style and server code hot reloading)
- VSCode support with error highlight and on save fixes
- Script for fast component creation
- Optional Service worker and offline status detector
- Webpack Bundle Analyzer

## The App

This boilerplate includes a simple application with:

- Several screen/pages with their own routes
- Local counter
- Global counter
- One of the components is dynamically loaded
- API requests
- Loading spinner
- Theme switcher (light and dark)
- Offline detector

Live preview:
[https://react-proto.onrender.com/](https://react-proto.onrender.com/)

(due to free hosting, a cold start could be slow)

![The App](src/assets/images/app.gif)

## How to Use

### Quick Start (SSR with hot reload)

1. Clone this repo:

   `git clone https://github.com/StopNGo/react-proto`

2. Install all packages:

   `npm i`

3. Run project in a development mode:

   `npm start`

4. Open your browser with the next address:

   `http://localhost:8080/`

### Build and run a server (SSR)

1. Build the project (production bundle will be in the `"dist"` folder):

   `npm run build`

   or with Webpack Bundle Analyzer report server:

   `npm run build:report`

2. Run a server:

   `npm run run`

3. You can test the server locally:

   `http://localhost:3000/`

### Static development mode with hot reload

- Just run the next command and browser will open automatically:

  `npm run start:static`

### Static production

- Run the next command and get a production bundle in the `"dist"` folder:

  `npm run build:static`

  or with Webpack Bundle Analyzer report server:

  `npm run build:static:report`

### Updating packages

All packages in this project are pinned to latest versions at the time of publishing to exclude version-based conflicts and errors and to guarantee proper work of the code in this repository.

If you want to update packages, do next:

```
npm install -g npm-check-updates
ncu -u
npm i
```

## Basic App Configuration

All configuration is available in files with constants:

- `webpack\constants.ts` - contains working directories, SWC option and other related to bundling staff
- `src\constants` - a directory with app files with configuration constants
- `src\server\constants.ts` - contains a server port and render to stream options

### Why not Vite

Vite is an excellent new generation bundler that could speed up your development process. However, you can face with some lack of flexibility and compatibility especially in big projects that need a lot of specific configurations. Also, webpack has many good plugins that are not compatible with Vite.

As for the speed: you can check this article - [Storybook Performance: Vite vs Webpack](https://storybook.js.org/blog/storybook-performance-from-webpack-to-vite/). As you can see - Webpack could still be fast enough. React Proto has such configurations. In `webpack\constants.ts` you can switch on SWC and Lazy Compilation.

Also, I'm looking forward to [Turbopack](https://turbo.build/pack) - the Rust-powered successor to Webpack. Now it is available only in Next.js, but I hope the future migration from the Wepback will be smooth because the principle of configuration should be the same.

### React vs Preact

In `webpack\constants.ts` you can choose to use [Preact](https://preactjs.com/) library instead React itself (`IS_PREACT` boolean constant).

Preact is a fast and compact React-compatible Virtual DOM library. But because its community is much smaller, you can face with some incompatibility with React API and functionality, especially with new ones. Also some tests show some frame drops during moving a lot of elements. Below you can see a bundle size comparison of no-SSR version of the sample application of this repository (according to Webpack Bundle Analyzer):

|         | React     | Preact   |
| ------- | --------- | -------- |
| Parsed  | 278.75 KB | 164.82 KB |
| Gzipped | 91.11 KB  | 55.59 KB |

### Why not any common i18n package?
You can freely integrate any React compatible i18n solution. But if React Proto already uses Redux and RTK, why just not use them for this task? Therefore, I have created a custom internationalization solution with a minimum additional code. It supports translations dynamic loading, server side rendering based on user acceptable languages, strict typing, etc. At the moment it just does not support string processing like pluralization, but it could easily be added later.
## Documentation

_Coming soon._

One of the goals of this project is to provide some common solutions in React development and to clarify why they were chosen and how they work. So, such information will be present in this documentation in an orderly fashion.

## Changes

Detailed release notes for a given version can be found on [releases page](https://github.com/StopNGo/react-proto/releases).

## Feedback

I welcome any feedbacks, suggestions and questions related to this project.

You can leave them on [issues](https://github.com/StopNGo/react-proto/issues) or [discussions](https://github.com/StopNGo/react-proto/discussions) pages.

![Thank you!](http://media.riffsy.com/images/26d31721af290a7e42eae0498a4730a5/tenor.gif)

**Thank you!**
