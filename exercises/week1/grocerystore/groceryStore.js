
var shopper = {
    firstName: "mike",
    lastName: "booth",
    age: 38,
    isCardMember: true,
    itemsInCart:[
    {
        cheese: 5.99,
        milk: 2.99,
        snacks: 10.50
    },
    ],
     greeting: function(){
     console.log("Hi " + shopper.firstName +  " how are you today?")
     }, 
     
     
};
    shopper.greeting();
 
    