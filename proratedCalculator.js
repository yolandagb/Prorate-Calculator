
// We set a global variable with the price per month  and assuming every month has 30 days, we also set another variable for the total days of the month.
let totaldaysMonth = 30
const priceMonth = 30;

// We declare our  function that will calculate the prorate amount.
function calculateProrate(priceMonth){
//Here are declared dates from one of the inputs. We use Date object.

    let startDate = new Date('2024-09-01');
    let cancelDate = new Date('2024-09-16');

//The we move on to our logic to calculate the amount
    let daysLeft =  ((cancelDate - startDate)/1000)
        daysLeft = daysLeft/(60*60*24);
        daysLeft= (totaldaysMonth-daysLeft);
        priceDay = priceMonth/totaldaysMonth;
     
    let remainingPrice = priceDay*daysLeft;
        alert(remainingPrice); // from feedback:console.log works better
    return remainingPrice;
    
    }
// Finally we invoque our function to see the prorate amout.
    calculateProrate(priceMonth)


// Inputs that we used:
let startDate2 = new Date('2024-04-10')
let cancelDate2 = new Date('2024-04-16');
let startDate3 = new Date('2024-06-10');
let cancelDate3 = new Date('2024-06-11');

