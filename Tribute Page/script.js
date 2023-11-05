var i=0;
var images=[];
var time= 2000;

images[0]='images/musk1.jpeg'
images[1]='images/musk2.jpeg'
images[2]='images/musk3.jpeg'
images[3]='images/musk4.jpeg'
images[4]='images/musk5.jpeg'
images[5]='images/musk6.jpeg'


function changeImg(){
    document.slide.src = images[i];
    if(i < images.length - 1){
        i++;
        } else {
            i = 0;}

        setTimeout('changeImg()',time);
     }
    

    window.onload= changeImg
            
            
               






