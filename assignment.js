//  https://github.com/Ruman-Islam/assignment-javascript-1



// LENGTH CONVERTER .........................................

function kilometerToMeter(kilommeter) {
    if (kilommeter >= 0 && kilommeter != -1) {
        var meter = 0;
        meter = kilommeter * 1000;
        
        return meter;
    }
    else {
        return "Distance can't be negative"
    }
}

var result = kilometerToMeter();
console.log(result);



// BUDGET CALCULATOR .......................................

function budgetCalculator(watch, phone, laptop) {
    var price1 = watch * 50;
    var price2 = phone * 100;
    var price3 = laptop * 500;
    var totalPrice = price1 + price2 + price3;

    return totalPrice;    
}

var result = budgetCalculator(2, 2, 3);
console.log(result);



// COSTING FOR STAYING IN A HOTEL.....................................  

function hotelCost(day) {
    var cost = 0;

    if (day <= 10) {
        cost = day * 100;

        return cost;
    }
    else if (day <= 20) {
        var firstTotal = 10 * 100;
        var remaining = day - 10;
        var secoendTotal = remaining * 80;
        cost = firstTotal + secoendTotal;

        return cost;
    }
    else {
        var firstTotal = 10 * 100;
        var secoendTotal = 10 * 80;
        var remaining = day - 20;
        var thirdTotal = remaining * 50;
        cost = firstTotal + secoendTotal + thirdTotal;

        return cost;
    }
}

var result = hotelCost(71);
console.log(result);





// LARGEST NAME IN A FRIENDZONE .........................................

function megaFriend(names) {
    var largestName = names[0];

    for (var i = 0; i < names.length; i++) {
        var element = names[i];

        if (element.length > largestName.length) {
            largestName = element;
        }
    }
    return largestName;
}


var result = megaFriend(["Anik Miah", "Parvej Rahman", "Aurko Ahmed", "Jawad Islam"]);
console.log(result);