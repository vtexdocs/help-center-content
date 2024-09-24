---
title: 'Regras de preços (v2)'
id: tutorials_4446
status: ARCHIVED
createdAt: 2017-04-27T21:50:44.178Z
updatedAt: 2021-08-19T14:33:42.966Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:11:16.063Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slugEN: pricing-rules-v2
locale: pt
legacySlug: regras-de-precos-v2
subcategoryId: wUepkh8pzimEywO8oGUIc
---

**Soft launch**
As funcionalidades descritas neste artigo ainda não estão disponíveis para todos os clientes.

Uma regra de preço é um modificador do preço-base cadastrado na tela Lista de preços.

![new-dashboard-pricing-pt](//images.contentful.com/alneenqid6w5/1iEFJLw3xuKGiQS0W02cgm/5bcf2a65612a2fed4754352a7093dee8/new-dashboard-pricing-pt.gif)

## Como funciona

O cadastro do preço-base servirá como referência para todas as políticas comerciais. A partir dele, serão calculados os preços de venda na loja.

As regras de preços são utilizadas quando se deseja alterar um preço de uma determinada política comercial sem alterar o preço-base para as demais políticas comerciais. Elas também podem ser utilizadas para alterações de preço para todos os produtos de uma categoria ou marca e/ou em produtos com preço-base que esteja dentro de uma determinada faixa de markup.

Regras de modificação de preço são opcionais. O preço calculado de um SKU será o seu preço-base caso ele não se encaixe em nenhuma regra de modificação.

Além disso, é importante ressaltar que as regras de preço são aplicadas ao preço do SKU de forma sequencial, na ordem em que são cadastradas. A ordem pode ser alterada arrastando-se cada regra para cima ou para baixo. 

Será aplicada **apenas a primeira** regra de preço que seja válida para as condições do SKU (categoria; marca; e faixa de markup). Mesmo que existam outras regras de preço válidas, apenas a primeira na ordenação será utilizada para o cálculo de preço do SKU.

![new-dashboard-pricing-rule-reordering-pt](//images.contentful.com/alneenqid6w5/6DTrNN6UMgoWkCU68Q2CWC/7b6168a2cb9a5e93b9b5db8ba98eaa09/new-dashboard-pricing-rule-reordering-pt.gif)

_Recomendamos que a ordenação parta das regras mais específicas para as regras mais abrangentes._

## Como cadastrar

O passo-a-passo para cadastro é bem simples, e está ilustrado a seguir:

![new-dashboard-pricing-add-rule-pt](//images.contentful.com/alneenqid6w5/30MxuI9hD2qwc0AWm2MWmA/883e44a5845ba77d05e413aac3baf3f2/new-dashboard-pricing-add-rule-pt.gif)

1. Na tela de **Regras de preços** será exibida uma lista com todas as políticas comerciais. Dentro de cada uma dessa políticas, estarão as regras. Clique no botão **Nova regra**, acima da lista, para criar uma regra.
2. Escolha em qual política comercial essa regra será inserida.
3. Escolha em quais itens essa regra será aplicada. Você pode escolher duas opções: aplicar em toda a loja ou preencher os campos Categoria e/ou Marca com um ou mais valores.
4. Opcionalmente você pode aplicar a regra apenas para produtos com preço-base dentro de uma **Faixa de markup**. Caso deseje, ative o campo  **Utilizar faixa de markup** e então preencha os campos `de` e `até`.
5. Preencha o campo **Modificador** com o valor percentual que será acrescido ou decrescido do markup do preço-base.
6. Clique no botão **Salvar**.

Abaixo é possível visualizar exemplos dos fluxos de edição e exclusão de regras de preço. 

![new-dashboard-pricing-edit-rule-pt](//images.contentful.com/alneenqid6w5/6k5P1L2ypGWsGA2UAsMq6I/df54e4098d1e1534c5d9953a7a50dd67/new-dashboard-pricing-edit-rule-pt.gif)
*Fluxo de alteração de uma regra*

![new-dashboard-pricing-remove-rule-pt](//images.contentful.com/alneenqid6w5/64ESXpmeLmGokKA004aoqE/9d08afb457f280450eed449d9509ce3a/new-dashboard-pricing-remove-rule-pt.gif)
*Fluxo de exclusão de uma regra*
