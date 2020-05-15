let landingPage = document.querySelector('.landing-page'),
    imgArray = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];


// setInterval(() => {

//     let rundomNumber = Math.floor(Math.random() * imgArray.length);

//     landingPage.style.background = 'url("img/' + imgArray[rundomNumber] + '")';

// }, 3000);    
    

    function loop(){
        for (i = 0; i < imgArray.length; i++) {

            landingPage.style.background = 'url("../img/imgArray[i]")';
        }

        
    }
    loop();
loopTimer = setTimeout(loop, 3000);
