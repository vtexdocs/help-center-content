---
title: 'Erro ao obter itens e cumprimentos" ao tentar atribuir pedidos no Pick and Pack devido a pedidos cancelados associados a um Picker'
id: 5nLx5LYiu1cGHBMlHVmkK
status: PUBLISHED
createdAt: 2025-07-22T14:13:07.224Z
updatedAt: 2025-07-24T17:48:47.600Z
publishedAt: 2025-07-24T17:48:47.600Z
firstPublishedAt: 2025-07-22T14:13:07.800Z
contentType: knownIssue
productTeam: Pick and Pack
author: 2mXZkbi0oi061KicTExNjo
tag: Pick and Pack
slugEN: erro-ao-obter-itens-e-cumprimentos-ao-tentar-atribuir-pedidos-no-pick-and-pack-devido-a-pedidos-cancelados-associados-a-um-picker
locale: pt
kiStatus: Backlog
internalReference: 1263897
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



Ao tentar atribuir novos pedidos a um coletor específico no módulo de coleta e embalagem, o sistema exibe a mensagem de erro: "Error get items and fulfillments." Esse problema é causado por pedidos cancelados que permanecem associados ao coletor. Mesmo que o pedido que está sendo processado não seja cancelado, a simples presença de pedidos cancelados vinculados ao perfil do coletor aciona o erro, impedindo a atribuição de novos pedidos. Outros coletores, sem essas associações de pedidos cancelados, não apresentam esse problema.

## Simulação




1. Faça login no VTEX admin como o Picker afetado.
2. Acesse o módulo Pick and Pack.
3. Tente atribuir um novo pedido ao operador de picking.
4. O sistema retorna a mensagem de erro "Error getting items and fulfillment".
5. A atribuição de pedidos a outros coletores (não vinculados a pedidos cancelados) funciona como esperado.



## Workaround


No momento, não temos uma solução alternativa para esse problema. É necessário abrir um tíquete de produto.

- Use Pickers alternativos não associados a pedidos cancelados para atribuir e processar novos pedidos, pois o erro é específico para Pickers com pedidos cancelados anexados.
- Se for necessário usar o Picker afetado, entre em contato com o Suporte da VTEX, fornecendo evidências (arquivo HAR e/ou vídeo) que mostrem o cenário do erro e os detalhes do Picker.
- Não há uma solução definitiva até o momento; em casos urgentes, reatribua temporariamente as tarefas a outros Pickers enquanto aguarda a intervenção do suporte.






