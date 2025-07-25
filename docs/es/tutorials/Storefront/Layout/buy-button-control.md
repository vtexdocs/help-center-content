---
title: 'Buy button control (BuyButton)'
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
locale: en
legacySlug: buy-button-control
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

<div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
Tutorial valid only for Legacy CMS Stores.
</div>

The control `<vtex.cmc:BuyButton/>` is responsible for rendering the buy button.

It can be used on product pages, on shelves, and in QuickView.

By default, this is the code rendered by the BuyButton control:

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
<p class="unavailable-button" style="display:none">Produto Esgotado</p>
<input type="hidden" class="buy-button-amount" value="1">
<div class="portal-notify-me-ref">
    <div class="notifyme sku-notifyme" style="display: none;">
        <div class="notifyme-title-div" style="display: none;">
            <h3 class="notifymetitle notifyme-title">Avise-Me</h3>
        </div>
        <form action="/no-cache/AviseMe.aspx" style="display: none;">
            <fieldset class="sku-notifyme-form notifyme-form">
                <p>Para ser avisado da disponibilidade deste Produto, basta preencher os campos abaixo.</p>
                <input class="sku-notifyme-client-name notifyme-client-name" placeholder="Digite seu nome..." size="20" type="text" name="notifymeClientName" id="notifymeClientName" style="display: none;">
                <input class="sku-notifyme-client-email notifyme-client-email" placeholder="Digite seu e-mail..." size="20" type="text" name="notifymeClientEmail" id="notifymeClientEmail" style="display: none;">
                <input class="btn-ok sku-notifyme-button-ok notifyme-button-ok" value="ok" type="button" name="notifymeButtonOK" id="notifymeButtonOK" style="display: none;">
                <input type="hidden" class="sku-notifyme-skuid notifyme-skuid" name="notifymeIdSku" value="" style="display: none;">
            </fieldset>
        </form>
        <p class="notifyme-loading-message" style="display: none">
            <span class="sku-notifyme-loading notifyme-loading">Carregando...</span>
        </p>
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

When the buy button rendered by this control is triggered, the control performs two main actions:

1. It inserts the SKU in the __cart__.
2. It requests the Logistics module to check if the SKU in question exists in stock. If not, the control shows the availability notification feature (__Let me know__).
