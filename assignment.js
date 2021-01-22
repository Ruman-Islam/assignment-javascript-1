//  https://github.com/Ruman-Islam/assignment-javascript-1



//.................... LENGTH CONVERTER START .....................

function kilometerToMeter(kilometer) {    
    var meter = 0;
    if (kilometer < 0) {

        return "Distance can't be negative";
    }
    else {       
        meter = kilometer * 1000;
        
        return meter;
    }
}

//.................... LENGTH CONVERTER END .....................




//..................... BUDGET CALCULATOR START ..................

function budgetCalculator(watch, phone, laptop) {
    if (watch < 0 || typeof(watch) == "string" || phone < 0 || typeof(phone) == "string" || laptop < 0 || typeof(laptop) == "string") {

        return "invalid";
    }
    else {
        var price1 = watch * 50;
        var price2 = phone * 100;
        var price3 = laptop * 500;
        var totalPrice = price1 + price2 + price3;

        return totalPrice;  
    }    
}

//..................... BUDGET CALCULATOR END ..................





//................... TOTAL COSTING CALCULATOR START .................. 

function hotelCost(day) {
    var cost = 0;

    if (day < 0 || typeof(day) == "string") {

        return "invalid";
    }

    else if (day <= 10) {
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

//...................  TOTAL COSTING CALCULATOR END .................. 




//..................... LARGEST NAME IN AN ARRAY START ....................

function megaFriend(names) {
    var largestName = names[0];

    if (typeof(names) == "number") {
        
        return "invalid";
    }
    else {
        for (var i = 0; i < names.length; i++) {
            var element = names[i];
    
            if (element.length > largestName.length) {
                largestName = element;
            }
        }
        return largestName;
    }
}

//..................... LARGEST NAME IN AN ARRAY END ....................
