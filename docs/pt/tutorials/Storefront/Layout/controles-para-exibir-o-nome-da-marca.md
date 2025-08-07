---
title: 'Controles para exibir o nome da marca'
id: 4WF5ZfVXcIkykGCICkeQYy
status: PUBLISHED
createdAt: 2018-02-26T13:36:50.601Z
updatedAt: 2019-12-31T15:21:09.686Z
publishedAt: 2019-12-31T15:21:09.686Z
firstPublishedAt: 2018-02-26T14:13:31.398Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slugEN: controls-for-displaying-the-brand-name
legacySlug: controles-para-exibir-o-nome-da-marca
locale: pt
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

Existem dois controles que renderizam o nome da marca:
- `$product.BrandName`
- `$product.Brand`

Ambos são controles de prateleira, ou seja, funcionam apenas em páginas que usam templates de prateleira.

A diferença entre os dois é a seguinte:

- O controle `$product.BrandName` exibe o nome da marca conforme ela está cadastrada no catálogo da loja. Por exemplo, se você cadastrou uma marca como "Sucos Oliveira", ao usar este controle, o __nome da marca__ será renderizado do mesmo modo: "Sucos Oliveira". Este controle renderiza apenas a string pura. Para manipulá-la no front-end, você pode inserir o controle em um elemento HTML, como um div ou span, com a classe que desejar.
- O controle `$product.Brand` exibe o nome da marca em um __formato indicado para compor URLs__. Isto porque caracteres em caixa alta serão substituídos por seus equivalentes em caixa baixa, e espaços serão substituídos por traço. Por exemplo, se o nome da marca cadastrado no catálogo é "Sucos Oliveira", este controle vai renderizar o seguinte: "sucos-oliveira". Neste caso, o código HTML renderizado tem o seguinte formato: `<p class="texto brand {brand}">{brand}</p>`, onde {brand} é o nome da marca.
