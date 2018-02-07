/*----------------------------inicio--------------------------------

[Script - mantenimiento ]

Projecto:  SamsoniteBR  - 2018
Version:  0.1
Ultimo cambio: 07/02/18.
Asignado a:  mantención.
Primary use:  Ecommerce. 

----------------------

[Tabla de contenido]

1.Inicializacion de controles
2.Lazyload

** Recomendaciones para navegacion de tabla de contenido **

[Shortcuts]

1.Ctrl+inicio (regresas a la linea 1 del archivo).
2.Ctrl+fin    (te lleva a la ultima linea del archivo).

-------------------------fin---------------------------------*/

// 1.Inicializacion de controles.
$(function(){
    initMantencion();
});

function initMantencion(){
    lazyObj.prepareTags();
}

// 2.Lazyload
var lazyObj = {
    store: 'lojasamsonite',
    imgWidth: '350',
    imgHeight: '350',
    prepareTags: function () {
        jQuery('.lazyPlaceholder').not('.lazed').each(function () {
            var lazyProdId = jQuery(this).data('lazy');
            var ajax = new XMLHttpRequest();
            ajax.open("GET", "https://" + lazyObj.store + ".vtexcommercestable.com.br/api/catalog_system/pub/products/search/?fq=productId:" + lazyProdId, true);
            ajax.send();
            var that = this;
            ajax.onreadystatechange = function () {
                if (ajax.readyState == 4 && ajax.status == 200) {
                    var data = JSON.parse(ajax.responseText);

                    //img 1
                    var imgArray;
                    var imgUrl = data[0].items[0].images[0].imageUrl;
                    var imgId = data[0].items[0].images[0].imageId;
                    imgArray = imgUrl.split(imgId);
                    imgId = imgId + '-' + lazyObj.imgWidth + '-' + lazyObj.imgHeight + '';
                    imgUrl = imgArray[0] + imgId + imgArray[1];
                    jQuery(that).attr('src', imgUrl);
                    jQuery(that).addClass('lazed');
                }
            };
        });
    }
};

jQuery(document).ajaxComplete(function (event, xhr, settings) {
    if (settings.url.indexOf('/buscapagina?') >= 0) {
        lazyObj.prepareTags();
    }
});
