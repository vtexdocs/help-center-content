---
title: '¿Cómo el ERP diferencia un pedido normal de un recurrente?'
id: frequentlyAskedQuestions_4690
status: DRAFT
createdAt: 2019-01-24T20:46:01.256Z
updatedAt: 2021-04-30T14:38:46.094Z
publishedAt: 
firstPublishedAt: 2019-01-24T22:06:32.659Z
contentType: tutorial
productTeam: Others
author: authors_61
slug: como-el-erp-diferencia-un-pedido-normal-de-un-recurrente
locale: es
legacySlug: como-el-erp-diferencia-un-pedido-normal-de-un-recurrente
subcategory: 5fKgQZhrCw88ACy6Su6GUc
---

La diferencia está en el json de integración del pedido con el ERP.

En el pedido de contratación de recurrencia, el parámetro &#8220;**itemAttachment**&#8221; informará la periodicidad (por ejemplo: **&#8220;periodo&#8221;:&#8221;Semanal&#8221;**) y el parámetro **&#8220;attachments&#8221;** informará el tipo de archivo adjunto **&#8220;Recurrencia&#8221;**.

En el pedido recurrente, generado de forma automática, los parámetros anteriores no se cumplen, porque son informaciones de la contratación del servicio. Pero la tag **&#8220;openTextField&#8221;** tendrá valor = **“Order Created By VTEX Recurrence System”**.

Estos son los datos que diferencian el pedido normal del pedido con recurrencia.

