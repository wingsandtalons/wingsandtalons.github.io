function test() {
  alert("testing...");
}

function itemClicked(ref) {
  var id = ref.getAttribute("data-id");
  alert("item clicked:" + id);
  console.log("item clicked:" + id);
}

function playSound(id) {
  document.querySelector('#' + id + "_mp3").play();
}
