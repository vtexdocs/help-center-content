---
title: 'Configurar o adquirente Rede'
id: 4FEVcvYWC4uS4yoYS2WAIw
status: DRAFT
createdAt: 2018-02-22T20:21:54.730Z
updatedAt: 2022-12-23T20:20:11.414Z
publishedAt: 
firstPublishedAt: 2018-02-22T23:18:26.819Z
contentType: tutorial
productTeam: Financial
author: authors_59
slug: configurar-o-adquirente-rede
locale: pt
legacySlug: configurar-o-adquirente-rede
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o adquirente Rede. Configurando o conector __ERedev2__, sua loja poderá aceitar pagamentos de cartões com as principais bandeiras.

<div class="alert alert-info">
<strong>Atenção</strong>: atualmente, a Rede conta com uma versão mais atualizada do conector. Para saber mais detalhes de como configurar esse adquirente, consulte o artigo sobre o [ERedeREST](https://help.vtex.com/pt/tutorial/configurar-adquirente-rede-con-erederest?locale=pt "ERedeREST"). 
</div>

Para configurar a Rede, siga os passos abaixo:

## Configurar afiliação de gateway ERedeV2

1. Acesse o módulo de __Pagamentos__.
2. Clique em __Configurações__.
2. Na aba __Afiliações de Gateways__, clique no botão __+__.
3. Clique no conector __ERedeV2__.
4. Preencha os campos de cadastro com os dados fornecidos pela Rede (Campos *Código de afiliação, Senha*).
5. No campo __Soft Descriptor__, você pode inserir uma string personalizada que será impressa na fatura do cliente.
6. Em __Captura de segurança antecipada__, você deve escolher em quanto tempo a captura deve ocorrer após a aprovação do pagamento.
7. Clique em __Salvar__.

## Configurar condição de pagamento

Na VTEX, o conector da ERedeV2 processa principalmente __cartões de crédito__. Para configurar os meios de pagamento a serem processados pela Rede, [acesse nosso tutorial](/pt/tutorial/condicoes-de-pagamento).
