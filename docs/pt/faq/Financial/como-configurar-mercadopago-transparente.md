---
title: 'Configurar MercadoPago Transparente'
id: frequentlyAskedQuestions_487
status: ARCHIVED
createdAt: 2017-04-27T22:35:31.234Z
updatedAt: 2019-12-31T14:24:22.200Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:01:47.269Z
contentType: frequentlyAskedQuestion
productTeam: Financial
author: authors_84
slugEN: how-to-configure-mercadopago-transparente
locale: pt
legacySlug: 
---

A configuração do Mercado Pago Transparente é ligeiramente diferente das demais pois necessita da configuração no Google TagManager, além das configurações habituais. Portanto, antes de realizar as configurações abaixo, realize a configuração da [afiliação de gateway](/pt/tutorial/afiliacoes-de-gateway/) MercadoPago Transparente (__MercadoPagoV1__) e das [condições de pagamento](/pt/tutorial/condicoes-de-pagamento/) (bandeiras de cartão).

_As configurações documentadas neste artigo são realizadas em um ambiente fora da VTEX, portanto, podem estar desatualizadas._

## Criando a primeira tag

Essas configurações são realizadas em seu Google TagManager.

1. Clique na opção **Tag** e em **Novo**;
2. Escolha o produto **Tag HTML Personalizada**;
3. Insira o seguinte script:```<form><input type='hidden' id='deviceId' name='deviceId'></form><script src="https://secure.mlstatic.com/org-img/checkout/custom/0.6/threat_metrix.js"></script>```
4. Marque a opção **Suporte para document.write**;
5. Em **Dispara Em**, selecione a opção **Mais** e clique em **Novo**;
6. Insira um nome para este acionador e escolha o evento tipo **Evento Personalizado**;
7. Em **Disparar Em**, coloque um nome para este evento, escolha a opção exibição de página e configure o seguinte: **url contém. /checkout**
8. Salve o acionador;
9. Clique no botão **Criar Tag**, insira um nome para esta tag e Salve.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/faq/Financial/como-configurar-mercadopago-transparente_1.gif)

## Criando a segunda tag

Essas configurações são realizadas em seu Google TagManager.

1. Clique na opção **Tag** e em **Novo**;
2. Escolha o produto **Tag HTML Personalizada**;
3. Insira o seguinte script:`<script>window.vtex.deviceFingerprint = $("#deviceId").val()</script>`
4. Marque a opção **Suporte para document.write**;
5. Em **Dispara Em**, selecione a opção **Mais** e clique em **Novo**;
6. Insira um nome para este acionador e escolha o evento tipo **Evento Personalizado**;
7. Em **Disparar Em**, coloque um nome para este evento e configure o seguinte: **event é igual a payment;**
8. Salve o acionador;
9. Clique no botão **Criar Tag**, insira um nome para esta tag e Salve;
10. No canto superior direito, clique em **Publicar** e logo após em **Publicar.**

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/faq/Financial/como-configurar-mercadopago-transparente_2.gif)
