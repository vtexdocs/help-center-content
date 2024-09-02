---
title: 'API Shipping Estimate devolve informações erradas quando SC é nulo'
id: 6bxlw1nQ27JGbiOmNbgyn2
status: PUBLISHED
createdAt: 2022-04-01T23:33:47.015Z
updatedAt: 2024-07-01T18:48:14.728Z
publishedAt: 2024-07-01T18:48:14.728Z
firstPublishedAt: 2022-05-18T18:27:53.441Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slug: api-shipping-estimate-devolve-informacoes-erradas-quando-sc-e-nulo
locale: pt
kiStatus: No Fix
internalReference: 554948
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



A API está retornando informações indexadas erradas quando executada com SC como nula.



## Simulação



=> Executar a API em conta, com SC nulo em API, (esta conta tem todos os documentos com Política de Vendas e o retorno correto é 200 ok vazio).
"https://.vtexcommercestable.com.br/api/logistics/pvt/shipping/estimate"

=> Quando você remove a Política de Vendas de qualquer Dock e executa o mesmo API você verá retornos da estimativa de envio para essa condição porque agora há Dock whitout SC.

=> Mas quando você reinsere a Política de Vendas no Dock e executa novamente o API, ainda mostra o resultado. Não retorna ao comportamento original.



## Workaround


A alternativa é enviar o API com SC definido.

