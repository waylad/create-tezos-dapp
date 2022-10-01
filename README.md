# Create Tezos Dapp

Demo video:

I've always been a big fan of [create-react-app](https://github.com/facebook/create-react-app). No need to install anything, just run `npx create-react-app` in your terminal and it will bootstrap a simple react application for you. It is used by thousands of developers around the world to easily get started with a new react project.

On the other hand, when building a Dapp with Tezos, it's very difficult to get started. You have to follow some tutorial or copy/paste some boilerplate... Introducing `create-tezos-dapp`!

## About create-tezos-dapp

As part of the _Builders For Builders_ track, I've created a package that can bootstrap a basic Tezos Dapp in 30 seconds with just one command: `npx create-tezos-dapp`.

For this, I've deployed `tezos-template` and `create-tezos-dapp` packages on npm at https://www.npmjs.com/search?q=create-tezos-dapp, so go ahead, try it now on your terminal by running :

```sh
npx create-tezos-dapp my-dapp
cd my-dapp
npm start
```

Then open [http://localhost:3000/](http://localhost:3000/) to see your dapp.

Modify the code to build your Dapp, then when you’re ready to deploy to production, create a minified bundle with `npm run build`.

The template is volontarily as simple as possible. It's the bare minimun to get started.

## Addtional options

If you more of a `yarn` fan than an `npm` fan, the command line is even more elgant: `yarn create tezos-dapp`

But wait there's more! I've also created and deployed a typescript version called `tezos-template-typescript`. To use it, run `npx create-tezos-dapp my-dapp --template typescript`

## Backlog for reaching completion

This tool is already complete! We deployed the 2 templates and deployment packages on https://www.npmjs.com/search?q=create-tezos-dapp so it can already be used publicly. Additional developments could include improvements of the templates or building new templates, e.g. focused on a specific application (NFT, DeFi, GameFi, etc...)
