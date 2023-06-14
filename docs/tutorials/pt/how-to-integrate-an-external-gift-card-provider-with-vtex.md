---
title: 'Como integrar um provedor de Gift Card externo à VTEX'
id: tutorials_450
status: PUBLISHED
createdAt: 2017-04-27T22:05:26.566Z
updatedAt: 2023-04-13T12:40:41.423Z
publishedAt: 2023-04-13T12:40:41.423Z
firstPublishedAt: 2017-04-27T23:03:24.938Z
contentType: tutorial
productTeam: Financial
author: authors_84
slug: como-integrar-um-provedor-de-gift-card-externo-a-vtex
locale: pt
legacySlug: integrando-com-gift-card
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, uma das opções de uso do Gift Card é ser utilizado como um programa de créditos. 

Nesse contexto, existem alguns casos de clientes que já trabalham com um provedor próprio. Esse sistema gerencia sua relação de créditos ou pontos sob uma base de clientes participantes de um sistema de fidelidade, por exemplo.

Dito isto, o cliente tem a opção de integrar a solução externa ao sistema da VTEX. Aqui, explicaremos o passo a passo para realizar essa integração.

## Desenvolvimento do provider
A VTEX conta com Gift Card Provider Protocol. Ou seja, um guia de chamadas de API que serão feitas para se comunicar com o nosso sistema.

Desse modo, o cliente deve desenvolver um middleware - sistema que faz o intermédio entre dois sistemas diferentes-, no caso, o provedor externo e os sistemas da VTEX.

Logo, uma vez implementado, será capaz de receber as chamadas da VTEX e interpretar as informações contidas em cada uma delas.

Para saber mais detalhes, consulte a nossa documentação técnica sobre o [Gift Card Provider Protocol](https://developers.vtex.com/docs/guides/giftcard-provider-protocol-overview). 

## Envio do endpoint
Finalizada a primeira etapa, o cliente deve enviar para a VTEX o endpoint que será utilizado para realizar as chamadas. Essa rota funcionará como uma ponte entre os dois sistemas. 

Por fim, a VTEX cadastra o endpoint do provedor no seu sistema. Assim, o sistema de Gift Card externo estará integrado à VTEX e será é utilizado em todo fechamento de compra em que o cliente utilizá-lo como meio de pagamento.
