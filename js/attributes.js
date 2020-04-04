attributes = createAttributes(0);

function getAttributes(){
    return attributes;
}

function createAttribute(name, value) {
    return {
        name: name,
        value: value
    };
}

function createAttributes(defaultValue){
    let newAttributes = [];
    for (let index = 0; index < attributesArray.length; index++) {
        newAttributes.push(createAttribute(attributesArray[index], defaultValue));        
    }
    return newAttributes;
}

function getAttributeIndex(name) {
    for (let index = 0; index < attributes.length; index++) {
        if(attributes[index].name == name){            
            return index;
        }      
    }
    return null;
}

function changeAttribute(name, value) {
    let index = this.getAttributeIndex(name);
    attributes[index].value = value;
}

function getAttributeWithModifier(name){
    let index = this.getAttributeIndex(name);
    attributes[index].value = value;
}

function updateAttributes(raceName){
    let selectedRace = getRaceByTag(raceName);
    let modifierSum = 0;
    for (let index = 0; index < attributes.length; index++) {
        if(selectedRace.modifiers[index].name !== attributes[index].name){
            let errorLog = `Attribute missmatch! race modifier tag: ${selectedRace.modifiers[index].name}, input attribute tag: ${attributes[index].name}.`;
            document.getElementById(attributes[index].name).innerHTML = errorLog;
            console.error(errorLog);
        } else {
            let modifiedValue = Math.floor(attributes[index].value * selectedRace.modifiers[index].value);
            modifierSum += modifiedValue;
            document.getElementById(attributes[index].name).innerHTML = modifiedValue;
        }     
    }
    document.getElementById(resultModifiedId).innerHTML = modifierSum;
}