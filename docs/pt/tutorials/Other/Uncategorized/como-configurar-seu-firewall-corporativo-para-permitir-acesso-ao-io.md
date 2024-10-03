---
title: 'Como configurar seu firewall empresarial para permitir acesso ao IO'
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
locale: pt
legacySlug: como-configurar-seu-firewall-corporativo-para-permitir-acesso-ao-io
subcategoryId: 54gbzsku02c4bKmgFbp3v3
---

Alguns firewalls corporativos precisam ser ajustados para permitir acesso a plataforma de desenvolvimento IO.  

A principio é necessário permitir comunicação HTTP e HTTPS para os domínios `*.myvtex.com` e `*.vtex.io` 

Caso isto não for o suficiente, será necessário tambem permitir acesso as seguintes URLs:

cdn.polyfill.io
io.vtex.com.br 
unpkg.com (contém libs de React, vtex-tachyons, animate, e etc)
*.vteximg.com.br (contêm javascripts e imagens do VTEX IO

