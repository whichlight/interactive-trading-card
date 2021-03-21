const contractAddress = '0xb3231549e2e0AB1e370aaf804694120abC6E76fd';

const contractABI = [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_pieceHash",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "changeOwner",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getOwner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getPieceHash",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

function connectWeb3() {
  const web3 = new Web3('http://127.0.0.1:8545');
  const contract = new web3.eth.Contract(contractABI, contractAddress);

  return Promise.all([
    contract.methods.getOwner().call(),
    contract.methods.getPieceHash().call()
  ]).then(([owner, pieceHash]) => ({
    owner,
    pieceHash
  }))
}

connectWeb3().then(({ owner, pieceHash }) => {
  console.log('owner:', owner);
  console.log('pieceHash:', pieceHash);
})