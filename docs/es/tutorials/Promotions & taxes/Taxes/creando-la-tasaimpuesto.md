---
title: 'Crear tasa/impuesto'
id: tutorials_321
status: PUBLISHED
createdAt: 2017-04-27T22:08:49.745Z
updatedAt: 2023-10-26T13:20:22.531Z
publishedAt: 2023-10-26T13:20:22.531Z
firstPublishedAt: 2017-04-27T23:03:14.603Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: creating-surchargestaxes
locale: es
legacySlug: creando-la-tasaimpuesto
subcategoryId: 18Gsips3u48UYCu0Ku2sWm
---

El impuesto es lo contrario de la promoción, es decir, un porcentaje adicional introducido en el precio del producto, para aumentar el valor. El impuesto puede ajustarse teniendo en cuenta los distintos tipos de condiciones, tales como rango de códigos postales, el departamento y la marca de los productos, el clúster del cliente etc. La cuota única se inserta en el carrito, en la zona denominada de impuestos.

El impuesto se aplica conforme al registro que hará el vendedor. A continuación, el carrito de su tienda tiene un producto de otro vendedor, el impuesto que se aplicará en este producto será el que registra el vendedor en la administración del producto. No se considerará el impuesto registrado en el módulo de precios de mercado, si tenemos un impuesto asociado con este producto.

## Cómo realizarlo

1. En el Admin VTEX, accede a *Promociones > Impuestos*, o escribe *Impuestos* en la barra de búsqueda en la parte superior de la página.
2. Haga click en el botón **Nuevo Tributo**.
3. Complete los campos tal y como se describe cada tipo a continuación.
4. Haga click en **Guardar**.

## Campos

### Cuáles son los datos generales de ese impuesto?

- **Nombre**: nombre del impuesto.
- **Estatus**: impuesto activo o inactivo.
- **Descripción**: descripción interna del impuesto. El objetivo de este campo es si se va a utilizar para la comunicación interna en su tienda con el fin de dejar claro si el impuesto debe de ser una regla especial, por ejemplo.
- **Validez**: fecha y hora del inicio y fin del impuesto. Una fecha puede ser usada a tiempo real / o futuro, por lo que el impuesto comienza a ser aplicado en el sitio. Si se ha configurado de esta manera, el impuesto tendrá el estado de programar hasta que se alcancen la fecha y la hora. Mientras que el impuesto es válido, tendrá la condición de activo y al final de la fecha y hora definida, el estado se cambia a inactivo automáticamente.
- **Qué tipo y importe del Tributo?**:
  - **Porcentaje de tributo**: porcentual sobre el valor del producto que será añadido al valor.
  - **Tributo basado en fórmula**: el impuesto seguirá el cálculo indicado en el campo.
  - **Tributo procentual de envío**: acrecimiento porcentual sobre el valor del flete.
  - **Impuesto nominal**: cargo adicional con valor predefinido.
- **Política comercial**: seleccione las políticas comerciales donde el impuesto será aplicado.

### En qué artículos este impuesto será aplicado?

- **Categorias, Marcas, Colecciones y Productos**: debe de cumplir con todas las condiciones registradas. Ej.: Si se registra una categoría y marca, el producto debe cumplir estas dos condiciones.

### Cuáles son las condiciones para que el impuesto sea válido?

- **Valor acumulado en compras**: el impuesto se aplicará si se completa el valor con las compras realizadas por el cliente.
- **Marketing Tags**: campo utilizado para restringir la activación de la campaña si la compra es realizada por el sistema de recurrición de VTEX.
- **Afiliados**: identificador de pedidos del marketplace
- **Cluster de clientes**: el impuestos se aplicará si el cliente se ha registrado en el cluster seleccionado.
- **El códiogo postal de entrega debe**: el impuesto será aplicado en el caso de que CEP atienda a la regla configurada.
- **Tipo de carga**: el impuesto se aplicará si el tipo de carga es la misma que la registrada

## Programación

La planificación de un impuesto se produce cuando es creado o modificado con el tiempo y la fecha de validación más adelante del actual. Visualmente se pueden identificar estos impuestos en la página principal del módulo de Tsas y Promociones a través de una franja naranja en la esquina superior derecha de la lista de precios con la palabra programado. A continuación se muestra un ejemplo de cómo se identifica el impuesto cuando está programado.

![agendamento.es](//images.ctfassets.net/alneenqid6w5/2DPKlUdsr38TTIwc3e9GH5/31b3319951c14c8faa6ab3558cebf19b/agendamento.es.png)
