function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(() => {
  window.domUtils = new DomUtils();
  window.cv = new ConfettiVortex({
    onAccountChange: () => {
      cv.isOwner().then(isOwner => {
        if (isOwner) {
          domUtils.showChangeOwnerForm()
        } else {
          domUtils.hideChangeOwnerForm()
        }
      });
    }
  });

  cv.init().then(
    () => {
      cv.getOwner().then(owner => {
        domUtils.renderOwner(owner)
      });

      domUtils.getLogo().addEventListener('click', () => {
        domUtils.showWeb3Info();
      })

      cv.isOwner().then(isOwner => {
        if (isOwner) {
          domUtils.showChangeOwnerForm();
        }

        domUtils.showOwnerInfo();
        domUtils.getCloseButton('owner-info').addEventListener('click', () => {
          domUtils.hideWeb3Info()
        })
      });

      domUtils.getSubmitButton().addEventListener('click', () => {
        const inputValue = domUtils.getInputValue();

        if (inputValue) {
          cv.changeOwner(inputValue).then(
            () => domUtils.renderOwner(inputValue),
            error => console.error(error)
          );
        }
      })
    },
    () => {
      domUtils.showNoWeb3Message();
      domUtils.getLogo().addEventListener('click', () => {
        domUtils.showWeb3Info();
      })
      domUtils.getCloseButton('no-web3').addEventListener('click', () => {
        domUtils.hideWeb3Info();
      })
    }
  )
})




