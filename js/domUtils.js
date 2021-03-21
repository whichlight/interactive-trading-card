function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(() => {
  class DomUtils {
    constructor() {
      this.changeOwnerForm = document.querySelector('#change-owner-form')
      this.closeButton = document.querySelector('#close-button')
      this.input = document.querySelector('#new-owner');
      this.ownerAddress = document.querySelector('#owner-address')
      this.submitButton = document.querySelector('#submit-button');
    }

    renderOwner(owner) {
      this.ownerAddress.innerText = owner;
    }

    showOwnerChangeForm() {
      this.changeOwnerForm.classList.remove('hidden');
    }
  }

  window.domUtils = new DomUtils();
})



