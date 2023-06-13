---
title: Cómo funciona la promoción Compre y gane
id: tutorials_322
status: PUBLISHED
createdAt: 2017-04-27T22:08:41.148Z
updatedAt: 2021-12-13T17:23:17.182Z
publishedAt: 2021-12-13T17:23:17.182Z
firstPublishedAt: 2017-04-27T23:03:14.992Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slug: como-funciona-la-promocion-compre-y-gane
legacySlug: como-funciona-la-promocion-compre-y-gane
subcategory: 1yTYB5p4b6iwMsUg8uieyq
---

Este tipo de promoción se utiliza para ofrecer envío gratis o un regalo en caso de que se compre un determinado producto.  Por ejemplo, "compre una televisión y no pague el envío", o "compre un videojuego y gane un juego".

## ¿Cuáles son los datos generales de esta promoción?

- __Nombre__
- __Nombre de la promoción__
- __Status__
- __Activa o Inactiva la promoción__
- __Descripción interna de la promoción__: el objetivo de este campo es que sea utilizado para comunicación interna en su tienda, a fin de dejar claro si la promoción es debido a alguna campaña, quema de inventario, etc.
- __Validez__: fecha y hora de inicio y fin de la promoción. (Se puede utilizar una fecha y/o horario futuros, para que la promoción comience a aplicarse en el sitio. Si se configura de esta forma, la promoción tendrá el status de programada hasta que se alcance la fecha y hora. Mientras la promoción esté válida, esta tendrá el status de activa y al término de la fecha y hora definidas, el status se cambiará a inactivo automáticamente.)
- __Especificar días de la semana para activación__: esta opción es del tipo casilla de selección, que cuando se marca pone a disposición siete otras casillas de selección, para que se elijan los días de la semana en que se aplicará la promoción. Si desea que la promoción se aplique en cualquier día de la semana, no seleccione esta opción.
- __¿Cuál tipo es el valor del descuento? __:
  1. __Precio Máximo por Ítem__: define el precio máximo para cada ítem de la compra.
  2. __Envío gratis__: descuento total sobre el valor del flete.
  3. __Regalo__: descuento total sobre el valor del producto definido como regalo. Al seleccionar esta opción abren los campos para ingresar un SKU, la caja para activar el multiplicador de regalos y la cantidad de productos diferentes que serán dados de regalo. El SKU puede ser ingresado por el nombre o Id, pudiendo ser incluido más de uno. Para aprender a configurar este tipo de descuento, lea el artículo [Configurar promoción Compre y gane para un SKU específico](/pt/tutorial/configurar-promocao-compre-e-ganhe-para-um-sku-especifico).
- __Destaque en los productos__: ingrese un tag con el nombre de la promoción. Utilizado en la vitrina y en la página de producto. Este flag solo se ingresará si utiliza el control correcto de exhibición de promoción en el template. <vtex.cmc:discountHightLight>;
- __Seller__: seleccione el seller que ofrecerá el descuento. Si tiene multitienda, aparecerán aquí todos los sellers que haya registrado en su cuenta. Esta opción posibilita crear, condicionar un descuento diferente para cada seller.
- __Política Comercial__: seleccione las Políticas Comerciales que ofrecerán el descuento. Se listarán aquí todas las políticas que haya registrado en: `E-Commerce> Marketplace> Políticas Comerciales`. Esta opción permite crear una promoción específica para una o más de una política comercial.

## Compre y Gane

- __Colecciones__: digite el nombre de la colección de productos a la que desea ofrecer este tipo de descuento. Se puede ingresar más de una. La promoción se aplicará solamente a los productos que estén en las colecciones registradas en este campo.
- __SKUs__: puede ingresar el nombre o Id de los SKUs a los que desea aplicar el descuento. Puede importar una lista de SKUs, que debe estar guardado en un archivo de texto (.txt) con cada ID en una línea diferente.

__OBS__: si no se limitan productos por colección o SKU, la plataforma no permitirá la creación de la promoción.

__Atención__: solo es posible registrar, como máximo, 100 SKUs en la promoción Compre y Gane.

- __Cantidad de productos para el Beneficio__: permite definir la cantidad de productos que deben ingresarse en el carrito, para que el descuento sea concedido. Este campo debe rellenarse obligatoriamente.

## ¿Cuáles son las condiciones para que la promoción sea válida?

- __Restricción por BIN__: define para qué tarjetas de crédito la promoción estará activa.
- __Cluster de Clientes__: puede utilizar un campo existente en la Entidad de Datos __CL__ para crear una restricción. Ejemplo: `edad=25`
- __Tipo de flete__: el descuento se concederá si el tipo de flete es el mismo que el registrado.
- __Utm\_source__: el descuento se concederá si la navegación se realiza con utm\_source con el valor registrado.
- __Utm\_campaign__: el descuento se concederá si la navegación se realiza con utm\_campaign con el valor registrado.
- Restricciones y limitaciones de uso

## Restricciones y Limitaciones de uso

- __Solamente para ítems iguales__: el descuento solamente será aplicado por SKU, siempre que cada uno tenga la cantidad mínima registrada. Si no marca esta opción, el descuento se aplicará a los productos de la colección o lista de SKU, sin que cada uno de estos tenga en el carrito necesariamente la cantidad registrada, siendo considerado la sumatoria de las unidades de estos productos.
- __Permitir acumular promociones__: permite que más de una promoción con el mismo tipo de descuento sea concedida al mismo tiempo.

