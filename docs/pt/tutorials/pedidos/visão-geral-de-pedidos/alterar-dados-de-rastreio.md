---
title: 'Alterar dados de rastreio'
id: 63c2hG3fBSCnchiMBOR5Ck
status: PUBLISHED
createdAt: 2021-12-17T18:17:47.739Z
updatedAt: 2023-03-29T15:05:42.352Z
publishedAt: 2023-03-29T15:05:42.352Z
firstPublishedAt: 2021-12-17T18:30:56.599Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: changing-tracking-data
legacySlug: alterar-dados-de-rastreio-beta
locale: pt
subcategoryId: 3VNOhxDrvYxJThhuJClrYZ
---

Ao inserir os dados de rastreio na plataforma, lojistas e clientes podem acompanhar entregas de pedidos. Para inserir ou alterar os dados de rastreio, é preciso que os pedidos já [estejam faturados](/pt/docs/tutorials/faturar-um-pedido-manualmente).  

Há duas formas de inserir os dados de rastreio dos pedidos:

* **Via API:** utilizando a [API Update order's partial invoice (send tracking number)](https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/oms/pvt/orders/-orderId-/invoice/-invoiceNumber-) para  implementar uma integração que envie os dados de rastreio de forma automatizada ou em massa, conforme as necessidades do seu negócio.
* **Via Admin:** alterando manualmente os dados de rastreio de cada pedido.

## Como alterar

Para alterar os dados de um pedido manualmente, siga os passos abaixo:

1. No Admin VTEX, acesse **Pedidos > Todos os pedidos**, ou digite **Todos os pedidos** na barra de busca no topo da página.
2. Selecione o pedido que deseja alterar. Lembre-se que o pedido deve ter a nota fiscal inserida.
3. Na página de detalhes do pedido, vá à seção **Fatura**.
4. Clique no botão <i class="fas fa-ellipsis-v"></i> `Ações`.
5. Clique em `Editar dados de rastreio`.
6. Uma nova janela ficará disponível, preencha os dados:
    * **Número de rastreio:** número de rastreio fornecido pela transportadora.
    * **Chave de acesso:** preencha esse campo quando o site da transportadora utilizar de chave de acesso para realizar a consulta via URL.
    * **URL de rastreamento:** link da página de rastreio da transportadora referente ao pedido.
    * **Selecionar transportadora:** selecione qual transportadora realizará a entrega.
7. Clique em `Salvar`.

![Fatura](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pedidos/visão-geral-de-pedidos/alterar-dados-de-rastreio_1.png)
