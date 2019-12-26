$(document).ready(function() {
    $.ajax({
        url: "http://52.151.237.69/api/customers",
        headers: { 'Ocp-Apim-Subscription-Key': 'ea091aaf9fae4e3b8a7efd14e7949e74' }
    }).then(function(data) {
       $('.clientes').append(data[Math.floor(Math.random()*3)]);
    });
});

$(document).ready(function() {
    $.ajax({
        url: "http://52.151.237.69/v1/api/products",
        headers: { 'Ocp-Apim-Subscription-Key': 'ea091aaf9fae4e3b8a7efd14e7949e74' }
    }).then(function(data) {
       $('.productos').append(data[Math.floor(Math.random()*3)]);
    });
});
