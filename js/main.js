function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(() => {
  window.domUtils = new DomUtils();
  window.cv = new ConfettiVortex();

  cv.init().then(
    () => {
      cv.getOwner().then(owner => {
        domUtils.renderOwner(owner)
      });

      cv.isOwner().then(() => {
        domUtils.showOwnerInfo();
        domUtils.getCloseButton('owner-info').addEventListener('click', () => {
          domUtils.hideOwnerInfo()
        })
      });

      cv.getPieceHash().then(console.log);
    },
    () => {
      domUtils.showNoWeb3Message();
      domUtils.getCloseButton('no-web3').addEventListener('click', () => {
        domUtils.hideNoWeb3Message();
      })
    }
  )
})




