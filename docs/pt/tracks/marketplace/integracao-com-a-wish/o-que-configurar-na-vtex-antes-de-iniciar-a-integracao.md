---
title: 'O que configurar na VTEX antes de iniciar a integração'
id: 3OHGQIQmt1dKw9RwKruE7H
status: PUBLISHED
createdAt: 2019-11-16T15:47:18.872Z
updatedAt: 2021-07-28T14:29:14.749Z
publishedAt: 2021-07-28T14:29:14.749Z
firstPublishedAt: 2019-11-19T17:27:48.328Z
contentType: trackArticle
productTeam: Channels
slugEN: what-to-configure-with-vtex-before-starting-the-integration
locale: pt
trackId: 50hbG4bzhSIhjz1lzqI1g4
trackSlugEN: integracao-com-a-wish
order: 2
---

Para garantir o correto funcionamento da integração, é necessário previamente fazer algumas configurações iniciais na plataforma da VTEX.

## Definindo política comercial

É necessário definir qual política comercial será usada para integrar seus produtos com a Wish. Esta definição implicará em quatro aspectos principais: sortimento de produtos, estoque, preço e moeda. Ou seja, a disponibilidade e os preços dos seus produtos em determinado canal de vendas estarão completamente baseados na política comercial que você escolher. [Clique aqui para entender com mais detalhes como funciona a política comercial](/pt/tutorial/configurando-a-politica-comercial-para-marketplace?locale=pt).

> ℹ️ OBS: a Wish exige que os preços do produto e de frete sejam enviados em dólar (USD). No entanto, ela cria os pedidos com o valor já convertido em reais (R$) para facilitar a emissão da nota fiscal. Isto significa que a integração deve enviar preços em dólar e aceitar pedidos em reais. Dessa maneira, a arquitetura usa apenas Real (R$) e faz a conversão na integração. Portanto, **a política comercial para Wish deve ser em reais (R$)** e todo fluxo de conversão será melhor detalhado no [passo 5](/pt/tracks/integracao-com-a-wish--50hbG4bzhSIhjz1lzqI1g4/6EYEy1jRiAj465WOnhiczD).

[Clique aqui](/pt/faq/por-que-nao-consigo-criar-uma-nova-politica-comercial?locale=pt) para saber como contratar uma nova política caso necessário.

## Definindo sortimento de produtos

Uma vez que a política comercial está criada, será necessário associar a nova política aos produtos de seu catálogo para definir quais serão enviados à Wish. Segue um passo-a-passo de como definir o sortimento **massivamente via planilha** ([veja outros métodos aqui](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/17PxekVPmVYI4c3OCQ0ddJ#Planilha)).

  1. Faça a exportação dos produtos do seu catálogo ([veja como na seção "Planilha" deste artigo](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/17PxekVPmVYI4c3OCQ0ddJ#object-object));
  2. Adicione ao campo **"CodigoLojas"** ([mais detalhes aqui](/pt/tutorial/preencher-campos-da-planilha-de-importacao--4nYhx63Q5yokQWaMguaIgI)) o **ID** da política comercial definida no passo anterior;
  3. Importe de volta a planilha no catálogo.

## Definindo logística

Para garantir que os pedidos integrem com sucesso, será necessário fazer toda a amarração logística entre estoque, docas e transportadoras na VTEX. Para entender um pouco mais do contexto geral de logística na VTEX, veja [este artigo](/pt/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx). Siga o passo-a-passo abaixo para realizar as configurações:

  1. Verifique se seus [estoques](/pt/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx/3mlfDHjikOgUna1SS2Nr1Y#campos-de-cadastro) estão vinculados às docas corretas;
  2. Verifique se as [docas](/pt/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx/5XvQ1yLpxLlIKWRw1pSiyA) escolhidas estão com a política comercial da Wish associada;
  3. Defina as [transportadoras](/pt/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx/3fLedVI57srjBDDxxGgOWe) que farão as entregas da Wish;
  4. Associe as transportadoras às docas.

> ℹ️ OBS: a Wish realiza o repasse da comissão através da confirmação de entrega dos pedidos e consulta diretamente suas transportadoras parceiras para obter esta informação. ***Portanto, para vender na Wish é obrigatório usar as transportadoras parceiras para realizar as entregas dos pedidos.*** [ Confira aqui a lista de transportadoras aceitas pela Wish.](https://merchant.wish.com/documentation/shippingproviders)

## Definindo preços

Para vender seus produtos na Wish, é importante definir uma estratégia de preços. Para entender um pouco mais do contexto geral de preços na VTEX, veja [este artigo](/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP). Siga o passo-a-passo abaixo para realizar as configurações:

  1. Crie uma [tabela de preços](/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/2WQ3pVYfQpXkJnHr7VTFBv) para a política comercial da Wish
  2. Defina [preços base](/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3XcXp0r5WrJvogB8KIX4Kx) a partir da nova tabela
