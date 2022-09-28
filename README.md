# Create Tezos Dapp

Demo video: 

I really like [create-react-app](https://github.com/facebook/create-react-app). You can just run `npx create-react-app` in your terminal and it will bootstrap a simple react application for you. It is used by thousands of developers around the world to easily get started with a new react project.

On the other hand, when I start building a new Tezos Dapp, I always have to copy/paste some Tezos elements from my other projects and recode a whole boilerplate, so I thought: It would be very usefull to have the equivalent of `create-react-app` but for Tezos. Introducing `create-tezos-dapp`!

## About create-tezos-dapp

As part of the *Builders For Builders* track, I've created a package that can bootstrap a basic Tezos Dapp with just one command: `npx create-tezos-dapp`. No need to install anything.

I've deployed `tezos-template` and `create-tezos-dapp` packages on npm: https://www.npmjs.com/search?q=create-tezos-dapp, so as long as you have *node* and *npm* installed, you can just run :

```sh
npx create-tezos-dapp my-dapp
cd my-dapp
npm start
```

Then open [http://localhost:3000/](http://localhost:3000/) to see your dapp.<br>
Modify the code to build your Dapp, then when you’re ready to deploy to production, create a minified bundle with `npm run build`.

## Addtional options

If you more of a `yarn` person than an `npm` person, you can also use `yarn create tezos-dapp`

I've also created and deployed a typescript version at `tezos-template-typescript`. To use it, run `npx create-tezos-dapp --typescript`

## How it's made

`create-tezos-dapp` is a fork of `create-react-app` but with a Tezos template. So far, I've only coded a basic template in Javascript that allows you to create a simple Tezos Dapp, but we plan on adding options later via an Tezos grant.
