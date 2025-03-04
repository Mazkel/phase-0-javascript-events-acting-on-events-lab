// Your code here
const dodger = document.getElementById('dodger')
dodger.style.backgroundColor = "dodgerblue"
dodger.style.left = dodger.style.left || "0px"


    function moveDodgerLeft() {
        const leftNumbers = dodger.style.left.replace("px", "")
        const left = parseInt(leftNumbers, 10)

        if (left > 0) {
            dodger.style.left = `${left - 20}px`
        }    
    };

    function moveDodgerRight() {
        const leftNumbers = dodger.style.left.replace("px", "")
            const left = parseInt(leftNumbers, 10);

            if (left < 360) {
                dodger.style.left = `${left + 20}px`
            }
    }

    document.addEventListener("keydown", function (event) {
        if (event.key === "ArrowLeft") {
            moveDodgerLeft();
        } else if (event.key === "ArrowRight") {
            moveDodgerRight();
        }
    })

