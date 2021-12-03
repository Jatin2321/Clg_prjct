$(function () {
    let productName = $('#productName')
    let productManufacturer = $('#productManufacturer')
    let productPrice = $('#productPrice')

    $('#btnProductAdd').click(function () {
            addProduct(
                productName.val(),
                productManufacturer.val(),
                productPrice.val(),
                function(addedproduct){
                      window.alert("Product " + addedproduct.name + " is added to database ")
                }
            )
    })
})