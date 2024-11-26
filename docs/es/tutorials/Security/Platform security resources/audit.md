---
title: 'Audit'
id: 5RXf9WJ5YLFBcS8q8KcxTA
status: PUBLISHED
createdAt: 2021-10-21T16:51:06.108Z
updatedAt: 2024-04-18T14:03:48.943Z
publishedAt: 2024-04-18T14:03:48.943Z
firstPublishedAt: 2021-10-21T21:55:42.939Z
contentType: tutorial
productTeam: Others
author: 1malnhMX0vPThsaJaZMYm2
slugEN: audit
locale: es
legacySlug: como-encontrar-eventos-en-audit
subcategoryId: 2TNXiKzLZOPxjMTyGiEeJu
---

Para aumentar la transparencia y la confianza de los usuarios administrativos de tu tienda, VTEX registra varias operaciones junto con sus autores y marcas de hora en **Audit**, un módulo utilizado para consultar e investigar el historial por medio de filtros.

Para acceder a la página de Audit en el Admin VTEX, ve a **Apps > Apps instaladas > Audit** o ingresa **Audit** en la barra de búsqueda. En esta página, puedes realizar las siguientes acciones:

* [Consultar eventos en Audit](#consultar-eventos-en-audit)
* [Verificar las últimas consultas realizadas en Audit](#verificar-las-ultimas-consultas-realizadas-en-audit)

>ℹ️ Para visualizar los eventos de Audit, debe tener un [perfil de acceso](https://help.vtex.com/es/tutorial/perfis-de-acceso--7HKK5Uau2H6wxE1rH5oRbc) asociado al [recurso](https://help.vtex.com/es/tutorial/recursos-del-license-manager--3q6ztrC8YynQf6rdc6euk3) *Insights Metrics*.

![audit-ui-es](https://images.ctfassets.net/alneenqid6w5/5IFUH95vspIgJVYg9CrWMW/7c0a482122fe0605d75492f02b44f20d/audit-ui-es__1_.png)

## Consultar eventos en Audit

Audit permite consultar eventos mediante filtros de aplicación, fecha, acción, autor y detalles del evento. A continuación, explicamos cómo utilizar los [filtros](#filtros) de Audit y la presentación de los [resultados](#resultados). También mostramos el uso de filtros con [ejemplos](#ejemplos-de-consultas) prácticos.

### Filtros

Para consultar un evento utilizando los filtros disponibles en Audit, sigue estos pasos:

1. En el Admin VTEX, accede a **Apps > Apps instaladas > Audit** o ingresa _Audit_ en la barra de búsqueda. Se te redirigirá a la pestaña **Eventos de auditoría** en Audit.
2. En el menú **Aplicación** dentro de la sección **Filtros**, selecciona la aplicación relacionada con la consulta.
3. En el menú **Fecha**, escoge una de las fechas predefinidas para la consulta. Si prefieres definir el intervalo de fechas exacto, activa la opción de usar una fecha **Personalizada **y selecciona la fecha de **Inicio** y **Fin** para la consulta.

   >ℹ️ Solo se almacenan los registros de los últimos tres meses.

4. Si lo desea, añada un filtro por Acción. Para ello, en el campo situado junto a `Acción debe ser`, escriba el nombre de la acción y pulse `Enter`. Puede introducir más de un valor pulsando `Enter` después de cada selección. Compruebe el nombre de cada acción en [Eventos disponibles en Audit](https://help.vtex.com/es/tutorial/eventos-disponibles-en-audit--6r1Mzcu5NmkmmDLJlz9CCZ).
5. Puedes agregar filtros más específicos para consultar eventos con más precisión haciendo clic en el botón `Agregar filtro`.
6. Selecciona el parámetro del filtro (_Autor_ o _Detalles del evento_) e indica el valor al que se debe comparar. Puede introducir más de un valor pulsando `Enter` después de cada selección.

    Al agregar filtros con el mismo parámetro (ejemplo: `Acción = Change Promotion Configuration` o `Change Coupon Configuration`), los resultados incluyen eventos que sean iguales a cualquiera de los valores ingresados. Al agregar filtros con parámetros diferentes (ejemplo: `Acción = Change Coupon Configuration` y `Autor = email@email.com`), los criterios se suman.

    Ten en cuenta que puedes repetir los pasos 4 y 5 para agregar más filtros.

    Por ejemplo, la consulta que corresponde a la siguiente imagen devuelve resultados cuyas acciones son _Change Promotion Configuration_ o _Change Coupon Configuration_ y cuyo autor es `email@mail.com`.

    ![filtros-es (1)](//images.ctfassets.net/alneenqid6w5/LQkBnce7aFlx8T1zjXYdm/2898f4f9247621f62bbe7fa00a65a313/filtros-es__1_.png)

7. Haz clic en el botón `Aplicar` para obtener los eventos encontrados.

    Consulta la sección [Resultados](#resultados) para entender la presentación de los eventos.

>⚠️ Los resultados de consulta corresponden exactamente al contenido ingresado en la casilla del filtro. Para evitar resultados inesperados, comprueba que no se hayan ingresado espacios adicionales en los términos de consulta.

Si lo deseas, puedes compartir la consulta con otro usuario haciendo clic en `Compartir consulta` en la parte superior derecha de la página. El enlace a la búsqueda de Audit se copiará en su portapapeles.

### Resultados

La sección **Resultados** lista cada evento encontrado en la consulta y muestra la información de cada evento, según la tabla a continuación.

| Columna | Descripción |
|---|---|
| __Copiar evento__ | Botón para copiar la información del evento que se muestra en la tabla al portapapeles. |
| __Hora del evento__ | Fecha y hora en que ocurrió el evento, mostradas en la zona horaria del navegador o del sistema operativo. |
| __Acción__ | Acción realizada en la aplicación seleccionada para la consulta. Consulta las posibles acciones en la [lista de eventos disponibles en Audit](https://help.vtex.com/es/tutorial/eventos-disponibles-en-audit--6r1Mzcu5NmkmmDLJlz9CCZ). |
| __Detalles del evento__ | Información adicional sobre el evento. Consulta los detalles de cada evento en la [lista de eventos disponibles en Audit](https://help.vtex.com/es/tutorial/eventos-disponibles-en-audit--6r1Mzcu5NmkmmDLJlz9CCZ). |
| __Autor__ | Email, ID o token del usuario que realizó el evento. |
| __Más detalles__ | Botón que abre un modal con más información sobre el evento, cuando corresponda. Los detalles mostrados pueden incluir: <ul><li class="t-body mb5 lh-copy"><strong>Nombre de la entidad:</strong> ID de la entidad modificada.</li><li class="t-body mb5 lh-copy"><strong>Entidad antes de la acción:</strong> información de la entidad antes del evento, en formato <a href="http://www.json.org/" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word" rel="noopener noreferrer" target="_blank">JSON</a>.</li><li class="t-body mb5 lh-copy"><strong>Entidad después de la acción:</strong> información de la entidad después del evento, en formato <a href="http://www.json.org/" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word" rel="noopener noreferrer" target="_blank">JSON</a>.</li></ul>La exhibición completa de la información previamente mencionada puede variar dependiendo del evento. Por ejemplo, un evento para eliminar información mostrará únicamente la entidad antes de la acción. Sin embargo, un evento que implica agregar información solo mostrará la entidad después de la acción. <br /><br /> Algunos eventos no proporcionan ninguna información adicional. En estos casos, el modal aparece vacío. |

### Ejemplos de consultas

A continuación, listamos algunos escenarios de consulta comunes para ilustrar cómo se deben componer los filtros con base en lo que deseas obtener.

#### Activación de producto

Para consultar si un producto fue activado en el Catálogo en determinada fecha:

1. Selecciona la fecha deseada.
2. En el menú **Aplicación**, selecciona _Catálogo (Admin)_.
3. Agrega un filtro cuya **Acción** deba ser igual a `Product Activation`.
4. Agrega un filtro cuyos **Detalles del evento** deban ser igual a `product id "X" activated`, donde `X` sea el ID del producto deseado.

#### Cambio de precio

Para consultar si el precio de un SKU fue modificado en determinada fecha:

1. Selecciona la fecha deseada.
2. En el menú **Aplicación**, selecciona _Precios_.
3. Agrega un filtro cuya **Acción** sea igual a `Put Price`.
4. Agrega un filtro cuyos **Detalles del evento** sean igual al ID del SKU del ítem deseado.

#### Exclusión de stock

Para consultar si un stock fue eliminado en determinada fecha:

1. Selecciona la fecha deseada.
2. En el menú **Aplicación**, selecciona _Stock y envío_.
3. Agrega un filtro cuya **Acción** sea igual a `Warehouse Delete`.
4. Agrega un filtro cuyos **Detalles del evento** sean igual al ID del ítem deseado.

#### Exclusión de transportadora

Para consultar si una transportadora fue eliminada en determinada fecha:

1. Selecciona la fecha deseada.
2. En el menú **Aplicación**, selecciona _Stock y envío_.
3. Agrega un filtro cuya **Acción** sea igual a `Carrier Delete`.
4. Agrega un filtro cuyos **Detalles del evento** sean igual al ID de la transportadora deseada.

## Verificar las últimas consultas realizadas en Audit

Toda consulta realizada en Audit se guarda en la pestaña **Últimas consultas**. Para repetir una consulta en esta pestaña, haz clic en el botón  correspondiente a la consulta que deseas rehacer.

Esta pestaña contiene la siguiente información:

| Columna | Descripción |
|---|---|
| Consultado el | Fecha y hora en que se realizó la consulta en Audit. |
| Aplicación | Aplicación de VTEX en que se buscaron los eventos. |
| Términos | Filtros utilizados en la consulta. |
| Periodo | Fecha de inicio y fin del periodo seleccionado para la consulta. |
| Rehacer consulta | Botón que permite repetir la consulta. |

>⚠️ Solo se almacenan 50 consultas en la pestaña **Últimas consultas**. Si deseas guardar consultas por encima de límite, agrégalas a los favoritos de tu navegador.

