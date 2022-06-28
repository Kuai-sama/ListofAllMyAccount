function mobilecheck() { // check if the device is a mobile
    return (typeof window.orientation !== "undefined")
        || (navigator.userAgent.indexOf('IEMobile') !== -1
        );
};

function handle(evnt) { // handle the rezise event
    if (mobilecheck() == false) { // if the device is not a mobile
        SetPositionOfDiv();
        return true;
    }
    return false;
}

function Particule() { // create the div which contains the particule effect
    var divElements = document.getElementsByClassName("Particule"); // get all the div elements in the class "Particule"

    for (var i = 0; i < divElements.length; i++) { // for each div element
        for (let j = 0; j < 50; j++) { // for each particule
            let div = document.createElement("div"); // create a new div element
            div.className = 'button_spots'; // set the class name of the new div element

            divElements[i].appendChild(div); // append the new div element to the div elements
        }
    }
}

function getPositionOfButtons() { // get the position of all the button elements
    var divElements = document.getElementsByClassName("button"); // get all the div elements in the class "button"
    var posMap = new Map(); // create a new map

    for (let i = 0; i < divElements.length; i++) { // for each div element
        let pos = divElements[i].getBoundingClientRect(); // get the position of each div eflement

        posMap.set(divElements[i], {  // set the position of each div element into a map
            top: pos.top,
            left: pos.left,
            right: pos.right,
            bottom: pos.bottom
        });
    }
    return posMap; // return the map
}

function SetPositionOfDiv() { // set the position of the div elements (Particule effect)
    const posMap = getPositionOfButtons(); // get the position of all the button elements

    var i = 0;
    var divElements = document.getElementsByClassName("Particule"); // get all the div elements in the class "Particule"

    for (let [key, value] of posMap) { // for each button element
        divElements[i].style.left = (value.left - 70) + "px";
        divElements[i].style.right = value.right + "px";
        divElements[i].style.top = value.top + "px";
        divElements[i].style.bottom = value.bottom + "px";
        i++;
    }
}

if (mobilecheck() == false) {
    Particule();
    SetPositionOfDiv();
}

window.onresize = handle; // set the function to be called when the window is resized