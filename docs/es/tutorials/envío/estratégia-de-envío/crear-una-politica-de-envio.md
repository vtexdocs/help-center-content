---
title: 'Crear una política de envío'
id: 66rJO4LKBdyMJOH6Z3dsaT
status: PUBLISHED
createdAt: 2024-01-30T21:08:12.106Z
updatedAt: 2024-06-11T19:05:19.723Z
publishedAt: 2024-06-11T19:05:19.723Z
firstPublishedAt: 2024-01-31T01:09:33.011Z
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: creating-a-shipping-policy
legacySlug: criar-uma-politica-de-envio
locale: es
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---

Una [política de envío](https://help.vtex.com/es/docs/tutorials/politica-de-envio) es un conjunto de reglas y ajustes que definen las opciones y condiciones de envío que se mostrarán a los clientes en el checkout. La relación entre **política de envío**, [almacén](https://help.vtex.com/es/docs/tutorials/almacen) y [muelle](https://help.vtex.com/es/docs/tutorials/muelles) establece tu [estrategia de envío](https://help.vtex.com/es/docs/tutorials/estrategia-de-envio) en VTEX.

Este artículo explica cómo crear una política de envío en el Admin VTEX. Si deseas monitorear y gestionar tus políticas, consulta el artículo [Gestionar políticas de envío](https://help.vtex.com/es/docs/tutorials/gestionar-politicas-de-envio).

Para crear una nueva política de envío sigue los pasos a continuación:

1. En el Admin VTEX, ve a **Envío > Estrategia de envío > Políticas de envío** o escribe **Estrategia de envío** en la barra de búsqueda en la parte superior de la página.
2. Haz clic en el botón `Crear política de envío`.
3. Llena los campos de la pantalla que se describen a continuación y luego haz clic en `Guardar cambios`.

- **Activo:** activa o desactiva la política de envío.
- **Nombre:** nombre interno de la política de envío.
- **ID:** identificador interno y para integradores. Debe completarse solo con letras y números, y no debe contener espacios. Si lo dejas en blanco, se creará un ID automáticamente.
- **[Método de envío](https://help.vtex.com/es/docs/tutorials/como-se-maneja-el-tipo-de-entrega):** nombre del tipo de envío. Sirve para separar los diferentes servicios de envío. Es el nombre que se mostrará en el checkout al cliente. Ejemplo: Express vs. Estándar.
- **[Cargar tarifas de envío](https://help.vtex.com/es/docs/tutorials/plantilla-de-flete):** la tabla con los valores y plazos de envío asumidos por la política de envío.
- **[Dimensiones del paquete](https://help.vtex.com/es/docs/tutorials/como-se-maneja-el-apilamiento):**
  - **Suma de dimensiones:** límite de dimensión del paquete que toma en cuenta la suma de la medida de todas las aristas del paquete. Al alcanzar este valor, el envío se divide en paquetes o no se realiza. La transportadora proporciona estos datos al firmar un contrato.
  - **Longitud máxima:** límite de tamaño de la arista mayor del paquete. Al alcanzar este valor, el envío se divide en paquetes o no se realiza.
  - **[Factor de peso volumétrico](https://help.vtex.com/es/docs/tutorials/como-se-calcula-el-peso-cubico):** factor que se utilizará para el cálculo del peso volumétrico. Suma de las medidas, dividida por el factor volumétrico.
  - **Factor de peso mínimo:** usa el peso volumétrico solo si supera este valor. Límite de peso a partir del cual se considerará el cálculo del peso volumétrico para el envío.
- **Fines de semana y feriados:** los días de la semana para envíos. Marca las opciones para activar el envío en los siguientes casos: `Entrega sábados`, `Entrega domingos`, `Entrega feriados`.

> ⚠️ Para ofrecer envíos en fines de semana, debes marcar las opciones `Entrega sábados` y `Entrega domingos` e incluir el sábado y el domingo en la configuración de [horario laboral](https://help.vtex.com/es/docs/tutorials/horario-de-atencion-de-las-transportadoras) de la política de envío. Si el día está registrado en el horario laboral, pero la opción correspondiente no está activa, el envío en fin de semana no se ofrecerá al cliente en el checkout.

- **[Modalidades activas](https://help.vtex.com/es/docs/tutorials/como-se-maneja-el-modal):** especificaciones de productos que requieren un envío especial. Son las limitaciones de envío del producto que la política de envío permite. Marca las opciones para activar el envío en los siguientes casos: `químicos`, `electrónicos`, `muebles`, `vidrio`, `líquidos`, `colchones`, `refrigerados`, `llantas`, `línea blanca` y `armas de fuego`.
- **Ítems del paquete:** descripción del valor y número de ítems del paquete:
  - **Valor mínimo:** valor mínimo aceptado por la política para realizar el envío.
  - **Mínimo de ítems:** múltiplo mínimo de la cantidad de ítems aceptado por la transportadora. Por ejemplo, si lo llenas con el valor **3**, la transportadora solo realiza envíos que tienen cantidades de ítems múltiplos de tres (3, 6, 9, 21…).
  - **Valor máximo:** valor máximo aceptado por la política para realizar el envío.
- **Asociar puntos de recogida:** marca esta opción para abrir la sección de Puntos de recogida. Haz clic en la lista desplegable y selecciona entre `Tags de los puntos de recogida`, `Nombres de los puntos de recogida` e `Importar punto de recogida de los sellers` previamente registrados.
- **[Horario laboral](https://help.vtex.com/es/docs/tutorials/horario-de-atencion-de-las-transportadoras):** los horarios en que la transportadora realiza recogidas y las ventanas de tiempo en que envía los ítems a los clientes. Estas configuraciones influyen en el cálculo del tiempo de entrega:
  - **Ventana de envío:** registra los periodos de atención de la transportadora, es decir, los horarios en que recibe pedidos. Para configurar los periodos, selecciona `Ventana de envío`:
    - `Aceptar compras fuera del horario laboral`: activa o desactiva la recepción de compras fuera del horario laboral. Cuando esta opción está activa, el intervalo de tiempo desde el momento del pedido hasta el inicio del horario se sumará al tiempo total de entrega.
    - Selecciona el `Día de la semana` y completa la `Hora de inicio` y la `Hora de fin`.
    - Para agregar más días de la semana, haz clic en `Agregar ventana de envío`.
  - **Hora de recogida:** registra los horarios en que la transportadora recolecta paquetes en tu almacén o centro de distribución para luego enviarlos a los clientes finales. Si el pedido se realiza antes del inicio del horario de recogida, no se agregará ningún tiempo al tiempo total de entrega. Sin embargo, si se realiza después del horario de recogida, el intervalo de tiempo desde el momento del pedido hasta el inicio del horario se sumará al tiempo total de entrega.
    - Selecciona el `Día de la semana` y la `Hora de recogida`.
    - Para agregar más días de la semana, haz clic en `Agregar hora de recogida`.

> ⚠️ La **Ventana de envío** y la **Hora de recogida** son opciones excluyentes, ya que un mismo periodo no puede destinarse simultáneamente a acciones diferentes.

- **[Entrega programada](https://help.vtex.com/es/docs/tutorials/entrega-programada):** esta funcionalidad puede activarse si la política de envío ofrece el servicio de entrega programada. Aquí debes agregar las ventanas de entrega que estarán disponibles para el cliente al final de la compra. Para usarla, activa `Entrega programada` y llena los siguientes campos:
  - **Tiempo máximo de entrega:** define el tiempo máximo de entrega, que debe llenarse con el tiempo en días.
  - **Periodo de entrega:** define las ventanas de entrega que realiza la política de envío. Debes agregar los días de la semana, los horarios de `Inicio` y `Fin` de la ventana de entrega y el valor adicional. Haz clic en `Agregar ventana de entrega` para agregar más ventanas de entrega.
  - **Capacidad de entrega:** permite limitar cuántos ítems/pedidos pueden enviarse en cada ventana de entrega. Activar esta funcionalidad es opcional. Su uso u omisión no afecta el funcionamiento de la plataforma. Para más información sobre estos recursos, consulta [Entrega programada](https://help.vtex.com/es/docs/tutorials/entrega-programada) y [Gestionar capacidad de entrega](https://help.vtex.com/es/docs/tutorials/gestionar-capacidad-de-entrega). Si la activas, debes:
    - Elegir la unidad de capacidad de entrega entre `ítems` y `pedidos`.
    - Revisar las ventanas de entrega.
    - Definir el valor de capacidad de entrega. Elige la unidad y la cantidad de capacidad de entrega con cuidado, ya que el sistema no calcula la disponibilidad de la `capacidad de entrega` tomando en cuenta la cantidad de ítems que se están comprando. Si la ventana de entrega aún tiene capacidad para 2 ítems y tu cliente está comprando 4 ítems, podrá seleccionar la ventana de entrega disponible.

      Es importante recordar que las ventanas de entrega dejan de estar disponibles para los clientes si ya han alcanzado el límite de la `capacidad de entrega`. Para que una ventana vuelva a estar disponible para los clientes, es necesario aumentar la cantidad de ítems/pedidos de la capacidad de entrega de la ventana.

### Más información

- [Política de envío](https://help.vtex.com/es/docs/tutorials/politica-de-envio)
- [Gestionar políticas de envío](https://help.vtex.com/es/docs/tutorials/gestionar-politicas-de-envio)
- [Estrategia de envío](https://help.vtex.com/es/docs/tutorials/estrategia-de-envio)
