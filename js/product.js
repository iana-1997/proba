var productColl = [
    {idprod: 0,
    name: 'Beef Rice',
    image: 'img/product/prod1.png',
    price: 129.99,
    category: 1},

    {idprod: 1,
    name: 'Chicken Rice',
    image: 'img/product/prod2.png',
    price: 54.88,
    category: 1},

    {idprod: 2,
    name: 'Vege Rice',
    image: 'img/product/prod3.png',
    price: 232,
    category: 1},

    {idprod: 3,
    name: 'Sake Rice',
    image: 'img/product/prod4.png',
    price: 100,
    category: 1},

    {idprod: 4,
    name: 'Seafood Rice',
    image: 'img/product/prod5.png',
    price: 200,
    category: 1},

    {idprod: 5,
    name: 'Cheese Sake Roll',
    image: 'img/product/prod6.png',
    price: 250.50,
    category: 2},

    {idprod: 6,
    name: 'Cheese Ebi Roll',
    image: 'img/product/prod7.png',
    price: 110,
    category: 2},

    {idprod: 7,
    name: 'Makimon Roll',
    image: 'img/product/prod8.png',
    price: 150.60,
    category: 2},

    {idprod: 8,
    name: 'Sunshine Roll',
    image: 'img/product/prod9.png',
    price: 121.50,
    category: 2},

    {idprod: 9,
    name: 'Paradise Roll',
    image: 'img/product/prod10.png',
    price: 50.23,
    category: 2},

    {idprod: 10,
    name: 'Volcano Roll',
    image: 'img/product/prod11.png',
    price: 40.90,
    category: 2},

    {idprod: 5,
    name: 'Sake',
    image: 'img/product/prod12.png',
    price: 40.90,
    category: 3},

    {idprod: 6,
    name: 'Maguro',
    image: 'img/product/prod13.png',
    price: 40.90,
    category: 3},

    {idprod: 7,
    name: 'Unagi',
    image: 'img/product/prod14.png',
    price: 40.90,
    category: 3},

    {idprod: 8,
    name: 'Ebi',
    image: 'img/product/prod15.png',
    price: 40.90,
    category: 3},

    {idprod: 9,
    name: 'Tai',
    image: 'img/product/prod16.png',
    price: 40.90,
    category: 3},

    {idprod: 10,
    name: 'Hotate',
    image: 'img/product/prod17.png',
    price: 40.90,
    category: 3},

    {idprod: 11,
    name: 'Chocolate Crunch',
    image: 'img/product/prod21.png',
    price: 40.90,
    category: 4},

    {idprod: 12,
    name: 'Chocolate Roll',
    image: 'img/product/prod22.png',
    price: 40.90,
    category: 4},

    {idprod: 13,
    name: 'Coca Cola -30%',
    image: 'img/product/prod18.png',
    price: 40.90,
    category: 5},

    {idprod: 14,
    name: 'Fanta -30%',
    image: 'img/product/prod19.png',
    price: 40.90,
    category: 5},

    {idprod: 15,
    name: 'Sprite -30%',
    image: 'img/product/prod20.png',
    price: 40.90,
    category: 5},];

var div = $('#cont');
//-----------------------------JS
AddCollection(1);
//-----------------------------Product
function AddCollection(category) {
    div.html('');
    for (var i = 0; i < productColl.length; i++) {
        if((category == 0 && productColl[i].name.toLowerCase().startsWith($().val().toLowerCase())) || 
            productColl[i].category == category)
            div.append('<article class="content">' +
                '<figure>' +
                    '<img class="image" src=\"' + productColl[i].image + '\" >' +
                    '<figcaption>' + productColl[i].name + '</figcaption>' +
                    '<div>' +
                        '<input id=\"'+ productColl[i].idprod +'" class="price" value=\"' + productColl[i].price.toFixed(2) + '\" readonly>' +
                        '<button onclick="Minus('+ (i+100) +', ' + productColl[i].idprod + ', ' + productColl[i].price + ')" id="plusminus">-</button>' +
                        '<input id=\"' + (i+100) + '\" class="count" value="1" readonly>'+
                        '<button onclick="Plus('+ (i+100) +', ' + productColl[i].idprod + ', ' + productColl[i].price + ')" id="plusminus">+</button>' +
                        '<button onclick="InBasket(' + (i+100) + ', ' + productColl[i].idprod + ', \'' + productColl[i].name + '\')" id="inbasket">' +
                        '<img src="img/resourses/basket.png" height="30px" alt="basket">'+'</button>' +
                    '</div>' +
                    '<div class="bigimage">' +
                        '<img src=\"' + productColl[i].image + '\" >' +
                        '<div class="description">' + productColl[i].name + '</div>' +
                    '</div>' +
                '</figure>' +
            '</article>');
    };
};

//-----------------------------Section Basket
function InBasket(id, idbut, name){
    var jQ = $('#box');
    var jQCount = $('#cont article figure div').find('#'+ id).val();
    var priceCurrent = 0.0;
    for (var i = 0; i < productColl.length; i++)
        if (productColl[i].idprod == idbut){
            for (var j = 0; j < jQCount; j++)
                priceCurrent += productColl[i].price;
            break;
        }
    if (jQ.find('#'+ id).length < 1){
        jQ.append(
        '<div id=\"' + id + '\" class="InBasket">' +
            '<label>' + name + '</label>' + '<br>' +
            '<input class="count2" value=\"' + priceCurrent.toFixed(2) + '\" readonly>' +
            '<button onclick="BasketDelete(' + id + ', ' + idbut + ',' + jQCount + ')">x</button>' +
        '</div>');
        var jQPrice = $('#togglerInput');
        jQPrice.val((parseFloat(jQPrice.val()) + priceCurrent).toFixed(2));
    };
};

function BasketDelete(id, idbut, count){
    $('#box').find('#'+ id).remove();
    var jQPrice = $('#togglerInput');
    for (var i = 0; i < productColl.length; i++)
        if (productColl[i].idprod == idbut){
            for (var j = 0; j < count; j++)
                jQPrice.val((parseFloat(jQPrice.val()) - parseFloat(productColl[i].price)).toFixed(2));
            break;
        }
};