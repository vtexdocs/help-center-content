---
title: 'Agendar preços para uma faixa de horas'
id: 682fvZR864UEGe4ugymYQS
status: DRAFT
createdAt: 2017-06-27T02:11:37.317Z
updatedAt: 2022-08-01T20:27:28.199Z
publishedAt: 
firstPublishedAt: 2017-06-27T17:48:57.747Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 5fYXkMJagMwcSAeMAsAuOI
slug: agendar-precos-para-uma-faixa-de-horas
locale: pt
legacySlug: agendar-precos-para-uma-faixa-de-horas
subcategory: 4id9W3RDyw02CasOm2C2iy
---

Entre outros cenários, um dos pontos mais importantes em um evento massivo como Black Friday é o de poder colocar preços x hora para limitar as faixas de validade de um preço a um período, otimizando a rentabilidade do produto, e depois desativá-lo e voltar ao preço normal.

## Agendar hora por API
Uma das opções para agendar preços por hora é fazer isso por API de preços:

>ℹ️ [Ver documentação de APIs](https://developers.vtex.com/reference/pricing-api-overview)

O backend da VTEX utiliza o horário UTC, o que, por exemplo, na Argentina é GTM-3. Se você quiser agendar um preço x hora por meio de API e quiser que os preços comecem às 00h00 e terminem às 10h00, deve enviar 03h00 a mais das que efetivamente deseja configurar. Ou seja, se a validade do preço comece à 00h00, deve-se enviar 03h00, e se quiser que termine às 10h00, deve-se enviar 13h00:

JSON API - Preços:
```
“validFrom”: “2017-06-23T03:00:00Z”,
“validTo”: “2017-06-23T13:00:00Z”
```

O preço ficará automaticamente invalidado depois de atingir a hora agendada.

<div class=“alert alert-warning”>
<strong>Importante</strong>: No caso de modificar o preço mediante a interface de preços do admin e salvar as alterações, a agenda de horas será perdida e somente a agenda de datas ficará válida.
</div>

## Agendar hora por planilha

Outra opção é realizar o agendamento massivo por planilha de preços. Apesar de o backend funcionar em UTC, o import de planilha de preços tem um pré-processo que calcula o horário do PC do cliente e ajusta automaticamente o horário de agendamento, conforme a hora local. 

Isto significa que, por exemplo, na Argentina, que é GTM-3, caso queira agendar um preço x hora na Planilha e queira que um preço comece à 00h00 e termine às 10h00, deve-se configurar na planilha simplesmente essa mesma hora. 

Ou seja, se quiser que o preço passe a ser válido à 00h00, deve-se enviar 00h00 e se quiser que termine às 10h00, deve-se enviar 10h00:

Colunas Planilha Preços:
```
“DateTo”: “2017/06/23 00:00:00”,
“DateFrom”: “2017/06/23 10:00:00”
```

O preço ficará automaticamente inválido depois de atingir a hora agendada.

<div class=“alert alert-warning”>
<strong>Importante</strong>: Da mesma forma que mediante API, em caso de modificar o preço mediante a interface de preços do admin e salvar as mudanças, a agenda de horas será perdida e somente a agenda de datas ficará válida.
</div>
