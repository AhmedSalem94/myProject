var sliderimg = document.querySelector('.header');
var control = document.querySelectorAll('.ul li');
var next = document.querySelector('.next');
var back = document.querySelector('.back');

function x(){
for(var i = 0 ; i <= control.length -1; i++ ){
	control[i].addEventListener('click',function(){		
		if(this.classList !== "yas"){
			for(var x = 0 ; x <= control.length -1; x++){
				control[x].classList.remove('yas');
		var hh = document.querySelectorAll('.header img');
		hh[x].classList.remove('open');
					this.classList.add('yas');					
}					
		sliderimg.children[this.getAttribute('data-img')].classList="open";
		
}
});
}
}
x();
next.onclick = function(){
	if(sliderimg.children[0].classList == 'open'){
		sliderimg.children[0].classList.remove('open');
		control[0].classList.remove('yas');
		control[1].classList = 'yas';
		sliderimg.children[1].classList = 'open';
	
	}else if(sliderimg.children[1].classList == 'open'){
		sliderimg.children[1].classList.remove('open');
		control[1].classList.remove('yas');
		control[2].classList = 'yas';
		sliderimg.children[2].classList = 'open';
	
	}else if(sliderimg.children[2].classList == 'open'){
		sliderimg.children[2].classList.remove('open');
		control[2].classList.remove('yas');
		control[3].classList = 'yas';
		sliderimg.children[3].classList = 'open';
	
	
	}else if(sliderimg.children[3].classList == 'open'){
			
		sliderimg.children[3].classList.remove('open');
		control[3].classList.remove('yas');
		control[4].classList = 'yas';
		sliderimg.children[4].classList = 'open';
		
	
	}
	
}

back.onclick =function(){
	if(sliderimg.children[4].classList == 'open'){
		sliderimg.children[4].classList.remove('open');
		control[4].classList.remove('yas');
		control[3].classList = 'yas';
		sliderimg.children[3].classList = 'open';
	
	}else if(sliderimg.children[3].classList == 'open'){
		sliderimg.children[3].classList.remove('open');
		control[3].classList.remove('yas');
		control[2].classList = 'yas';
		sliderimg.children[2].classList = 'open';
	
	}else if(sliderimg.children[2].classList == 'open'){
		sliderimg.children[2].classList.remove('open');
		control[2].classList.remove('yas');
		control[1].classList = 'yas';
		sliderimg.children[1].classList = 'open';
	
	}else if(sliderimg.children[1].classList == 'open'){
		sliderimg.children[1].classList.remove('open');
		control[1].classList.remove('yas');
		control[0].classList = 'yas';
		sliderimg.children[0].classList = 'open';
					}
}


//start popup



	var gelryBox = document.querySelectorAll('.gelry-box img');
	let imgHeding = document.createElement('h2');
		for( var i = 0 ; i < gelryBox.length; i++ ){
			
			gelryBox[i].addEventListener('click' , function(){
				
				
				
				
				let overlay = document.createElement('div');
				overlay.className = 'popup-over';
				document.body.appendChild(overlay);
		
		let popupBox =document.createElement('div');
			popupBox.className =  'popup-box';
		
		if(this.alt !== null){
			
	imgHeding.textContent = "" ;
			
	let imgText = document.createTextNode(this.alt);
	
	imgHeding.appendChild(imgText);
			
	popupBox.appendChild(imgHeding);
		
			let  closeBuuton = document.createElement("span");
			let  closeText = document.createTextNode("X");
		
		closeBuuton.appendChild(closeText);
		closeBuuton.className = "close-buuton";
		popupBox.appendChild(closeBuuton);

			let spanNext = document.createElement('span');
				spanNext.className = "spanclass";
			let spanText = document.createTextNode('>>>');
				spanNext.appendChild(spanText);
			popupBox.appendChild(spanNext);
			

			
		}
		
		var popupImage = document.createElement('img');
			popupImage.src =this.src;
			popupBox.appendChild(popupImage);
			document.body.appendChild(popupBox);			
				
				
				
			});
		}
	

