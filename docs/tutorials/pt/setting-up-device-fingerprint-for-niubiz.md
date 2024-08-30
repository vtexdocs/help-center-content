---
title: 'Configurar Device Fingerprint para Niubiz'
id: opa2M7CHVjCzlEY95nexP
status: PUBLISHED
createdAt: 2021-01-07T14:05:56.827Z
updatedAt: 2023-03-23T15:32:49.504Z
publishedAt: 2023-03-23T15:32:49.504Z
firstPublishedAt: 2021-01-07T15:34:38.735Z
contentType: tutorial
productTeam: Financial
author: 7qy2DBsUp8U5P9lqV0JHfR
slug: configurar-device-fingerprint-para-niubiz
locale: pt
legacySlug: configurar-device-fingerprint-para-niubz
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

__Device Fingerprint__ é um identificador que atua no processamento de um pagamento, tendo como objetivo melhorar a análise do risco de fraude em cada transação. 

Por meio da coleta de dados não sensíveis, o Device Fingerprint identifica e analisa o nível de segurança do dispositivo utilizado para realizar a transação, bem como as transações que anteriormente foram realizadas com este mesmo dispositivo.

>ℹ️ Cada loja deve ter somente um Device Fingerprint cadastrado. Verifique se você já efetuou o cadastro do Device Fingerprint em outro conector, antes de continuar os passos abaixo.

Neste artigo, explicaremos como associar o recurso Device Fingerprint à afiliação Niubiz. 

Para isso, é necessário gerar um identificador via [Google Tag Manager](https://marketingplatform.google.com/about/tag-manager/ "Google Tag Manager") e, em seguida, associá-lo à afiliação por meio do Admin.  

### Crie o identificador

>ℹ️ As instruções dessa etapa do artigo são realizadas em um ambiente externo. Desse modo, podem estar desatualizadas.

Antes de qualquer coisa, você precisa criar o identificador.

Dito isso, confira as instruções:

1. Faça o login na sua __conta__ do __Google Tag Manager__.
2. No menu inicial, clique na __aba "Tags"__.
3. Em seguida, selecione a __opção "Configuração da tag"__.
4. Em tipos de tags, selecione a __opção "HTML Personalizado"__.
5. Preencha o campo com o seguinte __código javascript__.
    ```    
    <script>
    window.vtex.deviceFingerprint = getuuid() ;
    console.log('fingerprint: '+window.vtex.deviceFingerprint);
    initDFP(window.vtex.deviceFingerprint);
    var localSessionId = null;
    function doProfile(orgId, sessionId, hostname){
    console.log('Starting profile using ' + hostname + ' for orgId ' + orgId + ' with sessionId ' + sessionId + ' on ' + Math.floor(Date.now() / 1000));
    var head = document.getElementsByTagName("head").item(0);
    var url = "https://" + hostname + "/tags.js?org_id=" + orgId + "&session_id=" + sessionId + "&page_id=1&allow_reprofile=1";
    console.log(url);
    var script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", url);
    head.appendChild(script); console.log('Profile should have started...');
    body = document.getElementsByTagName("body").item(0);
    noscript = document.createElement("noscript");
    iframe = document.createElement("iframe");
    iframe.setAttribute("style", "width: 100px; height: 100px; border: 0; position:absolute; top: -5000px;");
    iframe.setAttribute("src", url);
    noscript.appendChild(iframe);
    body.insertBefore(noscript, body.childNodes[0]);
    }
    function initDFP(sessionId) {
    localSessionId = sessionId;
    console.log('Init profiling ', Math.floor(Date.now() / 1000))
    var timeout = 3000;
    var sasOrgId = "507f9ifk";
    var csOrgId = "1snn5n9w";
    var merchantId = "vndp";
    var hostname = "h.online-metrix.net/fp"; 
    doProfile(sasOrgId, sessionId, "m.vnforapps.com");
    setTimeout(startOnTimer(sessionId) , timeout); }
    function startOnTimer(sessionId) {
    var csOrgId = "1snn5n9w";
    var merchantId = "vndp";
    var hostname = "h.online-metrix.net/fp";
    doProfile(csOrgId, merchantId + sessionId, hostname); }
    function getuuid() {
    var dt=new Date().getTime();
    var uuid='xxxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g,function(c){
          var r = (dt + Math.random()*16)%16 | 0;
      dt = Math.floor(dt/16);
      return (c=='x' ? r : (r&0x3|0x8)).toString(16);
      });
    return uuid;
    }
    function tmx_profiling_complete(sessionId) {
      console.log('Finished ', sessionId, '-', Math.floor(Date.now() / 1000));
    }
    </script>
    ```
6. Na seção __"Configurações avançadas"__, deixe os __valores vazios__.
7. Clique em __Acionadores__.
8. Selecione a __opção "Evento personalizado"__.
9. Preencha o campo __"Nome do evento" com o valor “.*”__.
10. Clique na __caixa de seleção "Utilizar uma expressão regular que coincida com"__.
11. Em "Este ativador se ativa em", clique na opção __"Alguns eventos personalizados"__.
12. __Salve__ as configurações e publique-as.

Desse modo, o Google Tag Manager criará o identificador. 

>⚠️ Anote o ID em um local que você não o perca.

## Configuração no Admin VTEX

Agora que você tem o ID em mãos, você deve associá-lo à afiliação Niubiz no Admin.

Prossiga com o passo a passo:

1. No Admin VTEX, acesse **Configuação da loja > Storefront > Checkout**, ou digite **Checkout** na barra de busca no topo da página.
3. Na caixa de configuração "Default", clique no __botão azul de engrenagem__.
4. No topo da página, clique na __aba "Checkout"__.
5. Preencha o campo "Google Tag Manager" com o __ID recém-gerado__.
6. Clique no __botão azul "Salvar"__. 
