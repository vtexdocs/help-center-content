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

Cuando tu tienda tiene [varias configuraciones regionales configuradas](https://help.vtex.com/es/docs/tutorials/configurar-configuraciones-regionales#como-se-conectan-las-configuraciones-regionales-con-los-bindings), el CMS te permite crear y gestionar versiones localizadas de tu contenido. De esta forma, puedes adaptar contenido como títulos de páginas y descripciones para diferentes idiomas o regiones.

El CMS pone a tu disposición herramientas para ayudarte a editar contenido en varias configuraciones regionales y definir qué ocurre cuando no existe una versión localizada.

> ℹ️ Consulta más información sobre idiomas y regiones admitidos en
 [Configurar configuraciones regionales](https://help.vtex.com/es/docs/tutorials/configurar-configuraciones-regionales).

## Selector de configuración regional

Puedes gestionar una o varias configuraciones regionales simultáneamente usando el **selector de configuración regional** disponible al editar una página. Después de seleccionar una o más configuraciones regionales, el formulario de entrada se actualiza para mostrar los campos localizados para esas configuraciones, lo que te permite gestionar el contenido en el contexto de la configuración regional seleccionada.

Por ejemplo, puedes editar las versiones inglés (US) y portugués (BR) del título de una página dentro del mismo formulario.

![localizing-content-overview](https://vtexhelp.vtexassets.com/assets/docs/src/localizing-content-1___a732130cef79b9b08022be56a6c26e07.gif)

## Gestionar contenido localizado

Dependiendo de tu estrategia de localización, cada campo dentro de un componente recurrirá a una [configuración regional configurada](https://help.vtex.com/es/docs/tutorials/configurar-configuraciones-regionales).

Al editar contenido, puedes:

* Proporcionar un valor específico para la configuración regional seleccionada.
* Dejar el campo vacío y permitir que el sistema utilice el contenido de resguardo de otra configuración regional.

El comportamiento de resguardo asegura que el contenido siga mostrándose incluso cuando aún no se ha creado una versión localizada.

> ⚠️ Para sobrescribir el contenido de resguardo de un campo, registra un valor para esa configuración regional. Cuando existe un valor localizado, el sistema ignora el resguardo y usa el contenido localizado en su lugar.

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

## Traducir contenido

Dentro de una entrada, puedes traducir un solo campo o la entrada completa. El contenido se traduce desde la [configuración regional predeterminada](https://help.vtex.com/es/docs/tutorials/configurar-configuraciones-regionales#crear-la-configuracion-regional-predeterminada) a una o más configuraciones regionales de destino seleccionadas.

Al traducir el contenido, el sistema utiliza el valor de la configuración regional predeterminada como fuente y genera valores traducidos para las configuraciones regionales elegidas. Puedes seleccionar una o varias configuraciones regionales para la traducción.

![translating-content](https://vtexhelp.vtexassets.com/assets/docs/src/localizing-content-2___2df901d01ba8c54eee7363fb20031e3c.gif)

### Sobrescribir el contenido de resguardo

Cuando esta opción está seleccionada en el módulo de traducción, se sobrescribirá todo el contenido para las configuraciones regionales meta, removiendo el resguardo. Esta opción está seleccionada de forma predeterminada. Si deseleccionas esta opción, solo se traducirán los campos con contenido para las configuraciones regionales meta.
