---
title: Gestionar las tarifas de envío
id: tutorials_141
status: PUBLISHED
createdAt: 2017-04-27T22:17:04.172Z
updatedAt: 2023-03-29T15:06:40.531Z
publishedAt: 2023-03-29T15:06:40.531Z
firstPublishedAt: 2017-04-27T23:00:45.116Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slug: gestionar-las-tarifas-de-envio
legacySlug: gestionar-valores-de-flete
subcategory: 7uJcyu0VawEm8ggqKu404u
---

Las [tarifas de envío](https://help.vtex.com/es/tutorial/tarifas-de-envio--1Balpg3rv0854udEPedvMM) de su tienda son los precios de envío que se ofrecerán a los clientes. En el módulo <b>Tarifas de envío</b> en el Admin VTEX, puede gestionar individualmente una tarifa de envío mediante el código postal. En este módulo puede:

* [Registrar](#registrar) nuevas tarifas de envío;
* [Buscar](#buscar) las tarifas de envío existentes;
* [Editar](#editar) las tarifas de envío;
* [Eliminar](#eliminar) las tarifas de envío.

<div class="alert alert-info">
Cuando tenga que actualizar o registrar varios precios de envío, recomendamos utilizar la Plantilla de envío (flete) en vez del módulo Tarifas de envío. Si desea comprobar cómo se mostrarán las tarifas de envío registradas al cliente final, utilice el módulo <b><a href="https://help.vtex.com/es/tutorial/simulacao-de-frete--tutorials_144">Simulador de envío</a></b>.
</div>

## Registrar

Para registrar una nueva tarifa de envío, siga las instrucciones a continuación:

1. En el Admin VTEX, accede a **Envío > Tarifas de envío**, o escribe *Tarifas de envío* en la barra de búsqueda en la parte superior de la página.  
2. Haga clic en el botón `Nuevo valor de envío`.  
3. Rellene los campos:  
    * **Política de envío (Transportadora):** seleccione la [política de envío](https://help.vtex.com/es/tutorial/politica-de-envio--tutorials_140) que corresponde a la nueva tarifa.
    * **País:** país en que la transportadora realizará la entrega.
    * **Rango de código postal:** limite inicial y final de los códigos postales en que la nueva tarifa estará disponible. Debe rellenar este campo con números y/o letras.
    * **Rango de peso:** limite inicial y final de peso que la transportadora acepta para el envío (considerando la tarifa de envío y el código postal). Debe rellenar este campo con un número decimal. La unidad de peso (gramos, kilogramos, etc.) debe ser la misma utilizada al registrar los artículos en el catálogo (SKU). 
    * **Valor de envío:** la tarifa fija cobrada por la entrega (teniendo en cuenta el código postal y el peso especificados). Debe rellenar este campo con un valor decimal.
    * **Valor adicional:** porcentaje del valor del producto que se añadirá para el envío. Por ejemplo, si el producto cuesta USD 80.00 y el valor adicional es 1, se le añadirá al valor de envío final USD 0.80. <p>El porcentaje registrado se refiere al valor total del producto (valor del producto sin posibles descuentos). Debe rellenar este campo con un número decimal.Por ejemplo, para añadir un porcentaje de 23%, puede rellenar el campo con `23` o `23,00`.</p>
    * **Valor adicional por peso:** valor añadido por cada unidad que supere el límite inferior del rango de peso. Debe rellenar este campo con un número decimal.
    * **Volumen cúbico máximo:** límite de volumen aceptado por la transportadora. Debe rellenar este campo con un número decimal.
    * **Plazo de entrega:** plazo que la transportadora tiene para realizar la entrega. Debe rellenar este campo con un número natural.

## Buscar

Para consultar las tarifas de envío registradas, siga las instrucciones a continuación:

1. En el Admin VTEX, accede a **Envío > Tarifas de envío**, o escribe *Tarifas de envío* en la barra de búsqueda en la parte superior de la página.   
2. En la página **Valores de envío**, rellene el **Código postal**.  
3. Seleccione una **Política de envío (Transportadora)**.  
4. Haga clic en el botón `Buscar`.  

Aparecerá una lista con los requisitos de la búsqueda. La lista también contiene las tarifas registradas (tanto por la [plantilla de envío (flete)](https://help.vtex.com/es/tutorial/planilha-de-frete--tutorials_127) como por las [tarifas de envío](https://help.vtex.com/es/tutorial/tarifas-de-envio--1Balpg3rv0854udEPedvMM)) y es posible [Editar](#heading=h.3znysh7) o [eliminar](#eliminar) una tarifa de envío.

## Editar

1. En el Admin VTEX, accede a **Envío > Tarifas de envío**, o escribe *Tarifas de envío* en la barra de búsqueda en la parte superior de la página.      
2. En la página **Valores de envío**, rellene el **Código postal**.  
3. Seleccione una **Política de envío (Transportadora)**.  
4. Haga clic en el botón `Buscar`.  
5. En la columna de **Acciones**, haga clic en el ícono <i class="fas fa-edit"></i> de edición avanzada.  
6. Cambie los campos deseados.  
7. Haga clic en el botón `Guardar`.  

## Eliminar

1. En el Admin VTEX, accede a **Envío > Tarifas de envío**, o escribe *Tarifas de envío* en la barra de búsqueda en la parte superior de la página.    
2. En la página **Valores de envío**, rellene el **Código postal**.  
3. Seleccione una **Política de envío (Transportadora)**.  
4. Haga clic en el botón `Buscar`.  
5. En la columna **Acciones**, haga clic en la `X`.  
