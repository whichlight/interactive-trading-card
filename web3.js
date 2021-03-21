const contractAddress = '0xa2A9495eF32eeE5dF84C94009c47783E4028f58f';

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

class ConfettiVortex {
  constructor() {
    this.contractAddress = contractAddress;

    if (typeof window.ethereum !== 'undefined') {
      console.log('We are in the browser and Metamask is running')
      window.web3 = new Web3(window.ethereum);
    }
  }

  init() {
    return this.getAccount().then(account => {
      this.contract = window.contract = new web3.eth.Contract(contractABI, this.contractAddress, {
        from: account
      });
    })
  }

  isOwner() {
    return Promise.all([this.getAccount(), this.getOwner()]).then(
      ([account, owner]) => account === owner
    );
  }

  getAccount() {
    return ethereum.request({ method: 'eth_requestAccounts' }).then(([account]) => account);
  }

  getOwner() {
    return this.contract.methods.getOwner().call().then(owner => owner.toLowerCase());
  }

  getPieceHash() {
    return this.contract.methods.getPieceHash().call();
  }

  changeOwner(newOwner) {
    return this.contract.methods.changeOwner(newOwner).send();
  }
}

const cv = new ConfettiVortex();

cv.init().then(() => {
  cv.getOwner().then(console.log)
  cv.getPieceHash().then(console.log)
  const web3 = new Web3('http://127.0.0.1:8545');
  web3.eth.personal.getAccounts().then((accounts) =>{
    let current_account = accounts[0];
    if(current_account==owner){
      console.log("this is the owner");
    } else {
      console.log("this is not the owner");
    }
  }))

  cv.isOwner().then(console.log)

