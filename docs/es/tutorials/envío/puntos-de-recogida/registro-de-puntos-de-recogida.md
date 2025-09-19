---
title: 'Registro de puntos de recogida'
id: 2R5ClQiwe4KoSQgsuiOw4E
status: PUBLISHED
createdAt: 2017-10-25T17:20:03.898Z
updatedAt: 2023-03-29T20:26:32.719Z
publishedAt: 2023-03-29T20:26:32.719Z
firstPublishedAt: 2017-10-30T18:28:31.695Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: creating-pickup-points
legacySlug: como-importar-puntos-de-recogida-pickup-points-por-planilla, configurar-puntos-de-recogida-pickup-points
locale: es
subcategoryId: 1c5Btie9ou2Gg2iUo0ggqM
---

Los puntos de recogida son lugares físicos donde los clientes pueden recoger los pedidos realizados en tu sitio web de ecommerce. Se trata de una etapa opcional en la[ estrategia de envío](/es/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3) de tu tienda. 

Puedes registrar los puntos de recogida mediante la solicitud de API [Create/Update Pickup Point](https://developers.vtex.com/vtex-rest-api/reference/pickup-points-1#createupdate) o a través del Admin VTEX. Este artículo explica cómo realizar el segundo proceso.

Hay dos maneras de registrar los puntos de recogida a través de Admin:

* [Registro individual](#registro-individual);
* [Registro por plantilla](#registro-por-plantilla);

> ⚠️ El registro de los puntos de recogida es uno de los pasos necesarios para el correcto funcionamiento de la funcionalidad. Consulta el artículo [Puntos de recogida](/es/tutorial/puntos-de-recogida--2fljn6wLjn8M4lJHA6HP3R) y descubre la configuración necesaria para que los puntos de recogida estén disponibles para tus clientes.

## Registro individual

1. En el Admin VTEX, accede a **Envío > Puntos de recogida**, o escribe *Puntos de recogida* en la barra de búsqueda en la parte superior de la página.
2. Haz clic en <i class="fas fa-plus"></i>`Agregar punto de recogida`.  
3. Rellena los [campos de registro](#campos-de-registro).  
4. Haz clic en `Guardar cambios`.  

### Campos de registro

#### Información general

* **Nombre:** nombre del punto de recogida que se mostrará en el _checkout_.
* **ID:** identificación del punto de recogida. Si no se rellena, el sistema elegirá un ID automáticamente. No dejes espacios en blanco.
* **Punto de recogida de terceros:** marca esta casilla si el punto de recogida no está relacionado con tu tienda. Los puntos de recogida de terceros se muestran con menos relevancia que los de la propia tienda.

  > ❗ La configuración **Punto de recogida de terceros** actualmente no está disponible.

Selecciona <i class="fas fa-toggle-on"></i> para activar el punto de recogida.

#### Dirección del punto de recogida

* **País:** introduce el país donde se encuentra el punto de recogida.
* **Buscar una dirección:** introduce la información de la dirección para la búsqueda. Puedes utilizar el código postal, la calle, la ciudad, el número y la información adicional de la dirección. 
* Para editar la información de la dirección, haz clic en `Editar`. 
* Para añadir una dirección diferente, haz clic en `Borrar` y vuelve a realizar la búsqueda.

> ℹ️ La información de la dirección y la ubicación en el mapa se mostrarán en el checkout.

#### Información adicional

* **Instrucciones de recogida:** introduce indicaciones para ayudar a tu cliente a recoger sus paquetes en el punto de recogida. Por ejemplo, en qué puerta se recogen los ítems o qué documentos debe presentar el cliente al recoger los pedidos. Estas instrucciones se mostrarán en el _checkout_, al elegir el punto de recogida. 
* **Tags:** añade etiquetas para agrupar los puntos de recogida. Estas etiquetas son útiles a la hora de relacionar las [políticas de envío](/es/tutorial/politica-de-envio--tutorials_140) con los puntos de recogida.  

#### Horas laborables

* **Días de la semana:**
    1. Marca las casillas de los días en que el punto de recogida estará disponible para que tus clientes recojan sus pedidos. 
    2. Selecciona también las horas labolables del punto de recogida para cada día. > ℹ️ Si este campo no se rellena, la plataforma considerará que el punto de recogida funciona las 24 horas del día.
* **Excepciones o feriados**: para añadir días específicos en los que el punto de recogida no funcionará, sigue los pasos a continuación:
    1. Haz clic en `Agregar excepción`.
    2. Rellena el **día** y la **hora**;
    3. Haz clic en `Agregar`.

> ⚠️ La hora laborable registrada en el punto de recogida solo tiene carácter informativo y no se utiliza en el cálculo del SLA. Para cambiar la configuración que influye en el plazo de entrega, es necesario establecer el horario de funcionamiento en la [política de envío](/es/tutorial/politica-de-envio--tutorials_140) relacionada con el punto de recogida. En el caso del registro de feriados, la configuración debe realizarse en el módulo de [feriados](/es/tutorial/registrar-feriados--2ItOthSEAoyAmcwsuiO6Yk) para que influya en el cálculo del plazo.

## Registro por plantilla

Es posible registrar los puntos de recogida mediante la importación de una plantilla (archivo XLS). Esto te permite registrar más de un punto de recogida a la vez.

> ℹ️ El archivo XLS no debe superar los 10 MB (aproximadamente 50.000 puntos de recogida). Si es necesario, registra más de una plantilla.

1. En el Admin VTEX, accede a **Envío > Puntos de recogida**, o escribe *Puntos de recogida* en la barra de búsqueda en la parte superior de la página.  
2. Haz clic en <i class="fas fa-upload"></i> `Cargar un XLS`.
3. Descarga la plantilla y rellena los 
[campos](#campos-de-la-plantilla).> ℹ️ Ten en cuenta que la plantilla viene con valores de ejemplo, que debes sustituir por los datos de los puntos de recogida de tu tienda.
4. Tras cargar la plantilla, haz clic en `OK`. Se habrán registrado los puntos de recogida. 

### Campos de la plantilla

Rellena la plantilla de acuerdo con la información de la siguiente tabla:

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 2px; border-collapse: collapse;">
    <thead class="w-100 center mv7 bb b--gray" style="border-spacing: 2px; border-collapse: collapse;">
  <tr class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">
            <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">**Columna de la plantilla **
   </th>
   <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">**Descripción**
   </th>
   <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">**Campo obligatorio**
   </th>
   <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">**Ejemplo de cómo rellenar**
   </th>
  </tr>
 <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">**Id**
    </td>
   <td>Código de identificación del punto de recogida.
    </td>
    <td><center>No</center>
 </td>
   <td><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">123</span>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">**Name**
  </td>
   <td>Nombre del punto de recogida que se muestra al cliente en el *checkout*.
   </td>
   <td><center>Sí</center>
   </td>
   <td><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Punto de recogida A</span>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">**Description**
   </td>
   <td>Descripción del punto de recogida que se muestra en el *checkout*.
   </td>
   <td><center>No</center>
   </td>
   <td><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Tienda ubicada en el centro comercial X</span>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">**Instructions**
</td>   
<td>Instrucciones para facilitar la recogida por parte del cliente.
   </td>
   </td>
   <td><center>No</center>
   </td>
  <td><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Recoge tu paquete en la entrada principal, utilizando el número del pedido.</span>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">**CountryName**
   </td>
   <td>Nombre del país donde se encuentra el punto de recogida.</td>
   <td><center>No</center>
   </td>
   <td><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">México</span>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">**City**
   </td>
   <td>Ciudad donde está el punto de recogida. </td>
   <td><center>No</center>
   </td>
   <td><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Veracruz</span>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">**PostalCode**
   </td>
   <td>Código postal de la ubicación del punto de recogida. 
</td>
   <td><center>Sí</center>
   </td>
   <td><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">91919</span>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">**CountryAcronym**
   </td>
   <td>Código de 3 dígitos del país según la norma ISO 8601 (RFC 3339).</td>
   <td><center>Sí</center>
   </td>
   <td><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">MEX</span>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">**State**
   </td>
   <td>El estado donde se encuentra el punto de recogida. </td>
   <td><center>No</center>
   </td>
   <td><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">VER</span>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">**Latitud**</td>
   <td>Latitud del punto de recogida.  </td>
   <td><center>Sí</center>
   </td>
   <td><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">-22,94</span>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">**Longitud** </td>
   <td>Longitud del punto de recogida.  </td>
   <td><center>Sí</center>
   </td>
   <td><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">-43</span>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">**Neighborhood**
   </td>
   <td>Barrio del punto de recogida.</td>
   <td><center>No</center>
   </td>
   <td><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Zona Centro</span>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">**Street**
   </td>
   <td>Calle donde se encuentra el punto de recogida.
   </td>
   <td><center>No</center>
   </td>
   <td><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Calle Fernando Siliceo</span>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">**Number**
   </td>
   <td>Número (dirección) del punto de recogida.
   </td>
   <td><center>Não</center>
   </td>
   <td><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">300</span>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">**Complement**
   </td>
   <td>Información adicional de la dirección.
   </td>
   <td><center>No</center>
   </td>
   <td><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">segunda planta, tienda no. 345</span>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">**Reference**
   </td>
   <td>Punto de referencia para ayudar a localizar el punto de recogida.</td>
   <td><center>No</center>
   </td>
   <td><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Frente al parque</span>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">**IsActive**
   </td>
   <td>Introduce <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">true</span> para activar el punto de recogida o <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">false</span> para desactivarlo. Los puntos de recogida activos aparecen en el *checkout.*
   </td>
   <td><center>Não</center>
   </td>
   <td><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">true</span>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">**BusinessHours**
   </td>
   <td>Indica el horario de funcionamiento del punto de recogida. Debe completarse de la siguiente manera:
<body>
<ul>
<li>DíaDeLaSemana,HoraDeInicio,HoraDeTérmino, utilizando comas y sin dejar espacios en blanco.</li> 
<li>Incluye un día de la semana a la vez, con sus respectivos horarios de funcionamiento, separados por punto y coma (;).</li> 
<li>Los días de la semana deben rellenarse según los códigos: 0 = domingo, 1 = lunes, 2 = martes, 3 = miércoles, 4 = jueves, 5 = viernes, 6 = sábado.</li> 
<li>Los horarios deben seguir el estándar de 24 horas y registrarse en el formato hh:mm, donde hh representa la hora y mm los minutos.</li> 
</ul>
</body>
Este campo no se utiliza en el cálculo del SLA.  Para cambiar la configuración que influye en el plazo de entrega, es necesario establecer el horario de funcionamiento en la [política de envío](/es/tutorial/politica-de-envio--tutorials_140) relacionada con el punto de recogida. En el caso del registro de feriados, la configuración debe realizarse en el módulo de [feriados](/es/tutorial/registrar-feriados--2ItOthSEAoyAmcwsuiO6Yk) para que influya en el cálculo del plazo.
   </td>
   <td><center>No</center>
   </td>
   <td>Por ejemplo, si funciona los lunes y los martes de las 9 a las 18 horas, se rellenaría así: <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">1,09:00:00,18:00:00;2,09:00:00,18:00:00;</span></td>
  </tr>
  <tr class="bb b--muted-3">
  <td class="t-body pa5" style="min-width: 15rem;">**PickupHolidays**
   </td>
   <td>Rellena este campo si hay días en los que los puntos de recogida no están disponibles. Debe rellenarse de la siguiente manera:<body>
<ul>
<li>Fecha,HoraDeInicio,HoraDeTérmino, utilizando comas y sin dejar espacios en blanco.</li> 
<li>La fecha debe rellenarse en el formato aaaa-mm-dd, donde aaaa representa el año, mm el mes y dd el día.</li>
<li>Los feriados deben incluirse uno por uno. Para añadir más de un feriado, sepáralos por punto y coma (;) sin dejar espacios en blanco.</li>
<li>Los horarios deben seguir el estándar de 24 horas y registrarse en el formato hh:mm, donde hh representa la hora y mm los minutos.</li>
</ul>
   </ul>
</body> 
   </td>
   <td><center>No</center>
   </td>
   <td>En el caso de un feriado el 28 de diciembre de 2018 se rellenaría de la siguiente manera:<span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">2018-12-28,00:00,00:00</span>
En el caso de un feriado el 25 de noviembre de 2016 con funcionamiento a partir de las 13 horas se rellenaría de la siguiente manera: 
<span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">2016-11-25,00:00, 13:00;2018-11-17T00:00:00Z,00:00,00:00</span></td>
  </tr>
  <tr class="bb b--muted-3">
  <td class="t-body pa5" style="min-width: 15rem;">**Tags**
   </td>
   <td>Introduce etiquetas para identificar un grupo de puntos de recogida.</td>
   <td><center>No</center>
   </td>
   <td><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">pickup1;pickup2;pickup3</span>
   </td>
  </tr>
</table>
