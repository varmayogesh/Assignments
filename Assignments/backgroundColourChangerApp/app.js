const bodyEl = document.getElementsByTagName('body');

// onchange event handler 
// it will be triggered when ever we change the background color
function changeBackgroundColor(event) {
    const backgroundColor = event?.target?.value;
    bodyEl[0].style.backgroundColor = backgroundColor;
}