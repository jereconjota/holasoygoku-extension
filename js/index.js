// $(document).ready(function() {
//     $("#github").click(function(){
//         chrome.tabs.create({url:'https://github.com/jereconjota'})
//     })
// })

document.addEventListener('DOMContentLoaded', function () {
    let boton = document.getElementById('github')
    boton.addEventListener('click', function() {
        chrome.tabs.create({url:'https://github.com/jereconjota'})
    });
});