---
title: 'Configuración de tablas de precios para usuarios específicos'
id: 5S9oDOMHNmY4K0kAewAiWY
status: PUBLISHED
createdAt: 2018-08-21T13:30:27.663Z
updatedAt: 2024-08-27T17:08:00.211Z
publishedAt: 2024-08-27T17:08:00.211Z
firstPublishedAt: 2018-08-21T16:04:20.758Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slug: configuracion-de-tablas-de-precios-para-usuarios-especificos
locale: es
legacySlug: configuracion-de-tablas-de-precios-para-usuarios-especificos-con-session
subcategoryId: 4id9W3RDyw02CasOm2C2iy
---

Una tabla de precios es un conjunto de precios de SKUs que se puede aplicar a un determinado contexto. Estas tablas guardan las informaciones de los precios que se muestran en una tienda.

A diferencia de las políticas comerciales, que también se pueden utilizar para segmentar precios, no hay límites para creacion de tablas de precio. **La única limitación que existe es un máximo de 100 precios fijos para el mismo SKU**.

Por ejemplo, digamos que usted desea que los clientes de Buenos Aires vean un precio diferente del que ven los clientes de Córdoba. En este caso, puede crear dos tablas de precio diferentes, y asociar la primera a los clientes de Buenos Aires, y la segunda a los de Córdoba.

>ℹ️ Se pueden establecer precios fijos o reglas de precios para modificar el precio de un SKU en una tabla de precio.

Esto permite al comerciante más libertad para tratar con informaciones contextuales de sus clientes.

## ¿Cómo configurar tablas de precio?

Para configurar tablas de precio, necesita:

1. [Configurar el campo `priceTables` en el Master Data](#configurar-el-campo-pricetables-en-el-master-data)
2. [Definir los precios en el módulo de Precios](#definir-los-precios-en-el-modulo-de-precios)

Vea el paso a paso detallado abajo.

### Configurar el campo `priceTables` en el Master Data

Para usar tablas de precio, usted necesita habilitar el campo `priceTables` en la entidad de __Clientes__ del __Master Data__. Es decir, cada cliente de su tienda pasará a tener un atributo que indica si está asociado a alguna tabla de precio específica.

Para esto, siga los siguientes pasos:

1. En el Admin VTEX, accede a *Configuración de la tienda > Storefront > Master Data*, o escribe *Master Data* en la barra de búsqueda en la parte superior de la página.
2. Haga clic en el __botón de engranaje de Profile System__.
3. En la línea de Clientes, haga clic en el __botón de lápiz__ para editar.
4. Marque el flag del campo del listado __priceTables__.
5. Haga clic ahora en la pestaña __Schemas de Layout__ y arrastre el campo priceTables de la caja __Campos disponibles__ para donde desee - por ejemplo, para la caja __Campos de la columna 1__.
6. Haga clic en __Guardar__.

Ahora vamos a configurar el nuevo campo de su entidad de __Clientes__.

1. En home del __Master Data__, haga clic en el botón __Área avanzada__.
2. Haga clic en __Estructura de datos__.
3. Haga clic en la pestaña __Entidad de datos__.
4. En la línea de la entidad CL (Cliente), haga clic en el __botón de lápiz__ para editar.
5. En la línea del campo priceTables, haga clic en el __botón de engranaje__.
6. Marque el flag __Es filtro__.
7. En el campo __Dominio__, dentro de la caja __Configuraciones específicas de este tipo de campo__, puede introducir un nombre de dominio para cada tabla de precio diferente. A cada nombre introducido, presione Enter para mostrar un campo adicional. En el ejemplo de la siguiente imagen, ingresamos dos dominios: `Gold` y `Silver`.
Otra manera de usar tablas de precio es declarándolas directamente en el formulario de los clientes. Si se ingresa un nuevo valor de tabla de precio para un cliente, este tabla de precio pasa a existir automáticamente, sin la necesidad de haber sido declarada anteriormente en Dominios. Para crear varias, separarlas por comas. Por ejemplo: `gold, silver`.
9. Cuando haya terminado, haga clic en __Guardar__.
10. En la línea de la entidad cambiada, haga clic en el icono del disco para publicar.
11. Entonces, en la misma línea de la entidad editada, haga clic en el icono de flechas para reindexar la entidad.

>ℹ️ Cada cliente puede tener un máximo de 5 tablas de precios vinculadas a él. Cuando el cliente tiene más de una tabla de precios vinculada, el sistema seguirá el orden de las tablas de precios registradas para determinar el precio de cada SKU. Si la SKU no tiene un precio configurado en la primera tabla de precios, el sistema buscará a partir de la segunda. Si no hay ningún precio configurado en ninguna tabla vinculada al cliente, el precio aplicado será el precio base.

Ahora su entidad de __Clientes__ tiene un atributo `priceTables`, que puede ser completado directamente en la UI del Master Data o por API.

### Definir los precios en el módulo de Precios

Después de crear sus tablas de precio, puede ver el precio de cada producto de la tienda separado por tabla de precio, al igual que sucede con las políticas comerciales.

En el menú principal del Admin, ingrese a __Precios__ y elija la opción __Lista de precios__.

En el filtro de búsqueda, introduzca los nombres de las tablas creadas en el Master Data. Las tablas de precio se muestran como columnas de la lista de precios, así como las políticas comerciales.

![Filtros - ES](https://images.ctfassets.net/alneenqid6w5/4sQMk2XLRyoQvFLNrGI0A7/ba496e9ee7014e06fd7ed4a248e2d422/Filtros_-_ES.png)

Para actualizar el precio fijo en una tabla específica, haga clic en la columna de esa tabla y, a continuación, en __Definir precios fijos__.

![Lista de preços - ES](https://images.ctfassets.net/alneenqid6w5/16m3JGeeDwzioInWVBxbpl/f95259f067d5777971bd22b44f52ee08/Lista_de_pre_os_-_ES.png)

Para ingresar y actualizar los precios de una tabla específica por API, vea esta [documentación de API](https://developers.vtex.com/reference/prices-and-fixed-prices#createeditfixedpricesonapricetableortradepolicy).

>ℹ️ La tabla de precios tiene prioridad sobre el precio de la Política Comercial. Eso significa que, si determinada tabla de precios se aplica al contexto de un usuario, el precio definido en este será el usado, aunque ese cliente esté también en el contexto de una política comercial que defina un precio diferente.

## Mostrando precios diferentes para usuarios diferentes 

Cuando un usuario de su tienda no ha iniciado sesión, los precios que se le muestran son los valores estándar definidos por la política comercial.

Si el usuario ha iniciado sesión, verá los precios correspondientes a la tabla de precios a la que está asociado su e-mail.

Por ejemplo, estos dos clientes están vinculados a tablas de precios diferentes:
![Clients](https://images.ctfassets.net/alneenqid6w5/4YanVck2GswcKKEEamO6gs/d1a2bc5603716c485dd000239a49fb41/Clients.png)

Cuando el cliente Daniel, que está vinculado a la tabla Silver, inicie sesión en la tienda, verá los precios establecidos en dicha tabla. La mochila del ejemplo anterior aparecerá a USD 50.
En cambio, el cliente Breno, que está vinculado a la tabla Gold, verá los precios definidos en esta otra tabla. Para él, la mochila costará USD 60,50.

>⚠️ Recuerde que los precios varían según la sesión. Es decir, el cliente **necesita** ser autenticado para que haya alteración (ya sea a través de token, contraseña, Google o Facebook). Sin la autenticación del usuario, el precio siempre será el estándar. Y atención: el hecho de ingresar el e-mail en el proceso de checkout no es suficiente, ya que en ese proceso él realiza su identificación, pero no la autenticación.