document.addEventListener('click', function(e){
			
if(e.target.className == 'close-buuton'){
				
e.target.parentNode.remove();
				
document.querySelector('.popup-over').remove();

				

}
	

	

var spanNexT = document.querySelector('.popup-box .spanclass');
	
	spanNexT.onclick = function(){
		var hideng = document.querySelector('.gelry-box h2');
		var imgPopUp =document.querySelector('.popup-box img');
		
		for(var i = 0 ; i < 7 ; i++){
			imgHeding.textContent = "";
			
		}
		
		
		if(gelryBox[0].getAttribute('num') == '0'){
			imgPopUp.src = gelryBox[1].getAttribute('data-span');
			gelryBox[0].setAttribute('num',"1");
			
			imgHeding.textContent = gelryBox[1].alt;
			

		
		}else if(gelryBox[1].getAttribute('num') == '1'){
			imgPopUp.src = gelryBox[2].getAttribute('data-span');
		gelryBox[1].setAttribute('num',"2");
	imgHeding.textContent = gelryBox[2].alt;
			
		}else if(gelryBox[2].getAttribute('num') == '2'){
			imgPopUp.src = gelryBox[3].getAttribute('data-span');
		gelryBox[2].setAttribute('num',"3");
			imgHeding.textContent = gelryBox[3].alt;
			
	}else if(gelryBox[3].getAttribute('num') == '3'){
			imgPopUp.src = gelryBox[4].getAttribute('data-span');
		gelryBox[3].setAttribute('num',"4");
		imgHeding.textContent = gelryBox[4].alt;

	}else if(gelryBox[4].getAttribute('num') == '4'){
			imgPopUp.src = gelryBox[5].getAttribute('data-span');
		gelryBox[4].setAttribute('num',"5");
		imgHeding.textContent = gelryBox[5].alt;
	
	}else if(gelryBox[5].getAttribute('num') == '5'){
			imgPopUp.src = gelryBox[6].getAttribute('data-span');
		gelryBox[5].setAttribute('num',"6");
		imgHeding.textContent = gelryBox[6].alt;
	
	}else if(gelryBox[6].getAttribute('num') == '6'){
			imgPopUp.src = gelryBox[7].getAttribute('data-span');
		gelryBox[6].setAttribute('num',"7");
		imgHeding.textContent = gelryBox[7].alt;
		
	}else if(gelryBox[7].getAttribute('num') == '7'){
			imgHeding.textContent = gelryBox[0].alt;
			imgPopUp.src = gelryBox[0].getAttribute('data-span');
				gelryBox[0].setAttribute('num',"0");
			gelryBox[1].setAttribute('num',"1");
			gelryBox[2].setAttribute('num',"2");
			gelryBox[3].setAttribute('num',"3");
			gelryBox[4].setAttribute('num',"4");
			gelryBox[5].setAttribute('num',"5");
			gelryBox[6].setAttribute('num',"6");
			gelryBox[7].setAttribute('num',"7");
			
	
			
	}
	
	}
	

	
	
	
	
	
	
});
	

//End popup

 
//start setInterval

				//all img
var interveal = document.querySelectorAll('.intrvl-box img');

setInterval(function x(){
	for(var i = 0; i <= interveal.length -1; i++){
		interveal[i].classList.remove('open');
	}
	
	var randomy = Math.floor(Math.random() * interveal.length);
	interveal[randomy].classList="open";
	console.log();
},4000);

//End setInterval



let  myRequest = new XMLHttpRequest();


myRequest.onreadystatechange =function(){
	
	if(this.readyState === 4 && this.status ===200){
			
			let y = JSON.parse(this.myRequest);
			
	}

};
myRequest.open('GET','https://ahmedsalem94.github.io/myProject/O.json',true);
myRequest.setRequestHeader("content-type","https://ahmedsalem94.github.io/myProject/O.json");
myRequest.send();

			
let man =y.name;
let many =y.aga;										
	
	let by = document.querySelector('.jsony');
	by.textContent = man + " : " + many; 
console.log(by);
console.log(many);