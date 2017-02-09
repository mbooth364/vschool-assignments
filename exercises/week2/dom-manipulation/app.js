var button = document.getElementById("add-paragraph");
button.addEventListener("click", function(){
    //create a new empty element
    var newPara = document.createElement("p");
    //create a new text node
    var text = document.createTextNode("lorem");
    //append the text node to the new empty element
    newPara.appendChild(text);
    //appends the new element to the parent container(div)
    document.getElementById("new-paragraphs").appendChild(newPara);
})

alert("hello");


var button = document.getElementById("add-paragraph");
button.addEventListener("click", function(){
    document.getElementById("new-paragraph").innerHTML += "<p> lorem</p>";
})