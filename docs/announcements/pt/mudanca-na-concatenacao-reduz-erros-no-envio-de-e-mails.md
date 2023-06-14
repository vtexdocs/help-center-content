---
title: 'Nova concatenação reduz erros no envio de e-mails'
id: 1MxYkGcD2I864SYI0iw8Uy
status: PUBLISHED
createdAt: 2018-08-13T18:26:18.982Z
updatedAt: 2019-12-31T15:13:43.972Z
publishedAt: 2019-12-31T15:13:43.972Z
contentType: updates
productTeam: Post-purchase
author: authors_24
slug: nova-concatenacao-reduz-erros-no-envio-de-e-mails
legacySlug: nova-concatenacao-reduz-erros-no-envio-de-e-mails
announcementImageID: ''
announcementSynopsisPT: 'Agora sua loja pode usar ponto e vírgula para separar endereços de e-mail, o que reduz drasticamente o número de erros.'
---

A partir de agora, sua loja pode usar ponto e vírgula (`;`) para concatenar endereços de e-mail no Message Center. Ou seja, quando precisar que um e-mail seja enviado para uma série de endereços, você pode acessar a opção __Templates__ da Central de Mensagens e, dentro do template desejado, separar os destinatários por ponto e vírgula.

Esse recurso funciona nos campos de cópia (`Destinatário (CC)`) e cópia oculta (`Destinatário (CCO)`), assim como a vírgula já funcionava anteriormente. Agora as duas opções de concatenação são válidas.

![Message Center bug fix](//images.ctfassets.net/alneenqid6w5/1DCmh5JlI4cGyIEgwuQQUk/068e65871809d2810df7ec0427773b56/Message_Center_bug_fix.png)

Essa mudança simples no módulo responsável pelo envio de e-mails transacionais reduziu drasticamente a taxa de erros em comunicações com clientes.

O gráfico abaixo mostra a taxa de erros de uma loja antes de implementarmos o suporte à concatenação com ponto e vírgula. Mais de 90% dos e-mails falhavam todos os dias.

![Message Center bug fix 2](//images.ctfassets.net/alneenqid6w5/2WTicguBZ6ucAO2a48QKum/fb0774ca2f6d2b746a702813c95126a2/Message_Center_bug_fix_2.png)

Depois de implementada a melhoria, os erros no envio de e-mails transacionais da mesma loja foram completamente eliminados, como mostra este outro gráfico:

![Message Center bug fix 3](//images.ctfassets.net/alneenqid6w5/1OmAZMSyp2cm8K4e6aKs8S/bf862028ae01ed3cb1b77cab375ebdf4/Message_Center_bug_fix_3.png)
