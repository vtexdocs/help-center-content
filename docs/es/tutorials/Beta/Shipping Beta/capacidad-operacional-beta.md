---
title: 'Capacidad operativa (Beta)'
id: 2thSYLMAS8KAd8V4XuBLSy
status: PUBLISHED
createdAt: 2023-05-08T18:03:07.644Z
updatedAt: 2024-09-05T17:50:56.209Z
publishedAt: 2024-09-05T17:50:56.209Z
firstPublishedAt: 2023-05-09T17:22:57.861Z
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: operational-capacity-beta
locale: es
legacySlug: modulo-localidades
subcategoryId: 13sVE3TApOK1C8jMVLTJRh
---

>ℹ️ Esta funcionalidad se encuentra en la versión Beta, por lo tanto, estamos trabajando para mejorarla. Si tienes alguna duda, ponte en contacto con <a href= "https://help.vtex.com/es/support">nuestro Soporte</a>.

>⚠️ El requisito para usar la funcionalidad es tener [cuentas franquicia](https://help.vtex.com/es/tutorial/o-que-e-conta-franquia--kWQC6RkFSCUFGgY5gSjdl) asociadas a la [cuenta principal](https://help.vtex.com/es/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#tipos-de-cuenta-vtex).

La página **Capacidad operativa** permite gestionar la capacidad de los sellers para recibir y preparar pedidos de la tienda, lo que te permite optimizar tu red logística. Puedes monitorear la distribución de pedidos entre los sellers y realizar [acciones](https://help.vtex.com/es/tutorial/capacidade-operacional-beta--2thSYLMAS8KAd8V4XuBLSy#acciones-en-la-pagina-de-detalles-del-seller) para mejorarla.

Una buena gestión de la capacidad operativa de los sellers tiene los siguientes beneficios:

- Mejor redistribución de la demanda de productos entre los stocks de diferentes sellers.
- Optimización del plazo de envío de pedidos evitando sobrecargar sellers.
- Mejor experiencia de compra para los clientes, ya que reciben sus pedidos en el plazo prometido.

Al acceder a **Envío > Capacidad operativa** en el Admin VTEX, verás una página según se ilustra a continuación:

![operational_capacity_image1_ES](//images.ctfassets.net/alneenqid6w5/5k7wWTuVZk7Ylc2IHpNE5C/defaa51c729689fdd70aa1e00e018d40/operational_capacity_image1_ES.png)

>⚠️ Los sellers que aparecen en la interfaz son los sellers de tu operación, configurados previamente por nuestro equipo. Para agregar un nuevo seller, ponte en contacto con [nuestro soporte](https://help.vtex.com/es/support).

El gráfico muestra los siguientes datos:

- **Total de sellers:** número total de sellers de tu operación.
- **Activos:** número de sellers recibiendo nuevos pedidos.
- **Pausados:** número de sellers pausados, es decir, que no están recibiendo nuevos pedidos.
- **Número de sellers que excedieron la capacidad:** número de sellers que recibieron más pedidos de lo que su límite configurado permite. Puedes seleccionar los resultados de los últimos `7 días` o `28 días`.

La página **Capacidad operativa** contiene la siguiente información:

| **Columna** | **Descripción** |
| :----------: | :---------- |
| Nombre | Identificación del <a href="https://help.vtex.com/es/tutorial/o-que-e-um-seller--5FkLvhZ3Few4CWWIuYOK2w">seller</a> referido en la capacidad operativa. |
| Capacidad de operación | <p>Porcentaje de capacidad operativa utilizada en el día.</p><p><b>Ejemplo:</b> un seller con capacidad para preparar 100 pedidos tiene un 80 % de su capacidad operativa del día utilizada. Esto significa que solo puede recibir 20 pedidos nuevos ese día.</p><p>En esta columna, se muestra un ícono de alerta cuando el seller alcanza el 100 % de su capacidad y no puede recibir nuevos pedidos ese día.</p><p>Puedes <a href="https://help.vtex.com/es/tutorial/capacidade-operacional-beta--2thSYLMAS8KAd8V4XuBLSy#editar-la-capacidad-operativa-del-seller">editar la capacidad operativa de los sellers</a> individualmente o en masa, según se describe en Editar capacidad operativa del seller.</p> |
| Status | <p>Status de la capacidad operativa del seller, que pueden ser dos:</p><p><ul><li><i class="fas fa-toggle-on" aria-hidden="true"></i> <b>Activo:</b> el botón de alternancia está activado y el seller puede recibir nuevos pedidos.</li><li><i class="fas fa-toggle-off" aria-hidden="true"></i><b>Pausado:</b> el botón de alternancia está desactivado y el seller no puede recibir nuevos pedidos.</li></ul></p><p>Para decidir cuándo pausar un seller, consulta la sección <a href="https://help.vtex.com/es/tutorial/capacidade-operacional-beta--2thSYLMAS8KAd8V4XuBLSy#pausar-o-aumentar-la-capacidad-operativa">Pausar o aumentar la capacidad operativa</a>.</p> |

Al hacer clic en un seller, se te redirige a la [página de detalles del seller](#acciones-en-la-pagina-de-detalles-del-seller), que describiremos más adelante.

## Acciones en Capacidad operativa

En la página **Envío > Capacidad operativa** del Admin VTEX, puedes realizar las siguientes acciones:

- [Buscar seller](#buscar-seller)
- [Filtrar sellers](#filtrar-sellers)
- [Activar y pausar capacidad operativa de sellers](#activar-y-pausar-la-capacidad-operativa-de-sellers)
- [Editar unidad de capacidad operativa del seller](#editar-unidad-de-capacidad-operativa-del-seller)

### Buscar seller

En la barra de búsqueda puedes escribir el nombre de un seller para encontrarlo.

>ℹ️ Puedes asociar la búsqueda de sellers con el [filtro de status](https://help.vtex.com/es/tutorial/capacidade-operacional-beta--2thSYLMAS8KAd8V4XuBLSy#filtrar-sellers). Si no se devuelve ningún resultado, comprueba que no haya ningún filtro activo.

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

>⚠️ La plataforma tiene algunas restricciones con respecto a [sellers de extensa cobertura](https://help.vtex.com/es/tutorial/seller-abrangente--5Qn4O2GpjUIzWTPpvLUfkI). La sección [Capacidad operativa de sellers de extensa cobertura](https://help.vtex.com/es/tutorial/capacidade-operacional-beta--2thSYLMAS8KAd8V4XuBLSy#capacidad-operativa-de-sellers-de-extensa-cobertura) contiene más información.

## Acciones en la página de detalles del seller

En la página **Envío > Capacidad operativa** del Admin VTEX, si haces clic en un seller, se te redirige a la página de detalles del seller donde puedes realizar las siguientes acciones:

- [Pausar y activar la capacidad operativa del seller](#pausar-y-activar-la-capacidad-operativa-del-seller)
- [Monitorear la capacidad utilizada](#monitorear-la-capacidad-utilizada)
- [Editar la dirección del seller](#editar-la-direccion-del-seller)
- [Editar la capacidad operativa del seller](#editar-la-capacidad-operativa-del-seller)

### Pausar y activar la capacidad operativa del seller

En la esquina superior derecha de la página de detalles del seller, hay un botón de alternancia para activar o desactivar la capacidad operativa:

- **Activar:** habilita el botón de alternancia para que el status esté `Activo` y haz clic en `Activar`.
- **Desactivar:** inhabilita el botón de alternancia para que el status esté `Pausado` y haz clic en `Pausar`.

>⚠️ La plataforma tiene algunas restricciones en relación con [sellers de extensa cobertura](https://help.vtex.com/es/tutorial/seller-abrangente--5Qn4O2GpjUIzWTPpvLUfkI). La sección [Capacidad operativa de sellers de extensa cobertura](https://help.vtex.com/es/tutorial/capacidade-operacional-beta--2thSYLMAS8KAd8V4XuBLSy#capacidad-operativa-de-sellers-de-extensa-cobertura) contiene más información.

### Monitorear la capacidad utilizada

El gráfico **Status de la capacidad operativa** muestra en tiempo real el porcentaje utilizado de la capacidad del seller, como se ilustra a continuación:

![operational_capacity_image2_ES](//images.ctfassets.net/alneenqid6w5/510RtT3ugOksM3YD5tYSGc/1c6046c4c098cca52060888b61f53fa9/operational_capacity_image2_ES.png)

El gráfico muestra los siguientes periodos:

- Hoy
- Mañana
- Datos de los próximos dos días

Si configuras el seller para que utilice la [regla](#iii-regla) _Continuar recibiendo pedidos consumiendo la capacidad de los siguientes días_, el gráfico mostrará el porcentaje de la capacidad operativa de los siguientes días que ya fue consumida por los pedidos de los días anteriores. Puedes consultar más información en [Editar la capacidad operativa del seller](#editar-la-capacidad-operativa-del-seller).

### Editar la dirección del seller

Para editar la dirección o el nombre de identificación del seller en **Capacidad operativa**, sigue los pasos a continuación:

1. En la sección **Información básica**, haz clic en `Editar información básica`.
2. Modifica la información deseada.
3. Haz clic en `Guardar cambios`.

### Editar la capacidad operativa del seller

En la sección **Capacidad operativa**, puedes ver la configuración actual de la capacidad operativa del seller para cada día de la semana, como se muestra a continuación:

![operational_capacity_image3_ES](//images.ctfassets.net/alneenqid6w5/70kbPFFifh8ykCHvIj6vEZ/d4019f9c94ab752050d6387e48b88a5c/operational_capacity_image3_ES.png)

Para modificar la configuración, sigue estos pasos:

1. En la sección **Capacidad operativa**, haz clic en `Editar`.
2. Cambia las opciones deseadas, que pueden ser:
    - [I - Unidad de capacidad operativa](#i-unidad-de-capacidad-operativa)
    - [II - Capacidad](#ii-capacidad)
    - [III - Regla](#iii-regla)
3. Haz clic en `Guardar cambios`.

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

## Pausar o aumentar la capacidad operativa

Para decidir si la mejor estrategia para tu negocio es [editar la capacidad operativa](#editar-la-capacidad-operativa-del-seller) de un seller o [pausarlo](#activar-y-pausar-la-capacidad-operativa-de-sellers), es importante entender lo siguiente:

- **Seller pausado:** el seller deja de recibir nuevos pedidos hasta que lo reactives. Aun si se configura la regla _Continuar recibiendo pedidos consumiendo la capacidad de los siguientes días_, no aceptará nuevos pedidos.
  > **Ejemplo:** la tienda del seller tuvo problemas en las instalaciones y se comprometió la preparación de nuevos pedidos. En este caso, pausar el seller y activarlo después de que pueda preparar pedidos nuevamente es una decisión estratégica.
- **Seller alcanzó el límite máximo:** el seller deja de recibir pedidos ese día al alcanzar el 100 % de su capacidad. La capacidad operativa del seller se liberará al día siguiente y recibirá pedidos automáticamente.
  > **Ejemplo:** el día de Nochebuena, el seller alcanzó el máximo de su capacidad y no puede preparar más pedidos. No valdría la pena [aumentar la capacidad operativa del seller](#editar-la-capacidad-operativa-del-seller). Al día siguiente el seller podrá preparar nuevos pedidos. Por lo tanto, sería preferible no editar el seller, ya que su capacidad se liberará al día siguiente y recibirá nuevos pedidos.

### Capacidad operativa de sellers de extensa cobertura

Cuando el cliente informa su ubicación en el sitio web de la tienda, se muestran los productos de tu tienda (seller 1) y de los [sellers de extensa cobertura](https://help.vtex.com/es/tutorial/seller-abrangente--5Qn4O2GpjUIzWTPpvLUfkI). 

Debido a una limitación de la plataforma, cuando desactivas la capacidad operativa de un seller de extensa cobertura, sus productos siguen apareciendo como disponibles en la vitrina, aunque el cliente no puede comprarlos. Por esta razón, recomendamos mantener siempre activa la capacidad operativa de sellers de extensa cobertura.

