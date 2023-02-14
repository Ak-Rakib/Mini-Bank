// This function will be use get input field element
function getElementFieldValueById(inputFieldValue) {
    const fieldValueById = document.getElementById(inputFieldValue);
    const getFieldValueString = fieldValueById.value;
    const getFieldValue = parseFloat(getFieldValueString);
    fieldValueById.value = '';
    return getFieldValue;
}


// This function will be use get element
function getElementValueById(elementValue) {
    const elementValueById = document.getElementById(elementValue);
    const elementValueString = elementValueById.innerText;
    const elementValues = parseFloat(elementValueString);
    return elementValues;
}


// Set element value using this function
function setElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}