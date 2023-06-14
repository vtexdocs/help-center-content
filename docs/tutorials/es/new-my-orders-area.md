---
title: 'Nueva Sección de Mis Pedidos'
id: 2WYPDPojbaAWmqSiqAyewg
status: DRAFT
createdAt: 2017-05-03T20:07:13.624Z
updatedAt: 2021-03-24T22:27:19.597Z
publishedAt: 
firstPublishedAt: 2017-05-03T20:41:22.681Z
contentType: tutorial
productTeam: Post-purchase
author: authors_6
slug: nueva-seccion-de-mis-pedidos
legacySlug: nueva-seccion-de-mis-pedidos
subcategory: 2t00bBkcAwIkgSCGKsMOwY
---

<div class="alert alert-warning">
Esta actualización és una <em>major</em> y <strong>no és compatible con las customizaciones de la página actual de Mis Pedidos</strong>. 
<br />
<br />
Dado que la nueva estrutura de páginas es completamente diferente, será necesário volver a modificar las customizaciones para migrar a esta versión. Ver detalles sobre cómo actualizar su customización en <a href="http://help.vtex.com/es/tutorial/customizando-la-seccion-mis-pedidos">Customizando la sección Mis Pedidos</a>.
</div>

VTEX busca usar estrategias modernas para crear productos que atiendan cada vez mejor al mercado de e-commerce. Por esa razón, comenzamos a usar las librerías de desarrollo React JS en nuestras features más recientes: la nueva página de **Mis Pedidos** es un ejemplo. Ella viene con nuevas features y nuevo diseño, y fue creada de cero usando React.

![Pantalla de lista del nuevo mis pedidos](//images.contentful.com/alneenqid6w5/6qzQL3eb7iAiMSqoMYkAKy/0d23fe714fd46a18e1372d4c2aa54356/MO1.png)

### Nueva experiencia de navegación

React no fue escogido solo para estar alineados con la nueva plataforma VTEX — por ser una single-page application cargada dentro de la tienda -, sino que la nueva área de pedidos posee una navegación suave, con una experiencia mucho mejor para el usuario.

![Navegación Mis Pedidos com carga instantânea entre páginas](//images.contentful.com/alneenqid6w5/6LN7wTA0k8maaaGGwicqkG/cb11a2c95c14d9c707e5c2a50de3ffd5/MOg.gif)

### Features

Este update en Mis Pedidos servirá de punto de partida para nuevas features en esta sección, más ya trae mejorías en esta primera versión, comoun  layout mobile-ready y el timeline de pedido — que muchas agencias implementabam como una customización.

![Mis Pedidos Mobile y Desktop](//images.contentful.com/alneenqid6w5/ESy6qfL91AK6Sg4EOqEOc/0ce3d9beaffd06c3dd27ddc7fe2ef6b4/MO2.png)

![Detalles del pedido](//images.contentful.com/alneenqid6w5/3W4TIsXbAQ4K0GGoQkiOeg/3d0d6bd97d292bf52938c4bc5c7bdc35/MO3.png) 

Otra feature nueva es las Razones predefinidas de Cancelació, que el cliente podrá escoger en caso de que no quiera escribir una razón. Estas opciones pueden ser fácilmente customizadas y traducidas en las configuraciones del Portal:

![Cancelación de pedido](//images.contentful.com/alneenqid6w5/2xKijTKi3SIOm8kQ2QY2Sk/bf2addae6991b6c0a96d46c510c57d95/MO4.png)

![Customización de razones de cancelación](//images.contentful.com/alneenqid6w5/69XLrh4ObY4e8ES00EYAim/1b21c3628851459685f1719e78654ea9/MO5.png)

¡Ahora también estamos soportando traducción nativa del Mis Pedidos para el francês!


### Como activar

Para no causar problemas de compatibilidad y quebrar las customizaciones actuales, la nueva sección de Mis Pedidos viene con un opt-in, que permite a las tiendas inicialmente migrar a la velocidad que deseen. Este opt-in se encuentra en el Portal, en la misma sección que la customización de las Razones de Cancelación:

![Activando el nuevo mis pedidos](//images.contentful.com/alneenqid6w5/Nf4NJcrnMWQEay0YmW0IU/af155d35e2db7ab7a8fa8f8e0ec8462e/MO6.png)

Antes de activar la nueva versión, se puede ver que el acceso a su tienda por el ambiente beta `accountname.vtexcommercestable.com.br/account/orders`.

Este opt-in quedará disponible hasta el **24 de Julio de 2017**. Luego, todas las tiendas tendrán migrada y activa en Stable la versión nueva, y la antigua será discontinuada.

Es importante notar que las customizaciones deberán ser redesarrolladas, pues la nueva estructura de páginas es completamente diferente. Para ver más detalles sobre como actualizar su customización, vea el tutorial [Customizando la Sección Mis Pedidos](http://help.vtex.com/es/tutorial/customizando-la-seccion-mis-pedidos).
