function createLabel(labelText, labelId, attributes) {
    let label = document.createElement("label");
    label.innerHTML = labelText;

    if (labelId !== null && labelId !== undefined) {
        label.id = labelId;
    }

    let labelDiv = document.createElement("div");
    if (attributes !== null && attributes !== undefined) {
        for (let index = 0; index < attributes.length; index += 2) {
            labelDiv.setAttribute(attributes[index], attributes[index + 1]);
        }
    }

    labelDiv.appendChild(label);
    return labelDiv;
}
function createRadioButton(labelText, nameType, value){
    let labelElement = document.createElement("label");
    labelElement.setAttribute("class", checkboxContainerClass);
    labelElement.setAttribute("for", value);
    labelElement.innerHTML = labelText;

    let inputElement = document.createElement("input");
    inputElement.name = nameType;
    inputElement.type = "radio";
    inputElement.id = value;
    labelElement.appendChild(inputElement);

    let spanElement = document.createElement("span");
    spanElement.setAttribute("class", checkmarkClass);
    labelElement.appendChild(spanElement);

    return labelElement;

}

function createHeading(size, text, headingsId, attributes){
    let headingsElement = document.createElement(size);
    headingsElement.innerHTML = text;
    
    if (headingsId !== null && headingsId !== undefined) {
        headingsElement.id = headingsId;
    }

    if (attributes !== null && attributes !== undefined) {
        for (let index = 0; index < attributes.length; index += 2) {
            headingsElement.setAttribute(attributes[index], attributes[index + 1]);
        }
    }
    return headingsElement;
}

function addOnClickButton(buttonName, eventFunctiom, buttonId) {
    let submitButton = document.createElement("button");
    submitButton.innerHTML = buttonName;
    submitButton.id = buttonId;
    submitButton.addEventListener("click", eventFunctiom);
    return submitButton;
}

function createTextField(attributeName, attributeValue, attributes) {
    let attribute = document.createElement("input");
    attribute.name = attributeName;
    attribute.value = attributeValue;
    attribute.type = "text";

    let attributeDiv = document.createElement("div");
    attributeDiv.appendChild(attribute);
    if (attributes !== null && attributes !== undefined) {
        for (let index = 0; index < attributes.length; index += 2) {
            attributeDiv.setAttribute(attributes[index], attributes[index + 1]);
        }
    }

    return attributeDiv;
}

function createRow(rowId) {
    let row = document.createElement("div");
    row.setAttribute("class", rowClass);

    if (rowId !== null && rowId !== undefined) {
        row.id = rowId;
    }

    return row;
}

function addSelect(selectorId) {
    let selectElement = document.createElement("select");
    selectElement.id = selectorId;
    return selectElement;
}

function createOptionForSelect(name, value) {
    let option = document.createElement("option");
    option.innerHTML = name;
    option.value = value;
    return option;
}