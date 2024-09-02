---
title: 'Filtros de calidad de anuncios'
id: 4xm0gi8leCyxHj8YdgHSJH
status: PUBLISHED
createdAt: 2023-02-27T12:15:26.682Z
updatedAt: 2024-06-20T21:38:38.621Z
publishedAt: 2024-06-20T21:38:38.621Z
firstPublishedAt: 2023-02-27T19:32:00.584Z
contentType: tutorial
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slug: calidad-de-anuncios
locale: es
legacySlug: calidad-de-anuncios
subcategory: 2zVauFUkYn8vgS0y0MfWeK
---

Los [marketplaces](https://help.vtex.com/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#ser-un-marketplace-vtex) tienen que revisar y aprobar anuncios enviados por los sellers para agregar los productos al catálogo. En el Admin VTEX, este [proceso de catalogación](https://help.vtex.com/es/tutorial/sugerindo-e-aprovando-skus--tutorials_396) se realiza a través de la página «SKU recibidos».

Es importante para la operación del marketplace que haya criterios de calidad para que los anuncios que lleguen a la página ya concuerden con los principales requisitos de presentación del catálogo.

**Calidad de anuncios** es la página donde los marketplaces registran y gestionan los grupos de requisitos aplicados al proceso de catalogación de SKU recibidos. Para accederla, en su VTEX Admin, haz clic en **Marketplace > Calidad de anuncios**, o escriba __"Calidad del anuncio"__ en la barra de búsqueda.

![ES offer quality](https://images.ctfassets.net/alneenqid6w5/7GL1AaqkfQqjLCj262wg04/890bb24504e8f6b809cd318fb85ed53a/ES_offer_quality.png)

Con este tutorial, sepa cómo:

* [Ver reglas predeterminadas](#ver-default-requirements)
* [Crear grupos de requisitos](#crear-grupos-de-requisitos)
* [Activar y desactivar grupos de requisitos](#activar-y-desactivar-grupos-de-requisitos)
* [Editar y eliminar grupos de requisitos](#editar-y-eliminar-grupos-de-requisitos)
* [Mover requisitos entre opcionales y obligatorios](#mover-requisitos-entre-opcionales-y-obligatorios)
* [Catalogar anuncios con requisitos](#catalogar-anuncios-con-requisitos)

## Por qué usar esta funcionalidad

Una vez creados los requisitos, los anuncios enviados por sellers que no se ajusten a los criterios se rechazan automáticamente y se separan de los demás para que el marketplace pueda identificarlos y pedir a los sellers que los corrijan. Así, se disminuye la cantidad de anuncios que el equipo de catálogo del marketplace debe analizar, lo que aumenta la eficacia en el proceso de gestión del catálogo. Puedes ver más información en [Catalogar anuncios con requisitos](#catalogar-anuncios-con-requisitos).

La funcionalidad permite que el operador del marketplace pueda realizar una serie de acciones, cada una con un beneficio para el negocio, según se describe en la siguiente tabla.

| Acción de la funcionalidad                                                                                                                                                                          | Beneficio                                                                                                                                         |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| Cree requisitos para filtrar los anuncios que llegan a la página «SKU recibidos».                                                                                                                   | Escala el proceso de incorporación de sellers y productos y acelera el time-to-revenue en el canal de marketplace.                                |
| Especificar a qué sellers, categorías o marcas se aplicarán las reglas, así como los casos de excepción.                                                                                            | Refina los criterios utilizados en el proceso de rechazo y aprobación de anuncios.                                                                |
| Ver qué anuncios han sido rechazados por no cumplir los requisitos obligatorios y/u opcionales al dirigirlos a las pestañas "Pendientes", "Revisión" y "Rechazados" según los requisitos cumplidos. | Permite que el equipo de catálogo del marketplace analice los anuncios caso por caso y sepa las razones por las que no cumplieron los requisitos. |
| Aportar más transparencia a los criterios de catalogación de anuncios recibidos y a la medida en que los sellers y anuncios los cumplen.                                                            | Permite identificar los sellers y los tipos de anuncios que no cumplen los requisitos, lo que acelera la corrección de problemas.                 |

## Ver "Default requirements" 
![ESDefault requirements](https://images.ctfassets.net/alneenqid6w5/6OxPTO8QO6o9zZ8kTt5tVG/b86fb58a9c6b454c31fb0bf0829adf4f/ESDefault_requirements.png)

La página estándar tiene algunos requisitos preestablecidos que se aplicarán a todas las categorías, sellers y marcas, conocidas como «Default requirements». Algunos de estos criterios se configuran de forma nativa en [VTEX Matcher](https://help.vtex.com/es/tutorial/entendendo-a-pontuacao-do-vtex-matcher--tutorials_424), la herramienta aplicada a los marketplaces VTEX para ayudar en el proceso de catalogación de los anuncios recibidos.

Las «Default requirements» no se pueden desactivar. Estas reglas se muestran en la página «Calidad de anuncios» para dar visibilidad a las reglas que ya se aplican a todos los anuncios recibidos.

Para ver las reglas activas de forma predeterminada, en la página de «Calidad de anuncios», selecciona el grupo de requisitos `Default requirements` (reglas predeterminadas) y aparecerán las opciones:

- Título tiene un máximo de caracteres de 150
-	Número de imágenes máximo es 50
-	ID de ref. tiene un máximo de caracteres de 50
-	EAN tiene un máximo de caracteres de 50

<div class="alert alert-info">
Se puede configurar VTEX Matcher para que apruebe anuncios automáticamente mediante las llamadas de API REST <a href="https://developers.vtex.com/vtex-rest-api/reference/saveaccountconfig">Save Account's Approval Settings</a>. Estos criterios son diferentes de los que se pueden ver en la página Calidad de anuncios y se aplican a la aprobación automática de anuncios de determinados sellers.
</div>

## Crear grupos de requisitos

Crea grupos de requisitos para definir las reglas aplicadas a sellers, categorías o marketplaces. Los grupos de requisitos aplican reglas a los campos que se mencionan a continuación. Aprende más sobre la definición de cada tipo de requisito.

- [Precio](#precio)
- [Cantidad de stock](#cantidad-de-stock)
- [Número de imágenes](#numero-de-imagenes)
- [Descripción](#descripcion)
- [Título](#titulo)
- [EAN](#ean)
- [ID de ref](#id-de-ref)
- [Marca del seller](#marca-del-seller)
- [Marca](#marca)
- [Categoría](#categoria)
- [Categoría del seller](#categoria-del-seller)
- [Especificación de SKU](#especificacion-de-sku)
- [Especificación de producto](#especificacion-de-producto)

Puedes crear requisitos obligatorios y/u opcionales. Aprende más sobre las implicaciones de cada requisito en  [Catalogar anuncios con requisitos](#catalogar-anuncios-con-requisitos).

<div class="alert alert-info">
Ten en cuenta que cada grupo de requisitos solo contiene un valor. Por lo tanto, para agregar más de un valor tienes que crear otro grupo de requisitos. Por ejemplo, si el marketplace desea agregar las palabras «blusas» y «camisas» como requisitos obligatorios en el campo Marca del seller, tiene que crear un grupo de requisitos para «blusas» y otro para «camisas».
</div>

Para crear un nuevo grupo de requisitos:

   1. En el Admin VTEX, accede a _Marketplace >_ **Calidad de anuncios**.
   2. Haz clic en el botón de la opción deseada:  
          - **Agregar grupo de requisitos obligatorios:** requisitos que son imprescindibles para que el anuncio esté listo para entrar en el catálogo de tu marketplace. Aprende más sobre las consecuencias de requisitos obligatorios en [Catalogar anuncios con requisitos](#catalogar-anuncios-con-requisitos).  
          - **Agrega tu primer grupo de requisitos opcionales:** requisitos que son deseables para que un anuncio esté listo para entrar en el catálogo de tu marketplace. Aprende más sobre las consecuencias de requisitos opcionales en [Catalogar anuncios con requisitos](#catalogar-anuncios-con-requisitos).  
   3. Rellena los [campos del formulario](#campos-del-formulario):    
          a. Información del grupo.      
          b. Segmentación.     
          c. Agregar casos de excepción (opcional).   
          d. Agregar requisito.     
   4. Después de agregar requisitos, haz clic en `Confirmar`.
   5. Haz clic en `Guardar`.

Para que los grupos de requisitos se apliquen a los SKU recibidos, hay que activarlos. Aprende más en [Activar y desactivar grupos de requisitos](#activar-y-desactivar-grupos-de-requisitos).

### Campos del formulario

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-1wig{font-weight:bold;text-align:left;vertical-align:top}
.tg .tg-0lax{text-align:left;vertical-align:top}
</style>
<table class="tg">
<thead>
  <tr>
    <th class="tg-1wig"><span style="font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Sección del formulario</span></th>
    <th class="tg-1wig"><span style="font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Campo</span></th>
    <th class="tg-1wig"><span style="font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Descripción</span></th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Información del grupo</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Nombre del grupo</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Agrega el nombre que identificará el grupo de requisitos para tu equipo. Ejemplos: Requisitos para el seller ABC, Requisitos de imagen, Filtros categoría Blusas.</span></td>
  </tr>
  <tr>
    <td class="tg-0lax" rowspan="3"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Segmentación</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Categorías</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Define si los requisitos se aplicarán a una o varias categorías.</span></td>
  </tr>
  <tr>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Marcas</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Define si los requisitos se aplicarán a una o más marcas de un seller.</span></td>
  </tr>
  <tr>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Sellers</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Define si los requisitos se aplicarán a uno o más sellers de un marketplace.</span></td>
  </tr>
  <tr>
    <td class="tg-0lax" rowspan="3"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent"> </span><br><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Agregar casos de excepción</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Categorías</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Define qué categorías no se verán afectadas por este grupo de requisitos.</span></td>
  </tr>
  <tr>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Marcas</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Define qué marcas no se verán afectadas por este grupo de requisitos.</span></td>
  </tr>
  <tr>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Sellers</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Define qué sellers no se verán afectados por este grupo de requisitos.</span></td>
  </tr>
  <tr>
    <td class="tg-0lax" rowspan="3"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Agregar requisito</span><br><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent"> </span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Campo del anuncio</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Selecciona qué campo se verá afectado por el requisito:</span><br><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">-   Categoría</span><br><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">-   Categoría del seller</span><br><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">-   Descripción</span><br><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">-   EAN</span><br><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">-   Especificación de producto</span><br><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">-   Especificación de SKU</span><br><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">-   Marca</span><br><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">-   Marca del seller</span><br><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">-   Número de imágenes</span><br><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">-   Precio</span><br><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">-   Cantidad de stock</span><br><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">-   ID de ref.</span><br><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">-   Tamaño de la imagen</span><br><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">-   Título</span><br><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Más información en «Tipos de requisitos».</span></td>
  </tr>
  <tr>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Operación</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Selecciona la operación aplicada en ese campo, como: «Es», «No es», «Igual a», «Mínimo», entre otras. Puedes ver todas las opciones disponibles en «Tipos de requisitos».</span></td>
  </tr>
  <tr>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Valores</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Define los valores que serán afectados por la operación. Su relleno depende de la operación seleccionada. En algunas operaciones, el campo 'valores' permitirá la inserción de más de un valor. Consulta todas las opciones disponibles en Tipos de requisitos.</span></td>
  </tr>
</tbody>
</table>

### Tipos de requisitos

Puedes crear grupos de reglas para diferentes aplicaciones de negocio. Cada grupo de requisitos tiene el campo, operación y valor que el administrador de la tienda haya determinado. A continuación, se describen los requisitos y operaciones disponibles para cada uno.

#### Precio

- **Como mínimo:** valor mínimo del precio exigido en los anuncios recibidos.
-	**Como máximo:** valor máximo del precio exigido en los anuncios recibidos.

#### Cantidad de stock

- **Como mínimo:** valor mínimo para el stock de los anuncios recibidos.
- **Como máximo:** valor máximo para el stock de los anuncios recibidos.

#### Número de imágenes

- **Como mínimo:** define la cantidad mínima de imágenes necesarias para validar un anuncio.
- **Como máximo:** define la cantidad máxima de imágenes necesarias para validar un anuncio.
- **Es:** define la cantidad exacta de imágenes necesarias para validar un anuncio.

#### Descripción

- **Tiene la palabra:** define una string que la descripción del anuncio debe contener.
-	**No contiene la palabra:** define una palabra que la descripción de un anuncio no debe contener.
-	**No tiene el carácter:** define un carácter que la descripción del anuncio no debe contener.
-	**Tiene un máximo de caracteres:** define el límite máximo de caracteres contenidos en la descripción del anuncio.
-	**Tiene un mínimo de caracteres:** define el límite mínimo de caracteres contenidos en la descripción del anuncio.
-	**Presente:** define si es obligatorio tener un valor en la descripción.

#### Título
-	**Tiene la palabra:** define una palabra que el título de un anuncio debe contener. Para agregar más términos es necesario crear otro grupo de requisitos.
-	**No contiene la palabra:** define una palabra que el título de un anuncio no debe contener. Para agregar más términos es necesario crear otro grupo de requisitos.
-	**No tiene caracteres solo en:** define si todos los caracteres del título deben estar en mayúscula («uppercase») o minúscula («lowercase»).
-	**Tiene un máximo de caracteres:** define el límite máximo de caracteres contenidos en el título del anuncio.
-	**Tiene un mínimo de caracteres:** define el límite mínimo de caracteres contenidos en el título del anuncio.
-	**Presente:** define si es obligatorio tener un valor en el título.

#### EAN

- **Presente:** define si es obligatorio que el anuncio tenga un valor en el campo EAN.
- **Tiene una cantidad de caracteres igual a:** define la cantidad específica de caracteres que el EAN debe tener.

#### ID de ref.
-	**Presente:** define si es obligatorio que el anuncio tenga un valor en el campo ID de ref.
-	**Tiene una cantidad de caracteres igual a:** define la cantidad específica de caracteres que el ID de ref. debe tener.

#### Marca del seller

-	**Es:** define si es obligatorio que el campo Marca del anuncio corresponda a un valor específico.
-	**No es:** define si es obligatorio que el campo Marca de un anuncio no corresponda a un valor específico en la regla.
-	**No tiene:** define una palabra que la marca de un anuncio no debe contener. Para agregar más términos es necesario crear otro grupo de requisitos.
-	**Tiene:** define una palabra que la marca de un anuncio debe contener. Para agregar más términos es necesario crear otro grupo de requisitos.
- **Presente:** define si es obligatorio tener un valor en la marca.

#### Marca

[VTEX Matcher](https://help.vtex.com/es/tutorial/entendendo-a-pontuacao-do-vtex-matcher--tutorials_424) rellena este campo cuando la marca enviada por el seller ha sido previamente mapeada. Esta regla permite validar que los sellers solo envíen marcas previamente mapeadas o bloquear alguna marca específica que se haya mapeado en el pasado.

-	**Tiene mapeo:** define si es obligatorio que la marca enviada por el seller esté mapeada en VTEX Matcher.
-	**Es:** define si es obligatorio que el campo Marca del anuncio corresponda a un valor específico.
- **No es:** define si es obligatorio que el campo Marca de un anuncio no corresponda a un valor específico en la regla.

#### Categoría

Este campo se refiere a las categorías mapeadas o al campo del anuncio que contiene un valor si el marketplace ya ha mapeado la categoría del seller.

- **Es:** define si es obligatorio que el campo Categoría del anuncio corresponda a un valor específico.
-	**No es:** define si es obligatorio que el campo Categoría del anuncio no corresponda a un valor específico en la regla.
-	**Tiene:** define un valor que la categoría del seller debe contener.
-	**No tiene:** define un valor que la categoría del seller no debe contener.
-	**Presente:** define si es obligatorio que el anuncio del seller tenga un valor en el campo de categoría.

#### Categoría del seller

- **Es:** define si es obligatorio que el campo _Categoría_ del anuncio corresponda a un valor específico.
-	**No es:** define si es obligatorio que el campo _Categoría_ del anuncio no corresponda a un valor específico en la regla.
-	**Tiene:** define un valor que la categoría del seller debe contener.
-	**No tiene:** define un valor que la categoría del seller no debe contener.
-	**Presente:** define si es obligatorio que el anuncio del seller tenga un valor en el campo _Categoría_.

#### Especificación de SKU

- **Presente:** define si es obligatorio tener un valor en la especificación de SKU.
-	**No está presente:** define si es obligatorio no tener un valor en la especificación de SKU.
-	**Tiene:** define un valor que la especificación de SKU debe contener.
- **No tiene:** define un valor que la especificación de SKU no debe contener.

#### Especificación de producto

- **Presente:** define si es obligatorio tener un valor en la especificación de producto.
-	**No está presente:** define si es obligatorio no tener un valor en la especificación de producto.
-	**Tiene:** define un valor que la especificación de producto debe contener.
-	**No tiene:** define un valor que la especificación de producto no debe contener.

## Activar y desactivar grupos de requisitos

Es un beneficio para el marketplace escoger cuándo los requisitos creados se aplicarán a los nuevos SKU recibidos, e incluso a los SKU recibidos anteriormente. Con ese fin, la página permite activar y desactivar todos los grupos de requisitos creados para que los filtros se apliquen como un todo a los anuncios recibidos de los sellers.

Ten en cuenta que al activar los requisitos, los anuncios automáticamente se rechazarán o reenviarán para revisión manual según los criterios definidos.

Para activar los requisitos creados:

1. En el Admin VTEX, ve a _Marketplace_ > **Calidad de anuncios**.
2. Selecciona la opción `Activo`.
3. Marca la opción deseada:
     -	Nuevos anuncios y SKU pendientes ya existentes
     - Anuncios nuevos solamente
4. Haz clic en **Activar**.

Para desactivar, selecciona la opción **Inactivo > Confirmar**.

## Editar y eliminar grupos de requisitos

Para editar grupos de requisitos, en la página Calidad de anuncios: **Selecciona el grupo deseado. > Haz clic en el menú. > Selecciona Editar. > Cambia los campos deseados. > Haz clic en Guardar.**

Para eliminar grupos de requisitos, en la página Calidad de anuncios: **Selecciona el grupo deseado. > Haz clic en el menú. > Haz clic en Eliminar grupo. > Selecciona Eliminar.**

## Mover requisitos entre opcionales y obligatorios

Puedes mover un requisito creado como opcional a la lista de requisitos obligatorios y viceversa. Para mover un requisito, en la página Calidad de anuncios: **Selecciona el grupo deseado. > Haz clic en el menú. > Selecciona Mover a Requisitos opcionales/obligatorios. > Haz clic en Confirmar.**

## Catalogar anuncios con requisitos

Después de crear y activar los grupos de requisitos, los mismos entran en vigor de acuerdo con las reglas configuradas. Esto significa que todos los anuncios enviados por sellers se filtrarán según los criterios definidos para que los sellers, marcas o categorías lleguen hasta la página SKU recibidos para el [proceso de catalogación](https://help.vtex.com/es/tutorial/sugerindo-e-aprovando-skus--tutorials_396).

La tabla a continuación describe la acción que cada tipo de requisito activa para los anuncios que cumplen, o no cumplen, con los criterios establecidos.

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-1wig{font-weight:bold;text-align:left;vertical-align:top}
.tg .tg-0lax{text-align:left;vertical-align:top}
</style>
<table class="tg">
<thead>
  <tr>
    <th class="tg-1wig"><span style="font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Tipo de requisito</span></th>
    <th class="tg-1wig"><span style="font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Acción del requisito</span></th>
    <th class="tg-1wig"><span style="font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Hacia dónde se dirigen los anuncios</span></th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0lax" rowspan="2"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Requisitos obligatorios</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Rechazan automáticamente los anuncios que no cumplen con los criterios definidos y los reenvían a la pestaña Rechazados.</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Pestaña Rechazados</span></td>
  </tr>
  <tr>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Reenvían los anuncios que cumplen los criterios definidos a la pestaña Pendientes.</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Pestaña Pendientes</span></td>
  </tr>
  <tr>
    <td class="tg-0lax" rowspan="2"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Requisitos opcionales</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Reenvían los anuncios que no cumplen a la pestaña Revisión.</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Pestaña Revisión</span></td>
  </tr>
  <tr>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Reenvían los anuncios que cumplen los criterios definidos a la pestaña Pendientes si también cumplen con los requisitos obligatorios.</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Pestaña Pendientes</span></td>
  </tr>
  <tr>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Ningún requisito configurado</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Los anuncios se reenvían a la pestaña Pendientes.</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Pestaña Pendientes</span></td>
  </tr>
</tbody>
</table>

