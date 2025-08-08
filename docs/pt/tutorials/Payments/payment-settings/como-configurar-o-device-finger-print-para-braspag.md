---
title: 'Configurar o device fingerprint para Braspag'
id: frequentlyAskedQuestions_488
status: PUBLISHED
createdAt: 2019-01-24T20:45:54.261Z
updatedAt: 2021-12-09T19:50:42.084Z
publishedAt: 2021-12-09T19:50:42.084Z
firstPublishedAt: 2019-01-24T22:04:58.918Z
contentType: tutorial
productTeam: Financial
author: authors_84
slugEN: how-to-set-up-the-device-fingerprint-for-braspag
legacySlug: como-configurar-o-device-finger-print-para-braspag-cybersource
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

__Device Fingerprint__ é um identificador que atua no processamento de um pagamento, tendo como objetivo melhorar a análise do risco de fraude em cada transação. 

Por meio da coleta de dados não sensíveis, o Device Fingerprint identifica e analisa o nível de segurança do dispositivo utilizado para realizar a transação, bem como as transações que anteriormente foram realizadas com este mesmo dispositivo.

<div class="alert alert-info">
Cada loja deve ter somente um Device Fingerprint cadastrado. Verifique se você já efetuou o cadastro do Device Fingerprint em outro conector, antes de continuar os passos abaixo.
</div>

Neste artigo, explicaremos como associar o recurso Device Fingerprint à afiliação Braspag.

<div class="alert alert-info">As instruções dessa etapa do artigo são realizadas em um ambiente externo. Desse modo, podem estar desatualizadas.</div>

Para inserir os scripts que a Braspag/CyberSource exige para o device fingerprint, é necessário o uso do Google Tag Manager. Para isso, faça login em [http://www.google.com/tagmanager](http://www.google.com/tagmanager/) e entre em sua conta.

## Criação de variáveis (macros) e acionador

- Crie a variável de nome `trasactionPaymentId`, tipo **Variável da camada de dados**, lendo a variável `transactionPayment.id` do datalayer.![](https://images.contentful.com/alneenqid6w5/2iGloCXR32IMAyWAKe8qWy/cf1108ad17e944adc63f189e67cfa93d/gtm-cybersource-variavel1-1.png)
- Crie a variável de nome `cs_sessionId`, com o tipo **JavaScript personalizado** e o seguinte código:

```
function() {  
  var transactionPaymentId = {{transactionPaymentId}}  
  return transactionPaymentId.toLowerCase();
  }
```

![](https://images.contentful.com/alneenqid6w5/2qhm00B2d2guyeqIU4gCCc/15c42813f5a0ad04937da7aebcc2e5b2/gtm-cybersource-variavel2-javascript-3.png)

- Crie as variáveis `cs_orgId` e `cs_merchantId` com o tipo **Permanente**. O valor dessas duas variáveis deverá ser preenchido com o conteúdo fornecido pela Braspag. Fique atento que esse valor também configura no conector da Braspag como **FingerPrint_MerchantId**.

![gtm-cybersource-variavel3-permanente](https://images.contentful.com/alneenqid6w5/5EFSTIM6TCKUE4GEOA66kc/8c2f37cdd8cc94571f6f2ac72ec1d35b/gtm-cybersource-variavel3-permanente.png)

- Crie ou edite um acionador para a tela de OrderPlaced (tela de compra finalizada com sucesso), para que seja compatível com o evento de tipo **Evento personalizado** e de valor **orderPlaced**.

![gtm-cybersource-acionador-orderplaced](https://images.contentful.com/alneenqid6w5/51IPOyaAjmowkEQ24sYyw4/7b11cddfb71c200dd1cd2c85149c7726/gtm-cybersource-acionador-orderplaced.png)

## Criação da tag para Braspag

- Crie uma nova tag, do tipo **HTML personalizado**.
- Dê o nome de sua preferência.

Preencha com o seguinte código HTML:

```
<p style="background:url(https://h.online-metrix.net/fp/clear.png?org_id={{cs_orgId}}&amp;session_id={{cs_merchantId}}{{cs_sessionId}}&amp;m=1)"></p>
<img src="https://h.online-metrix.net/fp/clear.png?org_id={{cs_orgId}}&amp;session_id={{cs_merchantId}}{{cs_sessionId}}&amp;m=2" alt="">

<object type="application/x-shockwave-flash" data="https://h.online-metrix.net/fp/fp.swf?org_id={{cs_orgId}}&amp;session_id={{cs_merchantId}}{{cs_sessionId}}" width="1" height="1"id="thm_fp">
<param name="movie" value="https://h.online-metrix.net/fp/fp.swf?org_id={{cs_orgId}}&amp;session_id={{cs_merchantId}}{{cs_sessionId}}" /><div></div></object>

<script src="https://h.online-metrix.net/fp/check.js?org_id={{cs_orgId}}&amp;session_id={{cs_merchantId}}{{cs_sessionId}}" type="text/javascript"></script>
```

![braspag fingerprint](//images.ctfassets.net/alneenqid6w5/JTnL01Ko0DMc7Pu8Bp1CQ/c023534e5c43d1f5fd06ebf9e13dcac6/image.png)

Por fim, publique as alterações.
