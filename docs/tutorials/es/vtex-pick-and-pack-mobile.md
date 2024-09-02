---
title: 'VTEX Pick and Pack Mobile'
id: 3i1K01CQlDBFYYp42WFOet
status: PUBLISHED
createdAt: 2024-04-04T20:42:46.548Z
updatedAt: 2024-04-06T02:45:49.741Z
publishedAt: 2024-04-06T02:45:49.741Z
firstPublishedAt: 2024-04-06T01:59:46.300Z
contentType: tutorial
productTeam: Post-purchase
author: 2o8pvz6z9hvxvhSoKAiZzg
slug: vtex-pick-and-pack-mobile
locale: es
legacySlug: vtex-pick-and-pack-mobile
subcategory: 7Kllu6CmeLNV3tYXlCFvOt
---

<div class = "alert alert-info">
<p>Si ya es cliente de VTEX y desea adoptar esta funcionalidad para su negocio, por favor, póngase en contacto con el <a href="https://help.vtex.com/es/tracks/soporte-en-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ">Soporte Comercial</a>. Pueden aplicarse tarifas adicionales. Si aún no es cliente pero está interesado en esta solución, por favor, complete el <a href="https://vtex.com/co-es/contacto/">formulario de contacto</a>.</p>
</div>

La aplicación móvil de [VTEX Pick and Pack](https://help.vtex.com/es/tutorial/vtex-pick-and-pack-fulfillment--1zGUEItEEVsal6cuBEBNcA) ayuda al alistador (profesional responsable de seleccionar y empacar los ítems en la instalación) en la preparación de los pedidos, desde el alistamiento de los ítems hasta el envío. Esto hace que el flujo de alistamiento y envío de los pedidos de la tienda sea más organizado y fluido.

![pickpack-mobile-es](//images.ctfassets.net/alneenqid6w5/4VZJd6qfgBB45lcqptQ5L9/b4c69a98c2576d0f90e9b676d41b7ac6/image.png)

La preparación de pedidos se divide en cuatro etapas, que siguen el flujo habitual de los pedidos en la tienda:

- [Crear hoja de trabajo](#crear-hoja-de-trabajo)
- [Alistamiento de productos](#alistamiento-de-productos)
- [Empaque del pedido](#empaque-del-pedido)
- [Envío de los paquetes](#envio-de-los-paquetes)

## Hojas de trabajo

Una hoja de trabajo consiste en un conjunto de pedidos que serán procesados por el flujo de Pick and Pack simultáneamente. Este enfoque permite una gestión eficiente, agilizando el procesamiento simultáneo de múltiples pedidos.

Por ejemplo, considera una hoja de trabajo que incluya solamente tres pedidos:

- Pedido 1: una camiseta roja y una falda rosa.
- Pedido 2: dos camisetas rojas y un sombrero blanco.
- Pedido 3: una falda rosa y un sombrero blanco.

Al seleccionar esta hoja de trabajo para su preparación, la aplicación indicará el alistamiento de:

- Tres camisetas rojas.
- Dos faldas rosas.
- Dos sombreros blancos.

A continuación, la aplicación dará soporte para el empaque de cada pedido con sus respectivos ítems.

<div class="alert alert-warning">
Las hojas de trabajo solo se aplican a las etapas de alistamiento y empaque de los pedidos. Los envíos de cada pedido deben realizarse por separado.
</div>

## Crear hoja de trabajo

La pestaña Sin asignar muestra en una lista los pedidos que deben seleccionarse para agregarlos a las hojas de trabajo. 

![pickpack-ordemservico-es](//images.ctfassets.net/alneenqid6w5/2zTfjSklG6b57gEHryo2BI/d09cf0ea6e858d28afebb79b55999e31/image.png)

Para agregar una hoja de trabajo sigue los pasos a continuación:

En la pantalla de inicio, haz clic en Sin asignar <i class="fas fa-arrow-right"></i>.
Selecciona los pedidos que deseas incluir en la hoja de trabajo. Para crear una hoja de trabajo con todos los pedidos, haz clic en <i class="fas fa-square"></i> `Seleccionar todos`.
Haz clic en `Empezar a alistar`.

## Alistar productos

La etapa de alistamiento consiste en seleccionar físicamente los ítems de una [hoja de trabajo](#hojas-de-trabajo) y llevarlos a la zona adecuada de tu instalación para su posterior empaque.

### Hojas de trabajo pendientes

La pestaña __Pendientes__ muestra la lista de hojas de trabajo cuyo alistamiento no ha finalizado.

![pickpack-pendente-es](//images.ctfassets.net/alneenqid6w5/43VayjqahaHNiFLoT2gjbm/ff9f1a49db76f2032e7021971bf15cad/image.png)

En esta pestaña, puedes seleccionar por el ID de una hoja de trabajo si deseas que se muestren solamente los ítems ya alistados de ese pedido.

Si hay hojas de trabajo asignadas al alistador, puedes acceder a ellas desde la pantalla de alistamiento siguiendo estos pasos:

1. En la pantalla de inicio de la aplicación, haz clic en **Continuar alistando**. Aparecerá una lista con las [hojas de trabajo](#hojasdetrabajo) asignadas al alistador que están en fase de alistamiento.
2. Haz clic en la hoja de trabajo que deseas alistar.

Al hacer clic en una hoja de trabajo se mostrará la siguiente información:

- __Ítems:__ productos que deben alistarse de la hoja de trabajo.
- __Información:__ información general sobre la hoja de trabajo y el pedido.
- __Resumen:__ productos ya alistados por el alistador.

![pickpack-em-separacao-es](//images.ctfassets.net/alneenqid6w5/5zrrsEx43mNC0shZkDiBQ0/acafdfb2d52a575eb150dbd8ad3e4bc8/image.png)

Al hacer clic en el menú <i class="fas fa-ellipsis-v"></i>, se mostrarán las siguientes acciones:

- **Agregar observación:** agrega una observación a la hoja de trabajo.
- **Listo para empaque:** utilizado para alistar o rechazar pedidos en masa.
- **Pausar alistamiento:** pausa la cuenta atrás del tiempo disponible para el alistamiento de la hoja de trabajo.
- **Abrir lector de código de barras:** utiliza la cámara del dispositivo para leer los códigos de barras de los productos.
- **Imprimir lista de alistamiento:** disponibiliza un documento con la lista de ítems de la hoja de trabajo para impresión.
- **Cerrar menú:** cierra el menú y vuelve a la pantalla de alistamiento. 

Para alistar un producto sigue estos pasos:

1. En la pantalla de __Alistamiento__, accede a la pestaña __Ítems__.
2. Haz clic en el producto que deseas alistar o desliza el producto hacia la derecha. Si el producto tiene más de una unidad, haz clic en la cantidad de unidades del producto. Para productos que contienen peso o volumen, debes confirmar la medida y, a continuación, confirmar la selección, como en el ejemplo a seguir:
![pickpack-item-es](//images.ctfassets.net/alneenqid6w5/6DXcDvIWNba93QEDb1wjo3/efdd37c986299e346a325606885a1218/image.png)

## Para alistar todos los productos de la hoja de trabajo de una sola vez, sigue estos pasos:

1. Haz clic en el menú <i class="fas fa-ellipsis-v"></i>.
2. Haz clic en la opción **Listo para empaque.** 
3. Haz clic en **Alistar todos los ítems disponibles.**

Una vez alistados, los productos aparecen en la pestaña __Resumen__.

## Rechazar ítems

Hay situaciones en las que puede ser necesario rechazar productos debido a la configuración de la tienda y a la disponibilidad de ítems en stock. 

<div class="alert alert-warning">
La opción Rechazar ítems puede no estar disponible. En caso de duda, ponte en contacto con la gerencia de la tienda.
</div>

Para rechazar un producto de la hoja de trabajo sigue los pasos que se indican a continuación:

1. Accede a la pestaña __Ítems__.
2. Haz clic y desliza hacia la izquierda el producto que deseas descartar.
3. Selecciona el motivo del rechazo en la lista **Motivos de rechazo**.
4. Selecciona el número de unidades que deseas rechazar o haz clic en `Confirmar y descartar todas las unidades`.
5. Haz clic en `Descartar unidades`.

Para descartar todos los productos de la hoja de trabajo de una sola vez, sigue estos pasos:

1. Haz clic en el menú <i class="fas fa-ellipsis-v"></i>.
2. Haz clic en la opción **Listo para empaque.** 
3. Haz clic en **Descartar todos los ítems disponibles.**

<div class="alert alert-danger">
Si se descartan todos los ítems de un pedido, el pedido se completará automáticamente.
</div>

## Reemplazar ítems

Otra opción para ítems no disponibles es sustituirlos por otros, dependiendo de la configuración de la tienda y de la disponibilidad de los ítems en stock.

<div class="alert alert-warning">
La opción Rechazar ítems puede no estar disponible. En caso de duda, ponte en contacto con la gerencia de la tienda.
</div>

Para reemplazar ítems de la hoja de trabajo sigue los pasos que se indican a continuación:

1. Accede a la pestaña __Ítems__.
2. Pulsa sobre el producto que deseas sustituir.
3. Haz clic en la opción **Reemplazar ítem**.
4. Busca o selecciona el ítem que sustituirá al producto en el pedido y haz clic en la casilla de selección <i class="fas fa-check-square"></i>. 
5. Selecciona el número de unidades que deseas reemplazar.
6. Selecciona el motivo de reemplazo en la lista de opciones.
7. Rellena el campo **Descripción** para agregar más información sobre el reemplazo.
8. Pulsa el botón `Confirmar reemplazo`.

## Finalizar alistamiento

Una vez alistados, rechazados o reemplazados todos los ítems de la hoja de trabajo, haz clic en el botón `Iniciar empaque` para que la hoja de trabajo pase a la etapa [empaque](#empaque).

## Empaque

En la etapa de empaque, el alistador selecciona los ítems de cada pedido en los respectivos embalajes de envío. La aplicación móvil de Pick and Pack permite la organización de todos los paquetes necesarios para los diversos pedidos de manera rápida y sencilla.

![pickpack-empacotamento-es](//images.ctfassets.net/alneenqid6w5/7vJJMaVu3OgpDTtpXAPOCU/282dc96e07df744684a5775a4c711d92/image.png)

Puedes acceder a la página Empaque al [concluir el alistamiento](#finalizar-alistamiento) de una hoja de trabajo o siguiendo los pasos a continuación:

1. En la pantalla de inicio de la aplicación, haz clic en **Empaque **. Aparecerá una lista con las [hojas de trabajo](#hojas-de-trabajo) asignadas al alistador que están en la etapa de empaque.
2. Haz clic en la hoja de trabajo cuyos productos deseas empacar. 

![pickpack-item-pendente-es](//images.ctfassets.net/alneenqid6w5/6ZdONyhqHoSVFf0snDQ6SO/d1a0dff72b963012706819c39a88d8c3/image.png)

Sigue los pasos que se indican a continuación para empacar ítems:

1. En __Empaque__, haz clic en el pedido que deseas empacar. 
2. Haz clic en el botón <i class="fas fa-plus"></i> del producto que deseas agregar al paquete o haz clic en <i class="fas fa-box"></i> para agregar todos los productos a la vez.
<div class="alert alert-warning">
Si optas por empacar todos los ítems del pedido, los productos que aún no se hayan empacado se registrarán en un único nuevo empaque.
</div>
5. Selecciona un tipo de paquete ya registrado o agrega uno nuevo haciendo clic en `+ Crear paquete`. 
6. Selecciona el tipo de paquete que deseas agregar.
7. Selecciona cuántas unidades del producto deseas agregar a ese paquete.
8. Haz clic en el botón `Empacar producto`.

Repite este procedimiento tantas veces como sea necesario para empacar todos los ítems de una hoja de trabajo.

Los ítems ya empacados están disponibles en la pestaña **Ítems empacados**. Puedes alternar la vista de los ítems entre una lista de ítems o de pedidos y empaques haciendo clic en <i class="fas fa-toggle-on"></i>.

__Lista de ítems__
![pickpack-item-empacotado-es](//images.ctfassets.net/alneenqid6w5/2fKkok0mKMpcwLtaaY48gd/bc3bfe853b3fe8c2f2e7f728f71a67f5/image.png)

__Pedidos y paquetes__
![pickpack-item-empacotado-2-es](//images.ctfassets.net/alneenqid6w5/6BIoHcM0CwTg8boKYiiL4T/9d3600f0ac99fe235eb017d0879e0a4a/image.png)

Una vez empacados todos los ítems de la hoja de trabajo, puedes finalizar el empaque en la pestaña __Ítems empacados__ haciendo clic en el botón `Confirmar empaque`.

A continuación, se finalizará el pedido en la aplicación. Dependiendo de la configuración de tu tienda, el alistador puede pasar a la etapa de envío. 

## Envío

La fase de envío permite crear servicios de envío para los pedidos alistados y empacados.

<div class="alert alert-warning">
El envío es una etapa opcional de la aplicación, dependiendo de tu operación y de la configuración realizada por el administrador de la tienda.
</div>

Para enviar paquetes desde la aplicación Pick and Pack, sigue los pasos que se indican a continuación:

1. En la pantalla inicial, haz clic en el menú <i class="fas fa-ellipsis-v"></i>.
2. Haz clic en la opción **A enviar.**
3. Selecciona el paquete que deseas enviar. Solo puedes seleccionar pedidos con status `Preparando envío`.
4. Rellena los datos de envío:
    - **Fecha prevista de recolección**
    - **Fecha prevista de entrega**
    ![pickpack-envio-es](//images.ctfassets.net/alneenqid6w5/241KZLvmluqVG6uR63dBze/bf144c5d0a68fef03cab3c2a7db92d33/image.png)
5. Selecciona una transportadora disponible.
6. Haz clic en `Seleccionar y continuar`.
7. Confirma la información de envío. Si no es necesario hacer correcciones, haz clic en el botón `Crear servicio`. En caso contrario, haz clic en `Atrás` y vuelve al paso 5. 

Una vez completado el registro, la información sobre el envío aparecerá en la siguiente pantalla de la aplicación. Los pedidos enviados están disponibles a través del menú <i class="fas fa-ellipsis-v"></i> __> Finalizado__. 
