---
title: 'Como alterar itens do pedido'
id: 7jekq618QxgbsOxKkXBjE8
status: ARCHIVED
createdAt: 2020-12-28T21:11:48.378Z
updatedAt: 2023-03-31T22:07:17.538Z
publishedAt: 
firstPublishedAt: 2020-12-28T21:20:33.832Z
contentType: tutorial
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: how-to-change-order-items
locale: pt
legacySlug: como-alterar-itens-do-pedido-beta
subcategoryId: 3VNOhxDrvYxJThhuJClrYZ
---

A página de **Detalhes do Pedido** permite que lojistas acompanhem o ciclo de vida de pedidos específicos, analisando todas as suas interações, dados e contextos. Saiba mais sobre como funciona a nova página de [Detalhes do Pedido](https://help.vtex.com/pt/tutorial/pagina-de-detalhes-do-pedido-interface--2Y75n54Cc9VizrlG1N6ZNl).

A **Alteração de itens** é a funcionalidade que permite ao lojista modificar os itens de um pedido. Com este recurso, a loja pode solucionar mudanças eventuais no pedido, motivadas por erros do cliente, falta de disponibilidade de produtos, inclusão de descontos, entre outros casos.

Há duas formas de realizar a alteração de um pedido:

* [Via Admin VTEX](#como-alterar): é possível se o status do pedido estiver como `Preparando entrega`.
* [Via API de alteração de pedidos](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/changes) é possível, além de alterar itens, criar descontos e mudar o preço do pedido. A alteração só é possível se o status do pedido na API de pedidos for`handling` ou `waiting-for-fulfillment`.

>⚠️ Após a alteração, o cliente recebe uma notificação por email caso o template `Change of information` (<a href="https://help.vtex.com/pt/tutorial/templates-de-emails-transacionais--3g2S2kqBOoSGcCaqMYK2my">
> template de emails transacionais referentes ao pedido</a>) esteja habilitado na Central de Mensagens. O cliente recebe as mensagens com as informações que foram preenchidas no formulário de alteração de itens.

É possível editar itens que não foram faturados ainda em um pedido. Para adicionar novos itens, retirar itens, ou mudar a quantidade de cada um, confira os passos abaixo.  

>ℹ️ Para realizar a alteração, o pedido precisa estar no status `Preparando entrega`, equivalente ao status `handling` na [API](https://developers.vtex.com/vtex-developer-docs/reference/orders#registerchange). Para saber mais sobre status de pedidos, acesse o nosso artigo [Tabela de status de pedidos](https://help.vtex.com/pt/tutorial/tabela-de-status-de-pedidos-oms--frequentlyAskedQuestions_773).
> Confira a seção [Cuidados e limitações](https://help.vtex.com/pt/tutorial/alteracao-de-itens-de-um-pedido-finalizado--tutorials_190#cuidados-e-limitacoes) para saber mais sobre as condições de uso da funcionalidade.

1. No Admin VTEX, acesse **Pedidos > Todos os pedidos**, ou digite **Todos os pedidos** na barra de busca no topo da página.      
2. Busque o pedido pela barra de busca ou [utilizando os filtros](https://help.vtex.com/pt/tutorial/como-filtrar-pedidos--tutorials_192) e selecione o pedido desejado.      
3. Clique no pedido para acessar a página de **Detalhes do pedido**.  

    > Apenas pedidos no status Preparando entrega podem ser alterados. Somente altere o status do pedido após obter a sua confirmação da operação do seu ecommerce. Caso seu pedido não esteja no status Preparando entrega, na seção Status do pedido, clique em **Iniciar manuseio** > marque as caixas de seleção > clique **Avançar com status**. 

4. Na seção Itens para faturar, clique em **Alterar**.  
5. Preencha o formulário com as alterações desejadas.
<ul>
<li><b>Para adicionar novos produtos</b> digite o nome do SKU na barra de busca.</li>
<li><b>Para alterar a quantidade de unidades de cada produto</b> ajuste o controle, aumentando ou diminuindo.</li>
<li><b>Para alterar o valor</b> selecione entre as opções Desconto ou Aumento, e insira o valor atualizado.</li>
<li><b>Comente o Motivo das Alterações</b>. O comentário inserido nesse campo fica registrado no histórico de itens alterados. Aconselhamos descrever o que foi comunicado pelo cliente que solicitou a alteração.</li>
  </ul>
6. Clique em `Enviar`.  

As alterações no pedido serão atualizadas na seção *Itens para Faturar*, e *Histórico de itens alterados*.

### Faturas parciais

Ao [alterar ou remover itens de um pedido](https://help.vtex.com/pt/tutorial/alteracao-de-itens-de-um-pedido-finalizado--tutorials_190), o valor total do pedido é alterado. Nesses cenários, é necessário [faturar o pedido](https://help.vtex.com/pt/tracks/orders--2xkTisx4SXOWXQel8Jg8sa/2WgQrlHTyVo4hLjhUs1LMT) enviando a [fatura parcial](https://help.vtex.com/pt/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe) correspondente ao valor que será liquidado pelo pedido após a alteração. 

O valor total do pedido será atualizado após a inserção da nota fiscal, e corresponde ao que é captado pelo gateway de pagamentos da VTEX. Caso um item seja devolvido, o sistema de Pagamentos da VTEX fará o estorno automaticamente ao cliente.

>ℹ️ A funcionalidade faturas parciais está disponível para toda a base de clientes VTEX, mas a liquidação parcial no gateway está em fase Beta. Além disso, para que as faturas parciais inseridas nos pedidos disparem liquidações parciais na transação, é necessário usar um conector que utiliza o [Payment Provider Protocol](https://help.vtex.com/pt/tutorial/payment-provider-protocol--RdsT2spdq80MMwwOeEq0m). Conectores legados não possuem suporte à funcionalidade.
