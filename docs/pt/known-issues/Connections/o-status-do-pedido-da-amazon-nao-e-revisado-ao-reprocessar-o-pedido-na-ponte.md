---
title: "O status do pedido da Amazon não é revisado ao reprocessar o pedido na ponte"
id: 6t7R49BcUjC9LU8UWLvwdh
status: PUBLISHED
createdAt: 2024-10-18T12:18:00.080Z
updatedAt: 2024-10-18T12:18:01.014Z
publishedAt: 2024-10-18T12:18:01.014Z
firstPublishedAt: 2024-10-18T12:18:01.014Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: o-status-do-pedido-da-amazon-nao-e-revisado-ao-reprocessar-o-pedido-na-ponte
locale: pt
kiStatus: Backlog
internalReference: 1119618
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Os pedidos da Amazon que tiveram algum tipo de erro vão para a área de ponte com a mensagem de erro e o status do pedido no momento em que ele foi processado pela primeira vez.
No entanto, mesmo que o status seja atualizado na Amazon (como se fosse cancelado), o status da ponte permanecerá o mesmo.
Com isso, se um pedido for reprocessado no bridge, seu status não será revisado no marketplace e isso poderá causar erros de integração de pedidos com o status errado.

## Simulação



1. Receber uma ordem com erro na ponte;
2. Verificar se o status do pedido está cancelado na Amazon;
3. Reprocessar o pedido no bridge e verificar se ele foi integrado com sucesso

## Workaround


N/A





