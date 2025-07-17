---
title: 'Google Pay'
id: 61JMBvM5Vanqj6RaJsP8CT
status: PUBLISHED
createdAt: 2023-06-27T21:28:37.755Z
updatedAt: 2024-08-02T13:49:01.227Z
publishedAt: 2024-08-02T13:49:01.227Z
firstPublishedAt: 2023-06-27T21:46:39.537Z
contentType: trackArticle
productTeam: Shopping
slugEN: google-pay
locale: pt
trackId: 6X8YyZBoVJpz5R8oXciTyu
trackSlugPT: carteira-digital-e-wallet
---

O Google Pay™ é um serviço de pagamentos digitais que possibilita ao usuário não compartilhar os dados reais do seu cartão com a loja, trazendo mais segurança e acelerando a etapa de checkout. Com Google Pay o usuário pode realizar pagamentos por meio de cartões de crédito ou de débito, sem a necessidade de preencher qualquer dado manualmente, e o Google Pay também está disponível em diversos apps, sites e na Carteira do Google.

Os termos de serviço da API do Google Pay se aplicam sempre que o serviço Google Pay for oferecido por um lojista. Para ler os termos, acesse [Google Pay API Terms of Service](https://payments.developers.google.com/terms/sellertos).

<div class="alert alert-warning">
<p>O Google Pay não está disponível para Checkout V5 ou versões anteriores do Checkout.</p>
</div>

## Ativar Google Pay

Para ativar o Google Pay, siga o passo a passo abaixo. 

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Carteiras** ou digite **Carteiras **na barra de busca no topo da página.
2. Selecione a opção **Ativar** para modificar o checkout para incluir a extensão do Google Pay.

<div class="alert alert-info">
<p>As bandeiras suportadas no Google Pay são as mesmas bandeiras configuradas nas condições de pagamento.</p>
</div>

Feito isso, o Google Pay estará disponível no checkout da sua loja VTEX como nova forma de pagamento. É possível que demore em torno de 10 minutos para que a configuração apareça no Checkout.

![google-pay-checkout-pt](https://images.ctfassets.net/alneenqid6w5/5EjOagjPXAeIAAN0Fpzkdq/6ba2af94c811c8cb76d553f68c5578d6/Screenshot_2024-08-01_at_14.21.25.png)

<div class="alert alert-warning">
<p>Google Pay, neste momento, não vai suportar assinatura.</p>
</div>

É necessário ter os seguintes requisitos para utilizar o Google Pay:

* Ter pelo menos uma [condição de pagamento](/pt/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/6bzGxlz4inf8sKmvZ1c7i3) ativa configurada para cartões de crédito ou débito com um [adquirente](/pt/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/kdPbEIWf8Xq8tESQvViMB#adquirente), definindo qual adquirente irá processar o pagamento da carteira.
* Utilizar o [Checkout VTEX](/pt/tutorial/checkout-vtex-visao-geral--7wcprkM7yZUflOqbzAN5SI) na sua loja.

<div class="alert alert-warning">
  <p>Nas lojas que têm o fluxo de autenticação <a href="https://help.vtex.com/pt/tutorial/o-que-e-3d-secure--1eWPdop8mECuaEomQgkAIa">3DS</a> configurado e suportado pelo adquirente, o pagamento com o Google Pay seguirá o fluxo nativo de cartão, sendo submetido também ao 3DS. Para mais informações sobre como configurar o fluxo de autenticação, consulte <a href="https://help.vtex.com/pt/tutorial/configurar-fluxo-de-autenticacao-3ds-2--58XMn5LOA6fwrSkoDoAsg2">Configurar fluxo de autenticação 3DS 2</a>.</p>
</div>

<div class="alert alert-info">
<p>Você também pode configurar o Google Pay para ser processado com a Adyen ou Stripe. Para isso, acesse a tela <b>Condições de Pagamento</b> no Admin, clique em <b>Google Pay</b> e selecione a opção desejada.</p>
</div>

## Consultar transações finalizadas com o Google Pay

Para consultar e verificar transações que foram finalizadas com o Google Pay no pagamento, siga os passos descritos no artigo [Ver detalhes da transação](/pt/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/3Nt40DMEWkvhlpaL5PlBy). Na barra de busca da página de transações, digite **Google Pay** para filtrar as transações realizadas com este tipo de pagamento.

![Google Pay Transaction_1](https://images.ctfassets.net/alneenqid6w5/3N6LkrdAmAEfmDDsuLaWz5/7529f5dce8a104bc97e546cb31a47843/Google_Pay_Transaction1_PT.png)

Após acessar a transação desejada, clique em `+ Informações` para verificar a informação **Google Pay** descrita no campo `paymentOrigin`.

![Google Pay Transaction_2](https://images.ctfassets.net/alneenqid6w5/6nLdqOG38LEUbmSKth5FRP/904607c6df63c9168c35435b9bb5068e/Google_Pay_Transaction2_PT.png)

<div class="alert alert-warning">
  <p>Também é possível identificar transações realizadas com o Google Pay por meio da página <b>Todos os pedidos</b> no Admin. Você precisa somente selecionar o período desejado de busca, <a href="https://help.vtex.com/pt/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/6rVCf9KLn1jgTaxS0xuByu">exportar os pedidos</a> em um relatório no formato .csv e localizar a informação Google Pay no campo "payment origin".</p>
</div>

## Adicionar informação do Google Pay no template de compra

Para adicionar a informação que o pedido foi realizado com um cartão advindo do Google Pay no template de email para o comprador, siga as etapas a seguir:

1. No Admin VTEX, acesse **Configurações da loja > Templates de email > Templates** ou digite **Templates **na barra de busca no topo da página.
2. Acesse os templates de fechamento de compra e aprovação de pagamento.
3. Após** **todas as menções** **a** `**{{#if lastDigits}} last digits {{lastDigits}}**`**, adicionar a seguinte linha:

`{{/if}} {{#if paymentOrigin}} ({{paymentOrigin}}` 

Com isso, após qualquer menção aos últimos quatro dígitos do cartão desses templates de email, será adicionada a informação "(Google Pay)" caso o pagamento tenha sido feito com a carteira.

<div class="alert alert-info">
<p>Para lojas provisionadas a partir de Março de 2023, os templates já estarão atualizados com a informação do pagamento do pedido feito com o Google Pay.</p>
</div>

## FAQ

### Problemas de ativação

* Não é possível ligar a carteira, pois o toggle está desabilitado

Ao se deparar com a mensagem "Você ainda não tem bandeiras habilitadas para Google Pay na sua loja.",** **é preciso acessar as condições de pagamento e garantir que há regras associadas para transacionar cartão com adquirentes.

* O toggle está habilitado, mas não é possível finalizar o processo**

Caso não se depare com a mensagem de sucesso "Google Pay ativado com sucesso." ao ligar o toggle, significa que pode ter havido instabilidade no sistema. Se o problema persistir, o usuário receberá um aviso para contatar o [suporte da VTEX](https://support.vtex.com/hc/pt-br/requests).

### Problemas que podem acontecer na compra

* Aparelho utilizado para finalizar a compra não suporta Google Pay

Ao se deparar com a mensagem "Forma de pagamento indisponível no seu navegador", o usuário deverá tentar fechar a compra em outro navegador ou aparelho.

* Não há regras configuradas para cartão na loja

Caso o lojista não tenha configurado regras de pagamento para cartão, o usuário verá um erro ao selecionar o meio Google Pay de que este método não está disponível.

### Saiba mais

* [DPAN e FPAN: entendendo a segurança no fluxo de pagamentos tokenizados online](/pt/tutorial/dpan-e-fpan-entendendo-a-seguranca-no-fluxo-de-pagamentos-tokenizados-online--3RM7RvhKZ057wja5xVEOqb)
