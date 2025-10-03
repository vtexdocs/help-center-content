---
title: 'Mensajes de plantilla de WhatsApp: Obstáculos y configuraciones'
id: 4bc7imLyUicKHtCIJVGNSE
status: PUBLISHED
createdAt: 2025-09-15T15:07:41.131Z
updatedAt: 2025-10-03T14:20:32.609Z
publishedAt: 2025-10-03T14:20:32.609Z
firstPublishedAt: 2025-10-03T14:20:32.609Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: whatsapp-template-messages-impediments-and-configurations
legacySlug: mensajes-de-plantilla-de-whatsapp-obstaculos-y-configuraciones
locale: es
subcategoryId: 7e9LaCixVcvflzgWkxlftd
---

Aquí podrás ver soluciones para posibles obstáculos, rechazos y errores en el proceso de creación, envío y cambios en los mensajes de plantilla de WhatsApp. A continuación, se presentan los siguientes temas para obtener más información.

#### **Proceso de aprobación (Responsabilidad de Meta)**

Una vez que hayas creado el modelo, podrás enviarlo para su aprobación. Puede tomar hasta 24 horas para que se tome una decisión de aprobación. Una vez tomada la decisión, aparecerá una notificación en el Administrador de WhatsApp. Además, META enviará un correo electrónico a los administradores del Administrador de Negocios. Si te has suscrito a las actualizaciones sobre cambios en el estado del modelo de mensaje, META también enviará una notificación de webhook. Consulta [Cómo monitorear cambios de estado.](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/?translation#monitoring-status-changes)

Si es aprobado, el modelo de mensaje tendrá el estado **Activo \- Calidad pendiente.** Con esto, podrás comenzar a enviarlo a los clientes. Si es rechazado, el modelo de mensaje puede ser [editado](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/?translation#editing) y reenviado para su aprobación. Otra opción es [apelar](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/?translation#appeals) la decisión.

#### **Ejemplos**

 Te recomendamos que incluyas un ejemplo antes de enviar el modelo para su aprobación. Los ejemplos te permiten enviar ejemplos de activos multimedia y valores de texto para variables multimedia o de texto requeridos por el modelo. Esto facilita la visualización de cómo aparecerá el modelo para los clientes.

Además, si el envío es rechazado y decides apelar, será necesario incluir un ejemplo en tu apelación. Por lo tanto, es mejor incluirlo en el envío inicial.

Para incluir un ejemplo en el envío, primero crea tu modelo, agregando las variables necesarias. Luego, haz clic en el botón Agregar ejemplo. El panel de vista previa mostrará los ejemplos de activos multimedia o valores de texto proporcionados.

#### **Motivos comunes de rechazo**

- Estos son los errores más comunes que conducen al rechazo del envío y deben evitarse:
- Faltan parámetros variables o tienen claves incompatibles. El formato correcto es {{1}}.
- Los parámetros variables tienen caracteres especiales, como \#, $ o %.
- Los parámetros variables no son secuenciales. Por ejemplo, {{1}}, {{2}}, {{4}} y {{5}} están definidos. Sin embargo, el parámetro {{3}} no existe.
- El modelo de mensaje presenta contenido que viola la Política Comercial de WhatsApp: cuando promocionas la venta de bienes y servicios, todos los medios y mensajes relacionados con tus productos se consideran transacciones. Esto incluye descripciones, precios, tarifas, impuestos y/o divulgaciones legales obligatorias. Las transacciones deben cumplir con la Política Comercial de WhatsApp.
- El modelo de mensaje tiene contenido que viola la Política de WhatsApp Business: no solicites identificadores sensibles de los usuarios. Por ejemplo, no pidas a los clientes que compartan números completos de tarjetas de crédito y débito individuales, números de cuenta financiera, número de identificación nacional ni otra información confidencial. Esto incluye no solicitar a los usuarios documentos que puedan contener identificadores sensibles. Solicitar identificadores parciales (por ejemplo, los últimos 4 dígitos del CPF) es aceptable.
- El contenido es potencialmente abusivo o amenazante. Por ejemplo, amenaza al cliente con acciones legales o vergüenza pública.
- El modelo de mensaje es una duplicata de uno existente. Si se envía un modelo con el mismo texto que uno existente en el cuerpo y el pie de página, la duplicata será rechazada. Se mostrará una notificación de rechazo que incluye el motivo en la Calidad de la cuenta en el Administrador de WhatsApp y se enviará por correo electrónico. En la notificación de Calidad de la cuenta, puedes consultar el nombre y el idioma del modelo existente que tiene el mismo contenido del duplicado rechazado. También puedes editar y reenviar el modelo. Es importante tener en cuenta que esta verificación no se aplica a los modelos de OTP.

#### **Edición**

Puedes editar el modelo a través del Administrador de WhatsApp o del punto de extremo de Modelo de mensaje. Si se edita y se reenvía para su aprobación, el modelo de mensaje tendrá el estado En revisión y no podrá ser enviado a los clientes hasta que esté Activo.

#### **Cómo enviar modelos de mensaje**

Una vez aprobado el modelo, podrás enviarlo a los clientes. Para enviar un modelo de mensaje, consulta Cómo enviar modelos de mensaje a usuarios de la API de Nube o Cómo enviar modelos de mensaje a usuarios de la API Local.

Solo los modelos con estado **Activo (por ejemplo, Activo \- Calidad pendiente, Activo \- Alta calidad)** pueden ser enviados a los clientes.

El estado puede cambiar automáticamente de **Activo** a **Pausado** o **Desactivado** según los comentarios de los clientes. Por lo tanto, te recomendamos que monitorees los cambios de estado y tomes las medidas apropiadas cuando un modelo de mensaje en el que dependes sea pausado o desactivado o corra ese riesgo.

#### **Estado**

Los modelos pueden tener los siguientes estados.

**En revisión:** indica que el modelo aún está en revisión. La revisión puede tardar hasta 24 horas.

**Rechazado:** el modelo fue rechazado durante el proceso de revisión. Consulta Apelaciones.

**Activo \- Calidad pendiente:** el modelo de mensaje aún necesita recibir comentarios de los clientes sobre la calidad. Los modelos de mensaje con este estado pueden ser enviados a los clientes. Consulta Clasificación de calidad.

**Activo \- Alta calidad:** el modelo ha recibido pocos o ningún comentario negativo de los clientes. Los modelos de mensaje con este estado pueden ser enviados a los clientes. Consulta Clasificación de calidad.

**Activo \- Calidad media:** el modelo ha recibido comentarios negativos de varios clientes y podría ser pausado o desactivado pronto. Los modelos de mensaje con este estado pueden ser enviados a los clientes. Consulta Clasificación de calidad.

**Activo \- Calidad baja:** el modelo ha recibido comentarios negativos de varios clientes. Los modelos con este estado pueden ser enviados a los clientes, pero podrían ser suspendidos o desactivados pronto. Por lo tanto, te recomendamos que resuelvas los problemas reportados por los clientes. Consulta Clasificación de calidad.

**Pausado:** el modelo ha sido pausado debido a comentarios negativos recurrentes de los clientes. Los modelos de mensaje con este estado no pueden ser enviados a los clientes. Consulta Pausa en el modelo.

**Desactivado:** el modelo ha sido desactivado debido a comentarios negativos recurrentes de los clientes o a la violación de una o más de nuestras políticas. Los modelos de mensaje con este estado no pueden ser enviados a los clientes. Es posible que puedas editar un modelo de mensaje desactivado y hacer una apelación. Consulta Apelaciones.

**Solicitud de apelación:** indica que se ha hecho una apelación. Consulta Apelaciones.

Puedes consultar el estado de un modelo en **Administrador de WhatsApp > Resumen**. Luego, pasa el cursor sobre el icono del sobre **(Herramientas de la cuenta)** y haz clic en **Modelos de mensaje**. Si tienes más de una cuenta de WhatsApp Business, selecciona la cuenta cuyo estado de modelo quieras consultar en la lista de cuentas en el menú desplegable en la esquina superior derecha.

#### **Cómo monitorear cambios de estado**

El estado de un modelo puede cambiar automáticamente según decisiones de revisión, resultados de apelaciones o cambios en la clasificación de calidad. Si el estado de un modelo cambia, recibirás una notificación por correo electrónico, en el Administrador de Negocios y en el webhook.

Dado que solo puedes enviar modelos de mensaje con estado **Activo**, te recomendamos que te suscribas al campo de actualización de estado de la plantilla de mensaje webhook para recibir notificaciones sobre los cambios de estado en los modelos. Consulta Configuración de webhooks para obtener información sobre cómo suscribirte a este campo y Actualizaciones del modelo de mensaje para ejemplos de cargas de webhook.

Si has configurado los webhooks y ves que la calidad de un modelo está disminuyendo, ve a Administrador de **WhatsApp > Modelos de mensaje** y pasa el cursor sobre el modelo de mensaje en cuestión. Se mostrará un mensaje con información sobre el problema. Con base en esta información, puedes optar por editar el modelo y enviarlo para su reaprobación, usar un modelo diferente o cambiar la lógica comercial de tu aplicación. Si editas el modelo de mensaje y es aprobado, la clasificación de calidad mejorará gradualmente si no recibe comentarios negativos con frecuencia.

#### **Clasificación de calidad**

Los modelos de mensaje tienen una clasificación de calidad basada en el uso y los comentarios de los clientes. Cuando el estado sea Activo, la clasificación del modelo de mensaje aparecerá en el Administrador de WhatsApp junto al estado:

- Activo \- **Calidad pendiente** (resaltado en verde)
- Activo \- **Alta calidad** (resaltado en verde)
- Activo \- **Calidad media** (resaltado en amarillo)
- Activo \- **Calidad baja** (resaltado en rojo)

Inicialmente, los modelos de mensaje aprobados tienen la clasificación **Calidad pendiente**. Si un modelo de mensaje recibe comentarios negativos continuamente, esto cambiará el estado del modelo. Mientras el modelo de mensaje tenga el estado **Activo**, independientemente de la clasificación de calidad, podrá ser enviado a los clientes. Cuando cambie el estado, no podrá ser enviado a los clientes hasta que vuelva a estar activo.

No ofrecemos webhooks para comentarios de modelo de mensaje o cambios en la clasificación de calidad. Sin embargo, podemos enviar una notificación de webhook cuando haya cambios en el estado de los modelos. Por lo tanto, te recomendamos que configures los webhooks, estés atento a los cambios en el estado del modelo y tomes las medidas apropiadas antes de que el modelo sea pausado o desactivado. Consulta Cómo monitorear cambios de estado.

#### **Pausa en el modelo**

Disponible para empresas configuradas en Brasil, México y Colombia el 7 de septiembre de 2022 y en todos los demás países el 6 de octubre de 2022\.

Si un modelo de mensaje alcanza la clasificación de calidad más baja (estado **Activo \- Calidad baja**), se pausará automáticamente por un período para proteger la clasificación de calidad de los números de teléfono que lo usaron. Las duraciones de las pausas son las siguientes:

Primera instancia: **Pausado por 3 horas.**

Segunda instancia: **Pausado por 6 horas.**

Tercera instancia: **Desactivado.**

Cuando un modelo de mensaje se pausa (estado **Pausado**), no se puede enviar a los clientes. Por lo tanto, debes detener las campañas de mensajes automáticos que dependan de ese modelo. Aunque el intento de envío de un modelo pausado no se cobrará ni contará como límite de mensajes, la API lo rechazará. Reanuda estas campañas solo cuando el estado del modelo vuelva a ser **Activo.**

Puedes editar un modelo pausado si crees que esto reducirá los comentarios negativos. Sin embargo, si lo haces, el modelo tendrá el estado **En revisión** y no podrá ser enviado a los clientes hasta que sea aprobado nuevamente y tenga el estado **Activo.**

También puedes cambiar la lógica comercial (definición de público objetivo, parámetros de entrega, entre otros) si crees que esto está influyendo en los comentarios negativos.

Inicialmente, la pausa no afectará el número de teléfono comercial ni reducirá el límite de mensajes. Otros modelos de mensaje con alta calidad pueden seguir siendo enviados desde el número de teléfono. Sin embargo, si la empresa continúa usando modelos con **Calidad baja** después de que se hayan pausado, el número de teléfono podría verse afectado en algún momento.

#### **Notificaciones de pausa**

Cuando se pausa un modelo de mensaje, enviaremos una notificación en el Administrador de WhatsApp, por correo electrónico y webhook (si has suscrito webhooks de cambios en modelos de mensaje). Consulta Cómo monitorear cambios de estado para ver información sobre la configuración del webhook y Ejemplos \- Modelo pausado para ver un ejemplo de carga de webhook.

#### **Reanudar**

El modelo se reanudará automáticamente después de que se complete la pausa descrita anteriormente. Una vez reanudado, el modelo tendrá el estado **Activo** y podrá ser enviado a los clientes nuevamente. Si no has detenido las campañas de mensajes automáticos que dependían del modelo, volverán a funcionar. Sin embargo, te recomendamos que detengas las campañas que dependan de modelos suspendidos hasta que se retiren de la pausa, ya que nuestras API las rechazarán.

La clasificación de calidad del modelo también se establecerá en un valor basado en los comentarios más recientes.

Así como con las notificaciones de pausa, enviaremos notificaciones a través del Administrador de WhatsApp, por correo electrónico y webhook cuando el estado del modelo se establezca como **Activo.**

#### **Apelaciones**

Si el envío es rechazado, puedes hacer una apelación. Ten en cuenta que las apelaciones deben incluir un ejemplo. Si se desactiva un modelo aprobado, también puedes editarlo y reenviarlo para su aprobación.

En el **Administrador de WhatsApp:**

1. Pasa el cursor sobre el icono del sobre **(Herramientas de la cuenta)** y haz clic en **Modelos de mensaje.**
2. Si tienes varias cuentas de WhatsApp Business, utiliza el menú desplegable en la esquina superior derecha para seleccionar la cuenta cuyos modelos quieras gestionar.
3. Encuentra el modelo de mensaje que quieras editar y haz clic en él.
4. Edita el contenido del modelo.
5. Haz clic en el botón **Agregar ejemplo.** Agrega las variables de valores e imágenes.
6. Haz clic en **Enviar.**

META analizará y tomará una decisión en un plazo de 24 horas.

#### **Conoce más**

[Política de WhatsApp Business:](https://www.whatsapp.com/legal/business-policy/) aprende más sobre las políticas para empresas.

[Política Comercial de WhatsApp:](https://www.whatsapp.com/legal/commerce-policy/) conoce más sobre las políticas comerciales.

[Aplicación de las Políticas:](https://developers.facebook.com/docs/whatsapp/overview/policy-enforcement/) descubre más sobre cómo aplicamos las políticas.
