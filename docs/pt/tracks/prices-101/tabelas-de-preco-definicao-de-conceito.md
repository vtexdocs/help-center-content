---
title: 'Tabelas de Preço - Definição de Conceito'
id: 1wAm5m3IUfIj6maBdaRJt8
status: PUBLISHED
createdAt: 2019-07-04T13:52:10.820Z
updatedAt: 2024-12-04T18:04:10.370Z
publishedAt: 2024-12-04T18:04:10.370Z
firstPublishedAt: 2019-07-17T19:40:46.639Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: tabelas-de-preco-definicao-de-conceito
locale: pt
trackId: 6f8pwCns3PJHqMvQSugNfP
trackSlugPT: precos-101
---

## Definições

Uma tabela de preços é um conjunto de preços de SKUs aplicados a um contexto específico. Essa tabela armazena as informações de preços, tornando-os visíveis na loja.

Podemos considerar uma tabela de preços como uma entidade que calcula e fornece os [preços computados](/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/7GptzvlPDVM11ojEjywIQx#preco-computado) de seus SKUs. 

## Relação entre Tabelas de preços e Políticas comerciais

As tabelas de preços e as [políticas comerciais](/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) têm finalidades diferentes. As tabelas de preços contêm os preços específicos dos SKUs e determinam quanto custa cada item em um contexto. As políticas comerciais definem o contexto de venda, indicando quem verá o preço e onde ele será exibido.

Quando desvinculadas de políticas comerciais, essas tabelas podem ser aplicadas em contextos como [promoções](/pt/tutorial/criar-promocoes--tutorials_320) e [clusters de clientes](/pt/tutorial/criando-promocao-para-um-cluster-de-clientes--tutorials_342). No entanto, se forem criadas para atender a uma política comercial, devem estar associadas exclusivamente à política correspondente. 

<div class = "alert alert-info">
Uma tabela vinculada a uma política comercial define o preço dos SKUs para aquele contexto específico de venda e não pode ser usada em outros contextos.
</div>

## Exemplo prático

Imagine que você precise definir preços diferentes para um SKU em três contextos distintos: uma promoção específica, um cluster de clientes e uma política comercial.

Para isso, será necessário criar três tabelas de preços separadas:

- Tabela para aplicar o preço promocional.
- Tabela para o preço destinado ao cluster de clientes.
- Tabela associada à política comercial, que define o preço específico para aquele contexto de venda.

As duas primeiras tabelas de preço são genéricas e podem ser usadas para diferentes promoções ou clusters. A terceira tabela é exclusiva para a política comercial em questão e só pode ser utilizada dentro desse contexto específico.
