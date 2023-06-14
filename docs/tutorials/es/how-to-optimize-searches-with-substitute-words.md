---
title: Optimizar las búsquedas con palabras sustitutas
id: 32FqSsl5VuQyiIMEc02Uwu
status: PUBLISHED
createdAt: 2019-01-24T20:45:49.707Z
updatedAt: 2021-09-14T19:00:59.249Z
publishedAt: 2021-09-14T19:00:59.249Z
firstPublishedAt: 2019-01-24T22:00:22.364Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 5fYXkMJagMwcSAeMAsAuOI
slug: optimizar-las-busquedas-con-palabras-sustitutas
legacySlug: optimizar-las-busquedas-con-palabras-sustitutas
subcategory: pwxWmUu7T222QyuGogs68
---

<div class = "alert alert-warning">
  <strong>Atención</strong>: VTEX presenta dos opciones de búsqueda - La búsqueda VTEX y VTEX Intelligent Search. Este artículo se refiere a la búsqueda VTEX. Para saber más sobre la aplicación VTEX Intelligent Search, consulte <a href = "https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb">nuestra guía</a>.
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
Integrar los productos mediante el webservice ProductInsertUpdate permite agregar sus Palabras Sustitutas y asociarlas al producto en cuestión:
<http://help.vtex.com/es/tutorial/manual-de-clases-y-metodos-utilizados-en-webservice>

### 2. Importación por planilla
Cargar las Palabras Sustitutas directamente por planilla de producto, de modo masivo:
<https://help.vtex.com/es/tutorial/registrando-producto#importacion-por-planilla>

### 3. Editar un producto
Cargar las palabras sustitutas directamente a cada producto individualmente en el campo "Palabras Sustitutas":
<https://help.vtex.com/es/tutorial/registrando-producto#registrando-por-el-admin>

## Donde Consigo Palabras Sustitutas
### Google Trends
Una buena forma de conseguir las palabras clave alternativas que un usuario suele digitar en una búsqueda es utilizando una buena herramienta de investigación de tendencias de búsqueda como Google Trends. Por ejemplo: Al buscar la palabra "Spaguetti" con filtro Argentina, se descubrirá que los usuarios relacionan esa búsqueda a términos similares como "fideos" o "espagueti".

### Google Analytics
Analizando el historial de palabras de búsqueda en Google Analytics se logrará acceder a un interesante grupo de keywords de búsqueda, en la sección de Adquisición >> Audiencia de las Campañas >> Palabras clave orgánicas. Es un buen repositorio de términos que los usuarios suelen escribir al buscar un producto específico, y que podríamos tener catalogado con otro nombre.

### Google Search Console
En el menú Tráfico de Búsqueda >> Analítica de Búsqueda, se podrá exportar un reporte con un gran número de palabras clave, que hablarán de que buscan los usuarios cuando nos encuentran en el buscador de Google.

### Partners de Catalogación
Existen empresas que se dedican a realizar bases de datos de productos, imágenes y sus atributos.
