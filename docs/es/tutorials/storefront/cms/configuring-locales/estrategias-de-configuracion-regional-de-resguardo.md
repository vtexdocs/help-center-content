---
title: "Estrategias de configuración regional de resguardo"
createdAt: 2026-03-27T17:08:52.219Z
updatedAt: 2026-04-01T17:08:52.219Z
contentType: tutorial
productTeam: CMS
slugEN: understanding-locale-fallback-rules
locale: es
order: 2
---

Al [establecer las configuraciones regionales](https://help.vtex.com/es/docs/tutorials/configurar-configuraciones-regionales), algunos tipos de contenido no necesitan localización. Por ejemplo, es posible que tengas una imagen de banner sin texto o un nombre de marca que permanece igual en todos los idiomas. Las estrategias de resguardo te ayudan a evitar duplicar este tipo de contenido innecesariamente. A continuación se muestran dos enfoques comunes:

| Caso de uso | Descripción |
| :---- | :---- |
| [Configuración regional predeterminada como resguardo para otras configuraciones regionales](#configuración-regional-predeterminada-como-resguardo-para-otras-configuraciones-regionales) | Úsalo cuando la mayor parte del contenido es compartido y las demás configuraciones regionales solo modifican diferencias específicas. |
| [Resguardo del idioma principal con variaciones regionales](#resguardo-por-idioma-principal-con-variaciones-regionales) | Úsalo al gestionar variaciones regionales que heredan propiedades de una configuración regional de idioma principal. |

## Configuración regional predeterminada como resguardo para otras configuraciones regionales

En esta estrategia, todo el contenido principal se almacena en la configuración regional predeterminada (por ejemplo, `Inglés-US`). Otras configuraciones regionales heredan contenido de la configuración regional predeterminada y solo modifican campos cuando se requiere localización. Esto significa que solo traduces o modificas el contenido que difiera del contenido predeterminado. Este enfoque funciona bien cuando:

* La mayor parte del contenido se comparte entre los idiomas.  
* Las diferencias de localización son mínimas.

En el ejemplo que se muestra a continuación tenemos dos configuraciones regionales:

* `Inglés-US` (predeterminado)  
* `Portugués-BR`

  * Resguardo: `Inglés-US`

Si una descripción no está traducida al portugués, el sistema muestra automáticamente el contenido en `Inglés-US`. Solo localizas los campos en `Portugués-BR` cuando el contenido debe ser diferente (por ejemplo, texto promocional o mensajes específicos de la región).

## Resguardo por idioma principal con variaciones regionales

Esta estrategia es útil al gestionar varios idiomas y variaciones regionales. Creas una jerarquía en la que las configuraciones regionales utilizan una configuración regional principal como resguardo. Este enfoque es ideal cuando:

* La tienda tiene múltiples regiones con el mismo idioma.  
* Algunos idiomas comparten una estructura lingüística base.  
* Necesitas una lógica de resguardo en capas.

En el ejemplo a continuación, hemos configurado las siguientes configuraciones regionales:

* `English-US` (predeterminado)  
* `Inglés-GB`  
  * Resguardo: `Inglés-US`  
* `Español-ES`  
  * Resguardo: `Inglés-US`  
* `Catalán-ES`  
  * Resguardo: `Español-ES`

`Inglés-GB` hereda contenido de `Inglés-US` y solo sobrescribe diferencias regionales específicas (por ejemplo, de "pants" a "trousers"). `Catalán-ES` hereda de `Español-ES` y solo reemplaza el contenido donde se requiere catalán.
