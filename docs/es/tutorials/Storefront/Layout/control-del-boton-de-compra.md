---
title: 'Control del botón de compra (BuyButton)'
id: 2rIQKH1Vny0kuCasQGSYGu
status: PUBLISHED
createdAt: 2018-02-09T18:10:33.586Z
updatedAt: 2023-03-29T15:01:06.207Z
publishedAt: 2023-03-29T15:01:06.207Z
firstPublishedAt: 2018-02-09T18:20:00.228Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slugEN: buy-button-control
legacySlug: control-del-boton-de-compra
locale: es
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

<div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
Tutorial válido solo para tiendas CMS Portal Legado.
</div>

El control `<vtex.cmc:BuyButton/>` es responsable de renderizar el botón de compra.

Se puede utilizar en las páginas de producto, en los estantes y en el QuickView.

De forma predeterminada, este es el código que el control BuyButton renderiza:

```
<div class="pull-left box-qtd">    
<input type="text" class="qtd pull-left" value="1">    
    <div class="bts pull-left">        
        <button class="btn btn-mais">+</button>        
        <button class="btn btn-menos">-</button>     
    </div>
</div>
<a target="_top" class="buy-button buy-button-ref" href="javascript:alert('Por favor, selecione o modelo desejado.');" style="display:block">Comprar <i class="fa fa-lock"></i></a>
<script>$('.buy-button-ref').buyButton(17, {salesChannel: 1}, {})</script>
<p class="unavailable-button" style="display:none">Produto Esgotado
<input type="hidden" class="buy-button-amount" value="1">
<div class="portal-notify-me-ref">
    <div class="notifyme sku-notifyme" style="display: none;">
        <div class="notifyme-title-div" style="display: none;">
            <h3 class="notifymetitle notifyme-title">Avise-Me</h3>
        </div>
        <form action="/no-cache/AviseMe.aspx" style="display: none;">
            <fieldset class="sku-notifyme-form notifyme-form">
                Para ser avisado da disponibilidade deste Produto, basta preencher os campos abaixo.
                <input class="sku-notifyme-client-name notifyme-client-name" placeholder="Digite seu nome..." size="20" type="text" name="notifymeClientName" id="notifymeClientName" style="display: none;">
                <input class="sku-notifyme-client-email notifyme-client-email" placeholder="Digite seu e-mail..." size="20" type="text" name="notifymeClientEmail" id="notifymeClientEmail" style="display: none;">
                <input class="btn-ok sku-notifyme-button-ok notifyme-button-ok" value="ok" type="button" name="notifymeButtonOK" id="notifymeButtonOK" style="display: none;">
                <input type="hidden" class="sku-notifyme-skuid notifyme-skuid" name="notifymeIdSku" value="" style="display: none;">
            </fieldset>
        </form>
        <p class="notifyme-loading-message" style="display: none">
            <span class="sku-notifyme-loading notifyme-loading">Carregando...</span>
        
        <fieldset class="success" style="display:none;">
            <label>
                <em>
                    <span class="sku-notifyme-success notifyme-success">Cadastrado com sucesso, assim que o produto for disponibilizado você receberá um email avisando.</span>
                </em>
            </label>
        </fieldset>
        <fieldset class="error" style="display: none">
            <label>
                <span class="sku-notifyme-error notifyme-error"></span>
            </label>
        </fieldset>
    </div>
</div>
<script>var notifyMeOptions = {'strings': {"title":"Avise-Me","explanation":"\r\n    Para ser avisado da disponibilidade deste Produto, basta preencher os campos abaixo.\r\n  ","loading":"Carregando...","success":"Cadastrado com sucesso, assim que o produto for disponibilizado você receberá um email avisando.","error":"Não foi possível cadastrar. Tente mais tarde.","emailErrorMessage":"O endereço de e-mail informado é inválido."}};
$('.portal-notify-me-ref').notifyMe(17, notifyMeOptions);
</script>
```

Cuando se hace clic en el botón de compra renderizado por este control, se realiza dos acciones principales:
1. Se inserta el SKU en el __carrito__.
2. Se hace una solicitud al módulo Logistics para saber si el SKU en cuestión consta en stock. Si no, el control muestra la notificación de disponibilidad __Avise-me__.
