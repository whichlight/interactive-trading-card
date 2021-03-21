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
      this.submitButton = document.querySelector('#submit-button');
      this.input = document.querySelector('#new-owner');
      this.closeButton = document.querySelector('#close-button')
      this.ownerAddress = document.querySelector('#owner-address')
    }

    renderOwner(owner) {
      this.ownerAddress.innerText = owner;
    }

  }

  window.domUtils = new DomUtils();
})



