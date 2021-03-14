function calculateTip(){
   //alert("Ready to Go!")
    resetTip();
    var billAmount = document.getElementById("amount").value;
    var service = document.getElementById("serviceQual").value;
    var tipPercentage = document.getElementById("tip").value;
    var numberOfPeople = document.getElementById("numberPeople").value; 

     //validate the bill amount field 
     if (billAmount === "" || service == 0) {
        alert("Please Enter Bill Amount (or) Service ");
        return;
    }



    // Calculate the total tip
    function tipCalc() {        
        let tipTotal = ((billAmount * 100) * tipPercentage) / 100;
        tipTotal = tipTotal.toFixed(2);
        return tipTotal;
     }

    // Call tipCalc()function.
    var totalTip = tipCalc();

    if (numberOfPeople > 1) {
        //alert("Ready to calculate multiple");
        document.getElementById("multiple").style.display = "block";
        let bill =  (billAmount / numberOfPeople);
        let tip = (totalTip / numberOfPeople);
        document.getElementById("totalTipMultiple").innerHTML = tip.toFixed(2);

        let amountEach =  parseFloat(tip) * numberOfPeople;
        document.getElementById("totalAmountEach").innerHTML = amountEach.toFixed(2);

        let multipleTotal = parseFloat(billAmount) + parseFloat(totalTip);
        document.getElementById("billTotalMultiple").innerHTML = multipleTotal.toFixed(2);
    }


     else{
        //alert("Ready to calculate single");
        document.getElementById("single").style.display = "block";
        let singleTotal = (parseFloat(billAmount) + parseFloat(totalTip));
        document.getElementById("tipAmount").innerHTML = totalTip;
        document.getElementById("billTotal").innerHTML = singleTotal.toFixed(2);

    }

}


resetTip();


//Hide the single and multiple blocks
function resetTip(){
    document.getElementById("single").style.display = "none";
    document.getElementById("multiple").style.display = "none";
}

function reset(){
    location.reload();
}