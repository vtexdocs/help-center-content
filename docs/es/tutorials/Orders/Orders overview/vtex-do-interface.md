---
title: 'VTEX DO'
id: 7KMbRL4OslN8DTX9oiuCiu
status: PUBLISHED
createdAt: 2022-04-04T21:12:30.592Z
updatedAt: 2023-11-06T14:21:27.706Z
publishedAt: 2023-11-06T14:21:27.706Z
firstPublishedAt: 2022-04-04T21:58:08.236Z
contentType: tutorial
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: vtex-do-interface
locale: es
legacySlug: vtex-do-beta
subcategoryId: 3VNOhxDrvYxJThhuJClrYZ
---

VTEX DO es un gestor de tareas creadas automáticamente por el Admin VTEX para que el equipo de _ecommerce_ de tu tienda las realice manualmente. Para acceder a VTEX DO, en el menú del Admin VTEX, ve a **Pedidos > [Todos los pedidos](https://help.vtex.com/es/tutorial/lista-de-pedidos--2QTduKHAJMFIZ3BAsi6Pi)** y haz clic en el ícono de bandeja de entrada, ubicado en la esquina inferior derecha de la página. Al hacer clic en el ícono, se abrirá un modal con la lista de tareas relacionadas con los pedidos de la tienda.

![VTEX Do overview ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Orders/Orders overview/vtex-do-interface_1.gif)

>ℹ️ Solo los usuarios con el perfil de acceso <a href = "https://help.vtex.com/es/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#oms-full-access">OMS - Full Access</a> pueden realizar tareas a través de VTEX DO.

Las tareas aparecen en dos pestañas:
- **Todas:** todas las tareas vinculadas a los pedidos de la cuenta de la tienda.
- **Mías:** las tareas asignadas al usuario conectado a la cuenta.

El número que aparece junto a los títulos de las pestañas corresponde a las tareas incluidas en cada categoría («Todas» y «Mías»), que incluye las tareas abiertas y cerradas. Al desplazar la barra en cada pestaña se cargan nuevas tareas en la lista.

Para salir de VTEX DO, solo tienes que hacer clic en el ícono `X` o en cualquier parte de la página «Todos los pedidos» fuera del modal.

## Buscar y filtrar tareas

Hay una barra de búsqueda para hallar las tareas. Puedes buscar por nombre de la tarea, nombre del usuario asignado a la tarea o comentario ingresado.

El selector de filtros permite marcar una sola opción o combinar filtros. Para aplicar los filtros, haz clic en `Filtro`, selecciona la opción deseada y haz clic fuera del cuadro de filtro, pero dentro del modal. Puedes filtrar las tareas por:

- Solo las abiertas
- Solo las no asignadas
- Catálogo
- Comercial
- Infraestructura
- Backoffice y ERP
- Frontend
-	Marketplace

## Tareas

Las tareas que aparecen en la lista contienen información que las caracteriza, como:

- Mensaje (descrito con más detalle en la tabla a continuación).
- ID del pedido.
- ID del pago.
- Usuario que tiene la tarea asignada.
- «Tags» utilizadas para filtrar la lista.

Para gestionar VTEX DO de forma organizada, sugerimos [marcar una tarea como Finalizada](#cerrar-tarea) solo después de que se haya completado para evitar que se repita o se pierda tiempo al ver la lista de tareas en el futuro.

Una excepción a esta recomendación es el caso en el que el administrador de la tienda decide finalizar una tarea aunque no la haya aceptado, cuando, por ejemplo, se anula una solicitud de cancelación de pedido durante el servicio de atención al cliente.

Las tareas gestionadas a través de VTEX DO pueden incluir mensajes de todos los sistemas VTEX. Algunos ejemplos de mensajes son:

<table>
  <tr>
   <td><strong>Mensaje</strong>
   </td>
   <td><strong>Descripción</strong>
   </td>
   <td><strong>Acción</strong>
   </td>
  </tr>
  <tr>
   <td>Reembolsar pago
   </td>
   <td>Se creó una solicitud de reembolso de pago.
   </td>
   <td>Accede a los <strong>Detalles de la tarea </strong>> Haz clic en <strong>Ver detalles</strong> > Autoriza o cancela el reembolso del pago en la página <strong>Detalles de la transacción</strong>.
   </td>
  </tr>
  <tr>
   <td>Autorización de pedido alterado manualmente
   </td>
   <td>El pedido se generó con un valor fuera de la<a href="https://help.vtex.com/pt/tutorial/regra-de-divergencia-de-valores--6RlFLhD1rIRRshl83KnCjW"> Regla de divergencia de precios</a> configurada.
   </td>
   <td>Accede a los <strong>Detalles de la tarea </strong>> Haz clic en <strong>Ver detalles </strong>> Autoriza o cancela el pedido en la página <strong>Detalles del pedido</strong>.
   </td>
  </tr>
  <tr>
   <td>Cancelación solicitada
   </td>
   <td>El comprador solicitó la cancelación de su pedido. Sugerimos que el centro de atención al cliente de tu tienda se ponga en contacto con la persona para ofrecerle ayuda antes de cancelar el pedido.
   </td>
   <td>Accede a los <strong>Detalles de la tarea </strong>> Haz clic en <strong>Ver detalles </strong>> Autoriza o cancela el pedido en la página <strong>Detalles del pedido</strong>.
   </td>
  </tr>
  <tr>
   <td>Ocurrió un problema en la generación del pedido recurrente
   </td>
   <td>Los pedidos de<a href="https://help.vtex.com/pt/tutorial/como-configurar-assinatura-v2--1FA9dfE7vJqxBna9Nft5Sj"> suscripción</a> generalmente no se autorizan por problemas con la tarjeta de crédito del comprador. Sugerimos que el centro de atención al cliente de tu tienda se ponga en contacto con la persona para ofrecerle ayuda.
   </td>
   <td>Accede a los <strong>Detalles de la tarea </strong>> Haz clic en <strong>Ver detalles </strong>> Autoriza o cancela el pedido en la página <strong>Detalles del pedido</strong>.
   </td>
  </tr>
  <tr>
   <td>El precio es menor que el <em>markup</em> mínimo
   </td>
   <td>El valor de la compra es menor que el <em>markup</em> o el margen de beneficio mínimo del<a href="https://help.vtex.com/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/P99EjtrlRHk92Q8qDPq29"> precio base de un SKU</a>.
   </td>
   <td>Accede a los <strong>Detalles de la tarea </strong>> Haz clic en <strong>Ver detalles </strong>> Autoriza o cancela el pedido en la página <strong>Detalles del pedido</strong>.
   </td>
  </tr>
</table>

## Detalles de la tarea

![VTEX Do details ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Orders/Orders overview/vtex-do-interface_2.jpg)

Al hacer clic en el nombre de una tarea de la lista, se te redirige al modal de detalles de la tarea que presenta más información sobre la misma y las acciones para resolverla. Se muestran los siguientes campos:

- **Asignada a:** si la tarea no tiene un responsable asignado, haz clic en `Asignar a` y busca un usuario o haz clic en `Asignar a mí` o `Reasignar`.  
- **Tags:** marcadores asociados automáticamente a la tarea que se utilizan para filtrar la lista y dar más detalles sobre el contexto, status y origen de la tarea. No es posible configurar tus propias _tags_. Solo son creadas por el sistema del Admin VTEX.    
- **Descripción:** texto que incluye información adicional sobre la tarea.
- **ID de pago/ID de pedido:** si la tarea está relacionada a un pedido, el campo mostrará el ID del pedido.  Por otro lado, si está relacionada a un pago, el campo mostrará el ID del pago.
- **Creada en: **la fecha y hora de creación de la tarea.

Los botones en el modal de detalles de la tarea incluyen:

- **Ver detalles:** al hacer clic en este botón, se te redirigirá a la página del Admin VTEX relacionada con el origen de la tarea. Por ejemplo, para las tareas que requieren correcciones de pago, se te redirigirá a la página de detalles de la transacción. La tarea se lleva a cabo en la página que se abre, según la descripción.
- **Cerrar tarea/Reabrir tarea:** al hacer clic en el botón `Cerrar tarea`, se marcará la tarea como cerrada. Por lo tanto, recomendamos solo hacer clic en este botón después de completar la acción necesaria para resolver la tarea. Puedes cancelar esta acción al hacer clic en `Reabrir tarea`. Las tareas cerradas permanecen visibles en la lista de VTEX DO.   
- **Deja un comentario:** esta sección te permite agregar comentarios internos con observaciones sobre la tarea. Para ello, escribe en la caja de texto y haz clic en `Enviar`.

## Acciones en VTEX DO

VTEX DO permite al usuario realizar acciones como:

- Asignar tareas a alguien (incluso a sí mismo).  
- Marcar las tareas como resueltas.  

A continuación, encontrarás más detalles sobre las acciones principales.

### Asignar una tarea

Para que las tareas se resuelvan rápidamente, es importante asignar un responsable para cada una de ellas. Puedes asignar una tarea a cualquier usuario con acceso al OMS de la tienda o a ti mismo. Cuando te asignas una tarea a ti mismo, ésta se convertirá en tu responsabilidad y aparecerá en la pestaña **Mías**. Si el ícono de usuario seguido de un _email_ o el ícono de estrella aparece en la tarea, significa que la tarea está asignada a alguien. Por el contrario, si estos íconos no aparecen, la tarea no está asignada a nadie.

Para asignar una tarea, sigue los pasos a continuación:  

1. En el Admin VTEX, accede a **Pedidos > Todos los pedidos**, o escribe **Todos los pedidos** en la barra de búsqueda en la parte superior de la página.  
2. Accede a VTEX DO al hacer clic en ícono de **bandeja de entrada** en la esquina inferior derecha de la página.  
3. Selecciona la tarea deseada.  
4. Haz clic en `Asignar`.  
5. Escoge el usuario al que le vas a asignar la tarea:
- Para asignar a otra persona, busca un usuario o _email_ y haz clic en la opción deseada.  
- Para asignarte la tarea a ti mismo, haz clic en **Asignar a mí**.  

Para cambiar el usuario asignado:

1. En el Admin VTEX, accede a **Pedidos > Todos los pedidos**, o escribe **Todos los pedidos** en la barra de búsqueda en la parte superior de la página.  
2. Accede a VTEX DO al hacer clic en ícono de **bandeja de entrada** en la esquina inferior derecha de la página.  
3. Selecciona la tarea deseada.  
4. Haz clic en **Reasignar**.  
5. Busca el usuario deseado en la barra de búsqueda por nombre o _email_.  
6. En el resultado de la búsqueda, haz clic en el usuario deseado.  

Para dejar la tarea sin asignar, en el paso 5 haz clic en **Remover**.

### Cerrar tareas

Para cerrar una tarea:

1. En el Admin VTEX, accede a **Pedidos > Todos los pedidos**, o escribe **Todos los pedidos** en la barra de búsqueda en la parte superior de la página.  
2. Accede a VTEX DO al hacer clic en ícono de **bandeja de entrada** en la esquina inferior derecha de la página.  
3. Haz clic en el nombre de la tarea deseada.  
4. Haz clic en **Ver detalles** y se te redirigirá a la página de origen de la tarea.  
5. Completa la tarea según la descripción.  
6. Vuelve a VTEX DO en la página de **Detalles de la tarea**.  
7. Haz clic en `Cerrar tarea`.  

Si necesitas reabrir una tarea que se haya cerrado indebidamente, puedes reabrirla en cualquier momento. Accede a la página **Detalles de la tarea** y haz clic `Reabrir tarea`.

