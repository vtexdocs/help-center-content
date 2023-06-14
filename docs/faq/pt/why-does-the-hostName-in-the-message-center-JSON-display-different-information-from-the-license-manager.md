---
title: 'Por que o hostName no JSON da Central de mensagens mostra informação diferente do Gerenciamento da conta?'
id: frequentlyAskedQuestions_6695
status: PUBLISHED
createdAt: 2017-04-27T22:22:10.816Z
updatedAt: 2019-12-31T14:25:01.415Z
publishedAt: 2019-12-31T14:25:01.415Z
firstPublishedAt: 2017-04-27T23:02:46.478Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: authors_3
slug: por-que-o-hostname-no-json-do-message-center-mostra-informacao-diferente-do-license-manager
legacySlug: por-que-o-hostname-no-json-do-message-center-mostra-informacao-diferente-do-license-manager
---

O JSON utilizado pela Central de mensagens, ou seja, a fonte das informações que serão enviadas pelo e-mail, é uma junção de informações de diversos sistemas. Entre elas estão as informações do pedido vindas do Gerenciamento de pedidos e as informações de conta vindas do Gerenciamento da conta.

Ao visualizar a variável `hostName` no JSON da Central de mensagens, pode surgir a dúvida de onde esse dado é carregado. Por mais que o nome da variável seja host, ela carrega o nome - não alterável - do site criado na aba Conta do Gerenciamento da conta.

![VTEX - License Manager](//images.contentful.com/alneenqid6w5/5sZb9Mvw4wcK6oM40CKEak/eee7f0e5848c179c678761a418a978b4/2017-03-22-12_33_29-VTEX-License-Manager.png)

Ou seja, não será carregado o valor inserido na área de Hosts, e sim, conforme imagem acima, será carregado para o template de e-mail o valor cadastrado em **Nome da Loja**.
