---
title: 'Seleção de sellers white label'
id: 3MemNQ4pKkWCpMdzI27AHa
status: PUBLISHED
createdAt: 2021-03-05T12:15:19.533Z
updatedAt: 2022-06-17T16:05:08.344Z
publishedAt: 2022-06-17T16:05:08.344Z
firstPublishedAt: 2021-03-05T13:12:55.997Z
contentType: tutorial
productTeam: Post-purchase
author: 2Gy429C47ie3tL9XUEjeFL
slug: selecao-de-sellers-white-label
locale: pt
legacySlug: algoritmo-de-selecao-de-white-label-sellers
subcategory: 3vhg10rO4MSmy06KeIYMIa
---

A arquitetura de uma loja VTEX permite que ela atue tanto como [marketplace](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402), quanto como seller. O marketplace é o ambiente onde o produto é vendido, também chamado de vitrine, e o seller é o dono do estoque e o responsável pelo envio do pedido.

Existem dois tipos de sellers na VTEX:

- **Seller comum:** o seller é visível na vitrine do marketplace e pode ser escolhido pelo consumidor durante sua experiência de compra.
- **[Seller white label](https://help.vtex.com/pt/tutorial/definicoes-de-conta-franquia-e-seller-white-label--5orlGHyDHGAYciQ64oEgKa):** o seller permanece oculto na experiência de compra do consumidor e é selecionado de forma automática pela plataforma VTEX para realizar o envio do pedido.

<div class = "alert alert-info">
Na VTEX, a conta franquia é um tipo de conta criada associada a uma conta principal e tem a característica de ser um seller white label da conta principal. Esse modelo de negócio é estratégico para lojistas que desejam conectar lojas físicas ao seu canal digital de venda, saiba mais em <a href="https://help.vtex.com/pt/tutorial/what-is-a-franchise-account--kWQC6RkFSCUFGgY5gSjdl">O que é conta franquia</a>.
</div>

Quando o consumidor navega no marketplace, seja na etapa da vitrine ou no carrinho, as informações sobre disponibilidade dos itens e opções de envio dos sellers apresentadas ao consumidor podem variar, a depender do marketplace saber ou não a localização desse comprador. Diante disso, este artigo se divide em:

- [Seleção de sellers na vitrine](#selecao-de-sellers-na-vitrine)
- [Seleção de sellers no carrinho](#selecao-de-sellers-no-carrinho)
- [Experiência do cliente no checkout](#experiencia-do-cliente-no-checkout)

## Seleção de sellers na vitrine

Quando os clientes navegam pelo marketplace, sua expectativa é visualizar produtos que possam ser entregues na sua localidade. Para garantir a disponibilidade dos itens apresentados na vitrine, a plataforma VTEX realiza uma seleção de sellers vinculados ao marketplace. Como nem sempre é possível identificar qual a região do cliente durante a navegação, existem dois cenários possíveis:

- [Vitrine sem localização do cliente](#vitrine-sem-localizacao-do-cliente)
- [Vitrine com localização do cliente](#vitrine-com-localizacao-do-cliente)

<div class = "alert alert-info">
Na etapa da vitrine, a plataforma VTEX não considera as opções de envio dos sellers, isso só é feito quando o cliente insere seu endereço no checkout. Portanto, é possível que o preço e a disponibilidade apresentados na vitrine sejam diferentes no fechamento da compra.
</div>

### Vitrine sem localização do cliente

Quando um cliente está navegando no marketplace e sua localização não é conhecida, os produtos apresentados são apenas aqueles do estoque do seller principal, também chamado de Seller 1, e dos [sellers abrangentes](https://help.vtex.com/pt/tutorial/seller-abrangente--5Qn4O2GpjUIzWTPpvLUfkI). Um seller deve ser configurado como abrangente quando for capaz de enviar pedidos para todas as regiões atendidas pela operação do marketplace. Em casos de mais de um seller abrangente cadastrado, o checkout seleciona aquele que tem maior saldo em estoque para o item em questão, dentre todos os sellers abrangentes.

### Vitrine com localização do cliente

Seja por meio de geocoordenadas capturadas ou por dados fornecidos pelo cliente, quando o marketplace dispõe da localização do cliente, a plataforma VTEX consegue consultar todos os sellers que atendem àquela região para exibir preço e disponibilidade de produtos na vitrine. Saiba mais em [Configurar preço e disponibilidade de SKUs por Region](https://help.vtex.com/pt/tutorial/configurar-preco-e-disponibilidade-de-skus-por-region--12ne58BmvYsYuGsimmugoc).

>⚠️ Quando a localização do cliente é conhecida, a consulta a todos os sellers é o comportamento padrão da plataforma VTEX, conforme a funcionalidade [Region v2](https://developers.vtex.com/vtex-developer-docs/changelog/region-v2-release). No entanto, é possível que algumas lojas VTEX ainda operem com o Region v1, que possui limitações na seleção de sellers para a vitrine.

## Seleção de sellers no carrinho

Quando o cliente adiciona itens ao carrinho, é possível que o marketplace disponha ou não da localidade desse cliente. A seleção de sellers vai ser diferente em cada caso, e existem dois cenários possíveis:

- [Carrinho sem endereço do cliente](#carrinho-sem-endereco-do-cliente)
- [Carrinho com endereço do cliente](#carrinho-com-endereco-do-cliente)

### Carrinho sem endereço do cliente

Enquanto o marketplace ainda não sabe a localização do cliente, a disponibilidade e o preço dos produtos são apenas aqueles oferecidos pelo seller principal e [sellers abrangentes](https://help.vtex.com/pt/tutorial/seller-abrangente--5Qn4O2GpjUIzWTPpvLUfkI). Um seller é configurado como abrangente quando é capaz de enviar pedidos para todas as regiões atendidas pela operação do marketplace. Em casos de mais de um seller abrangente cadastrado, o checkout seleciona aquele que tem maior saldo em estoque para o item em questão, dentre todos os sellers abrangentes.

### Carrinho com endereço do cliente

Quando o cliente insere seu endereço no carrinho, a plataforma da VTEX realiza uma seleção de sellers, garantindo condições otimizadas de custo e prazo no envio dos itens. Para manter a alta performance da plataforma VTEX, a seleção é composta de no máximo doze sellers, sendo até seis para envio do tipo entrega e até seis para retirada.

Os primeiros critérios para a seleção de sellers white label são:

- Menor custo na [planilha de frete](https://help.vtex.com/pt/tutorial/planilha-de-frete--tutorials_127) da [política de envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140) do seller.
- Menor tempo na planilha de frete da política de envio do seller.
- Ter [inventário](https://help.vtex.com/pt/tutorial/gerenciar-itens-em-estoque) disponível.

Após filtrar todos os sellers com base nos critérios apresentados, é feita uma seleção de até seis sellers para cada tipo de envio:

- [Entrega](#tipo-de-envio-entrega): o cliente recebe o pedido no seu endereço.
- [Retirada](#tipo-de-envio-retirada): o cliente retira o pedido em um [ponto de retirada](https://help.vtex.com/pt/tutorial/pontos-de-retirada--2fljn6wLjn8M4lJHA6HP3R).

<div class = "alert alert-info">
Por padrão, do total de até doze sellers, até seis realizam a entrega e até seis a retirada. No entanto, se menos de seis sellers atenderem aos critérios de um tipo de envio, é possível que a lista de sellers do outro tipo seja maior que seis. Por exemplo, se somente cinco sellers entregam o pedido, a lista de retirada pode ser composta de sete sellers, de forma a totalizar doze sellers.
</div>

#### Tipo de envio: entrega

A seleção de até seis sellers white label para envio do tipo entrega é feita da seguinte forma:

1. A plataforma VTEX considera uma lista com todos os SKUs que o cliente adicionou ao carrinho.
2. É feita uma seleção de sellers que entregam na região do cliente pelo menos um SKU da lista. Sellers que não possuem no seu [inventário](https://help.vtex.com/pt/tutorial/gerenciar-itens-em-estoque--tutorials_139) todas as unidades de pelo menos um SKU são desconsiderados.
  > Exemplo: em um pedido com cinco blusas vermelhas e três blusas brancas, o seller precisa ser capaz de entregar no mínimo as cinco blusas vermelhas ou as três blusas brancas.
3. A plataforma VTEX seleciona o seller que atende mais SKUs da lista. 
4. É realizada uma nova etapa de seleção, na qual são desconsiderados os SKUs entregues pelo seller já escolhido.
5. O próximo seller que atender mais SKUs é selecionado e assim sucessivamente, até que todos os SKUs no carrinho sejam atendidos.
6. A partir dos sellers selecionados para cobrir o carrinho, a plataforma VTEX calcula as combinações menos numerosas de sellers.
7. Dentre essas combinações, é feita uma lista de, no máximo, seis sellers para envio do tipo entrega.

<div class = "alert alert-info">
É possível que em alguma etapa da seleção haja um empate de sellers. Quando isso ocorre, a seleção se divide em duas frentes, de forma a selecionar:
<ul>
  <li>Até três sellers que apresentam o melhor custo.</li>
  <li>Até três sellers que apresentam o melhor prazo.</li>
</ul>
</div>

Se existir um empate entre sellers nos critérios de melhor custo ou prazo, o critério do desempate é o seller ter a maior quantidade de SKUs em estoque.

#### Exemplo 1 para envio tipo entrega

Um cliente adicionou ao carrinho cinco SKUs. Dentre os sellers que entregam na sua região, os sellers A, B, C e D, cada um possui no [inventário](https://help.vtex.com/pt/tutorial/gerenciar-itens-em-estoque--tutorials_139) apenas parte dos itens, conforme a imagem a seguir:

![print_selecao_seller_white_label_1](https://images.ctfassets.net/alneenqid6w5/23CWM1CDejDvKqF31O2DH9/4fdb2ed25e8d3d52eef96e5c0e2fd908/print_selecao_seller_white_label_1.png)

A plataforma VTEX seleciona o seller que tem disponível no estoque a quantidade máxima de SKUs do carrinho. Neste caso, trata-se do Seller B, o único que entrega três SKUs. 

Depois que o Seller B é selecionado, existem ainda dois SKUs não entregues. Se um único seller enviasse ambos, esse seria o fator decisivo da seleção, pois o objetivo é reunir o menor número de sellers para atender o carrinho. No entanto, são necessários os sellers A e C para entregar os SKUs 1 e 4, conforme imagem a seguir:

![print_selecao_seller_white_label_2](https://images.ctfassets.net/alneenqid6w5/23CWM1CDejDvKqF31O2DH9/3f7b71abf734ae7c55d8b40d3a76f3c0/print_selecao_seller_white_label_2.png)

Na primeira imagem, o Seller C era capaz de entregar os SKUs 3 e 4, e o Seller D entregava o SKU 5. No entanto, o Seller B foi selecionado para entregar esses itens, de forma que os SKUs são desconsiderados nas outras etapas de seleção. Isso foi representado com a remoção da seta do Seller C para o SKU 3 e do Seller D para o SKU 5.

O resultado da seleção para entrega é uma combinação dos sellers A, B e C.

#### Exemplo 2 para envio tipo entrega

Um cliente adicionou cinco SKUs ao carrinho e existem quatro sellers que entregam na sua região, os sellers A, B, C e D. Nenhum deles tem no [inventário](https://help.vtex.com/pt/tutorial/gerenciar-itens-em-estoque--tutorials_139) todos os itens, conforme imagem a seguir:

![print_selecao_seller_white_label_3](https://images.ctfassets.net/alneenqid6w5/23CWM1CDejDvKqF31O2DH9/26cd86b37e5e47ada6f15cc08acfbfbc/print_selecao_seller_white_label_3.png)

A plataforma VTEX seleciona o seller que tem disponível no estoque o maior número de SKUs do carrinho. Tanto o Seller B quanto o D são capazes de entregar três itens, e como ambos entregam o SKU 3, existe uma concorrência.

Em casos de empate no critério da cobertura do carrinho, a seleção se divide em duas frentes paralelas:

- Entrega mais rápida
- Entrega mais barata

Digamos que o Seller B tenha a entrega mais barata e que o Seller D tenha a mais rápida. Para cada situação, será feita uma combinação de sellers que atendem todos os itens do carrinho.

- **Entrega mais rápida:** quando o Seller D é selecionado, restam como não entregues os SKUs 3 e 4. O Seller C consegue entregar ambos, sendo o escolhido, e o resultado da seleção é a combinação dos seller D e C.

![print_selecao_seller_white_label_4](https://images.ctfassets.net/alneenqid6w5/5OVQXuRwsEWGUxy3hocfOF/4751f13e35a8187655c04b11c67f6079/print_selecao_seller_white_label_4.png)

- **Entrega mais barata:** quando o Seller B é selecionado, restam como não entregues os SKUs 1 e 4. Como somente o Seller A entrega o SKU 1, e somente o Seller C entrega o SKU 4, o resultado da seleção é uma combinação dos sellers A, B e C. 

![print_selecao_seller_white_label_5](https://images.ctfassets.net/alneenqid6w5/2zLEDj7yHw54HufNUeC8OT/d69cee9bb79c876adb571e98ccd0060c/print_selecao_seller_white_label_5.png)

Nas imagens para entrega mais barata e mais rápida, foram retiradas as setas repetidas de sellers que entregavam SKUs já cobertos pelos sellers B e D. O motivo é que, nas sucessivas etapas de seleção, SKUs cobertos são desconsiderados.

O resultado da seleção de sellers para envio do tipo entrega são os sellers D e C para entrega mais rápida, e os sellers A, B e C para a mais barata. É possível que um seller faça parte das duas seleções, como é o caso do Seller C.

#### Tipo de envio: retirada

Por padrão, a seleção da lista de sellers para envio do tipo retirada é feita sem incluir os sellers escolhidos para o tipo entrega. O objetivo é que as duas análises não concorram entre si.

A seleção de até seis sellers para envio do tipo retirada é planejada para o cliente obter todos os itens do carrinho em um único [ponto de retirada](https://help.vtex.com/pt/tutorial/pontos-de-retirada--2fljn6wLjn8M4lJHA6HP3R), e ocorre da seguinte forma:

1. A plataforma VTEX considera uma lista com todos os SKUs que o cliente adicionou ao carrinho.
2. É feita uma seleção de sellers que entregam na região do cliente pelo menos um SKU da lista. Sellers que não possuem no seu inventário todas as unidades de pelo menos um SKU são desconsiderados.
  > Exemplo: em um pedido com cinco blusas vermelhas e três blusas brancas, o seller precisa ser capaz de enviar no mínimo as cinco blusas vermelhas ou as três blusas brancas.
3. A plataforma VTEX seleciona os sellers que atendem a maioria dos itens da lista, garantindo a maior cobertura de carrinho.
4. Desse total, são selecionados os sellers com os pontos de coleta mais próximos ao endereço do cliente.
5. A seleção então se divide em duas frentes paralelas:
    - **Retirada com melhor custo:** são selecionados até três sellers com base nos seguintes critérios, nesta ordem de relevância:
      - **Melhor custo:** sellers que oferecem menores preços para retirada do pedido.
      - **Melhor prazo:** sellers que disponibilizam os produtos para a coleta em menos tempo.
    - **Retirada com melhor prazo:** são selecionados até três sellers com base nos seguintes critérios, nesta ordem de relevância:
      - **Melhor prazo:** sellers que disponibilizam os produtos para a coleta em menos tempo.
      - **Melhor custo:** sellers que oferecem menores preços para retirada do pedido.

<div class = "alert alert-info">
Quando existe um empate no critério de melhor custo ou melhor prazo, o fator de desempate é o seller ter a maior quantidade de SKUs no estoque.
</div>

##### Exemplo para envio tipo retirada

Um cliente adiciona ao carrinho seis SKUs e existem oito sellers capazes de enviar pelo menos um destes SKUs por retirada. Para calcular o envio, é preciso considerar:

- A disponibilidade de SKUs no estoque dos sellers.
- A distância entre o ponto de retirada e o endereço do cliente.
- O custo para retirada.
- O tempo de preparo para a retirada.

Os valores de cada seller foram comparados na tabela a seguir:

| **Sellers** | **Disponibilidade de SKUs do total de 6 itens** | **Distância entre endereço do cliente e ponto de retirada** | **Custo para retirada** | **Tempo de preparo para a retirada** |
| ---------- | ---------- | ---------- | ---------- | ---------- |
|  Seller 1 | 5 | 1 km | 10 reais | 1 dia |
|  Seller 2 | 4 | 1 km | 0 | 1 dia |
|  Seller 3 | 2 | 1 km | 0 | 1 dia |
|  Seller 4 | 5 | 5 km | 0 | 0 |
|  Seller 5 | 3 | 5 km | 0 | 0 |
|  Seller 6 | 4 | 1 km | 10 reais | 0 |
|  Seller 7 | 1 | 10 km | 0 | 0 |
|  Seller 8 | 2 | 5 km | 0 | 0 |

A seleção de sellers para retirada vai definir uma lista de até seis sellers, sendo até três priorizando a retirada mais barata, e até três a mais rápida.

Para definir os sellers para retirada mais barata, os seguintes critérios são considerados, nesta ordem de aplicação:

1. Seller com mais SKUs disponíveis no estoque.
2. Menor distância entre o endereço do cliente e o ponto de retirada.
3. Menor custo de envio.
4. Menor tempo de preparo do pedido para a retirada.

O resultado da seleção de até três sellers para retirada mais barata é apresentado na tabela a seguir:

| **Posição na seleção** | **Sellers** | **Disponibilidade de SKUs do total de 6 itens** | **Distância entre endereço do cliente e ponto de retirada** | **Custo para retirada** | **Tempo de preparo para a retirada** |
| ---------- | ---------- | ---------- | ---------- | ---------- | ---------- |
| 1º |  Seller 1 | 5 | 1 km | 10 reais | 1 dia |
| 2º |  Seller 4 | 5 | 5 km | 0 | 0 |
| 3º |  Seller 2 | 4 | 1 km | 0 | 1 dia |
| 4º |  Seller 6 | 4 | 1 km | 10 reais | 0 |
| 5º |  Seller 5 | 3 | 5 km | 0 | 0 |
| 6º |  Seller 3 | 2 | 1 km | 0 | 1 |
| 7º |  Seller 8 | 2 | 5 km | 0 | 0 |
| 8º |  Seller 7 | 1 | 10 km | 0 | 0 |

- **Seller 1 em primeiro lugar:** tem cinco dos seis SKUs em estoque, seguido da menor distância entre o ponto de retirada e o endereço do cliente.
- **Seller 4 em segundo lugar:** assim como o Seller 1, tem cinco SKUs em estoque, mas apresenta uma distância maior.
- **Seller 2 em terceiro lugar:** apesar de empatar com o Seller 6 pelos dois critérios principais, apresenta um custo menor.

Em paralelo, a plataforma VTEX realiza a seleção de sellers com a retirada mais rápida. Para isso, são considerados os seguintes critérios, nesta ordem de relevância:

1. Seller com mais SKUs do pedido disponíveis no estoque.
2. Menor distância entre o endereço do cliente e o ponto de retirada.
3. Menor tempo de preparo do pedido para a retirada.
4. Menor custo de envio.

O resultado da seleção de até três sellers para a retirada mais rápida é apresentado na tabela a seguir:

| **Posição na seleção** | **Sellers** | **Disponibilidade de SKUs do total de 6 itens** | **Distância entre endereço do cliente e ponto de retirada** | **Tempo de preparo para a retirada** | **Custo para retirada** |
| ---------- | ---------- | ---------- | ---------- | ---------- | ---------- |
| 1º |  Seller 1 | 5 | 1 km | 1 dia | 10 reais |
| 2º |  Seller 4 | 5 | 5 km | 0 | 0 |
| 3º |  Seller 6 | 4 | 1 km | 0 | 10 reais |
| 4º |  Seller 2 | 4 | 1 km | 1 dia | 0 |
| 5º |  Seller 5 | 3 | 5 km | 0 | 0 |
| 6º |  Seller 3 | 2 | 1 km | 1 dia | 0 |
| 7º |  Seller 8 | 2 | 5 km | 0 | 0 |
| 8º |  Seller 7 | 1 | 10 km | 0 | 0 |

- **Seller 1 em primeiro lugar:** tem cinco dos seis SKUs em estoque, seguido da menor distância entre o ponto de retirada e o endereço do cliente.
- **Seller 4 em segundo lugar:** assim como o Seller 1, tem cinco SKUs em estoque, mas apresenta uma distância maior.
- **Seller 6 em terceiro lugar:** apesar de empatar com o Seller 2 pelos dois critérios principais, apresenta o menor tempo de preparo para retirada.

Como os sellers 1 e 4 entraram tanto na lista de seleção de retirada mais rápida como na mais barata, o resultado final da seleção para retirada são os sellers 1,2, 4 e 6. Isso significa que somente quatro sellers foram escolhidos, sendo que a lista poderia ter até seis. As duas vagas que sobraram podem ser preenchidas por sellers para envio tipo entrega, de forma a se ter quatro sellers para retirada e oito para entrega, mantendo o total de doze sellers.

## Experiência do cliente no checkout

A partir da seleção de doze sellers, a plataforma VTEX calcula opções de entrega e retirada, de forma a otimizar o custo e o prazo do envio do pedido.

No checkout, o cliente pode:

- Definir o tipo de envio: entrega, retirada ou uma combinação de ambos.
- Escolher um [ponto de retirada](https://help.vtex.com/pt/tutorial/pontos-de-retirada--2fljn6wLjn8M4lJHA6HP3R), se optar por retirar o pedido.
- Avaliar e selecionar condições de custo e prazo do envio do pedido.

Por se tratar da seleção de sellers white label, o cliente não é capaz de identificar quem são os sellers responsáveis pelo envio do pedido. O que vai aparecer na experiência de compra do consumidor são as opções de envio, do tipo normal, econômica ou expressa, por exemplo.
