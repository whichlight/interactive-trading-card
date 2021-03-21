## Confetti Vortex

### To run
1. Install node, npm and ipfs
2. run `npm i -g ganache-core ganache-cli`
3. run `ganache-cli -q` to start local chain (-q is to quiet logs)
4. Go to remix and paste contract code in: https://remix.ethereum.org, use "Web3 Provider" environment
5. Compile contract and copy ABI, paste into `contractABI` variable in web3.js
6. Add project folder to IPFS, make note of root hash
7. Deploy contract to local chain, using root hash from IPFS step in constructor
8. Make note of contract address
9. Update config_update_this.js to config.js and add the contract address in there. 
10. Open the `index.html` file in your browser
11. You will have the piece's owner and the piece's hash logged to the console
