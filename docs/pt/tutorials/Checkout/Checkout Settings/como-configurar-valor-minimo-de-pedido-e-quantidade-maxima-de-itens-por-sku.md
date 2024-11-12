---
title: 'Como configurar valor mínimo de pedido e quantidade máxima de itens por SKU'
id: 7JqipPUBxtKz0m4OlAyKs9
status: PUBLISHED
createdAt: 2020-05-29T16:17:01.837Z
updatedAt: 2023-03-23T16:58:55.153Z
publishedAt: 2023-03-23T16:58:55.153Z
firstPublishedAt: 2020-05-29T17:17:02.105Z
contentType: tutorial
productTeam: Shopping
author: authors_24
slugEN: how-to-configure-minimum-order-value-and-maximum-quantity-of-items-per-sku
locale: pt
legacySlug: como-configurar-valor-minimo-de-pedido-e-quantidade-maxima-de-itens-por-sku
subcategoryId: 6XAvmMxp7yyY06ewYMuggs
---

Em operações de ecommerce, o custo logístico de entrega dos produtos é essencial para a manutenção da competitividade. E esse custo é fortemente impactado por duas variáveis:

- O valor do carrinho
- A quantidade de itens do mesmo SKU por carrinho

Para lojas que realizam com frequência, a entrega de items em lotes (dezenas ou centenas de unidades), entregar um pedido com poucos itens ou de baixo valor, pode ser menos rentável e pouco eficiente do ponto de vista logístico. Desse modo, definir um valor mínimo do pedido pode auxiliar na melhoria de ambos fatores.

Já em operações B2B, há necessidade de se manter relações com os compradores que exigem o cumprimento de entregas periódicas ou combinadas previamente, mesmo que a demanda venha a superar as expectativas. Neste situação, definir um número máximo de itens do mesmo SKU para cada pedido, ajuda em não comprometer um número excessivo de itens do mesmo SKU em estoque. Assim como, quando a sua loja detém um produto escasso, vendido a um preço competitivo, e você deseja garantir que todos os seus clientes terão acesso a esse produto.

## Definir um valor mínimo por pedido

1. No Admin VTEX, acesse __Configurações da loja > Pedidos > Configurações__, ou digite __Pedidos__ na barra de busca no topo da página e procure pela opção __Configurações da loja / Pedidos__.
2. Na aba __Gerais__, preencha o valor desejado no campo __Valor mínimo total do carrinho__.
3. Clique em `Salvar`.

![Minimum Order Value - PT](https://images.ctfassets.net/alneenqid6w5/6bJ49E109ewRg9VUoP16rP/4b4ff920a4c1a9a98ad3450e00f47d6c/Minimum_Order_Value_-_PT.png)

>⚠️ Ao cliente é permitido montar um carrinho com um valor menor que o especificado na regra de "Valor mínimo total do carrinho". Entretanto, no momento de fechamento da compra, só serão concluídos os pedidos que estiverem com o valor igual ou acima do especificado.

## Definir uma quantidade máxima de itens do mesmo SKU por carrinho

1. No Admin VTEX, acesse __Configurações da loja > Storefront > Configurações__, ou digite __Configurações__ na barra de busca no topo da página e procure pela opção __Configurações da loja / Storefront__.
2. Na aba __Gerais__, preencha o valor desejado no campo __Quantidade máxima de um mesmo SKU no Carrinho__.
3. Clique em `Salvar`.

![Quantidade Maxima de um mesmo SKU no carrinho](//images.ctfassets.net/alneenqid6w5/Tb4rS7FposwzygY5HlEpr/bb659e068dfde3a2e4d05480422a7113/Quantidade_Maxima_de_um_mesmo_SKU_no_carrinho_PT.png)

>⚠️ Não existem limites para a quantidade máxima de itens do **mesmo SKU** por carrinho. A única restrição é referente a quantidade máxima de itens de **SKUs diferentes**, que devem ser no máximo de 300 itens por carrinho.

Caso deseja utilizar ações que impeça o usuário de exceder os valores específicados ainda durante o fluxo de compra (por exemplo, criar uma trava do botão de acionar ao carrinho quando a quantida máxima de itens for atingida), será necessário criar uma customização no front-end da loja.
