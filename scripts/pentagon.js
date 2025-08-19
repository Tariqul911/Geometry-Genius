// function pentagonArea (){
//     // perimeter
//     const pentagonPInput = document.getElementById('pentagon-perimeter');
//     const pentagonText = pentagonPInput.value;
//     const perimeter = parseFloat(pentagonText);
//     console.log(perimeter);


//     // apothem
//     const pentagonApothemInput = document.getElementById('pentagon-apothem');
//     const pentagonApothemText = pentagonApothemInput.value;
//     const apothem = parseFloat(pentagonApothemText);
//     console.log(apothem);


//     // calculate perimeter and apothem
//     const calculateArea = 0.5 * perimeter * apothem;
//     console.log('Area of the Pentagon:', calculateArea);

//     // display calculation
//     const displayPentagonArea = document.getElementById('pentagon-area');
//     displayPentagonArea.innerText = calculateArea;
// }


/* re usable function */
function pentagonArea(){
    const perimeter = getInputValueById('pentagon-perimeter');
    const apothem = getInputValueById('pentagon-apothem');
    
    const area = 0.5 * perimeter * apothem;
    setInnerTextById('pentagon-area', area);
}

function getInputValueById (inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

function setInnerTextById (elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}