function fetchProducts(done) {
    $.get('/api/products', function (data) {
        done(data)
    })
}

function addProduct (name, manuf, price, done) {
    $.post('/api/products', {
        name: name,
        manufacturer: manuf,
        price: price
    }, function(data) {
        done(data)
    }
    )
}

function createProductCard (product) {
    return $(`
            <div class = "col-4 card mx-2 p-1">
                <h4 class="product_name">${product.name}</h4>
                <div class="product-manufacturer">${product.manufacturer}</div>
                <div class="row">
                   <div class="col m-3 p-3">
                     <b>Rs. ${product.price}</b> 
                   </div>
                 <div class="col">
                   <button class="btn btn_primary m-3 p-3">Buy</button>
                 </div>
                </div>
            </div>
            `)
}
