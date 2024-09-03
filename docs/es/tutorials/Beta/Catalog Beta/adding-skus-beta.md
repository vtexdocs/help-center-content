---
title: 'Agregar SKUs (beta)'
id: 4ryZ6J45kwn3jDiQBxGiiN
status: PUBLISHED
createdAt: 2024-08-29T19:24:29.305Z
updatedAt: 2024-08-29T19:37:14.566Z
publishedAt: 2024-08-29T19:37:14.566Z
firstPublishedAt: 2024-08-29T19:28:11.129Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2Gy429C47ie3tL9XUEjeFL
slug: agregar-skus-beta
locale: es
legacySlug: agregar-skus-beta
subcategoryId: 6XPsLadoT3moZ7eTduCg3c
---

>ℹ️ Esta funcionalidad se encuentra en fase beta, lo que significa que estamos trabajando para optimizarla. Si desea migrar su tienda a la nueva página, ponte en contacto con <a href = "[https://support.vtex.com/hc/es/requests](https://support.vtex.com/hc/pt-br/requests)">soporte de VTEX</a>.

Después de agregar un producto en el Admin VTEX, debes rellenar la información sobre los SKU asociados. Sigue los pasos a continuación para acceder a la nueva experiencia de agregar productos y SKUs:

1. En el Admin VTEX, accede a **Catálogo > ** **Productos y SKUs**.
2. Haz clic en el producto al que deseas asociar un SKU.
3. Haz clic en la pestaña `SKUs`.
4. Haz clic en el ícono de agregar <i class="fas fa-plus" aria-hidden="true"></i>.
5. Rellena el formulario con la [Información de SKU](#informacoes-do-sku).

# Información de SKU

Consulta a continuación la información que debes rellenar en cada sección del formulario de SKUs.

- **Nombre:** ingresa el nombre del SKU, que es la variación de un producto ya agregado anteriormente. Ejemplo: Producto - Heladera, SKU - 110 voltios. El nombre del SKU tiene un límite de 200 caracteres.
- **Activo:** define si el SKU está activo o no.

## Información general

- **Código de referencia:** código de referencia único creado para ayudar en la organización de la tienda.
- **EAN/UPC:**  código de identificación único del SKU (código de barras); acepta hasta 13 caracteres numéricos**.**
- **Código del fabricante:** proporcionado por el fabricante para identificar su producto. Si un producto tiene un código específico, este campo debe rellenarse.
- **Condición comercial:** utilizada para definir promociones o reglas de pago en cuotas para SKUs. Si no hay ninguna condición específica, utiliza el valor predeterminado. Aprende más en [Registrar condición comercial](https://help.vtex.com/es/tutorial/como-cadastrar-condicao-comercial--tutorials_445#).
- **Modal:** relaciona un producto no usual con una transportadora especializada en el envío de este tipo de productos. Para saber más sobre esta funcionalidad, consulta [Cómo funciona el modal](https://help.vtex.com/es/tutorial/como-funciona-o-modal--tutorials_125) y [Configurar modal para transportadoras](https://help.vtex.com/es/tutorial/configurar-modal-para-transportadoras--3jhLqxuPhuiq24UoykCcqy#).

## Imágenes

En esta sección puedes añadir imágenes al SKU. Al hacer clic en **Agregar imágenes,** puedes seleccionar imágenes de tu computador o agregar links.

>ℹ️ Las imágenes del SKU no pueden superar los 3.200 x 3.200 píxeles.

## Pesos y dimensiones

### Peso y dimensiones de envío

- **Peso del paquete:** utilizado para calcular el peso volumétrico. La unidad de medida es la que define tu tienda. Debe agregarse un valor superior a cero para que el [prorrateo de envío ](https://help.vtex.com/es/tutorial/como-e-feito-o-rateio-de-frete--frequentlyAskedQuestions_155)funcione correctamente.
- **Anchura del paquete:** utilizado para calcular el peso volumétrico. La unidad de medida es la que define tu tienda. 
- **Altura del paquete:** utilizado para calcular el peso volumétrico. La unidad de medida es la que define tu tienda. 
- **Longitud del paquete:** utilizado para calcular el peso volumétrico. La unidad de medida es la que define tu tienda.

### Peso y dimensiones reales

- **Peso real:**  peso real del producto. Se muestra en la página de producto.
- **Anchura real:** anchura real del producto. Se muestra en la página de producto.
- **Altura real:** altura real del producto. Se muestra en la página de producto.
- **Longitud real:** longitud real del producto. Se muestra en la página de producto.

### Medidas de stock

- **Unidad de medida:**  especifica la unidad de medida que se empleará para contabilizar el ítem en el stock.
- **Multiplicador de unidad:** unidad numérica que multiplica la cantidad seleccionada del producto cuando se agrega al carrito. Si el multiplicador es 5, el producto se añadirá en múltiplos de 5, es decir, 5, 10, 15, 20, sucesivamente. 

## Personalizaciones

En la sección **Personalizaciones** puedes agregar anexos y servicios. Aprende más en los artículos [Qué es un anexo](https://help.vtex.com/es/tutorial/o-que-e-um-anexo--aGICk0RVbqKg6GYmQcWUm#) y [Qué es un servicio](https://help.vtex.com/es/tutorial/o-que-e-um-servico#).

## Cross-sells y up-sells

En esta sección puedes configurar las siguientes funcionalidades:
- Accesorios
- Sugerencias
- Productos similares
- Mostrar juntos

Aprende más sobre estas opciones en [Configurar producto similar, sugerencias, accesorios y genéricos](https://help.vtex.com/es/tutorial/configurando-produto-similar-sugestoes-acessorios-e-genericos--tutorials_280).

## Configuración avanzada

- **Generar crédito en tarjeta de regalo:** define que el SKU en cuestión, cuando se compre, generará crédito en una tarjeta de regalo. También se utiliza para definir listas que generan un valor en vales de compra para el propietario.

## Especificaciones

Dependiendo de la categoría a la que pertenece el producto asociado, en la sección **Especificaciones** pueden mostrarse campos para rellenar. Estos campos son especificaciones que puedes añadir a tus SKU para atribuir características a los productos de tu tienda.

Aprende más sobre [especificaciones de SKUs](https://help.vtex.com/es/tutorial/cadastrar-especificacoes-ou-campos-de-sku--tutorials_119).
