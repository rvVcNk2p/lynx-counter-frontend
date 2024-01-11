# Lynx Front End Home Task

Welcome to the Lynx Front End Home Task! In this task, you will create a React web app written in TypeScript that allows users to connect with their wallet and interact with a simple contract on the Ethereum Goerli blockchain.

## General Description

The goal is to build a simplified decentralized app (dapp) that interacts with the "CounterContract" on the Ethereum Goerli blockchain. This contract has a function called `increaseCounter` and three views:

- **globalCounter:** Indicates the total calls to the `increaseCounter` function by all users.
- **personalCounter:** Shows how many times the specific user called the `increaseCounter` function.
- **topUser:** Displays the address of the user who called `increaseCounter` the most, along with their `personalCounter` value.

Your task is to create an app that can connect to the contract, read values, and provide a simple user interface.

## Requirements

### Interactions

- [x] Display a button to connect the user's web3 wallet.
- [x] Display a button to trigger a transaction and call the `increaseCounter` function in the contract.

### Data Reading

- [x] Display the value of the `globalCounter` from the contract.
- [x] Display the value of the `personalCounter` for the connected wallet.
- [x] Display the address of the `topUser` and their `personalCounter` value.
  - [x] If the top user is the connected wallet, add a text saying "You are the top user!"
- [x] Display the number of times the `increaseCounter` function was called from the connected account.

### Reactivity

- [x] React to changes in the connected wallet and update information accordingly.
- [x] React to changes in the contract state without refreshing the page.

### Notes

- [x] Ensure the app works well and displays accurate information when changing the connected account.
- [x] Emphasize functionality over styling; a simple working UI is sufficient.

## Helpful Links

- [Creating Web3 wallet with MetaMask](https://metamask.io/)
- [Mine some native Goerli ETH](https://goerli-faucet.pk910.de/)
- Goerli RPC: https://ethereum-goerli.publicnode.com/
- [Ethers docs](https://docs.ethers.org/v6/getting-started/) (JS library for interacting with smart contracts)

## Contract Information

- [Contract on GoerliScan](https://goerli.etherscan.io/address/0x9c5ee22d08965c3a163c40aee4895e632c94bd6e#code)

  - Contract address: 0x9c5ee22d08965c3a163c40aee4895e632c94bd6e

- [Contract ABI](https://www.notion.so/Contract-ABI-b638f0ca57a44fefa96c0d1e74be04c0?pvs=21)

- [Contract](https://www.notion.so/Contract-b124a090763044b9a3ce616b71559812?pvs=21)
