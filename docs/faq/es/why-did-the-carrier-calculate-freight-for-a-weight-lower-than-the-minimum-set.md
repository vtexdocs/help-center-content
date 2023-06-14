---
title: '¿Por qué mi transportadora calculó flete,  para un peso menor que el mínimo configurado?'
id: frequentlyAskedQuestions_164
status: PUBLISHED
createdAt: 2017-04-27T22:39:17.904Z
updatedAt: 2019-12-31T14:25:25.374Z
publishedAt: 2019-12-31T14:25:25.374Z
firstPublishedAt: 2017-04-27T23:01:43.295Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: authors_84
slug: por-que-mi-transportadora-calculo-flete-para-un-peso-menor-que-el-minimo-configurado
legacySlug: por-que-mi-transportadora-calculo-flete-para-un-peso-menor-que-el-minimo-configurado
---

El cálculo del flete considera siempre dos parámetros, el peso y el volumen del producto. La prioridad de cálculo es siempre para el peso real o cúbico, vale el mayor. Sin embargo, caso el peso del producto sea menor que el mínimo catastrado para el transportista, será considerado el volumen.

## Ejemplos

- El transportista atiende el rango de peso de 30 a 100 kg y un volumen máximo de 1000 m³;
- El producto a ser entregado pesa 10 kg y tiene un volumen de 10m³.

Cuando se calcula el flete, la plataforma comprende que la transportadora no entrega por el peso, pues es menor que lo mínimo catastrado (30 kg). Sin embargo, calculará el flete considerando que el producto tiene un volumen menor que el máximo catastrado, para aquel rango de código ZIP. Se considerará el precio del flete conforme el primer rango de peso. Eso ocurre también porque está implícito que, si una transportadora que es capaz de llevar 100 kg, luego podrá transportar 10 kg sin problemas.

Por otro lado, si un producto tiene el peso mayor que el máximo catastrado en la transportadora, no se pondrá a disposición el flete aunque sea menor que el volumen máximo catastrado.

- El transportista atienda el rango de peso de 30 a 100 kg y un volumen máximo de 1000 m³
- El producto a ser entregado pesa 101 kg y tiene un volumen de 100m³

En ese caso, la plataforma comprenderá que, visto que el peso del producto es mayor que la capacidad de transporte (hasta 100 kg), no se podrá entregarlo, aunque sea un paquete que quepa en el camión, visto que tiene una dimensión modesta.

### Para saber más

[Entienda cómo calcular el factor cúbico de peso.](/es/tutorial/como-se-calcula-el-peso-cubico/).
[Entienda cómo facer la simulación de flete.](/es/tutorial/simulacion-de-flete/).
