---
title: 'Configurar Konduto'
id: tutorials_3125
status: PUBLISHED
createdAt: 2017-04-27T21:52:18.180Z
updatedAt: 2023-03-30T16:09:33.630Z
publishedAt: 2023-03-30T16:09:33.630Z
firstPublishedAt: 2017-04-27T23:03:55.168Z
contentType: tutorial
productTeam: Channels
author: authors_3
slugEN: how-to-configure-konduto
locale: pt
legacySlug: configurando-konduto
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Konduto é um antifraude, sistema externo que analisa as compras realizadas a fim de evitar fraudes.

Este antifraude depende de configurações diferentes dos [demais antifraudes que podem ser configurados em sua plataforma](http://help.vtex.com/tutorial/como-configurar-antifraude/ "demais antifraudes que podem ser configurados em sua plataforma"), pois coletam informações de navegação e de dispositivo do visitante. Por isto, este artigo tem como objetivo documentar a configuração do Konduto.

## Configure seu GTM

GTM é o Google Tag Manager, uma ferramenta do Google que faz gerenciamento de tags no site. Esse GTM é então associado em sua conta e insere todas as tags configuradas nele em seu site. [Veja mais detalhes sobre como configurar o GTM em sua loja](http://help.vtex.com/faq/integracao-com-o-google-tag-manager/ "Veja mais detalhes sobre como configurar o GTM em sua loja").

### Crie a variável

O primeiro passo é a configuração da variável. O nome da variável deve ser `kondutoId`, pois é o valor indicado no script abaixo. A variável deve ser do tipo **permanente**. No valor da variável, insira o _public_key_ informado pela Konduto &#8211; cada loja possui um id único.

### Configure a tag

Em sua conta GTM, crie a tag, tipo **html personalizado** com o script abaixo.

```
<script>var __kdt = __kdt || [];__kdt.push({"public_key":"kondutoId"});__kdt.push({"post_on_load": false});(function() { var kdt = document.createElement('script');kdt.id = 'kdtjs';kdt.type = 'text/javascript';kdt.async = true;kdt.src = 'https://i.k-analytix.com/k.js';var s = document.getElementsByTagName('body')[0]; s.parentNode.insertBefore(kdt, s); })();$(function() {var period = 300;var limit = 20 * 1e3;var nTry = 0;var intervalID = setInterval(function() {var clear = limit/period <= ++nTry;if (typeof(Konduto.sendEvent) !== "undefined") {setKondutoFingerPrint();clear = true;}if (clear) { clearInterval(intervalID); }}, period);}); var setKondutoFingerPrint = function(){ var kdtFP = Konduto.getVisitorID(); window.vtex.deviceFingerprint = kdtFP; Konduto.sendEvent('page','checkout'); }</script>
```

## Configure a afiliação de gateway

1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página. 
2. Acesse a aba **Afiliações de Gateways** e clique em **+**.
3. Buscar pelo Antifraude **Konduto.**
4. Preencher o formulário com os dados indicados pelo antifraude.

## Configure a(s) forma(s) de pagamento

Para vincular o **Konduto** a uma forma de pagamento:

1. Acesse a aba **Condições de pagamento**.
2. Clique sobre a condição desejada ou [crie a condição de pagamento](/pt/tutorial/condicoes-de-pagamento "crie a condição de pagamento").
3. Selecione a opção **Usar antifraude**.
4. Selecione o **Konduto**.
5. Clique no botão **Salvar**.
