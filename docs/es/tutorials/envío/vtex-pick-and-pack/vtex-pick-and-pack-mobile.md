---
title: 'VTEX Pick and Pack Mobile'
id: 3i1K01CQlDBFYYp42WFOet
status: PUBLISHED
createdAt: 2024-04-04T20:42:46.548Z
updatedAt: 2025-07-07T18:08:42.360Z
publishedAt: 2025-07-07T18:08:42.360Z
firstPublishedAt: 2024-04-06T01:59:46.300Z
contentType: tutorial
productTeam: Post-purchase
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: vtex-pick-and-pack-mobile
legacySlug: vtex-pick-and-pack-mobile
locale: es
subcategoryId: 7Kllu6CmeLNV3tYXlCFvOt
---

> ℹ️ Si ya es cliente de VTEX y desea adoptar esta funcionalidad para su negocio, por favor, póngase en contacto con el [Soporte Comercial](/es/tracks/soporte-en-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ). Pueden aplicarse tarifas adicionales. Si aún no es cliente pero está interesado en esta solución, por favor, complete el [formulario de contacto](https://vtex.com/co-es/contacto/).

La aplicación móvil de [VTEX Pick and Pack](/es/tutorial/vtex-pick-and-pack-fulfillment--1zGUEItEEVsal6cuBEBNcA) ayuda al alistador (profesional responsable de seleccionar y empacar los ítems en la instalación) en la preparación de los pedidos, desde el alistamiento de los ítems hasta el envío. Esto hace que el flujo de alistamiento y envío de los pedidos de la tienda sea más organizado y fluido.

![pickpack-mobile-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/env%C3%ADo/vtex-pick-and-pack/vtex-pick-and-pack-mobile_1.png)

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

> ⚠️ Las hojas de trabajo solo se aplican a las etapas de alistamiento y empaque de los pedidos. Los envíos de cada pedido deben realizarse por separado.

## Crear hoja de trabajo

La pestaña Sin asignar muestra en una lista los pedidos que deben seleccionarse para agregarlos a las hojas de trabajo. 

![pickpack-ordemservico-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/env%C3%ADo/vtex-pick-and-pack/vtex-pick-and-pack-mobile_2.png)

Para agregar una hoja de trabajo sigue los pasos a continuación:

En la pantalla de inicio, haz clic en Sin asignar <i class="fas fa-arrow-right"></i>.
Selecciona los pedidos que deseas incluir en la hoja de trabajo. Para crear una hoja de trabajo con todos los pedidos, haz clic en <i class="fas fa-square"></i> `Seleccionar todos`.
Haz clic en `Empezar a alistar`.

## Alistar productos

La etapa de alistamiento consiste en seleccionar físicamente los ítems de una [hoja de trabajo](#hojas-de-trabajo) y llevarlos a la zona adecuada de tu instalación para su posterior empaque.

### Hojas de trabajo pendientes

La pestaña __Pendientes__ muestra la lista de hojas de trabajo cuyo alistamiento no ha finalizado.

![pickpack-pendente-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/env%C3%ADo/vtex-pick-and-pack/vtex-pick-and-pack-mobile_3.png)

En esta pestaña, puedes seleccionar por el ID de una hoja de trabajo si deseas que se muestren solamente los ítems ya alistados de ese pedido.

Si hay hojas de trabajo asignadas al alistador, puedes acceder a ellas desde la pantalla de alistamiento siguiendo estos pasos:

1. En la pantalla de inicio de la aplicación, haz clic en **Continuar alistando**. Aparecerá una lista con las [hojas de trabajo](#hojasdetrabajo) asignadas al alistador que están en fase de alistamiento.
2. Haz clic en la hoja de trabajo que deseas alistar.

Al hacer clic en una hoja de trabajo se mostrará la siguiente información:

- __Ítems:__ productos que deben alistarse de la hoja de trabajo.
- __Información:__ información general sobre la hoja de trabajo y el pedido.
- __Resumen:__ productos ya alistados por el alistador.

![pickpack-em-separacao-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/env%C3%ADo/vtex-pick-and-pack/vtex-pick-and-pack-mobile_4.png)

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
![pickpack-item-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/env%C3%ADo/vtex-pick-and-pack/vtex-pick-and-pack-mobile_5.png)

Para alistar todos los productos de la hoja de trabajo de una sola vez, sigue estos pasos:

1. Haz clic en el menú <i class="fas fa-ellipsis-v"></i>.
2. Haz clic en la opción **Listo para empaque.** 
3. Haz clic en **Alistar todos los ítems disponibles.**

Una vez alistados, los productos aparecen en la pestaña __Resumen__.

## Modificar cantidad de producto

Los alistadores pueden modificar manualmente la cantidad del producto después de recibir una solicitud del cliente, como una llamada o un mensaje de texto, o porque el stock disponible de la tienda difiere de lo que se registró inicialmente. El cambio puede hacerse de dos maneras:

### Seleccionando el producto

1. En la pantalla de **Alistamiento**, haz clic y mantén presionado el ítem cuya cantidad deseas cambiar.
2. Haz clic en la opción **Agregar más unidades**.
3. Selecciona la cantidad correcta.
4. Haz clic en **Confirmar cambios**.

### Seleccionando la hoja de trabajo

1. En la pantalla de **Alistamiento**, haz clic en la pestaña **Info**.
2. Haz clic en el menú <i class="fas fa-ellipsis-v"></i> del pedido deseado.
3. Haz clic en la opción **Agregar más unidades**.
4. Selecciona la cantidad correcta.
5. Haz clic en **Agregar productos**.

## Agregar nuevos productos a un pedido

El alistador puede agregar manualmente nuevos productos a un pedido después de recibir una solicitud del cliente, como una llamada o un mensaje de texto. Hay dos formas de agregar nuevos productos a un pedido:

### Seleccionando el producto

1. En la pantalla **Alistamiento**, haz clic en el menú <i class="fas fa-ellipsis-v"></i>.
2. Haz clic en la opción **Agregar producto al pedido.**
3. Selecciona el pedido al que deseas agregar el nuevo ítem.
4. Escanea el código de barras del producto o búscalo manualmente usando la barra de búsqueda.
5. Selecciona la cantidad deseada.
6. Haz clic en **Confirmar selección**.

### Seleccionando la hoja de trabajo

1. En la pantalla de **Alistamiento**, haz clic en la pestaña **Info**.
2. Haz clic en menú <i class="fas fa-ellipsis-v"></i> del pedido deseado.
3. Haz clic en la opción **Agregar nuevo producto**.
4. Escanea el código de barras del producto o búscalo manualmente usando la barra de búsqueda.
5. Selecciona la cantidad deseada.
6. Haz clic en **Confirmar selección**.

## Rechazar ítems

Hay situaciones en las que puede ser necesario rechazar productos debido a la configuración de la tienda y a la disponibilidad de ítems en stock. 

> ⚠️ La opción Rechazar ítems puede no estar disponible. En caso de duda, ponte en contacto con la gerencia de la tienda.

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

> ❗ Si se descartan todos los ítems de un pedido, el pedido se completará automáticamente.

## Sustituir ítems

Los alistadores también pueden sustituir un ítem por otro, dependiendo de la [configuración de la tienda](/es/tutorial/vtex-pick-and-pack-settings--16cs3e7hWk7c4cSZqe10O9#picking) y la disponibilidad del mismo. Esta funcionalidad ayuda a garantizar que los clientes reciban sus pedidos a tiempo, incluso si algunos ítems no están disponibles.

> ⚠️ La opción Rechazar ítems puede no estar disponible. En caso de duda, ponte en contacto con la gerencia de la tienda.

Para reemplazar ítems de la hoja de trabajo sigue los pasos que se indican a continuación:

1. En la pantalla de **Alistamiento**, haz clic manteniendo presionado el ítem cuya cantidad deseas modificar.
2. Haz clic en la opción **Sustituir ítem**.
3. Escanea el código de barras del producto o búscalo manualmente utilizando la barra de búsqueda.
4. Selecciona la cantidad deseada en unidades o agrega el valor del peso.
5. Haz clic en **Continuar**.
6. Selecciona el motivo de la sustitución. Los motivos listados son configurables en la página de [configuración](/es/tutorial/vtex-pick-and-pack-settings--16cs3e7hWk7c4cSZqe10O9#order-changes).
7. Haz clic en **Confirmar y alistar sustituto**.

## Finalizar alistamiento

Una vez alistados, rechazados o reemplazados todos los ítems de la hoja de trabajo, haz clic en el botón `Iniciar empaque` para que la hoja de trabajo pase a la etapa [empaque](#empaque).

## Empaque

En la etapa de empaque, el alistador selecciona los ítems de cada pedido en los respectivos embalajes de envío. La aplicación móvil de Pick and Pack permite la organización de todos los paquetes necesarios para los diversos pedidos de manera rápida y sencilla.

![pickpack-empacotamento-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/env%C3%ADo/vtex-pick-and-pack/vtex-pick-and-pack-mobile_6.png)

Puedes acceder a la página Empaque al [concluir el alistamiento](#finalizar-alistamiento) de una hoja de trabajo o siguiendo los pasos a continuación:

1. En la pantalla de inicio de la aplicación, haz clic en **Empaque **. Aparecerá una lista con las [hojas de trabajo](#hojas-de-trabajo) asignadas al alistador que están en la etapa de empaque.
2. Haz clic en la hoja de trabajo cuyos productos deseas empacar. 

![pickpack-item-pendente-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/env%C3%ADo/vtex-pick-and-pack/vtex-pick-and-pack-mobile_7.png)

Sigue los pasos que se indican a continuación para empacar ítems:

1. En __Empaque__, haz clic en el pedido que deseas empacar. 
2. Haz clic en el botón <i class="fas fa-plus"></i> del producto que deseas agregar al paquete o haz clic en <i class="fas fa-box"></i> para agregar todos los productos a la vez.
> ⚠️ Si optas por empacar todos los ítems del pedido, los productos que aún no se hayan empacado se registrarán en un único nuevo empaque.
5. Selecciona un tipo de paquete ya registrado o agrega uno nuevo haciendo clic en `+ Crear paquete`. 
6. Selecciona el tipo de paquete que deseas agregar.
7. Selecciona cuántas unidades del producto deseas agregar a ese paquete.
8. Haz clic en el botón `Empacar producto`.

Repite este procedimiento tantas veces como sea necesario para empacar todos los ítems de una hoja de trabajo.

Los ítems ya empacados están disponibles en la pestaña **Ítems empacados**. Puedes alternar la vista de los ítems entre una lista de ítems o de pedidos y empaques haciendo clic en <i class="fas fa-toggle-on"></i>.

__Lista de ítems__
![pickpack-item-empacotado-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/env%C3%ADo/vtex-pick-and-pack/vtex-pick-and-pack-mobile_8.png)

__Pedidos y paquetes__
![pickpack-item-empacotado-2-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/env%C3%ADo/vtex-pick-and-pack/vtex-pick-and-pack-mobile_9.png)

Una vez empacados todos los ítems de la hoja de trabajo, puedes finalizar el empaque en la pestaña __Ítems empacados__ haciendo clic en el botón `Confirmar empaque`.

A continuación, se finalizará el pedido en la aplicación. Dependiendo de la configuración de tu tienda, el alistador puede pasar a la etapa de envío. 

## Envío

La fase de envío permite crear servicios de envío para los pedidos alistados y empacados.

> ⚠️ El envío es una etapa opcional de la aplicación, dependiendo de tu operación y de la configuración realizada por el administrador de la tienda.

Para enviar paquetes desde la aplicación Pick and Pack, sigue los pasos que se indican a continuación:

1. En la pantalla inicial, haz clic en el menú <i class="fas fa-ellipsis-v"></i>.
2. Haz clic en la opción **A enviar.**
3. Selecciona el paquete que deseas enviar. Solo puedes seleccionar pedidos con status `Preparando envío`.
4. Rellena los datos de envío:
    - **Fecha prevista de recolección**
    - **Fecha prevista de entrega**
    ![pickpack-envio-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/env%C3%ADo/vtex-pick-and-pack/vtex-pick-and-pack-mobile_10.png)
5. Selecciona una transportadora disponible.
6. Haz clic en `Seleccionar y continuar`.
7. Confirma la información de envío. Si no es necesario hacer correcciones, haz clic en el botón `Crear servicio`. En caso contrario, haz clic en `Atrás` y vuelve al paso 5. 

Una vez completado el registro, la información sobre el envío aparecerá en la siguiente pantalla de la aplicación. Los pedidos enviados están disponibles a través del menú <i class="fas fa-ellipsis-v"></i> __> Finalizado__. 
