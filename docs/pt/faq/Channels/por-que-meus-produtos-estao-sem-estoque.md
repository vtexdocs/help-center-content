---
title: 'Por que meus produtos estão sem estoque no marketplace?'
id: frequentlyAskedQuestions_693
status: PUBLISHED
createdAt: 2017-04-27T22:29:36.839Z
updatedAt: 2023-03-22T21:11:13.467Z
publishedAt: 2023-03-22T21:11:13.467Z
firstPublishedAt: 2017-04-27T23:02:32.909Z
contentType: frequentlyAskedQuestion
productTeam: Channels
author: authors_3
slugEN: why-are-my-products-out-of-stock-on-the-marketplace
locale: pt
legacySlug: por-que-meus-produtos-estao-sem-estoque
---

Caso o Marketplace utilize uma política comercial que não é utilizada por outro marketplace ou pela loja principal, é preciso que a logística seja configurada para esta nova política comercial.

Isto é feito nas configurações da doca, onde a política comercial deve ser associada no campo **Canal de vendas**. Verifique também se a doca está associada a pelo menos um estoque e pelo menos uma transportadora.

Após as configurações, é necessário realizar a indexação de todos os produtos da base, para que a integração ocorra.

1. Com o usuário titular, acesse o link {{ACCOUNTNAME}}.vtexcommercestable.com.br/admin/Site/FullCleanUp.aspx;
2. Clique no botão **Reindexar Base**.

Lembre-se! É possível acompanhar o status de indexação e o status de integração dos estoques. Para isso, acesse o [relatório de indexação](https://help.vtex.com/pt/tutorial/utilizar-o-relatorio-de-indexação?locale=pt "Utilizar o Relatório de Indexação") e o modulo [Integrações](/pt//tutorial/bridge/ "bridge").

___ ATENÇÃO: Se o canal de vendas estiver configurado com uma coleção, é necessário verificar se o item pertence à coleção. Caso contrário, nenhuma informação do item será atualizada no parceiro.___

___ ATENÇÃO: Caso a loja não utilize coleção no canal de venda e a configuração seja definida especificamente no produto, é necessário verificar se o produto está setado para venda no canal desejado. Caso contrário, nenhuma informação do item será atualizada no parceiro.___
