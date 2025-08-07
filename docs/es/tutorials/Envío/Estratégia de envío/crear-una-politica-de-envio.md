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
legacySlug: crear-una-politica-de-envio
locale: es
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---

La [política de envío](https://help.vtex.com/es/tutorial/politica-de-envio--tutorials_140) es un conjunto de reglas y ajustes que definen las opciones de envío que se mostrarán a los clientes en el checkout. La relación entre la política de envío, [almacén](https://help.vtex.com/es/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb) y [muelle](https://help.vtex.com/es/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj) es lo que conforma la [estrategia de envío](https://help.vtex.com/es/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3) en VTEX.

Este artículo presenta cómo se crea una política de envío a través de VTEX Admin. Si desea gestionar sus políticas, consulte el artículo [Gestionar políticas de envío](https://help.vtex.com/es/tutorial/gerenciar-politicas-de-envio--30nynylgbWieimhaMtGTIE).

Para crear una nueva política de envío, siga los pasos a continuación:

1. En el Admin VTEX, accede a **Envío > Estrategia de Envío > Políticas de Envío**, o escribe **Estrategia de Envío** en la barra de búsqueda en la parte superior de la página.  
2. Haga clic en e`Crear Política de Envío`.
3. Complete los campos que se muestran y, al terminar, haga clic en `Guardar`.

*   **Nombre:** nombre interno de la política de envío.
*   **ID:** identificador interno y para integradores. Debe rellenarse solo con letras y números, no utiliza espacio. Si no se rellena, se creará un ID automáticamente.
*   **[Método de envío](https://help.vtex.com/es/tutorial/como-funciona-o-tipo-de-entrega--tutorials_126):** nombre del tipo de entrega. Sirve para separar los diferentes servicios de entrega. Es el nombre que se mostrará al cliente al finalizar la compra. Por ejemplo, expreso vs. regular. 
*   **Cargar [tarifas de envío](https://help.vtex.com/es/tutorial/como-montar-a-planilha-de-frete--tutorials_127):** tabla con los valores y plazos de envío asumidos por la política de envío.
*   **[Dimensiones del paquete](https://help.vtex.com/es/tutorial/como-funciona-o-empilhamento--tutorials_124):**
    *   **Suma de dimensiones:** límites máximos de las aristas del paquete, aceptados. Al llegar a este valor, la entrega se divide en paquetes o no se realiza por esta política de envío. Son datos que se pasan al cerrar el contrato con la política de envío. 
    *   **Longitud máxima:** máxima medida aceptada. Cuando se alcanza este valor, la entrega se divide en paquetes o no se realiza por esta política de envío. Si un ítem tiene una arista con un tamaño superior a la longitud máxima, nunca se entregará por la política de envío.
    *   **[Factor de peso volumétrico](https://help.vtex.com/es/tutorial/como-o-peso-cubado-e-calculado--tutorials_128):** factor que se utilizará para calcular el peso volumétrico. Suma de las medidas, dividida por el factor de conversión. 
    *   **Factor de peso mínimo:** utilice el peso volumétrico solo si supera este valor. Límite de peso donde, a partir de este, se considerará el cálculo del peso volumétrico para el envío.
    *   **Fines de semana y feriados:** días de la semana para las entregas. Marque los flags para activar la entrega en los siguientes escenarios: `entrega sábados`, `entrega domingos`, `entrega feriados`.
*   **Fines de semana y feriados:**  para entregas en fines de semana o feriados. Marque los flags para habilitar la entrega en los siguientes escenarios: `entrega sábados`, `entrega domingos`, `entrega feriados`.
*   **[Modalidades activas](https://help.vtex.com/es/tutorial/como-funciona-o-modal--tutorials_125):** especificaciones de productos que requieren una entrega especial. Estas son las limitaciones de envío del producto que permite la política de envío. Entender más sobre las modalidades. Marque los flags para habilitar la entrega en los siguientes escenarios: `productos químicos`, `electrónicos`, `muebles`, `vidrio`, `líquidos`, `colchones`, `productos refrigerados`, `llantas`, `electrodomésticos` y `armas de fuego`.
*   **Ítems del paquete: **cantidad mínima de ítems aceptados por envío, de acuerdo con la política de envío.
    *   **Valor mínimo:** valor mínimo aceptado por la política de envío para realizar el servicio.
    *   **Mínimo de ítems:** múltiplo mínimo de la cantidad de ítems aceptados por la transportadora. Por ejemplo, si se rellena con el valor **3**, significa que la transportadora solo hace entregas con cantidades de ítems múltiplos de tres (3, 6, 9, 21...).
    *   **Valor máximo:** valor máximo aceptado por la política de envío para realizar el servicio.
*   **Relacionar puntos de recogida:** marque este flag, para abrir la opción de Puntos de Recogida. Haga clic en el menú desplegable y seleccione entre `Tags de los puntos de recogida`, `Nombres de los puntos de recogida` y `Importar puntos de recogida de los sellers` previamente registrados.
*   **Configuración de tiempo:** seleccione el día y la hora de apertura y cierre en los siguientes escenarios. Puede añadir más de un plazo por escenario.
*   **[Horario laboral:](https://help.vtex.com/es/tutorial/configurar-horario-de-funcionamento-para-transportadoras--2oGpbInIgdxSWUi3TZjdCS)** horarios en los que la política de envío hace recolecciones o los ventanas de envío en los que envía los ítems a los clientes. Estos ajustes influyen en el cálculo del plazo de entrega:
    *   **Ventana de envío:** es donde se registran los periodos laboral de la política de envío, es decir, los horarios en los es posible recibir pedidos. Para configurar, seleccione la opción `Ventana de envío`:
        *   Habilite `Aceptar compras fuera del horario laboral` si la política de envío acepta compras fuera del horario laboral. Ahora bien, aunque la política de envío acepte pedidos fuera del horario laboral, el tiempo hasta el próximo periodo disponible se añadirá al SLA final.
        *   Seleccione `Día de la semana`, y rellene la hora de `Hora de inicio` y `Hora de fin`.
        *   Para añadir más días de la semana, haga clic en `Agregar ventana deb envío`.
    *   **Hora de recogida:** es donde se registran los horarios en que la política de envío recolecta los paquetes en su almacén o centro de distribución, para luego enviarlos a los clientes finales. Es importante destacar que si el pedido se realiza antes de la hora de recolección del mismo día, no se agregará tiempo adicional al SLA final, si se realiza después de la hora de recolección, el tiempo hasta el próximo horario de recolección se agregará al SLA.  
        *   Seleccione `Día de la semana` y rellene el `Hora de recogida`. 
        *   Para añadir más días de la semana, haga clic en `Agregar hora de recogida`.

<div class="alert alert-warning">
La <b>Ventana de envío</b> y la <b>Hora de recogida</b> son opciones que se excluyen entre sí, ya que no se puede asignar el mismo período simultáneamente a acciones distintas.
</div> 

*   **[Entrega programada](https://help.vtex.com/es/tutorial/entrega-agendada--22g3HAVCGLFiU7xugShOBi)**: esta funcionalidad puede habilitarse si la política de envío ofrece un servicio de entrega programada. Aquí es donde debe añadir las ventanas de entrega que estarán disponibles para el cliente al final de la compra. Para utilizarla, habilite `entrega programada` y rellene:
    *   **Tiempo máximo de entrega:** define el tiempo máximo de entrega, debe ser completado con el tiempo en días.
    *   **Periodo de entrega:** define las ventanas de entrega de la política de entrega. Debe añadir los días de la semana, las horas de `inicio` y `fin` de la ventana de entrega y el valor adicional. Haga clic en `Nuevo periodo de entrega` para añadir más ventanas de entrega. 
    *   **Capacidad de entrega:** le permite limitar el número de ítems/pedidos que pueden entregarse para cada ventana de entrega. Esta funcionalidad puede habilitarse o no. El uso o no de esta funcionalidad no interfiere con el funcionamiento de la plataforma. Para saber más sobre estos recursos, consulte [Entrega programada](https://help.vtex.com/es/tutorial/entrega-agendada--22g3HAVCGLFiU7xugShOBi) y [Gestionar capacidad de entrega](https://help.vtex.com/es/tutorial/gerenciar-capacidade-de-entrega--2y217FQZCjD0I1n62yxVcz). Si está habilitada debe: 
        *   Elija la unidad de la capacidad de entrega entre `ítems` y `pedidos`.
        *   Verifique las ventanas de entrega.
        *   Definir el número de la `capacidad de entrega`. Recomendamos tener especial cuidado a la hora de elegir la unidad de capacidad de entrega porque el sistema no calcula la disponibilidad de la capacidad de entrega teniendo en cuenta la cantidad de ítems que se compran. Así, si la ventana de entrega todavía tiene capacidad para 2 ítems y su cliente está comprando 4 ítems, aún tendrá la opción de seleccionar la ventana de entrega disponible.

### Sepa más

* [Política de envío](https://help.vtex.com/en/tutorial/politica-de-envio--tutorials_140)
* [Gestionar políticas de envío](https://help.vtex.com/es/tutorial/gerenciar-politicas-de-envio--30nynylgbWieimhaMtGTIE)
* [Estrategia de envío](https://help.vtex.com/es/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3)
