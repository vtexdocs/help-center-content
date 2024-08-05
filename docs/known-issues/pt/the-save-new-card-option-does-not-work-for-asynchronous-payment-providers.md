---
title: "A opção 'Salvar novo cartão' não funciona para provedores de pagamento assíncronos"
id: 3B4gVSNrSeCc8EBXwk5sAu
status: PUBLISHED
createdAt: 2022-03-11T17:54:35.664Z
updatedAt: 2024-04-29T17:58:58.889Z
publishedAt: 2024-04-29T17:58:58.889Z
firstPublishedAt: 2022-03-11T17:54:36.273Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: a-opcao-salvar-novo-cartao-nao-funciona-para-provedores-de-pagamento-assincronos
locale: pt
kiStatus: Fixed
internalReference: 308892
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando o cliente tenta adicionar um novo cartão na seção Minha conta de lojas cujas afiliações não retornam uma resposta síncrona, o sistema retorna _ocorreu um erro ao tentar registrar o cartão_ e uma cobrança indevida de R$ 1,50 pode ser gerada.

Esse erro ocorre porque a My Cards aguarda uma resposta síncrona das adquirentes de cartão de crédito e a maioria delas não retorna uma resposta imediata.

## Simulação



1. Acesse o VTEX **Admin.**
2. Configure o adquirente Mundi.
3. Configure um método de pagamento com cartão de crédito - como Mastercard, Visa, American Express, etc. - a ser processado pelo adquirente.
4. Vá para a página inicial de sua loja.
5. Faça login inserindo seu endereço de e-mail e senha.
6. Clique em **My account**.
7. Vá para a seção **Cartões de crédito**.
8. Clique em **Add new card**.
9. Preencha todos os campos e clique em **Salvar novo cartão**.
10. Esse processo retornará um erro e será cobrado do cliente o valor de R$ 1,50, que poderá ou não ser devolvido automaticamente mais tarde

## Workaround


N/A

