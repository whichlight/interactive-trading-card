
class DomUtils {
  constructor() {
    this.ownerInfo = document.querySelector('#owner-info')
    this.input = document.querySelector('#new-owner');
    this.ownerAddress = document.querySelector('#owner-address')
    this.submitButton = document.querySelector('#submit-button');
    this.noWeb3Message = document.querySelector('#no-web3');
  }

  renderOwner(owner) {
    this.ownerAddress.innerText = owner;
  }

  showOwnerInfo() {
    this.ownerInfo.classList.remove('hidden');
  }

  showNoWeb3Message() {
    this.noWeb3Message.classList.remove('hidden');
  }

  hideOwnerInfo() {
    this.ownerInfo.classList.add('hidden');
  }

  hideNoWeb3Message() {
    this.noWeb3Message.classList.add('hidden');
  }

  getCloseButton(wrapperId) {
    return document.querySelector(`#${wrapperId} #close-button`);
  }

  getNoWeb3Message() {
    return this.noWeb3Message;
  }
}



