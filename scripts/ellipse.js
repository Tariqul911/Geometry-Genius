function ellipseArea (){
    // semi major
    const semiMajorAxisInput = document.getElementById('semi-major');
    const semiMajorText = semiMajorAxisInput.value;
    const semiMajor = parseFloat(semiMajorText);
    console.log(semiMajor);


    // semi minor 
    const semiMinorAxisInput = document.getElementById('semi-minor');
    const semiMinorText = semiMinorAxisInput.value;
    const semiMinor = parseFloat(semiMinorText);
    console.log(semiMinor);


    // calculate semiMajor and semiMinor 
    const calculateEllipseArea = 3.1416 * semiMajor * semiMinor;
    console.log('Area of the Ellipse:', calculateEllipseArea);


    // display calculation
    const displayEllipseArea = document.getElementById('ellipse-area');
    displayEllipseArea.innerText = calculateEllipseArea;
}