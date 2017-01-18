var myRoom = []
var tv = {
    size: 65,
    brand: 'samsung',
    isHd: true,
    tvIsOn: function(){
        console.log('turn off the tv');
    }
}
myRoom.push(tv);

var couch = {
    color: 'brown',
    hasRecliner: false,
    sections: 8,
    newSection: function(){
        this.sections++;
        return this.sections;
    }
}
myRoom.push(couch);

var desk = {
    color: 'brown',
    hasFiles: true,
    hasHutch: true,
    newDeskColor: function(){
        this.color = "green";
        return this.color;
    }
}
myRoom.push(desk);

var stereo = {
    brand: 'sony',
    channels: 5.1,
    color: 'black',
    newChannels: function(){
       this.channels++;
       return this.channels;
}
}
myRoom.push(stereo);

var dog = {
    luxy: ['blacklab', 'age 9', 'legs 3'],
    podrick: ['pieradoodle', 'age 1', 'legs 4'],
    myTwoDogs: function(){
        return "my dog luxy is a " + this.luxy + " and Podrick is a  " + this.podrick;
    }
}
myRoom.push(dog);

var computer = {
    asus: [
        {
            type: 'desktop',
            model: 'A10',
            hasCdDrive: true,
        },
    ],
    mac: [
        {
            type: 'laptop',
            model: 'macbook',
            hasCdDrive: false,
        },
    ],  
//    myComputers: function(){
////        return "My computers types are " + this.asus[] + " " + this.mac[];
////    }
}
myRoom.push(computer);

var table = {
    legs: 1,
    hasLeaf: true,
    seats: 6,
//    totalLegs: 
//        var newLegs = function(number){
//        number * 4;
//        newLegs(1);
//    return this.totalLegs;
//        }   
}
myRoom.push(table);

var eliptical = {
    getsUsed: false,
    isNew: false,
    color: 'grey',
    newColor: function(){
        this.color = 'black';
        return this.color;
    }  
}
myRoom.push(eliptical);

var fridge = {
    color: 'black',
    isSideBySide: true,
    hasIceMaker: true,
    newColor: function(){
        this.color = "white";
        return this.color;
    }
}
myRoom.push(fridge);

var oven = {
    doors: 2,
    type: 'gas',
    brand: 'GE',
    isOvenOn: function(){
        return "Don't touch";
    }
}
myRoom.push(oven);


console.log(tv.tvIsOn());
console.log(couch.newSection());
console.log(dog.myTwoDogs());
console.log(desk.newDeskColor());
console.log(stereo.newChannels());
console.log(oven.isOvenOn());
console.log(fridge.newColor());
console.log(eliptical.newColor());
