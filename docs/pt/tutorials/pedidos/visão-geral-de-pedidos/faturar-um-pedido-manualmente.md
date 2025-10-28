---
title: 'Como faturar um pedido'
id: 7p1h852V5t54KyscpgxE2v
status: PUBLISHED
createdAt: 2020-12-28T20:50:42.445Z
updatedAt: 2025-07-28T19:41:56.286Z
publishedAt: 2025-07-28T19:41:56.286Z
firstPublishedAt: 2020-12-28T21:01:55.107Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: how-to-manually-invoice-an-order
legacySlug: como-faturar-um-pedido-manualmente-beta
locale: pt
subcategoryId: 3VNOhxDrvYxJThhuJClrYZ
---

A página de [Detalhes do Pedido](/pt/tutorial/pagina-de-detalhes-do-pedido-interface--2Y75n54Cc9VizrlG1N6ZNl) permite que o lojista acompanhe o fluxo detalhado dos pedidos. A página reúne os dados de um determinado pedido e é por ela que a loja inclui e consulta a [fatura](/pt/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/2WgQrlHTyVo4hLjhUs1LMT) daquele pedido de forma manual.

Faturar o pedido na plataforma VTEX significa inserir a nota fiscal dos itens no módulo **Pedidos**. Também é possível enviar uma [fatura parcial](/pt/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe), quando o pedido sofre alterações em seu valor, itens, ou em casos de devolução de itens.

É preciso faturar o pedido para que a nota fiscal fique disponível para o cliente e o [fluxo do pedido](/pt/tutorial/fluxo-de-pedido--tutorials_196) chegue ao fim. O envio da fatura pode ser feito:

* Via [API](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/invoice) de envio de fatura.
* Via Admin VTEX.

> ℹ️ No momento de faturar um pedido, é possível alterar a [transportadora](/pt/tutorial/transportadoras-na-vtex--7u9duMD5UQa2QQwukAWMcE) associada ao pedido. Para isso na etapa de preenchimento do **Rastreamento do pedido**, clique em *Transportadora* e selecione a opção desejada.

Para enviar a fatura pelo Admin VTEX, realize os seguintes passos:

1. No Admin VTEX, acesse **Pedidos > Todos os pedidos**, ou digite **Todos os pedidos** na barra de busca no topo da página.    
2. Busque o pedido pela barra de busca ou [utilizando os filtros](/pt/tutorial/como-filtrar-pedidos--tutorials_192).  
3. Clique no pedido desejado.     
4. Na seção **Itens para faturar,** clique no ícone de seta <i class="fas fa-chevron-right"></i> para expandir.
![Itens faturar](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pedidos/vis%C3%A3o-geral-de-pedidos/faturar-um-pedido-manualmente_1.png)
5. Clique no botão `Faturar`.   
6. Clique na opção de faturamento desejada:    
    * **Enviar fatura referenciando itens:** para faturar o pedido referenciando os itens do pacote.    
    * **Enviar fatura avulsa:** para faturar itens específicos do pacote. Caso sejam feitas [alterações no pedido](/pt/tutorial/how-to-change-order-items--7jekq618QxgbsOxKkXBjE8), é necessário inserir [faturas parciais](/pt/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe).  
    * **Notificar fatura** permite notificar o ERP da sua loja, para gerar nota fiscal.        
7. Preencha os campos do formulário correspondente:
    * Dados do formulário **Enviar fatura referenciando itens**
        * Número da nota: identificador numérico da nota fiscal. Não insira mais de uma nota com o mesmo número.
        * URL da nota: endereço web da nota fiscal.
        * Chave de acesso: para consulta da nota fiscal eletrônica (NF-e) na internet. Este campo deve ser preenchido somente em casos de NF-e.
        * Data de emissão: data de emissão da nota fiscal.
        * Rastreamento do pedido: código de identificação de rastreamento.
        * Valores extras: valores extras da nota fiscal, como juros, impostos e preço do frete.
        * Valor: valor total da nota fiscal.
        * Utilize o ícone de adicionar <i class="fas fa-plus"></i> e diminuir <i class="fas fa-minus"></i> para incluir/excluir os itens da fatura.
    * Dados do formulário **Enviar fatura avulsa**
        * Valor: valor total da nota fiscal
        * Número da nota: identificador numérico da nota fiscal. Não insira mais de uma nota com o mesmo número.
        * URL da nota: endereço web da nota fiscal.
        * Chave de acesso: é a chave de acesso para consulta da nota fiscal eletrônica (NF-e) na internet. Este campo deve ser preenchido somente em casos de NF-e.
        * Data de emissão: data de emissão da nota fiscal.
        * Rastreamento do pedido: código de identificação de rastreamento.
    * Dados do formulário **Notificar fatura**. Esse formulário deve ser utilizado apenas para lojas que utilizam o VTEX Sales App.
        * Observações: campo de preenchimento utilizado para notificar um sistema externo de faturamento.
        * Valor: valor total da nota.
8. Após preencher com as informações, clique em `Salvar fatura` ou em `Notificar fatura`, dependendo da opção escolhida. 

Depois do pedido `Faturado`, confira as notas fiscais inseridas na seção **Fatura**, como apresentado na figura abaixo:

![Fatura](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pedidos/vis%C3%A3o-geral-de-pedidos/faturar-um-pedido-manualmente_2.png)

Em casos de envios de [faturas parciais](/pt/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe), ao [alterar ou remover itens](/pt/tutorial/how-to-change-order-items--7jekq618QxgbsOxKkXBjE8) de um pedido, o valor total do pedido será atualizado após o faturamento, e corresponde ao que é captado pelo gateway de pagamentos da VTEX.

Não é possível [cancelar pedidos](/pt/tutorial/como-cancelar-pedido--tutorials_186) que já tenham sido [faturados parcialmente](/pt/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe). Caso o cliente deseje substituir ou remover itens do pedido, é possível [alterar o pedido](/pt/tutorial/alteracao-de-itens-de-um-pedido-finalizado--tutorials_190).
