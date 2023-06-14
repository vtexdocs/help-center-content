---
title: 'A opção "Salvar novo cartão" não funciona para provedores assíncronos de pagamento'
id: 3B4gVSNrSeCc8EBXwk5sAu
status: PUBLISHED
createdAt: 2022-03-11T17:54:35.664Z
updatedAt: 2022-11-25T22:06:23.711Z
publishedAt: 2022-11-25T22:06:23.711Z
firstPublishedAt: 2022-03-11T17:54:36.273Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: a-opcao-salvar-novo-cartao-nao-funciona-para-provedores-assincronos-de-pagamento
locale: pt
kiStatus: Backlog
internalReference: 308892
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando o cliente tenta adicionar um novo cartão na seção Minha conta das lojas cujas afiliações não retornam uma resposta síncrona, o sistema retornará _um erro ocorrido ao tentar registrar o cartão_ e uma cobrança indevida de R$1,50 poderá ser gerada.

Este erro ocorre porque Meus Cartões esperam por uma resposta síncrona dos compradores de cartões de crédito e a maioria deles não retorna uma resposta imediata.



## Simulação



1. Ir para a VTEX **Admin.**
2. Configure o adquirente Mundi.
3. Configurar um método de pagamento com cartão de crédito - como Mastercard, Visa, American Express, etc. - para ser processado pelo adquirente.
4. Ir para a home page de sua loja.
5. Faça o login digitando seu endereço de e-mail e senha.
6. Clique em **Minha conta***.
7. Vá para a seção **Cartões de crédito***.
8. Clique em **Adicionar novo cartão**.
9. Preencha todos os campos e clique em **Salvar novo cartão***.
10. Este processo devolverá um erro e o cliente será cobrado o valor de R$ 1,50, que pode ou não ser devolvido automaticamente mais tarde.



## Workaround


N/A

