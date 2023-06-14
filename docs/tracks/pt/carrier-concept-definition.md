---
title: 'O que são transportadoras'
id: 3fLedVI57srjBDDxxGgOWe
status: DRAFT
createdAt: 2019-10-08T19:46:57.025Z
updatedAt: 2022-03-08T18:43:18.044Z
publishedAt: 
firstPublishedAt: 2019-10-21T12:50:14.542Z
contentType: trackArticle
productTeam: Post-purchase
slug: transportadora-definicao-de-conceito
locale: pt
trackId: 13TFDwDttPl9ki9OXQhyjx
trackSlugPT: logistica-101
---

Uma transportadora é uma empresa responsável por fazer a distribuição dos SKUs vendidos por uma loja. Assim como o estoque e a doca, a transportadora também é uma das etapas da rota logística de uma loja - a última desse processo.  

Geralmente, uma única loja tem várias transportadoras associadas a ela. Contudo, nesse caso, as transportadoras têm características distintas entre si, o que permite uma personalização na entrega dos SKUs. 

## Opções de envio
As opções de envio são os atributos que diferenciam as transportadoras. Essas características são configuradas no momento de cadastrar uma transportadora no sistema.  

### Limites dos Pacotes
O limite dos pacotes é composto pelos valores “Soma das medidas A+L+C” e “Medida de maior aresta”. Esses atributos determinam o tamanho máximo dos pacotes comportados por uma transportadora. 

Caso um produto ultrapasse essas medidas, existem duas possibilidades de envio: ou o pedido é dividido em mais de um pacote ou outra transportadora, que comporte tamanhos maiores, fará o envio. 

### Conversão de Dados
A conversão de dados consiste nos atributos “Fator cúbico de peso” e “Usar o peso cúbico apenas se este passar de”. Ambos os valores são usados para calcular a cubagem de um pacote - medida que leva em conta o peso e o volume dos pacotes. 

### Finais de semana e feriados
O atributo “Finais de semana e feriados” define se uma determinada transportadora fará entregas fora dos dias úteis ou não. 

### Mínimo de itens na remessa
Para que uma entrega seja feita em remessas, é preciso estabelecer o mínimo de itens que irá compor a montagem dessas remessas. Neste caso, o valor “Somente entregará caso o total dos itens na remessa seja múltiplo de:” determina o número mínimo de itens para que esse envio seja concluído.

### Preço mínimo dos produtos
Por fim, o último atributo das opções de envio é “O valor total dos produtos deve ser maior/menor que”. Determina um intervalo opcional de valores permitidos para entregas pela transportadora e deve ser definido a partir da regra de negócio da loja. 

<div class=”alert alert-warning”>
Vale ressaltar que caso uma entrega não atenda a algumas das opções de envio pré-estabelecidas, a transportadora selecionada <strong>não</strong> realizará a entrega.
</div>
