---
title: 'Lead time: tiempo de envío a nivel de SKU'
id: 16yv5Mkj6bTyWR1hCN2f4B
status: PUBLISHED
createdAt: 2023-09-22T00:32:26.416Z
updatedAt: 2024-08-16T17:55:22.057Z
publishedAt: 2024-08-16T17:55:22.057Z
firstPublishedAt: 2023-09-22T01:35:53.577Z
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slug: lead-time-tiempo-de-envio-a-nivel-de-sku
locale: es
legacySlug: lead-time-tiempo-de-envio-a-nivel-de-sku
subcategory: 3PQwnyOcNyYgawy06oe6gE
---

El lead time es la configuración opcional del tiempo de envío a nivel de SKU. Esto significa que puedes definir un periodo de envío para el SKU de un [almacén](https://help.vtex.com/es/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb) y este tiempo se agregará al tiempo total de envío del pedido.

La configuración del lead time se realiza en el contexto de la [gestión del stock de tu tienda](https://help.vtex.com/es/tutorial/gerenciar-inventario--tutorials_139), ya que se refiere a ítems en stock y disponibles para la venta.

Este artículo aborda los siguientes aspectos:

- [Tiempo total de envío:](#tiempo-total-de-envio) qué papel juega el lead time en el plazo de envío del pedido.
- [Principales casos de uso:](#principales-casos-de-uso) contextos en los que la configuración del lead time resulta especialmente útil.
- [Stock del SKU:](#stock-del-sku) cómo se comporta la plataforma cuando el SKU está o no disponible para la venta.
- [Configurar lead time:](#configurar-lead-time) cómo realizar la configuración en el Admin VTEX.
- [Configurar el contaje del lead time en días naturales:](#configurar-el-contaje-del-lead-time-en-dias-naturales-opcional) etapa opcional para que el contaje del lead time sea en días naturales y no en días laborables, que es el valor predeterminado.

<div class = "alert alert-info">
Para configurar el lead time vía API, accede a <a href="https://developers.vtex.com/docs/api-reference/logistics-api#put-/api/logistics/pvt/inventory/skus/-skuId-/warehouses/-warehouseId-">Update inventory by SKU and warehouse</a>.
</div>

## Tiempo total de envío

Cuando se configura, el lead time es un tiempo adicional que compone el plazo de envío del pedido que se muestra al cliente en el checkout. En la imagen a continuación, se muestran los elementos que componen el plazo total:

![lead_time_image_total_time_ES](https://images.ctfassets.net/alneenqid6w5/WDlW2CzaAKl3KtzzsgGwc/f9610838cce53ee740054bee68e634d1/lead_time_image_total_time_ES.png)

* **Lead time:** cantidad de tiempo configurable para el SKU de un almacén. Este periodo puede corresponder al tiempo de procesamiento o fabricación del ítem, por ejemplo. Esta configuración es opcional y se establece en cero días de forma predeterminada.
* [Tiempo de almacén:](https://help.vtex.com/es/tutorial/gerenciar-estoque--tutorials_137) tiempo que tarda el SKU en pasar del almacén al [muelle](https://help.vtex.com/es/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj). Este ajuste es obligatorio, pero puedes configurar el tiempo como cero.
* [Tiempo de muelle:](https://help.vtex.com/es/tutorial/gerenciar-doca--7K3FultD8I2cuuA6iyGEiW) tiempo que tarda el SKU en salir del muelle, punto intermedio entre el almacén y la [transportadora](https://help.vtex.com/es/tutorial/transportadoras-na-vtex--7u9duMD5UQa2QQwukAWMcE), para enviarse al cliente. Este ajuste es obligatorio, pero puedes configurar el tiempo como cero.
* [Política de envío:](https://help.vtex.com/es/tutorial/politica-de-envio--tutorials_140) conjunto de reglas y condiciones que se presentan a los clientes en el checkout, incluyendo:
    * [Tarifas de envío](https://help.vtex.com/es/tutorial/planilha-de-frete--tutorials_127)
    * Horario laboral de la transportadora
    * Ventanas de envío 
    * Capacidad de entrega
    * Tipos de productos entregables (modalidades)

## Principales casos de uso

Consulta a continuación algunos casos de uso en los que la configuración del lead time resulta especialmente útil.

### Proveedores externos

Gestiona más fácilmente el tiempo que tarda un proveedor externo, como una fábrica o un fabricante, en producir, procesar, despachar o entregar un producto.

### Productos grandes y personalizables

Para operaciones que venden productos de gran tamaño, como muebles, o productos personalizables, el lead time facilita la gestión del tiempo de procesamiento de los productos, lo que contribuye a una gestión eficaz de almacenes y muelles.

### Dropshipping

En un escenario de _dropshipping_ (cuando el proveedor envía el producto directamente al cliente), configurar el tiempo de envío a nivel de SKU supone tener más flexibilidad para definir plazos de procesamiento y envío del producto por terceros.

## Stock del SKU

La plataforma VTEX presentará comportamientos diferentes dependiendo de si el SKU está o no disponible para la venta. Los escenarios posibles son los siguientes:

- <i class="far fa-check-circle"></i> **SKU en stock:** el administrador de la tienda configura el lead time del SKU; el periodo se considera en el cálculo de envío del pedido, y el plazo total se muestra al cliente en la etapa de checkout.
- <i class="fas fa-times"></i> **SKU sin stock:** el administrador de la tienda configura el lead time del SKU, pero el SKU no se considera válido porque no hay unidades disponibles para la venta.
- <i class="far fa-check-circle"></i> **Stock infinito:** el administrador de la tienda configura el lead time del SKU; el periodo se considera en el cálculo de envío del pedido, y el plazo total se muestra al cliente en la etapa de checkout. Si el stock está activado como infinito, el SKU siempre estará disponible para la venta.

## Configurar lead time

El valor predeterminado del lead time es cero, y su límite máximo es 365 días. De manera predeterminada, el contaje se realiza en días laborables, considerando feriados y otras condiciones de tu [política de envío](https://help.vtex.com/es/tutorial/politica-de-envio--tutorials_140), pero puedes [configurarlo para que sea en días naturales](#configurar-el-contaje-del-lead-time-en-dias-naturales-opcional).

Para configurar el lead time de un SKU sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Catálogo > Stock > Gestión del stock**, o ingresa **Gestión del stock** en la barra de búsqueda de la parte superior de la página.
2. Selecciona el SKU que deseas configurar. Puedes utilizar la barra y los filtros de búsqueda.
3. Ingresa el número de días en la fila del SKU y en la columna **Lead time (días)**.
  ![lead_time_inventory_management_ES](https://images.ctfassets.net/alneenqid6w5/mfWUVzj7tgHMQxJTnVjGX/898387e10a3c41d8837df10604ec652d/lead_time_inventory_management_ES.png)
4. Haz clic en `Guardar` en la parte inferior de la página.

<div class = "alert alert-info">
En el Admin VTEX, el lead time siempre se configura en días, pero también se pueden configurar periodos en horas, minutos y segundos, utilizando los endpoints <a href="https://developers.vtex.com/docs/api-reference/logistics-api#put-/api/logistics/pvt/inventory/skus/-skuId-/warehouses/-warehouseId-">Update inventory by SKU and warehouse</a> y <a href="https://developers.vtex.com/docs/api-reference/logistics-api#patch-/api/logistics/pvt/inventory/skus/-skuId-/warehouses/-warehouseId-/lead-time">Update inventory lead time by SKU and warehouse</a>.
</div>

<div class="alert alert-warning">
Lead time solo funciona con valores positivos, ya que es posible agregar tiempo de envío, pero no reducirlo. El uso de valores negativos puede provocar comportamientos inesperados.
</div>

## Configurar el contaje del lead time en días naturales (opcional)

Si deseas que el tiempo del lead time se cuente en días naturales, sigue los pasos que se indican a continuación:

1. En el Admin VTEX, ve a **Envío > Estrategia de envío > Políticas de envío**, o ingresa **Políticas de envío** en la barra de búsqueda de la parte superior de la página.
2. Busca la política de envío deseada; puedes utilizar la barra de búsqueda y los filtros.
    > Para crear una nueva política de envío, consulta el artículo [Política de envío](https://help.vtex.com/es/tutorial/politica-de-envio--tutorials_140).
3. En la fila de la política de envío, haz clic en el ícono de tres puntos <i class="fas fa-ellipsis-v"></i> y selecciona `Editar`.
4. En la sección **Fines de semana y feriados**, activa los botones de alternancia deseados:
    - <i class="fas fa-toggle-on"></i> **Entrega sábados**
    - <i class="fas fa-toggle-on"></i> **Entrega domingos**
    - <i class="fas fa-toggle-on"></i> **Entrega feriados**

5. Haz clic en `Guardar cambios`.
