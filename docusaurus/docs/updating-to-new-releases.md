---
id: updating-to-new-releases
title: Updating to New Releases
---

Create Tezos Dapp is divided into two packages:

- `create-tezos-dapp` is a global command-line utility that you use to create new projects.
- `tezos-scripts` is a development dependency in the generated projects (including this one).

When you run `npx create-tezos-dapp my-app` it automatically installs the latest version of Create Tezos Dapp.

> If you've previously installed `create-tezos-dapp` globally via `npm install -g create-tezos-dapp`, please visit [Getting Started](getting-started.md) to learn about current installation steps.

Create Tezos Dapp creates the project with the latest version of `tezos-scripts` so you’ll get all the new features and improvements in newly created apps automatically.

To update an existing project to a new version of `tezos-scripts`, [open the changelog](https://github.com/waylad/create-tezos-dapp/blob/main/CHANGELOG.md), find the version you’re currently on (check `package.json` in this folder if you’re not sure), and apply the migration instructions for the newer versions.

In most cases bumping the `tezos-scripts` version in `package.json` and running `npm install` (or `yarn install`) in this folder should be enough, but it’s good to consult the [changelog](https://github.com/waylad/create-tezos-dapp/blob/main/CHANGELOG.md) for potential breaking changes.

We commit to keeping the breaking changes minimal so you can upgrade `tezos-scripts` painlessly.
