---
title: Filtro por faixa de preço considerando preço (zero) de itens indisponíveis
id: 10L0KKaGrewOQQWSw6Sms0
status: PUBLISHED
createdAt: 2017-04-06T18:12:42.797Z
updatedAt: 2022-12-22T20:48:36.171Z
publishedAt: 2022-12-22T20:48:36.171Z
firstPublishedAt: 2017-04-06T19:27:27.431Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog,Portal (CMS)
slug: filtro-por-faixa-de-preco-considerando-preco-zero-de-itens-indisponiveis
kiStatus: Backlog
internalReference: 
---

## Sumário

A faixa de R$ 0 a R$ X no filtro de preço considera produtos indisponíveis.

## Simulação

1. Entre no módulo "E-commerce"
2. Aba "Cadastro de produto" > "Categoria"
3. Selecione uma categoria 
4. Clique em "Ações" > "Faixa de preço"
5. Escreva as faixas desejas começando pela "R$ 0 a R$ X"
6. No front da loja ao filtrar pela faixa "R$ 0 a R$ X" aparecerão os produtos indisponíveis mesmo que tenham preços maiores cadastrados.

![bug da faixa de preço zero](https://p5.zdusercontent.com/attachment/694212/qR2zoAXjv3j5Ii3wXAkpunOCN?token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..va0hXw2swHITvRSOQZxq7w.09rH8abK-XD7syiGh8lN0tqRsLfdWufxOf6XY53roNhzBTsw7VhL5nv4xX5nFlUN3Gv8v7ZwJnlH2N62s1Ifr_eQ7Tgiz8udNf-pUXNpUhDiZOTYJlKiIjBeF6L7M77xQDpqJUztSMT8SLHCP010pjpS_QNSQSEYzrrLiVIZqLnK0gSdMCISox6V3F2-gDywAOPt-mt5E3UwpEb3wLtuU31fxNccKc7fycqp_IYHTofQ7H0OMyb7NnAyioi8K_vw6zprhQ4qwetB1iHUUmiON2zXuL78R-V_2zm5_jydBEo.i8ajgYmXxaopzfHWw-m86A)



## Workaround

Ao inserir a faixa de preço mais baixa não começe por R$ 0 (zero) coloque R$ 0,01 ou R$ 1. Assim os produtos indisponíveis não serão contabilizados nesta faixa de preço. 

