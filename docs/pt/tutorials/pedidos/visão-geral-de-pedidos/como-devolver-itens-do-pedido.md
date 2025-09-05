---
title: 'Como devolver itens do pedido'
id: 2bSNWwD0g8fcUmuupLao9i
status: PUBLISHED
createdAt: 2020-12-28T21:23:42.045Z
updatedAt: 2025-09-05T14:06:46.984Z
publishedAt: 2025-09-05T14:06:46.984Z
firstPublishedAt: 2020-12-28T21:27:16.332Z
contentType: tutorial
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: how-to-return-order-items
legacySlug: como-devolver-itens-do-pedido-beta
locale: pt
subcategoryId: 3VNOhxDrvYxJThhuJClrYZ
---

A página de **Detalhes do Pedido** permite que lojistas acompanhem o ciclo de vida de pedidos específicos, analisando todas as suas interações, dados e contextos. Saiba mais sobre como funciona a nova página de [Detalhes do Pedido](https://help.vtex.com/pt/tutorial/pagina-de-detalhes-do-pedido-interface--2Y75n54Cc9VizrlG1N6ZNl). 

É possível devolver total ou parcialmente itens já faturados, caso o cliente solicite, desde que os itens estejam contidos na fatura. Um cenário comum para essa ação é quando um cliente de uma loja do segmento de moda deseja devolver uma peça de roupa do seu pedido, para trocá-la por um tamanho diferente, por exemplo.

> ⚠️ A devolução de pedidos via API deve ser feita pelo endpoint [Order invoice notification](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/invoice), que gera o reembolso correspondente. Não há necessidade de realizar requisições adicionais.

A página de **Detalhes do Pedido** permite orquestrar essa operação, seguindo os passos abaixo:

1. No Admin VTEX, acesse **Pedidos > Todos os pedidos**, ou digite **Todos os pedidos** na barra de busca no topo da página.
2. Selecione o pedido desejado.
3. Na seção **Notas Fiscais**, clique em `Devolver Itens`.
4. Selecione os itens que serão devolvidos marcando a caixa de seleção.  
5. Defina o número de unidades a serem devolvidas de cada item.  
6. Insira o valor adicional a ser devolvido ao seu cliente no campo `Valor Adicional`. Esse valor é referente ao custo de envio do pedido devolvido.
    > Por exemplo, se um pedido teve o custo de frete de R$ 20,00, você deve preencher esse campo com R$20,00. Caso seja preenchido com um valor menor que o valor total do frete, o cliente recebe metade do valor preenchido (no campo `Valor adicional`) como estorno da compra, e a outra metade em giftcard. Seguindo o exemplo dado, suponha que ao invés de R$20,00 (que é o valor total de custo do envio) a loja tenha preenchido o `Valor Adicional` como R$12,00. O cliente receberá a devolução desse valor na forma de um estorno de R$6,00 mais um giftcard de R$6,00.

    > *Este campo é opcional, e deve ser preenchido caso o valor adicional faça parte da política de devolução da sua loja.*

7. Insira o motivo do valor adicional, no campo `Referido a`.
    > *Este campo é opcional, e deve ser preenchido caso o valor adicional faça parte da política de devolução da sua loja.*    
8. Insira o código da `nota fiscal de entrada`.
    > *Se refere à nota fiscal de devolução, quando o item retorna ao seu estoque. É necessário que o número da nota fiscal da devolução seja diferente da nota fiscal anterior.*  
9. Comente o `Motivo da Devolução`.  
10. Clique em `Solicitar Reembolso`.  

Após o reembolso ser processado pelo sistema, os itens devolvidos e suas informações aparecerão na seção **Itens Devolvidos**.
