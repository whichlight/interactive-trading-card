cv.init().then(() => {
  cv.getOwner().then(owner => {
    domUtils.renderOwner(owner)
  });

  cv.getPieceHash().then(console.log);
  cv.isOwner().then(console.log);
})
