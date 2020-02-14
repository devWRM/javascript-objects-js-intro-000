var playlist = {
  artist: "song"
}

function updatePlaylist(obj, name, songTitle) {

  return Object.assign({}, obj, {[name]: songTitle});
}
