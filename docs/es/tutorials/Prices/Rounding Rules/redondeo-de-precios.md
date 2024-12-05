---
title: 'Redondeo de Precios'
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
locale: es
legacySlug: precio-psicologico-v2
subcategoryId: 2FWsvQlrVYu24myUgwY4Y8
---

El concepto de redondeo de precios comprende el “redondeo”, para evitar precios rotos y hacer que comercialmente se presenten como una ventaja para el cliente. Para registrar el redondeo de precios, siga los siguientes pasos:

1. En el Admin VTEX, accede a *Configuración de la tienda > Productos > Reglas de redondeo de precios*, o escribe *Reglas de redondeo de precios* en la barra de búsqueda en la parte superior de la página.

En esta pantalla, podrá por ejemplo, ajustar un precio de $19,85 a $19,90; o de $48,70 a $48,99. Estas modificações se harán de acuerdo con lo que el responsable de la tienda entienda como lo más llamativo para su público target y su vertical de negocio, y esto impactará en la presentación de todos los precios de la tienda.

## Como funciona

Para contar con los precios redondeados, es necesario crear una regla. Por medio de esta, elegir el rango de precios que será redondeado, la cantidad de decimales y el método de redondeo. Es posible crear una regla para centavos, décimos de centavo o unidad, y usted puede elegir entre tres métodos de redondeo: &#8220;nueve&#8221;, &#8220;nueves&#8221; y &#8220;cero&#8221;.

### Ejemplos

#### Centavo:

- **Nueve:** suma un 9 con ceros a la derecha. Ej.: $ 59,56 → $ 59,59
- **Cero:** suma un 0 con ceros a la derecha. Ej.: $ 20,56 → $ 20,60

#### Décimo de centavo:

- **Nueve:** suma un 9 con ceros a la derecha. Ej.: $ 59,56 → $ 59,90
- **Nueves:** suma un 9 con nueves a la derecha. Ej.: $ 5,07 → $ 4,99
- **Cero:** suma un 0 con ceros a la derecha. Ej.: $ 263,56 → $ 264,00

#### Unidad:

- **Nueve:** suma un 9 con ceros a la derecha. Ej.: $ 59,56 → $ 59,00
- **Nueves:** suma un 9 con nueves a la derecha. Ej.: $ 5,07 → $ 9,99
- **Cero:** suma un 0 con ceros a la derecha. Ej.: $ 263,56 → $ 260,00

### Criterio de redondeo

El redondeo utiliza la *diferencia absoluta* entre el precio original y valores próximos con el final deseado. Aplicar el método **Nueves** al valor *9,70* hará que el precio sea redondeado a *9,99*, porque entre *8,99* y *9,99* el valor más próximo es el segundo.

Por eso, es importante siempre recordar que el redondeo será por aproximación al valor con el final deseado. De esta forma, el usuario podrá redondear el precio a un valor por debajo o por encima del valor original, y esa variación ocurrirá de acuerdo con la elección de la cantidad de decimales.

- **Centavo:** variación de hasta 5 centavos;
- **Décimo de centavo:** variación de hasta 50 centavos;
- **Unidad:** variación de hasta 5 pesos/reales/moneda local.

Finalmente, el usuario podrá visualizar precios con las configuraciones de la regla y podrá probar un precio para ver como queda con el redondeo de acuerdo a la regla.

Debajo se muestran ejemplos de los flujos de inclusión, edición y exclusión de las reglas de redondeo de precios. También se puede ver como simular precios para una regla específica.

*Flujo de creación de una regla*

![config-arrendodamento-ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Prices/Rounding%20Rules/redondeo-de-precios_1.gif)

*Flujo de alteración de una regla*

![editar-arrendodamento-ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Prices/Rounding%20Rules/redondeo-de-precios_2.gif)

*Flujo de exclusión de una regla*

![deletar-arrendodamento-ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Prices/Rounding%20Rules/redondeo-de-precios_3.gif)

*Simulación de precio para una regla*

![teste-arrendodamento-ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Prices/Rounding%20Rules/redondeo-de-precios_4.gif)
