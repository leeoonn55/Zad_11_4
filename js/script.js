var outInfo = document.getElementById('infoo');

function Phone(brand, price, color, state) {
	this.brand = brand;	
	this.price = price;
    this.color = color;
    this.state = state;
}

Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " the price is " + this.price + " and is "+ this.state + ".");
}

var phone1= new Phone("Samsung Galaxy S6", 754, "red", "new");
var phone2= new Phone("iPhone 6s", 256, "blue", "used");
var phone3= new Phone("OnePlus One", 600, "whide", "wrong");

outInfo.innerHTML = phone1.printInfo();

phone2.printInfo();
phone1.printInfo();
phone3.printInfo();


