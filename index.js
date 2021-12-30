function openCloseMenu() {
    console.log('click')
    if (document.getElementById("menuDiv").classList.contains('slide-in')) {
        document.getElementById("menuDiv").classList.remove('slide-in');
        document.getElementById("menuDiv").classList.add('slide-out');
    } else if (document.getElementById("menuDiv").classList.contains('slide-out')) {
        document.getElementById("menuDiv").classList.remove('slide-out');
        document.getElementById("menuDiv").classList.add('slide-in');
    } else {
        document.getElementById("menuDiv").classList.add('slide-in');
    }
}