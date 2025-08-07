---
title: 'Promoções para cenários específicos'
id: jOu9b69mKbrTDfSJYAawy
status: PUBLISHED
createdAt: 2020-01-22T13:55:51.326Z
updatedAt: 2023-10-23T17:08:04.859Z
publishedAt: 2023-10-23T17:08:04.859Z
firstPublishedAt: 2020-01-22T15:01:20.187Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: promotions-for-specific-scenarios
locale: pt
trackId: 6asfF1vFYiZgTQtOzwJchR
trackSlugEN: promocoes
---

Como explicado no tópico anterior, a Promoção Regular é o tipo mais genérico de promoção na VTEX.

No entanto, às vezes sua loja pode ter a necessidade de criar promoções para cenários mais específicos.

É para atender a esses cenários que disponibilizamos os tipos de promoções explicados abaixo:

- Compre Junto.
- Leve Mais por Menos.
- Desconto Progressivo.
- Compre e Ganhe.
- Limite de itens com promoção no carrinho.

<div class="alert alert-info">
As telas de configuração de todas as promoções apresentam as mesmas seções principais que as explicadas no artigo sobre Promoção Regular. As opções presentes nessas seções se repetem em todas as promoções, à exceção de algumas configurações específicas de condições para aplicação da promoção. Por isso, neste artigo nos concentramos nessas configurações específicas.
</div>

### Compre Junto

A promoção do tipo Compre Junto é usada para conceder desconto para dois ou mais produtos quando colocados ao mesmo tempo no carrinho.

A tela de configuração da promoção oferece duas listas de SKUs, que podem ser adicionados manualmente ou por planilha.

Você pode, então, definir um valor de desconto para a cada uma dessas listas. Se, por exemplo, a lista 1 tem 10% de desconto e a lista 2 tem 5% de desconto, quando o carrinho tiver pelo menos um produto de cada uma dessas listas, será concedido um total de 10% sobre o valor dos itens da lista 1 e um desconto de 5% sobre o valor dos itens da lista 2.

