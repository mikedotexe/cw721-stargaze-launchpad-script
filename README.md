# Basic scripts

In an effort to help the community, we're going to make scripts that show how easy it is to query NFT smart contracts on Cosmos.

Currently, the [cw-721](https://github.com/CosmWasm/cw-nfts/tree/main/packages/cw721) and [sg-721](https://github.com/public-awesome/stargaze-contracts/tree/main/contracts/sg721) examples exist and are quite similar.

The main script is `index.js` which shows querying a cw-721 contract on Juno testnet, then discovering an sg-721 address from a [Stargaze Launchpad](https://app.stargaze.zone/launchpad) URL.

(Note: on the Stargaze Launchpad site, you may click on the image of a collection and be brought to a URL like the one used here.)

## Running

    npm i
    node index.js
