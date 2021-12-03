// dollar sign is used to exexute the script after the window is loaded

$(function () {
    let productlist = $('#product_list')
    fetchProducts(function(products){
        productlist.empty()
        for (product of products){
            productlist.append(createProductCard(product)) //products is entire list and product is one item
        } 
    })
})