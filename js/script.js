let container = document.getElementById("container");

let targetMode = false;

main();
function switchToStandardMode(){
    targetMode = false;    
    document.getElementById(modesHeadingsId).innerHTML = `Current mode: Standard
    Modes:`;
}

function switchToReverseMode(){
    targetMode = true;
    console.log("triggeredswitchToReverseMode");
    document.getElementById(modesHeadingsId).innerHTML = `Current mode: Reverse
    Modes:`;
}

function main() {
    headerHTML();
    attributesHTML();
    document.getElementById("standard").checked = true;
}

function headerHTML() {
    let headerElement = createRow(headerId);

    let modesDivElement = document.createElement("div");
    modesDivElement.setAttribute("class", headerColumnsClass);

    headerElement.appendChild(createHeading("h3", "Modes", modesHeadingsId))

    let standardMode = createRadioButton("Standard", "mode", "standard");
    standardMode.addEventListener("change", switchToStandardMode)
    modesDivElement.appendChild(standardMode);

    let reverseMode = createRadioButton("Reverse", "mode", "reverse");
    reverseMode.addEventListener("change", switchToReverseMode)
    modesDivElement.appendChild(reverseMode);

    headerElement.appendChild(modesDivElement);
    
    let infoDivElement = document.createElement("div");
    infoDivElement.setAttribute("class", headerColumnsClass);

    let raceLabel = document.createElement("label");
    raceLabel.innerHTML = "Ras: ";
    raceLabel.setAttribute("for", raceSelectorId);
    infoDivElement.appendChild(raceLabel);

    let selectElement = addSelect(raceSelectorId);
    selectElement.addEventListener("change", calculate);

    for (let index = 0; index < races.length; index++) {
        selectElement.appendChild(createOptionForSelect(races[index].name, races[index].tag));
    }
    infoDivElement.appendChild(selectElement);
    headerElement.appendChild(infoDivElement);

    container.appendChild(headerElement);

}

function attributesHTML() {
    let raceAttributesElement = document.createElement("div");
    raceAttributesElement.id = raceAttributesId;

    for (let index = 0; index < attributes.length; index++) {
        raceAttributesElement.appendChild(createAttributeRow(attributes[index].name, attributes[index].value));
    }

    let rowElement = createRow(resultRowId);

    rowElement.appendChild(createLabel(getInfoText(0), infoTextId, ["class", resultColumnsClass]));
    rowElement.appendChild(createLabel(0, resultId, ["class", resultColumnsClass]));
    rowElement.appendChild(createLabel(0, resultModifiedId, ["class", resultColumnsClass]));

    raceAttributesElement.appendChild(rowElement);

    container.appendChild(raceAttributesElement);
}

function calculate() {
    let fieldsElements = raceAttributes.getElementsByTagName("input");
    let sum = 0;
    for (let index = 0; index < fieldsElements.length; index++) {
        let number = parseInt(fieldsElements[index].value);
        if (isNaN(number)) {
            number = 0;
            fieldsElements[index].value = 0;
        }
        sum += number;
        changeAttribute(fieldsElements[index].name, number);
    }

    updateAttributes(raceSelector.value, targetMode);

    document.getElementById(resultId).innerHTML = sum;
    document.getElementById(infoTextId).innerHTML = getInfoText(sum);
}

function getInfoText(sum) {
    let grad = 0;
    if ((sum - 150) > 0) {
        grad = Math.ceil((sum - 150) / 20);
        kvar = 20 - ((sum - 150) % 20) % 20;
    }
    kvar = 150 + grad * 20 - sum;
    grad++;
    return "Grad " + grad + ", " + kvar + " poäng kvar.";
}

function createAttributeRow(attributeName, attributeValue) {
    let row = createRow();

    let textField = createTextField(attributeName, attributeValue, ["class", attributesColumnClass]);
    textField.addEventListener("change", calculate);

    row.appendChild(createLabel(attributeName + ": ", null, ["class", attributesColumnClass]));
    row.appendChild(textField);
    row.appendChild(createLabel(attributeValue, attributeName, ["class", attributesColumnClass]));
    return row;
}