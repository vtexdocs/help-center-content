---
title: 'Características gerais do SmartCheckout™ V5'
id: tutorials_3811
status: PUBLISHED
createdAt: 2017-04-27T21:51:49.943Z
updatedAt: 2023-03-23T18:04:13.425Z
publishedAt: 2023-03-23T18:04:13.425Z
firstPublishedAt: 2017-04-27T23:11:15.321Z
contentType: tutorial
productTeam: Shopping
author: authors_65
slug: mudando-para-nova-versao-do-smart-checkout
locale: pt
legacySlug: mudando-para-nova-versao-do-smart-checkout
subcategory: 8AGXmtpbTqUE2KQu0Swwk
---

O SmartCheckout™ V5 permite a compra sem login e senha da VTEX (one-click-buy checkout). Listamos aqui suas principais características e vantagens.

### Iframe nas formas de pagamento com cartão

As formas de pagamento por cartão de crédito, débito e private label (cartão emitido pelo varejista e aceito apenas dentro da sua rede de estabelecimentos) ficam isoladas em um iframe. Isso impede a customização de JavaScript, o que aumenta a segurança da sua loja. Para saber mais sobre proteção de dados, acesse [Segurança do SmartCheckout](https://help.vtex.com/pt/tutorial/seguranca-do-smartcheckout--3SrJuuhrqwePUg1rp1exfB#).

Note que, apesar de estar em um iframe, ainda é possível aplicar CSS normalmente no campo. Mas é importante prestar atenção no seletor CSS utilizado porque, por ser um iframe, ele deve começar com elementos que estejam dentro de `#app-container .App` sem, por exemplo, `#payment-data` ou `.payment-group` (que estão fora do iframe).

Em exemplo prático, para ocultar a opção "Pagar usando dois cartões", deve ser usado apenas `.ChangeNumberOfPayments {display: none}`.

![2017-06-22 162341](https://images.contentful.com/alneenqid6w5/5Un86ot46Qg0kwKoUkSioG/fb3cc25e273d68ab27a3ccd2b254eea6/2017-06-22_162341.jpg)

### Nova opção de cálculo de frete por geocoordenada

Por meio dessa funcionalidade, é possível definir regiões de entrega usando como base um ponto geográfico (latitude e longitude) em vez de um código postal.

Para saber como usar esse recurso, leia o artigo [Geolocalização no Checkout](/pt/tutorial/geolocalizacao-no-checkout/).

__Atenção:__ uma vez que a API Key seja informada nas configurações do Checkout, a geolocalização já estará visível no checkout da sua loja, independente da ativação da nova versão do SmartCheckout.

### Título da página

O título da página do SmartCheckout™, que aparece na barra ou na aba do navegador, pode ser customizado. Para saber como fazer isso, é só seguir os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Storefront > Checkout__, ou digite __Checkout__ na barra de busca no topo da página.
2. Clique no ícone <i class="fas fa-cog" alt="engrenagem azul"></i> do site desejado.
3. No menu de opções azul localizado na parte superior da página, clique em __Checkout__. 
4. No campo __Título da Página__, escreva o título desejado e verifique o resultado na caixa PRÉ-VISUALIZAÇÃO.
5. Clique em `Salvar`.

### JavaScript customizado

Você pode usar os arquivos `checkout5-custom.js` e `orderplaced2-custom.js` para inserir suas customizações de JavaScript no Checkout e na tela de pedido finalizado, respectivamente. Para acessá-los, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Storefront > Checkout__, ou digite __Checkout__ na barra de busca no topo da página.
2. Clique no ícone <i class="fas fa-cog" alt="engrenagem azul"></i> do site desejado.
3. No menu de opções azul localizado na parte superior da página, clique em __Código__. 
4. No menu __Arquivos__, localizado no lado direito da página, clique naqueles em que desejar realizar ajustes no código.
5. Clique no botão `Salvar`.

<div class="alert alert-warning">
  Customizar arquivos de Javascript pode danificar seu Checkout. A VTEX <b>não recomenda</b> customizações e não se responsabiliza por qualquer dano causado por esse código.
</div>

__IMPORTANTE:__ não use esses arquivos para inserir tags de marketing e integrações. Se precisar delas, faça isso pelo Google Tag Manager.

### PayPal Plus

O SmartCheckout™ V5 dá suporte ao método de pagamento PayPal Plus, que permite que o pagamento seja feito diretamente em seu site, sem redirecionar seus clientes (checkout transparente).

### Google Enhanced Ecommerce

O SmartCheckout™ V5 adiciona ao data layer informações para serem usadas com o Google Enhanced Ecommerce. Para saber como criar essas tags, verifique a documentação do Google: https://developers.google.com/tag-manager/enhanced-ecommerce.
