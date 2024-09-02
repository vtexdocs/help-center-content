---
title: 'Reglas de relevancia'
id: 1o9jtVGjSIiptbqdNXIlNK
status: PUBLISHED
createdAt: 2024-06-27T17:12:27.900Z
updatedAt: 2024-06-27T17:13:52.839Z
publishedAt: 2024-06-27T17:13:52.839Z
firstPublishedAt: 2024-06-27T17:13:52.839Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slug: reglas-de-relevancia
locale: es
legacySlug: reglas-de-relevancia
subcategory: 32zXHBMygA2dB6TbCjQJej
---

Las **Reglas de relevancia** definen el orden de los productos en los resultados de la búsqueda en las páginas de listado de productos (PLP). La disposición de los productos es alterada por la configuración de criterios y prioridades con datos predeterminados utilizados por el Motor de Búsqueda.

Las Reglas de relevancia solo se aplican en los resultados de búsqueda cuando el orden de los se define por relevancia al realizar una búsqueda en la tienda. Por ejemplo, si un cliente selecciona ordenar los resultados por precio, los ajustes de relevancia no tienen efecto en el orden de los resultados.

Hay dos posibles escenarios de configuración de relevancia:

- **Criterios de prioridad:** es la forma de forzar que uno o más criterios tengan mayor prioridad entre los demás. En esta situación no hay pesos, porque todos los productos que tienen esta característica se presentarán primero en el resultado de la búsqueda.
- **Composición de criterios:** es la forma de distribuir los pesos de cada opción, que van de 0 a 10. Aquí no hay un orden entre los criterios, serán los pesos los que definan la relevancia.

![criterios-es](https://images.ctfassets.net/alneenqid6w5/2okH4XcNScAzf6PJIlOKqs/0b54c302ffac20ed831392a3c7d5135d/criterios-es.png)

La información aplicada para establecer la relevancia es:

- **Descuento:** criterio que compara el [Precio de lista](https://help.vtex.com/es/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3XcXp0r5WrJvogB8KIX4Kx#precio-de-lista) y el [Precio base](https://help.vtex.com/es/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3XcXp0r5WrJvogB8KIX4Kx#definicion) registrados para determinar si el producto califica para un descuento.
- **Fecha de release:** este criterio asigna un valor decreciente automático (entre 1 y 0) a partir de la fecha de registro del producto en la tienda, considerando un intervalo de 90 días. Los productos registrados hoy tendrían un valor de 1 y ese valor disminuiría cada día, hasta convertirse en 0 a partir del día 90. Este valor se multiplica por el peso que introduzca para el criterio **Fecha de release** para establecer la relevancia.
- **Más vendidos:** número de pedidos del producto en los últimos 90 días.
- **Más vendidos por ingresos:** total de ganancia adquirida por el producto en los últimos 90 días.
- **Popularidad:** número de clics de un producto en los últimos 90 días.
- **Promoción:** criterio que comprueba si existen [Audiencias de las campañas](https://help.vtex.com/es/tutorial/overview-2--tutorials_326#audiencia-de-campanas) o [Promociones](https://help.vtex.com/es/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/2a2D0K85Ahvs4hLnL3Ag7N) vinculadas al artículo para determinar si el producto clasifica como promoción.
- **Puntuación del catálogo:** criterio de desempate del orden basado en el valor del campo **Puntuación** registrado en el producto. A efectos de la composición de la relevancia, cuanto mayor sea la puntuación, mayor será el peso, es decir, el comportamiento es descendente: se da prioridad a los productos con una puntuación más alta. Más información sobre el campo y su comportamiento en la guía [¿Cómo funciona el campo Puntuación?](https://help.vtex.com/es/tutorial/como-funciona-el-campo-puntuacion--1BUZC0mBYEEIUgeQYAKcae).
- **Variedad de matriz disponible:** la relevancia se basa en el porcentaje de SKU disponibles por producto. En un escenario donde el _Producto A_ tiene 3 SKU y 3 de ellos están disponibles, y el _Producto B_ tiene 5 SKU y 2 de ellos están disponibles, el _Producto A_ se destaca sobre _Producto B_ porque el porcentaje de SKU es mayor.

El conjunto de distribución de pesos y criterios genera una puntuación para el producto, lo que ayuda a su posicionamiento en el orden del resultado de la búsqueda.

<div class="alert alert-warning">
  <p>Si deseas utilizar los criterios de prioridad, recomendamos agregar solo un criterio en este campo. Agregar más criterios compromete la ordenación de los resultados de búsqueda, ya que solo se considerará el primer criterio.</p>
</div>

De esta manera, es posible adaptar el comportamiento del resultado de búsqueda a una estrategia específica.

## Ejemplo

Una tienda de moda a menudo recibe nuevas colecciones. El administrador de la tienda opta por priorizar artículos de lanzamiento a productos promocionales. Configura la herramienta de la siguiente manera:

> **Criterios de prioridad:**
> 
> - Vacío
> 
> **Composición de criterios:**
> 
> - Popularidad: 7
> - Fecha de release: 10
> - Más vendidos: 6
> - Más vendidos por ingresos: 6
> - Promoción: 0
> - Descuento: 0
> - Variedad de matriz disponible: 10
> - Puntuación del catálogo: 0 

Si el administrador de la tienda quiere que el lanzamiento sea siempre la prioridad, puede ajustar la Reglas de relevancia de dos maneras:

> **Manera A**:
> 
> **Criterios de prioridad:**
> 
> - Fecha de release
> 
> **Composición de criterios:**
> 
> - Popularidad: 7
> - Más vendidos: 6
> - Más vendidos por ingresos: 6
> - Promoción: 0
> - Descuento: 0
> - Variedad de matriz disponible: 10
> - Puntuación del catálogo: 0

> **Manera B**:
> 
> **Criterios de prioridad:**
> 
> - Vacío
> 
> **Composición de criterios:**
> 
> - Popularidad: 0
> - Fecha de release: 10
> - Más vendidos: 0
> - Más vendidos por ingresos: 0
> - Promoción: 0
> - Descuento: 0
> - Variedad de matriz disponible: 0
> - Puntuación del catálogo: 0

## Configurar Reglas de relevancia

Para cambiar la configuración de Reglas de relevancia, sigue los pasos a continuación.

1. En el Admin, haz clic en el módulo **Storefront**.
2. En **Intelligent Search**, haz clic en **Reglas de relevancia**.
3. Escoge el criterio cuyo peso deseas cambiar.
4. Haz clic en los íconos flecha abajo <i class="fas fa-chevron-down"></i> o flecha arriba <i class="fas fa-chevron-up"></i> para definir el número deseado.

   Si deseas cambiar la posición de un criterio de **Composición de criterios** a **Criterios de prioridad**, solo tienes que arrastrarlo por el ícono <i class="fas fa-grip-vertical"></i> a la parte superior según se muestra aquí. Ten en cuenta que cuando el criterio cambia a criterio de prioridad, no se le puede cambiar el peso.

   ![criterios-prioritarios-es](https://images.ctfassets.net/alneenqid6w5/c6CNsiZOSl7WnmP7k8Ffa/1bdaef8e82e1e1801a439a45acb2e4e3/criterios-prioritarios-es.gif)
5. Para terminar, haz clic en  `Guardar`.
