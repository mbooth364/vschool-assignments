var addSubmit = document.getElementById("submit-add");

addSubmit.addEventListener("click", function(){
    var value1 = document.getElementById("add-input1").value;
    var value2 = document.getElementById("add-input2").value;
    
    value1 = parseInt(value1);
    value2 = parseInt(value2);
    
    var total = value1 + value2;
    
    var output = document.getElementById("add-output");
    
    output.textContent = total;

})




document.getElementById("submitSubtract").addEventListener("click", function(){
    var submitBox1 = document.getElementById("subtractBox1").value;
    var submitBox2 = document.getElementById("subtractBox2").value;
    
    console.log(submitBox1 - submitBox2);
    
    document.getElementById("subtractTotal").textContent = submitBox1 - submitBox2;
})



var multiplySubmit = document.getElementById("submit-multiply");
    multiplySubmit.addEventListener("click", function(){
        var submitBox1 = document.getElementById("multiply-input1").value;
        var submitBox2 = document.getElementById("multiply-input2").value;
        
        var total = submitBox1 * submitBox2;
        var output = document.getElementById("multiply-total"); 
        output.textContent = total;
    })





