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

function findRooms() {
    const dataDa = document.getElementById("checkIn").value;
    const dataA = document.getElementById("checkOut").value;
    const adults = document.getElementById("adults").value;
    const children = document.getElementById("children").value;
    //window.open('http://localhost:4200/' + '?filter=pepperoni', '_blank');
    window.open('http://localhost:4200/' + '?dataDa=' + dataDa + '&dataA=' + dataA + '&adults=' + adults + '&children=' + children, '_blank');
}