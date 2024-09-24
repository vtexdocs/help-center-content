---
title: 'Cambiar los datos de seguimiento'
id: 63c2hG3fBSCnchiMBOR5Ck
status: PUBLISHED
createdAt: 2021-12-17T18:17:47.739Z
updatedAt: 2023-03-29T15:05:42.352Z
publishedAt: 2023-03-29T15:05:42.352Z
firstPublishedAt: 2021-12-17T18:30:56.599Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: changing-tracking-data
locale: es
legacySlug: cambiar-los-datos-de-seguimiento-beta
subcategoryId: 3VNOhxDrvYxJThhuJClrYZ
---

Al introducir los datos de seguimiento en la plataforma, los administradores de tiendas y los clientes pueden seguir las entregas de los pedidos. Para insertar o modificar los datos de seguimiento, los pedidos deben [haber sido ya facturados](https://help.vtex.com/es/tutorial/como-faturar-um-pedido-manualmente--7p1h852V5t54KyscpgxE2v).  

Hay dos maneras de introducir los datos de seguimiento del pedido:

* **Mediante API:** utilizando la [API Update order's partial invoice (send tracking number)](https://developers.vtex.com/vtex-rest-api/reference/invoice#updatepartialinvoicesendtrackingnumber) para implementar una integración que envíe los datos de seguimiento de forma automatizada o en masa, según las necesidades de tu negocio.
* **[En el Admin:](#como-cambiar)** modificando manualmente los datos de seguimiento de cada pedido.

## Cómo cambiar

Para cambiar los datos de un pedido manualmente, sigue los pasos a continuación: 

1. En el Admin VTEX, accede a **Pedidos > Todos los pedidos**, o escribe **Todos los pedidos** en la barra de búsqueda en la parte superior de la página.
2. Selecciona el pedido que quieres modificar. Recuerda que el pedido debe tener la factura incluida.
3. En la página de detalles del pedido, ve a la sección **Factura**.
4. Haz clic en <i class="fas fa-ellipsis-v"></i>`Acciones`.
5. Haz clic en `Editar datos de seguimiento`.
6. Se abrirá una nueva ventana en la que deberás rellenar los siguientes datos:
    * **Número de seguimiento:** número de seguimiento proporcionado por la transportadora.
    * **Clave de acceso:** rellena este campo cuando el sitio web de la transportadora utilice una clave de acceso para realizar la consulta mediante URL.
    * **URL de seguimiento:** enlace a la página de la transportadora para el seguimiento del pedido.
    * **Seleccionar transportadora: **selecciona la transportadora que realizará la entrega.
7. Haz clic en `Guardar`.

![FaturaES](//images.ctfassets.net/alneenqid6w5/24K1rMqn970zgeKxK81f3Z/a94ecc1266048ad8f4c973a0b9042c5a/FaturaES.png)
