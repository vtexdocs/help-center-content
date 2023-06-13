---
title: Rellenar campos de registro de SKU
id: 21DDItuEQc6mseiW8EakcY
status: PUBLISHED
createdAt: 2017-09-22T00:20:45.920Z
updatedAt: 2022-12-19T18:03:03.864Z
publishedAt: 2022-12-19T18:03:03.864Z
firstPublishedAt: 2017-09-22T00:40:16.232Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 7FpKZ0rc6k4WqeymES80cw
slug: campos-de-registro-de-sku
legacySlug: campos-de-registro-de-sku
subcategory: pwxWmUu7T222QyuGogs68
---

<div class="alert alert-warning">
  <p>Hay un límite de 50 SKU por producto. Para solicitar que se amplíe el límite, ponte en contacto con <a href= "https://support.vtex.com/hc/es-419/requests">nuestro Soporte</a>.</p>
</div>

Para entender mejor el significado de cada campo del registro, vea la descripción completa de los ítems relacionados en la página:

__Nombre del Producto:__ ya está completado con el nombre del producto al que pertenecerá el SKU.

__Nombre:__ debe contener el nombre del SKU, es decir, la variación del producto, que ya ha sido registrada anteriormente. Producto - Heladera, SKU -110 voltios.

__Valor de Fidelidad:__ crédito que el cliente recibe al realizar la compra de 1 unidad de un determinado SKU. Poniendo "1,00" en este campo, el cliente gana un crédito de $ 1,00 en el sitio web.

__EAN13:__ código de identificación único del SKU (código de barras), acepta hasta 13 caracteres numéricos.

__Código de Referencia__: código de referencia único creado para ayudar con la organización. No es un ítem obligatorio.

__Peso para Flete:__ calculado para flete. Debe registrarse con un valor mayor que cero para que el <a href="https://help.vtex.com/es/tutorial/como-se-realiza-el-prorrateo-del-flete--frequentlyAskedQuestions_155">prorrateo del flete</a> funcione correctamente.

<div class = "alert alert-info">
<p>El módulo <b>Inventario y envío/Envío</b> no tiene en cuenta las unidades de medida en los campos a continuación. Solo sea consistente con lo que está registrado en los <a href="https://help.vtex.com/es/tutorial/campos-de-cadastro-de-produto--4dYXWIK3zyS8IceKkQseke">campos de registro de producto</a> y de SKU.</p>
</div>

__Altura para Flete:__ calculada para flete.

__Anchura para Flete:__ calculada para flete.

__Longitud para Flete:__ calculada para flete.

__Peso Real:__ campo para ingresar el peso real del producto.

__Altura Real:__ campo para ingresar la altura real del producto.

__Anchura Real:__ campo para ingresar la anchura real del producto.

__Longitud Real:__ campo para ingresar el cálculo del flete.

__Fecha de Previsión de Llegada (preventa):__ para registrar el producto como preventa, ingrese la fecha prevista de llegada del producto, en el formato dd/mm/aaaa. Se debe considerar tanto la fecha de lanzamiento como el cálculo del flete para realizar el registro de la fecha de llegada.

__Accesorios:__ añade nuevos SKUs al SKU que se está registrando. Si está registrando un vestido, coloca un cinturón como accesorio. Tiene como particularidad generar un checkbox donde el cliente puede hacer clic y ya hacer la compra de ambos  ítems.

__Sugeridos:__ sugiere nuevos SKUs al SKU que se está registrando. Si está registrando un vestido, coloca un cinturón como sugerencia. Sin embargo, el cliente no puede comprarlos juntos. Es necesario entrar en la página de cada uno de los ítems que quiere comprar.

__Similares (Productos Sustitutos):__ tiene la función de mostrar en la página del producto otras opciones que son similares al mismo. Límite de 50.

__Mostrar Junto:__ muestra los SKUs de los productos sugeridos para su compra en conjunto. 

__Código Condición Comercial:__ utilizado para definir promociones/reglas de pago en cuotas específicas para SKUs. Sepa más en el artículo de Condición Comercial. Si no existe una condición específica, utilice el valor estándar.

