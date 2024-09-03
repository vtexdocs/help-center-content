---
title: '¿Por qué el origen de los pedidos está diferente en VTEX y en Google Analytics?'
id: frequentlyAskedQuestions_5030
status: ARCHIVED
createdAt: 2017-04-27T22:22:57.838Z
updatedAt: 2023-06-21T22:44:36.086Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:02:44.531Z
contentType: frequentlyAskedQuestion
productTeam: Identity
author: authors_59
slug: por-que-el-origen-de-los-pedidos-esta-diferente-en-vtex-y-en-google-analytics
locale: es
legacySlug: por-que-el-origen-de-los-pedidos-esta-diferente-en-vtex-y-en-google-analytics
---

Puede ocurrir una divergencia entre la información de origen de los pedidos en VTEX y en Google Analytics. Esto ocurre porque existe una diferencia en el tiempo y expiración de los cookies.

Los cookies de Google Analytics expiran en aproximadamente 4 días hábiles, y los de VTEX expiran en menos tiempo.

### Ejemplo

- Un cliente accede a una tienda por una campaña de email, pero no concluye la compra.
- Después de 3 días, él accede directamente al site de la tienda y realiza la compra.
- En Google Analytics, queda marcado que el acceso tuvo origen en la campaña de email.
- En VTEX, queda marcado que el acceso fue directo (el escenario que realmente ocurrió).

Debido a esa diferencia en el tiempo de expiración de los cookies, **la información de VTEX siempre será más precisa que la del Google Analytics**.

En Google Analytics esas configuraciones son llamadas modelos de atribución. Si es de interés de la tienda, es posible modificar la configuración de la regla a utilizar por allá. En internet es posible encontrar mucho material sobre este factor en la mensuración de campañas.
