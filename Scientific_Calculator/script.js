let isDegreeMode = true; // Default mode is degrees

function appendCharacter(character) {
    const display = document.getElementById('display');
    display.value += character;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Replace the math functions for security
        let expression = display.value
            .replace(/Math.sqrt/g, 'Math.sqrt')
            .replace(/Math.sin/g, 'Math.sin')
            .replace(/Math.asin/g, 'Math.asin')
            .replace(/Math.cos/g, 'Math.cos')
            .replace(/Math.acos/g, 'Math.acos')
            .replace(/Math.tan/g, 'Math.tan')
            .replace(/Math.atan/g, 'Math.atan')
            .replace(/Math.log/g, 'Math.log10')
            .replace(/Math.log10/g, 'Math.log10')
            .replace(/Math.exp/g, 'Math.exp')
            .replace(/Math.PI/g, 'Math.PI')
            .replace(/Math.pow/g, 'Math.pow');
        
        if (isDegreeMode) {
            expression = expression.replace(/Math.sin\(/g, 'Math.sin(')
                                    .replace(/Math.cos\(/g, 'Math.cos(')
                                    .replace(/Math.tan\(/g, 'Math.tan(');
        } else {
            expression = expression.replace(/Math.sin\(/g, 'Math.sin(Math.PI/180*')
                                    .replace(/Math.cos\(/g, 'Math.cos(Math.PI/180*')
                                    .replace(/Math.tan\(/g, 'Math.tan(Math.PI/180*');
        }
        
        const result = eval(expression);
        display.value = result;
    } catch (e) {
        display.value = 'Error';
    }
}

function toggleMode() {
    isDegreeMode = !isDegreeMode;
    alert(`Mode switched to ${isDegreeMode ? 'Degrees' : 'Radians'}`);
}
