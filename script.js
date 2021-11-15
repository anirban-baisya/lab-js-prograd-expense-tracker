let balance = 0.00;
let income = 0.00;
let expense =0.00;
function addStorage()
{
    var text=document.getElementById("text").value;
    var amount= parseFloat(document.getElementById("amount").value);
    localStorage.setItem(text,amount);

    //document.getElementById('list').innerHTML+=text+"........."+amount + '<br>';
    
    if(amount>= 0){
        income+= amount;
        document.getElementById('money-plus').innerHTML="+$"+income;

        document.getElementById("list").innerHTML+=`<li class="plus">${text}_______________${amount}</li>`; //retriving local stroag data
    }
    else{
        expense+= amount;
        document.getElementById('money-minus').innerHTML="$"+expense;

        document.getElementById("list").innerHTML+=`<li class="minus">${text}_______________${amount}</li>`;

    }

    balance= income+expense;
    document.getElementById('balance').innerHTML="$"+balance;





}