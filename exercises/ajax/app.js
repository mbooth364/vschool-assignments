var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
    if (xhr.readyState === 4 && xhr.status === 200) {
        var jsonData = xhr.responseText;
        var data = JSON.parse(jsonData);
       document.getElementById("character-name").textContent = data.name;
        
    }
}

xhr.open("GET","http://swapi.co/api/people/1/api/v1/pokemon/12/");
xhr.send();

