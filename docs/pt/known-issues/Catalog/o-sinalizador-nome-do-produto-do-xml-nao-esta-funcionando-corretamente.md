---
title: "O sinalizador 'Nome do produto' do XML não está funcionando corretamente"
id: 6YDbpRns3LCN02bVKM8aaf
status: PUBLISHED
createdAt: 2023-10-26T11:35:14.500Z
updatedAt: 2023-10-26T11:35:15.285Z
publishedAt: 2023-10-26T11:35:15.285Z
firstPublishedAt: 2023-10-26T11:35:15.285Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: xmls-product-name-flag-not-working-properly
locale: pt
kiStatus: Backlog
internalReference: 925965
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Ao criar um XML, temos duas opções diferentes para definir o nome do produto, nos sinalizadores "Nome do produto" e "Nome do produto + Nome do SKU". No entanto, o sinalizador "Nome do produto" está sendo desconsiderado, e o nome do produto no arquivo segue a regra:
- Se o produto tiver mais de um SKU ou o nome do SKU for igual ao nome do produto = será exibido somente o Nome do produto
- Se o produto tiver apenas um SKU e o nome do SKU não for igual ao nome do produto = ele concatenará o nome do produto e do SKU

## Simulação



1. Verifique se você tem no catálogo produtos que correspondam à descrição acima
2. Crie um XML selecionando o sinalizador "Product Name" (Nome do produto)
3. Veja que, para os produtos com apenas uma SKU, o nome do produto será concatenado com o nome da SKU



## Workaround


N/A




