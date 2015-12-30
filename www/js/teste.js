function myFunction() {

	/* usado apenas caso seja decidido usar o tamanho fixo da tela 
	// e não o tamanho do navegador
	var screenW = 640, screenH = 480; 
	if (parseInt(navigator.appVersion)>3) { 
		screenW = screen.width; screenH = screen.height;
	} 
	else if (parseInt(navigator.appVersion)==3 && navigator.javaEnabled()){ 
		var jToolkit = java.awt.Toolkit.getDefaultToolkit(); 
		var jScreenSize = jToolkit.getScreenSize();
		screenW = jScreenSize.width; 
		screenH = jScreenSize.height; 
	} 

	var html = "Screen width = "+screenW+"<br>" +"Screen height = "+screenH;
	document.getElementById('output').innerHTML = html;
*/
	var src = "img/line.png";
	//var height = screenH/11;
	var i;
	    
	for (i = 0; i < 10; i++) {
	   	var img = document.createElement("img");
	    img.src = src;
	    //img.width = screenW;
	    //img.height = height;
	    var clientWidth = document.getElementById('image').clientWidth;
	    //document.getElementById('output').innerHTML = clientWidth;
	    
	    if (clientWidth < 500)
	    {
	    	document.getElementById("image").style.width = '100%';
	    	img.width = clientWidth;
	    }
	    else
	    {
	    	document.getElementById("image").style.width = '500px';
	    	img.width = 500;
	    }
	    
	    var clientHeight = document.getElementById('image').clientHeight;
	    img.height = clientHeight/11;

	    document.getElementById('image').appendChild(img);
	    // This next line will just add it to the <body> tag
	    //document.body.appendChild(img);
	   

	}

}