//Business logic
class Pizza{
    constructor(type, size, crust, toppings, delivery, orders){
        this.type = type;
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
        this.delivery = delivery;
        this.orders = orders;
        this.price = 500; 
    }

    pricePerType(){
        if (this.type === "lazzlo's veggie"){
            this.price = 400;
            return this.price;
        } else if (this.type === "meaty sundae"){
            this.price = 500;
            return this.price;
        } else if (this.type === "chicken spicey"){
            this.price = 600;
            return this.price;
        } else if (this.type === "crusty pepperoni"){
            this.price =300;
            return this.price;
        } else if (this.type === "mozarella raisin"){
            this.price =400;
            return this.price;
        } else if (this.type === "lazzlo's turkey tikka"){
            this.price =600;
            return this.price;
        }
    }

    pricePerSize(){
        let typePrice = this.pricePerType();
        if (this.size === "Mega"){
            typePrice +=700;
            return typePrice;
        } else if (this.size === "Large"){
            typePrice +=500;
            return typePrice;
        } else if (this.size === "Medium"){
            typePrice +=300;
            return typePrice;
        } 
    }

    chooseCrust(){
        if (this.crust === "pokin crust -thin"){
            return 50;
        } else if(this.crust === " St. Louis crust -squared"){
            return 100;
        }else if(this.crust === "flatbed crust"){
            return 50;
        } else if (this.crust === "lazzlo's crust special"){
            return 150;
        } else {
            return 0;
        }
    }

    toDeliver(){
        if (this.delivery === true){
            return 200;
        } else {
            return 0;
        }
    }

    getTotal(){
        let pricePerSizeAndType = this.pricePerSize();
        let crustPrice = this.chooseCrust();
        let extraToppingsPrice = this.addToppings();
        return pricePerSizeAndType + extraToppingsPrice + crustPrice;
    
    }

    quantityPrice(){
        let grossPrice = this.getTotal();
        return grossPrice * this.orders;
    }

    getTotalPlusDelivery(){
        let cumulativePrice = this.quantityPrice();
        let deliveryFee = this.toDeliver();

        return cumulativePrice + deliveryFee;
    }
}

$("#to-be-delivered").click(()=>{
    $("#location-hide").show();
});

$("#to-be-picked").click(()=>{
    $("#location-hide").hide();
});

$("#to-be-delivered2").click(()=>{
    $("#location-hide2").show();
});

$("#to-be-picked2").click(()=>{
    $("#location-hide2").show();
});

$("#get-price").click(()=>{
    $("#checkout").show();
});
$("#get-price2").click(()=>{
    $("#checkout2").show();
});
$("#get-price6").click(()=>{
    $("#checkout6").show();
});

let deliveryLocationA = $("#delivery-location").val();
let deliveryLocationB = $("#delivery-location2").val();
let deliveryLocationC = $("#delivery-location6").val();

$("#checkout").click(()=>{
    $("#where-to").text(deliveryLocationA);
    $("#alert").show();
});
$("#checkout2").click(()=>{
    $("#where-to2").text(deliveryLocationA);
    $("#alert2").show();
});
$("#checkout6").click(()=>{
    $("#where-to6").text(deliveryLocationA);
    $("#alert6").show();
});

//ui logic
$("#pizza-one-form").submit((event)=>{
    event.preventDefault();
    let pizzaName = $("#pizza-one-label").text();
    let pizzaSize = $("#size-selector").val();
    let crustType = $("#crust-selector").val();
    let toppingType = $("#topping-selector").val();
    let delivery = $("#to-be-delivered").is(":checked");
    let pickUp = $("#to-be-picked").is(":checked");

    const getDeliveryOption = () => {
        if (delivery == true && pickUp ==false){
            return true;
        }else if (delivery ==flase && pickUp ==true){
            return false;
        }
    }

    let optionOfDelivery = getDeliveryOption ();
    let pizzaQuantity =Number($("#pizza-quantity").val());

    //creating an instance of class Pizza

    let lazzlo= new Pizza (pizzaName, pizzaSize, crustType, toppingType, optionOfDelivery, pizzaQuantity);
    $("#total-price").text ("KES. " + lazzlo.getTotalPlusDelivery());
    $("#size-price").text("Size: " + lazzlo.pricePerSize());
    $("#crust-price").text("Crust: " + lazzlo.chooseCrust());
    $("#toppings-price").text("Toppings " + lazzlo.addToppings());
    $("#delivery-price").text("Delivery fee: " + lazzlo.toDeliver());
});

//second pizza
$("#pizza-two-form").submit((event)=>{
    event.preventDefault();
    let pizzaName = $("#pizza-two-label").text();
    let pizzaSize = $("#size-selector2").val();
    let crustType = $("#crust-selector2").val();
    let toppingType = $("#topping-selector2").val();
    let delivery = $("#to-be-delivered2").is(":checked");
    let pickUp = $("#to-be-picked2").is(":checked");

    const getDeliveryOption = () => {
        if ( delivery == true && pickUp == false){
            return true;
        } else if (delivery == false && pickUp == true){
            return false;
        }
    }

    let optionOfDelivery = getDeliveryOption();
    let pizzaQuantity = Number($("#pizza-quantity2").val());

    let meaty = new Pizza (pizzaName, pizzaSize, crustType, optionOfDelivery, pizzaQuantity);
    $("#total-price2").text ("KES. " + meaty.getTotalPlusDelivery());
    $("#size-price2").text("Size: " + meaty.pricePerSize());
    $("#crust-price2").text("Crust: " + meaty.chooseCrust());
    $("#toppings-price2").text("Toppings " + meaty.addToppings());
    $("#delivery-price2").text("Delivery fee: " + meaty.toDeliver());

});


