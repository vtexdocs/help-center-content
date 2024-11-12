---
title: 'Cómo Gestionar Suscripciones '
id: 6Jk50FPbv6iuz1OsFypv8x
status: PUBLISHED
createdAt: 2020-02-05T14:18:54.781Z
updatedAt: 2023-12-21T14:08:39.725Z
publishedAt: 2023-12-21T14:08:39.725Z
firstPublishedAt: 2020-02-11T14:56:17.333Z
contentType: tutorial
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: how-to-manage-subscriptions
locale: es
legacySlug: como-gestionar-suscripciones
subcategoryId: 1rA9wuuskW3PpjvMrhatAM
---

El **Sistema de Suscripciones** es una app desarrollada por VTEX para facilitar las ventas recurrentes. Funciona como un programador automático, realizando una recompra en la frecuencia deseada por el cliente de la tienda.

Su cliente indica con qué frecuencia desea repetir la compra de un determinado SKU y el sistema rehace el pedido de la compra automáticamente en cada período programado, con las mismas características configuradas en el pedido original. 

Para verificar cómo **configurar** la funcionalidad de Suscripciones en su tienda, acceda a [nuestro artículo](https://help.vtex.com/es/tutorial/como-configurar-assinatura-v2--1FA9dfE7vJqxBna9Nft5Sj).

La gestión de suscripciones se realiza a través de la pestaña **Dashboards** del módulo **Suscripciones** de su Admin.

## Dashboards

La pestaña **Dashboards** se centra más en el acompañamiento y la supervisión de suscripciones, que en la realización de acciones. Allí es posible extraer información para una gestión inteligente de su negocio en las secciones de **Suscripciones Únicas**, **Pedidos de Suscripción** y **Suscriptores**.    

### Suscripciones Únicas

La sección de **Suscripciones Únicas** permite: 

- Filtrar la visualización de suscripciones por período, entre los siguientes valores: `hoy`, `ayer`, `esta semana`, `este mes`, `este año`, `semana pasada`, `mes pasado`, `año pasado`, o un período `personalizado`, seleccionando fechas específicas. 
- Visualizar un **gráfico dinámico** con la relación entre las *suscripciones activas*, *canceladas*, y *total de suscripciones*, dentro del período filtrado. - Al pasar el cursor sobre las líneas del gráfico, se puede ver en detalle el movimiento de las suscripciones por día.   
- **Exportar suscripciones**  únicas dentro del período filtrado pulsando el botón de la esquina superior derecha de la pantalla.

![ES Dashboard Assinatura única](https://images.ctfassets.net/alneenqid6w5/3BEDDrOsEARRJ1XfuwABDd/ecc8168966e3379654269a2d47b405c0/ES_Dashboard_Assinatura___nica.png)

### Pedidos de Suscripción

>ℹ️ Solo puedes acceder a la información de los pedidos creados en los últimos años. Este periodo también se aplica a los pedidos de los clientes a través de [Mi Cuenta](https://help.vtex.com/es/tutorial/how-my-account-works--2BQ3GiqhqGJTXsWVuio3Xh).

La sección **Pedidos de Suscripción** permite: 

- Filtrar la visualización del **Embudo de Pedidos de Suscripción** por período, entre los siguientes valores: `hoy`, `ayer`, `esta semana`, `este mes`, `este año`, `semana pasada`, `mes pasado`, `año pasado`, o un periodo `personalizado`, seleccionando fechas específicas.  
- Acompañe el **número absoluto y porcentaje** correspondiente de Pedidos de Suscripción que han sido *programados*, *procesados*, *generados* y *completados* por período.  
- Visualizar un **gráfico** con el porcentaje de pedidos *omitidos*, *ciclos con problemas* y *error de pago*. 

![ES Dashboard Pedidos Assinatura](//images.ctfassets.net/alneenqid6w5/7s8Mp2U4qAUAxpiTQbJGy6/c24aea7486e45591e83591e452535db9/ES_Dashboard_Pedidos_Assinatura.png)

- Al acceder a cada pestaña de la sección **Pedidos de Suscripción**, es posible visualizar el flujo y los detalles de los pedidos que fueron *omitidos*, los que presentaron *ciclos problemáticos*, aquellos que contienen un *error de pago* y  pedidos *completos*.  
- Además de listar detalles de los errores que se produjeron durante el flujo de pedidos de suscripción, también es posible realizar el **reintento manual** de los pedidos con errores. Revise nuestro artículo sobre la [Resolución de problemas de  pedidos con suscripción](https://help.vtex.com/es/tutorial/como-solucionar-pedidos-de-assinatura-com-erros--uLL8AYBGdtAmbbdL5gRCf) para saber más. 

![pedidos_assinaturas_print_es](//images.ctfassets.net/alneenqid6w5/1dhCAuymIdeS4JyaxC7ep2/018f9060f82320eada25f385328cbd3a/pedidos_assinaturas_print_es.png)

### Suscriptores

Los pedidos de suscripción de sus clientes se han agrupado por cliente para mejorar la visualización de los resultados de suscripción de su tienda. El **Panel de Suscriptores** ofrece un claro seguimiento de la salud de su negocio, devolviendo números y análisis de los clientes con pedidos de suscripción.

A través del panel es posible filtrar y dar soporte a sus clientes suscriptores, mejorando la atención de su tienda.

La sección **Suscriptores** del Dashboard de Suscripciones permite:

- Visualizar la progresión de suscriptores **Nuevos** en comparación con los **Perdidos**. Se muestra tanto el número absoluto como un gráfico con esta relación. 

- Visualizar el número **total de suscriptores activos** en su tienda.

- El cuadro de suscriptores contiene las siguientes pestañas: **Nuevos**, **Perdidos** y **Todos**. En cada una de estas se puede visualizar el flujo y los detalles de los suscriptores. Los *Nuevos* son los suscriptores que entraron en aquel periodo determinado en el filtro y que tienen al menos una suscripción activa en la tienda. Los *Perdidos* son los suscriptores que no tienen ninguna suscripción activa en la tienda y que se salieron en aquel determinado periodo.

- **Exportar informe** en CSV, que contiene los datos de la pestaña correspondiente, con los filtros aplicados. 
> Esta funcionalidad requiere un perfil de acceso con el recurso `Subscription Metrics` activado. 

- **Búsqueda por suscriptores** específicos, por su correo electrónico a través de la barra de búsqueda.

- El botón **Personificar** permite realizar ediciones en la suscripción de cada suscriptor, como alterar la frecuencia de suscripción, cambiando la fecha de ejecución del pedido (no sería la fecha de entrega, sino la fecha de generación del pedido). 

> Solo los usuarios con acceso a Televentas pueden utilizar el botón *Personificar*.
