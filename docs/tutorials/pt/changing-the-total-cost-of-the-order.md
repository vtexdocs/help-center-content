---
title: 'Alterar valor total do pedido'
id: 2asq4BmxvSD8Tw9xpfZuMo
status: PUBLISHED
createdAt: 2021-12-15T18:43:55.480Z
updatedAt: 2023-03-29T15:59:48.297Z
publishedAt: 2023-03-29T15:59:48.297Z
firstPublishedAt: 2021-12-15T19:49:57.726Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slug: alterar-valor-total-do-pedido
locale: pt
legacySlug: alterar-valor-final-do-pedido-beta
subcategory: 3VNOhxDrvYxJThhuJClrYZ
---

A página de [Detalhes do pedido](https://help.vtex.com/pt/tutorial/pagina-de-detalhes-do-pedido-beta--2Y75n54Cc9VizrlG1N6ZNl) permite alterar o valor final do pedido para pedidos que ainda não foram faturados. Isso ocorre em cenários em que há descontos ou acréscimos ao valor.

<div class="alert alert-warning">
Lembre-se que a funcionalidade só fica disponível para pedidos que estão no status <code>Preparando entrega</code>.
 </div>

Para fazer a alteração, siga os passos abaixo:

1. No Admin VTEX, acesse **Pedidos > Todos os pedidos**, ou digite **Todos os pedidos** na barra de busca no topo da página.    
2. Busque o pedido pela barra de busca ou [utilizando os filtros](https://help.vtex.com/pt/tutorial/como-filtrar-pedidos--tutorials_192) e selecione o pedido desejado.    
3. Clique no pedido para acessar a página de **Detalhes do pedido**.   
4. Vá à seção **Valor total do pedido**, localizada no lado direito da página Detalhes do pedido.
5. Clique em `Alterar valor final`. A página **Alterar valor** ficará disponível
![valorfinal](//images.ctfassets.net/alneenqid6w5/5VwpodKoIiDSWBwYQs2rDc/9165c911db34e8067f90734077f67080/valorfinal__2_.png)
6. Preencha os campos obrigatórios: 
    *  **Valor:** Selecione entre Desconto e Aumento, e insira o valor correspondente ao que deseja alterar.  
    * **Motivo:** escreva as razões para a mudança.  
7. Clique em `Enviar`.
![Alterar valor](//images.ctfassets.net/alneenqid6w5/15TldKoBz42ds5fJswW13O/5bd41102367f310c7c5e70626496d8cb/Alterar_valor__1_.png)

As alterações no pedido serão atualizadas na seção *Itens para Faturar, e Histórico do pedido*. Note que o valor total do pedido também será alterado.

### Faturas parciais

Ao alterar ou remover itens de um pedido, o valor total do pedido é alterado. Nesses cenários, é necessário [faturar o pedido](https://help.vtex.com/pt/tracks/orders--2xkTisx4SXOWXQel8Jg8sa/2WgQrlHTyVo4hLjhUs1LMT) enviando a [fatura parcial](https://help.vtex.com/pt/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe) correspondente ao valor que será liquidado pelo pedido após a alteração. 

O valor total do pedido será atualizado após a inserção da nota fiscal, e corresponde ao que é captado pelo gateway de pagamentos da VTEX. Caso um item seja devolvido, o sistema de Pagamentos da VTEX fará o estorno automaticamente ao cliente.

<div class = "alert alert-info">
A funcionalidade faturas parciais está disponível para toda a base de clientes VTEX, mas a liquidação parcial no gateway está em fase Beta. Além disso, para que as faturas parciais inseridas nos pedidos disparem liquidações parciais na transação, é necessário usar um conector que utiliza o <a href="https://help.vtex.com/pt/tutorial/payment-provider-protocol--RdsT2spdq80MMwwOeEq0m">Payment Provider Protocol</a>. Conectores legados não possuem suporte à funcionalidade.
</div>
