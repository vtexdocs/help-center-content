---
title: 'Optimizar las búsquedas con palabras sustitutas'
id: 32FqSsl5VuQyiIMEc02Uwu
status: PUBLISHED
createdAt: 2019-01-24T20:45:49.707Z
updatedAt: 2025-06-12T20:29:40.190Z
publishedAt: 2025-06-12T20:29:40.190Z
firstPublishedAt: 2019-01-24T22:00:22.364Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 5fYXkMJagMwcSAeMAsAuOI
slugEN: how-to-optimize-searches-with-substitute-words
locale: es
legacySlug: optimizar-las-busquedas-con-palabras-sustitutas
subcategoryId: 383bZO0kymqpnNf7Z4NdEg
---

<div class = "alert alert-warning">
No recomendamos el uso de <a href="https://help.vtex.com/es/tutorial/otimizar-as-buscas-com-palavras-substitutas--32FqSsl5VuQyiIMEc02Uwu">Palabras sustitutas</a> cuando se utilice Intelligent search. Para asociar palabras con productos es preferible emplear <a href="https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/1pxAWPEglBey1UFdvcetZ">Sinónimos</a>, ya que permiten gestionar los términos por producto de una forma más escalable. Para más información, ponte en contacto con <a href="https://support.vtex.com/hc/es/requests">nuestro equipo de soporte</a>.
</div>

## Cómo funciona el buscador
El buscador de VTEX posee un algoritmo inteligente que, a partir del término buscado, identifica cuál es el mejor resultado para presentarle al usuario, o sea, se le presenta siempre el resultado que generará más conversión de venta.

<div class="alert alert-info">
Ver más detalles de <a href="https://help.vtex.com/es/tutorial/como-funciona-la-busqueda-de-vtex--tutorials_542">como funciona la búsqueda</a> en VTEX.
</div>

## Que utilidad tiene una palabra sustituta
Si el sistema de búsqueda no identifica Landing Page, Marca o Departamento de acuerdo al término buscado, aplica una búsqueda por Palabra Sustituta (palabra clave). 

Pese a tener un peso bajo para la puntuación del indexador, la utilización de palabras sustitutas es un recurso extremadamente importante, ya que hace posible alcanzar a usuarios que realizan búsquedas por términos con errores gramaticales (spagetti), redacción fonética (espagueti) o palabras mal escritas por accidentes al teclearlas (spaguetto), pero con la misma semántica que la palabra original (spaguetti).

<div class="alert alert-info">
Un recurso muy utilizado para agilizar las búsquedas del equipo interno es colocar el RefId/EAN como Palabra Sustituta en el producto. De este modo, se pueden hacer búsquedas más veloces, con resultados únicos y encontrar ágilmente el producto buscado.
</div>

## Cómo cargo una palabra sustituta

### 1. Integración de productos
Integrar los productos mediante el **Catalog API** permite agregar sus Palabras Sustitutas y asociarlas al producto en cuestión:
https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/product

### 2. Importación por planilla
Cargar las Palabras Sustitutas directamente por planilla de producto, de modo masivo:
https://help.vtex.com/es/tutorial/registrando-producto#importacion-por-planilla

### 3. Editar un producto
Cargar las palabras sustitutas directamente a cada producto individualmente en el campo "Palabras Sustitutas":
https://help.vtex.com/es/tutorial/registrando-producto#registrando-por-el-admin

## Donde Consigo Palabras Sustitutas
### Google Trends
Una buena forma de conseguir las palabras clave alternativas que un usuario suele digitar en una búsqueda es utilizando una buena herramienta de investigación de tendencias de búsqueda como Google Trends. Por ejemplo: Al buscar la palabra "Spaguetti" con filtro Argentina, se descubrirá que los usuarios relacionan esa búsqueda a términos similares como "fideos" o "espagueti".

### Google Analytics
Analizando el historial de palabras de búsqueda en Google Analytics se logrará acceder a un interesante grupo de keywords de búsqueda, en la sección de Adquisición >> Audiencia de las Campañas >> Palabras clave orgánicas. Es un buen repositorio de términos que los usuarios suelen escribir al buscar un producto específico, y que podríamos tener catalogado con otro nombre.

### Google Search Console
En el menú Tráfico de Búsqueda >> Analítica de Búsqueda, se podrá exportar un reporte con un gran número de palabras clave, que hablarán de que buscan los usuarios cuando nos encuentran en el buscador de Google.

### Partners de Catalogación
Existen empresas que se dedican a realizar bases de datos de productos, imágenes y sus atributos.
