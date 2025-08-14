---
title: 'No logro indexar un producto del catálogo'
id: 5ZKLTqnCyGbWEYGPTCBIxI
status: PUBLISHED
createdAt: 2024-09-06T13:35:52.255Z
updatedAt: 2024-12-10T18:06:38.568Z
publishedAt: 2024-12-10T18:06:38.568Z
firstPublishedAt: 2024-09-06T20:54:50.631Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: i-cant-index-a-product-in-the-catalog
legacySlug: no-logro-indexar-un-producto-del-catalogo
locale: es
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags:
  - Catálogo
  - Indexación
  - Producto
  - SKU
  - Política comercial
---

El proceso de indexación permite reunir y organizar los datos de un producto, tales como información de catálogo, precio y stock, para mostrarlos a los clientes en la búsqueda y en la estantería de productos de la tienda.

Cualquier cambio de status o modificación de información de un producto inicia un flujo de reindexación. A continuación se mencionan algunos ejemplos que activan la reindexación:

- Modificación de datos de registro
- Activación o desactivación del producto
- Creación o remoción del producto de una colección
- Modificación del precio o cantidad de stock

> ℹ️ Para más información sobre la indexación de un producto en tiendas de [CMS - Portal legado](https://help.vtex.com/es/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj), consulta [Cómo funciona la indexación (CMS - Portal Legado)](https://help.vtex.com/es/tutorial/entendendo-o-funcionamento-da-indexacao--tutorials_256). Si tu tienda utiliza [Intelligent Search](https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG), verifica el [Historial de indexación (Intelligent Search)](https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/4flMwTaQL8FRKl1YT58ezH).

En ciertas situaciones, la indexación es interrumpida y no se muestra la información más actualizada del producto en la tienda. A continuación se mencionan algunos escenarios en los que se produce la interrupción:

- Registro incorrecto del producto en el catálogo
- Falta de una política comercial asociada al producto en el binding de la tienda
- Tiempo límite de indexación (40 segundos) alcanzado cuando el checkout recibe muchos requests de información durante la indexación. La cantidad de requests puede variar dependiendo de los siguientes factores asociados al producto:
<br>
<ul>
<br>
    	<li>Cantidad de políticas comerciales</li>
    	<li>Cantidad de SKUs</li>
    	<li>Cantidad de regiones geográficas</li>
    	<li>Cantidad de colecciones</li>
    	<li>Cantidad de sellers</li>
</ul>

## Soluciones

Para corregir los problemas que impiden indexar correctamente un producto en la tienda, considera probar las siguientes acciones:

- [Verificar los campos de registro del producto](#verificar-los-campos-de-registro-del-producto)
- [Verificar la información de binding de la cuenta](#verificar-la-informacion-de-binding-de-la-cuenta)
- [Reducir las políticas comerciales asociadas al producto](#reducir-las-politicas-comerciales-asociadas-al-producto)
- [Modificar la cantidad de SKUs por producto](#modificar-la-cantidad-de-skus-por-producto)
- [Remover SKUs de colecciones](#remover-skus-de-colecciones)
- [Reindexar la base de productos de la tienda](#reindexar-la-base-de-productos-de-la-tienda)

### Verificar los campos de registro del producto

Los errores en el registro de un producto pueden generar inconsistencias al reindexarlo.

<blockquote><ui>1. En el Admin VTEX, accede a **Catálogo > Todos los productos**.</ui>

<blockquote>> ⚠️ Las tiendas que utilizan la página **Produtos y SKUS (Beta)** deben verificar los campos de registro de productos accediendo a **Catálogo > Produtos y SKUS** en el Admin VTEX. Más información e [Produtos y SKUS (Beta)](https://help.vtex.com/es/tutorial/products-and-skus-beta--2ig7TmROlirWirZjFWZ3By).</blockquote>

<blockquote><ui>2. Ubica el producto que deseas y haz clic en **Modificar**.</ui>

<blockquote><ui>3. Comprueba que la información de todos los [campos de cadastro](https://help.vtex.com/es/tutorial/campos-de-cadastro-de-produto--4dYXWIK3zyS8IceKkQseke) esté correcta. De ser necesario, actualiza la información y haz clic en Guardar.</ui>

<blockquote><ui>4. Accede al informe de indexación en **Catálogo > Informes** y comprueba que el producto esté en la cola de indexación o que ya haya sido indexado.</ui>

### Verificar la información de binding de la cuenta

Cuando la cuenta tiene [más de una tienda](https://help.vtex.com/es/tutorial/gestionar-multitienda--4S0lFVBPylRS5KpVgdyDhJ), se debe realizar un proceso de [binding](https://help.vtex.com/es/tutorial/o-que-e-binding--4NcN3NJd0IeYccgWCI8O2W) para vincular el sitio web y las políticas comerciales aplicables a cada tienda. Si un producto está relacionado a una política comercial que no es parte del binding de la cuenta, pueden producirse errores de indexación.

Para identificar las políticas comerciales asociadas a cada tienda de tu cuenta, consulta [Vincular una tienda a una estructura de carpetas en CMS (binding)](https://help.vtex.com/es/tutorial/vincular-um-account-name-a-um-website-binding--PxjfleOw6suCSO2uGWMMs).

### Reducir las políticas comerciales asociadas al producto

Cuando un producto tiene varias políticas comerciales asociadas, las iteraciones de verificación de datos pueden producir la exclusión del producto de la cola de indexación por agotar el tiempo límite de espera.

Ejemplo: si un producto tiene 5 SKUs activos en 5 políticas comerciales diferentes, deben realizarse 25 validaciones de disponibilidad de stock, reglas de precios y promociones.

Para evitar este escenario, verifica si existe la posibilidad de utilizar una misma política comercial para distintos marketplaces, según se describe en [Configurar política comercial para marketplace](https://help.vtex.com/es/tutorial/configurando-a-politica-comercial-para-marketplace--tutorials_404).  

> ⚠️ Si es posible reducir el número de políticas comerciales de tu tienda, vuelve a acceder al registro del producto para cambiar la política comercial y verifica el informe de indexación, según se describe en [Verificar los campos de registro del producto](https://docs.google.com/document/d/1EJY1pNrzyNDLY9jIKwxoVM7H-a_MiY5gwRBWcA7kKrQ/edit#heading=h.thoceo5ljuhz).

### Modificar la cantidad de SKUs por producto

Al igual que las políticas comerciales, tener muchos SKUs asociados a un producto puede hacer que se agote el tiempo límite de espera de la indexación. Para reducir la probabilidad de que se produzca este error, considera dividir un productos en varios productos con menor cantidad de SKUs.

Ejemplo: si el producto "Camisa" tiene seis SKUs (Amarillo P, Amarillo M, Amarillo G, Azul P, Azul M y Azul G), lo puedes dividir en dos productos con tres SKUs cada uno: "Camisa amarilla" (P, M y G) y "Camisa azul" (P, M y G).

Después de reorganizar la cantidad de SKUs por productos, verifica el informe de indexación, según se describe en la sección [Verificar los campos de registro del producto](https://docs.google.com/document/d/1EJY1pNrzyNDLY9jIKwxoVM7H-a_MiY5gwRBWcA7kKrQ/edit#heading=h.thoceo5ljuhz).

### Remover SKUs de colecciones 

> ℹ️ Hay dos maneras de remover un SKU de una colección: a través de [CMS - Portal Legado](https://help.vtex.com/es/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj) o en el módulo **Colecciones (Beta)**. Esta sección describe cómo remover un SKU de una colección mediante **CMS - Portal Legado**. Para más información sobre el procedimiento en el módulo **Colecciones (beta)**, consulta [Eliminación de productos](https://help.vtex.com/es/tutorial/cadastrar-colecoes-beta--yJBHqNMViOAnnnq4fyOye#remocao-de-produtos).  

Si alguno de los SKUs del producto forma parte de una [colección](https://help.vtex.com/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/4hN41yU8IPeb8HKmmaXoca), también puede agotarse el tiempo límite de espera de la indexación. Para comprobar si el SKU forma parte de una o más colecciones, sigue los pasos a continuación:

1. En el Admin VTEX, accede a __Storefront > Layout__.
2. Haz clic en la carpeta __CMS__ y en __Product Cluster (Collections)__.
3. Haz clic en la primera colección de la lista.
4. En la parte inferior de la columna __Other options__, comprueba si el SKU está disponible en la lista. Si está presente y no hay ningún obstáculo para removerlo de la colección, haz clic en el botón de remover (junto al SKU).
5. Repite el paso 4 para el mismo SKU en todas las colecciones de __Product Cluster (Collections)__.
6. Accede al informe de indexación en __Catálogo > Informes__ y comprueba que el producto esté en la cola de indexación o que ya haya sido indexado.

### Reindexar la base de productos de la tienda

Se puede realizar una reindexación completa de la base de productos para actualizar la información de todos los productos de la tienda al mismo tiempo.

En las tiendas que tienen menos de 100 mil productos registrados en el catálogo, el [usuario titular](https://help.vtex.com/es/tutorial/o-que-e-o-usuario-master--3oPr7YuIkEYqUGmEqIMSEy) de la cuenta puede utilizar la función __Programar reindexación completa__ en el Admin VTEX.

Las cuentas que tienen 100 mil productos o más registrados deben ponerse en contacto con el [soporte VTEX](https://help.vtex.com/es/faq/como-funciona-o-suporte-da-vtex--3kACEfni4m8Yxa1vnf2ebe) para realizar esta operación.

Más información en [Mantenimiento de base de datos (full cleanup)](https://help.vtex.com/es/tutorial/manutencao-de-base-full-cleanup--34P9LGs7BCIQK6acQom802).

![Programar reindexación completa](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/troubleshooting/store-operations/no-logro-indexar-un-producto-del-catalogo_1.png)
