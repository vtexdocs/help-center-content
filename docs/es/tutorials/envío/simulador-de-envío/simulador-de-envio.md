---
title: 'Simulador de envío'
id: tutorials_144
status: PUBLISHED
createdAt: 2017-04-27T22:16:36.879Z
updatedAt: 2024-06-18T19:48:13.737Z
publishedAt: 2024-06-18T19:48:13.737Z
firstPublishedAt: 2017-04-27T23:00:45.450Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: shipping-simulation
legacySlug: simulacion-de-flete
locale: es
subcategoryId: 1O8AEORWOcgIiMosGoousQ
---

El **Simulador de envío** está disponible en el Admin para simular y analizar las opciones de entrega disponibles. La simulación verifica las condiciones de entrega dando al administrador de tienda la capacidad de verificar la disponibilidad de ítems, formas de entrega, costos y plazos. 

El simulador también se puede utilizar para validar la configuración de la  **[Estrategia de envío](/es/docs/tutorials/estrategia-de-envio)** antes de que se habilite el proceso logístico (Stock, Muelle y [Política de envío](/es/docs/tutorials/politica-de-envio)) considerando:

* **Disponibilidad de un ítem:** el simulador verifica si el ítem cuenta con _stock_ y si se puede realizar su entrega (si hay transportadoras registradas para esa región, por ejemplo). Si uno de los dos criterios no se cumple, el simulador entiende que el ítem no está disponible.
* **Disponibilidad de Sellers White Label:** el simulador selecciona al franquiciado más cercano a la dirección de entrega (la configuración logística es calculada a través del ambiente del _Seller White Label_, y no por la Main Account).

> ⚠️ Puede haber una divergencia entre el precio final indicado por el simulador y el precio real en su tienda, ya que la simulación no considera: <ul> <li>Promociones aplicadas a esos ítems.</li> <li>Descuentos de flete configurados a través de promociones.</li> <li>El plazo de entrega total que se muestra en el resultado de la simulación no contempla el campo **Fecha de previsión de llegada (Preventa)**  [del registro del ítem.</li>](/es/tutorial/campos-de-cadastro-de-sku--21DDItuEQc6mseiW8EakcY) </ul>

## Simular el envío

1. En el Admin VTEX, accede a **Envío > Estrategia de Envío**, o escribe *Estrategia de Envío* en la barra de búsqueda en la parte superior de la página.  
 2. Haga clic en `Simulador de envío`.  
 3. Seleccione el `País`.  
 4. Seleccione la `Política Comercial` deseada.  
 5. Seleccione el  `producto` por nombre o ID.  
 6. Seleccione la `cantidad` del SKU.  
 7. Determine el `Precio`. Este campo es abierto y opcional. 	  

 > El simulador no tiene en cuenta el precio registrado en el módulo Catálogo. Por lo tanto, el costo indicado por el simulador no considera ninguna promoción vigente para aquellos SKUs, y tampoco considera acréscimos de flete en el carrito, se los hay. Eso puede resultar en un costo diferente del valor real del producto en su tienda. Sugerimos que ingrese manualmente el valor exacto del SKU con las promociones aplicadas, para que el simulador devuelva un cálculo preciso.

 8. Haga clic en el ícono `+` para agregar más de un producto en la simulación. 
