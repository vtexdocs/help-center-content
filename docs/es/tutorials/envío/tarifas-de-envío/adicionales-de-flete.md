---
title: 'Adicionales de flete'
id: 2vqGwMn0LabkOHY6zSHYNV
status: PUBLISHED
createdAt: 2021-08-18T19:48:01.276Z
updatedAt: 2023-03-29T18:32:47.454Z
publishedAt: 2023-03-29T18:32:47.454Z
firstPublishedAt: 2021-08-18T19:54:49.257Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: additional-shipping-costs
legacySlug: adicionales-de-flete, como-funciona-el-valor-adicional-en-el-flete
locale: es
subcategoryId: 7uJcyu0VawEm8ggqKu404u
---

Los adicionales de flete son importes que se añaden al costo de envío mediante las [políticas de envío](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140). Así, al configurar un valor de costo para la entrega de los ítems de su tienda, puede establecer una tarifa fija e incluir valores adicionales. El costo de envío fijo más los adicionales constituyen el costo de la [tarifa de envío](https://help.vtex.com/pt/tutorial/gerenciar-valores-de-frete--tutorials_141).

![Tarifa envio ES](//images.ctfassets.net/alneenqid6w5/21DY5nCwLfuquTatiw2Q3e/d97d710440d9d301191074a193396a96/Tarifa_envio_ES.svg)

Los valores adicionales pueden configurarse según:

* El peso del producto: [adicional de peso](https://help.vtex.com/es/tutorial/adicionales-de-flete--2vqGwMn0LabkOHY6zSHYNV#adicional-de-peso).
* El precio del producto:
[adicional de precio](https://help.vtex.com/es/tutorial/adicionales-de-flete--2vqGwMn0LabkOHY6zSHYNV#adicional-de-precio).
* El seguro del producto: 
[adicional de seguro](https://help.vtex.com/es/tutorial/adicionales-de-flete--2vqGwMn0LabkOHY6zSHYNV#adicional-de-seguro).
* El costo de envío: 
[adicional de flete](https://help.vtex.com/es/tutorial/adicionales-de-flete--2vqGwMn0LabkOHY6zSHYNV#adicional-de-flete).

![adicionais frete ES](//images.ctfassets.net/alneenqid6w5/3j3VNUKq6qTGJRfGWGbc14/9aef6304664af38fa0a9c03ed1916f7e/adicionais_frete_ES.svg)

> ❗ Es posible tener todos los adicionales configurados al mismo tiempo para una única tarifa de envío. El cálculo final de la [tarifa de envío](https://help.vtex.com/es/tutorial/tarifas-de-envio--1Balpg3rv0854udEPedvMM) es la suma de todos los adicionales registrados más la tarifa fija del flete. La tarifa de envío no es el costo final de envío.

## Adicional de peso

Es el costo adicional basado en el peso del producto. Al registrar esta tarifa se añade el valor configurado a cada unidad de peso que esté por encima del límite inicial. Así, para una política de envío con el adicional de peso configurado, los paquetes tendrán un costo adicional sobre el peso que exceda el límite inferior del rango configurado. 

Para un paquete determinado, el adicional resultante a pagar se obtiene multiplicando el adicional de peso configurado por la diferencia entre el peso del producto y el límite inferior del rango de peso:

_adicional por peso resultante = (peso del producto - límite inferior del rango) × (adicional por peso)_

### Ejemplo

Por ejemplo, para una tarifa de envío determinada, el rango de peso aceptado por la política de envío es de 300 g a 500 g (según el ejemplo de la tabla a continuación), y el **adicional de peso** registrado es de $0,10. Esto significa que por cada gramo que el paquete supere los 300 g, el valor se incrementará en $0,10. 

Considerando un paquete de 350 g con las siguientes características:  

Tarifa fija: $10,00  
Adicional de seguro: $0,00  
Adicional de precio: $2,00  
**Adicional de peso:** $5,00    
_El cálculo del valor monetario del adicional de peso para la entrega de un paquete de 350 g será (350-300)×0,1= $5,00._    
Adicional de flete configurado: 10%

Resultado:  
Adicional de flete: ($10+$0+$2+$5)x10%=$1,70  
Adicionales de flete: ($2+$5+$1,7)=$8,70  
Tarifa de envío: ($10+$8,70)=$18,70  

![faixa-peso ES](//images.ctfassets.net/alneenqid6w5/4s9nSGox3lNthbGiDUdOFq/2af51a115ce00bd21c47e0d38fbea3d1/faixa-peso_ES.png)

### Configuración 

Hay dos formas de configurar el adicional de peso. Para saber más, acceda a los tutoriales.

* Por [Plantilla de flete](https://help.vtex.com/es/tutorial/planilha-de-frete--tutorials_127), utilizando el campo de la columna _PriceByExtraWeight_.
* Y en la página de [Tarifas de Envío](https://help.vtex.com/en/tutorial/gerenciar-valores-de-frete--tutorials_141), en el campo _valor adicional por peso_.

## Adicional de precio

Es el costo adicional basado en el precio del carito. Al registrar esta tarifa, se añadirá a la tarifa de envío un costo adicional proporcional al precio del carito. 

### Ejemplo

Por ejemplo, una política de envío tiene establecido un **adicional de precio** del 5%. Para un carito cuyo precio total es de $180,00, el valor del adicional será de $9,00. Entonces, se agregará a la tarifa de envío un adicional de precio de $9,00.

Así que el cálculo será:  

Tarifa fija: $10,00  
Adicional de seguro: $0,00  
**Adicional de precio:** $9,00 
Adicional de peso: $5,00  
Adicional de flete configurado: 10%  

Resultado:  
Adicional de flete: ($10+$0+$9+$5)x10%=$2,4  
Adicionales de flete: ($9+$5+$2,4)=$16,4  
Tarifa de envío: ($10+$16,4)=$26,4  

> ❗ Es importante recordar que el cálculo del adicional de precio no tiene en cuenta los posibles descuentos y promociones, sino el valor integral del carito. Si el adicional de precio es inferior al adicional de seguro, el adicional de precio no se tiene en cuenta en el cálculo final de la tarifa de envío.

### Configuración 

Hay dos maneras de configurar el adicional de precio. Para saber más, acceda a los tutoriales.

* Por [Plantilla de flete](https://help.vtex.com/en/tutorial/planilha-de-frete--tutorials_127), utilizando el campo de la columna _PricePercent_.
* Y en la página de [Tarifas de Envío](https://help.vtex.com/en/tutorial/gerenciar-valores-de-frete--tutorials_141), en el campo _valor adicional_.

## Adicional de seguro

Este es el costo adicional por el seguro de entrega. Al registrar esta tarifa, se añadirá un valor absoluto a la tarifa de envío.

### Ejemplo

Durante el registro de los costos de la [política de envío](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140) mediante la [plantilla de flete](https://help.vtex.com/pt/tutorial/planilha-de-frete--tutorials_127), para los códigos postales o polígonos seleccionados, si hay un **adicional de seguro** configurado de $3,00, se añadirá este valor para cada envío en esa ubicación.

Considerando un paquete con las siguientes características:

Tarifa fija: $15,00  
Adicional de seguro: $3,00  
Adicional de precio: $0,00  
Adicional de peso: $5,00  
Adicional de flete configurado: 10%  

Resultado:
Adicional de flete: ($15+$3+$0+$5)x10% = $2,3  
Adicionales de flete: ($3+$5+$2,3) = $10,3  
Tarifa de envío: ($15+$10,3)=$25,3  

### Configuración 

El adicional de seguro se configura en la [plantilla de flete](https://help.vtex.com/en/tutorial/planilha-de-frete--tutorials_127), en el campo _MinimumValueInsurance_.

> ❗ Si el adicional de precio es inferior al adicional de seguro, el adicional de precio no se tiene en cuenta en el cálculo final de la tarifa de envío.

## Adicional de flete

Este es el costo adicional sobre el valor de la tarifa de envío. A continuación, tras tener en cuenta todos los demás adicionales y la tarifa fija, se calcula el **adicional de flete**. Es un porcentaje de la tarifa de envío y no tiene en cuenta el valor del producto.

Este adicional es el último que se calcula, y se hace mediante la fórmula:

_valor del adicional de flete = (tarifa fija + todos los adicionales) × (adicional de flete)_

### Ejemplo

Considerando un paquete con las siguientes características:

Tarifa fija: $15,00  
Total adicional (peso, precio y seguro): $6,00  
Adicional de flete configurado: 10%  

Resultado:  

Adicional de flete resultante: $2,10  
Tarifa de envío: ($15,00+$6,00)+($2,10) = $23,10  

### Configuración 

Para configurar el adicional de flete, vaya al menú del Admin.

1. En el Admin VTEX, accede a **Configuración de la tienda > Envío > Configuración**, o escribe *Envío* en la barra de búsqueda en la parte superior de la página, y haga clic en *Configuración de la tienda / Envío*. 
2. En la sección **Valor adicional en la carga**, introduzca un valor.
    1. Si desea incluir una tasa del 10%, rellene el campo con 10. Para los números decimales, utilice puntos en lugar de comas, como en 1.67.
3. Haga clic en `Guardar`.

![adicional configuracoes ES](//images.ctfassets.net/alneenqid6w5/2pVEQFyDHdXcZYpkQW85m0/9e15747bc9585ee7467ecad7c06ecc7e/adicional_configuracoes_ES.png)

