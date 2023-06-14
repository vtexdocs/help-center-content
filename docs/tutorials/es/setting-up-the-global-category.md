---
title: 'Configurar la categoría global'
id: tutorials_188
status: PUBLISHED
createdAt: 2017-04-27T22:16:11.527Z
updatedAt: 2023-03-14T17:22:19.456Z
publishedAt: 2023-03-14T17:22:19.456Z
firstPublishedAt: 2017-04-27T23:00:46.100Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slug: configurando-a-categoria-global
locale: es
legacySlug: configurando-a-categoria-global
subcategory: 1E7tziZCkY4w8i4EmUuwec
---

El árbol de la categoría global es la taxonomía creada por Google para el [Merchant Center](https://support.google.com/merchants/answer/6324436), y que en el sistema de VTEX queda pre-definido como un árbol único.

Las mismas categorías globales están disponibles para los productos de todas las tiendas.

<div class="alert alert-info">
Para todas las categorías de su tienda es necesario elegir una categoría global.
</div>

### ¿Por qué usar?

Adoptamos esa taxonomía porque es ampliamente aplicable a cualquier contexto, y por lo tanto auxilia en la integración de la tienda con canales de venta externos.

Se utiliza, por ejemplo, como referencia para la integración de productos con Amazon, Buscapé y marketplaces.

<div class = "alert alert-info">
El comportamiento predeterminado de nuestra integración con Google Shopping es <strong>no enviar</strong> esta información. Por lo tanto, la mayoría de las tiendas se basan en la propia categorización automática de Google. Si prefiere la categorización manual, <a href="https://help.vtex.com/es/tutorial/abrir-tikets-para-el-soporte-vtex--16yOEqpO32UQYygSmMSSAM" target="_blank">contacte nuestro soporte</a>.
</div>

### ¿Cuándo se aplica?

La categoría global sólo se utiliza en las integraciones externas, por ejemplo con marketplaces o demás canales de venta.

### Cómo elegir una categoría global?

Una buena asignación hace que los productos de la tienda se encuentren en plataformas externas de forma más eficaz.

Usted siempre debe elegir la categoría global que más se acerca a los productos de la categoría en su tienda.

En general, cuanto más específica sea, mejor. Esto es porque así sus productos quedarán en los lugares más adecuados en las integraciones externas.

__Ejemplo__: si su tienda tiene una categoría "Placas base", lo ideal es elegir para ella la categoría global "Placas base", y no la categoría global "Componentes y placas de circuitos" o "Electrónicos".

### Cómo configurar la categoría global?

En el [Catálogo de VTEX](https://help.vtex.com/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ), la categoría global utilizada sigue [lista de todas las categorías de productos Google](https://support.google.com/merchants/answer/6324436?hl=es). Adoptamos este estándar porque se aplica a numerosos contextos, lo que facilita la categorización de productos de varios segmentos en una sola estructura.

Es necesario definir una categoría global. **Se aplica principalmente en la integración de una tienda con canales de venta externos.** Actualmente, VTEX utiliza este tipo de categoría solo para el conector de integración con Amazon.

Siempre debe elegir la categoría global que más se ajuste a los productos de la categoría de su tienda. Un buen mapeo hace que los partners encuentren sus productos de manera eficaz. Cuanto más específica sea la categoría, mejor.

**Ejemplo:** si su tienda tiene una categoría «Placas madre», lo ideal es elegir la categoría global «Placas madre», no la categoría global «Componentes y placas de circuito» o «Electrónica».

Lo ideal es que una categoría global se determine en la configuración de categoría. Esto permite que todos los productos de una categoría pertenezcan a la misma categoría global.

<div class="alert alert-danger">
La elección de una categoría global en el registro del producto solo se recomienda si tiene que configurarse de manera diferente a la categoría en la que se incorporó.
</div>

La configuración global de la categoría se realiza en el Admin y es obligatorio rellenarla. Para su configuración, realice los siguientes pasos:

1. En el Admin VTEX, accede a __Catálogo__, o escribe __Catálogo__ en la barra de búsqueda en la parte superior de la página.
2. Haga clic en __Categorías__.  
3. Haga clic en la categoría que desee. Puede utilizar el campo de búsqueda para seleccionar la categoría, simplemente escriba el nombre de la categoría deseada y haga clic en el ícono <i class="fas fa-search"></i>.
4. Haga clic en `Acciones`. 
5. Haga clic en `Editar`. 
6. En el campo _Categoría global VTEX_ haga clic en `Seleccionar categoría global VTEX`. 
7. Escriba el nombre de la categoría que desea encontrar y haga clic en el ícono <i class="fas fa-search"></i>. Puede utilizar el campo de búsqueda para encontrar la categoría deseada. 
8. Haga clic en la categoría deseada para seleccionarla y, a continuación, haga clic en el botón `Guardar`. 

<div class="alert alert-info">
La categoría global también se puede configurar a través de <a href="https://help.vtex.com/es/tutorial/configuring-xml--tutorials_242">XML</a>.
</div>