Si lo desea, puede seleccionar la casilla `Simular ítems individualmente`.  

 > Esta funcionalidad es útil cuando los ítems no tienen configuraciones logísticas compatibles para que la entrega sea realizada por la misma transportadora.  

 9. Digite el **Código Postal** en el que desea realizar la simulación, o complete la **Dirección**. 

	> Para que la simulación se realice en base a las coordenadas de una **Dirección**, es necesario configurar una clave de geolocalización de Google. Obtenga esta clave a través del [Portal de desarrolladores de Google.](https://developers.google.com/maps/documentation/javascript/get-api-key) Una vez con la clave, accede a **Configuración de la tienda > Envío > Configuración**, o escribe *Envío* en la barra de búsqueda en la parte superior de la página, y haga clic en *Configuración de la tienda / Envío*. Complete el campo **Google Geolocation API**  con la clave obtenida.   

 10. Haga clic en el botón `Simular Envío`.  

> ℹ️ En el resultado de la simulación, las medidas del ítem aparecen en centímetros y gramos, pero el valor real considerado en el Checkout son las unidades de medida registradas en los [campos de registro del producto](/es/tutorial/campos-de-cadastro-de-produto--4dYXWIK3zyS8IceKkQseke) y SKU.

## Detalles de la simulación

La simulación de flete indica todas las posibilidades de envío y la disponibilidad de los ítems incluidos en la simulación y describe los [detalles de entrega de un pedido](/es/docs/tutorials/pagina-de-detalles-del-pedido), el valor del flete y el tiempo de entrega tomando en cuenta las particularidades que se indican a continuación.

* **Transportadoras desconsideradas**: al realizar la simulación, algunas transportadoras pueden estar indisponibles porque no cumplen los criterios de la [ Política de envío](/es/docs/tutorials/politica-de-envio) (vea 
[transportadoras desconsideradas](#transportadoras-desconsideradas) para más información)
* **Compartición de simulación:** se puede realizar la compartición de la simulación haciendo clic en `Compartir simulación` en la esquina superior derecha de la página. Al hacer clic, se copiará un _link_ de compartición en su área de transferencia. Esta funcionalidad facilita la comunicación con el equipo de VTEX, o de su tienda, para resolver problemas que se producen en pedidos específicos. Solo la persona que tiene acceso al ambiente VTEX puede ver el _link_ de compartición generado.
* **Valor del flete:** para las simulaciones realizadas con más de un SKU, el `valor del flete` se divide proporcionalmente al peso de cada SKU en el paquete. Por ejemplo, considere una simulación realizada con 2 SKU (uno de 2 kg y otro de 3 kg). Supongamos que el valor total del flete en la transportadora A es de USD 10. En este caso, el valor de flete del SKU más liviano es de USD 4 y el del más pesado es de USD 6. Para saber más, vea [Cómo se realiza el rateo de flete](/es/tutorial/como-e-feito-o-rateio-de-frete--frequentlyAskedQuestions_155?&utm_source=autocomplete).
* **Dimensiones del paquete:** para las simulaciones con SKUs que contienen más de 1 unidad, las dimensiones que se describen al lado del SKU en la página de simulación no cambiarán. El sistema tomará en cuenta que la dimensión total del paquete aumentó. 

### Transportadoras desconsideradas

A continuación, se enumeran los motivos más comunes por los que una transportadora no está disponible para la simulación y sus respectivas soluciones. 

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
    <thead class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
   <tr class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">
            <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">
                <em class="i">**Motivo**</em>
            </th>
            <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">
                <em class="i">Solución</em>
            </th>
  </tr>
  <tr class="bb b--muted-3">
    <td class="t-body pa5" style="min-width: 15rem;">El peso total del carrito excedió el límite permitido por la transportadora. 
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Puede cumplir con el límite dividiendo la carga.  Para más información lea nuestro artículo sobre [reparto de carga](/es/docs/tutorials/como-se-maneja-el-reparto-de-carga). También puede verificar si hay un error en la [configuración del producto en el catálogo](/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/1wmX3QvQVxbKVmalhIE5Ru).
   </td>
  </tr>
  <tr class="bb b--muted-3">
    <td class="t-body pa5" style="min-width: 15rem;">El peso o la dimensión del ítem no es permitido por la transportadora.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Verifique la configuración de la [plantilla de flete](/es/docs/tutorials/plantilla-de-flete) a través de los campos ***WeightStart, WeightEnd y MaxVolume***.*** *** También revise si hay un error en la [configuración del producto en el catálogo](/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/1wmX3QvQVxbKVmalhIE5Ru).
   </td>
  </tr>
  <tr class="bb b--muted-3">
    <td class="t-body pa5" style="min-width: 15rem;">El peso del kit superó el límite aceptado por la transportadora. 
      
      *Nota: los ítems que componen un kit o promoción no se pueden separar en diferentes paquetes.*
   </td>
  <td class="t-body pa5" style="min-width: 15rem;">Verifique la configuración de la [plantilla de flete ](/es/docs/tutorials/plantilla-de-flete)a través de los campos ***WeightStart ***y ***WeightEnd. ***También puede comprobar si hay un error en la [configuración del producto en el catálogo](/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/1wmX3QvQVxbKVmalhIE5Ru).
   </td>
  </tr>
  <tr class="bb b--muted-3">
    <td class="t-body pa5" style="min-width: 15rem;">Las opciones de programación de entrega no están disponibles.
   </td>
  <td class="t-body pa5" style="min-width: 15rem;">Verifique la configuración de las ventanas de [entregas programadas](/es/docs/tutorials/entrega-programada) y el horario de atención de la [política de envío](/es/docs/tutorials/politica-de-envio). Es posible que las ventanas de entregas programadas estén bloqueadas, compruebe si las ventanas correctas están activas.
   </td>
  </tr>
  <tr class="bb b--muted-3">
    <td class="t-body pa5" style="min-width: 15rem;">El Código Postal no es cubierto por la transportadora.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Verifique la configuración de la [plantilla de flete](/es/docs/tutorials/plantilla-de-flete) a través de los campos ***ZipCodeStart*** y ***ZipCodeEnd. ***También revise las [Tarifas de envío](/es/docs/tutorials/gestionar-las-tarifas-de-envio) en el módulo de **Envío**.
   </td>
  </tr>
  <tr class="bb b--muted-3">
    <td class="t-body pa5" style="min-width: 15rem;">La transportadora fue desconsiderada porque no cumple los criterios de prioridad.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Los criterios de prioridad evaluados por el sistema en el *checkout* son:
<ul>
<li>Entrega más económica.
<li>Entrega más rápida.
<li>Combinación del mejor costo-beneficio entre precio y tiempo de entrega.
</li>
</ul>
   </td>
  </tr>
  <tr class="bb b--muted-3">
    <td class="t-body pa5" style="min-width: 15rem;">La transportadora está inactiva. 
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Revise el registro de la [política de envío](/es/docs/tutorials/politica-de-envio) para verificar si la transportadora está activa.
   </td>
  </tr>
  <tr class="bb b--muted-3">
    <td class="t-body pa5" style="min-width: 15rem;">El precio de los ítems no cumple las especificaciones de la transportadora.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Verifique la configuración del precio límite aceptado en la [política de envío](/es/docs/tutorials/politica-de-envio). 
   </td>
  </tr>
  <tr class="bb b--muted-3">
    <td class="t-body pa5" style="min-width: 15rem;">El horario de atención de la transportadora no se adecúa al horario de entrega.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Verifique el horario de atención de la [política de envío](/es/docs/tutorials/politica-de-envio).
   </td>
  </tr>
</table>
