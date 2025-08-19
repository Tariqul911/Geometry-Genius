function rhombusAreaCalc (){
    // dimension 1
    const rhombusD1Input = document.getElementById('dimension-1');
    const rhombusText = rhombusD1Input.value;
    const dimension1 = parseFloat(rhombusText);
    console.log(dimension1);


    // dimension 2
    const rhombusD2Input = document.getElementById('dimension-2');
    const rhombusD2Text = rhombusD2Input.value;
    const dimension2 = parseFloat(rhombusD2Text);
    console.log(dimension2);


    // calculation dimension1 and dimension2
    const calculateDimension = 0.5 * dimension1 * dimension2;
    console.log('Area of the Rhombus:', calculateDimension);


    // display calculation
    const displayCalculation = document.getElementById('rhombus-area');
    displayCalculation.innerText = calculateDimension;
}