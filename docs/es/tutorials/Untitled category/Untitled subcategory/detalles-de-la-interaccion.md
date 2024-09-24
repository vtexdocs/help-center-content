---
title: 'Gestión de anuncios: detalles de la interacción'
id: 5qC6XPkyUsYPd0dqKHQNlf
status: DRAFT
createdAt: 2021-03-17T01:16:13.273Z
updatedAt: 2024-06-20T21:43:33.011Z
publishedAt: 
firstPublishedAt: 2021-03-17T01:20:58.901Z
contentType: tutorial
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: interaction-details
locale: es
legacySlug: detalles-del-interaccion
subcategoryId: unknown-subcategory
---

>ℹ️ Para evolucionar su experiencia al sincronizar y actualizar anuncios, el equipo de VTEX está desarrollando una nueva funcionalidad que sustituirá el módulo de **Gestión de anuncios**.
> Por este motivo, Gestión de anuncios no recibirá más actualizaciones ni mantenimiento.
> Para conectores y marketplaces que ya se integraron con el módulo, comuníquese con nuestro equipo de desarrollo por email [taissa.araujo@vtex.com.br](taissa.araujo@vtex.com.br).
> Para los conectores interesados en comenzar la integración, les pedimos que esperen el lanzamiento del nuevo módulo, tan pronto como esté disponible, notificaremos a todos los clientes a través del [Developer Portal](https://developers.vtex.com/updates/release-notes) y el [VTEX Help Center](https://help.vtex.com/pt/en/announcements).  

La página **Detalles de la interacción** del módulo [Gestión de anuncios](https://help.vtex.com/es/tutorial/listagem-de-anuncios--7MRb9S78aBdZjFGpbuffpE) permite que los sellers visualicen de forma más completa todas las interacciones que ocurren en un anuncio durante su proceso de envío y sincronización con un canal. Detalles de la interacción estarán disponibles durante diez días después del registro.

Para acceder a la página **Detalles de la interacción**:

1. En el Admin VTEX, ingresa en **Marketplace > Conexiones > Gestión de anuncios**.
2. Seleccione el anuncio deseado.    
3. En la pestaña **Interacciones**, haga clic en la interacción deseada.    

La página **Detalles de la interacción** cuenta con las siguientes secciones:
- [Encabezado](#encabezado)    
- [Resultado de la interacción](#resultado-de-la-interaccion)    
- [Línea de tiempo](#linea-de-tiempo)   

>ℹ️ **Gestión de anuncios** permite hacer un seguimiento de los anuncios con [Mercado Libre](https://help.vtex.com/es/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq) (Classic y Premium), [Netshoes](https://help.vtex.com/es/tracks/configurar-integracao-da-netshoes--5Ua87lhFg4m0kEcuyqmcCm) y marketplaces VTEX. Para los conectores que desean integrarse a través de API, existe la [Guía de integración de Gestión de anuncios](https://developers.vtex.com/vtex-rest-api/docs/sent-offers-integration-guide-connectors).  

## Encabezado
![Interaction details PT cabeçalho](//images.ctfassets.net/alneenqid6w5/7zEocS2MW5dSRzZaaqNDUc/cc97295e6fa0f0d1cfaa76cd755904cb/Interaction_details_ES_cabe__alho.jpg)
El *encabezado* contiene la información principal del anuncio para la visualización rápida, como nombre del SKU, logo del canal al que fue enviado, su ID en VTEX e ID en el canal.

## Resultado de la interacción
Las interacciones, o actualizaciones de un [anuncio](https://help.vtex.com/es/tutorial/detalhes-do-anuncio--4FF9QYAewqAn610mDHwb0P) que pueden ser del tipo `Catálogo`, `Precio` o `Stock`, están compuestas por una serie de eventos del sistema, denominados registros. Cada registro tiene evidencias detalladas sobre las etapas que se produjeron durante el envío y sincronización del anuncio, dando más contexto técnico para el monitoreo y la corrección de errores en los anuncios.

El bloque *Resultado de la interacción* informa el efecto que la interacción tuvo sobre el anuncio, calculado a partir de la combinación de registros que forman la interacción. El resultado de una interacción permite que el sistema determine el status del anuncio, indicando si fue posible enviarlo o sincronizarlo al canal, o no. Los resultados de la interacción incluyen:

### Resultado: Satisfactorio
![Interaction details PT resultado sucesso](//images.ctfassets.net/alneenqid6w5/72PZOesROTjIZbmFOTQ8jk/35d67af0da667655b5643e3509ccc427/Interaction_details_ES_resultado_sucesso.jpg)
El status de una interacción es *Satisfactorio* cuando las interacciones cumplen con su efecto esperado. Eso significa que el anuncio se pudo enviar al canal correctamente, o que las interacciones generaron atualizaciones en un anuncio en términos de precio, stock o catálogo. 

### Resultado: Falla
![Interaction details PT resultado falha](//images.ctfassets.net/alneenqid6w5/1ZR16rSnDEVY0812xY4XFZ/8af1ee83533f4108433214dc2c3f0964/Interaction_details_ES_resultado_falha.jpg)
El status de una interacción es *Falla* cuando las interacciones no se realizan debido a un error identificado por el sistema. Los resultados de ese tipo acaban generando el status *Con error* en un anuncio, impidiendo que el anuncio se envíe o actualice correctamente en el canal.  En caso de que el resultado de la interacción sea *Falla*, el bloque indica una lista con las fallas detectadas y donde cada una se puede expandir para que el seller acceda a más información sobre lo que ocurrió. 

### Resultado: Notificación
![Interaction details PT resultado aviso](//images.ctfassets.net/alneenqid6w5/7kwwswW5m4kVL3fXWzxKSV/28e3c2b39fc2740880338efcfb3d2729/Interaction_details_ES_resultado_aviso.jpg)
El status de una interacción es *Notificación* cuando hay interacciones que dan una mayor visibilidad a las etapas que se produjeron en el proceso de envío y actualización de un anuncio, pero que no generaron actualizaciones como tal. 

### Resultado: Procesando
![Interaction details PT resultado processing](//images.ctfassets.net/alneenqid6w5/1gilFQQUmLVzTznTQDNv7G/d4f5b881db18ed358e6386c06e4cc2a8/Interaction_details_ES_resultado_processing.jpg)
El status de una interacción es *Procesando* cuando una interacción no fue finalizada y aún debe recibir más acciones. Es un status transitorio, considerando que cuando un evento se cierra, su resultado solo puede ser `satisfactorio`, `falla`, o `notificación`.

## Línea de tiempo
![Interaction details ES linha do tempo](//images.ctfassets.net/alneenqid6w5/6rLi24P5ltS8XFIEBIn6hb/b95c1753d211144af9336c13bd2002bf/Interaction_details_ES_linha_do_tempo.jpg)
El sistema abre una interacción para iniciar una actualización y contiene una serie de registros para realizar las acciones necesarias para que eso suceda. 

La línea de tiempo de la página **Detalles de la interacción** organiza cronológicamente los registros que se producen en cada interacción, e están disponibles para consulta durante diez días. El sistema cierra la interacción cuando cumple su objetivo y no hay más registros por realizar. La línea de tiempo de la interacción muestra los siguientes datos: 

- **Registros:** etapas en una interacción, pueden ser del tipo:      
  - *Satisfactorio*:  son los registros que completaron el objetivo de la interacción con éxito. Por ejemplo, los registros que realmente completaron una actualización en precio, catálogo o stock.    
  - *Información*:  son los registros que exponen las acciones de una interacción dando una mayor visibilidad para realizar análisis más técnicos. Pueden incluir procesos internos de un sistema o llamadas entre dos sistemas. Por ejemplo, colocar un anuncio en la fila, indicar que un anuncio se está procesando o que se realizó una llamada al Catálogo.    
  - *Advertencia*: son los registros en los que la comunicación entre dos sistemas falla y no hay acciones que el usuario pueda realizar para resolverla. Por lo general, son casos en los que el sistema realiza nuevos intentos automáticamente. Por ejemplo, servicios no disponibles, limitación de solicitudes (throttling), etc.    
  - *Falla*: son los registros que detectan errores que impiden que un anuncio se envíe y sincronice correctamente en el canal y que requieren una resolución manual del usuario. Los errores se pueden originar del lado del seller VTEX, como las descripciones de productos que superan el límite de caracteres, y del lado del marketplace, como las llamadas de API que fallaron.    
- **Fecha:** fecha en que se produjo el registro.    
- __Descripción__: texto que contiene más detalles sobre el evento.  
- __Agente__: el sistema o agente responsable de la acción.    
- __Evidencia__: `cURL` de la llamada API realizada entre dos sistemas (haga clic en el ícono de lupa para acceder a las evidencias de cada registro).      

## Más información 

-  [Módulo Gestión de anuncios](https://help.vtex.com/es/tutorial/listagem-de-anuncios--7MRb9S78aBdZjFGpbuffpE)
-  [Gestión de anuncios: detalles del anuncio](https://help.vtex.com/es/tutorial/detalhes-do-anuncio--4FF9QYAewqAn610mDHwb0P)   
