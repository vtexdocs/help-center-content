---
title: "Localización de contenido - Descripción general"
createdAt: 2026-03-27T17:08:52.219Z
updatedAt: 2026-04-02T11:00:52.219Z
contentType: tutorial
productTeam: CMS
slugEN: localizing-content
locale: es
order: 1
---

Cuando tu tienda tiene [varias configuraciones regionales configuradas](https://help.vtex.com/es/docs/tutorials/configurar-configuraciones-regionales#como-se-conectan-las-configuraciones-regionales-con-los-bindings), el CMS te permite crear y gestionar versiones localizadas de tu contenido. Esto te permite adaptar contenido como títulos de páginas y descripciones para diferentes idiomas o regiones.

El CMS proporciona herramientas para ayudarte a editar contenido en múltiples configuraciones regionales y definir cómo se comporta el contenido cuando una versión localizada no está disponible.

> ℹ️ Obtén más información sobre los idiomas y regiones admitidos en [Configurar configuraciones regionales](https://help.vtex.com/es/docs/tutorials/configurar-configuraciones-regionales).

## Selector de configuración regional

Puedes gestionar una o varias configuraciones regionales simultáneamente utilizando el **selector de configuración regional** disponible mientras editas una página. Después de seleccionar una o más configuraciones regionales, el formulario de entrada se actualiza para mostrar los campos localizados de esas configuraciones, para que puedas gestionar el contenido en el contexto de la configuración regional seleccionada.

Por ejemplo, puedes editar las versiones en inglés (EE. UU.) y portugués (BR) del título de una página dentro del mismo formulario.

![localizing-content-overview](https://vtexhelp.vtexassets.com/assets/docs/src/localizing-content-1___a732130cef79b9b08022be56a6c26e07.gif)

## Gestión del contenido localizado

Según tu estrategia de localización, cada campo dentro de un componente utilizará como resguardo una [configuración regional configurada](https://help.vtex.com/es/docs/tutorials/configurar-configuraciones-regionales).

Al editar contenido, puedes:

* Proporcionar un valor específico para la configuración regional seleccionada.
* Dejar el campo vacío y permitir que el sistema utilice el contenido de resguardo de otra configuración regional.

El comportamiento de resguardo garantiza que el contenido se siga mostrando incluso cuando aún no se ha creado una versión localizada.

> ⚠️ Para anular el contenido de resguardo de un campo, agrega un valor para esa configuración regional. Cuando existe un valor localizado, el sistema ignora el resguardo y utiliza el contenido localizado en su lugar.

### Cómo funciona el contenido de resguardo

Cada configuración regional tiene una [definición de configuración regional de resguardo](https://help.vtex.com/es/docs/tutorials/configurar-configuraciones-regionales). Si un campo no tiene contenido para una configuración regional específica, el CMS utiliza automáticamente el valor de la configuración regional de resguardo.

Por ejemplo, supongamos que el campo Título de página está localizado y se han configurado las siguientes configuraciones regionales:

* Inglés - US (predeterminado)
* Portugués - BR
  * Resguardo: Inglés - US

Si el campo Título de página tiene un valor para ambas configuraciones regionales, el storefront muestra el valor específico de cada una.

* Inglés - US: "[Merchant.com](http://Merchant.com) - your electronics destination"
* Portugués - BR: "[Merchant.com.br](http://Merchant.com.br) - seu destino eletrônico"

![fallback-locale-overview](https://vtexhelp.vtexassets.com/assets/docs/src/localizing-content-2-en___e56ce0060ee1da4a80464764e183b096.png)

Si el campo Título de página está vacío para Portugués (BR), el storefront utiliza el valor de la configuración regional de resguardo.

* Inglés - US: "[Merchant.com](http://Merchant.com) - your electronics destination"
* Portugués - BR: "[Merchant.com](http://Merchant.com) - your electronics destination" (resguardo desde Inglés - US)

![fallback-locale](https://vtexhelp.vtexassets.com/assets/docs/src/localizing-content-3-en___c0f421a8cbeb9069631db06f62e7fdc5.png)

Este comportamiento de resguardo garantiza que el contenido permanezca disponible incluso cuando aún no se ha añadido un valor localizado.

## Traducción de contenido

Dentro de una entrada, puedes traducir un solo campo o toda la entrada. El contenido se traduce desde la [configuración regional predeterminada](https://help.vtex.com/es/docs/tutorials/configurar-configuraciones-regionales#crear-la-configuracion-regional-predeterminada) a una o más configuraciones regionales de destino seleccionadas.

Al traducir contenido, el sistema utiliza el valor de la configuración regional predeterminada como fuente y genera valores traducidos para las configuraciones regionales elegidas. Puedes seleccionar una o varias configuraciones regionales para la traducción.

![translating-content](https://vtexhelp.vtexassets.com/assets/docs/src/localizing-content-2___2df901d01ba8c54eee7363fb20031e3c.gif)

### Sobrescribir el contenido de resguardo

Cuando esta opción está seleccionada en el módulo de traducción, todo el contenido de las configuraciones regionales de destino se sobrescribirá, eliminando el resguardo. Esta opción está seleccionada de forma predeterminada. Si desactivas esta opción, solo se traducirán los campos que tengan contenido para las configuraciones regionales de destino.
