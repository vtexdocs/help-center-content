---
title: 'Configurar Device Fingerprint do Mercado Pago'
id: m2knP9z69HGHHBIiFq0Ga
status: PUBLISHED
createdAt: 2021-07-05T13:25:37.711Z
updatedAt: 2021-12-09T19:38:43.090Z
publishedAt: 2021-12-09T19:38:43.090Z
firstPublishedAt: 2021-07-05T13:34:09.043Z
contentType: tutorial
productTeam: Financial
author: 13Ue4MX9WNiX9f3SVCUZZW
slugEN: configuring-mercado-pagos-device-fingerprint
legacySlug: configurar-device-fingerprint-do-mercado-pago
locale: pt
subcategoryId: 
---

__Device Fingerprint__ é um identificador que atua no processamento de um pagamento, tendo como objetivo melhorar a análise do risco de fraude em cada transação. 

Por meio da coleta de dados não sensíveis, o Device Fingerprint identifica e analisa o nível de segurança do dispositivo utilizado para realizar a transação, bem como as transações que anteriormente foram realizadas com este mesmo dispositivo.

> ℹ️ Cada loja deve ter somente um Device Fingerprint cadastrado. Verifique se você já efetuou o cadastro do Device Fingerprint em outro conector, antes de continuar os passos abaixo.

Neste artigo, explicaremos como associar o recurso Device Fingerprint à afiliação Mercado Pago.

1. Acesse o __Admin__ VTEX.
2. Em __Configurações da loja__, clique em __Checkout__.
3. Em __Default__, clique na engrenagem azul.
4. Na aba superior, clique em __Código__.
5. No canto direito, em __Arquivos__, selecione uma das seguintes opções:

  - Se você utiliza a V5 do checkout, clique em __checkout5-custom.js__
  - Se você utiliza a V6 do checkout, clique em __checkout6-custom.js__

<ui>
  6. No campo seguinte, apague a mensagem de aviso e insira o seguinte código:
</ui>

```
var script = document.createElement("script");
script.src = "https://www.mercadopago.com/v2/security.js";
script.setAttribute("output","vtex.deviceFingerprint");
script.setAttribute("view","checkout");
document.body.appendChild(script);
console.log("MP-deviceId 2020 " + script.getAttribute("output").value );

```
<ui>
  7. Clique em **Salvar** para que o código seja aplicado ao checkout.
</ui>

Ao finalizar essas configurações, o Device Fingerprint do Mercado Pago estará instalado na sua loja.

## Confirmar envio do Device Fingerprint

Para garantir o funcionamento deste recurso, é preciso analisar os detalhes de uma compra realizada utilizando o Mercado Pago como forma de pagamento. Para isso, siga os passos abaixo:

1. Acesse o __Admin__ VTEX.
2. Clique em __Pagamentos > Transações__.
3. Selecione a transação mais recente que tenha utilizado o __Mercado Pago__ como forma de pagamento. 
4. Na página seguinte, clique em __+Informações__.
5. Ao clicar em __+Informações__, busque pelo campo __deviceFingerprint__ e confira se o código disponível inicia com a palavra __armor__, conforme exemplo abaixo. 

![Device Fingerprint Armor](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/uncategorized/unknown-subcategory/configurar-device-fingerprint-do-mercado-pago_1.png)

<ui>
6. Ao confirmar que as informações estão corretas, a etapa final para verificação do Device Fingerprint é o envio do ID da transação para a equipe do Mercado Pago. Esse ID pode ser encontrado no campo, **authorizationConnectorResponse**, no detalhe da transação.
</ui>

![Autorização](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/uncategorized/unknown-subcategory/configurar-device-fingerprint-do-mercado-pago_2.png)

<ui>
7. Copie o ID e [encaminhe um e-mail](https://www.mercadopago.com.br/developers/pt/support) para o Mercado Pago com esta informação e solicite a validação da transação. Dessa forma, a equipe do Mercado Pago poderá avaliar se o Device Fingerprint está operando corretamente.
</ui>

Assim que receber o retorno do Mercado Pago, o Device Fingerprint estará instalado e pronto para ser utilizado em sua loja.
