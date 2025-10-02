---
title: 'VTEX Pick and Pack Mobile'
id: 3i1K01CQlDBFYYp42WFOet
status: PUBLISHED
createdAt: 2024-04-04T20:42:46.548Z
updatedAt: 2025-10-01T19:33:57.065Z
publishedAt: 2025-10-01T19:33:57.065Z
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

La preparación de pedidos se divide en tres etapas, que siguen el flujo habitual de los pedidos en la tienda:

- [Crear hoja de trabajo](#crear-hoja-de-trabajo)
- [Alistamiento de productos](#alistamiento-de-productos)
- [Empaque del pedido](#empaque-del-pedido)

## Menú

El menú de la aplicación __VTEX Pick and Pack__ reúne las principales funcionalidades que ayudan en la navegación y la ejecución de tareas. Permite acceder a diferentes secciones de la aplicación fácilmente. 

Para acceder al menú, haz clic en el ícono <i class="fas fa-grip-lines"></i> en la parte superior derecha, donde se muestran los siguientes campos:

![pickpack-menu-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/env%C3%ADo/vtex-pick-and-pack/vtex-pick-and-pack-mobile_2.png)

- <i class="fas fa-house"></i> __Resumen__: botón que redirige a la pantalla de inicio de la aplicación.
- <img src="https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/env%C3%ADo/vtex-pick-and-pack/vtex-pick-and-pack-mobile_12.png" alt="pickpack-logout" width="30" height="30">: botón para cerrar sesión en la aplicación.
- <i class="fas fa-history"></i> __Historial__: botón que redirige al historial de hojas de trabajo finalizadas.
- <i class="fas fa-globe"></i> Idioma: botón para cambiar el idioma de la aplicación.
- __Cambiar a__ <img src="https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/env%C3%ADo/vtex-pick-and-pack/vtex-pick-and-pack-mobile_13.png" alt="pickpack-logout" width="35" height="30">: botón para cambiar la instalación donde se realizará el alistamiento de los pedidos.
- Pendientes: botón que redirige a la pantalla de hojas de trabajo pendientes.
-__ A empacar__: botón que redirige a la pantalla de hojas de trabajo que están listas para empaque.
- <i class="fas fa-bell"></i>: sección de notificaciones de los últimos cambios en las hojas de trabajo.
- `Solicitar tu próxima tarea` <i class="fas fa-arrow-right"></i>: botón que dirige a la pantalla de creación de hoja de trabajo.

Para contraer el menú, haz clic en Cerrar menú <i class=\"fas fa-chevron-right\"></i>.

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

La imagen de la pestaña a continuación muestra los pedidos que deben seleccionarse para las [hojas de trabajo](#hojas-de-trabajo-pendientes): 

![pickpack-ordemservico-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/env%C3%ADo/vtex-pick-and-pack/vtex-pick-and-pack-mobile_3.png)

La lista de pedidos organiza la información de la siguiente forma:

| Pedido     | Entrega hasta el     |
| ---------- | ---------- |
| Número del pedido con la cantidad de unidades y el total de ítems que están contenidos en el mismo.       | Fecha límite para entregar el pedido.       |

Para agregar una hoja de trabajo sigue los pasos a continuación:

1. Haz clic en el menú <i class="fas fa-grip-lines"></i> .
2. Haz clic en el botón `Solicitar tu próxima tarea` <i class="fas fa-arrow-right"></i>.
3. Marca las casillas de los pedidos que deseas incluir en la hoja de trabajo. Para crear una hoja de trabajo con todos los pedidos, haz clic en Seleccionar todo.
4. Haz clic en `Empezar a alistar`.

Para buscar un pedido, escribe el ID del pedido en la barra de búsqueda. Para filtrar la lista de pedidos, haz clic en <img src="https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/env%C3%ADo/vtex-pick-and-pack/vtex-pick-and-pack-mobile_14.png" alt="pickpack-filter" width="30" height="30"> y selecciona una o más de las siguientes opciones:

* Fecha de entrega
* [Categorías](/es/tutorial/o-que-e-uma-categoria--6HV4Q3E2FauUoOQoiCCgCg)
* [Medios de pago](/es/tutorial/diferenca-entre-meios-de-pagamento-e-condicoes-de-pagamento--3azJenhGFyUy2gsocms42Q)
* [Estrategia de envío](/es/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3)
* Tipo de envío

## Alistar ítems

Durante el alistamiento, el alistador selecciona físicamente los ítems correspondientes a una [hoja de trabajo](#hojas-de-trabajo) y los lleva al espacio designado para empaque en la instalación.

### Hojas de trabajo pendientes

La pestaña __Hojas de trabajo pendientes__ muestra la lista de hojas de trabajo que no se han terminado de alistar, como se muestra en la siguiente imagen:

![pickpack-pendente-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/env%C3%ADo/vtex-pick-and-pack/vtex-pick-and-pack-mobile_4.png)

Puedes seleccionar el ID de una hoja de trabajo si deseas ver solo los ítems ya alistados de un pedido específico.

Si tienes hojas de trabajo asignadas como alistador, puedes acceder a ellas desde la pantalla de alistamiento siguiendo estos pasos:

1. Haz clic en el menú <i class="fas fa-grip-lines">&</i>.
2. Haz clic en **Pendientes**. Se mostrará una lista con las [hojas de trabajo](/es/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet#ordens-de-servico) asignadas que están en la etapa de alistamiento.
3. Haz clic en el botón <i class="fas fa-arrow-right"></i> de la hoja de trabajo del pedido que deseas alistar.

Al hacer clic en una hoja de trabajo, se mostrará la siguiente información:

* **Ítems:** productos que deben alistarse en la hoja de trabajo.
* **Actividad**: muestra los detalles de los cambios realizados en la hoja de trabajo, como productos agregados, cantidades actualizadas y reemplazos.
* **Información:** información general sobre la hoja de trabajo y el pedido.
* **Resumen:** ítems ya alistados.

![pickpack-em-separacao-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/env%C3%ADo/vtex-pick-and-pack/vtex-pick-and-pack-mobile_5.png)

Al hacer clic en el menú , se muestran las siguientes acciones:

* **Agregar observación:** [agrega una observación](/es/tutorial/vtex-pick-and-pack-configuracoes--16cs3e7hWk7c4cSZqe10O9#alteracoes-no-pedido) libre a la hoja de trabajo.
* **Agregar ítems al pedido:** inicia el flujo para [agregar nuevos ítems al pedido](#agregar-nuevos-productos-a-un-pedido).
* **Listo para empacar:** alista o rechaza pedidos en masa.
* **Pausar alistamiento:** pausa el recuento de tiempo del alistamiento de la hoja de trabajo.
* **Abrir lector de código de barras:** utiliza la cámara del dispositivo para leer los códigos de barras de los productos.
* **Imprimir lista de alistamiento:** proporciona un documento con la lista de ítems de la hoja de trabajo que puedes imprimir.
* **Cerrar menú:** cierra el menú y redirige a la pantalla de alistamiento.

Para alistar un ítem sigue estos pasos:

1. En la pantalla de __Alistamiento__, accede a la pestaña __Ítems__.
2. Haz clic en el ítem que deseas alistar o desliza el producto hacia la derecha.
    ![pickpack-item-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/env%C3%ADo/vtex-pick-and-pack/vtex-pick-and-pack-mobile_6.png)
3. Verifica la cantidad de ítems.
4. Haz clic en `Confirmar alistamiento` o `Confirmar y alistar todas las unidades`, si hay varias unidades del mismo ítem.

Para los ítems que se miden por peso o volumen, debes confirmar la medida y luego confirmar la selección, como se muestra en el siguiente ejemplo:

![pickpack-item-peso-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/env%C3%ADo/vtex-pick-and-pack/vtex-pick-and-pack-mobile_7.png)

1. En la pantalla de __Alistamiento__, accede a la pestaña __Ítems__.
2. Haz clic en el ítem que deseas alistar o desliza el producto hacia la derecha.
3. Activa la opción <i class="fas fa-toggle-on"></i> `Sincronizar peso y precio` para realizar el cálculo y autocompletar el valor total del precio del ítem por peso. Desactiva la opción <i class="fas fa-toggle-off"></i> si deseas agregar el precio y el peso del ítem manualmente.
4. Haz clic en `Confirmar alistamiento`.

Para alistar todos los productos de la hoja de trabajo de una sola vez, sigue estos pasos:

1. Haz clic en el menú <i class="fas fa-ellipsis-v"></i>.
2. Haz clic en la opción **Listo para empaque.** 
3. Haz clic en **Alistar todos los ítems disponibles.**

Una vez alistados, los productos aparecen en la pestaña __Resumen__.

## Modificar cantidad de producto

Durante el proceso de alistamiento puedes actualizar manualmente la cantidad de un producto. Esta acción se puede realizar después de recibir una solicitud del cliente, ya sea por videollamada o mensaje de texto, o cuando el stock disponible en la tienda sea diferente al registrado inicialmente.

### Al seleccionar el producto

1. En la pantalla de **Alistamiento**, haz clic y mantén presionado el ítem cuya cantidad deseas cambiar.
2. Haz clic en la opción **Agregar más unidades**.
3. Selecciona la cantidad correcta. La cantidad de ítems que puedes modificar se define en la página de [Configuración](/es/tutorial/vtex-pick-and-pack-configuracoes--16cs3e7hWk7c4cSZqe10O9#separacao) del Admin VTEX.
4. Haz clic en **Confirmar cambios**.

### Al seleccionar la hoja de trabajo

1. En la pantalla de **Alistamiento**, haz clic en la pestaña **Info**.
2. Haz clic en el menú <i class="fas fa-ellipsis-v"></i> del pedido deseado.
3. Haz clic en la opción **Agregar más unidades**.
4. Selecciona la cantidad correcta. La cantidad de ítems que puedes modificar se define en la página de [Configuración](/es/tutorial/vtex-pick-and-pack-configuracoes--16cs3e7hWk7c4cSZqe10O9#separacao) del Admin VTEX.
5. Haz clic en **Agregar productos**.

## Agregar nuevos productos a un pedido

Puedes agregar nuevos productos a un pedido manualmente después de recibir una solicitud del cliente, ya sea por videollamada o mensaje de texto. Hay dos formas de agregar nuevos productos a un pedido:

### Al seleccionar el producto

1. En la pantalla **Alistamiento**, haz clic en el menú <i class="fas fa-ellipsis-v"></i>.
2. Haz clic en la opción **Agregar producto al pedido.**
3. Selecciona el pedido al que deseas agregar el nuevo ítem.
4. Escanea el código de barras del producto o búscalo manualmente usando la barra de búsqueda.
5. Selecciona la cantidad deseada.
6. Haz clic en **Confirmar selección**.

### Al seleccionar la hoja de trabajo

1. En la pantalla de **Alistamiento**, haz clic en la pestaña **Info**.
2. Haz clic en menú <i class="fas fa-ellipsis-v"></i> del pedido deseado.
3. Haz clic en la opción **Agregar nuevo producto**.
4. Escanea el código de barras del producto o búscalo manualmente usando la barra de búsqueda.
5. Selecciona la cantidad deseada.
6. Haz clic en **Confirmar selección**.

## Descartar ítems

Hay situaciones en las que puede ser necesario rechazar productos debido a la configuración de la tienda y a la disponibilidad de ítems en stock. 

Para rechazar un producto de la hoja de trabajo sigue los pasos que se indican a continuación:

1. Accede a la pestaña __Ítems__.
2. Haz clic y desliza hacia la izquierda el producto que deseas descartar.
3. Describe en el cuadro de texto el motivo de rechazo del ítem.
    ![pickpack-item-recusa-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/env%C3%ADo/vtex-pick-and-pack/vtex-pick-and-pack-mobile_8.png)
4. Selecciona la cantidad de ítems que deseas rechazar. La cantidad de ítems que los alistadores pueden rechazar se define en la página de [Configuración](/es/tutorial/vtex-pick-and-pack-configuracoes--16cs3e7hWk7c4cSZqe10O9#separacao) en el Admin VTEX.
5. Haz clic en `Descartar unidades` para la cantidad seleccionada o haz clic en `Confirmar y descartar todas las unidades` para rechazar todos los ítems.

Para descartar todos los productos de la hoja de trabajo de una sola vez, sigue estos pasos:

1. Haz clic en el menú <i class="fas fa-ellipsis-v"></i>.
2. Haz clic en la opción **Listo para empaque.** 
3. Haz clic en **Rechazar todos los ítems disponibles** para finalizar el alistamiento.

> ❗ Si se descartan todos los ítems de un pedido, el pedido se completará automáticamente.

## Reemplazar ítems

También puedes reemplazar un ítem por otro, dependiendo de la [configuración de la tienda](/es/tutorial/vtex-pick-and-pack-settings--16cs3e7hWk7c4cSZqe10O9#picking) y la disponibilidad del ítem. Esta funcionalidad ayuda a asegurar que los clientes reciban sus pedidos a tiempo, aun cuando ciertos ítems no estén disponibles

> ⚠️ La opción Rechazar ítems puede no estar disponible. En caso de duda, ponte en contacto con la gerencia de la tienda.

Para reemplazar ítems de la hoja de trabajo sigue los pasos que se indican a continuación:

1. En la pantalla de **Alistamiento**, haz clic manteniendo presionado el ítem cuya cantidad deseas modificar.
2. Haz clic en la opción **Reemplazar ítem**.
3. Escanea el código de barras del producto o búscalo manualmente utilizando la barra de búsqueda.
4. Selecciona la cantidad deseada en unidades o agrega el valor del peso.
5. Haz clic en `Confirmar selección` y luego en `Continuar`.
6. Selecciona el motivo de la sustitución. Los motivos listados son configurables en la página de [Configuración](/es/tutorial/vtex-pick-and-pack-settings--16cs3e7hWk7c4cSZqe10O9#order-changes).
7. Haz clic en **Confirmar reemplazo y alistar**.

## Finalizar alistamiento

Una vez alistados, rechazados o reemplazados todos los ítems de la hoja de trabajo, haz clic en el botón `Iniciar empaque` para que la hoja de trabajo pase a la etapa [empaque](#empaque).

## Empaque

En la etapa de empaque, debes seleccionar los ítems de cada pedido en los respectivos paquetes de envío. La aplicación móvil de Pick and Pack permite organizar rápidamente todos los paquetes necesarios para los diferentes pedidos.

![pickpack-empacotamento-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/env%C3%ADo/vtex-pick-and-pack/vtex-pick-and-pack-mobile_9.png)

Puedes acceder a la página de Empaque al finalizar el alistamiento de una hoja de trabajo o siguiendo estos pasos:

1. Haz clic en el menú <i class="fas fa-grip-lines"></i> .
2. Haz clic en __A empacar__. Se mostrará una lista con las [hojas de trabajo](#hojas-de-trabajo) asignadas a ti que están en la etapa de empaque.
3. Haz clic en la hoja de trabajo cuyos productos deseas empacar.
    ![pickpack-item-pendente-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/env%C3%ADo/vtex-pick-and-pack/vtex-pick-and-pack-mobile_10.png)

Sigue los pasos que a continuación para empacar los ítems:

1. En __Empaque__, haz clic en el pedido que deseas empacar.
2. Haz clic en el botón `+` para confirmar la cantidad del producto que deseas agregar al paquete.
3. Haz clic en `Empacar productos`.
4. Selecciona un paquete ya registrado
5. Haz clic en `Empacar productos`.
6. Ingresa el peso total del paquete en kilogramos (kg).
7. Haz clic en `Guardar`.

### Paquete personalizado

1. En __Empaque__, haz clic en el pedido que deseas empacar.
2. Haz clic en el botón `+` para confirmar la cantidad del producto que deseas agregar al paquete.
3. Haz clic en `Empacar productos`.
4. Agrega un nuevo paquete haciendo clic en Paquete personalizado.
5. Haz clic en `Empacar productos`.
6. Rellena los siguientes campos:
   - Longitud en centímetros (cm).
   - Anchura en centímetros (cm).
   - Altura en centímetros (cm).
   - Peso total del paquete en kilogramos (kg).
7. Haz clic en `Confirmar`.

### Empaque propio del producto

1. En __Empaque__, haz clic en el pedido que deseas empacar.
2. Haz clic en el botón `+` para confirmar la cantidad del producto que deseas agregar al paquete.
3. Haz clic en `Empacar productos`.
4. Agrega un nuevo paquete haciendo clic en `No necesita empaque`.
5. Haz clic en `Empacar productos`.
6. Haz clic en `Confirmar`.

Repite este procedimiento tantas veces como sea necesario para empacar todos los ítems de una hoja de trabajo.

Los ítems ya empacados estarán disponibles en la pestaña __Ítems empacados__. 

![pickpack-itemsempacotados-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/env%C3%ADo/vtex-pick-and-pack/vtex-pick-and-pack-mobile_11.png)

Puedes realizar las siguientes acciones para cada ítem empacado al hacer clic en el botón <i class="fas fa-ellipsis-v"></i>:

- __Ver detalles__: muestra una ventana con los detalles del paquete.
- __Imprimir etiquetas__: genera una etiqueta que se agregará al paquete.
- __Definir ubicación__: registra la ubicación del paquete en una instalación por medio del código BIN, que identifica una ubicación específica en un almacén.
- __Remover paquete__: remueve el paquete de la lista de __Ítems empaquetados__ y el ítem deberá ser empacado nuevamente.

Para eliminar un ítem del paquete, haz clic en el botón `X` correspondiente.

Para finalizar el empaque, haz clic en `Confirmar empaque`.

#### Más información

* [VTEX Pick and Pack](/es/tutorial/vtex-pick-and-pack--1OOops3WrUyz7e0bnhkfXU)
* [Preguntas frecuentes sobre VTEX Pick and Pack](/es/tutorial/vtex-pick-and-pack-faq--2Rvf9vTS35vmOhkE2i0xcs)
* [VTEX Pick and Pack: Configuración](/es/tutorial/vtex-pick-and-pack-configuracoes--16cs3e7hWk7c4cSZqe10O9)
