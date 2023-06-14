---
title: '¿Por qué aparece el mensaje "The TimeSpan could not be parsed..." al importar planilla de flete?'
id: frequentlyAskedQuestions_6691
status: PUBLISHED
createdAt: 2017-04-27T22:22:14.460Z
updatedAt: 2019-12-31T14:24:54.975Z
publishedAt: 2019-12-31T14:24:54.975Z
firstPublishedAt: 2017-04-27T23:02:46.488Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: authors_3
slug: por-que-aparece-el-mensaje-the-timespan-could-not-be-parsed-al-importar-planilla-de-flete
legacySlug: por-que-aparece-el-mensaje-the-timespan-could-not-be-parsed-al-importar-planilla-de-flete
---

El mensaje "A planilha contém valores inválidos, por favor verifique a linha X coluna Y. erro: The TimeSpan could not be parsed because at least one of the numeric components is out of range or contains too many digits." normalmente sucede cuando la columna TimeCost empieza con `00.`, o sea, cuando el tiempo de costo es de menos de 1 día.

En este caso, la corrección es la retirada del valor `00.`, dejando somente los valores de horas, minutos y segundos. Por ejemplo: `00.24:00:00` deje solamente `24:00:00`.
