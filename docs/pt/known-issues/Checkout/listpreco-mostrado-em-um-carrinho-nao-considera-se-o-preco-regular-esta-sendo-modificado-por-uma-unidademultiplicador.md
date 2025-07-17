---
title: "ListPreço mostrado em um carrinho não considera se o preço regular está sendo modificado por uma unidadeMultiplicador"
id: 13cdmEllp9RB30DSJ9Ttka
status: PUBLISHED
createdAt: 2022-05-13T16:53:11.761Z
updatedAt: 2022-11-25T21:51:31.513Z
publishedAt: 2022-11-25T21:51:31.513Z
firstPublishedAt: 2022-05-13T16:53:12.286Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: listpreco-mostrado-em-um-carrinho-nao-considera-se-o-preco-regular-esta-sendo-modificado-por-uma-unidademultiplicador
locale: pt
kiStatus: Backlog
internalReference: 578649
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O ListPrice de um carrinho interage com o preço exibido para mostrar um preço antigo versus o atual, em um assunto para destacar descontos.

O preço exibido é o Preço de Venda, que além das promoções, também é modificado automaticamente por um "multiplicador de unidade", caso exista. Como um artigo de mercearia, vendido em pacotes de 0,3 kg (sendo a unidadeMultiplicador), onde o preço regular (por exemplo: $4) está sempre relacionado a cada kg. Para este exemplo, o Preço de Venda será "Preço original*unitMultiplier", totalizando $1,2.

O ListPrice é mostrado automaticamente quando é diferente (e maior do que) o preço exibido. Considerando o Preço de Venda modificado por um UnitMultiplier, o frontend mostrará ListPrice=$4,00 e Price=$1,20, mas sem ser um desconto real (mas já incluindo um se ele existir).



## Simulação


Criar um carrinho com itens que combinem com o exemplo anterior é suficiente para recriar o cenário.



## Workaround


Recomendamos esconder o ListPrice no frontend para itens que tenham um UnitMultiplier.

