---
title: 'Enviar os meios de pagamento do Seller White Label para o Marketplace'
id: bfvtPzZyikacSqgkgeGW
status: PUBLISHED
createdAt: 2018-09-27T20:35:08.990Z
updatedAt: 2019-12-31T15:21:55.409Z
publishedAt: 2019-12-31T15:21:55.409Z
firstPublishedAt: 2018-09-27T20:42:48.820Z
contentType: tutorial
productTeam: Channels
author: authors_59
slug: enviar-os-meios-de-pagamento-do-seller-white-label-para-o-marketplace
legacySlug: enviar-os-meios-de-pagamento-do-seller-white-label-para-o-marketplace
subcategory: 3wullenAJiAcWY0a6K4UOE
---

O objetivo deste tutorial é ensinar como enviar os meios de pagamento de um Seller White Label para um Marketplace.

Esta feature permite que as compras realizadas num e-commerce sejam realizadas com os meios de pagamento de uma loja física. Isto diminui a complexidade da operação, separando centros de custo, pois a fatura e os pagamentos serão vinculados diretamente ao CNPJ da loja física, que atua como Seller White Label de um Marketplace.

<div class="alert alert-info">
Esta configuração substitui a utilização da antiga feature de<strong> Contas Alternativas</strong> para este cenário.
</div>

## Cadastrar meios de pagamento no Seller White Label

1. No menu do admin da Conta Franquia, que atua como Seller White Label, clique em __Pagamentos__
2. Clique em __Configurações__
3. [Cadastre a afiliação de gateway](/pt/tutorial/afiliacoes-de-gateway) que será utilizada pelo Seller White Label para processar os pagamentos
4. [Configure os meios de pagamento](/pt/tutorial/condicoes-de-pagamento) que serão enviados para o Marketplace

## Cadastrar afiliado para enviar os meios de pagamento

Para enviar os meios de pagamento para o Marketplace, é necessário que o Seller White Label cadastre um __afiliado__. Para cadastrar um afiliado, siga os passos abaixo:

1. No menu do admin da sua loja, clique em __Gerenciamento de Pedidos__
2. Clique em __Configurações__
3. Clique na aba __Afiliados__
4. Clique no botão verde __Novo Afiliado__
5. Preencha os campos, conforme listados abaixo, e clique em __Salvar__

### Campos de cadastro

- __Nome:__ Insira o nome do Marketplace para onde os meios de pagamento serão enviados
- __ID__: Insira uma sigla com três letras para identificar o Marketplace
- __Política Comercial__: Id da política comercial do Seller White Label que irá enviar as informações para o Marketplace
- __E-mail de FollowUp__: Preencha com um e-mail que irá receber notificações sobre a integração
- __Endpoint de Search__: Este campo não precisa ser preenchido
- __Versão do Endpoint de Search__: Selecione a opção __1.x.x__
- __Usar meu meio de pagamento__: Selecione este checkbox para enviar os seus meios de pagamento para o Marketplace. Ao selecionar esta opção, os meios de pagamento cadastrados no Seller White Label serão enviados para o checkout do Marketplace.
