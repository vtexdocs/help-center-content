---
title: '¿Por qué el hostName en el JSON del Centro de mensajes muestra información distinta a la de la Gestión de la cuenta?'
id: frequentlyAskedQuestions_6695
status: PUBLISHED
createdAt: 2017-04-27T22:22:10.816Z
updatedAt: 2019-12-31T14:25:01.415Z
publishedAt: 2019-12-31T14:25:01.415Z
firstPublishedAt: 2017-04-27T23:02:46.478Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: authors_3
slug: por-que-el-hostname-en-el-json-del-message-center-muestra-informacion-distinta-a-la-del-license-manager
locale: es
legacySlug: por-que-el-hostname-en-el-json-del-message-center-muestra-informacion-distinta-a-la-del-license-manager
---

El JSON utilizado por el Centro de mensajes, o sea, la fuente de las informaciones que se enviarán por el email, es una junción de informaciones de diversos sistemas. Entre ellas están las informaciones del pedido provenientes de la Gestión de pedidos y las informaciones de cuenta provenientes de la Gestión de la cuenta.

Al visualizar la variable `hostName` en el JSON del Centro de mensajes, puede aparecer la duda sobre dónde es cargado ese dato. Por más que el nombre de la variable sea host, ella lleva el nombre - no modificable - del site creado en la pestaña Cuentas de la sección Gestión de la cuenta.

![VTEX - License Manager](https://images.contentful.com/alneenqid6w5/5sZb9Mvw4wcK6oM40CKEak/eee7f0e5848c179c678761a418a978b4/2017-03-22-12_33_29-VTEX-License-Manager.png)

O sea, o será cargado el valor insertado en el área de Hosts, sino que, conforme a la imagen arriba, será cargado para el template de email el valor registrado en **Nombre de la Tienda**.
