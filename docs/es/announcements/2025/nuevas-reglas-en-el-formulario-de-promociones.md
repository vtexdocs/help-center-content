---
title: 'Nuevas reglas en el formulario de promociones'
id: 6Waqgi9CTOvHlwr0CBcjlI
status: PUBLISHED
createdAt: 2025-03-10T11:12:54.341Z
updatedAt: 2025-03-11T16:25:14.071Z
publishedAt: 2025-03-11T16:25:14.071Z
contentType: updates
productTeam: Others
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: new-rules-in-promotion-forms
locale: es
legacySlug: nuevas-reglas-en-el-formulario-de-promociones
announcementImageID: ''
announcementSynopsisES: 'Las nuevas validaciones en el formulario de promociones optimizan la configuración y las reglas y reducen errores.'
---

Implementamos mejoras en los formularios de promociones para garantizar mayor precisión y uniformidad en la configuración y reducir errores. Los principales cambios incluyen ajustes en los límites de caracteres, nuevas reglas para condiciones y restricciones en descuentos progresivos, y promociones del tipo Comprar juntos.

## ¿Qué cambió?
Las actualizaciones incluyen:

**Validaciones para información general**
- **Nombre de la promoción:** nuevo límite máximo de 150 caracteres.
- **Descripción:** nuevo límite máximo de 10 000 caracteres.
- **Fecha de fin:** debe ser posterior a la fecha actual.

**Nuevas reglas para condiciones de promociones**
- Los clústeres de clientes deben seguir uno de los formatos a continuación: 

    - *`field=value`*
    - *`field contains value`*
- **UTMs**: ahora solo aceptan letras, números, guion y guion bajo.
- Cupones creados a partir de UTMs: no está permitido asignar nombres a cupones como **new** porque se genera una URL inválida.
- **Cupones creados a partir de UTMs:** tenían un límite definido por **maxItemsPerClient**, lo que significa que la persona compradora solo podía usar el cupón para comprar una cantidad específica de productos, ya fuera en una o varias compras. Ahora, los cupones están restringidos por **maxUsage** (la cantidad total de veces que un cupón puede usarse en la tienda).
- **Ubicación de envío:**  El código postal final debe ser mayor que el código postal inicial del rango.

**Reglas para promociones Comprar juntos**
Descuento progresivo:

- No se permiten descuentos repetidos.
- Si se aplica un descuento a una cantidad específica de ítems, las cantidades conservarán el mismo descuento a menos que se configure un nuevo rango.

**Promociones Comprar juntos**
- Los SKUs de la lista 1 y de la lista 2 deben ser diferentes.
- Ningún SKU repetido en la lista 2 recibirá descuento debido a la forma en que se ejecuta el procesamiento:

1. Se verifican los SKUs de la Lista 1, asociándolos a los ítems del carrito y removiéndolos de la lista.
2. Después, se procesan los SKUs de la lista 2 para aplicar los descuentos.
3. Si un SKU fue removido en la primera etapa (por estar en la lista 1), no se podrá encontrar en la lista 2 y no recibirá el descuento.

## ¿Qué se necesita hacer?
No se requiere ninguna acción. Las optimizaciones se aplican automáticamente en los nuevos formularios de las tiendas VTEX. 

Para más información, consulta los siguientes artículos:

- [Comprar juntos](https://help.vtex.com/es/tutorial/compre-junto--tutorials_323)
- [Compra uno y lleva uno gratis](https://help.vtex.com/es/tutorial/compre-e-ganhe--tutorials_322)
- [Descuento progresivo](https://help.vtex.com/es/tutorial/desconto-progressivo--tutorials_324)
- [Más por menos](https://help.vtex.com/es/tutorial/leve-mais-por-menos--tutorials_325)

