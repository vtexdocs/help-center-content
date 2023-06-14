---
title: 'Configurar boleto bancário'
id: tutorials_447
status: PUBLISHED
createdAt: 2017-04-27T22:04:55.249Z
updatedAt: 2023-03-21T20:14:57.262Z
publishedAt: 2023-03-21T20:14:57.262Z
firstPublishedAt: 2017-04-27T23:03:25.766Z
contentType: tutorial
productTeam: Financial
author: authors_84
slug: como-configurar-boleto-bancario
legacySlug: como-configurar-boleto-bancario
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

O boleto bancário é um forma de pagamento em que é necessário ter uma conta bancária e contratar uma carteira de cobrança junto ao banco. 

A partir daí, já é possível emitir boletos e receber diretamente em sua conta.

Existem duas maneiras de configurar o boleto:
- Diretamente na VTEX, sem um gateway de pagamento externo
- Através de um gateway de pagamento, como PagSeguro.

As duas formas de configuração estão descritas abaixo.

## Como configurar sem gateway de pagamento externo

1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Acesse a aba **Afiliações de Gateways**.
3. Clique em **+**.
4. Selecione uma das opções em **Boleto Bancário**.
5. Preencha os campos do formulário de acordo com os dados informados pelo seu banco - para cada banco são necessárias informações diferentes. Por isso, sempre confirme com o banco quais são as informações obrigatórias.
6. Clique em **Salvar**.

## Como configurar com gateway de pagamento externo

1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Acesse a aba **Afiliações de Gateways**.
3. Clique em **+**.
4. Selecione uma das opções em **Outros** (para a configuração por PagSeguro, selecione a opção PagSeguro sem redirect).
5. Preencha os campos do formulário de acordo com os dados informados pelo seu gateway de pagamento - para cada gateway são necessárias informações diferentes. Por isso, sempre confirme com o gateway de pagamento quais são as informações obrigatórias.
6. Clique em **Salvar**.

Após as configurações de Afiliação de Gateway, tanto para gateway externo quanto para a configuração direta do boleto bancário, é preciso configurar  a condição de pagamento.

## Como configurar a condição de pagamento

1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Acesse a aba **Condições de Pagamento**.
3. Clique no símbolo **+**.
4. Em **Boleto**, selecione a opção **Boleto Bancário**.
5. Preencha o nome, selecione a afiliação de gateway configurada acima e verifique se gostaria de usar a configuração por [condição especial](/pt/tutorial/condicoes-especiais/).
6. Clique no botão **Salvar**.

Após essa última configuração, a forma de pagamento já estará disponível no checkout da loja.
