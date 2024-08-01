---
title: 'A integração do MELI está recebendo erros do MELI "429 solicitações demais"'
id: 1e4g9nzZFyanywmLbSHq4D
status: PUBLISHED
createdAt: 2023-08-03T10:47:41.602Z
updatedAt: 2023-08-14T14:08:12.646Z
publishedAt: 2023-08-14T14:08:12.646Z
firstPublishedAt: 2023-08-03T10:47:43.214Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slug: a-integracao-do-meli-esta-recebendo-erros-do-meli-429-solicitacoes-demais
locale: pt
kiStatus: Fixed
internalReference: 873998
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



Atualmente, temos um problema com algumas contas no MELI que estão recebendo um erro ao tentar atualizar produtos, estoque ou preço no MELI.

Isso não está afetando todas as contas e nem todos os SKUs, mas apenas parte deles, e isso é causado devido ao envio de mais solicitações do que o MELI está atualmente preparado para receber.

## Simulação



Dentro do menu de integração estoque/preço/produto, algumas contas podem apresentar um erro:

**Sorry, we couldn't process this request. Aguarde alguns minutos e processe-a novamente**

Estamos trabalhando em como lidar melhor com as solicitações para evitar receber esse erro do MELI.



## Workaround


A única solução alternativa disponível no momento é reprocessar a solicitação diretamente no menu bridge.





