---
title: 'Modificar el orden de medios de pago en el checkout'
id: frequentlyAskedQuestions_490
status: PUBLISHED
createdAt: 2019-01-24T20:45:54.205Z
updatedAt: 2022-04-25T15:09:37.985Z
publishedAt: 2022-04-25T15:09:37.985Z
firstPublishedAt: 2019-01-24T22:12:00.925Z
contentType: tutorial
productTeam: Shopping
author: authors_84
slug: como-modificar-el-orden-de-medios-de-pago-en-el-checkout
locale: es
legacySlug: como-modificar-el-orden-de-medios-de-pago-en-el-checkout
subcategory: 6XAvmMxp7yyY06ewYMuggs
---

Usted puede modificar el orden de visualización de los medios de pago en el Checkout de su tienda de dos formas:

- Por el Admin.

- Por medio de una personalización en JavaScript.

<div class="alert alert-warning">

<strong>Atención:</strong> aunque exista esta posibilidad, por cuestiones de seguridad y performance, <strong>no se recomienda</strong> que usted modifique los archivos JavaScript del Checkout. VTEX no se responsabiliza por cualquier problema generado luego de la edición de este código.

</div>

## Cómo se establece el orden 

En general, la visualización de las [condiciones de pago](/es/tutorial/condiciones-de-pago) en el checkout se define por el orden en que se registraron en la sección Pagos del Admin. Es decir, el medio de pago que ha estado activo durante más tiempo en su tienda se mostrará primero a su cliente.

Alterar este orden es simple: primero, basta desactivar las condiciones de pago preestablecidas. Luego, puede organizar los medios de pago de la manera que prefiera y, así, las condiciones nuevamente.

Sin embargo, este comportamiento no es una regla universal. Esto se debe a que algunos medios de pago necesitan del código de identificación (ID) y de los nombres generados por la afiliación utilizada para procesarlos para que aparezcan en la interfaz.

VTEX realiza una llamada para la afiliación y recibe los datos necesarios para, entonces, mostrar los medios de pago. Dado que estas llamadas son las últimas en retornar, los medios de pago que pasan por este proceso siempre quedan al final de la lista.

