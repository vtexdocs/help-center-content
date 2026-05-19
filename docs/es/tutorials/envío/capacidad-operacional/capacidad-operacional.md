---
title: 'Capacidad operativa'
id: 2thSYLMAS8KAd8V4XuBLSy
status: PUBLISHED
createdAt: 2023-05-08T18:03:07.644Z
updatedAt: 2025-01-23T12:00:02.987Z
publishedAt: 2025-01-23T12:00:02.987Z
firstPublishedAt: 2023-05-09T17:22:57.861Z
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: operational-capacity
legacySlug: modulo-localidades
locale: es
subcategoryId: 13sVE3TApOK1C8jMVLTJRh
---

> ⚠️ El requisito para usar la funcionalidad es tener [cuentas franquicia](/es/docs/tutorials/que-es-una-cuenta-franquicia) asociadas a la [cuenta principal](/es/docs/tracks/cuentas-y-arquitectura#tipos-de-cuenta).

El módulo **Capacidad operativa** te ayuda a gestionar la capacidad de los sellers para recibir y preparar pedidos de la tienda, optimizando así tu red logística. Puedes monitorear la distribución de pedidos entre los sellers y realizar [acciones](#acciones-en-la-pagina-de-detalles-de-la-capacidad-del-seller) para mejorar la distribución de pedidos.

> ⚠️ El módulo **Capacidad operativa** no gestiona la entrega de pedidos. Esta gestión la realiza el módulo [**Capacidade de entrega**](https://help.vtex.com/es/docs/tutorials/gestionar-capacidad-de-entrega).


Una buena gestión de la capacidad operativa de los sellers tiene los siguientes beneficios:

* Mejor redistribución de la demanda de productos entre los stocks de diferentes sellers.
* Optimización del plazo de envío de pedidos evitando sobrecargar sellers.
* Mejor experiencia de compra para los clientes, ya que reciben sus pedidos en el plazo prometido.

> ℹ️ Para poder activar y gestionar el módulo **Capacidad operativa**, tu [rol](/es/docs/tutorials/roles) en el Admin VTEX debe estar asociado al [recurso de License Manager](/es/docs/tutorials/recursos-del-license-manager) llamado _Logistics full access_.

## Activar el módulo Capacidad operativa

Para comenzar a utilizar la funcionalidad, es necesario activar la Capacidad operativa en el Admin VTEX. Si no se activa, el módulo no genera efectos y no permite gestionar la capacidad de los sellers.

> ⚠️ Antes de activar el módulo te recomendamos configurar la capacidad operativa de tus sellers. De este modo, antes de que la funcionalidad surta efecto, contarás con una vista previa de cómo se consume la capacidad de cada seller, lo que te permitirá ajustar la configuración según las necesidades de tu operación.

Para activar el módulo **Capacidad operativa** sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Envío > Capacidad operativa**, o ingresa **Capacidad operativa** en la barra de búsqueda de la parte superior de la página.
2. En la parte superior de la página se mostrará el siguiente aviso: “_Módulo desactivado: actívalo para que la configuración realizada se aplique en la plataforma VTEX_”.
3. En el aviso, haz clic en `Activar`.

Si deseas dejar de utilizar la funcionalidad, puedes [desactivar la Capacidad operativa](#desactivar-el-modulo-capacidad-operativa) en cualquier momento. Sin embargo, es conveniente considerar otras estrategias, como se muestra en [Elegir entre editar la capacidad operativa del seller, hacerla ilimitada, pausar seller o desactivar módulo](#elegir-entre-editar-capacidad-operativa-del-seller-hacerla-ilimitada-pausar-seller-o-desactivar-modulo).

## Información general del módulo Capacidad operativa

Al acceder **Envío > Capacidad operativa** en el Admin VTEX, o ingresar **Capacidad operativa** en la barra de búsqueda, podrás consultar una página como la que se ilustra a continuación:

![operational_capacity_image_1_ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/envío/capacidad-operacional/capacidad-operacional_1.png)

> ⚠️ Los sellers que se muestran en la interfaz son los sellers de tu operación, previamente configurados por nuestro equipo. Para agregar un nuevo seller ponte en contacto con [nuestro Soporte](https://support.vtex.com/hc/es-419).

El gráfico muestra los siguientes datos:

* **Total de sellers:** número total de sellers de tu operación.
* **Activos:** número de sellers que están recibiendo nuevos pedidos, ya sean sellers con un límite de capacidad configurado o con capacidad ilimitada.
* **En pausa:** número de sellers que han sido pausados y no reciben nuevos pedidos.
* **Número de sellers que excedieron la capacidad:** número de sellers que recibieron más pedidos que el límite configurado. Puedes seleccionar los resultados de los últimos `7 días` o `28 días`.

La página **Capacidad operativa** presenta la siguiente información:

| **Columna** | **Descripción** |
|:---:|:---|
| Seller | Identificación del [seller](/es/docs/tutorials/que-es-un-seller) al que se refiere la capacidad operativa. |
| Segmentación | Identificación del tipo de segmentación realizada por la capacidad operativa. Existen dos tipos de segmentación: por sellers o por [política comercial](https://help.vtex.com/es/docs/tutorials/como-funciona-una-politica-comercial). Para activar la segmentación por política comercial, ponte en contacto con [nuestro Soporte](https://supporticket.vtex.com/support). |
| Capacidad operativa | Porcentaje de la capacidad operativa del seller que se utilizó en el día. **Ejemplo:** un seller con capacidad para preparar 100 pedidos diarios tiene un 80% de su capacidad del día utilizada. Esto significa que solo puede recibir 20 nuevos pedidos ese día. En esta columna, se muestra un ícono de alerta cuando el seller alcanza el 100% de su capacidad y no puede recibir nuevos pedidos ese día. Puedes [editar la capacidad operativa de los sellers](#editar-capacidad-operativa-del-seller) de forma individual o masiva. |
| Status | Status de la capacidad operativa del seller, que puede ser de dos tipos:<ul><li><i class="fas fa-toggle-on" aria-hidden="true"></i> **Activo:** el botón de alternancia está activado y el seller puede recibir nuevos pedidos, ya sea por encontrarse dentro del límite de la capacidad configurada, o por ser un seller con capacidad ilimitada.</li><li><i class="fas fa-toggle-off"></i> **En pausa:** el botón de alternancia está desactivado y el seller no puede recibir nuevos pedidos.</li>Para elegir cuándo pausar un seller, mira la sección [Elegir entre editar la capacidad operativa del seller, hacerla ilimitada o pausar seller](#elegir-entre-editar-capacidad-operativa-del-seller-hacerla-ilimitada-pausar-seller-o-desactivar-modulo). |

Al hacer clic en un seller, serás redirigido a la [página de detalles de la capacidad del seller](#acciones-en-la-pagina-de-detalles-de-la-capacidad-del-seller), que se verá más adelante.

## Acciones en el módulo Capacidad operativa

En la página **Envío > Capacidad operativa** del Admin VTEX, puedes realizar las siguientes acciones:

### Buscar sellers

En la barra de búsqueda puedes ingresar el nombre de un seller para encontrarlo.

> ℹ️ Puede asociarse la búsqueda de sellers con el [filtro por status](/es/docs/tutorials/capacidad-operacional#filtrar-sellers). Si no se devuelve ningún resultado, comprueba que no haya ningún filtro activo.

### Filtrar sellers

Puedes filtrar los sellers de la lista por status haciendo clic en `Status` y seleccionando `Ativos` o `En pausa`. Luego, haz clic en `Aplicar`.

Para limpiar los filtros aplicados, haz clic en **Status > Limpiar**.

### Activar y pausar capacidad operativa de sellers

Un seller estará con status <i class="fas fa-toggle-on"></i> `Activo` si el botón de alternancia está activado y <i class="fas fa-toggle-off"></i> `En pausa` si el botón de alternancia está desactivado. Para cambiar el status de la capacidad operativa de un solo seller, haz clic en el botón de alternancia de su fila correspondiente y confirma la operación haciendo clic en `Pausar`/`Activar`.

Para activar o pausar la capacidad operativa de varios sellers sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Envío > Capacidad operativa**, o escribe **Capacidad operativa** en la barra de búsqueda en la parte superior de la página.
2. Selecciona los sellers deseados marcando las casillas de selección al lado del nombre. Puedes seleccionar todos los sellers haciendo clic en una casilla de selección y luego clic en `Seleccionar todo`.
3. Haz clic en `Más acciones`.
4. Haz clic en `Activar` o `Pausar`, según desees.
5. Confirma haciendo clic en `Activar` o `Pausar`, según desees.

### Editar unidad de capacidad operativa del seller

La capacidad operativa del seller puede contabilizarse por cantidad de pedidos o cantidad de ítems. Para editar la capacidad operativa de uno o varios sellers sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Envío > Capacidad operativa**, o escribe **Capacidad operativa** en la barra de búsqueda en la parte superior de la página.
2. Selecciona los sellers deseados marcando las casillas de selección al lado del nombre. Puedes seleccionar todos los sellers haciendo clic en una casilla de selección y luego clic en `Seleccionar todo`.
3. Haz clic en `Editar capacidad`.
4. Escoge la **Unidad de capacidad operativa**:
   - **Cantidad de pedidos:** la capacidad operativa del seller se contará por número de pedidos.
   - **Cantidad de ítems:** la capacidad operativa del seller se contará por número de ítems del pedido.
5. Haz clic en `Guardar cambios`.

> ⚠️ La plataforma tiene algunas restricciones con respecto a los [sellers de extensa cobertura](/es/docs/tutorials/seller-de-extensa-cobertura), consulta más información en la sección [Comportamiento de sellers de extensa cobertura](#comportamiento-de-sellers-de-extensa-cobertura).

## Desactivar el módulo Capacidad operativa

Para desactivar el módulo **Capacidad operativa**, siga estos pasos:

1. En el Admin VTEX, accede a **Envío > Capacidad operativa**, o escribe **Capacidad operativa** en la barra de búsqueda en la parte superior de la página.
2. Haz clic en el botón <i class="fa-solid fa-ellipsis-vertical"></i>.
3. Haz  clic en <i class="fa-regular fa-circle-xmark"></i> `Desactivar módulo`.

## Acciones en la página de detalles de la capacidad del seller

En la página **Envío > Capacidad operativa** del Admin VTEX, al hacer clic en el nombre del seller, serás redirigido a su página de detalles de capacidad y podrás realizar las siguientes acciones:

* [Pausar y activar capacidad operativa del seller](#pausar-y-activar-capacidad-operativa-del-seller)
* [Monitorear la capacidad utilizada](#monitorear-la-capacidad-utilizada)
* [Editar capacidad operativa del seller](#editar-capacidad-operativa-del-seller)
* [Configurar capacidad ilimitada del seller](#configurar-capacidad-ilimitada-del-seller)
* [Editar dirección asociada al seller](#editar-dirección-asociada-al-seller)

### Pausar y activar capacidad operativa del seller

En la esquina superior derecha de la página de detalles del seller, hay un botón de alternancia para activar o desactivar la capacidad operativa:

* **Activar:** activa el botón de alternancia para `Activo` y haz clic en `Activar`.
* **Desactivar:** desactiva el botón de alternancia a `En pausa` y haz clic en `Pausar`.

> ⚠️ La plataforma tiene algunas restricciones con respecto a los [sellers de extensa cobertura](/es/docs/tutorials/seller-de-extensa-cobertura). Para saber más, accede a la sección [Comportamiento de sellers de extensa cobertura](#comportamiento-de-sellers-de-extensa-cobertura).

### Monitorear la capacidad utilizada

El gráfico **Status de la capacidad operativa** presenta, en tiempo real, el porcentaje de la capacidad del seller ya consumida durante el día actual y en los próximos tres días, como en la imagen a continuación:

![operational_capacity_image_2_ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/envío/capacidad-operacional/capacidad-operacional_2.png)

Si configuras el seller para que utilice la [regra](#iii-regra) \*Continuar recibiendo pedidos consumiendo la capacidad de los siguientes días, el gráfico mostrará el porcentaje de la capacidad operativa de los siguientes días que ya fue consumida por los pedidos de los días anteriores. Para más información, consulta [Editar capacidad operativa del seller](#editar-capacidad-operativa-del-seller).

![operational_capacity_image_3_ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/envío/capacidad-operacional/capacidad-operacional_3.png)

### Editar capacidad operativa del seller

En la sección **Capacidad operativa** puedes consultar la configuración actual de la capacidad operativa del seller para cada día de la semana. Para modificar la configuración sigue los pasos a continuación:

1. En la página de detalles de la capacidad del seller, busca la sección **Capacidad operativa**.
2. Haz clic en `Editar`.
3. Cambia las opciones deseadas, que pueden ser:
   - [I - Unidad de capacidad operativa](#i-unidad-de-capacidad-operativa)
   - [II - Capacidad](#ii-capacidad)
   - [III - Regla](#iii-regla)
4. Haz clic en `+ Agregar capacidad por política comercial` para configurar la segmentación de la capacidad operativa por política comercial. Selecciona en la sección **Segmentación por política comercial** las políticas comerciales que deseas incluir.
5. Haz clic en `Guardar cambios`.

A continuación se detallan las descripciones de los campos mencionados en los pasos anteriores.

#### I - Unidad de capacidad operativa

Elige si la capacidad operativa se definirá por número de _pedidos_ o de _ítems_. El número de ítems considera los ítems de todos los pedidos realizados en un día.

#### II - Capacidad

Establece el límite de la capacidad operativa del seller para cada día de la semana. El sistema no tiene un límite máximo establecido.

Cuando se alcanza el límite configurado, tu tienda sigue recibiendo nuevos pedidos que pueden distribuirse entre otros sellers o asignarse al mismo seller, pero consumiendo la capacidad de los próximos días dependiendo de la regla que selecciones.

#### III - Regla

Selecciona la regla que se aplicará cuando el seller alcance la capacidad máxima del día:

* \*\*Continuar recibiendo pedidos consumiendo la capacidad de los siguientes días: el seller sigue recibiendo nuevos pedidos después de alcanzar la capacidad. Dichos pedidos se asignan a la capacidad de los próximos días y se ajusta la promesa de envío a los clientes en el checkout. Este periodo no se puede configurar en horas, ya que se ajustará automáticamente al número de días siguientes al que fue asignado.
  - Si eliges esta regla, determina cuál es el número de días siguientes para asignar los pedidos que superen la capacidad del día actual.
  > **Ejemplo:** un seller vende chocolates y su capacidad operativa de hoy fue consumida al 100%. El seller continúa recibiendo pedidos, pero los preparará mañana porque su equipo no tiene la capacidad de preparar más pedidos de los que ya están programados para hoy. En el checkout, la promesa de envío de nuevos pedidos incluirá un día adicional en el plazo, ya que se prepararán mañana. Si la capacidad de mañana se consume completamente hoy, los nuevos pedidos se asignarán a pasado mañana y se prepararán dos días después porque la tienda configuró tres días para Continuar recibiendo pedidos consumiendo la capacidad de los siguientes días.
* **Pausar este seller hasta el final del día**: si el seller alcanza el límite de su capacidad diaria ya no podrá recibir más pedidos ese día y los nuevos pedidos se asignan a otros sellers.

### Configurar capacidad ilimitada del seller

En la sección **Capacidad operativa** puedes realizar la configuración para que el seller tenga capacidad ilimitada. Esto permite que el seller reciba pedidos sin restricciones, es decir, sin necesidad de gestionar su capacidad operativa.

Para configurar la capacidad ilimitada del seller sigue los pasos a continuación:

1. En la página de detalles de la capacidad del seller, busca la sección **Capacidad operativa**.
2. Haz clic en **Configuración**.
3. En la sección **Capacidad Operativa**, haz clic en <i class="fa fa-link" aria-hidden="true"></i> `Establecer como ilimitada`.
4. Haz clic en `Confirmar`.

> ℹ️ La capacidad ilimitada del seller es el comportamiento predeterminado de los sellers para tiendas que no utilizan **Capacidad operativa**. Cuando el seller está configurado con capacidad ilimitada, el módulo no calcula el consumo de su capacidad operativa.

Para saber cuándo es mejor elegir cada estrategia, ve la sección [Elegir entre editar capacidad operativa del seller, hacerla ilimitada o pausar seller](#elegir-entre-editar-capacidad-operativa-del-seller-hacerla-ilimitada-pausar-seller-o-desactivar-modulo).

### Editar la dirección del seller

Para editar la dirección o el nombre de identificación del seller en **Capacidad operativa** sigue los pasos a continuación:

1. En la página de detalles de la capacidad del seller, busca la sección **Información básica**.
2. Haz clic en `Editar información básica`.
3. Modifica la información deseada.
4. Haz clic en `Guardar cambios`.

## Comportamiento de sellers de extensa cobertura

En el sitio web de tu tienda, cuando el cliente no informa su ubicación, ve los productos de tu tienda (seller 1) y de los [sellers de extensa cobertura](/es/docs/tutorials/seller-de-extensa-cobertura).

Debido a una limitación de la plataforma, cuando desactivas la capacidad operativa de un seller de extensa cobertura, sus productos siguen mostrándose como disponibles en la vitrina, aunque el cliente no puede comprarlos. Por esta razón recomendamos mantener siempre activa la capacidad operativa de sellers de extensa cobertura.

## Elegir entre editar capacidad operativa del seller, hacerla ilimitada, pausar seller o desactivar módulo

Para definir la mejor estrategia para tu negocio ante diferentes situaciones, es importante comprender lo siguiente:

*-* **[Seller pausado](#pausar-y-activar-la-capacidad-operativa-del-seller):** el seller deja de recibir nuevos pedidos hasta que se active nuevamente. Aunque esté configurada la regla _Continuar recibiendo pedidos consumiendo la capacidad de los siguientes días_ no se aceptarán nuevos pedidos.
  > **Ejemplo:** la tienda del seller tuvo problemas en las instalaciones y la preparación de nuevos pedidos se vio comprometida. En este caso, pausar el seller y activarlo solo cuando pueda preparar pedidos nuevamente es una decisión estratégica.
* **[Seller con límite de capacidad alcanzado](#monitorear-capacidad-utilizada):** el seller con 100% de la capacidad consumida deja de recibir nuevos pedidos ese día. Al día siguiente su capacidad se restablece automáticamente y puede volver a recibir nuevos pedidos.
  > **Ejemplo:** la víspera de Navidad el seller alcanzó el límite máximo de su capacidad diaria y no podría preparar más pedidos, por lo tanto no sería útil [aumentar la capacidad operativa del seller](#editar-capacidad-operativa-del-seller). Al día siguiente el seller podrá preparar nuevos pedidos, por lo que sería preferible no editar la capacidad operativa del seller, ya que esta se liberará al día siguiente y volvería a recibir nuevos pedidos.
* **[Seller con capacidad ilimitada](#configurar-capacidad-ilimitada-del-seller):** el seller recibe pedidos sin restricciones, es decir, no es necesario gestionar el límite de capacidad operativa de este seller. Este es el comportamiento predeterminado de la plataforma para sellers de tiendas que no usan **Capacidad operativa**.
  > **Ejemplo:** un seller vende solo productos digitales que no requieren tiempo de preparación y envío. En este caso lo ventajoso sería que su capacidad operativa fuera ilimitada.
* **[Módulo desactivado](#desactivar-el-modulo-capacidad-operativa):** cuando el módulo Capacidad operativa no está habilitado, el módulo no tiene efecto y no se puede gestionar la capacidad operativa de sellers. Sin embargo, al desactivar el módulo, la configuración de la capacidad operativa de los sellers realizada anteriormente no se pierde y vuelve a funcionar cuando se reactiva el módulo.
  > **Ejemplo:** por algún imprevisto en tu operación, prefieres dejar de utilizar temporalmente el módulo Capacidad operativa. En este caso, sería apropiado desactivarlo.

## Desactivar el módulo Capacidad operativa

Si deseas dejar de utilizar Capacidad operativa y suspender los efectos de los ajustes de capacidad para todos los sellers puedes desactivar el módulo. Al hacerlo, no se perderán los ajustes de capacidad de los sellers configurados anteriormente, pero sí dejan de tener efecto.

Para desactivar el módulo Capacidad operativa sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Envío > Capacidad operativa**, o escribe **Capacidad operativa** en la barra de búsqueda en la parte superior de la página.
2. En el menú en la parte superior derecha de la página, haz clic en `Desactivar módulo`.
3. En la ventana modal, haz clic en `Desactivar`.

> ⚠️ En cualquier momento puedes volver a [activar el módulo Capacidad operativa](/es/docs/tutorials/capacidad-operacional) para gestionar la capacidad de tus sellers.
