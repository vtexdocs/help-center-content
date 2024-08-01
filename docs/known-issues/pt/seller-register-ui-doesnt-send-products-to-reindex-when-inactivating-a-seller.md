---
title: 'A interface de usuário de registro do vendedor não envia produtos para reindexação ao inativar um vendedor'
id: 0iAMGhIOKDyMbEykB4pfx
status: PUBLISHED
createdAt: 2023-10-06T19:45:08.963Z
updatedAt: 2023-10-06T19:45:29.372Z
publishedAt: 2023-10-06T19:45:29.372Z
firstPublishedAt: 2023-10-06T19:45:09.832Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slug: a-interface-de-usuario-de-registro-do-vendedor-nao-envia-produtos-para-reindexacao-ao-inativar-um-vendedor
locale: pt
kiStatus: Backlog
internalReference: 915970
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Ao usar a nova interface de usuário de experiência do vendedor, /admin/sellers, a ação de inativar um vendedor deve reindexar seus produtos relacionados para que possam ser removidos dos mercados associados, o que não está acontecendo atualmente.

## Simulação


Acesse a interface do usuário mencionada acima e, para uma loja que esteja se integrando a um marketplace, com um ponto de extremidade de afiliado (https://help.vtex.com/en/tutorial/como-configurar-afiliado--tutorials_187) e, em seguida, tente inativar um vendedor disponível para essa mesma política comercial.

Os itens, no marketplace, não serão atualizados

## Workaround


Reindexe a base ou use a interface do usuário do vendedor herdada (https://accountname.vtexcommercestable.com.br/admin/site/seller.aspx), que aciona a indexação corretamente.





