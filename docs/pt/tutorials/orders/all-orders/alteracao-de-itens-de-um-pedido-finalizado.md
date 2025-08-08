---
title: 'Alteração de itens de um pedido finalizado'
id: tutorials_190
status: PUBLISHED
createdAt: 2017-04-27T22:15:22.411Z
updatedAt: 2024-11-11T19:08:14.645Z
publishedAt: 2024-11-11T19:08:14.645Z
firstPublishedAt: 2017-04-27T23:00:47.264Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: changing-items-from-a-complete-order
legacySlug: como-fazer-a-alteracao-de-itens, alterar-pedidos-finalizados
locale: pt
subcategoryId: 2t00bBkcAwIkgSCGKsMOwY
---

A **Alteração de itens** é a funcionalidade que permite ao lojista modificar os itens de um pedido. Com este recurso, a loja pode solucionar mudanças eventuais no pedido, motivadas por erros do cliente, falta de disponibilidade de produtos, inclusão de descontos, entre outros casos.

Há duas formas de realizar a alteração de um pedido:

* [Admin VTEX:](#como-alterar) é possível se o status do pedido estiver como `Preparando entrega`.
* [API de alteração de pedidos:](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/changes) é possível, além de alterar itens, criar descontos e mudar o preço do pedido. A alteração só é possível se o status do pedido na API de pedidos for `handling` ou `waiting-for-fulfillment`.

<div class="alert alert-warning">
Após a alteração, o cliente recebe uma notificação por email caso o template <code>Change of information</code> (<a href="https://help.vtex.com/pt/tutorial/templates-de-emails-transacionais--3g2S2kqBOoSGcCaqMYK2my">
template de emails transacionais referentes ao pedido</a>) esteja habilitado na Central de Mensagens. O cliente recebe as mensagens com as informações que foram preenchidas no formulário de alteração de itens.
</div>

## Cuidados e limitações

Antes de realizar as alterações no pedido, fique atento às restrições da funcionalidade:

* Só é possível alterar pedidos de [Multilevel Omnichannel Inventory](https://help.vtex.com/pt/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) quando são feitos em [marketplaces externos](https://developers.vtex.com/docs/guides/change-orders-multilevel-omnichannel-inventory-external-marketplaces).
* Não é possível alterar [pedidos incompletos](https://help.vtex.com/pt/tutorial/entendendo-os-pedidos-incompletos--tutorials_294).
* Um pedido pode ser alterado até 50 vezes.
* Não é possível aplicar descontos que sejam iguais ou maiores que o valor do pedido. 
* A solicitação de alteração só ocorre se houver mudanças na quantidade de itens ou substituição de pelo menos um SKU do pedido.
* Não é permitido alterar itens que não são do próprio marketplace ou de uma conta franquia.
* É preciso que o [adquirente](https://help.vtex.com/pt/tutorial/o-que-e-um-adquirente--7N1oRTG8dGmOiIugC0cs4E) aceite o novo valor da operação para que a alteração ocorra.
* O acréscimo de valores só é permitido se pedido foi pago pelas condições de pagamento **Promissory** ou **CardPromissory** (disponíveis no Admin em **Configurações da loja > Pagamentos > Configurações > Condições de pagamento**), [dinheiro](https://help.vtex.com/pt/tutorial/como-configurar-pagamento-customizado--tutorials_451) ou [controle de crédito](https://help.vtex.com/pt/tutorial/customer-credit-visao-geral--1uIqTjWxIIIEW0COMg4uE0). Além disso, o [adquirente ](https://help.vtex.com/pt/tutorial/o-que-e-um-adquirente--7N1oRTG8dGmOiIugC0cs4E)deve permitir a operação sem o uso de CVV e duas operações de cobrança em um mesmo pedido.
* A [reserva](https://help.vtex.com/pt/tutorial/como-a-reserva-funciona--tutorials_92)dos itens no inventário não é automática. É preciso atualizar manualmente a quantidade de itens que ainda estão disponíveis no [inventário](https://help.vtex.com/pt/tutorial/gerenciar-itens-em-estoque--tutorials_139).
* Não é possível [cancelar pedidos](https://help.vtex.com/pt/tutorial/como-cancelar-pedido--tutorials_186) que já tenham sido [faturados parcialmente](https://help.vtex.com/pt/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe). Caso o cliente deseje substituir ou remover itens do pedido, é possível alterar o pedido.
* Não é possível alterar um pedido com a transação finalizada. Para alterações no valor do pedido com desconto, por exemplo, o OMS leva em considera que ainda é possível alterar o valor da transação se o status mostrado em Detalhes da transação é diferente de `Finished`, mesmo se o valor já tenha sido liquidado.  
* Não é possível fazer alterações em pedidos vindos de [marketplaces integrados com a VTEX](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402) (tanto conectores nativos ou conectores de parceiros).
* É possível alterar apenas pedidos que foram para manuseio, no status *Preparando entrega*.
* Para alterações em que há mudança para um valor superior em relação ao valor inicial do pedido:
    * Caso o [conector](https://help.vtex.com/pt/tutorial/o-que-e-conector--3lze0Cu0bmyC6u2o2iaeEA) não permita alterações no valor do pedido (para valores maiores), uma nova transação será realizada com o valor excedente. Desta forma, a transação não terá vínculo com o pedido original. Se uma consulta for necessária, faça uma busca das transações com base no valor, data da alteração e nome do cliente.
    * A liquidação dos valores adicionais ocorre somente após  o faturamento do pedido. Portanto, tenha cuidado com esse tipo de operação, pois esta está suscetível a fraudes e golpes, visto que os valores adicionais só serão liquidados posteriormente.

## Como alterar

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

Ao alterar ou remover itens de um pedido, o valor total do pedido é alterado. Nesses cenários, é necessário [faturar o pedido](https://help.vtex.com/pt/tracks/orders--2xkTisx4SXOWXQel8Jg8sa/2WgQrlHTyVo4hLjhUs1LMT) enviando a [fatura parcial](https://help.vtex.com/pt/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe) correspondente ao valor que será liquidado pelo pedido após a alteração. 

O valor total do pedido será atualizado após a inserção da nota fiscal, e corresponde ao que é captado pelo gateway de pagamentos da VTEX. Caso um item seja devolvido, o sistema de Pagamentos da VTEX fará o estorno automaticamente ao cliente.

<div class = "alert alert-info">
A funcionalidade faturas parciais está disponível para toda a base de clientes VTEX, mas a liquidação parcial no gateway está em fase Beta. Além disso, para que as faturas parciais inseridas nos pedidos disparem liquidações parciais na transação, é necessário usar um conector que utiliza o <a href="https://help.vtex.com/pt/tutorial/payment-provider-protocol--RdsT2spdq80MMwwOeEq0m">Payment Provider Protocol</a>. Conectores legados não possuem suporte à funcionalidade.
</div>
