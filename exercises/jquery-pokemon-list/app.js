



$.get("http://pokeapi.co/api/v2/pokedex/1/", function(data){ 
    console.log(data.pokemon_entries[0].pokemon_species.name);
    var names = " ";
    for(var i = 0; i < data.pokemon_entries.length; i++){
    console.log(data.pokemon_entries[i].pokemon_species.name);
        names.toUpperCase();
        names += "<p>" + data.pokemon_entries[i].pokemon_species.name + "</p>" + " " + "Name:";
    }
$("p").html(names);
    
});