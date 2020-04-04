let raceSelector = document.getElementById(raceSelectorId);
let raceAttributes = document.getElementById(raceAttributesId);
let header = createRow(headerId)

main();

function main(){

    for (let index = 0; index < races.length; index++) {
            addSelect(raceSelector, races[index].name, races[index].tag)
    }

    header.appendChild(raceSelector);

    for (let index = 0; index < attributes.length; index++) {
        createAttributeRow(raceAttributes, attributes[index].name, attributes[index].value);
    }

    let row = createRow(resultRowId);
    
    createLabel(row, getInfoText(0), infoTextId);
    
    createLabel(row, 0, resultId);
    
    createLabel(row, 0, resultModifiedId);
    
    document.getElementById(raceAttributesId).appendChild(row);
    
    addOnClickButton(document.getElementById("container"), submitButtonName, calculate)
}

function addSelect(parent, name, value){
    let select = document.createElement("option");
    select.innerHTML = name;
    select.value = value;
    parent.appendChild(select); 
}

function addOnClickButton(parent, buttonName, eventFunctiom){
    let submitButton = document.createElement("button");
    submitButton.innerHTML = buttonName;
    submitButton.addEventListener("click", eventFunctiom);
    parent.appendChild(submitButton);
}

function createRow(rowId) {
    let row = document.createElement("div");
    row.setAttribute("class", rowClass);
    row.id = rowId;
    return row;
}

function calculate(){
    let raceAttributesFields = raceAttributes.getElementsByTagName("input");
    let sum = 0;
    for (let index = 0; index < raceAttributesFields.length; index++) {
        let number = parseInt(raceAttributesFields[index].value);
        if (isNaN(number)) {
            number = 0;
            raceAttributesFields[index].value = 0;
        }
        sum += number;
        changeAttribute(raceAttributesFields[index].name, number);
    }
    updateAttributes(raceSelector.value);
    document.getElementById(resultId).innerHTML = sum;
    document.getElementById(infoTextId).innerHTML = getInfoText(sum);
}

function getInfoText(sum){
    let grad = 0;
    if((sum - 150) > 0){
            grad = Math.ceil((sum - 150)/20);
            kvar = 20 - ((sum - 150) % 20) % 20;
    } 
    kvar =  150 + grad * 20 - sum;
    grad++;
    return "Grad " + grad + "<br>" + kvar + " poäng kvar.";
}

function createLabel(parent, labelText, labelId){
    let label = document.createElement("label");
    label.innerHTML = labelText;
    if(labelId !== null){
        label.id = labelId;
    }
    let labelDiv = document.createElement("div");
    labelDiv.appendChild(label);
    labelDiv.setAttribute("class", attributesColumnClass);
    parent.appendChild(labelDiv);
}

function createTextField(parent, attributeName, attributeValue){
    let attribute = document.createElement("input");
    attribute.name = attributeName;
    attribute.type = "text";
    attribute.value = attributeValue;
    let attributeDiv = document.createElement("div");
    attributeDiv.appendChild(attribute);
    attributeDiv.setAttribute("class", attributesColumnClass);
    parent.appendChild(attributeDiv);
}


function createAttributeRow(parent, attributeName, attributeValue){
    let row = document.createElement("div");
    row.setAttribute("class", rowClass);

    createLabel(row, attributeName + ": ", null);

    createTextField(row, attributeName, attributeValue)

    createLabel(row, attributeValue, attributeName)
    parent.appendChild(row);
}