---
title: "OrderForm permanece com cartão de crédito que foram removidos através da minha página de contas"
id: 4wcp7SdlHPTRSHxsDxZ1Xr
status: PUBLISHED
createdAt: 2022-05-03T11:47:35.874Z
updatedAt: 2022-11-25T21:51:16.383Z
publishedAt: 2022-11-25T21:51:16.383Z
firstPublishedAt: 2022-05-03T11:47:36.417Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: orderform-permanece-com-cartao-de-credito-que-foram-removidos-atraves-da-minha-pagina-de-contas
locale: pt
kiStatus: Fixed
internalReference: 276823
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A remoção de um cartão de crédito usando a página da minha conta não atualiza o formulário de pedido, que manteria um cartão de crédito que não existe mais.

O cliente não pode terminar as compras usando um cartão de crédito removido, mas o cartão de crédito inválido não será destacado para o cliente.



## Simulação


- criar um carrinho e seguir até a etapa de pagamento, com um perfil completo que tenha guardado um cartão de crédito
- remover este cartão de crédito usando a my-account
- observe que o cartão de crédito permaneceu no pedidoFormulário, e você não pode terminar as compras usando-o



## Workaround


O cliente deve fechar a compra com outro cartão de crédito. Um novo pedidoFormulário não apresentará o cartão de crédito que já foi removido de seu perfil. Eles também podem excluir o cartão de crédito diretamente do carrinho na etapa de pagamento, depois de terem feito o login.

