function getInputValueById(inputId) {
  const inputField = document.getElementById(inputId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  inputField.value = "";
  return inputFieldValue;
}

function getTextElementValueById(textId) {
  const textElementId = document.getElementById(textId);
  const textElementValueString = textElementId.innerText;
  const textElementValue = parseFloat(textElementValueString);
  return textElementValue;
}

function setTextElementById(textId, inputId) {
  const SetTextElement = document.getElementById(textId);
  SetTextElement.innerText = inputId;
}
