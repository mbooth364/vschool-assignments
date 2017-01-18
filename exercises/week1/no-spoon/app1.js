var couch = {
    color: 'brown',
    hasRecliner: false,
    sections: 8,
    newSection: function(){
        this.sections++;
        return this.sections;
    }
}
console.log(couch);
console.log(couch.newSection());