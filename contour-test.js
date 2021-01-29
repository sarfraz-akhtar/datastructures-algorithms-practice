function Animal(){}
Animal.prototype.sleep = function(){ console.log(this+" is sleeping" )}
function Cat(){}
Cat.prototype = Object.create(Animal.prototype);
var car = new Cat();