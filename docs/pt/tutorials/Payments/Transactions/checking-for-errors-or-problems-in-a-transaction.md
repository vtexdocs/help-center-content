---
title: 'Verificar erros ou problemas em uma transação'
id: 3QecZEdmzumGKe8WGmeI8a
status: PUBLISHED
createdAt: 2019-01-24T21:38:42.709Z
updatedAt: 2023-03-29T01:18:23.081Z
publishedAt: 2023-03-29T01:18:23.081Z
firstPublishedAt: 2019-01-24T21:38:43.264Z
contentType: tutorial
productTeam: Financial
author: authors_59
slug: verificar-erros-ou-problemas-em-uma-transacao
locale: pt
legacySlug: verificar-erros-ou-problemas-em-uma-transacao
subcategoryId: 3Gdgj9qfu8mO0c0S4Ukmsu
---

Para conseguir resolver um possível problema envolvendo transações em Pagamentos, o primeiro passo é __verificar o log desta transação__. Os logs são os registros das interações entre o módulo de Pagamentos da VTEX e os sistemas de nossos parceiros (outros gateways, adquirentes, antifraudes e etc). [Clique aqui](/pt/tutorial/como-visualizar-detalhes-do-pedido/) para saber como buscar uma transação em Pagamentos. Abaixo, veremos como analisar os detalhes da transação para verificar se algum erro está ocorrendo.

Os logs de uma transação ficam registrados numa linha do tempo, com as interações mais recentes sendo exibidas no topo da tela e as interações mais antigas na parte inferior. 

O gateway da VTEX pode se comunicar com adquirentes, subadquirentes, antifraudes e com outros gateways. As __mudanças de status na transação__ e as __mensagens de resposta dos parceiros__ estão exibidas em caixas na tela dos detalhes da transação.

>ℹ️ Você pode [clicar aqui](https://help.vtex.com/pt/faq/cartao-de-credito-fluxo-basico-de-um-pagamento) para saber como funciona o fluxo básico de uma transação de cartão de crédito. Acesse também [nosso artigo](https://help.vtex.com/pt/faq/boleto-bancario-registrado-fluxo-basico-de-um-pagamento) com o esquema básico de uma transação via boleto bancário.

## Verificar status da transação

Para verificar o __status atual__ de uma transação, basta buscar na linha do tempo pela *caixa mais ao topo da tela com um círculo verde do lado esquerdo*. 
[Neste artigo](https://help.vtex.com/pt/tutorial/fluxo-da-transacao-no-pagamentos--Er2oWmqPIWWyeIy4IoEoQ?locale=pt "Neste artigo"), há a explicação de cada um dos status de uma transação bem-sucedida. Caso a transação tenha algum problema, seu status final será __Cancelled__.

## Verificar mensagens de resposta dos parceiros

Basicamente, uma transação *altera seu status* após a VTEX receber uma notificação do sistema parceiro. Para verificar quais as respostas enviadas pelo parceiro, basta buscar as caixas que têm como título o *nome do parceiro (Cielo V3, eRedev3, GetNet, Sitef, ClearSale etc)*. São estas respostas que nos informam o que realmente está ocorrendo com a transação. 

Muitas vezes os cancelamentos acontecem porque o banco emissor não autorizou a transação ou porque o antifraude bloqueou o pagamento. 

Em outras ocasiões, pode ocorrer uma falha de comunicação entre a VTEX e o parceiro. Existem recursos de segurança ativos, como retentativas automáticas, mas erros humanos também podem existir. Por exemplo, o parceiro pode fazer uma atualização em sua plataforma e não atualizar a integração com a VTEX. Casos como esse geram logs ou mantêm o pedido em um loop.

Estas situações geralmente são indicadas com um `.` na resposta do parceiro. Nestes casos, a VTEX fica aguardando a resposta do parceiro para que a transação possa fazer a mudança para o próximo status. Em cenários deste tipo, recomendamos entrar em contato com o parceiro para que ele possa resolver este problema de comunicação.

## Entrar em contato com o parceiro

Caso você encontre nos logs de Pagamentos um erro na resposta de algum parceiro, nossa recomendação é entrar em contato com ele para que o problema seja solucionado. [Busque o TID](/pt/faq/como-achar-nsu-e-tid-do-pedido) da transação. Este é o número que deve ser usado para identificar a transação no sistema do parceiro.
