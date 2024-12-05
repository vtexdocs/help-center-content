---
title: 'Configurar o device fingerprint para a Stelo'
id: frequentlyAskedQuestions_3533
status: PUBLISHED
createdAt: 2019-01-24T20:46:00.535Z
updatedAt: 2021-12-09T19:45:47.415Z
publishedAt: 2021-12-09T19:45:47.415Z
firstPublishedAt: 2019-01-24T22:00:42.453Z
contentType: tutorial
productTeam: Financial
author: authors_24
slugEN: how-to-configure-the-fingerprint-device-for-stelo
locale: pt
legacySlug: como-configurar-o-device-fingerprint-para-a-stelo
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

__Device Fingerprint__ é um identificador que atua no processamento de um pagamento, tendo como objetivo melhorar a análise do risco de fraude em cada transação. 

Por meio da coleta de dados não sensíveis, o Device Fingerprint identifica e analisa o nível de segurança do dispositivo utilizado para realizar a transação, bem como as transações que anteriormente foram realizadas com este mesmo dispositivo.

>ℹ️ Cada loja deve ter somente um Device Fingerprint cadastrado. Verifique se você já efetuou o cadastro do Device Fingerprint em outro conector, antes de continuar os passos abaixo.

Neste artigo, explicaremos como associar o recurso Device Fingerprint à afiliação Stelo.

>ℹ️ As instruções dessa etapa do artigo são realizadas em um ambiente externo. Desse modo, podem estar desatualizadas.

Para inserir os scripts que a Stelo exige para o device fingerprint, é necessário usar o Google Tag Manager. Para isso, faça login na sua conta em [http://www.google.com/tagmanager](http://www.google.com/tagmanager). Depois, siga os passos abaixo:

1. No menu inicial do Google Tag Manager, clique em **Nova tag**
2. Selecione **Configuração da tag** e escolha o tipo **HTML personalizado**.![Tela1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/Payment%20Settings/como-configurar-o-device-fingerprint-para-a-stelo_1.jpg)

Então insira o script abaixo:

```
<iframe id="iframeCyber" src="https://carteirac1.hml.stelo.com.br/transaction/transfer?idUnico={{deviceId}}" width="0" marginwidth="0" height="0" marginheight="0" frameborder="0">
</iframe>
<script> 
$(document).ready(function(){
var src = document.getElementById("iframeCyber").src;
regex = /=(.*)$/;
var match = regex.exec(src);
window.vtex.deviceFingerprint = match[1];
}); 
</script>
```

Depois, siga os passos abaixo:

1. Clique em **Acionamento**, Novo acionador (símbolo de **+** no canto superior direito) e em **Configuração do acionador.**![Tela2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/Payment%20Settings/como-configurar-o-device-fingerprint-para-a-stelo_2.jpg)
2. Escolha o tipo **Evento personalizado** e insira o nome **payment**;
3. Selecione a flag **Alguns eventos personalizados**;
4. Nas duas primeiras caixas abaixo, selecione: **Event** e **é igual a**. Na terceira, escreva **payment**.![Tela3](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/Payment%20Settings/como-configurar-o-device-fingerprint-para-a-stelo_3.jpg)
5. Salve o acionador e a tag;
6. No menu lateral, clique na opção **Variáveis** e depois em **Nova**;
7. Clique em **Configuração da variável** e escolha o tipo **JavaScript personalizado**;![Tela4](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/Payment%20Settings/como-configurar-o-device-fingerprint-para-a-stelo_4.jpg)

Por fim, insira o script abaixo:

```
function guid() {
     function s4() {
          return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
   }
     return s4() + s4() + s4();
}
```

Finalmente, salve a variável e clique em **Publicar** para que as alterações tenham efeito.
