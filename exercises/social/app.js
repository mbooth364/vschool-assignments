var snowboarder = {
    name: "mike",
    age: 38,
    agePerYear: function(){
        age++;
        return this.age;
    },
    favoriteMountains:[
        {
            mountainName: "Steamboat",
            county: "routt",
            state: "Colorado", 
            attributes:
                {
                    avgSnowfallInches: 400,
                    heightFeet: 5000,
                    numberOfRuns: 130,
                }, 
        },
        {
            mountainName: "WinterPark",
            county: "Denver",
            state: "Colorado",
            attributes:
                {
                    avgSnowfall: 500,
                    heightFeet: 5000,
                    numberOfRuns: 130,  
                },
        },
        {
            mountainName: "Breckenridge",
            county: "Denver",
            state: "Colorado",
            attributes:
                {
                    avgSnowfall: 500,
                    heightFeet: 5000,
                    numberOfRuns: 130,  
                },
        },
    ],
    
}


snowboarder.favoriteMountains[2].attributes.colorSnow = "blue";
snowboarder.favoriteMountains[1].price = "expensive"; 
var vail = {mountainName: "Vail", 
            county: "Summit", 
            state: "Colorado"};
snowboarder.favoriteMountains.push({vail});
console.log(snowboarder.favoriteMountains[2].attributes.avgSnowfall);
console.log(snowboarder.favoriteMountains[2].attributes.colorSnow);
console.log(snowboarder);