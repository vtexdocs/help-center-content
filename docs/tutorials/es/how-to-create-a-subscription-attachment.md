---
title: 'Cómo crear un anexo de suscripción'
id: 2bUuKyPflA8cOGLv8OvaKK
status: PUBLISHED
createdAt: 2021-07-06T15:31:40.648Z
updatedAt: 2021-07-06T18:27:09.787Z
publishedAt: 2021-07-06T18:27:09.787Z
firstPublishedAt: 2021-07-06T17:47:38.919Z
contentType: tutorial
productTeam: Post-purchase
author: 1malnhMX0vPThsaJaZMYm2
slug: como-crear-un-anexo-de-suscripcion
locale: es
legacySlug: como-crear-un-anexo-de-suscripcion
subcategory: 1rA9wuuskW3PpjvMrhatAM
---

 >ℹ️ Si utiliza el módulo de **Suscripciones Beta**, la forma más recomendable de crear un plan de suscripción es directamente en el módulo de **Suscripciones**. Lea el artículo [Cómo crear un plan de suscripción (Beta)](https://help.vtex.com/es/tutorial/como-criar-um-plano-de-assinatura-beta--1qGRoFczm98Wgt81f9mUqC) para obtener más información.

El **Anexo de SKU** indica que la funcionalidad de Suscripción está activa para ese SKU y también cuál será la frecuencia disponible. 

Cuando el cliente de su tienda finaliza un pedido y selecciona una suscripción, esa información se envía a **Gestión de pedidos**, lugar donde el sistema de **Suscripciones** consulta los detalles y programa las compras futuras.

A continuación se explica cómo crear un anexo de suscripción.

* [Crear un anexo de SKU](#crear-un-anexo-de-SKU)
* [Configurar la frecuencia y la fecha del ciclo de suscripción](#configurar-la-frecuencia-y-fecha-del-ciclo-de-suscripcion)
* [Asociar el anexo de SKU](#asociar-el-anexo-a-un-sku)

### Crear un anexo de SKU

Para crear un anexo de SKU, siga los pasos a continuación.

1. Acceda al módulo **Catálogo**.
2. Haga clic en la sección **Anexos**.
3. En la pestaña **Servicios y SKUs**, haga clic en `Nuevo anexo`.
4. En el campo **Nombre**, registre un valor con el formato: `vtex.subscription.{sufijo}`, donde el `{sufijo}` debe ser sustituido con el identificador que desea para diferenciar esta suscripción, como en los siguientes ejemplos:
    * `vtex.subscription.plan1`
    * `vtex.subscription.prueba`
5. Deje la casilla de selección **Anexo obligatorio** sin marcar.

>⚠️ El campo **Anexo obligatorio** no se debe marcar. Si el anexo se marca como obligatorio, el sistema de **Suscripciones** intentará enviar un pedido de suscripción para un ítem que ya tiene un anexo obligatorio, lo que generará un error en el sistema. Si esto ocurre por equivocación, quite la marca de la casilla **Anexo obligatorio** y solicite al cliente de su tienda que intente realizar el pedido nuevamente.

6. En **Status**, marque la casilla **Activa/Desactiva el anexo**, y haga clic en `Salvar` para guardar los cambios.

### Configurar la frecuencia y la fecha del ciclo de suscripción

Después de crear el anexo del SKU, debe configurar la **frecuencia** y la **fecha del ciclo de suscripción**.

La frecuencia es la periodicidad permitida para la suscripción. Este valor se mostrará para que el cliente de la tienda elija entre las opciones de frecuencia de suscripción registradas para ese SKU. Es posible configurar la frecuencia de la suscripción para realizar pedidos de manera diaria, semanal, mensual o anual, dependiendo de su estrategia de negocio.

Asociada a la frecuencia definida previamente, la fecha del ciclo de suscripción corresponde al día en que se repetirá el pedido en cada ciclo de suscripción. Ejemplo: su cliente puede elegir una suscripción para comprar comida de gato el día 15 de cada mes. En tal caso, 15 es la fecha del ciclo de suscripción y la frecuencia es mensual.

Siga las instrucciones a continuación para configurar la frecuencia y fechas del ciclo de suscripción que están disponibles. Los valores que configure se mostrarán en el _checkout_ para que el cliente de su tienda pueda elegir cuál es la mejor frecuencia y fecha del ciclo.

1. En la página **Anexos** > **Servicios y SKUs**, haga clic en el botón `Editar`, que se encuentra al lado del anexo que creó.
2. En el campo **Nombre de la clave**, ingrese los valores fijos `vtex.subscription.key.frequency`, que corresponde a la **frecuencia**, y `vtex.subscription.key.purchaseday`, que corresponde a la **fecha del ciclo de suscripción**.
3. Defina los **Valores permitidos** para cada clave de acuerdo con las frecuencias y fechas que desea ofrecer en la tienda.

   * Para la **Frecuencia** (`vtex.subscription.key.frequency`) se permiten las siguientes unidades: `day`, `week`, `month`, `year`. Debe haber un espacio entre el número y la frecuencia.

        **Ejemplos de cómo completar los valores:** `3 week`, `8 month`, `1 year` o `7 day`. Si desea ofrecer a su cliente la opción de suscribirse para comprar un ítem diariamente, puede introducir el valor `1 day`. Si desea ofrecer a su cliente la opción de suscribirse para comprar un ítem cada dos semanas, puede rellenar el campo con `2 week`.

        También puede ofrecer varias opciones de frecuencia. En tal caso, debe separar los valores con una coma. Por ejemplo, si desea ofrecer una opción de suscripción mensual y otra semanal, tiene que completar el campo de la siguiente manera: `1 month,1 week`.

    * Para la **fecha del ciclo de suscripción** (`vtex.subscription.key.purchaseday`), el campo **Valores permitidos** deberá seguir el estándar de número para **suscripciones** con frecuencia semanal o mensual.

        * **Semanalmente:** los valores posibles para completar este campo son = `0`, `1`, `2`, `3`, `4`, `5` y `6`, que equivalen a los días de la semana. Considere `0` = domingo, `1` = lunes, `2` = martes, y así sucesivamente hasta `6` = sábado. Separe los valores con `,`, según se muestra a continuación.

        ![ES Assinatura Exemplo Valores week](https://images.ctfassets.net/alneenqid6w5/1KDaD3iRFBwt7xrikkB8V9/ecfe9cb9da8bb798d410f5d709c8b04d/ES_Assinatura_Exemplo_Valores_week.png)

        * **Mensualmente:** los valores posibles para rellenar este campo en el _checkout_ son = `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, (...) hasta `28`, que equivalen a los días del mes. Considere `1` = primer día del mes, `2` = segundo día del mes, `3` = tercer día del mes, y así sucesivamente hasta `28` = vigésimo octavo día del mes. Separe los valores con `,`, según se muestra a continuación.

        ![ES Assinatura Exemplo Valores month](https://images.ctfassets.net/alneenqid6w5/5tbntKlv4WeYUXQtM8EMGz/84d58a31d1b449fdbdfad60fae5dec0d/ES_Assinatura_Exemplo_Valores_month.png)

>ℹ️ Si no se introduce ningún valor en el campo **Valores permitidos**, la fecha del ciclo de suscripción será el mismo día de la semana (si la frecuencia es semanal) o día del mes (si la frecuencia es mensual) del pedido original.

### Asociar el anexo a un SKU

Después de crear el anexo de SKU y de configurar la frecuencia y las fechas del ciclo necesarias, debe asociar el anexo creado a uno o más SKU existentes.

1. En el módulo **Catálogo**, acceda a **Productos y SKUs**.
2. Seleccione el SKU que desea habilitar para la suscripción.
3. Acceda a la pestaña **Configuraciones avanzadas**.
4. Asocie el anexo de suscripción deseado marcando la casilla de selección.
5. Haga clic en `Salvar` para guardar los cambios.

#### **SEPA MÁS**

* [Cómo configurar Suscripciones en su tienda](https://help.vtex.com/es/tutorial/como-configurar-assinaturas--1FA9dfE7vJqxBna9Nft5Sj)
