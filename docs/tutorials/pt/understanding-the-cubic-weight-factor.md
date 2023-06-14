---
title: 'Calcular o fator cúbico de peso'
id: tutorials_128
status: PUBLISHED
createdAt: 2017-04-27T22:17:52.970Z
updatedAt: 2022-11-08T19:15:57.550Z
publishedAt: 2022-11-08T19:15:57.550Z
firstPublishedAt: 2017-04-27T23:00:44.419Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slug: como-o-peso-cubado-e-calculado
locale: pt
legacySlug: como-o-peso-cubado-e-calculado
subcategory: 7fTH6bP0C4IaM8qWi0kkQC
---

O fator cúbico servirá para calcular um novo peso do pacote. Esse novo peso levará em consideração, além do peso dos produtos, o volume deles. Isto é necessário para que o preço a ser cobrado pelo frete tenha uma relação justa entre peso e volume ocupados.

## Cubagem

A cubagem é a relação existente entre o volume e o peso da mercadoria, que é mensurado através de um cálculo matemático onde se verificará o quanto a carga vai corresponder em peso em função do volume que ela ocupar no veículo de transporte.

A função da cubagem no transporte é evitar que se ocupe todo o espaço físico do veículo sem utilizar toda a sua capacidade em peso ou vice-versa. Desta forma, o conceito de cubagem está ligado à capacidade de se preencher a carga de um veículo utilizando-se todo o seu volume disponível para carga e capacidade de peso ou tonelagem.

- __Peso Real:__ é aquele indicado na balança.
- __Peso Cubado:__ é a forma de cálculo que determina o espaço efetivamente ocupado pelo pacote no veículo de transporte.

## Fator de Cubagem

O fator de cubagem é o coeficiente resultante da relação entre peso e volume mais adequada e comercialmente justa à cubagem de aeronaves, conforme recomendado pela IATA (entidade internacional que congrega as empresas aéreas).

## Cálculo

O cálculo do peso cubado é realizado efetuando a multiplicação do Comprimento pela Largura e pela Altura e, em seguida, a divisão pelo Fator de cubagem fornecido pela transportadora.

Observe o exemplo a seguir:

![](//images.contentful.com/alneenqid6w5/3KZDUQlPBYEY8mSwqQgW6k/15cef41598f4fc1359f482cddbcca756/pesocubado.jpg)

- __Dimensões do pacote:__ `50cm x 60cm x 15cm`
- __Peso real do pacote:__ `9kg`
- __Fator de cubagem:__ `6.000`
- __Peso cubado:__ `50cm * 60cm * 15cm / 6.000 = 7,5kg`

Ao comparar o peso real com o peso cubado do pacote, a transportadora fará a cobrança pelo peso real, pois ele é maior que o peso cubado.

Porém, o cálculo acima é apenas ilustrativo. Na transportadora, o valor cadastrado como fator cúbico será multiplicado ao produto de `Comprimento x Largura x Altura`. Ou seja, o cálculo a ser feito será `Comprimento x Largura x Altura x Fator Cúbico`.

Ou seja, caso o valor oferecido pela sua transportadora `6.000`, é necessário primeiro realizar o cálculo onde este valor dividirá 1.000: Exemplo: `1.000 / 6.000 = 0,167`.

Ao realizar o cadastro da sua transportadora, esse é o valor que você deve preencher no campo __Fator Cúbico de Peso__.

![PesoCubado](//images.contentful.com/alneenqid6w5/ZzHF9fwwec6c6m2AiyYGS/37343a8bb4858cdf296f5a3c450567f3/PesoCubado.png)

Portanto, o cálculo final seria:
- __Dimensões do pacote:__ `50cm x 60cm x 15cm`
- __Peso real do pacote:__ 9kg
- __Peso cubado__: `50cm x 60cm x 15cm x 0,167 = 7.515kg`

<div class="alert alert-info">
  <p>Verifique com sua transportadora se a unidade de medidas está em gramas, que é a unidade utilizada na VTEX.</p>
</div>
