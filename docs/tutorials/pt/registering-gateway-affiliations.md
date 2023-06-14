---
title: 'Cadastrar afiliações de gateway'
id: tutorials_444
status: PUBLISHED
createdAt: 2017-04-27T22:05:18.209Z
updatedAt: 2023-03-21T20:55:24.198Z
publishedAt: 2023-03-21T20:55:24.198Z
firstPublishedAt: 2017-04-27T23:03:24.823Z
contentType: tutorial
productTeam: Financial
author: authors_84
slug: afiliacoes-de-gateway
legacySlug: afiliacoes-de-gateway
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Afiliação de gateway é um conjunto de configurações que representa o seu contrato com um provedor de pagamento (gateway, adquirente ou subadquirente). 

Na VTEX, você pode realizar a configuração de diversos provedores de pagamentos e oferecer diferentes métodos e condições de pagamentos aos seus clientes.

Para configurar uma afiliação de gateway, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba __Afiliações de Gateways__, clique no botão __+__.
3. Clique no provedor de pagamento de sua preferência.
4. Preencha os campos __Application Key__ e __Application Token__ com as informações fornecidas pelo provedor de pagamento.
5. Caso seja exibida uma mensagem de alerta indicando a necessidade de instalação do app, clique no botão __Instalar app__ e siga as instruções de instalação. Esta mensagem é exibida somente para alguns tipos de afiliações de gateway.
6. Clique em __Salvar__.

<div class = "alert alert-info">
  <p>Caso haja outros campos a serem preenchidos além do <b>Application Key</b> e <b>Application Token</b> (Passo 6), a afiliação de gateway deve ser configurada conforme tutorial específico. Para maiores informações, verifique a subseção <a href="https://help.vtex.com/pt/subcategory/configuracoes-de-pagamentos--3tDGibM2tqMyqIyukqmmMw">Configurações de Pagamento</a>.</p>
</div>

<div class = "alert alert-danger">
  As credenciais utilizadas para preencher os campos <strong>Application Key</strong> e <strong>Application Token</strong> devem ser fornecidas pelo provedor de pagamentos para identificar a loja. Não devem ser utilizadas <a href="https://help.vtex.com/pt/tutorial/chaves-de-aplicacao--2iffYzlvvz4BDMr6WGUtet#gerar-chaves-de-aplicacao-na-sua-conta">credenciais geradas no Admin</a>, que se iniciam com <code>vtexappkey-</code>.
</div>

Para configurar os métodos de pagamento a serem processados pelo provedor de pagamento escolhido, acesse [Condições de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento). 

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](https://help.vtex.com/pt/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete).
