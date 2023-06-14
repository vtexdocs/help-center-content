---
title: Integrar com Facebook
id: 2CSxoNsJqM2KGsqi66WAaY
status: DRAFT
createdAt: 2017-07-31T20:58:45.449Z
updatedAt: 2021-03-25T22:44:08.652Z
publishedAt: 
firstPublishedAt: 2017-07-31T21:14:22.770Z
contentType: tutorial
productTeam: Channels
author: authors_84
slug: integrando-com-facebook
legacySlug: integrando-com-facebook
subcategory: 4uqMnZjwBO04uWgCom8QiA
---

A integração com o Facebook tem como objetivo o envio do catálogo para o __Business Manager__ do Facebook, permitindo campanhas de marketing. 

O catálogo da loja é enviado mediante indexação dos itens na VTEX.

## Configuração da integração

1. No menu do Admin, clique em __Integrações__.
2. Clique em __Configurações__.
3. No box do Facebook, clique em __Integrar__.
4. Preencha os __campos__ exibidos na tela. Abaixo, vamos detalhar como preencher cada campo.
5. Clique no botão __Salvar Configuração__.

## Detalhamento dos campos

__Id do afiliado__: Esse campo deve ser preenchido com um ID de [afiliado](/pt/faq/o-que-e-afiliado) que não exista no cadastro de afiliados do OMS. O ID aceita apenas três dígitos e consoantes. Sugestão: __FCB__.

__E-mail do afiliado__: Preencha com o e-mail que receberá notificações relacionadas à integração.

__Política Comercial__: Política comercial que você deseja utilizar na integração. A política comercial definirá o sortimento de catálogo e os valores dos itens.

__Nome do Produto__: Você pode escolher uma entre duas opções:
  - __Nome do produto – nome do SKU__: Envia os produtos com o nome do produto e do SKU juntos.
  - __Nome do produto__: Envia somente o nome do produto.

__Id do business manager__: ID da conta do __Business Manager__ do Facebook, que pode ser obtido nas configurações do Facebook.

__URL do site da loja__: Preencha com o endereço da sua loja. Exemplo: `https://www.sualoja.com.br`. Este campo é usado para formar a URL completa do produto que é enviado.

<div class = "alert alert-info">Todos os campos são obrigatórios para o pleno funcionamento da integração.</div>

## Autorização

Após realizada a configuração, é necessário autorizar a VTEX a fazer alterações na conta do Facebook do lojista. Para isso, é necessário clicar no botão __Autorizar__, no card do Facebook, na seção de __Integrações__. Com isso, as autorizações necessárias serão solicitadas.

<div class="alert alert-info">
  Para fazer a autorização, deve ser usada a conta do Facebook que tem privilégios administrativos no Business Manager do Facebook. Caso ela não possua privilégios, a autorização não será concedida e o processo ficará em loop.
</div>

Após esse passo, a integração criará um catálogo com o nome `VtexIntegration – {NOME DA LOJA}` no Facebook.

É neste catálogo, dentro do Facebook, que os itens serão criados e ficarão disponíveis para serem usados.

<div class="alert alert-info">
  Para fazer a autorização, deve ser usada a conta do Facebook que tem privilégios administrativos no Business Manager do Facebook. Caso ela não possua privilégios, a autorização não será concedida e o processo ficará em loop.
</div>

<div class="alert alert-info">
É possível usar o *pixel app* do Facebook para acompanhar e otimizar os resultados das suas campanhas de marketing através do Google Tag Manager da sua loja. Aprenda o passo a passo <a href="https://www.facebook.com/business/help/1021909254506499">aqui</a>.
</div>
