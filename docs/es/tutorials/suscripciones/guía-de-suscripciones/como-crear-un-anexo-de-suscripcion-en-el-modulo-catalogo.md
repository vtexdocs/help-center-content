---
title: 'Cómo crear un anexo de suscripción en el módulo Catálogo'
id: 2bUuKyPflA8cOGLv8OvaKK
status: PUBLISHED
createdAt: 2021-07-06T15:31:40.648Z
updatedAt: 2025-02-25T18:41:12.723Z
publishedAt: 2025-02-25T18:41:12.723Z
firstPublishedAt: 2021-07-06T17:47:38.919Z
contentType: tutorial
productTeam: Post-purchase
author: 1malnhMX0vPThsaJaZMYm2
slugEN: how-to-create-a-subscription-attachment-via-the-catalog-module
legacySlug: como-crear-un-anexo-de-suscripcion
locale: es
subcategoryId: 1rA9wuuskW3PpjvMrhatAM
---

> ℹ️ Si utilizas el módulo **Suscripciones** en el Admin VTEX, recomendamos crear un plan de suscripción en este mismo módulo. Para más información, consulta el artículo [Cómo crear un plan de suscripción](/es/tutorial/como-criar-um-plano-de-assinatura-beta--1qGRoFczm98Wgt81f9mUqC).

[Suscripciones](/es/tutorial/como-funciona-a-assinatura--frequentlyAskedQuestions_4453) es una solución VTEX que permite a los retailers vender de forma recurrente y automática a clientes suscriptores, según la frecuencia establecida.

Hay dos formas de adquirir productos de tu tienda mediante suscripción:

* Creación de [planes de suscripción](/es/tutorial/como-criar-um-plano-de-assinatura-beta--1qGRoFczm98Wgt81f9mUqC) en el módulo **Suscripciones**.
* Creación de anexos de suscripción en el módulo **Catálogo**.

Este artículo explica cómo crear anexos de suscripción a través del módulo **Catálogo**, lo recomendado cuando tu tienda no utiliza el módulo **Suscripciones (Beta).**

