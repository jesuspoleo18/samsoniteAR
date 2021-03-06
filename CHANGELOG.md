# Changelog

Todos los cambios hechos en el proyecto serán documentados en este archivo de cambios.

## [Unreleased](https://github.com/jesuspoleo18/samsoniteAR/commits/master)

## [1.0.1](https://github.com/jesuspoleo18/samsoniteAR/releases/tag/v1.0.1) - 2018-02-19

### Added
* Después de las pruebas en producción del sitio, se hizo el paso a producción del css y el js (minificado) **16:29pm | 2018-02-19**
* Se añadió un placeholder global "custom elements" para los premios **12:20pm | 2018-02-22**
* A partir de la línea 267 del archivo "sar-mantención" se agregó el css para reorganizar el footer mientras que hayan premios para la versión escritorio, en versiónes menores, sólo se oculta. Cuando no hayan premios que mostrar, hay que comentar desde la línea 269 hasta la 298 **12:23pm | 2018-02-22**
* Agregada la imágen de los premios "sar-premio-trip.jpg" **12:23pm | 2018-02-22**

### Changed
* Bajo solicitud, se cambió el formulario de venta corporativa jurídico para que tuviera un campo más (empresa) **15:17pm | 2018-02-19**
* Se cambio la palabra "natural" por "física" **15:34pm | 2018-02-19**
* La palabra "apellidos" se cambió por "apellido" **15:34pm | 2018-02-19**
* El placeholder del campo "asunto" se leía "sunto", fue corregido. **15:34pm | 2018-02-19**

### Fixed
* No se estaban gatillando los triggers para las entidades de datos "venta corporativa empresa" y "venta corporativa persona", fue corregido. **15:17pm | 2018-02-19**

## [1.0.0](https://github.com/jesuspoleo18/samsoniteAR/releases/tag/v1.0.0) - 2018-02-06

### Added
* Se agregó y adaptó el modulo de cálculo de cuotas para cumplir con la promesa de envío gratis en compras superiores a los $1000 **12:22am | 2018-02-07**
* Estilado del componente para envío gratis **14:11pm | 2018-02-07**
* Mejora de la posición del modal para producto agredado con éxito, así como la vista de los productos que ahí se muestran **14:46pm | 2018-02-07**
* Ajuste de los mediaqueries para el modal de agregado con éxito **14:46pm | 2018-02-07**
* El modulo de envío gratis se integró a la compra asíncrona de la ficha de producto **14:49pm | 2018-02-07**
* Se está desarrollando el cálculo de cuotas por productos, ya fue estilado para la versión de escritorio **16:46pm | 2018-02-07**
* Se agregó al módulo de cálculo de cuotas la sección para la ficha de producto y se estiló para la versión de escritorio y mobile **10:06am | 2018-02-08**
* El menu off-canvas mobile fue editado para navegar correctamente por el sitio, así como también se ocultaron a través de los attr mediante el css los menues que no están activos, línea 2302 css **10:25am | 2018-02-08**
* Adición de página Ventas corporativas con sus menues laterales mobile, desktop y formularios con opción para escoger entre persona natural y juridica, estilado a la versión de escritorio **17:30am | 2018-02-08**
* Ajuste de script para envío a MD, Estilado de versión medium y mobile para ventas corporativas **13:53pm | 2018-02-09**
* Cambio de tamaño para window.width en el script principal para la funcion de accordion **13:53pm | 2018-02-09**
* Las dependencias sar.css y sar.js fueron minificadas y pasadas a producción **13:19am | 2018-02-12**

### Changed
* Se ocultó el menú de navegación "equipaje" en desktop y mobile mientras se llena la bodega **17:30pm | 2018-02-06**
* Se formateo el archivo README.md y se creó el archivo CHANGELOG.md **18:55pm | 2018-02-06**
* Se ajustó el mensaje promocional del topbar para resoluciones de >= 1536 **12:22am | 2018-02-07**
* Activado el menu y megamenu de equipaje **9:44am | 2018-02-08**
* El css para los menues off-canvas se editaron por errores de attr, se hicieron ajustes en los mediaqueries para el modal de agregado con éxito 
**10:40am | 2018-02-08**
* En la funcion promoPopup se le colocó una condición para que sólo se ejecutara en el home**17:31pm | 2018-02-08**
* Ocultamos el ajaxBusy de vtex con display none en la hoja css de mantención y usamos el js de preproducción ya que el de producción arrojaba un error con la variable "productId" **17:38pm | 2018-02-09**