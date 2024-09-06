---
title: 'O contador de uso da promoção não está funcionando como esperado'
id: 7iamjGsN4PuODQ359OsopW
status: PUBLISHED
createdAt: 2024-09-02T13:01:22.361Z
updatedAt: 2024-09-02T13:01:23.422Z
publishedAt: 2024-09-02T13:01:23.422Z
firstPublishedAt: 2024-09-02T13:01:23.422Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: o-contador-de-uso-da-promocao-nao-esta-funcionando-como-esperado
locale: pt
kiStatus: Backlog
internalReference: 1090367
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


O contador de uso da promoção não está funcionando como esperado, levando à perda de controle sobre o número de vezes que uma promoção é aplicada. O problema ocorre porque o sistema de checkout é responsável por notificar o uso de uma promoção, enquanto o sistema de gerenciamento de pedidos é responsável por informar o cancelamento, o que deveria diminuir a contagem de uso. No entanto, esses sistemas enviam notificações diferentes, causando o mau funcionamento do contador e criando mais pedidos com a promoção aplicada do que o pretendido.

## Simulação



1. Crie uma promoção com um limite de uso específico.
2. Aplique a promoção a vários pedidos por meio do sistema Checkout.
3. Cancelar alguns desses pedidos por meio do OMS.
4. Observe que o contador de uso da promoção pode permitir que mais pedidos sejam criados como pretendido.

No momento, talvez nem sempre seja possível reproduzir esse problema de forma consistente, pois a causa raiz exata ainda não foi determinada

## Workaround


N/A





