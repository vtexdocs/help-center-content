---
title: 'Por que aparece a mensagem "The TimeSpan could not be parsed... " ao importar planilha de frete?'
id: frequentlyAskedQuestions_6691
status: PUBLISHED
createdAt: 2017-04-27T22:22:14.460Z
updatedAt: 2019-12-31T14:24:54.975Z
publishedAt: 2019-12-31T14:24:54.975Z
firstPublishedAt: 2017-04-27T23:02:46.488Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: authors_3
slugEN: why-does-the-message-the-timespan-could-not-be-parsed-appear
locale: pt
legacySlug: por-que-aparece-mensagem-the-timespan-could-not-be-parsed
---

A mensagem "A planilha contém valores inválidos, por favor verifique a linha X coluna Y. erro: The TimeSpan could not be parsed because at least one of the numeric components is out of range or contains too many digits." normalmente acontece quando a coluna TimeCost começa com `00.`, ou seja quando o tempo de custo é de menos de 1 dia.

Nesse caso, a correção é a retirada do valor `00.`, deixando somente os valores de horas, minutos e segundos. Por exemplo: `00.24:00:00` deixe apenas `24:00:00`.
