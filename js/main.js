cv.init().then(() => {
  cv.getOwner().then(owner => {
    domUtils.renderOwner(owner)
  });

  cv.isOwner().then(() => {
    domUtils.showOwnerChangeForm();
  });

  cv.getPieceHash().then(console.log);
})
