---
title: 'A paginação na página de pesquisa não é redefinida ao alterar o contexto da pesquisa'
id: 2lNL95NDZvO8NqxhJDrA6G
status: PUBLISHED
createdAt: 2023-07-06T19:54:29.289Z
updatedAt: 2023-07-06T19:58:59.059Z
publishedAt: 2023-07-06T19:58:59.059Z
firstPublishedAt: 2023-07-06T19:54:29.968Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slug: a-paginacao-na-pagina-de-pesquisa-nao-e-redefinida-ao-alterar-o-contexto-da-pesquisa
locale: pt
kiStatus: Scheduled
internalReference: 857392
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Ao navegar em uma determinada página de um PLP, buscar para mostrar mais resultados e alterar o contexto para navegar em um departamento diferente, o parâmetro de paginação será mantido e o resultado da pesquisa começará na nova categoria na mesma página em que estávamos anteriormente

## Simulação



Seguindo as etapas:


- Acesse: https://starter.vtex.app/computer---software
- Clique em Load more products (o parâmetro da página em seu URL será alterado)
- Clique em um departamento diferente (por exemplo, Tecnologia)
- Verifique se a página de tecnologia começará com a paginação que você estava fazendo anteriormente



## Workaround


Não há nenhuma solução alternativa disponível.





