---
title: 'VTEX Copilot en el Admin VTEX'
createdAt: 2026-10-07T00:00:00.000Z
updatedAt: 2026-11-27T00:00:00.000Z
contentType: tutorial
productTeam: Others
slugEN: vtex-copilot-in-the-vtex-admin
locale: es
---

VTEX Copilot es el asistente de inteligencia artificial (IA) de VTEX disponible en el Admin VTEX. Haz preguntas en lenguaje natural sobre pedidos, pagos, catálogo, promociones o cualquier otro tema de tu tienda y Copilot responde según la documentación oficial de VTEX, consultando datos reales de tu tienda, ejecutando diagnósticos automáticos y ayudándote a resolver problemas.

Este artículo describe:

- [Qué hace VTEX Copilot](#que-hace-vtex-copilot)
- [Cómo acceder](#cómo-acceder)
- [Qué puedes pedir](#que-puedes-pedir)
- [Diagnósticos automáticos](#diagnosticos-automaticos)
- [Adjuntar archivos](#adjuntar-archivos)
- [Cambios en la tienda con seguridad](#cambios-en-la-tienda-con-seguridad)
- [Historial de conversaciones](#historial-de-conversaciones)
- [Buenas prácticas](#buenas-practicas)
- [Privacidad y seguridad](#privacidad-y-seguridad)
- [Preguntas frecuentes](#preguntas-frecuentes)

## Qué hace VTEX Copilot

En la práctica, VTEX Copilot puede:

- **Responder dudas** sobre cómo funciona VTEX, según la documentación oficial y con el link de la fuente.
- **Consultar datos de tu tienda**, como el status de un pedido, la configuración de un producto o las reglas de una promoción, usando tus propios permisos de acceso.
- **Ejecutar diagnósticos automáticos** que verifican varias partes de la tienda a la vez para encontrar la causa de problemas comunes. Por ejemplo, "¿por qué este producto no se muestra en la tienda?".
- **Hacer cambios en la tienda**, como actualizar stock, editar un cupón o activar un SKU, siempre después de explicar el impacto y pedir tu confirmación.
- **Abrir tickets con el Soporte VTEX** que ya incluyen la conversación y los archivos adjuntos.
- **Informar sobre VTEX**: status de la plataforma, incidentes recientes y el impacto de un anuncio o una nota de release en tu tienda.

Copilot entiende y responde en tu idioma: puedes escribir en español, inglés o portugués.

## Cómo acceder

Para abrir VTEX Copilot, sigue las instrucciones a continuación:

1. En cualquier página del Admin VTEX, haz clic en `Copilot` en la esquina superior derecha. Copilot se abre en un panel lateral junto a la página en la que estás.
2. Ingresa tu pregunta en el campo **Pregúntale a VTEX Copilot...**.
3. Haz clic en el ícono de la flecha para `enviar`.

![Pantalla inicial de VTEX Copilot en el Admin VTEX](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/apoyo/copilot-admin-1-es.png)

Como ya tienes la sesión iniciada en el Admin VTEX, no es necesario iniciar sesión de nuevo: Copilot usa tu usuario y tus permisos. Como el panel permanece abierto mientras navegas, puedes ver en el Admin VTEX lo que Copilot respondió sin cerrar la conversación.

En la pantalla inicial, la sección **Prueba una de estas** muestra sugerencias listas para comenzar:

| Sugerencia | Acción de Copilot |
| --- | --- |
| **¿Por qué mi pedido está detenido?** | Investiga un pedido que no avanza e indica qué lo está bloqueando: status, pago, facturación o preparación. |
| **¿Por qué mi SKU no aparece en la tienda?** | Revisa todo lo que controla la visibilidad de un producto (status del producto y del SKU, precio, stock y política comercial) e indica qué falta. |
| **Crear una promoción o un cupón** | Pregunta lo que necesitas decidir (tipo, descuento, ítems afectados y vigencia) y muestra exactamente lo que se creará antes de aplicarlo. |
| **Eliminar datos de un cliente (GDPR)** | Guía la eliminación de los datos personales de un cliente y muestra una vista previa para que la revises antes de confirmar. |
| **Continuar con: título de la conversación** | Se muestra en la parte superior de las sugerencias cuando usaste una conversación en las últimas 24 horas en este navegador; incluye la fecha y la hora del último acceso. Reabre esa conversación con todo el historial para que continúes donde la dejaste. |

## Qué puedes pedir

Copilot reúne especialistas de cada área de VTEX. No necesitas elegir al especialista: haz la pregunta y Copilot la dirige al área correcta.

| Tema | Qué cubre Copilot | Ejemplo de pregunta |
| --- | --- | --- |
| **Pedidos y checkout** | Consulta, facturación, cancelación y seguimiento de pedidos, además del motivo por el que un pedido cambió o se detuvo. | "¿Cuál es el status del pedido 1234567890-01?" |
| **Pago** | Transacciones, medios de pago, condiciones de pago, gateways y solución antifraude. | "¿Por qué se rechazó el pago del pedido 1234567890-01?" |
| **Catálogo** | Productos, SKUs, categorías, marcas, imágenes, especificaciones y políticas comerciales. | "¿Por qué el SKU 4521 no se muestra en el sitio web?" |
| **Precios y promociones** | Precios por política comercial y tabla de precios, promociones y cupones. | "¿Qué promociones se aplican al producto 123?" |
| **Stock y envío** | Stock por almacén, reservas, políticas de envío, muelles y puntos de recogida. | "¿Por qué no hay opción de envío para el código postal 76000?" |
| **Marketplace** | Sellers, ofertas activas, vínculos de SKU y afiliados. | "¿Qué sellers ofrecen el SKU 4521?" |
| **Búsqueda** | Resultados de búsqueda, filtros, términos más buscados y corrección ortográfica. | "¿Por qué mi producto no se muestra cuando busco 'tenis'?" |
| **Master Data** | Búsqueda, edición, historial y estructura de registros de clientes y otras entidades. | "¿Quién modificó el registro del cliente x@y.com?" |
| **Usuarios y permisos** | Usuarios del Admin, roles y permisos. | "¿Qué permisos tiene el usuario x@y.com?" |
| **Seguridad y privacidad** | Auditoría de seguridad, políticas de acceso y solicitudes de eliminación de datos (GDPR). | "Realiza una auditoría de seguridad en mi cuenta." |
| **Tarjetas de regalo** | Saldo, historial de uso y proveedores de tarjetas de regalo. | "¿Cuál es el saldo de la tarjeta de regalo X?" |
| **Suscripciones** | Pedidos recurrentes, ciclos y renovaciones que fallaron. | "¿Por qué no se renovó la suscripción del cliente x@y.com?" |
| **B2B** | Organizaciones, centros de costo, roles de compradores y cotizaciones. | "¿Qué centros de costo tiene la organización X?" |
| **Centro de mensajes** | Plantillas, triggers y variables de emails transaccionales. | "¿Qué variables puedo usar en la plantilla de confirmación de pedido?" |
| **Desarrollo de la tienda** | VTEX IO, Store Framework, FastStore, Headless CMS y APIs de VTEX. | "¿Qué endpoint uso para actualizar el stock de un SKU?" |
| **Dashboards** | Explicación de los dashboards del Admin VTEX, como Desempeño de ventas y Vista general. | "¿Cómo comparo en el dashboard los resultados de una campaña anterior con los de hoy?" |
| **Novedades de VTEX** | Status de la plataforma, incidentes y notas de release. | "¿Hay algún incidente en VTEX en este momento?" |
| **Documentación** | Preguntas de tipo "cómo puedo..." sobre cualquier funcionalidad de VTEX. | "¿Cómo creo una promoción Lleva 3 Paga 2?" |
| **Tickets** | Apertura de tickets técnicos con el Soporte VTEX. | "Abre un ticket sobre este problema." |

![VTEX Copilot respondiendo sobre el status de un pedido](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/apoyo/copilot-admin-2-es.png)

Mientras trabaja, Copilot muestra cada consulta que está haciendo en tu tienda y al final de la respuesta indica la cuenta en la que trabajó.

## Diagnósticos automáticos

Además de responder preguntas, Copilot ejecuta diagnósticos que verifican varias partes de la tienda a la vez y devuelven un informe con la causa probable y la acción sugerida. Pide un diagnóstico cuando algo no funciona y no sabes por dónde empezar:

| Ejemplo de solicitud | Verificación |
| --- | --- |
| "Analiza el pedido 1234567890-01" o "¿Por qué este pedido está detenido?" | El flujo del pedido y en qué punto se detuvo: pago, factura, preparación o integración con el ERP. |
| "¿Por qué el producto 123 no se muestra en la tienda?" | Toda la cadena de activación en el catálogo: producto, SKU, precio, stock e indexación. |
| "¿Por qué el SKU 4521 no está disponible en el checkout para el código postal 76000?" | Precio, stock y envío para ese SKU y código postal. |
| "Verifica el go live del dominio www.mitienda.com" | DNS, CDN y certificado SSL del dominio. |
| "¿Los problemas de la tienda vienen de mis personalizaciones?" | Crea un workspace de prueba que contiene solo las aplicaciones nativas de VTEX para que compares. |
| "La sesión de mis clientes se cierra constantemente" (tiendas FastStore) | El dominio de la cookie de inicio de sesión de la tienda. |
| "¿Cuál es la arquitectura de mi tienda?" | La tecnología de la tienda (Store Framework, FastStore, Legacy o Headless) y la edición de la cuenta. |
| "Haz una auditoría de seguridad" | La configuración de seguridad de la tienda, como el reCAPTCHA contra bots y ataques de prueba de tarjetas, con los valores recomendados. |

El informe enumera cada ítem verificado con el resultado correspondiente e indica cuál de ellos está causando el problema. Al final, Copilot sugiere qué cambiar y puede aplicar la corrección por ti, tras tu confirmación. Consulta [Cambios en la tienda con seguridad](#cambios-en-la-tienda-con-seguridad).

En diagnósticos y preguntas más complejas, la respuesta puede tardar unos instantes porque Copilot verifica varios datos antes de responder.

## Adjuntar archivos

Puedes enviar imágenes y documentos para que Copilot los analice junto con tu pregunta, como una captura de pantalla del error, una plantilla exportada en PDF o el comprobante de una transacción.

Para adjuntar archivos sigue las instrucciones a continuación:

1. Haz clic en el ícono del clip para `Adjuntar archivos`, al lado del campo de mensaje.
2. Selecciona los archivos. Se admiten archivos **JPG, PNG, WEBP, GIF y PDF** de hasta **4.3 MB** cada uno.
3. Ingresa tu pregunta y envíala.

Copilot lee los archivos durante la investigación y puede adjuntarlos a un ticket con el Soporte VTEX, si es necesario.

![Adjuntando un archivo en VTEX Copilot](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/apoyo/copilot-admin-3-es.png)

## Cambios en la tienda con seguridad

A veces la solución exige cambiar algo en la tienda, como actualizar un precio, activar un SKU o modificar una configuración. Para cualquier acción que modifique la tienda, Copilot sigue estas reglas:

1. **Explica el impacto antes de aplicar el cambio:** qué va a cambiar y qué impacto tiene en la tienda de producción.
2. **Ofrece el camino manual:** si prefieres, pide instrucciones para hacer el cambio tú mismo en el Admin VTEX o mediante la API.
3. **Pide tu confirmación:** antes de cambiar cualquier valor pide que confirmes, a menos que ya hayas autorizado la corrección en tu mensaje. Por ejemplo: "Corrige el stock del SKU 4521 en el almacén principal a 10 unidades".
4. **Actúa con tu usuario:** el cambio queda registrado a tu nombre, igual que si lo hubieras realizado tú mismo en el Admin VTEX.

![VTEX Copilot pidiendo confirmación antes de cambiar la tienda](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/apoyo/copilot-admin-4-es.png)

Si deseas mantener la etapa de confirmación, describe el problema y pregunta qué hacer en vez de pedir directamente la corrección.

> ⚠️ No existe una opción de deshacer. Para revertir un cambio, pide a Copilot que restaure el valor anterior o edita el valor en el Admin VTEX. Por eso es importante que siempre revises la cuenta, los ítems afectados y los valores antes de confirmar. Si tienes dudas, pide a Copilot las instrucciones en vez de aplicar el cambio.

## Historial de conversaciones

Copilot guarda tus conversaciones para que las retomes donde las dejaste.

- Para ver conversaciones anteriores, haz clic en el ícono de reloj en la parte superior del panel para abrir el **Historial de chats**. Las conversaciones se agrupan por fecha y puedes buscar una conversación específica en **Buscar conversaciones…**.
- Para iniciar un nuevo tema, haz clic en el ícono `+` (`Nuevo chat`) en la parte superior del panel.

![Historial de conversaciones de VTEX Copilot](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/apoyo/copilot-admin-5-es.png)

Dentro de una conversación, Copilot recuerda el contexto reciente. Preguntas como "¿y el segundo SKU?" funcionan justo después de una respuesta relacionada.

## Buenas prácticas

Las preguntas específicas reciben respuestas mejores y más rápidas. Sigue las recomendaciones a continuación para redactar buenas preguntas:

- **Envía todo el contexto en un solo mensaje.** Describe qué pasó, desde cuándo, qué probaste y los IDs relevantes en lugar de dividir el problema en varios mensajes cortos.
- **Trata un solo tema por conversación.** Un pedido detenido y un producto que no se muestra son temas diferentes. Haz clic en `Nuevo chat` para cada uno.
- **Indica los IDs siempre que sea posible.** El número de pedido, el ID del producto o del SKU, el nombre de la promoción, el código postal o el email del cliente ayudan a Copilot a ir directo al punto.
- **Indica qué esperabas y qué pasó.** Esto permite que Copilot compare el comportamiento esperado con el real.
- **Usa términos específicos del área.** Los términos ayudan a Copilot a dirigir la pregunta al especialista correcto. Por ejemplo, di "error en el checkout" en lugar de "error al finalizar el pedido".
- **No dudes en preguntar "¿cómo hago...?"**. Copilot responde según la documentación oficial de VTEX y envía el link de la fuente.

A continuación se muestran buenos y malos ejemplos de preguntas:

| No recomendado ❌ | Recomendado ✅ |
| --- | --- |
| "El pedido tiene un problema"; después "es el pedido 1234567890-01" y después "desde ayer"; en tres mensajes | "El pedido 1234567890-01 está en 'Listo para preparación' desde ayer. El pago fue aprobado y hay stock. ¿Qué lo está bloqueando?" |
| "La promoción no funciona" | "La promoción 'BLACKFRIDAY10' debería dar 10% de descuento en el total del carrito, pero en el checkout el descuento se muestra en cero." |

> ℹ️ Como toda IA, Copilot puede equivocarse. Antes de actuar basándote en una respuesta, verifica en qué cuenta trabajó, qué está proponiendo exactamente y si la funcionalidad mencionada realmente existe. Si tienes dudas, pídele que muestre su razonamiento o su fuente.

## Privacidad y seguridad

Copilot sigue estas reglas para proteger tu acceso, tus conversaciones y los cambios en la tienda:

- **Tu inicio de sesión, tus permisos.** Copilot usa tu sesión del Admin VTEX y nunca una credencial compartida. Solo ve y modifica lo que tu usuario puede ver y modificar. Si tú no tienes acceso al módulo de Pago, Copilot tampoco lo tiene. Por eso, dos usuarios de la misma cuenta pueden recibir respuestas diferentes para la misma pregunta.
- **Sin accesos adicionales.** Copilot no otorga accesos que aún no tienes. Pedirle que se salte un permiso no funciona.
- **Conversaciones privadas.** Tus conversaciones con Copilot en el Admin VTEX son visibles solo para ti.
- **Confirmación antes de los cambios.** Nada se modifica en la tienda sin que lo pidas y lo confirmes.
- **Rastreabilidad.** Cada cambio queda registrado a nombre del usuario que hizo el pedido, igual que en el Admin VTEX.

## Preguntas frecuentes

A continuación puedes consultar las respuestas a las dudas más comunes sobre el uso de Copilot:

**Copilot me dijo que no tengo permiso. ¿Qué hago?**
Copilot hereda los permisos de tu usuario. Pídele al administrador de la cuenta que revise tu [rol](https://help.vtex.com/es/docs/tutorials/roles) en el Admin VTEX.

**¿Copilot modifica la tienda sin preguntarme?**
No. Las preguntas de consulta solo se responden. Cualquier cambio requiere tu confirmación, a menos que ya le hayas pedido explícitamente la corrección en el mensaje.

**¿En qué idioma responde Copilot?**
En el idioma en que escribas: español, inglés o portugués. Para cambiar el idioma, pídelo explícitamente, por ejemplo: "responde en español a partir de ahora".

**La respuesta se interrumpió a la mitad. ¿Qué hago?**
Envía un nuevo mensaje pidiendo que continúe, por ejemplo: "continúa el análisis anterior". El historial de la conversación se mantiene.

**Copilot me pidió iniciar sesión de nuevo o dijo que no tengo acceso a la conversación. ¿Qué hago?**
Copilot usa tu sesión del Admin VTEX. Cierra sesión en el Admin VTEX, inicia sesión de nuevo y abre Copilot otra vez.

**¿Puedo usar Copilot en más de una cuenta?**
Sí. Copilot funciona en la cuenta del Admin VTEX en la que iniciaste sesión. Para consultar otra cuenta, accede al Admin VTEX de esa cuenta. Si Copilot tiene dificultades para abrir un ticket desde una subcuenta, como una cuenta franquicia, accede al Admin VTEX de la cuenta principal y abre el mismo ticket desde ahí, indicando la subcuenta en la que ocurre el problema.
