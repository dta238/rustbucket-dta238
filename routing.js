function submit() {
    var rwd = document.getElementById('rwd');
    var fwd = document.getElementById('fwd');
    var anydt = document.getElementById('anydt');
    

    var urls = [];

    if (rwd.checked) {
        urls.push("https://onlinesequencer.net/members/25482"); //testlink
    }
    if (fwd.checked) {
        urls.push(fwd.value);
    }
    if (anydt.checked) {
        urls.push(anydt.value);
    }    
  

    urls.forEach(function(url) {
        goToUrl(url);
    });
}

function goToUrl(url) {
    var win = window.open(url, '_blank');
}
