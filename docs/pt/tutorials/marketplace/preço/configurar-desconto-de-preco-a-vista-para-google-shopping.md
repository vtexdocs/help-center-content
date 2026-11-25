---
title: 'Configurar desconto de preço à vista para Google Shopping'
id: 40K3R5d4NogMvCzIWdWt3e
status: PUBLISHED
createdAt: 2020-12-18T19:17:16.033Z
updatedAt: 2024-11-01T13:39:20.668Z
publishedAt: 2024-11-01T13:39:20.668Z
firstPublishedAt: 2021-05-04T20:06:46.945Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: configuring-discounts-for-orders-prepaid-in-full-on-google-shopping
legacySlug: configurar-desconto-de-preco-a-vista-para-google-shopping
locale: pt
subcategoryId: 3pGCbMh80UueoeSqoAgSuS
---

Antes de configurar o desconto de preço à vista para o Google Shopping e seguir com os passos deste artigo, é preciso seguir os passos do tutorial [Configurar desconto de preço à vista](/pt/tutorial/configurar-desconto-de-preco-a-vista--7Lfcj9Wb5dpYfA2gKkACIt#).

Para configurar o desconto de preço à vista para o Google Shopping é preciso adicionar o ID do meio de pagamento à vista na página de produto do CMS. Siga os passos a seguir para realizar a configuração:

1. No Admin VTEX, acesse *Storefront > Layout*, ou digite *Layout* na barra de busca no topo da página.
2. Clique na pasta __CMS__.
3. Em seguida, na pasta __HTML Templates__.
4. Clique no template da sua página de produto na lista de templates.
5. No componente `richSnippets`, você deve adicionar o parâmetro `paymentSystemId` com o valor do meio de pagamento desejado.

```
<body id="product-page">
    <!--  Component: richSnippets -->
    <vtex.cmc:productRichSnippets showGoogle="1" paymentSystemId="6"/>
    <!-- /Component: richSnippets -->
```

6. Após a alteração, clique em __Save Template__ no campo superior para salvar.

Ao finalizar a configuração, o desconto de preço à vista estará disponível para o Google Shopping. 
