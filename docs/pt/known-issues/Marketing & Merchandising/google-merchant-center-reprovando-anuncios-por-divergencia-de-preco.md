---
title: "Google Merchant Center reprovando anúncios por divergência de preço"
id: PzvIhzUPXUOCNKWy9YGGC
status: PUBLISHED
createdAt: 2019-08-13T21:12:20.480Z
updatedAt: 2020-05-05T14:12:22.524Z
publishedAt: 2020-05-05T14:12:22.524Z
firstPublishedAt: 2019-08-13T21:24:41.844Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: authors_4
tag: Portal (CMS)
slugEN: google-merchant-center-reprovando-anuncios-por-divergencia-de-preco
locale: pt
kiStatus: Fixed
internalReference: 
---

## Sumário

Algumas lojas tiveram seus anúncios reprovados no Google Merchant Center por problemas de divergência de preços. Este cenário pode acontecer caso a loja envie preços modificados através da integração, comumente feito para ter anunciado o preço promocional à vista nos canais de mídia.

Normalmente, o Google verifica se o valor enviado pela integração corresponde ao valor apresentado na página de produto. Costuma-se aplicar os valores promocionais através de Javascript, como sugere este cenário [Promoções por meio de pagamento não aparecem na página do produto], mas isso pode não ser suficiente caso seja feita uma varredura nos *rich snippets* da página.

A VTEX oferece a viewpart <vtex.cmc:cmc:productRichSnippets/>, documentada na lista de controles para templates. Ela implementa dados estruturados para facilitar a varredura de informações do produto. Naturalmente, ela entrega o valor original do produto, e não o valor promocional esperado pelo Google neste contexto, o que leva à divergência e reprovação do anúncio.


## Simulação

1. Criar uma promoção que concede 5% de desconto no pagamento por boleto bancário
2. Acessar a página do produto
3. Observar que o resultado impresso pela viewpart “productRichSnippets” traz o preço original do produto.


## Workaround

Não é possível alterar dinamicamente o resultado dos *productRichSnippets* a fim de que o Google faça a leitura da informação promocional. Dessa forma, sugerimos a remoção da viewpart nativa para o Google e que se faça uma implementação para imprimir os dados estruturados de forma personalizada. Recomenda-se o formato *JSON+LD*, que atualmente é mais simples. 

A seguir, algumas documentações úteis para essa implementação:

[**Google**  - Entender como dados estruturados funcionam](https://developers.google.com/search/docs/guides/intro-structured-data?hl=pt-br)  

[**Google**  - Siga as diretrizes de dados estruturados](https://developers.google.com/search/docs/guides/sd-policies?hl=pt-br)  

[**Google**  - Marcação de dados estruturados para páginas de produtos](https://developers.google.com/search/docs/data-types/product?hl=pt-br) 

 [**Neil Patel**  - Como Adicionar Dados Estruturados no Seu Site](https://neilpatel.com/br/blog/dados-estruturados/)


__Atualização:__ este cenário já está endereçado pela nossa equipe de desenvolvimento e terá solução nativa. Em breve, as viewparts *skuPrice* e *productRichSnippets* aceitarão novos parâmetros a fim de habilitar a renderização do preço promocional automaticamente na página, sem a necessidade de implementações personalizadas com Javascript.


