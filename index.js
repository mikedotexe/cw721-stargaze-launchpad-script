const { CosmWasmClient } = require("@cosmjs/cosmwasm-stargate")

async function start() {
  // Strange Clan testnet NFT contract
  let nftAddress = 'juno1j7t02c3zrcl8gcqp3ltyfu3aeug4xew3cy4s2rqa5c0d9arqzdvsg738xp'
  let rpcEndpoint = 'https://rpc.uni.juno.deuslabs.fi' // Juno testnet
  let cosmClient = await CosmWasmClient.connect(rpcEndpoint)
  let nftInfo = await cosmClient.queryContractSmart(nftAddress, {
    contract_info: { },
  })
  console.log('Strange Clan NFT info', nftInfo)

  // Now Stargaze mainnet, based on the Stargaze Launchpad URL
  // Women from Cosmos NFT address
  const stargazeLaunchpadURL = 'https://app.stargaze.zone/launchpad/stars1lndsj2gufd292c35crv97ug2ncdcn9ys4s8e94wlxyeft6mt3k2svkwps9'
  const stargazeLaunchpadRegex = /^https:\/\/app.stargaze.zone\/launchpad\/(stars\w*)/
  const regexMatches = stargazeLaunchpadRegex.exec(stargazeLaunchpadURL)
  // [0] is the string itself, [1] is the (stars\w*) capture group
  nftAddress = regexMatches[1]
  rpcEndpoint = 'https://rpc.stargaze-apis.com'
  cosmClient = await CosmWasmClient.connect(rpcEndpoint)
  // First get config
  let launchpadInfo = await cosmClient.queryContractSmart(nftAddress, {
    config: { },
  })
  /* Will output:
  Women from Cosmos NFT info {
    admin: 'stars1haql8s8dnn02nz5xjrwmamhskquz3aheqsjafq',
    base_token_uri: 'ipfs://bafybeigftycpwqatu6h3ayz3ziuehi3cafljbobsnxhirb6kqil2b4m6eu/metadata',
    num_tokens: 42,
    per_address_limit: 1,
    sg721_address: 'stars1n08lr7w2tkpd8m79hmt3ex7076awk77qysdzlg70a35agwzznwzqwgfq0j',
    sg721_code_id: 1,
    start_time: '1647162000000000000',
    unit_price: { denom: 'ustars', amount: '600000000' },
    whitelist: 'stars14y89386w0t055pnlwpy8gdt706nq0h39p7vct2kgzeldv5vxae9qzr700r'
  }
  */
  // Now use get the contract info for the NFT contract (key sg721_address)
  nftInfo = await cosmClient.queryContractSmart(launchpadInfo['sg721_address'], {
    contract_info: { },
  })

  console.log('Women from Cosmos NFT info', nftInfo)
}

start().then(() => {
  console.log('Done.')
})
