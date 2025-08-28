---
title: 'Por que a transportadora calculou frete para um peso menor do que o mínimo configurado?'
id: frequentlyAskedQuestions_164
status: PUBLISHED
createdAt: 2017-04-27T22:39:17.904Z
updatedAt: 2023-12-19T16:53:24.136Z
publishedAt: 2023-12-19T16:53:24.136Z
firstPublishedAt: 2017-04-27T23:01:43.295Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: authors_84
slugEN: why-did-the-carrier-calculate-freight-for-a-weight-lower-than-the-minimum-set
locale: pt
legacySlug: por-que-minha-transportadora-calculou-frete-para-um-peso-menor-do-que-o-minimo-configurado
---

O cálculo do frete sempre considera dois parâmetros, o peso e o volume do produto. A prioridade de cálculo é sempre para o peso mínimo ou cubado &#8211; o maior entre eles. Porém, caso peso do produto seja menor do que o mínimo cadastrado para a transportadora, será considerado o volume.

## Exemplos

- Transportadora atende a faixa de peso de 30 a 100 kg e um volume máximo de 1000 m³;
- Produto a ser entregue pesa 10 kg e tem um volume de 10m³.

Ao calcular o frete, a plataforma entenderá que a transportadora não entrega pelo peso, pois é menor do que o mínimo cadastrado (30 kg). Porém, calculará o frete considerando que o produto tem um volume menor do que o máximo cadastrado para aquela faixa de CEP. O preço do frete vai ser considerado conforme a primeira faixa de peso. Isso acontece também porque está implícito que se uma transportadora que é capaz de levar 100 kg, poderá transportar 10 kg sem problemas.

Por outro lado, se um produto tiver o peso maior do que o máximo cadastrado na transportadora, o frete não será disponibilizado ainda que que o volume seja menor do que o volume máximo cadastrado.

- Transportadora atende a faixa de peso de 30 a 100 kg e um volume máximo de 1000 m³
- Produto a ser entregue pesa 101 kg e tem um volume de 100m³

Nesse caso, a plataforma entenderá que pelo fato do peso do produto ser maior do que a capacidade de transporte (até 100 kg), o mesmo não poderá ser entregue, ainda que seja um pacote que caiba no caminhão, por ter uma dimensão compatível.

## Para saber mais

[Entenda como o peso cubado é calculado.](/pt/tutorial/como-o-peso-cubado-e-calculado/)
[Saiba como fazer a simulação de frete.](/pt/tutorial/simulacao-de-frete/)
