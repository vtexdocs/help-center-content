---
title: 'Sugestões para transformar UnidadeMultiplicador menos de 1 a 0'
id: 3TC3n2xGTDGFKZUoooJOTR
status: PUBLISHED
createdAt: 2022-11-21T19:45:52.096Z
updatedAt: 2022-12-13T16:14:04.817Z
publishedAt: 2022-12-13T16:14:04.817Z
firstPublishedAt: 2022-11-21T19:45:52.855Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slug: sugestoes-para-transformar-unidademultiplicador-menos-de-1-a-0
locale: pt
kiStatus: Fixed
internalReference: 702056
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



O vendedor pode enviar os valores unitários do Multiplicador para seus skus que se encontram abaixo 1.

Exemplo:
 ![](https://vtexhelp.zendesk.com/attachments/token/HqXCaizs03DZbMVT2tcufZM6K/?name=image.png)

A mesma informação é enviada ao mercado corretamente:
 ![](https://vtexhelp.zendesk.com/attachments/token/zImMl1BVZHLG6zc45x4XwrZpB/?name=image.png)

Entretanto, uma vez que o produto é processado pelo Matcher, o valor é arredondado para 0:
 ![](https://vtexhelp.zendesk.com/attachments/token/j5FMl4AJJ0R5IP3FcStUo7DDi/?name=image.png)

E uma vez aprovado no catálogo do mercado, o valor continua como 0. Dessa forma, um valor errado é definido no catálogo do mercado.


##

## Simulação



1. Criar um sku com um valor unitárioMultiplicador inferior a 1;
2. Enviá-lo para o mercado;
3. Aprovar o sku na área de skus recebidos no mercado;
4. 4. Verificar no catálogo do mercado que o valor está definido como 0.


##

## Workaround


Ajuste o valor diretamente no catálogo do mercado via Admin, planilha eletrônica ou API.

