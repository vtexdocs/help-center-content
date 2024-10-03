---
title: 'Ao organizar atributos e grupos por categoria, eles não são reorganizados na loja'
id: 1oWkNKBfrWMmKSWOeeGikO
status: PUBLISHED
createdAt: 2017-12-18T17:08:46.708Z
updatedAt: 2022-12-22T20:45:03.406Z
publishedAt: 2022-12-22T20:45:03.406Z
firstPublishedAt: 2017-12-19T13:06:06.107Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: attributes-and-groups-organized-by-category-are-not-reorganized-in-the-store
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

Ao tentar organizar os atributos em cada categoria, alterando o número de ordem de cada atributo e clicando em "organizar", o sistema não respeita a ordem configurada.

Mesmo assim, em alguns casos em que os atributos são reorganizados, após salvar a ordem, o mesmo grupo é dividido em vários grupos com o mesmo nome.

## Simulação

1. No admin, acesse o módulo __Catálogo__ e, em seguida, clique em __Categorias__.
2. Pesquise pela __Categoria__ desejada e clique em __Ações__. No menu que aparecerá logo abaixo, clique em __Campos de Produto__.
2. Altere o número de ordem dos atributos.
3. Clique em __Organizar__.
4. Mostra-se que a ordem não é respeitada e, por vezes, o grupo é dividido em vários grupos iguais.

## Workaround

É possível estender a funcionalidade nativa que provisiona o sidebar com os filtros, criando um componente de filtro customizado. Dessa forma, usando a API Search para criar uma nova estrutura sob medida, é possível reorganizar qualquer um dos filtros com independência.

Qualquer um dos nossos parceiros certificados e qualquer cliente tem acesso às ferramentas nomeadas, através da documentação para desenvolvedor da VTEX.

