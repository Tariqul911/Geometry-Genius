function pentagonArea (){
    // perimeter
    const pentagonPInput = document.getElementById('pentagon-perimeter');
    const pentagonText = pentagonPInput.value;
    const perimeter = parseFloat(pentagonText);
    console.log(perimeter);


    // apothem
    const pentagonApothemInput = document.getElementById('pentagon-apothem');
    const pentagonApothemText = pentagonApothemInput.value;
    const apothem = parseFloat(pentagonApothemText);
    console.log(apothem);


    // calculate perimeter and apothem
    const calculateArea = 0.5 * perimeter * apothem;
    console.log('Area of the Pentagon:', calculateArea);

    // display calculation
    const displayPentagonArea = document.getElementById('pentagon-area');
    displayPentagonArea.innerText = calculateArea;
}