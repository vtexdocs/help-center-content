---
title: 'Calcular o fator cúbico de peso'
id: tutorials_128
status: PUBLISHED
createdAt: 2017-04-27T22:17:52.970Z
updatedAt: 2023-12-19T17:17:26.713Z
publishedAt: 2023-12-19T17:17:26.713Z
firstPublishedAt: 2017-04-27T23:00:44.419Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slugEN: understanding-the-cubic-weight-factor
locale: pt
legacySlug: como-o-peso-cubado-e-calculado
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---

O fator cúbico servirá para calcular um novo peso do pacote. Esse novo peso levará em consideração, além do peso dos produtos, o volume deles. Isto é necessário para que o preço a ser cobrado pelo frete tenha uma relação justa entre peso e volume ocupados.

## Cubagem

A cubagem é a relação existente entre o volume e o peso da mercadoria, que é mensurado através de um cálculo matemático onde se verificará o quanto a carga vai corresponder em peso em função do volume que ela ocupar no veículo de transporte.

A função da cubagem no transporte é evitar que se ocupe todo o espaço físico do veículo sem utilizar toda a sua capacidade em peso ou vice-versa. Desta forma, o conceito de cubagem está ligado à capacidade de se preencher a carga de um veículo utilizando-se todo o seu volume disponível para carga e capacidade de peso ou tonelagem.

- __Peso mínimo:__ é aquele indicado na balança.
- __Peso cúbico:__ é a forma de cálculo que determina o espaço efetivamente ocupado pelo pacote no veículo de transporte.

## Fator de cubagem

O fator de cubagem é o coeficiente resultante da relação entre peso e volume mais adequada e comercialmente justa à cubagem de aeronaves, conforme recomendado pela IATA (entidade internacional que congrega as empresas aéreas).

## Cálculo

O cálculo do peso cubado é realizado efetuando a multiplicação do Comprimento pela Largura e pela Altura e, em seguida, a divisão pelo Fator de cubagem fornecido pela transportadora.

<div class="alert alert-warning">
Ao realizar o cálculo do peso cúbico, a plataforma VTEX não utiliza unidades de medida e os números gerados são absolutos. Ou seja, os números e medidas que você levar em consideração serão aqueles do resultado final. Vale ressaltar que a unidade de medida do seu cálculo deve ser igual àquela utilizada pela transportadora em questão.
</div>

Observe o exemplo a seguir:

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Shipping/Shipping%20Strategy/como-o-peso-cubado-e-calculado_1.jpg)

- __Dimensões do pacote:__ `50cm x 60cm x 15cm`
- __Peso mínimo do pacote:__ `9kg`
- __Fator de cubagem:__ `6.000`
- __Peso cúbico:__ `50cm * 60cm * 15cm / 6.000 = 7,5kg`

Ao comparar o peso mínimo com o peso cúbico do pacote, a transportadora fará a cobrança pelo peso mínimo, pois ele é maior que o peso cubado.

Porém, o cálculo acima é apenas ilustrativo. Na transportadora, o valor cadastrado como fator cúbico será multiplicado ao produto de `Comprimento x Largura x Altura`. Ou seja, o cálculo a ser feito será `Comprimento x Largura x Altura x Fator Cúbico`.

Ou seja, caso o valor oferecido pela sua transportadora `6.000`, é necessário primeiro realizar o cálculo onde este valor dividirá 1.000: Exemplo: `1000g/6000 cm³ = 0,167`.

Ao realizar o cadastro da sua transportadora, esse é o valor que você deve preencher no campo **Fator de peso cúbico** na sua [política de envio](/pt/tutorial/politica-de-envio--tutorials_140).

![cubic_weight_PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Shipping/Shipping%20Strategy/como-o-peso-cubado-e-calculado_2.png)

Portanto, o cálculo final seria:
- __Dimensões do pacote:__ `50cm x 60cm x 15cm`
- __Peso mínimo do pacote:__ `9kg`
- __Peso cúbico__: `50cm x 60cm x 15cm x 0,167 = 7.515kg`
