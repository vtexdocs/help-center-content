---
title: 'Google Pay (Beta)'
id: 653pNFOw6L5CvGupLosJSq
status: DRAFT
createdAt: 2023-04-26T15:34:40.825Z
updatedAt: 2023-06-27T21:56:34.229Z
publishedAt: 
firstPublishedAt: 2023-04-26T20:03:44.992Z
contentType: tutorial
productTeam: Shopping
author: 2o8pvz6z9hvxvhSoKAiZzg
slug: google-pay-beta
locale: pt
legacySlug: google-pay-beta
subcategoryId: 3lZEaiSilZPwa3eCUUzwyr
---

>ℹ️ Este módulo está em fase Beta, o que significa que estamos trabalhando para aprimorá-lo. Em caso de dúvidas, entre em contato com [nosso Suporte](https://support.vtex.com/hc/pt-br/requests).

O Google Pay™ é um serviço de pagamentos digitais que possibilita ao usuário não compartilhar os dados reais do seu cartão com a loja, trazendo mais segurança e acelerando a etapa de checkout. Com Google Pay o usuário pode realizar pagamentos por meio de cartões de crédito ou de débito, sem a necessidade de preencher qualquer dado manualmente, e o Google Pay também está disponível em diversos apps, sites e na Carteira do Google

Os termos de serviço da API do Google Pay se aplicam sempre que o serviço Google Pay for oferecido por um lojista. Para ler os termos, acesse [Google Pay API Terms of Service](https://payments.developers.google.com/terms/sellertos).

>⚠️ O Google Pay não está disponível para Checkout V5 ou versões anteriores do Checkout.

## Ativar Google Pay

Para ativar o Google Pay, siga o passo a passo abaixo. 

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Carteiras** ou digite **Carteiras **na barra de busca no topo da página.
2. Selecione a opção **Ativar** para modificar o checkout para incluir a extensão do Google Pay.

>ℹ️ As bandeiras suportadas no Google Pay são as mesmas bandeiras configuradas nas condições de pagamento.

Feito isso, o Google Pay estará disponível no checkout da sua loja VTEX como nova forma de pagamento. É possível que demore em torno de 10 minutos para que a configuração apareça no Checkout.

![google pay - PT](https://images.ctfassets.net/alneenqid6w5/IhdcOpZC0MPaZLYbPUYw1/a8bca906bd64bf229ac9521848a7c029/image.png)

>⚠️ Google Pay, neste momento, não vai suportar assinatura.

É necessário ter os seguintes requisitos para utilizar o Google Pay:

* Ter pelo menos uma [condição de pagamento](https://help.vtex.com/pt/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/6bzGxlz4inf8sKmvZ1c7i3) ativa configurada para cartões de crédito ou débito com um [adquirente](https://help.vtex.com/pt/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/kdPbEIWf8Xq8tESQvViMB#adquirente), definindo qual adquirente irá processar o pagamento da carteira.
* Utilizar o [Checkout VTEX](https://help.vtex.com/pt/tutorial/checkout-vtex-visao-geral--7wcprkM7yZUflOqbzAN5SI) na sua loja.

>⚠️ Nas lojas que têm o fluxo de autenticação [3DS](https://help.vtex.com/pt/tutorial/o-que-e-3d-secure--1eWPdop8mECuaEomQgkAIa) configurado e suportado pelo adquirente, o pagamento com o Google Pay seguirá o fluxo nativo de cartão, sendo submetido também ao 3DS. Para mais informações sobre como configurar o fluxo de autenticação, consulte [Configurar fluxo de autenticação 3DS 2](https://help.vtex.com/pt/tutorial/configurar-fluxo-de-autenticacao-3ds-2--58XMn5LOA6fwrSkoDoAsg2).

## Consultar transações finalizadas com o Google Pay

Para consultar e verificar transações que foram finalizadas com o Google Pay no pagamento, siga os passos descritos no artigo [Ver detalhes da transação](https://help.vtex.com/pt/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/3Nt40DMEWkvhlpaL5PlBy). No caso de uma transação feita com o Google Pay, é necessário clicar em `+ Informações` e consultar o campo `paymentOrigin` ou pesquisar por "Google Pay" na barra de busca da página de listagem de transações.

## Adicionar informação do Google Pay no template de compra

Para adicionar a informação que o pedido foi realizado com um cartão advindo do Google Pay no template de email para o comprador, siga as etapas a seguir:

1. No Admin VTEX, acesse **Configurações da loja > Templates de email > Templates** ou digite **Templates **na barra de busca no topo da página.
2. Acesse os templates de fechamento de compra e aprovação de pagamento.
3. Após** **todas as menções** **a** `**{{#if lastDigits}} last digits {{lastDigits}}**`**, adicionar a seguinte linha:

`{{/if}} {{#if paymentOrigin}} ({{paymentOrigin}}` 

Com isso, após qualquer menção aos últimos quatro dígitos do cartão desses templates de email, será adicionada a informação "(Google Pay)" caso o pagamento tenha sido feito com a carteira.

>ℹ️ Para lojas provisionadas a partir de Março de 2023, os templates já estarão atualizados com a informação do pagamento do pedido feito com o Google Pay.

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
