---
title: O aplicativo Cielo 3DS2 está retornando o status "aprovado" mesmo em cenários em que a autenticação falhou.
id: 58hSiWFhn6sHQofJAUoHqv
status: PUBLISHED
createdAt: 2023-05-05T14:48:56.148Z
updatedAt: 2023-05-08T18:34:51.470Z
publishedAt: 2023-05-08T18:34:51.470Z
firstPublishedAt: 2023-05-05T14:48:57.492Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: o-aplicativo-cielo-3ds2-esta-retornando-o-status-aprovado-mesmo-em-cenarios-em-que-a-autenticacao-falhou
kiStatus: Backlog
internalReference: 820060
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Hoje, nosso aplicativo cielo-authentication-app v1.2.1 está retornando um status "aprovado" na etapa final do fluxo ao chamar a etapa de autorização que avalia se a autenticação falhou ou não. No entanto, o aplicativo só aciona a etapa de falha quando há um erro lançado nessa etapa. Como resultado, mesmo que o status seja "failed" na etapa anterior, mas não haja nenhum erro lançado na etapa /authorize atual, o status ainda é considerado "approved" (aprovado), o que nos permite fazer uma solicitação ao adquirente. Esse não é o comportamento esperado, pois deveríamos estar negando a autorização de pagamento e alterando a transação para "autorização negada" nesse cenário.

## Simulação


Faça um pedido com o aplicativo ativado e use um cartão válido que falhará na etapa de registro. Em seguida, você pode verificar as ferramentas do desenvolvedor e observar que, embora a chamada para /authorization falhe, o status ainda está sendo enviado como "aprovado"

## Workaround


N/A





