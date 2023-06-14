---
title: 'Cómo crear una promoción para sitios parceros o e-mail marketing'
id: 20BIhDMHKgy6YuGQKQ882s
status: DRAFT
createdAt: 2017-07-07T01:16:15.634Z
updatedAt: 2020-03-06T13:53:59.489Z
publishedAt: 
firstPublishedAt: 
contentType: frequentlyAskedQuestion
productTeam: Others
author: 523NSmHfn2IKEoiy2Q44YS
slug: como-crear-una-promocion-para-sitios-parceros-o-e-mail-marketing
locale: es
legacySlug: como-crear-una-promocion-para-sitios-parceros-o-e-mail-marketing
---

Para activar una promoción para visitas generadas por sitios de parceros o e-mail marketing, será necesario parámetros de monitoreo como el utm's o utmi's.
Si ya está utilizando parametros de monitoreo en el enlace indico utilizar las UTMI VTEX, de lo contrario, no hay ningún parámetro en la URL, indico que utilice UTM en la URL del enlace los parámetros utm_source y utm_campaign.
 
Con las UTM se puede además de activar la promoción, podrá identificar y monitorear correctamente por el Google Analytics el tráfico generado por ese URL y por el OMS los pedidos generados.
 
Un ejemplo de estructura para su enlace es:
Manteniendo el origen de tráfico como "referencia":
Http://www.sutienda.com.br/?utm_campaign=NOMBRECAMPANA
 
O sobrescribiendo el origen de tráfico "referral":
Http://www.sutienda.com.br/?utm_source=NOMBREPARCERO&utm_campaign=NOMBRECAMPANA
 
Así todo el tráfico generado por esa URL será identificado por una cookie.
Ahora debe crear una promoción en el "Pricing" VTEX para activar el descuento deseado para los usuarios que ingresaron a la tienda por esa URL y tienen la cookie de utm.

Para eso sólo será necesario configurar una promoción regular con el tipo de descuento porcentual del 10%, con la condición "utm_campaign" seleccionada y con valor "NOMBRECAMPANA" registrada.

Detalle el paso a paso de creación:
1. Acceda al módulo "Pricing" en su entorno: https://sutienda.vtexcommercestable.com.br/admin/pricing/#/benefits/
2. Seleccione la opción "Nueva Promoción" y luego "Promoción Regular"
3. En el formulario de "Promoción Regular" defina el "Nombre", "Fecha de inicio" y "Fecha Fin" de la promoción
4. En la opción "¿Qué tipo y importe de descuento?" Seleccione la opción "Porcentaje"
5. Registre el valor del porcentaje de descuento que desee en el cuadro de texto con el símbolo de "%"
6. En el bloque "¿Qué condiciones para la promoción sea válida?" Seleccione el checkbox de la opción "utm_campaign"
7. Registre el valor "NOMBRECAMPANA" en el cuadro de texto de la opción "utm_campaign"
8. Guarde la promoción y listo! :)

Con la promoción correctamente registrada, ya podrá compartir la URL, así todo el tráfico que viene con el parámetro "?utm_campaign=NOMBRECAMPANA" activará el valor de descuento configurado en la promoción.
