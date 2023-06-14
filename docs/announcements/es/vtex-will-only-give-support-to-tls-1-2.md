---
title: 'VTEX sólo admitirá TLS 1.2'
id: 63OshDDS6cmcKKmau6aQUA
status: PUBLISHED
createdAt: 2018-06-22T16:25:55.532Z
updatedAt: 2019-12-31T15:12:50.508Z
publishedAt: 2019-12-31T15:12:50.508Z
contentType: updates
productTeam: Reliability
author: authors_24
slug: vtex-solo-admitira-tls-1-2
legacySlug: vtex-solo-admitira-tls-1-2
announcementImageID: ''
announcementSynopsisES: 'A partir del 30 de junio, las versiones anteriores de TLS y todas las versiones de SSL se descontinuarán.'
---

Como parte de nuestro proceso de mejora continua, vamos a pasar a dar soporte sólo para integraciones que usan __TLS 1.2__. A partir del __30 de junio__, las versiones anteriores de TLS y todas las versiones de SSL se descontinuarán. Este cambio cumple con los requisitos PCI DDS y es fundamental para mantener la seguridad de la plataforma.


## Lo que usted necesita hacer
__Si usted es una agencia o un proveedor de pagos__ y utiliza la API de Pagos, revise sus integraciones y actualice a __TLS 1.2__ cuanto antes.

Desde el servidor que se comunica con nuestros endpoints, pruebe su conexión con un GET en la URL `https://securetlspci.vtexpayments.com.br/`. Si regresa 200 OK, significa que ya está en conformidad con __TLS 1.2__ y no tendrá que tomar ninguna acción. Vea el ejemplo siguiente:

    curl -X GET \
    https://securetlspci.vtexpayments.com.br/ \
    -H 'accept: text/html'


## Si usted tiene una tienda
Las tiendas no necesitan preocuparse ni tomar ningún tipo de acción. Pero si lo desea, puede ponerse en contacto con los responsables de las integraciones de pago de su tienda para preguntar si ya están en conformidad con __TLS 1.2__.
