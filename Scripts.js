var click = 0;
function click2() {
    var element = document.getElementById("sign");
    var ignoreClickOnMeElement = document.getElementById('inpputUser');
    var InpuEle = document.getElementById('inpputUser')
    document.addEventListener('click', function (event) {
        var isClickInsideElement = ignoreClickOnMeElement.contains(event.target);
        if (!isClickInsideElement) {
            element.innerHTML = '<legend></legend>';
            InpuEle.placeholder = 'Email Or Phone';
        } else {
            element.innerHTML = '<legend>Email Or Phone</legend>';
            InpuEle.placeholder = '';
        }
        
    });

}
