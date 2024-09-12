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
slug: configurar-fingerprint-para-payu
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
3. Criar um produto de “HTML Personalizado” como se vê na imagem a seguir:![payU 1](https://images.contentful.com/alneenqid6w5/8Kc8zBKQFOmwK6G8ekgMa/2a26fa73a709b116cfdf899d4aee7a23/payU_1.png)
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

       document.getElementById('gtm').innerHTML = '<p style="background:url(https://maf.pagosonline.net/ws/fp?id='+deviceSessionId+'80200)"></p>'+'<img src="https://maf.pagosonline.net/ws/fp/clear.png?id='+deviceSessionId+'80200">';
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

![payU 2](https://images.contentful.com/alneenqid6w5/4Y60ayHwaQa8ykaUQUmqgq/4a8ad711a25542b1513a75e94725c464/payU_2.png)

Depois é preciso realizar a configuração avançada tal como consta na imagem a seguir:![payU 3](https://images.contentful.com/alneenqid6w5/2tZRZWcwFWgq6IueAKWQ4o/c64a7a0f2b6dbaad9405e3e55408fb8c/payU_3.png)

Para configurar o evento, siga os passos abaixo:

1. Entre na aba More:![payU 4](https://images.contentful.com/alneenqid6w5/1NyDU3X1EseWcCisO04okg/66d6593915e933c22768633a76b4bf92/payU_4.png)
2. Crie um evento personalizado:![payU 5](https://images.contentful.com/alneenqid6w5/Xip98CFhokwoCs22GsUyK/a1c70a419c84d2f4fa2bb0908e0336cd/payU_5.png)
3. Preencha-o da seguinte maneira:![payU 6](https://images.contentful.com/alneenqid6w5/6Rdhtn8quA2IaqKSKeGa0u/0f7a6ed573a438475c477b5c09c331ad/payU_6.png)
4. Salve o evento e posteriormente salve a etiqueta (tag):![payU 7](https://images.contentful.com/alneenqid6w5/2AcLzAcwgMs2SwgkEqEmo2/941c852d50622d570e8fab6534780e33/payU_7.png)
5. Uma vez salva a etiqueta, é necessário publicá-la:![payU 8](https://images.contentful.com/alneenqid6w5/6mpOQSBwzYq844A8uCuWck/125894734e6996cc1521b46c3562a8a7/payU_8.png)

Uma vez que já configuramos a etiqueta, temos que salvar o JS chamado a partir do código. Este é salvo dentro do gestor de arquivo da VTEX. Para fazer isso é necessário seguir os seguintes passos:

- Acessando o painel VTEX no menu CMS >> Layout >> Files Manager >> Gerenciamento de arquivo .js >> Add.

![cms js](https://images.ctfassets.net/alneenqid6w5/175WhPco7ew6OSEUsIG4MU/68772fc79d642781908d19163d787141/cms_js.png)

__Anexo__: [md5.js](https://assets.contentful.com/alneenqid6w5/5PeWM49nPykYYeWI4cOCy4/60c61b5bcf0b4ce92f211f944ab261ad/md5.js)

### Validação

Para fazer a validação, é necessário entrar na loja, fazer todo o processo de compra. Assim que chegarmos em forma de pagamento, validamos que o JS está sendo executando:

1. Clique com o botão direito no botão de compra
2. Selecione Inspecionar Elemento
3. Faça a busca da palavra MAF

Se o resultado for encontrado, significa que a configuração está correta e o Fingerprint está sendo enviado corretamente, segue um exemplo:
![payU 9](https://images.contentful.com/alneenqid6w5/66H4gkLslyuk0sgOgm8IWC/3d04eca1fdb8ed6a7b4cbf7065a73ec3/payU_9.png)
