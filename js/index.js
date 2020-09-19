// $(document).ready(function() {
//     $("#github").click(function(){
//         chrome.tabs.create({url:'https://github.com/jereconjota'})
//     })
// })

document.addEventListener('DOMContentLoaded', function () {
    let boton = document.getElementById('manga')
    boton.addEventListener('click', function() {
        chrome.tabs.create({url:'https://inmanga.com/ver/manga/Dragon-Ball-Super/8605de4e-e860-4f02-b5ff-154ed08fe6ef'})
    });
});