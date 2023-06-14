---
title: 'Personalizando templates'
id: 6GyWKDbduXzdsZbH4jqhli
status: DRAFT
createdAt: 2019-02-19T19:57:29.896Z
updatedAt: 2020-03-13T21:24:44.801Z
publishedAt: 
firstPublishedAt: 2019-02-19T19:57:33.579Z
contentType: trackArticle
productTeam: VTEX IO
slug: personalizando-templates
locale: es
trackId: 5qJr8BIQXAKec9CpBWrTNv
trackSlugES: crear-una-tienda-utilizando-vtex-io
---

No hay dos tiendas de e-commerce iguales, pero todas comparten una serie de bloques de construcción comunes, como estantes, carruseles, menús, barras de búsqueda, etc. Podemos implementar una tienda entera componiendo de forma declarativa estos bloques para crear templates arbitrariamente complejos.

## Bloques y templates

De hecho, todo lo que usted ve en una página de VTEX IO se llama __bloque__. Los bloques representan *instancias de componentes configurados* y pueden __contener otros bloques__. Son la unidad más básica que representa algo que usted puede hacer en una página.

Las aplicaciones pueden *declarar* bloques tan simples como un botón o tan complejos como un template de página principal. Con el nuevo VTEX CMS, los usuarios pueden configurar y combinar nuevos bloques para crear nuevos templates o editar el layout del sitio sin tocar el código mientras ve los cambios en tiempo real.

Los bloques son reutilizables. Por lo tanto, el mismo bloque se puede utilizar en varios templates. Por ejemplo, la aplicación `vtex.shelf` exporta el componente react `Shelf`, que puede configurarse para mostrar diferentes cantidades de productos, ocultar o mostrar flechas de navegación, etc. Es posible que desee configurar todos sus estantes para mostrar siempre 4 artículos y mostrar flechas en los lados. Esta configuración es un __bloque__. Ahora usted puede montar un estante de 4 artículos en cualquier template.

## Declarando templates

Para implementar una tienda, necesitamos declarar un __template__ para cada una de las páginas que el usuario puede visitar, como la página principal, la página del producto, etc.

__Templates__ son bloques de nivel superior renderizados cuando un usuario navega a una ruta determinada. La aplicación vtex.store declara todas las rutas nativas, como la página principal, la página del producto, categoría, búsqueda, My Account, etc., así como las __interfaces__ para los bloques que se deben representar en cada página. Por ahora, usted puede pensar en interfaces como los planos del proyecto y en los bloques como los componentes configurados que de hecho aparecen en la tienda.

En una tienda construida con VTEX IO, todo template __estende la interfaz__ `store` de nivel más alto, declarada en la app `vtex.store`.

El estándar `store-theme` implementa todos los templates básicos para usted. Vamos a echar un vistazo al template de la home page:

```json
//blocks.json
{
 "store.home": {
   "blocks": [
     "carousel#home",
     "shelf#home"
   ]
 }, (...)
}
```

Como la app `vtex.store` declara una ruta que monta el bloque `store.home` en la ruta `/`, eso es lo que se representa cuando el usuario visita la raíz del dominio después de instalar la app `store-theme`.

Más abajo en este archivo, podemos encontrar la declaración para el bloque `shelf#home`:

```json
// blocks.json
{
 "shelf#home": {
   "props": {
     "orderBy": "OrderByTopSaleDESC",
     "productList": {
       "maxItems": 10,
       "itemsPerPage": 4,
       "scroll": "BY_PAGE",
       "arrows": true,
       "titleText": "New collection",
       "summary": {
         "isOneClickBuy": false,
         "showBadge": true,
         "badgeText": "OFF",
         "buyButtonText": "Comprar",
         "displayBuyButton": "displayButtonHover",
         "showCollections": false,
         "showListPrice": true,
         "showLabels": false,
         "showInstallments": true,
         "showSavings": true,
         "name": {
           "showBrandName": false,
           "showSku": false,
           "showProductReference": false
         }
       }
     }
   }
 }
}
```

## Cambios futuros importantes en el contenido de bloques

Actualmente, los bloques se ocupan de la búsqueda y la visualización de contenido. Observe la propiedad `orderBy` anterior. Se informa a este bloque sobre cómo consultar productos en la API de Search. Esto impone una limitación: si desea variar el contenido, usted debe declarar un nuevo bloque y cambiar las props correspondientes.

__Ese comportamiento se cambiará__ con una feature que se va a lanzar, que permitirá __montar contenido diferente__ en dos instancias diferentes del mismo bloque. Este cambio será compatible con versiones anteriores y ofreceremos una herramienta de migración automática para migrar bloques. Ahora vamos a volver a editar nuestra tienda.

## Declarando un nuevo estante en nuestra página principal

Para añadir un componente a esa página, basta con declarar un nuevo bloque de estante e insertarlo en el template `store.home`. Por ejemplo, vamos a crear un bloque `shelf#deals` y añadirlo a nuestro template:

```json
// blocks.json
{
 "store.home": {
   "blocks": [
     "carousel#home",
     "shelf#home",
     "shelf#deals"
   ]
 },
 "shelf#deals": {
   "props": {
     "orderBy": "OrderByBestDiscountDESC",
     "productList": {
"titleText": "Best Discounts",
	(...)
     }
   }
 }
}
```

Si guarda esto en `store/blocks.json` y ejecuta `vtex link` en su tienda, usted deberá ver un nuevo estante renderizado al visitar la página principal.

![shelf](https://images.ctfassets.net/alneenqid6w5/6Hw3fRA4E8xC0Q4bNdO6gV/8b6742fd0c57a341db0cc0baea4cfb06/shelf.svg)

Usted puede personalizar los bloques declarados por la app `store-theme` libremente y también declarar nuevos. Por ahora, usted puede encontrar la documentación para cada componente en sus [repositorios de GitHub](https://github.com/vtex-apps?q=store-components). Aquí encontrará las propiedades disponibles para cada componente.
