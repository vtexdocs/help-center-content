---
title: 'Arredondamento de Preços'
id: tutorials_4448
status: PUBLISHED
createdAt: 2017-04-27T21:50:36.466Z
updatedAt: 2023-05-18T19:51:25.754Z
publishedAt: 2023-05-18T19:51:25.754Z
firstPublishedAt: 2017-04-27T23:11:16.490Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 46G4yHIZerH7B9Jo0Iw5KI
slugEN: rounding-rules
legacySlug: preco-psicologico-v2
locale: pt
subcategoryId: 2FWsvQlrVYu24myUgwY4Y8
---

O conceito de arredondamento de preços visa o “arredondamento”, para evitar preços quebrados e fazer com que comercialmente se apresentem como uma vantagem para o cliente. Para cadastrar o arredondamento de preços, siga os passos abaixo:

1. No Admin VTEX, acesse *Produtos > Regras de arredondamento de preços*, ou digite *Regras de arredondamento de preços* na barra de busca no topo da página.

Nesta tela, você poderá, por exemplo, ajustar um preço de R$19,85 para R$19,90; ou de R$48,70 para R$48,99. Essas modificações serão feitas de acordo com o que o lojista entenda como mais chamativo para seu público-alvo e seu ramo de negócio, e isso impactará na apresentação de todos os preços da loja.

## Como funciona 

Para ter os preços arredondados, é necessário criar uma regra. Por meio dela, você escolherá a faixa de preço que será arredondada, a casa decimal e o método de arredondamento. É possível criar a regra para centavos, décimo de centavo ou unidade, e você pode escolher entre três métodos de arredondamento: &#8220;nove&#8221;, &#8220;noves&#8221; e &#8220;zero&#8221;. 

### Exemplos

#### Centavo:

- **Nove:** adiciona um 9 com zeros à direita. Ex.: R$ 59,56 → R$ 59,59
- **Zero:** adiciona um 0 com zeros à direita. Ex.: R$ 20,56 → R$ 20,60

#### Décimo de centavo:

- **Nove:** adiciona um 9 com zeros à direita. Ex.: R$ 59,56 → R$ 59,90
- **Noves:** adiciona um 9 com noves à direita. Ex.: R$ 5,07 → R$ 4,99
- **Zero:** adiciona um 0 com zeros à direita. Ex.: R$ 263,56 → R$ 264,00

#### Unidade:

- **Nove:** adiciona um 9 com zeros à direita. Ex.: R$ 59,56 → R$ 59,00
- **Noves:** adiciona um 9 com noves à direita. Ex.: R$ 5,07 → R$ 9,99
- **Zero:** adiciona um 0 com zeros à direita. Ex.: R$ 263,56 → R$ 260,00

### Critério de arredondamento 

O arredondamento utiliza a *diferença absoluta* entre o preço original e valores próximos com o final desejado. Aplicar o método **Noves** ao valor *9,70* fará com que ele seja arredondado para *9,99*, pois dentre *8,99* e *9,99* o valor mais próximo é o segundo.

Sendo assim, é importante sempre lembrar que o arredondamento será por aproximação do valor com o final desejado. Dessa forma, o usuário poderá arredondar o preço para um valor mais baixo ou mais alto do que o valor original, e essa variação será de acordo com a escolha da casa decimal.

- **Centavo:** variação de até 5 centavos; 
- **Décimo de centavo:** variação de até 50 centavos; 
- **Unidade:** variação de até 5 reais.

No final, o usuário poderá visualizar preços com as configurações da regra e poderá testar um preço para ver como ele ficará com o arredondamento da regra.

Abaixo é possível ver exemplos dos fluxos de inclusão, edição e exclusão de regras de arredondamento de preços. Também é possível conferir como simular preços para uma regra específica.

*Fluxo de criação de uma regra*

![config-arrendodamento-PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pre%C3%A7os/arredondamento-de-pre%C3%A7os/arredondamento-de-precos_1.gif)

*Fluxo de alteração de uma regra*

![editar-arrendodamento-PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pre%C3%A7os/arredondamento-de-pre%C3%A7os/arredondamento-de-precos_2.gif)

*Fluxo de exclusão de uma regra*

![deletar-arrendodamento-PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pre%C3%A7os/arredondamento-de-pre%C3%A7os/arredondamento-de-precos_3.gif)

*Simulação de preço para uma regra*

![teste-arrendodamento-PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pre%C3%A7os/arredondamento-de-pre%C3%A7os/arredondamento-de-precos_4.gif)
