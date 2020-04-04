main();
function main(){
    for (let index = 0; index < racesData.length; index++) {
        races.push(createRace.apply(this, racesData[index]));     
    }
}
function getRaceByTag(tag) {
    for (let index = 0; index < races.length; index++) {
        if(races[index].tag == tag){
            return races[index];
        }
    }
    return null;
}

function createRace() {
    let race = raceObject(arguments[0], arguments[1]); 
    for (let index = 0; index < attributesArray.length; index++) {
        race.addModifier(attributesArray[index], arguments[index + 2]);
    }
    return race;
}

function printRaces(){
    for (let index = 0; index < races.length; index++) {
        races[index].printModifiers();
    }
}

function raceObject(tag, name) {
    let race = {
        tag: tag,
        name: name,
        modifiers:  [],
        findModifier: function(name) {
            for (let index = 0; index < this.modifiers.length; index++) {
                if(this.modifiers[index].name == name){
                    return index;
                }      
            }
            return null;
        },
        getModifier: function(name) {
            let index = this.findModifier(name);
            if(index === null){
 
                return this.modifiers[index];
            }
            
            return this.modifiers[index];
        },
        addModifier: function(name, modifier) {
            let index = this.findModifier(name);
            if(index !== null){
                this.modifiers[index].modifier = modifier;
            } else {
                this.modifiers.push(createAttribute(name, modifier));
            }
        },
        printModifiers: function(){
            console.log("Modifiers for race " + name);
            for (let index = 0; index < this.modifiers.length; index++) {
                console.log("\t" + this.modifiers[index].name + ": " + this.modifiers[index].modifier);        
            }
        }
    }
    modifiers = createAttributes(1);
    return race;
}