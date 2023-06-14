---
title: 'Código Postal como condición en una promoción no considera el país'
id: 5rPGioNAiWaEmAIMQSACaM
status: PUBLISHED
createdAt: 2017-04-05T12:24:01.042Z
updatedAt: 2022-12-22T15:18:27.889Z
publishedAt: 2022-12-22T15:18:27.889Z
firstPublishedAt: 2017-05-26T19:46:14.665Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: authors_41
tag: Pricing & Promotions
slug: codigo-postal-como-condicion-en-una-promocion-no-considera-el-pais
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

Al llenar el campo de Código Postal como condición en la promoción no es posible seleccionar el país, lo que perjudica la creación de promociones.

Este campo no tiene un tratamiento de UI, como una máscara o bloqueo de validación de cantidad de caracteres, lo que afecta a la usabilidad del recurso.

## Simulación

- Acceder al módulo __Pricing__
- Registrar una promoción
- Colocar el código postal como condición de la promoción
- Registrar un Código Postal de São Paulo (04500000) sin el cero inicial (4500000)

El efecto de esto es que otra región (45000000) recibirá el beneficio.

__OBS__: El módulo Logistics ya entiende que si un Código Postal de Brasil se llena con 7 caracteres, un 0 debe colocarse al principio de la cadena, y no al final. __Este problema conocido está restringido al entorno de promoción.

## Workaround

No tenemos una medida paliativa para ese escenario. Lo que se puede hacer es llenar los códigos postales con mucho cuidado para que no falte ningún carácter y así no ocurra el escenario expuesto arriba.

