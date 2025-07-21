---
title: "Inconsistência no relatório de pedidos quando o campo tid é duplicado no campo connectorResponses da API de detalhes de pagamento GET."
id: 4xXSp2RMyHMeHpEUXgmpAZ
status: PUBLISHED
createdAt: 2023-09-06T21:18:05.941Z
updatedAt: 2023-09-06T21:18:06.733Z
publishedAt: 2023-09-06T21:18:06.733Z
firstPublishedAt: 2023-09-06T21:18:06.733Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: inconsistencia-no-relatorio-de-pedidos-quando-o-campo-tid-e-duplicado-no-campo-connectorresponses-da-api-de-detalhes-de-pagamento-get
locale: pt
kiStatus: Backlog
internalReference: 895664
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Os conectores dessa lista precisam salvar mais campos para o conector que funciona com o aplicativo "Venda direta" - Vendas. Especificamente, para os conectores listados abaixo, e somente para eles, todo o conteúdo do payload deve ser direcionado para o campo "`connectorResponses`". Isso resulta em uma duplicação do campo "`tid`", que já existe em "`connectorResponses`". Embora essa duplicação não represente um problema em termos do ciclo de vida da transação, ela cria uma inconsistência ao gerar relatórios a partir da página do pedido.


- PagarMeV3
- PagarMeV3Stg
- Adyen V3

## Simulação



1. Acesse a página de pedidos do administrador.
2. Gerar o relatório de pedidos.
3. Procure a coluna `tId` onde os pedidos foram feitos usando um destes conectore

## Workaround


Use a rota /payment ou a API GET order para recuperar esses dados





