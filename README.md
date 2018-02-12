# Repositorio, [Samsonite Argentina, A.K.A (SAR)](https://www.samsonite.com.ar/)
###### Clonacion de proyecto desde Samsonite Brasil a Samsonite Argentina.

## Configuraciones / Usos / How to

Para revisar todos los cambios hechos a partir de la versión [1.0.0](https://github.com/jesuspoleo18/samsoniteAR/releases/tag/v1.0.0) consulte el [CHANGELOG.MD](https://github.com/jesuspoleo18/samsoniteAR/blob/hotfix/CHANGELOG.md)

## Mejoras / Nuevos módulos

### Listado de nuevos módulos o mejoras realizadas sobre la plataforma VTEX.

#### Cálculo de cuotas por producto:

Al posarse sobre un producto, el nuevo script hace el cálculo de las cuotas.

#### Cálculo de dinero restante para envío gratis:

Al agregar un producto al carrito a través del botón de la vitrina o vista catálogo, éste cálcula cuánto dinero falta para cumplir con la promesa de envío gratis.

#### Mejora de todos los mensajes emergentes:

Se implementó el uso de SweetAlert 2 para los mensajes emergentes.

#### Similares y Sugeridos

Solución usada también en la tienda de samsonite mx; Selección de talla y color en ficha de producto. Está pendiente hacerlo en la vista de catálogo o vitrina.

#### Consulta y emparejamiento de DB para no repetir los ingresos de correos de usuario nuevos

Cumple con la necesidad de verificar, consultar y emparejar los datos ingresados por un usuario en la entidad de datos de newsletter para que no se repita el dato email en la base de datos.

#### CoverPop con registro de mail para envío de cód. Promocional

Haciendo uso de la aplicación anterior, el usuario, al ser verificado como nuevo, se le presenta el cód. promocional en una venta de sweetAlert 2.

#### Mejora del wishlist

* Mejoramos el display o como se veía el botón de wishlist en la prateleira o vitrina.
* Añadimos un mensaje antes de llevar al usuario a registrarse para que entendiera que para añadir al wishlist, primer debía estar registrado.

#### Infinity Scroll

Ahora el infinity scroll carga con un sólo controlador de resultado de busqueda para desktop y mobile, ésto se resolvió agregando de 8 a más productos en el controlador y luego ajustando la vista con flexBox en los diferentes dispositivos.

#### Header

La barra de navegación desaparece cuando se hace scroll hacia abajo y aparece cuando se hace scroll hacia arriba.

