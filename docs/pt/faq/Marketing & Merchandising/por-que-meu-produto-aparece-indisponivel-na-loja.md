---
title: 'Investigar por que um produto aparece indisponível na loja'
id: frequentlyAskedQuestions_161
status: ARCHIVED
createdAt: 2017-04-27T22:39:35.556Z
updatedAt: 2019-12-31T14:23:51.835Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:01:43.712Z
contentType: frequentlyAskedQuestion
productTeam: Marketing & Merchandising
author: authors_84
slugEN: why-does-my-product-appear-as-unavailable-at-the-store
locale: pt
legacySlug: 
---

Para um produto aparecer disponível na loja, além de estar com todo o cadastro no catálogo feito e correto, ele precisa ser atendido pela logística configurada na loja. Isso significa que todas as configurações de estoque, doca, transportadora, peso, dimensões etc devem estar atendendo ao produto em questão.

Quando esse produto não aparece na loja ou quando aparece como indisponível significa que um desses pontos precisa ser ajustado. Este artigo tem como objetivo listar os principais meios de investigar, na plataforma, o que deve ser corrigido nas configurações do produto.

## Cadastro de produto

1. Verifique se produto e SKU estão ativos;
2. Verifique se a marca está ativa;
3. Verifique se a categoria está ativa;
4. Verifique se o existe um preço válido para a política comercial desejada associado ao SKU;
5. Verifique se a flag **Exibir no site** está marcada no produto;
6. Verifique se o [website esta associado a um binding](/pt/faq/website-com-erro-como-ajustar "website esta associado a um binding");
7. Verifique se a flag **Mostrar produto esgotado** está marcada &#8211; se não estiver, pode ser que o produto esteja indisponível. Para verificar essa hipótese, siga o checklist abaixo.

## Indexed Info

O indexed info é um recurso disponível no catálogo que também poderá auxiliar investigações dessa natureza. Quando você precisa identificar de forma rápida, a razão para um SKU estar indisponível, inativo ou invisível, utilize esse recurso.

![IndexedInfo](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)
No exemplo abaixo, é possível concluir que o SKU está indisponível por ausência de preço.

![IndexedInfo_detail](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.png)

## Logística

Em logística, temos um simulador que indica quais configurações não estão atendendo ao carrinho (produtos e CEP) inseridos na validação. É basicamente o mesmo teste que o admin realiza antes de identificar se o produto está disponível.
Você sempre deve realizar essa simulação com um CEP que é atendido por todas as suas transportadoras, pois, saberá que se esse CEP não foi atendido para este produto, nenhum outro CEP será.

1. [Clique aqui para acessar o passo-a-passo de como fazer a simulação de frete](/pt/tutorial/simulacao-de-frete).
2. Após o ajuste de qualquer um dos itens de logística ou cadastro de produto, aguarde a indexação do produto, verificando a [fila de indexação](/pt/tutorial/entendendo-o-funcionamento-da-indexacao/).
3. Por fim, acesse a página do produto em questão por uma aba anônima, para evitar visualizar a página em cache.
