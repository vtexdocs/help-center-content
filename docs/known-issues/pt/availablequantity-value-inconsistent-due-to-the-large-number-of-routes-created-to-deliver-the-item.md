---
title: 'Valor de AvailableQuantity inconsistente devido ao grande número de rotas criadas para entregar o item'
id: 4kKVjSNsIEU8ZVGcpwvzQw
status: PUBLISHED
createdAt: 2024-05-16T12:14:20.776Z
updatedAt: 2024-05-16T12:15:36.200Z
publishedAt: 2024-05-16T12:15:36.200Z
firstPublishedAt: 2024-05-16T12:14:21.778Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slug: valor-de-availablequantity-inconsistente-devido-ao-grande-numero-de-rotas-criadas-para-entregar-o-item
locale: pt
kiStatus: Backlog
internalReference: 1034211
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Durante o pipeline de indexação de um item, é realizada uma simulação sem o uso de um código postal para validar a disponibilidade, essa simulação, quando chega ao sistema de logística, realiza uma validação combinando todas as docas, armazéns e políticas de remessa disponíveis para um canal de vendas, a resposta a esse cálculo determina a disponibilidade do item, porém essa resposta tem um limite de leitura de 10.000 rotas, portanto, quando um cálculo resulta em mais de 10.000, as rotas restantes são desconsideradas, o que pode fazer com que o sistema retorne uma resposta inconsistente.

## Simulação


Não há uma maneira simples de simular esse cenário, pois você precisa ter várias configurações de logística em vigor

## Workaround


Remova as configurações não utilizadas do canal de vendas (docas, armazéns e políticas de expedição), reduzindo assim o número de rotas criadas pelo sistema durante o cálculo, fazendo com que o número de rotas fique abaixo do limite recomendado pelo sistema (10.000).





