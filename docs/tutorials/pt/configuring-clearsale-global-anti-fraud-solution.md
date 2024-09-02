---
title: 'Configurar o antifraude ClearSale Global'
id: 2vJNhRDEKf1w79m2MYfEWw
status: PUBLISHED
createdAt: 2021-07-06T18:05:33.325Z
updatedAt: 2021-10-04T11:49:49.414Z
publishedAt: 2021-10-04T11:49:49.414Z
firstPublishedAt: 2021-07-06T18:27:48.978Z
contentType: tutorial
productTeam: Financial
author: 13Ue4MX9WNiX9f3SVCUZZW
slug: configurar-o-antifraude-clearsale-global
locale: pt
legacySlug: configurar-o-antifraude-clearsale-global
subcategory: 
---

A ClearSale Global é uma solução antifraude, disponível __exclusivamente para o mercado internacional__. Através da análise comportamental dos clientes, a solução identifica vulnerabilidades e evita possíveis fraudes nas transações da sua loja.

>ℹ️ Caso você esteja no Brasil e queira utilizar a ClearSale, a VTEX oferece integração com a ClearSale V3, exclusiva para clientes brasileiros. Acesse o tutorial [Configurar antifraude ClearSale v3](https://help.vtex.com/pt/tutorial/configurar-antifraude-clearsale-v3--2pPORygesIqQOa6cIG6agg?&utm_source=autocomplete) para realizar a configuração.

Para configurar a __ClearSale Global__, será necessário:

1. [Configurar o antifraude ClearSale Global](#configurar-o-antifraude-clearsale-global)
2. [Configurar o Google Tag Manager](#configurar-o-google-tag-manager)
3. [Associar a ClearSale Global à uma condição de pagamento](#associar-a-clearsale-global-a-uma-condicao-de-pagamento)

## Configurar o antifraude ClearSale Global

1. Acesse o __Admin__ VTEX.
2. Clique em __Pagamentos > Configurações__.
3. Em __Afiliações de gateway__, clique no sinal verde “__+__”.
4. Na seção __Antifraudes__, selecione __ClearSaleGlobal__.
5. Preencha os seguintes campos com as informações enviadas via e-mail pela ClearSale.<br><br>
<ul>
  <li><b>Application key e Application token.</li></b>
  <li><b>Enable Risk Pre-Analysis.</b> (Atualmente disponível somente para o México).</li>
<li><b>API Key.</li></b>
<li><b>AnalysisLocation.</li></b>
 </ul>
  </li>
</ul>
6. Ao finalizar o preenchimento, clique em <b>Salvar.</b>

## Configurar o Google Tag Manager

1. [Clique aqui](http://tagmanager.google.com) e faça o login no Google Tag Manager.
2. No painel inicial, clique em __Tag__ e, em seguida, __Novo__.
3. Escolha o produto __Tag HTML Personalizada__.
4. No campo __HTML__, cole o código abaixo, substituindo `sua_identificacao_de_cliente` pelo seu identificador enviado pela ClearSale via email (entre aspas simples).  
```
<script>
    var deviceFingerprintIdCSV4 = 10000000 + Math.floor(Math.random() * 99999999);
    (function (a, b, c, d, e, f, g) {
    a['CsdpObject'] = e; a[e] = a[e] || function () {
    (a[e].q = a[e].q || []).push(arguments)
    }, a[e].l = 1 * new Date(); f = b.createElement(c),
    g = b.getElementsByTagName(c)[0]; f.async = 1; f.src = d; g.parentNode.insertBefore(f, g)
    })(window, document, 'script', '//device.clearsale.com.br/p/fp.js', 'csdp');
    csdp('app', 'sua_identificacao_de_cliente');
    csdp('sessionid', deviceFingerprintIdCSV4);
    window.vtex.deviceFingerprint = deviceFingerprintIdCSV4;
</script>
```
  <ui>5. Após inserir o código, marque a opção <b>Suporte para document.write"</b>.</ui>
<br>  
  <ui>6. Em <b>Dispara em</b>, selecione a opção <b>Mais</b> e clique em <b>Novo</b>.</ui>
<br>  
  <ui>7. Insira um nome para este acionador e escolha o evento tipo <b>Evento Personalizado</b>.</ui>
<br>  
  <ui>8. Em <b>Disparar Em</b>, defina o nome do evento como <b>payment</b>.</ui>
<br>  
  <ui>9. Salve o acionador.</ui>
<br>  
  <ui>10. Clique no botão <b>Criar Tag</b>, insira um nome para esta tag e salve.</ui>
<br>  
  <ui>11. No canto superior direito, clique em <b>Publicar</b>.</ui> 

![Fingerprint ClearSalve_Tela](https://images.contentful.com/alneenqid6w5/1cCBNxfRXCGQr4QxBsPgg6/314960d342aad03b56da4affe46439f8/Fingerprint_ClearSalve_Tela.png)

Para mais detalhes sobre o código inserido no Google Tag Manager, recomendamos a leitura [desta documentação](https://api.clearsale.com.br/docs/behavior-analytics), da ClearSale. 

## Associar a ClearSale Global à uma condição de pagamento

A ClearSale Global realizará a análise antifraude das transações se estiver associada às condições de pagamento em sua loja. Para isso, siga as instruções abaixo:

1. Acesse o __Admin__ VTEX.
2. Acesse o módulo __Pagamentos__.
3. Clique em __Configurações__.
4. Em __Condições de pagamento__, clique na condição desejada, ou siga o tutorial [Configurar uma condição de pagamento](https://help.vtex.com/pt/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/6bzGxlz4inf8sKmvZ1c7i3?&utm_source=autocomplete) para criar uma nova condição.
5. Certifique-se de que a condição de pagamento esteja __Ativada__.
6. Após selecionar ou criar uma nova condição, habilite a opção __Usar Antifraude__.
7. Selecione a opção __ClearSale Global__.
8. Clique em __Salvar__.

Com essas configurações realizadas, a ClearSale Global estará pronta para ser utilizada em sua loja.