> ⚠️ Es importante entender el uso del término anexo en el contexto de las suscripciones:<ul><li>[Anexo:](/es/tutorial/o-que-e-um-anexo--aGICk0RVbqKg6GYmQcWUm) es una personalización opcional y gratuita del SKU que permite al retailer agregar información extra a un ítem.</li><li>**Anexo de suscripción:** es un tipo específico de anexo que permite crear suscripciones para un SKU. Los clientes pueden crear suscripciones para comprar el SKU periódicamente cuando se haya asociado a un anexo de suscripción. </li><li>**Suscripción de SKU con anexo:** cuando un cliente crea una suscripción a partir de un pedido que contiene un SKU con anexo, el retailer debe realizar una configuración en la tienda para que el anexo del pedido original se mantenga en los pedidos futuros de la suscripción. Esto se hace a través de la API utilizando el endpoint [Edit subscriptions settings](https://developers.vtex.com/docs/api-reference/subscriptions-api-v3#post-/api/rns/settings). Aprende más en [How to keep attachments from original orders in subscriptions](https://developers.vtex.com/docs/guides/how-to-keep-attachments-from-original-orders-in-subscriptions).</li></ul>

## Anexo de suscripción en el módulo Catálogo

El anexo de suscripción se utiliza para configurar la funcionalidad de suscripción con el SKU al que está asociado. Este tipo de anexo contiene la configuración de la frecuencia y la fecha del ciclo de la suscripción.

Para crear un anexo de suscripción a través de Catálogo, se deben llevar a cabo las siguientes acciones:

1. [Crear anexo de suscripción](#1-crear-anexo-de-suscripcion)
2. [Configurar frecuencia y fecha de ciclo de la suscripción](#2-configurar-frecuencia-y-fecha-de-ciclo-de-la-suscripcion)
3. [Asociar SKU con anexo de suscripción](#3-asociar-sku-con-anexo-de-suscripcion)

## 1. Crear anexo de suscripción

Sigue los pasos que se indican a continuación para crear un anexo de suscripción:

1. En el Admin VTEX, accede a **Catálogo > Campos personalizados**, o ingresa **Campos personalizados** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña **Servicios y SKUs**, haz clic en `Nuevo anexo`.
3. En el campo **Nombre**, registra un valor con el formato `vtex.subscription.{sufijo}`, y sustituye `{sufijo}` por el nombre que deseas utilizar para esta suscripción, como en los siguientes ejemplos:
    * `vtex.subscription.plan1`
    * `vtex.subscription.prueba`
4. En el campo **Anexo obligatorio**, deja la casilla sin marcar.

  > ❗ El campo **Anexo obligatorio** no se debe marcar. Si se marca esta opción, el sistema de **Suscripciones** intentará enviar un pedido con suscripción para procesar un ítem que ya tiene un anexo obligatorio (el anexo de suscripción), generando un error en el sistema. Por lo tanto, si la casilla **Anexo obligatorio** estuviera marcada por error, desmárcala y solicita al cliente de la tienda que vuelva a realizar el pedido.

5. En el campo **Status**, marca la casilla `Activar/Desactivar anexo`.
6. Haz clic en `Guardar`.

## 2. Configurar frecuencia y fecha de ciclo de la suscripción

Una vez creado el anexo de suscripción, debe configurarse la frecuencia y la fecha de ciclo de la suscripción. La frecuencia indica cada cuánto tiempo se renueva la suscripción. Este valor se presenta al cliente durante la creación de la suscripción, para que elija entre opciones como diaria, semanal, mensual o anual, según la estrategia de tu negocio.

La fecha de ciclo de la suscripción corresponde al día en que se repetirá el pedido en cada ciclo de la suscripción. Por ejemplo, el cliente crea una suscripción para recibir comida para gatos el día 15 de cada mes. En este caso, el día 15 es la fecha de ciclo y la frecuencia de la suscripción es mensual.

Para configurar la frecuencia y la fecha de ciclo de la suscripción en tu tienda, sigue estos pasos:

1. En el Admin VTEX, accede a **Catálogo > Campos personalizados**, o ingresa **Campos personalizados** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña **Servicios y SKUs**, en la fila correspondiente al anexo que creaste anteriormente, haz clic en `Editar`.
3. En el campo **Nombre de clave**, ingresa el valor fijo `vtex.subscription.key.frequency`, que corresponde a la frecuencia.
4. En el campo **Valores permitidos**, define los valores deseados para la frecuencia de la suscripción, como se indica en la tabla a continuación.
5. Haz clic en `Agregar nuevo`.
6. En el campo **Nombre de clave**, ingresa el valor fijo `vtex.subscription.key.purchaseday`, que corresponde a la fecha de ciclo de la suscripción.
7. En el campo **Valores permitidos**, define los valores deseados para la fecha de ciclo, como se indica en la tabla a continuación.

  > ⚠️ Si no se ingresa ningún valor en el campo **Valores permitidos** para `vtex.subscription.key.purchaseday`, la fecha de ciclo de la suscripción será el mismo día de la semana (para frecuencia semanal) o el mismo día del mes (para frecuencia mensual) en que se realizó el pedido original.

  > ℹ️ No es necesario rellenar el campo **Número máximo de caracteres**.

8. Haz clic en `Guardar`.

| **Nombre de clave** | **Valores permitidos** |
| --- | --- |
| `vtex.subscription.key.frequency` | Los valores permitidos son una combinación de un número del 1 al 9 + espacio + alguno de los siguientes valores:<ul><li>`day`: pedidos diarios. Ejemplo: `5 day`.</li><li>`week`: pedidos semanales. Ejemplo: `4 week`.</li><li>`month`: pedidos mensuales. Ejemplo: `3 month`.</li><li>`year`: pedidos anuales. Ejemplo: `2 year`.</li></ul>Para proporcionar varias opciones de frecuencia, separa los valores con una coma. No dejes espacio después de la coma.<ul><li>Ejemplo: para ofrecer una opción de suscripción mensual y otra semanal, ingresa `1 month,1 week`.</li></ul> |
| `vtex.subscription.key.purchaseday` | **Frecuencia semanal**Los valores permitidos para la fecha del ciclo de suscripción semanal varían de 0 a 6, correspondiendo a los días de la semana:<ul><li>`0`: domingo</li><li>`1`: lunes</li><li>`2`: martes</li><li>`3`: miércoles</li><li>`4`: jueves</li><li>`5`: viernes</li><li>`6`: sábado</li></ul>Si deseas ofrecer más de un día para el ciclo con frecuencia semanal, separa los valores utilizando comas.<ul><li>Ejemplo: para ofrecer una suscripción semanal con fecha de ciclo los domingos, miércoles y viernes, ingresa `0,3,5`.</li></ul><br>**Frecuencia mensual**Los valores permitidos van de `1` a `28` y equivalen a los días del mes, donde `1` es el primer día del mes, `2` el segundo, y así sucesivamente hasta `28`, el vigésimo octavo día del mes.Si utilizas más de un número, sepáralos con una coma. No dejes espacio después de la coma.<ul><li>Ejemplo: para ofrecer una suscripción mensual con fecha de ciclo en el primer o en el último día permitido, ingresa `1,28`.</li></ul> |

Las siguientes imágenes muestran ejemplos de cómo rellenar estos valores en el Admin VTEX:

* **Ejemplo de frecuencia mensual:** la imagen muestra una suscripción mensual con pedidos que se pueden realizar todos los días 1, 15 o 28 de cada mes:

  ![ES Assinatura Exemplo Valores month](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/suscripciones/gu%C3%ADa-de-suscripciones/como-crear-un-anexo-de-suscripcion-en-el-modulo-catalogo_1.png)

* **Ejemplo de frecuencia cada 3 semanas:** la imagen muestra una suscripción que crea nuevos pedidos cada 3 semanas, y la compra puede realizarse los domingos, martes o sábados.

  ![ES Assinatura Exemplo Valores week](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/suscripciones/gu%C3%ADa-de-suscripciones/como-crear-un-anexo-de-suscripcion-en-el-modulo-catalogo_2.png)

## 3. Asociar SKU con anexo de suscripción

Para la última etapa de creación de un anexo de suscripción vía **Catálogo**, debes asociar el anexo de suscripción a los SKUs deseados siguiendo los pasos a continuación:

1. En el Admin VTEX, accede a **Catálogo > Todos los productos** o ingresa **Todos los productos** en la barra de búsqueda en la parte superior de la página.
2. En la columna **SKU**, haz clic sobre el SKU que deseas asociar al anexo de suscripción.
3. En la pestaña **Configuración avanzada**, en el campo **Anexos**, marca la casilla del anexo de suscripción. 
4. Haz clic en `Guardar`.

Ahora los clientes podrán crear suscripciones en tu tienda para comprar de forma recurrente y automática el SKU asociado al anexo de suscripción.

## Más información

* [Cómo funciona Suscripciones](/es/tutorial/como-funciona-a-assinatura--frequentlyAskedQuestions_4453)
* [Cómo configurar Suscripciones en tu tienda](/es/tutorial/como-configurar-assinaturas--1FA9dfE7vJqxBna9Nft5Sj)
* [How to keep attachments from original orders in subscriptions](https://developers.vtex.com/docs/guides/how-to-keep-attachments-from-original-orders-in-subscriptions)

