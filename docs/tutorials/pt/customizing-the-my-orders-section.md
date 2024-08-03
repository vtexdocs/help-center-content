---
title: 'Customizar a seção Meus Pedidos'
id: 4DXbgLL65iMKsW40kuaAwK
status: DRAFT
createdAt: 2017-05-02T18:59:18.106Z
updatedAt: 2021-04-05T21:34:01.967Z
publishedAt: 
firstPublishedAt: 2017-05-02T19:01:38.688Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_6
slug: customizando-a-secao-meus-pedidos
locale: pt
legacySlug: customizando-a-secao-meus-pedidos
subcategory: 2g6LxtasS4iSeGEqeYUuGW
---

A nova seção **Meus Pedidos** (My Orders) é uma atualização *major* em relação à anterior, que altera todo o layout da página, por isso requer que a customização seja refeita.

Ela já está disponível no ambiente beta (`sualoja.vtexcommercebeta.com.br`) para testes, e é ativada sob demanda, conforme o nosso [artigo de apresentação](http://help.vtex.com/pt/tutorial/nova-secao-de-meus-pedidos) da nova seção.

Veja abaixo uma lista com as classes disponíveis para customização.

<div class="alert alert-warning">
Customizações de interface <strong>não são oficialmente suportadas pela VTEX</strong>.
<br />
<br /> 
Estas classes e configurações podem ser alteradas ou removidas em futuras atualizações. Como boa prática, recomendamos tratar erros de javascript para que seu código de customização não quebre caso uma classe seja removida no futuro.
</div>

<div class="alert alert-info">
Caso você já possua um arquivo de customização para a antiga versão do My Orders, recomendamos que coloque a nova customização em um arquivo separado.
</div>

### Lista de pedidos

![Página de lista de pedidos com classes para customização destacadas sobre ela](https://images.contentful.com/alneenqid6w5/1P5JMzt3jGIAKIOmC4ka4e/d7511d7273f4a957acc6f7e1322a81e6/my-orders-doc-1.png) 

CSS:
```
.myo-toggle // Toggle para seleção da lista de pedidos  
.myo-order-card // Card do pedido  
.myo-order-header // Header do card do pedido
.myo-order-sku // Elemento do SKU
.myo-invoice-btn // Botão de impressão de invoice
.myo-details-btn // Link para detalhes do pedido
.myo-cancel-btn // Link para cancelamento do pedido
```

### Detalhe do pedido

![Página de detalhe do pedido com classes para customização destacadas sobre ela](https://images.contentful.com/alneenqid6w5/5szHUT7x9CAOseYGkcEskS/e8a846072846d20648c65a1cd00059c4/my-orders-doc-2.png)

CSS:
```
.myo-workflow // Workflow do pedido
.myo-product-row // Linha do produto pedido
```

### Cancelamento de pedido

![Página de cancelamento do pedido com classes para customização destacadas sobre ela](https://images.contentful.com/alneenqid6w5/5mUVzR5n7aMScoSs4auem4/05bfeea119bb4fc42afe448c66c9674f/my-orders-doc-3.png)

CSS:
```
.myo-option-heading // Heading da seção de razões
.myo-option // Linha com opção de cancelamento
.myo-option-disclaimer // Box com avisos sobre cancelamento do pedido
.myo-summary // Sidebar com o sumário do pedido
.myo-summary-header // Header da sidebar
.myo-summary-product // Linha com o produto do pedido na sidebar
```
