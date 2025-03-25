---
title: 'Nueva Sección de Mis Pedidos'
id: 2WYPDPojbaAWmqSiqAyewg
status: ARCHIVED
createdAt: 2017-05-03T20:07:13.624Z
updatedAt: 2021-03-24T22:27:19.597Z
publishedAt: 
firstPublishedAt: 2017-05-03T20:41:22.681Z
contentType: tutorial
productTeam: Post-purchase
author: authors_6
slugEN: new-my-orders-area
locale: es
legacySlug: nueva-seccion-de-mis-pedidos
subcategoryId: 2t00bBkcAwIkgSCGKsMOwY
---

>⚠️ Esta actualización és una *major* y **no és compatible con las customizaciones de la página actual de Mis Pedidos**. 
>
>
> 
>
>
> 
> Dado que la nueva estrutura de páginas es completamente diferente, será necesário volver a modificar las customizaciones para migrar a esta versión. Ver detalles sobre cómo actualizar su customización en [Customizando la sección Mis Pedidos](http://help.vtex.com/es/tutorial/customizando-la-seccion-mis-pedidos).

VTEX busca usar estrategias modernas para crear productos que atiendan cada vez mejor al mercado de e-commerce. Por esa razón, comenzamos a usar las librerías de desarrollo React JS en nuestras features más recientes: la nueva página de **Mis Pedidos** es un ejemplo. Ella viene con nuevas features y nuevo diseño, y fue creada de cero usando React.

![Pantalla de lista del nuevo mis pedidos](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Orders/All%20orders/nueva-seccion-de-mis-pedidos_1.png)

### Nueva experiencia de navegación

React no fue escogido solo para estar alineados con la nueva plataforma VTEX — por ser una single-page application cargada dentro de la tienda -, sino que la nueva área de pedidos posee una navegación suave, con una experiencia mucho mejor para el usuario.

![Navegación Mis Pedidos com carga instantânea entre páginas](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Orders/All%20orders/nueva-seccion-de-mis-pedidos_2.gif)

### Features

Este update en Mis Pedidos servirá de punto de partida para nuevas features en esta sección, más ya trae mejorías en esta primera versión, comoun  layout mobile-ready y el timeline de pedido — que muchas agencias implementabam como una customización.

![Mis Pedidos Mobile y Desktop](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Orders/All%20orders/nueva-seccion-de-mis-pedidos_3.png)

![Detalles del pedido](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Orders/All%20orders/nueva-seccion-de-mis-pedidos_4.png) 

Otra feature nueva es las Razones predefinidas de Cancelació, que el cliente podrá escoger en caso de que no quiera escribir una razón. Estas opciones pueden ser fácilmente customizadas y traducidas en las configuraciones del Portal:

![Cancelación de pedido](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Orders/All%20orders/nueva-seccion-de-mis-pedidos_5.png)

![Customización de razones de cancelación](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Orders/All%20orders/nueva-seccion-de-mis-pedidos_6.png)

¡Ahora también estamos soportando traducción nativa del Mis Pedidos para el francês!


### Como activar

Para no causar problemas de compatibilidad y quebrar las customizaciones actuales, la nueva sección de Mis Pedidos viene con un opt-in, que permite a las tiendas inicialmente migrar a la velocidad que deseen. Este opt-in se encuentra en el Portal, en la misma sección que la customización de las Razones de Cancelación:

![Activando el nuevo mis pedidos](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Orders/All%20orders/nueva-seccion-de-mis-pedidos_7.png)

Antes de activar la nueva versión, se puede ver que el acceso a su tienda por el ambiente beta `accountname.vtexcommercestable.com.br/account/orders`.

Este opt-in quedará disponible hasta el **24 de Julio de 2017**. Luego, todas las tiendas tendrán migrada y activa en Stable la versión nueva, y la antigua será discontinuada.

Es importante notar que las customizaciones deberán ser redesarrolladas, pues la nueva estructura de páginas es completamente diferente. Para ver más detalles sobre como actualizar su customización, vea el tutorial [Customizando la Sección Mis Pedidos](http://help.vtex.com/es/tutorial/customizando-la-seccion-mis-pedidos).
