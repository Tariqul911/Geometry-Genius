function calculateParallelogramArea (){
    // parallelogram base calc
    const parallelogramBase = document.getElementById('parallelogram-base');
    const parallelogramText = parallelogramBase.value;
    const base = parseFloat(parallelogramText);
    console.log(base);


    // parallelogram height calc
    const parallelogramHeightInput = document.getElementById('parallelogram-height');
    const parallelogramHeightText = parallelogramHeightInput.value;
    const height = parseFloat(parallelogramHeightText);
    console.log(height);


    // calculate parallelogram area
    const calcArea = base * height;
    console.log('Area of the Parallelogram:', calcArea);


    // display of the calculation
    const displayParallelogramCalc = document.getElementById('parallelogram-area');
    displayParallelogramCalc.innerText = calcArea;
}