__Unidad de Medida:__ utilizada apenas en casos en los que es necesario convertir la unidad de medida para la venta. Si el producto se vende en cajas, pero los clientes quieren comprar por m². En los casos comunes, utilice "un".

__Multiplicador de Unidad:__ unidad numérica que multiplica la cantidad seleccionada del producto cuando se agrega al  carrito. Si el multiplicador es 5, el producto se añadirá en valores múltiplos de 5 - 5, 10, 15, 20, sucesivamente. 

__Activar SKU si es posible:__ campo que activa el SKU si cumple todos los requisitos necesarios para la activación. Active el flag para que después de completar todas las etapas de registro de SKU, se active automáticamente.

__¿SKU Activo?:__ define si el SKU existente está activo o no automáticamente. No permite ningún cambio, solo se utiliza para consulta.

__Código del Fabricante:__ proporcionado por el fabricante para identificar su producto. Si algún producto tiene un código específico, este campo debe rellenarse.

Luego de rellenar los campos, haga clic en Guardar. Para continuar con el registro, usted tendrá las pestañas Imágenes, Especificaciones y Configuraciones Avanzadas.

## Imágenes

<div class="alert alert-info">
  <p>La imagen del SKU tiene un límite de tamaño de 3200 x 3200 píxeles.</p>
</div>

Cómo registrar una nueva imagen:

1. Haga clic en la pestaña __Imágenes__.

2. Después en __Insertar__.

3. Seleccione su imagen en __Escoger Archivos__.

4. Rellene el campo __Texto__.

5. Rellene el campo __Label__.

6. Para finalizar, haga clic en __Enviar__.

Cómo asociar una imagen ya existente a un SKU:

1. Haga clic en la pestaña __Imágenes__.

2. Después en __Asociar a las imágenes existentes__.

3. Seleccione un SKU.

6. Para finalizar, haga clic en __Asociar imágenes__.

## Videos

En esta sección puede incluir vídeos relacionados con su SKU. Para ello, añada la URL del vídeo deseado en la caja de texto. Puede añadir hasta seis URL, una URL por línea.

No hay controles nativos para renderizar el contenido de vídeo. El *front-end* debe manipular los datos introducidos para mostrar el contenido al cliente.

## Especificaciones

Dependiendo de la categoría del producto creado, aparecerán o no campos para rellenar.

Estos campos son propiedades que usted puede adicionar a sus SKUs para atribuir características específicas a los productos de su tienda.

Consulte más detalles en [Registrar especificaciones o campos de SKU](https://help.vtex.com/es/tutorial/registrar-especificaciones-o-campos-de-sku--tutorials_119).

## Configuraciones Avanzadas

Entienda los campos para rellenar las informaciones referentes al SKU:

__Activar Kit:__ define si el SKU del producto en cuestión está compuesto por uno o más SKUs, volviéndose un Kit. Debe activarse si se estuviera realizando el registro de un Kit. Una vez que se activa, no es posible revertir el flag.

__Kit con ítems vendidos separadamente:__ debe activarse en caso de que el SKU haga parte de un Kit.

__¿Genera crédito en vale?__: define que el SKU en cuestión, cuando se compre, va a generar crédito en un Vale. También se utiliza en la definición de listas que generen un valor en Vale de Compras para el dueño.  

__Anexos:__ muestra una información personalizada del comprador de un servicio o del propio ítem comprado.

Luego de rellenar los campos necesarios, basta con hacer clic en Guardar, en la pestaña SKU.

### Artículos relacionados

- [Rellenar campos de registro del producto](/es/tutorial/campos-de-registro-de-producto--4dYXWIK3zyS8IceKkQseke)
- [Rellenar campos de la plantilla de importación](/es/tutorial/preencher-campos-da-planilha-de-importacao--4nYhx63Q5yokQWaMguaIgI)

<div class="alert alert-danger">
 Para garantizar que los ítems agregados al stock estén disponibles para venta en la tienda, el <a href="url">ID del SKU</a> no debe contener <b>el número cero a la izquierda</b>. Por ejemplo, el sistema no reconoce ID con el formato <code>01</code>, <code>02</code> , <code>021</code>, ya que espera el formato <code>1</code>, <code>2</code>, <code>21</code>.
</div>

