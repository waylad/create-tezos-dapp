# Create Tezos Dapp

Demo video: https://youtu.be/lj3RN8GLujU

I've always been a big fan of [create-react-app](https://github.com/facebook/create-react-app). No need to install anything (as long as you have _npm_), just run `npx create-react-app` in your terminal and it will bootstrap a simple react application for you. It is used by thousands of developers around the world to easily get started with a new react project.

On the other hand, when building a new Dapp on Tezos, it's very difficult to get started. You have to follow some tutorials, copy/paste some boilerplate, manage the webpack config and the damn polyfills, etc... It's exhausting... If only there was an easier way... Introducing `create-tezos-dapp`!

## About create-tezos-dapp

As part of the _Builders For Builders_ track, I've created a package that can bootstrap a basic Tezos Dapp in 30 seconds with just one command line: `npx create-tezos-dapp`.

For this, I have forked [create-react-app](https://github.com/facebook/create-react-app) and reworked it entirely to make `create-tezos-dapp`.

After that, I've deployed it in production on _npmjs.com_ at https://www.npmjs.com/search?q=create-tezos-dapp for it work for anyone in the world! Go ahead, open your terminal and just run:

```sh
npx create-tezos-dapp my-dapp
cd my-dapp
npm start
```

Then open [http://localhost:3000/](http://localhost:3000/) to see your dapp.

Modify the code to build your Dapp, then when you’re ready to deploy to production, create a minified bundle with `npm run build`.

## How it's made

This project is actually made of 4 packages, all deployed on _npmjs.com_:

- [create-tezos-dapp](https://www.npmjs.com/package/create-tezos-dapp) : This is the package called by the command `npx create-tezos-dapp`. It parses the command options and call the corresponding packages. By default, it uses _tezos-scripts_ for the webpack config and _tezos-template_ for the tamplate.

- [tezos-template](https://www.npmjs.com/package/tezos-template) : This is the code of the application that will be created for the user. The template is simple Dapp that connects to _Ghostnet_ with _Temple_ and allow you to mint some FA1.2 tokens. The code is volontarily as simple as possible. _create-tezos-dapp_, just like _create-react-app_ is supposed to deploy the bare minimun to get started without confusing the developer with difficult code.

- [tezos-template-typescript](https://www.npmjs.com/package/tezos-template-typescript) : This is the same as `tezos-template` but with typescript support. Some developers like myself prefer to work with Typescript. For this, just add `--template typescript` to the command line. e.g. `npx create-tezos-dapp my-dapp --template typescript`

- [tezos-scripts](https://www.npmjs.com/package/tezos-scripts) : _create-react-apps_ uses a package called _react-scripts_ to abstract the webpack configuration and hide it in the deployed app to make it easier for the developer to get started. Unfortunatly, the _Temple_ and _Taquito_ librairies use the `stream` package, which is a node.js libary and need some polyfills inserted into webpack when used in the frontend. It's quite hell for a novice developer to manage this, so I've created `tezos-scripts` which abstracts a webpack configuration especially made for a Tezos dapp and contaning the much dreaded polyfills to make the _Temple_ and _Taquito_ librairies work in the frontend. I've connected `tezos-scripts` in `create-tezos-dapp` in place of `react-scripts` so there's no additional work for the user.

## Yarn

If you more of a `yarn` fan than an `npm` fan, the command line to use `create-tezos-dapp` is even more elgant:

```
yarn create tezos-dapp my-dapp
```

## Backlog for reaching completion

This tool is already quite complete! We deployed the 2 templates and 2 deployment packages on https://www.npmjs.com/search?q=create-tezos-dapp so it can already be used publicly in production. Additional developments could include improvements of the current templates or building new templates, e.g. focused on a specific application (a template for NFTs, a template for DeFi, a template for GameFi, etc...)
