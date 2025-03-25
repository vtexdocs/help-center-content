---
title: 'Cómo configurar su firewall empresarial para permitir el acceso al IO'
id: 4c61e1CJI4KXIHH2HLOYUQ
status: ARCHIVED
createdAt: 2019-01-23T18:41:51.815Z
updatedAt: 2020-04-08T13:34:11.292Z
publishedAt: 
firstPublishedAt: 2019-01-23T19:07:02.184Z
contentType: tutorial
productTeam: Others
author: TnXcuQydAAOuwWACo864E
slugEN: how-to-configure-your-firewall-to-enable-io-access
locale: es
legacySlug: como-configurar-su-firewall-empresarial-para-permitir-el-acceso-al-io
subcategoryId: 54gbzsku02c4bKmgFbp3v3
---

Algunos firewalls corporativos deben ajustarse para permitir el acceso a la plataforma de desarrollo IO.

En principio es necesario permitir comunicaciones HTTP y HTTPS para los dominios `*.myvtex.com` y `*.vtex.io` 

Si esto no es suficiente, también será necesario el acceso a las siguientes URLs:

cdn.polyfill.io
io.vtex.com.br 
unpkg.com (contiene libs de React, vtex-tachyons, animate, etc.)
\*.vteximg.com.br (contienen javascripts e imágenes de VTEX IO)
