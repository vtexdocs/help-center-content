---
title: 'Configuring MercadoPago Transparente'
id: frequentlyAskedQuestions_487
status: DRAFT
createdAt: 2017-04-27T22:35:31.234Z
updatedAt: 2019-12-31T14:24:22.200Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:01:47.269Z
contentType: frequentlyAskedQuestion
productTeam: Financial
author: authors_84
slug: how-to-configure-mercadopago-transparente
legacySlug: 
---

The configuration of Mercado Pago Transparente is slightly different from the others, as it needs to be configured on oogle TagManager, in addition to the usual configurations. Therefore, before undertaking the configurations below, configure the [gateway affiliation](/en/tutorial/afiliacoes-de-gateway/) MercadoPago Transparente (__MercadoPagoV1__) and the [payment conditions](/en/tutorial/condicoes-de-pagamento/) (card brands).

_The configurations documented in this article take place in an environment external to VTEX, therefore they may be out of date._

## Creating the first tag

These configurations take place on your Google TagManager.

1. Click on the option **Tag** and in **Novo**;
2. Choose the product **Tag HTML Personalizada**;
3. Enter the following script:```<form><input type='hidden' id='deviceId' name='deviceId'></form><script src="https://secure.mlstatic.com/org-img/checkout/custom/0.6/threat_metrix.js"></script>```
4. Check the option **Suporte para document.write**;
5. In **Dispara Em**, select the option **Mais** and click on **Novo**;
6. Allocate a name to this trigger and choose the event type **Evento Personalizado**;
7. In **Disparar Em**, allocate a name to this event, choose the page display and configure the following: **url ****contém.**** /checkout**
8. Save the trigger;
9. Click on the **Criar Tag **button, enter a name for this tag and Save.

![](//images.contentful.com/alneenqid6w5/YndMcdc0aAw2GKYU0EyU2/c917ac451cfeb262d8354164c6caa285/MercadoPagoTransparente_1_PT.gif)

## Creating the second tag

These configurations take place on your Google TagManager.

1. Click on the option **Tag** and in **Novo**;
2. Choose the product **Tag HTML Personalizada**;
3. Enter the following script:```<script>window.vtex.deviceFingerprint = $("#deviceId").val()</script>```
4. Check the option **Suporte para document.write**;
5. In **Dispara Em**, select the option **Mais** and click on **Novo**;
6. Allocate a name to this trigger and choose the event type **Evento Personalizado**;
7. In **Disparar Em**, allocate a name to this event and configure the following: **event ****é igual a**** payment****;**
8. Save the trigger;
9. Click on the **Criar Tag **button, enter a name for this tag and Save;
10. In the upper right-hand corner, click on **Publicar** and then on **Publicar****.**

![](//images.contentful.com/alneenqid6w5/32NgyD7KNqicqiASoIUEkK/892ab0a77b4bf2295dcb72d6335de49e/MercadoPagoTransparente_2_PT.gif)
