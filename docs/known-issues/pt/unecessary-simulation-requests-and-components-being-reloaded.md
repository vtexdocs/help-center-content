---
title: 'Pedidos desnecessários de simulação e componentes sendo recarregados'
id: 1qXJU1XC4r0e9KWxNUKp3L
status: PUBLISHED
createdAt: 2022-08-30T17:34:47.635Z
updatedAt: 2024-02-16T20:25:15.198Z
publishedAt: 2024-02-16T20:25:15.198Z
firstPublishedAt: 2022-08-30T17:34:48.111Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: pedidos-desnecessarios-de-simulacao-e-componentes-sendo-recarregados
locale: pt
kiStatus: No Fix
internalReference: 648298
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Pedidos múltiplos de simulação podem ser feitos após alterações na ordemFormulário. Isto está relacionado com o cálculo _lean shipping_ para calcular os pacotes de envio.

Dependendo da mudança, como os pedidos automáticos para registrar informações de "dados de pagamento", eles podem ser considerados desnecessários. Assim, retardando a página, sobrecarregando os serviços externos e mudando o estado da UI enquanto se espera por eles.



## Simulação



- criar um carrinho
- adicionar um código postal no componente de remessa
- observe as solicitações feitas pela IU, que incluirão atualizações para "dados de remessa" e "dados de pagamento", e também estas múltiplas "simulações" após cada uma destas



## Workaround


N/A

