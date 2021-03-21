## Confetti Vortex

### To run
1. Install node, npm and ipfs
2. run `npm i -g ganache-core ganache-cli truffle`
3. run `ganache-cli` to start local chain
4. Go to remix and paste contract code in: https://remix.ethereum.org, use "Web3 Provider" environment
5. Compile contract and copy ABI
6. Add files to IPFS, make note of root hash
7. Deploy contract to local chain, using root hash from IPFS step
8. Make note of contract address
9. Copy contract address into web3.js file `contractAddress` variable
10. Open the `index.html` file in your browser
11. You will have the piece's owner and the piece's hash logged to the console
