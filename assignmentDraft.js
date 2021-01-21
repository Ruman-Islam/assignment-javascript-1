// kiloMeterToMeter
// budgetCalculator
// hotelCost
// 


// LENGTH CONVERTER .........................................

function kilometerToMeter(num){
    if (num != "" && num > 0){
        var meter = 0;
        meter = num * 1000;
        return meter;
    }
    else {
        return "Length can't be negative"
    }
}

var result = kilometerToMeter(0);
console.log(result);







// TOTAL PRODUCT BUDGET CALCULATOR.......................................

function budgetCalculator(watch, phone, laptop) {
    var sum1 = watch * 50;
    var sum2 = phone * 100;
    var sum3 = laptop * 500;
    var total = sum1 + sum2 + sum3;

    return total;
    
}




//  HOW MUCH WILL COST FOR STAYING IN A HOTEL.....................................  

function hotelCost(day){
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