![5 1](//images.ctfassets.net/alneenqid6w5/365uWey6OG9w1jMlIbi11L/108d507cd3957a5e9c6b128cd920d543/5_1.png)

Dois exemplos desse tipo de promoção seriam "Compre uma calça e ganhe 10% na compra de um cinto" e "Compre um par de tênis + um par de meias e ganhe 15% de desconto".

Para entender a promoção Compre Junto em mais detalhes, veja o artigo [Criar promoção Compre Junto](https://help.vtex.com/pt/tutorial/compre-junto--tutorials_323).

### Leve Mais por Menos

A promoção do tipo Leve Mais por Menos é usada para conceder desconto quando o cliente adiciona várias unidades do mesmo produto ao carrinho. Um exemplo clássico dessa promoção seria "Leve 4 e pague 3".

Na configuração da promoção Leve Mais por Menos, a loja deve definir a quais coleções ou SKUs ela será aplicada. Em seguida, escolha o número de itens no carrinho para ela funcionar e o número de itens com desconto.

![Leve mais por menos](//images.ctfassets.net/alneenqid6w5/5LQErZWrN4WyX8ZuIBEMPM/88a65536af3f8ee11f7fb7881056176b/Promo__es.png)

Por exemplo:
- A cada `3` produtos, o cliente levará `1` produto `grátis`.
- A cada `5` produtos, o cliente levará `2` produtos `com desconto` de `30%`.

Para entender a promoção Leve Mais por Menos em mais detalhes, veja o artigo [Criar promoção Leve Mais por Menos](https://help.vtex.com/pt/tutorial/leve-mais-por-menos--tutorials_325).

### Desconto Progressivo

A promoção do tipo Desconto Progressivo é usada quando a loja deseja oferecer um percentual de desconto para determinada quantidade de produtos inseridos no carrinho. 

Um exemplo seria: “Na compra de 5kg de ração, receba 5% de desconto. Adicione mais 5kg e receba mais 10%”.

Na configuração da promoção de Desconto Progressivo, a loja deve definir a quais coleções ou SKUs ela será aplicada. Em seguida, escolha a primeira quantidade e o primeiro desconto aplicado. Por exemplo: para os primeiros `3` itens, o cliente receberá um desconto de `5%`.

Para continuar a progressão do desconto, clique no botão de "+". Uma nova linha será adicionada, e então você poderá adicionar um novo desconto. Por exemplo: para os próximos 2 produtos, o cliente receberá mais 5% de desconto. E assim por diante.

![5 3](//images.ctfassets.net/alneenqid6w5/28KPsHCVKBF9ZgRUzwHudZ/81dcb7a88df530c81a8468e572aec43c/5_3.png)

Para entender a promoção de Desconto Progressivo em mais detalhes, veja o artigo [Como funciona o desconto progressivo](https://help.vtex.com/pt/tutorial/desconto-progressivo--tutorials_324).

### Compre e Ganhe

A promoção do tipo Compre e Ganhe é usada para oferecer frete grátis ou um brinde caso determinado produto seja comprado. Por exemplo, “compre uma televisão e não pague o frete” ou “compre um video game e ganhe um jogo”.

O desconto aplicado (frete grátis ou brinde) deve ser definido nos dados gerais da promoção. Depois, a loja deve escolher as coleções ou SKUs aos quais ela será aplicada. E, por fim, deve definir a quantidade mínima de itens no carrinho para a promoção funcionar.

![5 4](//images.ctfassets.net/alneenqid6w5/59ir5nkFky3fqbvr6fh4ht/156bd36222aaf26eeae18644e8ef2075/5_4.png)

Para entender a promoção do tipo Compre e Ganhe em mais detalhes, veja o artigo [Como funciona a promoção Compre e Ganhe](https://help.vtex.com/pt/tutorial/compre-e-ganhe--tutorials_322).

### Limite de itens com promoção no carrinho

Esta configuração define quantos itens do carrinho serão afetados pela promoção.

<div class="alert alert-warning">
É importante ressaltar que essa possibilidade é <strong>válida apenas para uma promoção regular com desconto percentual</strong>.
</div>

Depois de preencher todos [os campos de uma promoção regular](https://help.vtex.com/pt/tutorial/regular-promotion--tutorials_327) com desconto percentual, você pode selecionar a opção __Definir quantidade máxima de itens afetados por carrinho__ na seção __Restrições e limites de uso__.

![Limite itens - PT](//images.ctfassets.net/alneenqid6w5/1W6ZYterIepCud41XJr4UQ/efa4913d768b6c60a738ade38b36250c/Limite_itens_-_PT.png)

Por default, a seleção __ilimitado__ está ativa, aplicando a promoção em todos os itens do carrinho, como ilustrado no diagrama abaixo:

![Caso ilimitado - PT](//images.ctfassets.net/alneenqid6w5/ryqePV18B6yVGLoUnqHdg/406ea14fc3a931027876309e46cb6afa/Caso_ilimitado.png)

Para restringir o número de itens do carrinho que receberão o desconto, você pode escolher entre uma das seguintes opções:

- __Itens por carrinho__: essa configuração limita a aplicação da promoção a um número de itens do carrinho. Assim que o limite for atingido, a promoção não será aplicada para o restante do carrinho. O sistema utiliza o preço como critério de escolha, dessa forma, os itens com preço menor serão os primeiros a serem afetados.

![Caso por item - PT](//images.ctfassets.net/alneenqid6w5/7yXbUrBWdqkcWyvXaLa7Hc/5de06c1250b310850722f31a63c36418/Caso_por_item.png)

- __Itens por produto__: essa configuração limita a promoção a um número de unidades de cada produto. Como no exemplo abaixo, apenas duas unidades por produto serão elegíveis para a promoção. O preço mais baixo define os itens de cada produto elegíveis para a promoção.

![Caso por produto - PT](//images.ctfassets.net/alneenqid6w5/55wWvZwHyjvrfk01vA9PRX/972beb813354aafcfa65c25ae5d37135/Caso_por_produto.png)

- __Itens por SKU__: essa configuração limita a promoção a um número de unidades para cada SKU no carrinho. Como no exemplo abaixo, apenas duas unidades de cada SKU serão elegíveis para a promoção. Assim como no caso anterior, será o preço mais baixo que definirá os itens elegíveis para a promoção.

![Caso por SKU - PT](//images.ctfassets.net/alneenqid6w5/2UCLkXZNHNKJtecRIeoYuF/c73bd02637a38ed2693ba5d2f74a8efa/Caso_por_SKU.png)
