---
title: 'Customizar a seção Meus Pedidos'
id: 4DXbgLL65iMKsW40kuaAwK
status: ARCHIVED
createdAt: 2017-05-02T18:59:18.106Z
updatedAt: 2021-04-05T21:34:01.967Z
publishedAt: 
firstPublishedAt: 2017-05-02T19:01:38.688Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_6
slugEN: customizing-the-my-orders-section
locale: pt
legacySlug: customizando-a-secao-meus-pedidos
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

A nova seção **Meus Pedidos** (My Orders) é uma atualização *major* em relação à anterior, que altera todo o layout da página, por isso requer que a customização seja refeita.

Ela já está disponível no ambiente beta (`sualoja.vtexcommercebeta.com.br`) para testes, e é ativada sob demanda, conforme o nosso [artigo de apresentação](http://help.vtex.com/pt/tutorial/nova-secao-de-meus-pedidos) da nova seção.

Veja abaixo uma lista com as classes disponíveis para customização.

>⚠️ Customizações de interface **não são oficialmente suportadas pela VTEX**.
>
>
> 
>
>
>  
> Estas classes e configurações podem ser alteradas ou removidas em futuras atualizações. Como boa prática, recomendamos tratar erros de javascript para que seu código de customização não quebre caso uma classe seja removida no futuro.

>ℹ️ Caso você já possua um arquivo de customização para a antiga versão do My Orders, recomendamos que coloque a nova customização em um arquivo separado.

### Lista de pedidos

![Página de lista de pedidos com classes para customização destacadas sobre ela](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png) 

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

![Página de detalhe do pedido com classes para customização destacadas sobre ela](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.png)

CSS:
```
.myo-workflow // Workflow do pedido
.myo-product-row // Linha do produto pedido
```

### Cancelamento de pedido

![Página de cancelamento do pedido com classes para customização destacadas sobre ela](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_3.png)

CSS:
```
.myo-option-heading // Heading da seção de razões
.myo-option // Linha com opção de cancelamento
.myo-option-disclaimer // Box com avisos sobre cancelamento do pedido
.myo-summary // Sidebar com o sumário do pedido
.myo-summary-header // Header da sidebar
.myo-summary-product // Linha com o produto do pedido na sidebar
```
