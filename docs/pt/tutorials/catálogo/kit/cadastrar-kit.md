---
title: 'Cadastrar kit'
id: tutorials_215
status: PUBLISHED
createdAt: 2017-04-27T22:13:50.843Z
updatedAt: 2025-09-16T19:15:39.706Z
publishedAt: 2025-09-16T19:15:39.706Z
firstPublishedAt: 2017-04-27T23:02:48.663Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slugEN: bundle-registration
legacySlug: cadastrando-kit
locale: pt
subcategoryId: 17Lkzo2rGBE1Bt7dXjE0tV
---

Na VTEX, um kit é um tipo de SKU composto por um ou mais SKUs, chamados de componentes. Além do kit, existe um conceito semelhante: o kit look.

## Diferença entre kit e kit look

A tabela a seguir apresenta as características e contextos para o uso de kit ou kit look:

| **Tipo** | **Definição** | **Exemplo** |
| :---: | :--- | :--- |
| [Kit](/pt/docs/tutorials/o-que-e-um-kit) | <ul><li>Os componentes formam um conjunto indivisível e o cliente não pode escolher quais itens do kit deseja adquirir.</li><li>A loja pode ou não disponibilizar os componentes para compra individual.</li></ul> | Uma loja de moda masculina oferece o kit "Dia dos Pais", formado por um sapato, um par de meias e um chaveiro. O cliente não tinha interesse no chaveiro, mas gostou do sapato e das meias, então aceitou e levou o kit completo, já que não era possível escolher apenas parte dos itens. |
| [Kit look](/pt/docs/tutorials/como-montar-um-kit-look) | <ul><li>Os componentes funcionam como uma sugestão de compra conjunta e o cliente pode escolher quais itens do kit look deseja adquirir.</li><li>A loja sempre disponibiliza os componentes para compra individual.</li></ul> | Uma loja de moda feminina oferece a venda do kit look "Verão", formado por um biquíni, uma saída de banho e uma sandália. A cliente não gostou do modelo de sandália e comprou somente o biquíni e a saída de banho. |

## Formar kit

As instruções a seguir são para realizar o cadastro de um kit.

> ℹ️ Caso seu interesse seja por um kit look, confira [Montar um Kit look](/pt/docs/tutorials/como-montar-um-kit-look).

1. No Admin VTEX, acesse **Catálogo > Produtos e SKUs**, ou digite **Produtos e SKUs** na barra de busca no topo da página.
2. Acesse a página de edição do SKU que será um dos componentes. Se ainda não houver um SKU criado, confira [Adicionar ou editar SKU](/pt/docs/tutorials/adicionar-ou-editar-sku).
3. Na aba **SKUs**, clique no <i class="fas fa-ellipsis-v" aria-hidden="true"></i> menu na linha do SKU.

  ![bundle_registration_image_1_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/catálogo/kit/cadastrar-kit_1.png)

4. Clique em `Formar kit`.
5. Clique em `Converter em kit`.

> ❗ A ação de transformar um SKU em kit é definitiva e não pode ser desfeita.

Após transformar o SKU em um kit, a palavra `Kit` aparece ao lado do ID do SKU:

![bundle_registration_image_2_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/catálogo/kit/cadastrar-kit_2.png)

Caso deseje, você pode duplicar o SKU ou movê-lo para outro produto. Estas ações estão disponíveis no mesmo menu com a opção para `Formar kit`, descrita no passo 4.

## Peso do kit

O peso do kit será formado pelo somatório do peso de seus componentes.

## Inventário

O [inventário](/pt/docs/tutorials/gerenciar-itens-em-estoque) do kit sempre será o inventário de seus componentes. Ou seja, não é possível inserir inventário apenas no kit, é preciso inserir inventário em cada um de seus componentes independentes, a fim de atualizar o inventário do kit. Essa informação pode ser visualizada no Admin VTEX em **Catálogo > Inventário > Gerenciamento de inventário**.

Como todos os SKUs componentes do kit só podem ser vendidos juntos, o inventário do kit será igual ao SKU com menos itens em inventário. Quando um dos componentes não possui mais inventário, o kit não pode ser comprado.

> **Exemplo:** um kit possui dois componentes. Considere que o componente 1 possui 30 unidades em inventário e o componente 2 possui 3 unidades no inventário. Logo, apenas 3 unidades do kit poderão ser vendidas.

Os componentes do kit podem estar em estoques diferentes, contanto que eles sejam enviados a partir da mesma doca. Se não saírem pela mesma doca, o kit inteiro se torna indisponível. 

> ℹ️ Este cenário não acontece com um kit look, que pode ser vendido com os componentes que restaram no inventário, sem a necessidade de se ter todos os componentes do kit no inventário.

## Preço

O preço do kit é atualizado automaticamente após alterar o valor unitário de algum dos componentes. O preço final será a soma do valor dos componentes.

Você também pode alterar somente o preço final do kit direto pelo sistema de preços sem atualizar os componentes. Dessa forma, o valor do componente será usado apenas para ratear o valor de venda entre os componentes, determinando o preço de cada componente naquele pedido específico.

Mas note que alterar qualquer componente irá gerar um novo preço final, atualizando o que foi anteriormente cadastrado. Alterar somente o preço final não atualiza o preço dos componentes.
