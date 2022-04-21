'use strict'



/*function tausta(background) {
  
  const body = document.querySelector('body');
 
  let image;
  if (background.url) {
    image = document.createElement('img');
    image.src = background.url;
    image.alt = background.explanation;
    body.appendChild(image);
  } else {
    image = document.createElement('img');
    image.src = 'defaultkuva.jpg';
    image.alt = 'error';
    body.appendChild(image);
  }

  //image.setAttribute("position", "fixed");
  //html.setAttribute("background-image", "url(\"" + s.url + "\")");

}
fetch('https://api.nasa.gov/planetary/apod?api_key=1RZqOOQSWmVECbPyRb3x7NRkO6JiEKqfbkSf5wGg')            
.then(function(vastaus){       
  return vastaus.json();       
}).then(function(background){       
  tausta(background);          
}).catch(function(error){      
  console.log(error);        
}) 
*/



function kuva(slide) {
  
  const main = document.querySelector('main');
  console.log(slide);
   
    const article = document.createElement('article');
    article.className = 'article';
    main.appendChild(article);

  let img;
  if (slide.photos) {
    
    const div = document.getElementsByClassName("slide");
    let img = document.createElement('img');
    let random = Math.floor(Math.random()*slide.photos.length);
    img.img_src = slide.photos[random].img_src;
    random = Math.floor(Math.random()*slide.photos.length);
    img = slide.photos[random].img_src;

    img.img_src.setAttribute("width", "500px");
    img.img_src.setAttribute("width", "500px");
    div.appendChild(img);
  } else {
    img.src = 'defaultkuva.jpg';
  }

  

}
fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=1RZqOOQSWmVECbPyRb3x7NRkO6JiEKqfbkSf5wGg')            
.then(function(vastaus){       
  return vastaus.json();       
}).then(function(slide){       
  kuva(slide);          
}).catch(function(error){      
  console.log(error);        
}) 