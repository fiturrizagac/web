$(document).ready(function() {
    $.ajax({
        url: "http://52.151.237.69/api/customers",
        headers: { 'Ocp-Apim-Subscription-Key': 'ea091aaf9fae4e3b8a7efd14e7949e74;product=unlimited' }
    }).then(function(data) {
       $('.clientes').append(data[Math.floor(Math.random()*3)]);
    });
});

/* $(document).ready(function() {
    $.ajax({
        url: "http://52.141.219.120/products/api/products",
        headers: { 'Ocp-Apim-Subscription-Key': '9db32e4fed844af0aac4537ed2f784c8;product=unlimited' }
    }).then(function(data) {
       $('.productos').append(data[Math.floor(Math.random()*3)]);
    });
}); */
