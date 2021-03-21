
class DomUtils {
  constructor() {
    this.changeOwnerForm = document.querySelector('#change-owner-form');
    this.input = document.querySelector('#new-owner');
    this.noWeb3Message = document.querySelector('#no-web3');
    this.ownerAddress = document.querySelector('#owner-address')
    this.ownerInfo = document.querySelector('#owner-info')
    this.ownerSection = document.querySelector('#owner-section')
    this.submitButton = document.querySelector('#submit-button');
    this.logo = document.querySelector('#logo');
    this.web3Info = document.querySelector('#web3-info');
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

  getSubmitButton() {
    return this.submitButton;
  }

  getInputValue() {
    return this.input.value;
  }

  showChangeOwnerForm() {
    return this.changeOwnerForm.classList.remove('hidden')
  }

  hideChangeOwnerForm() {
    return this.changeOwnerForm.classList.add('hidden')
  }

  getLogo() {
    return this.logo;
  }

  hideWeb3Info() {
    this.web3Info.classList.add('hidden')
    this.ownerSection.classList.remove('open')
  }

  showWeb3Info() {
    this.web3Info.classList.remove('hidden')
    this.ownerSection.classList.add('open')
  }
}



