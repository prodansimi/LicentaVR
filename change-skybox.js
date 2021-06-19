AFRAME.registerComponent('change-skybox', {
init: function() {
  var scene = document.querySelector('a-scene');
  var skybox = scene.querySelector('#skybox');
  var index = 2;

  this.el.addEventListener('click', function (evt) {
    var assets = scene.querySelector('a-assets')
    var previousVideo = assets.querySelector('#video' + (index-1))
    var currentVideo = assets.querySelector('#video' + index)
    
    if (index <= 5) {
	skybox.setAttribute('src', '#video' + index);
	currentVideo.play();
	previousVideo.pause();
	index++;
    }
  }); 
}
});
