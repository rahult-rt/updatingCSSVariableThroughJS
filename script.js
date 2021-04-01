// selecting all the three inputs on page
const userInputs = document.querySelectorAll('.controls input');

function updateCssVar() {
    const suffix = this.dataset.sizing || '';
    // console.log(this.name);

    // updating css variable values
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// listning to the userinputs
userInputs.forEach(userInputs => userInputs.addEventListener('change', updateCssVar));
userInputs.forEach(userInputs => userInputs.addEventListener('mousemove', updateCssVar));