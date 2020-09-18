window.onload=init;
function init (event)
{
    var button=document.querySelector("button");

    var userName = window.prompt("Please enter your name");
    if(userName) /* false if cancelled */
    {
        var name=document.querySelector("#name");
        name.innerHTML=', '+ userName;
    }

    button.addEventListener('click', function (event)
    {
        var first=document.querySelector("#first"); first=first.value;  first=Number(first); 
        var second=document.querySelector("#second"); second=second.value;  second=Number(second);
 

        var x=document.querySelectorAll(".x");
        var y=document.querySelectorAll(".y");

        x.forEach(function (curr) //curr=the current x (e.g. sum x). so, pasting same input into each spot.
        {
            curr.innerHTML=first;
        })

        y.forEach(function (curr)
        {
            curr.innerHTML=second;
        })

        var sum=document.querySelector("#sum"); sum.innerHTML=first+second; 
        var diff=document.querySelector("#diff"); diff.innerHTML=first-second;
        var product=document.querySelector("#product"); product.innerHTML=first*second;
        var quot=document.querySelector("#quot"); quot.innerHTML=first/second;
        var mod=document.querySelector("#mod"); mod.innerHTML=first%second;

    });
}

