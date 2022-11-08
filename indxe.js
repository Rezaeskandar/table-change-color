let changeColor = document.getElementById('containor');
let selectedElement = null;

changeColor.addEventListener('click', change);

function change(e) {
    let target = e.target;
    console.log(target);
    /* adding a class in css and chosed color  take the target and add classlist to it */

    if (target.tagName != ('TD')) { /* för att outside click ska inte fungera */
        return;
    }
    else {
        hilight(target);
    }
}

function hilight(node) {
    if (selectedElement != null) {
        selectedElement.classList.remove('heighlight');
    }

    /* assigning the new td element we clicked on to the selectioelemet variable */
    selectedElement = node;
    selectedElement.classList.add('heighlight');
}