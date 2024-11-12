---
title: 'Configurar FingerPrint para PayU'
id: 4Gim58iszSuoqW2884gsu8
status: PUBLISHED
createdAt: 2017-07-19T14:43:16.588Z
updatedAt: 2021-12-09T19:52:40.752Z
publishedAt: 2021-12-09T19:52:40.752Z
firstPublishedAt: 2017-07-19T15:04:05.008Z
contentType: tutorial
productTeam: Financial
author: authors_84
slugEN: how-to-set-up-fingerprint-for-payu
locale: pt
legacySlug: configurar-fingerprint-para-payu
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

__Device Fingerprint__ é um identificador que atua no processamento de um pagamento, tendo como objetivo melhorar a análise do risco de fraude em cada transação. 

Por meio da coleta de dados não sensíveis, o Device Fingerprint identifica e analisa o nível de segurança do dispositivo utilizado para realizar a transação, bem como as transações que anteriormente foram realizadas com este mesmo dispositivo.

>ℹ️ Cada loja deve ter somente um Device Fingerprint cadastrado. Verifique se você já efetuou o cadastro do Device Fingerprint em outro conector, antes de continuar os passos abaixo.

Neste artigo, explicaremos como associar o recurso Device Fingerprint à afiliação PayU.

>ℹ️ As instruções dessa etapa do artigo são realizadas em um ambiente externo. Desse modo, podem estar desatualizadas.

1. Fazer login em http://www.google.com/tagmanager/ para a loja que vamos configurar;
2. Introduzir o item etiquetas (tags) para configurar o id da sessão do device;
3. Criar um produto de “HTML Personalizado” como se vê na imagem a seguir:![payU 1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)
4. No campo HTML da configuração, devemos colar o código HTML que chama o código para mandar a informação a PayU:

```
<script src="/arquivos/md5.js"></script>

<script>
       function getCookie(cname) {
       var name = cname + "=";
       var ca = document.cookie.split(';');
       for(var i=0; i<ca.length; i++) {
               var c = ca[i].trim();
               if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
       }
       return "";
   }
   function microtime(get_as_float) {
       var now = new Date().getTime() / 1000;
       var s = parseInt(now, 10);

       return (get_as_float) ? now : (Math.round((now - s) * 1000) / 1000) + ' ' + s;
   }

   vtexjs.checkout.getOrderForm().done(function(orderForm){ // hala el valor de userProfileId
       var uid = getCookie('VtexIdclientAutCookie') + orderForm.userProfileId;
       var deviceSessionId = CryptoJS.MD5(uid+microtime());
       console.log("dsid: "+deviceSessionId);

       window.vtex.deviceFingerprint = deviceSessionId;

       console.log("fingerprint: "+window.vtex.deviceFingerprint);

       document.getElementById('gtm').innerHTML = '<p style="background:url(https://maf.pagosonline.net/ws/fp?id='+deviceSessionId+'80200)"></p>'+'<img src="https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_11.png">';
       document.getElementById('maf').innerHTML = '<object type="application/x-shockwave-flash" data="https://maf.pagosonline.net/ws/fp/fp.swf?id='+deviceSessionId+'80200" width="1" height="1" id="thm_fp"><param name="movie" value="https://maf.pagosonline.net/ws/fp/fp.swf?id='+deviceSessionId+'80200" /></object>';

       var pol_script = document.createElement('script');
       pol_script.type = 'text/javascript';
       pol_script.src = 'https://maf.pagosonline.net/ws/fp/check.js?id='+deviceSessionId+'80200';
       document.getElementById("gtm").appendChild(pol_script);
   }); // JavaScript Document
</script>

<div id="gtm"></div>
<div id="maf"></div>
```

![payU 2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.png)

Depois é preciso realizar a configuração avançada tal como consta na imagem a seguir:![payU 3](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_3.png)

Para configurar o evento, siga os passos abaixo:

1. Entre na aba More:![payU 4](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_4.png)
2. Crie um evento personalizado:![payU 5](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_5.png)
3. Preencha-o da seguinte maneira:![payU 6](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_6.png)
4. Salve o evento e posteriormente salve a etiqueta (tag):![payU 7](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_7.png)
5. Uma vez salva a etiqueta, é necessário publicá-la:![payU 8](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_8.png)

Uma vez que já configuramos a etiqueta, temos que salvar o JS chamado a partir do código. Este é salvo dentro do gestor de arquivo da VTEX. Para fazer isso é necessário seguir os seguintes passos:

- Acessando o painel VTEX no menu CMS >> Layout >> Files Manager >> Gerenciamento de arquivo .js >> Add.

![cms js](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_9.png)

__Anexo__: [md5.js](//assets.contentful.com/alneenqid6w5/5PeWM49nPykYYeWI4cOCy4/60c61b5bcf0b4ce92f211f944ab261ad/md5.js)

### Validação

Para fazer a validação, é necessário entrar na loja, fazer todo o processo de compra. Assim que chegarmos em forma de pagamento, validamos que o JS está sendo executando:

1. Clique com o botão direito no botão de compra
2. Selecione Inspecionar Elemento
3. Faça a busca da palavra MAF

Se o resultado for encontrado, significa que a configuração está correta e o Fingerprint está sendo enviado corretamente, segue um exemplo:
![payU 9](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_10.png)
