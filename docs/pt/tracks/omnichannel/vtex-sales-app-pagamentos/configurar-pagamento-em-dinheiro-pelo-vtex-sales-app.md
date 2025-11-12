---
title: 'Configurar pagamento em dinheiro pelo VTEX Sales App'
id: 4ye3bIWldaHJxGTgAziBZo
status: PUBLISHED
createdAt: 2020-06-28T16:04:36.122Z
updatedAt: 2025-11-12T15:48:30.288Z
publishedAt: 2023-05-31T15:48:30.288Z
firstPublishedAt: 2020-06-28T16:19:11.591Z
contentType: trackArticle
productTeam: Shopping
slugEN: configuring-cash-payments-through-vtex-sales-app
locale: pt
trackId: 43B4Nr7uZva5UdwWEt3PEy
trackSlugEN: vtex-sales-app-payments
order: 4
---

Este artigo explica como configurar o VTEX Sales App para aceitar pagamentos em dinheiro. Antes de configurar a exibição do pagamento por dinheiro no VTEX Sales App, é preciso [criar um pagamento customizado](#criar-um-pagamento-customizado) e depois uma [condição de pagamento](#criar-uma-condicao-de-pagamento) para ele. Ambas as ações são realizadas no painel administrativo da VTEX.

## Criar um pagamento customizado

1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Clique na aba **Pagamentos customizados**.
3. Na seção **Promissórias**, clique em alguma das caixas que contenham <i class="fas fa-cog"></i> `Configurar`.
4. No campo **Nome**, digite o nome que deseja dar a esse pagamento customizado. Por exemplo: “Dinheiro”.
5. Altere o valor do campo **Autorizar automaticamente** para **Yes**. Os demais campos não precisam ser preenchidos ou alterados.
6. Clique em `Salvar`.

## Criar uma condição de pagamento

Agora vamos criar a condição de pagamento.

1. Ainda na página **Configurações**, clique na aba **Condições de pagamento**.
2. Clique no botão verde com o ícone de `+` para adicionar uma nova condição, conforme destacado abaixo.

![pt-add-payment-condition](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/omnichannel/instore-pagamentos/configurar-pagamento-em-dinheiro-pelo-instore_1.png)

3. Na seção **Pagamento Customizado**, clique na opção **Dinheiro** que você criou anteriormente.
4. Dê um nome para essa condição de pagamento, mude o status para **Ativa** e, no seletor **Processar com a afiliação**, escolha o pagamento customizado que você criou no passo anterior.
5. Clique em `Salvar`.

> ℹ️ Além das configurações acima, é necessário seguir o guia **[Definir meios de pagamento exibidos no VTEX Sales App](/pt/tracks/instore-pagamentos--43B4Nr7uZva5UdwWEt3PEy/jHQQcyX3WKeUFidwSjmY1)** para que as opções de pagamento sejam exibidas corretamente no aplicativo.
