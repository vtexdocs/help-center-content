---
title: 'Por que a origem dos pedidos está diferente na VTEX e no Google Analytics?'
id: frequentlyAskedQuestions_5030
status: PUBLISHED
createdAt: 2017-04-27T22:22:57.838Z
updatedAt: 2019-12-31T14:24:58.529Z
publishedAt: 2019-12-31T14:24:58.529Z
firstPublishedAt: 2017-04-27T23:02:44.531Z
contentType: frequentlyAskedQuestion
productTeam: Identity
author: authors_59
slug: por-que-origem-dos-pedidos-esta-diferente-na-vtex-e-no-google-analytics
locale: pt
legacySlug: por-que-origem-dos-pedidos-esta-diferente-na-vtex-e-no-google-analytics
---

Pode ocorrer uma divergência entre as informações de origem dos pedidos na VTEX e no Google Analytics. Isto ocorre porque existe uma diferença no tempo de expiração dos cookies.

Os cookies do Google Analytics expiram em aproximadamente 4 dias, e os da VTEX expiram em menos tempo.

### Exemplo

- Um cliente acessa uma loja por uma campanha de e-mail, mas não fecha a compra.
- Após 3 dias, ele acessa diretamente o site da loja e realiza a compra.
- No Google Analytics, fica marcado que o acesso teve origem na campanha de e-mail.
- Na VTEX, fica marcado que o acesso foi direto (o cenário que realmente ocorreu).

Por conta dessa diferença no tempo de expiração dos cookies, **a informação da VTEX sempre será mais precisa que a do Google Analytics**.

No Google Analytics essas configurações são chamadas de modelos de atribuição. Se for do interesse da loja, é possível alterar a configuração da regra a ser utilizada por lá. Na internet é possível encontrar bastante material sobre este fator na mensuração de campanhas.
