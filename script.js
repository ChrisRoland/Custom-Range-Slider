const range = document.getElementById("range");

range.addEventListener("input", (e) => {
    const value = +e.target.value;
    const label = e.target.nextElementSibling;

    const range_width = getComputedStyle(e.target).getPropertyValue("width")
    const label_width = getComputedStyle(label).getPropertyValue("width")

    const width_num = +range_width.substring(0, range_width.length - 2)
    const label_width_num = +label_width.substring(0, label_width.length - 2)

    const min = +e.target.min
    const max = +e.target.max

    // Calculate the percentage for the label
    const left = value * (width_num / max) - label_width_num / 2 + scale(value, min, max, 10, -10)

    // Calculate the percentage for the bg
    const percent = ((value - min) / (max - min)) * 100;
    
    e.target.style.background = `linear-gradient(to right, #589ad4 ${percent}%, #e8f0f7 ${percent}%)`;

    label.style.left = `${left}px`
    label.innerHTML = value;
})

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}