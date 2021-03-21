class ConfettiVortex {
  constructor() {
    if (typeof window.ethereum !== 'undefined') {
      console.log('We are in the browser and Metamask is running');
      window.web3 = new Web3(window.ethereum);
    }
  }

  init() {
    return this.getAccount().then(account => {
      this.contract = window.contract = new web3.eth.Contract(contractABI, contractAddress, {
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
  cv.getOwner().then(console.log);
  cv.getPieceHash().then(console.log);
  cv.isOwner().then(console.log);
})



