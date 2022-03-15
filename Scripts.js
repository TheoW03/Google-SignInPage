var click = 0;
function click2() {
    var element = document.getElementById("sign");
    var ignoreClickOnMeElement = document.getElementById('inpputUser');
    document.addEventListener('click', function (event) {
        var isClickInsideElement = ignoreClickOnMeElement.contains(event.target);
        if (!isClickInsideElement) {
            element.innerHTML = '<le> &nbsp; </legend>';
        } else {
            element.innerHTML = '<legend>email or phone </legend>';
        }
    });

}
