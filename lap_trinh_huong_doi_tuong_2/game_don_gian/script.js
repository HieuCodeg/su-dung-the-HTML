
function Hero(image, top, left, size){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;

  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }

  this.moveRight = function(){
    this.left += 50;
    console.log('ok: ' + this.left);
  }
  this.moveDown = function() {
    this.top +=30;
    console.log('ok: ' + this.top);
  }
  this.moveLeft = function() {
    this.left -= 50;
  }
  this.moveUp = function() {
    this.top -= 30;
  }

}

var hero = new Hero('pokemon.png', 20, 30, 200);
let dem =1;
function start(){
  if(hero.left < window.innerWidth - hero.size && hero.top == 20){
    hero.moveRight();
  } 
  if(hero.left >= window.innerWidth - hero.size && hero.top < window.innerHeight - hero.size){
          hero.moveDown();
  }   
  if(hero.left >20  && hero.top >= window.innerHeight - hero.size){
          hero.moveLeft();
  }   
  if(hero.left <= 20 && hero.top >30){
    hero.moveUp();
  } 
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 100);
}

start();