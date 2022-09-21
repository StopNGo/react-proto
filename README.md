# React Proto - React TypeScript Boilerplate

![node.js@16](https://img.shields.io/badge/node.js-16-339933?style=for-the-badge&logo=nodedotjs) ![typescript@4](https://img.shields.io/badge/typescript-4-3178C6?style=for-the-badge&logo=typescript) ![reactjs@18](https://img.shields.io/badge/Reactjs-18-61DAFB?style=for-the-badge&logo=react) ![webpack@5](https://img.shields.io/badge/webpack-5-8dd6f9?style=for-the-badge&logo=webpack) ![html@5](https://img.shields.io/badge/html-5-E34F26?style=for-the-badge&logo=html5) ![sass@1.5](https://img.shields.io/badge/sass-1.5-CC6699?style=for-the-badge&logo=sass)

<img align="right" width="100" src="src/assets/images/logo.png">

**Template React project with full TypeScrip and SSR support.**

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
- **webpack** 5+ (with optional **SWC** support and SSR or static build)
- **TypeScript** (with strict rules, including  webpack configuration)

SSR:

- **Express** (with render to stream option including helmet data and initial state pushing)

State:

- **Redux** 4+ (**ModX** as an option *coming soon*)

Router:

- **React Router**

Code Splitting:

- **Loadable Components** (SSR compatible)

API:

- **RTK Query**

Styles:

- **(S)CSS modules** (with TypeScript support)

Linters:

- **ESLint**
- **Stylelint** (including rules order)

Tests:

- **Jest** 29+
- **React Testing Library**
- Utility for Redux Testing
- One example of integration test of a component with user event and Redux

Other:

- API request caching (powered by RTK Query)
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

### React vs Preact

In `webpack\constants.ts` you can choose to use [Preact](https://preactjs.com/) library instead React itself (`IS_PREACT` boolean constant).


Preact is a fast and compact React-compatible Virtual DOM library. But because its community is much smaller, you can face with some incompatibility with React API and functionality, especially with new ones. Also some tests show some frame drops during moving a lot of elements. Below you can see a bundle size comparison of no-SSR version of the sample application of this repository (according to Webpack Bundle Analyzer):

|    |  React  | Preact   |
|----|----|----|
|  Parsed  |  263.77 KB  |  149.29 KB  |
|  Gzipped |  86.14 KB  |  50.38 KB  |

## Documentation

*Coming soon.*

One of the goals of this project is to provide some common solutions in React development and to clarify why they were chosen and how they work. So, such information will be present in this documentation in an orderly fashion.

## Changes

Detailed release notes for a given version can be found on [releases page](https://github.com/StopNGo/react-proto/releases).

## Feedback

I welcome any feedbacks, suggestions and questions related to this project.

You can leave them on [issues](https://github.com/StopNGo/react-proto/issues) or [discussions](https://github.com/StopNGo/react-proto/discussions) pages.

![Thank you!](http://media.riffsy.com/images/26d31721af290a7e42eae0498a4730a5/tenor.gif)

**Thank you!**
