---
title: 'Importar dados de clientes'
id: 2zWYVOyj0sISYQmeUwCsI0
status: PUBLISHED
createdAt: 2017-06-22T20:55:49.745Z
updatedAt: 2025-10-24T23:00:50.285Z
publishedAt: 2025-10-24T23:00:50.285Z
firstPublishedAt: 2017-06-27T14:40:29.106Z
contentType: tutorial
productTeam: Master Data
author: authors_4
slugEN: import-customer-data
legacySlug: importando-dados-de-clientes-brasil
locale: pt
subcategoryId: 42hDtnYXHw5ExG6l19RP1l
---

A importação de dados de clientes deve ser feita no Master Data. Para o envio de dados, use o artigo [Importando dados no Master Data](/pt/tutorial/importando-dados-no-master-data).

> ❗ Você pode conferir o guia sobre como [importar dados de clientes programaticamente com a API do Master Data v1](https://developers.vtex.com/docs/guides/import-customer-data).

O checkout trabalha com os dados das entidades CL (cliente) e AD (endereço).

Mas é importante notar que, para que o checkout já traga os dados do cliente no carrinho com base no email, chave primária do Master Data, é fundamental garantir que todos os dados a seguir estejam corretamente cadastrados na plataforma.

> ⚠️ Os nomes dos campos no checkout e no Master Data diferem, mas seus valores são equivalentes — por exemplo, `addressId` e `addressName`. Para mais detalhes sobre essa equivalência, consulte a documentação da [Master Data API](https://developers.vtex.com/docs/api-reference/masterdata-api?endpoint=overview).

As tabelas a seguir representam os dados e os formatos necessários para a importação.

### Campos pessoais

<iframe src="https://vtexhelp.myvtex.com/tables/checkoutprofilepersonal/pt" title="Campos pessoais obrigatórios" frameBorder="0" width="100%" height="850"></iframe>

### Campos de endereço

<iframe src="https://vtexhelp.myvtex.com/tables/checkoutprofileaddress/pt" title="Campos de endereço obrigatórios" frameBorder="0" width="100%" height="850"></iframe>

### Campos corporativos

<iframe src="https://vtexhelp.myvtex.com/tables/checkoutprofilecorporate/pt" title="Campos corporativos obrigatórios" frameBorder="0" width="100%" height="850"></iframe>

### Saiba mais

 * [SmartCheckout - Preenchimento automático de dados do cliente](/pt/docs/tutorials/smartcheckout-preenchimento-automatico-de-dados-do-cliente)
 * [`orderForm` fields](https://developers.vtex.com/docs/guides/orderform-fields#clientprofiledata)
