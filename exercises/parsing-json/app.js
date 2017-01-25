
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    
    if (xhr.readyState === 4 && xhr.status === 200) {
        var jsonData = xhr.responseText;
        var data = JSON.parse(jsonData);
        data = data.objects[0].pokemon;
        var pokemonString = "";
        for(var i = 0; i < data.length; i++) {
            
            pokemonString += data[i].name + "<br>";
           
        }
        
      
        document.getElementById("character-name").innerHTML = pokemonString;
    }
}

xhr.open("GET", "http://api.vschool.io:6543/pokemon.json");

xhr.send();

