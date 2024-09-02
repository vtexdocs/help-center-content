---
title: 'Al añadir una SKU a través de nuestra funcionalidad "Cambiar pedido", el nombre del producto no se muestra en el pedido ni en la notificación por correo electrónico'
id: 35Q3KoOSsUr9n9XEDIk7nk
status: PUBLISHED
createdAt: 2022-04-07T14:53:35.829Z
updatedAt: 2024-02-16T20:24:27.100Z
publishedAt: 2024-02-16T20:24:27.100Z
firstPublishedAt: 2022-04-07T14:53:36.256Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: al-anadir-una-sku-a-traves-de-nuestra-funcionalidad-cambiar-pedido-el-nombre-del-producto-no-se-muestra-en-el-pedido-ni-en-la-notificacion-por-correo-electronico
locale: es
kiStatus: No Fix
internalReference: 557978
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.



La funcionalidad **Cambiar pedido** le permite añadir o eliminar artículos dentro del pedido, así como modificar el valor del mismo.

Todos los artículos del en el momento de la compra tendrán todo el contexto e información del catálogo en los detalles del pedido, mientras que por otro lado, en caso de querer añadir una nueva SKU al pedido, no se tendrá todo el contexto del catálogo, es decir, información como el nombre del producto, la imagen, etc. En este caso, sólo tendremos disponible el nombre de la SKU (**skuName**), lo que para algunas tiendas puede ofrecer una "mala" experiencia en la lectura de la información, ya que en algunos casos la tienda tiene nombres de SKU más específicos, como por ejemplo, "3 kg", "Blanco", que tienen como complemento el nombre del producto, por ejemplo, "Arroz marca X", "Camiseta de algodón" respectivamente.

Para esos ejemplos mencionados, la tienda espera tener en nuestra UI o en las notificaciones por correo electrónico al cliente el nombre completo (nombre del producto + nombre de la SKU), ejemplo:


- **Arroz Marca X - 3 kg**
- **Camiseta de algodón - Blanca**

El problema en este caso es que sólo tenemos el nombre del SKU (**skuName**), lo que dejaría nuestra UI y las notificaciones por correo electrónico como "incompletas". Basándonos en nuestros ejemplos anteriores, el administrador de la tienda y el cliente verán lo siguiente:


- **3 kg**
- **Blanco**



## Simulación



Para simularlo es posible:

1. Crear una orden
2. Avanzar con la orden hasta el estado que permite los cambios
3. Intentar añadir una nueva SKU al pedido
4. Validar el detalle del nombre en la UI del pedido
5. Validar el detalle del nombre dentro de la notificación que llega al cliente cuando se realiza un cambio en el pedido



## Workaround


En este momento no tenemos ninguna solución para este comportamiento.

