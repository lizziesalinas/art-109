// console.log('main.js loaded');

// let pageTitle = document.querySelector('#page-title');

// // header color change on timer
// setTimeout( function (){
//     pageTitle.style.color = 'brown';
// }, 3000);

// //click background color change
// document.querySelector('header').onclick = function(){
// document.querySelector('body').style.backgroundColor = 'lightblue';
// }

document.querySelector('#image-1').addEventListener('click', function(){
    document.querySelector('#image-2').style.visibility = 'visible';
    // document.querySelector('#image-1').style.display = 'none';
}
);

document.querySelector('#image-2').addEventListener('click', function(){
    document.querySelector('#image-3').style.visibility = 'visible';
}
);

document.querySelector('#image-3').addEventListener('click', function(){
    document.querySelector('#image-4').style.visibility = 'visible';
}
);

document.querySelector('#image-4').addEventListener('click', function(){
    document.querySelector('#image-5').style.visibility = 'visible';
}
);

document.querySelector('#image-5').addEventListener('click', function(){
    document.querySelector('#image-6').style.visibility = 'visible';
}
);

document.querySelector('#image-6').addEventListener('click', function(){
    document.querySelector('#image-7').style.visibility = 'visible';
}
);

document.querySelector('#image-7').addEventListener('click', function(){
    
}
);