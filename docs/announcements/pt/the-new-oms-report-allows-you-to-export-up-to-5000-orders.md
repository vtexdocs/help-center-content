---
title: "Novo relatório do OMS permite a exportação de até 5000 pedidos"
id: 3KLZdi2MjmUAAKeUWCIU0a
status: PUBLISHED
createdAt: 2018-12-12T17:26:42.584Z
updatedAt: 2020-05-12T15:27:46.656Z
publishedAt: 2020-05-12T15:27:46.656Z
contentType: updates
productTeam: Post-purchase
author: 245tA425AIeioKAk2eaiwS
slug: novo-relatorio-do-oms-permite-a-exportacao-de-ate-5000-pedidos
legacySlug: novo-relatorio-do-oms-permite-a-exportacao-de-ate-5000-pedidos
announcementImageID: ""
announcementSynopsisPT: A partir de 13/12, você vai poder exportar até 5 mil pedidos de uma única vez no módulo de Gerenciamento de Pedidos.
---

Lançamos o novo relatório do módulo de Gerenciamento de Pedidos (antigo OMS), muito mais consistente e com performance melhorada. Ele permitiu que nossos desenvolvedores trabalhassem para resolver uma demanda de muitos clientes: então, a partir de __13 de dezembro de 2018__, você vai poder exportar até __5 mil pedidos de uma única vez__.


## Principais vantagens
Ao mesmo tempo que atende a necessidades de negócio dos nossos clientes, essa mudança não impacta a performance da plataforma e mantém a consistência dos relatórios gerados.

O limite anterior (de 3 mil pedidos) garantia essa estabilidade e, com o novo relatório, pudemos aumentar esse número.


## O que mudou
O comportamento do módulo permanece o mesmo desde a última mudança: se o filtro aplicado contemplar mais de 5 mil pedidos, __o botão fica indisponível e só volta caso o limite seja respeitado__.


## Como exportar mais de 5 mil pedidos
Você pode continuar exportando mais do que 5 mil pedidos usando as APIs de gerenciamento de pedidos (antigo OMS): [Get Order](https://developers.vtex.com/reference/orders#getorder) e [Get Feed Order Status](https://developers.vtex.com/reference/note).

<div class="alert alert-warning">
<strong>Mas lembre-se:</strong> para funcionar, é necessário que você <strong>crie um range de data/hora que inclua, no máximo, 5 mil pedidos</strong>. Com o range definido e o limite respeitado, você vai poder chamar a API quantas vezes for necessário.
</div>
