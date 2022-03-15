var click = 0;
function click2() {
    var element = document.getElementById("sign");
    var ignoreClickOnMeElement = document.getElementById('inpputUser');
    document.addEventListener('click', function (event) {
        var isClickInsideElement = ignoreClickOnMeElement.contains(event.target);
        if (!isClickInsideElement) {
            element.innerHTML = '<p> &nbsp; </p>';
        } else {
            element.innerHTML = '<p> works </p>';
        }
    });

}
