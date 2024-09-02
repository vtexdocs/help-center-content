---
title: 'A exportação de tabelas de preços falha devido ao estrangulamento da API do catálogo'
id: 4LSQalrhGQHuz8c087WBxP
status: PUBLISHED
createdAt: 2024-08-14T18:41:34.999Z
updatedAt: 2024-08-14T18:41:35.930Z
publishedAt: 2024-08-14T18:41:35.930Z
firstPublishedAt: 2024-08-14T18:41:35.930Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: a-exportacao-de-tabelas-de-precos-falha-devido-ao-estrangulamento-da-api-do-catalogo
locale: pt
kiStatus: Backlog
internalReference: 1081437
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A exportação de tabelas de preços está falhando devido à limitação da API do Catalog. Esse problema ocorre quando o sistema excede os limites de taxa do serviço Catalog durante o processo de exportação, impedindo a recuperação dos preços dos produtos após a busca inicial da SKU.

## Simulação



1. Tentativa de exportar uma tabela de preços grande da interface de administração da VTEX.
2. A exportação será iniciada, mas, em algum momento, o processo falhará devido à limitação da API do Catalog.
3. Nenhum preço é recuperado e a exportação não é concluída.



## Workaround


Se ocorrer limitação, a equipe de plantão poderá realizar exportações manuais para o cliente, caso a caso. Tentativas repetidas também podem ser bem-sucedidas, dependendo do uso da API da conta no momento.





