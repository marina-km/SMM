document.addEventListener(
    "DOMContentLoaded",
    function(event) {
        // let worksBack = document.getElementById("circle-back");
        // let worksForward = document.getElementById("circle-forward");
        //
        // // worksBack.onclick = () => alert("Привет");
        // worksBack.addEventListener("click", function (e) {
        //     alert("clicked")
        //     console.log(e);
        // });


        // close(document)
        // open(document)

        // addOnClickHandler(
        //     'close-button',
        //     'block-form',
        //      'none'
        //     )
        //
        // addOnClickHandler(
        //     'order-btn',
        //     'block-form',
        //     'flex'
        //     )
        function addOnClickHandler(buttonId, divId, func) {

            const btn = document.getElementById(buttonId)
            btn.onclick = function () {

                const div = document.getElementById(divId)

                func(div)

            }

        }

        

        addOnClickHandler(
            'close-button',
            'block-form',
            (div) => {div.style.display = 'none'}
            )


        addOnClickHandler(
            'order-btn',
            'block-form',
            function (div) {
                div.style.display = 'flex'
            }
            )


    }
);

// addOnClickHandler(
//     'order-btn',
//     'block-form',
//     (div) => {div.style.display = 'flex'}
//     )

// function close(document) {
//
//     const closeButton = document.getElementById('close-button')
//     closeButton.onclick = function () {
//
//         const divBlackForm = document.getElementById('block-form')
//         divBlackForm.style.display = 'none'
//
//     }
// }
//
// function open(document) {
//
//     const orderButton = document.getElementById('order-btn')
//     orderButton.onclick = function () {
//
//         const divBlackForm = document.getElementById('block-form')
//         divBlackForm.style.display = 'flex'
//
//     }
//
// }



// function addOnClickHandler(buttonId, divId, divDisplay) {
//
//     const btn = document.getElementById(buttonId)
//     btn.onclick = function () {
//
//         const div = document.getElementById(divId)
//
//         div.style.display = divDisplay
//
//     }
//
// }

