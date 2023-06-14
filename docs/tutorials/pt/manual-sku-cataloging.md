---
title: 'Catalogação de SKUs recebidos'
id: tutorials_396
status: PUBLISHED
createdAt: 2017-04-27T22:06:59.819Z
updatedAt: 2022-06-21T20:18:01.465Z
publishedAt: 2022-06-21T20:18:01.465Z
firstPublishedAt: 2017-04-27T23:03:22.726Z
contentType: tutorial
productTeam: Channels
author: authors_3
slug: sugerindo-e-aprovando-skus
locale: pt
legacySlug: sugerindo-e-aprovando-skus
subcategory: 4hU8QWlzhxWg711Kz7Gmib
---

A página de SKUs recebidos permite que o marketplace visualize, priorize e catalogue os itens enviados pelos seus sellers. Dessa maneira, é possível criar novos produtos e também associá-los a SKUs ou a produtos já existentes para disponibilizá-los para venda.

A catalogação pode ser feita [por meio de um ou mais matchers](https://help.vtex.com/pt/tutorial/entendendo-a-pontuacao-do-vtex-matcher?locale=pt "por meio de um ou mais matchers"), tanto de forma manual quanto automática. Além disso, também existe a possibilidade de usar ferramentas externas para realizar essa operação. 

## Priorizando a catalogação

A listagem de SKUs recebidos foi desenhada para priorizar e acelerar a catalogação desses itens. Ao clicar em qualquer SKU da lista, você acessa um resumo das principais informações do SKU por meio de uma barra lateral, sem sair da página de listagem.

A barra contém as imagens do SKU, preço, nível de estoque, além de outros atributos do produto como descrição, especificações, códigos e IDs. Também inclui a porcentagem de equivalência que o SKU recebeu pelo matcher instalado em sua loja.

Algumas das funcionalidades que ajudam nesse processo são:

### Filtros

No recurso de busca, é possível combinar diferentes filtros para tornar a exibição de SKUs mais precisa. Tente filtrar SKUs por marca, seller ou subcategoria para montar a visualização desejada. 

Por exemplo, se a marca "ABC" e a subcategoria "Meias" forem selecionadas, a visualização mostrará todos os SKUs da marca ABC que sejam da subcategoria "Meias".

Vale ressaltar que as opções de filtros se dão de acordo com os SKUs que estão disponíveis na listagem. Vamos supor, por exemplo, que o marketplace está conectado aos sellers A, B e C, mas somente existem SKUs dos sellers B e C pendentes na catalogação. Isso significa que a seleção de filtros exibirá apenas os resultados dos sellers B e C.

### Ordenação 

Por padrão, a visualização apresenta primeiro os itens mais recentes. Contudo, é possível ordenar por preço e estoque.

Nesse caso, os itens da tabela serão ordenados de forma crescente ou decrescente ao clicar em "Preço" ou "Estoque" no cabeçalho.

## Catalogando itens

Na listagem, qualquer SKU já está disponível para a catalogação. Porém, recomenda-se realizar o mapeamento de categorias e marcas antes desse passo para que o processo de catalogação seja mais rápido.

Lembramos que as sugestões que se encontram pendentes para aprovação permanecem disponíveis por apenas 30 dias. Depois desse período, elas expiram automaticamente.

### Opções de catalogação 

Na listagem, clique no botão com três pontos e escolha entre as seguintes opções: 

- __Aprovar um novo produto__: cria um SKU novo no catálogo e, consequentemente, um novo produto. Recomenda-se usar essa opção quando determinado produto ainda não existe no catálogo do marketplace.

- __Associar a um SKU existente__: faz o link entre o SKU do seller e um SKU que já existe no catálogo do marketplace.

Um possível caso seria o de um marketplace ter o celular XYZ com memória de 128GB do seller Um. 

Agora, digamos que o mesmo marketplace recebeu do seller Dois o mesmo SKU 128GB. Assim, para não duplicar o catálogo, o marketplace precisa associar esses SKUs.

Desse modo, é necessário indicar o ID do SKU já existente para que a associação seja feita corretamente.

- __Associar a um produto existente__: adiciona um SKU novo a um produto que já existe em seu catálogo.

Imagine que o marketplace já tenha o SKU Camisa Branca nos tamanhos P, M e G. Mas, recentemente, o seller enviou para estoque os tamanhos PP e GG da mesma Camisa Branca. 

Ao fazer essa associação, os tamanhos novos são agrupados junto com os demais que já estavam cadastrados. Dessa forma, o produto terá os tamanhos PP, P, M, G e GG disponíveis.

Nesse caso, é necessário indicar o ID do produto já existente para que a associação seja feita com sucesso.

- __Recusar SKU__: recusa SKUs que o marketplace não veja sentido em vendê-los na sua loja. Quando um SKU é recusado, significa que foi bloqueado pelo marketplace. Ou seja, na próxima vez que o seller enviar seus produtos, aqueles que foram recusados não estarão mais em meio aos enviados. É possível desbloquear um SKU por API REST, se o marketplace deseja voltar a recebê-lo como sugestão do seller. Para saber mais sobre aprovação de SKUs, acesse nossa [documentação da API no Developer Portal](https://developers.vtex.com/vtex-rest-api/reference/savesuggestion).

- **Aprovação automática**: também é possível configurar a aprovação automática de SKUs de um seller específico, independente da sua pontuação do Matcher. Essa ação só pode ser realizada por meio de API Rest. Confira nossa documentação sobre [Configurações de Aprovação do SKUs Recebidos](https://developers.vtex.com/vtex-rest-api/reference/getautoapprovevaluefromconfig), para saber mais

### Catalogação em massa 

O marketplace também tem a opção de catalogar SKUs em massa diretamente da listagem. 

O passo a passo é bem simples:

1. Nas caixas de seleção do lado esquerdo da tela, marque os SKUs que deseja catalogar.  
2. Selecione a ação de catalogação na barra azul que aparecerá acima.  
3. Revise ou adicione as informações necessárias para cada SKU selecionado no modal.  
4. No canto inferior direito do box, clique no botão “Aprovar”.

Desse modo, seus SKUs serão catalogados.

Por exemplo, você já tem um produto no catálogo, mas precisa adicionar novos tamanhos. Com essa funcionalidade, será possível selecionar todos os tamanhos de uma vez e fazer a associação.

Ou, no caso deseje criar produtos novos únicos - como cadeiras, garrafas, livros -, basta selecioná-los e aprová-los como novos produtos.
