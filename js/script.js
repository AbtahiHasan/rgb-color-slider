// select sliders 
const inputs = document.querySelectorAll(".input"),
    output = document.getElementById("output"),
    bodyTag = document.body;

inputs.forEach(function (input) {
    input.oninput = () => {
        colorGenerator ();
    }
})

function colorGenerator () {
    let r = inputs[0].value,
        g = inputs[1].value,
        b = inputs[2].value;
        let color = `rgb(${r}, ${g}, ${b})`;
        output.innerText = color;
        bodyTag.style.backgroundColor = color;
}
