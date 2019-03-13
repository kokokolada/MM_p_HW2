let index = 1;

var image1 =  new Image();
var image2 =  new Image();


function getNextPic() {
    if (index > 183) {            
        index = 1;
    } {
        index=index+1;
        image1.src = "images/tallinn600x450/tln_" + index + ".JPG";
        image1.style.opacity = "1";
        image2.style.opacity = "0";
    }  
}

function getPreviousPic() {
    if (index-1 <= 1) {
        index=184;
    } {
        index = index-1;
        image2.src = "images/tallinn600x450/tln_" + index + ".JPG";
        image2.style.opacity = "1";
        image1.style.opacity = "0";
    }  
}

image1.onload = function() {
 	document.getElementById("fotoKast").appendChild(image1);
	document.getElementById("fotoKast").appendChild(image2);   
  };
