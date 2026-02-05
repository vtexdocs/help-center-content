---
title: 'Capacidad operativa (Beta)'
id: 2thSYLMAS8KAd8V4XuBLSy
status: PUBLISHED
createdAt: 2023-05-08T18:03:07.644Z
updatedAt: 2025-01-23T12:00:02.987Z
publishedAt: 2025-01-23T12:00:02.987Z
firstPublishedAt: 2023-05-09T17:22:57.861Z
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: operational-capacity-beta
legacySlug: modulo-localidades
locale: es
subcategoryId: 13sVE3TApOK1C8jMVLTJRh
---

> ℹ️ Esta funcionalidad se encuentra en la versión Beta, por lo tanto, estamos trabajando para mejorarla. Si tienes alguna duda, ponte en contacto con [nuestro Soporte](https://supporticket.vtex.com/support).

> ⚠️ El requisito para usar la funcionalidad es tener [cuentas franquicia](/es/docs/tutorials/que-es-una-cuenta-franquicia) asociadas a la [cuenta principal](/es/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#tipos-de-cuenta-vtex).

El módulo **Capacidad operativa (Beta)** te ayuda a gestionar la capacidad de los sellers para recibir y preparar pedidos de la tienda, optimizando así tu red logística. Puedes monitorear la distribución de pedidos entre los sellers y realizar [acciones](#acciones-en-la-pagina-de-detalles-de-la-capacidad-del-seller) para mejorarla.

Una buena gestión de la capacidad operativa de los sellers tiene los siguientes beneficios:

- Mejor redistribución de la demanda de productos entre los stocks de diferentes sellers.
- Optimización del plazo de envío de pedidos evitando sobrecargar sellers.
- Mejor experiencia de compra para los clientes, ya que reciben sus pedidos en el plazo prometido.

Este artículo explica cómo utilizar el módulo **Capacidad operativa (Beta)** y trata los siguientes temas:

* [Activar el módulo Capacidad operativa (beta)](#activar-el-modulo-capacidad-operativa-beta)
* [Presentación del módulo Capacidad operativa (Beta)](#presentacion-del-modulo-capacidad-operativa-beta)
* [Acciones en el módulo Capacidad operativa (Beta)](#acciones-en-el-modulo-capacidad-operativa-beta)
* [Acciones en la página de detalles de la capacidad del seller](#acciones-en-la-pagina-de-detalles-de-la-capacidad-del-seller)
* [Comportamiento de sellers de extensa cobertura](#comportamiento-de-sellers-de-extensa-cobertura)
* [Elegir entre editar la capacidad operativa del seller, hacerla ilimitada o pausar seller  o desactivar módulo](#elegir-entre-editar-la-capacidad-operativa-del-seller-hacerla-ilimitada-o-pausar-seller-o-desactivar-modulo)
* [Desactivar el módulo Capacidad operativa (beta)](#desactivar-el-modulo-capacidad-operativa-beta)

> ℹ️ Para poder activar y gestionar el módulo **Capacidad operativa (Beta)**, tu [rol](/es/docs/tutorials/roles) en el Admin VTEX debe estar asociado al [recurso de License Manager](/es/docs/tutorials/recursos-del-license-manager) denominado *Logistics full access*.

## Activar el módulo Capacidad operativa (beta)

Para comenzar a utilizar la funcionalidad, es necesario activar la **Capacidad operativa (beta)** en el Admin VTEX. Si no se activa, el módulo no genera efectos y no permite gestionar la capacidad de los sellers.

> ⚠️ Antes de activar el módulo, te recomendamos que configures la capacidad operativa de tus sellers. De este modo, antes de que la funcionalidad surta efecto, contarás con una vista previa de cómo se consume la capacidad de cada seller, lo que te permitirá ajustar la configuración según las necesidades de tu operación.

Para activar el módulo **Capacidad operativa (beta)** sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Envío > Capacidad operativa**, o escribe **Capacidad operativa** en la barra de búsqueda en la parte superior de la página.
2. En la parte superior de la página se mostrará el siguiente aviso: *"Módulo desactivado: actívalo para que la configuración realizada se aplique en la plataforma VTEX".*
3. En el aviso, haz clic en `Activar`.

Si deseas dejar de utilizar la funcionalidad, puedes [desactivar la Capacidad operativa (beta)](#desactivar-el-modulo-capacidad-operativa-beta) en cualquier momento. Sin embargo, es conveniente considerar otras estrategias, como se puede consultar en [Elegir entre editar la capacidad operativa del seller, hacerla ilimitada, pausar seller o desactivar el módulo](#elegir-entre-editar-la-capacidad-operativa-del-seller-hacerla-ilimitada-o-pausar-seller-o-desactivar-modulo).

## Presentación del módulo Capacidad operativa (Beta)

Al acceder a **Envío > Capacidad operativa** en el Admin VTEX, o ingresar **Capacidad operativa** en la barra de búsqueda, verás una página según se ilustra a continuación:

![operational_capacity_image_1_ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/beta/envío-beta/capacidad-operacional-beta_1.png)

> ⚠️ Los sellers que aparecen en la interfaz son los sellers de tu operación, configurados previamente por nuestro equipo. Para agregar un nuevo seller, ponte en contacto con [nuestro soporte](https://supporticket.vtex.com/support).

El gráfico muestra los siguientes datos:

- **Total de sellers:** número total de sellers de tu operación.
- **Activos:** número de sellers recibiendo nuevos pedidos, ya sean sellers con un límite de capacidad configurado o con capacidad ilimitada.
- **Pausados:** número de sellers pausados, es decir, que no están recibiendo nuevos pedidos.
- **Número de sellers que excedieron la capacidad:** número de sellers que recibieron más pedidos de lo que su límite configurado permite. Puedes seleccionar los resultados de los últimos `7 días` o `28 días`.

La página **Capacidad operativa (Beta)** contiene la siguiente información:

| **Columna** | **Descripción** |
| :----------: | :---------- |
| Seller | Identificación del [seller](/es/docs/tutorials/que-es-un-seller) referido en la capacidad operativa. |
| Capacidad de operación | Porcentaje de capacidad operativa del seller utilizada en el día.**Ejemplo:** un seller con capacidad para preparar 100 pedidos diarios tiene un 80% de su capacidad operativa del día utilizada. Esto significa que solo puede recibir 20 pedidos nuevos ese día.En esta columna, se muestra un ícono de alerta cuando el seller alcanza el 100% de su capacidad y no puede recibir nuevos pedidos ese día.Puedes [editar la capacidad operativa de los sellers](#editar-la-capacidad-operativa-del-seller) individualmente o en masa. |
| Status | Status de la capacidad operativa del seller, que pueden ser dos:<ul><li><i class="fas fa-toggle-on" aria-hidden="true"></i> **Activo:** el botón de alternancia está activado y el seller puede recibir nuevos pedidos, bien porque está dentro del límite de capacidad configurado, bien porque es un seller de capacidad ilimitada.</li><li><i class="fas fa-toggle-off" aria-hidden="true"></i>**Pausado:** el botón de alternancia está desactivado y el seller no puede recibir nuevos pedidos.</li></ul>Para decidir cuándo pausar un seller, consulta la sección [Elegir entre editar la capacidad operativa del seller, hacerla ilimitada o pausar seller](#elegir-entre-editar-la-capacidad-operativa-del-seller-hacerla-ilimitada-o-pausar-seller-o-desactivar-modulo). |

Al hacer clic en un seller, se te redirige a la [página de detalles de la capacidad del seller](#acciones-en-la-pagina-de-detalles-de-la-capacidad-del-seller), que describiremos más adelante.

## Acciones en el módulo Capacidad operativa (Beta)

En la página **Envío > Capacidad operativa** del Admin VTEX, puedes realizar las siguientes acciones:

- [Buscar seller](#buscar-seller)
- [Filtrar sellers](#filtrar-sellers)
- [Activar y pausar capacidad operativa de sellers](#activar-y-pausar-la-capacidad-operativa-de-sellers)
- [Editar unidad de capacidad operativa del seller](#editar-unidad-de-capacidad-operativa-del-seller)

### Buscar seller

En la barra de búsqueda puedes escribir el nombre de un seller para encontrarlo.

> ℹ️ Puedes aplicar el [filtro status](#filtrar-sellers) a la búsqueda de sellers. Si no se devuelve ningún resultado, comprueba que no haya ningún filtro activo.

### Filtrar sellers

Puedes filtrar los sellers de la lista por status haciendo clic en `Status` y seleccionando `Activos` o `En pausa`. Luego, haz clic en `Aplicar`.

Para limpiar los filtros aplicados, haz clic en **Status > Limpiar**.

### Activar y pausar la capacidad operativa de sellers

Un seller tiene status <i class="fas fa-toggle-on" aria-hidden="true"></i> `Activo` si el botón de alternancia está activado y <i class="fas fa-toggle-off" aria-hidden="true"></i> `Pausado` si está desactivado. Para cambiar el status de la capacidad operativa de un solo seller, haz clic en el botón de alternancia de la línea correspondiente al seller y confirma la acción haciendo clic en `Pausar`/`Activar`. 

Para activar o pausar la capacidad operativa de varios sellers, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Envío > Capacidad operativa**, o escribe **Capacidad operativa** en la barra de búsqueda en la parte superior de la página.
2. Selecciona los sellers deseados marcando las casillas de selección al lado del nombre. Puedes seleccionar todos los sellers marcando cualquier casilla de selección y luego haciendo clic en `Seleccionar todo`.
3. Haz clic en `Más acciones`.
4. Luego, haz clic en `Activar` o `Pausar`, según corresponda.
5. Confirma la acción haciendo clic en `Activar` o `Pausar`, según corresponda.

### Editar unidad de capacidad operativa del seller

La capacidad operativa del seller puede medirse por número de pedidos o ítems de pedidos. Para editar la capacidad operativa de uno o varios sellers, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Envío > Capacidad operativa**, o escribe **Capacidad operativa** en la barra de búsqueda en la parte superior de la página.
2. Selecciona los sellers deseados marcando las casillas de selección al lado del nombre. Puedes seleccionar todos los sellers marcando cualquier casilla de selección y luego haciendo clic en `Seleccionar todo`.
3. Haz clic en `Editar capacidad`.
4. Escoge la **Unidad de capacidad operativa**:
    - **Cantidad de pedidos:** la capacidad operativa del seller se medirá por número de pedidos.
    - **Cantidad de ítems:** la capacidad del seller se medirá por número de ítems del pedido.
5. Haz clic en `Guardar cambios`.

> ⚠️ La plataforma tiene algunas restricciones con respecto a [sellers de extensa cobertura](/es/docs/tutorials/seller-de-extensa-cobertura). La sección [Comportamiento de sellers de extensa cobertura](#comportamiento-de-sellers-de-extensa-cobertura) contiene más información.

## Acciones en la página de detalles de la capacidad del seller

En la página **Envío > Capacidad operativa** del Admin VTEX, si haces clic en el nombre del seller, se te redirige a la página de detalles de la capacidad del seller donde puedes realizar las siguientes acciones:

- [Pausar y activar la capacidad operativa del seller](#pausar-y-activar-la-capacidad-operativa-del-seller)
- [Monitorear la capacidad utilizada](#monitorear-la-capacidad-utilizada)
- [Editar la capacidad operativa del seller](#editar-la-capacidad-operativa-del-seller)
- [Configurar capacidad ilimitada del seller](#configurar-capacidad-ilimitada-del-seller)
- [Editar la dirección del seller](#editar-la-direccion-del-seller)

### Pausar y activar la capacidad operativa del seller

En la esquina superior derecha de la página de detalles del seller, hay un botón de alternancia para activar o desactivar la capacidad operativa:

- **Activar:** habilita el botón de alternancia para que el status esté `Activo` y haz clic en `Activar`.
- **Desactivar:** inhabilita el botón de alternancia para que el status esté `Pausado` y haz clic en `Pausar`.

> ⚠️ La plataforma tiene algunas restricciones en relación con [sellers de extensa cobertura](/es/docs/tutorials/seller-de-extensa-cobertura). La sección [Comportamiento de sellers de extensa cobertura](#comportamiento-de-sellers-de-extensa-cobertura) contiene más información.

### Monitorear la capacidad utilizada

El gráfico **Status de la capacidad operativa** muestra, en tiempo real, el porcentaje de la capacidad del seller que ya se ha consumido en el día actual y en los próximos tres días, como en la siguiente imagen:

![operational_capacity_image_2_ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/beta/envío-beta/capacidad-operacional-beta_2.png)

Si configuras el seller para que utilice la [regla](#iii-regla) _Continuar recibiendo pedidos consumiendo la capacidad de los siguientes días_, el gráfico mostrará el porcentaje de la capacidad operativa de los siguientes días que ya fue consumida por los pedidos de los días anteriores. Puedes consultar más información en [Editar la capacidad operativa del seller](#editar-la-capacidad-operativa-del-seller).

### Editar la capacidad operativa del seller

En la sección **Capacidad operativa**, puedes ver la configuración actual de la capacidad operativa del seller para cada día de la semana. Para modificar la configuración, sigue estos pasos:

1. En la página de detalles de la capacidad del seller, busca la sección **Capacidad operativa**.
2. Haz clic en `Editar`.
3. Cambia las opciones deseadas, que pueden ser:
    - [I - Unidad de capacidad operativa](#i-unidad-de-capacidad-operativa)
    - [II - Capacidad](#ii-capacidad)
    - [III - Regla](#iii-regla)
4. Haz clic en `Guardar cambios`.

A continuación, se detallan las descripciones de los campos mencionados en los pasos anteriores.

#### I - Unidad de capacidad operativa

Define si la capacidad operativa se medirá por el número de _pedidos_ o de _ítems_. El número de ítems considera los ítems de todos los pedidos realizados en un día.

#### II - Capacidad

Establece el límite de la capacidad operativa del seller para cada día de la semana. El sistema no tiene un límite máximo establecido.

Cuando se alcanza el límite configurado, tu tienda sigue recibiendo nuevos pedidos, que pueden distribuirse entre otros sellers o asignarse al mismo seller, pero consumiendo la capacidad de los próximos días dependiendo de la regla que selecciones. 

#### III - Regla

Selecciona la regla que se aplicará cuando el seller alcance la capacidad máxima del día:

- **Continuar recibiendo pedidos consumiendo la capacidad de los siguientes días:** el seller sigue recibiendo nuevos pedidos después de alcanzar la capacidad. Dichos pedidos se asignan a la capacidad de los próximos días y se ajusta la promesa de envío a los clientes en el checkout. Este periodo no se puede configurar en horas, ya que se ajustará automáticamente al número de días siguientes al que fue asignado.
  - Si seleccionas esta regla, debes establecer el número de días siguientes para asignar los pedidos que excedan la capacidad del día actual.
  > **Ejemplo:** un seller vende chocolates y su capacidad del día actual ya alcanzó el 100 %. El seller continúa recibiendo pedidos, pero los preparará mañana porque su equipo no tiene la capacidad de preparar más pedidos de los que ya están programados para hoy. En el checkout, la promesa de envío de nuevos pedidos incluirá un día adicional en el plazo, ya que se prepararán mañana. Si la capacidad de mañana se consume completamente hoy, los nuevos pedidos se asignarán a pasado mañana y se prepararán dos días después porque la tienda configuró tres días en Continuar recibiendo pedidos consumiendo la capacidad de los siguientes días.
- **Pausar este seller hasta el final del día:** si el seller alcanza el límite de su capacidad diaria, ya no podrá recibir más pedidos ese día y los nuevos pedidos se asignan a otros sellers.

### Configurar capacidad ilimitada del seller

En la sección **Capacidad operativa** puedes realizar la configuración para que el seller tenga capacidad ilimitada. Esto permite que el seller reciba pedidos sin restricciones, es decir, sin necesidad de gestionar su capacidad operativa.

Para configurar la capacidad ilimitada del seller sigue los pasos a continuación:

1. En la página de detalles de la capacidad del seller, busca la sección **Capacidad operativa**.
2. Haz clic en `Activar la capacidad ilimitada`. 
3. Haz clic en `Continuar`.

> ℹ️ La capacidad ilimitada del seller es el comportamiento predeterminado de los sellers para tiendas que no utilizan **Capacidad operativa (Beta)**. Cuando el seller está configurado con capacidad ilimitada, el módulo no calcula el consumo de su capacidad operativa.

Para escoger cuándo pausar un seller, consulta la sección [Elegir entre editar la capacidad operativa del seller, hacerla ilimitada o pausar seller](#elegir-entre-editar-la-capacidad-operativa-del-seller-hacerla-ilimitada-o-pausar-seller-o-desactivar-modulo).

### Editar la dirección del seller

Para editar la dirección o el nombre de identificación del seller en **Capacidad operativa (Beta)**, sigue los pasos a continuación:

1. En la página de detalles de la capacidad del seller, busca la sección **Información básica**.
2. Haz clic en `Editar información básica`.
3. Modifica la información deseada.
4. Haz clic en `Guardar cambios`.

## Comportamiento de sellers de extensa cobertura

Cuando el cliente informa su ubicación en el sitio web de la tienda, se muestran los productos de tu tienda (seller 1) y de los [sellers de extensa cobertura](/es/docs/tutorials/seller-de-extensa-cobertura). 

Debido a una limitación de la plataforma, cuando desactivas la capacidad operativa de un seller de extensa cobertura, sus productos siguen apareciendo como disponibles en la vitrina, aunque el cliente no puede comprarlos. Por esta razón, recomendamos mantener siempre activa la capacidad operativa de sellers de extensa cobertura.

## Elegir entre editar la capacidad operativa del seller, hacerla ilimitada o pausar seller o desactivar módulo

Para decidir la mejor estrategia para tu negocio en diferentes situaciones, es importante entender lo siguiente:

- **[Seller pausado](#pausar-y-activar-la-capacidad-operativa-del-seller):** el seller deja de recibir nuevos pedidos hasta que lo reactives. Aun si se configura la regla _Continuar recibiendo pedidos consumiendo la capacidad de los siguientes días_, no aceptará nuevos pedidos.
  > **Ejemplo:** la tienda del seller tuvo problemas en las instalaciones y se comprometió la preparación de nuevos pedidos. En este caso, pausar el seller y activarlo después de que pueda preparar pedidos nuevamente es una decisión estratégica.
- **[Seller con límite de capacidad alcanzad](#monitorear-la-capacidad-utilizada):** el seller deja de recibir pedidos ese día al alcanzar el 100 % de su capacidad. La capacidad operativa del seller se liberará al día siguiente y recibirá pedidos automáticamente.
  > **Ejemplo:** el día de Nochebuena, el seller alcanzó el máximo de su capacidad y no puede preparar más pedidos. No valdría la pena [aumentar la capacidad operativa del seller](#editar-la-capacidad-operativa-del-seller). Al día siguiente el seller podrá preparar nuevos pedidos. Por lo tanto, sería preferible no editar el seller, ya que su capacidad se liberará al día siguiente y recibirá nuevos pedidos.
- **[Seller con capacidad ilimitada](#configurar-capacidad-ilimitada-del-seller):** el seller recibe pedidos sin restricciones, es decir, no es necesario que gestiones el límite de la capacidad operativa de este seller. Este es el comportamiento predeterminado de la plataforma para los sellers de tiendas que no utilizan Capacidad operativa (Beta).
  > **Ejemplo:** un seller vende únicamente productos digitales que no requieren tiempo de preparación y envío. En este caso, sería ventajoso que su capacidad operativa fuera ilimitada.
* Módulo desactivado: cuando el módulo Capacidad operativa (beta) no está activado, no tiene ningún efecto y no es posible gestionar la capacidad operativa de los sellers. Sin embargo, al desactivar el módulo, la configuración de la capacidad operativa de los sellers realizada anteriormente no se pierde y vuelve a funcionar cuando se reactiva el módulo.
Ejemplo: por algún motivo imprevisto en tu operación, prefieres dejar de utilizar temporalmente el módulo Capacidad operativa (beta). En este caso, sería apropiado desactivarlo.

## Desactivar el módulo Capacidad operativa (beta)

Si deseas dejar de utilizar **Capacidad operativa (beta)** y suspender los efectos de los ajustes de capacidad para todos los sellers puedes desactivar el módulo. Al hacerlo, no se perderán los ajustes de capacidad de los sellers configurados anteriormente, pero sí dejan de tener efecto.

Para desactivar el módulo **Capacidad operativa (beta)** sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Envío > Capacidad operativa**, o escribe **Capacidad operativa** en la barra de búsqueda en la parte superior de la página.
2. En el menú de la parte superior derecha de la página, haz clic en `Desactivar módulo`. 
3. En la ventana modal, haz clic en `Desactivar`.

> ⚠️ Puedes [activar el módulo Capacidad operativa (beta)](/es/tutorial/capacidad-operacional-beta--2thSYLMAS8KAd8V4XuBLSy#activar-el-modulo-capacidad-operativa-beta) para gestionar la capacidad de tus sellers en cualquier momento.

