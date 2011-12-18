var images = ['0502.jpg', '0503.jpg', '0504.jpg', '0505.jpg']
              
function initGallery() {
	var gallery = document.getElementById('gallery')
	
	for (var image_source in images) {
		var image = new Image()
		image.src = image_source
		
		var html = "<img src='$image_source'/>"
			
		var image_node = document.createElement('img')
		image_node.setAttribute('src', image_source)
		gallery.appendChild(image_node)
	}
}