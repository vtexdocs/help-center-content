---
title: 'Desarrollar un conector de pago para VTEX'
id: 4QXXdhv3HQSMbvzTbgnv0G
status: PUBLISHED
createdAt: 2025-05-28T10:29:13.599Z
updatedAt: 2025-06-17T11:08:47.238Z
publishedAt: 2025-06-17T11:08:47.238Z
firstPublishedAt: 2025-05-29T17:10:05.040Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: developing-a-payment-connector-for-vtex
legacySlug: desarrollar-un-conector-de-pago-para-vtex
locale: es
subcategoryId: 2Xay1NOZKE2CSqKMwckOm8
---

Este artículo ofrece una guía completa para partners que desean desarrollar [conectores de pago](/es/tutorial/que-es-el-conector--3lze0Cu0bmyC6u2o2iaeEA) compatibles con la plataforma VTEX. El objetivo es garantizar una integración eficiente y estandarizada, que permita utilizar los conectores en todas las tiendas de la plataforma.

Al adoptar las directrices presentadas aquí, los partners garantizan que su integración cumpla con los más altos estándares de calidad, agregando valor tanto para los retailers como para sus clientes, y fomentando la innovación y la competitividad en ecommerce.

Este contenido está dirigido a:

- __Desarrolladores y equipos técnicos de partners de pago:__ responsables de implementar soluciones de integración eficientes. 
- __Gerentes de producto y equipos de integración:__ encargados de garantizar la cohesión y la operación eficaz de los conectores dentro de la plataforma.
- __Equipos de soporte técnico de proveedores de pago, gateways y sistemas antifraude:__ responsables de ofrecer soporte continuo y asegurar una operación estable y en conformidad con las soluciones.

## Información general

En VTEX, un conector de pago es un servicio externo que implementa el [VTEX Payment Provider Protocol (PPP)](https://developers.vtex.com/docs/api-reference/payment-provider-protocol). Este protocolo permite la comunicación entre la plataforma y los proveedores de pago (como gateways, adquirentes y soluciones antifraude), lo que facilita a los retailers procesar transacciones de forma integrada y estandarizada, sin necesidad de desarrollar integraciones personalizadas.

Consulta a continuación las secciones de esta guía:

- [Requisitos técnicos obligatorios](#requisitos-tecnicos-obligatorios)
- [Beneficios de la integración PPP](#beneficios-da-integracao-ppp)
- [Fases de desarrollo del conector](#fases-de-desarrollo-del-conector)
- [Elección de la infraestructura del conector](#eleccion-de-la-infraestructura-del-conector)
- [Mejores prácticas en el desarrollo de conectores](#mejores-practicas-en-el-desarrollo-de-conectores-confiabilidad-y-valor-agregado)

## Requisitos técnicos obligatorios

Los partners que deseen desarrollar un conector de pago en VTEX deben implementar las siguientes funcionalidades en sus integraciones:

- Autorización de pagos (sincrónica o asincrónica).
- Cancelación de autorizaciones antes de capturar los valores.
- Captura de valores (inmediata o programada).
- Reembolso de cantidades después de la captura, si la transacción ya ha sido realizada.
- Notificaciones asincrónicas de status transaccional (actualización automática del status del pago en VTEX).
- Conformidad con la certificación [PCI-DSS](https://developers.vtex.com/docs/guides/payments-integration-pci-dss-compliance), en caso de que el objetivo sea procesar medios de pago como tarjetas de crédito, débito o tarjetas de tienda [co-branded](/es/tracks/pagos--6GAS7ZzGAm7AGoEAwDbwJG/1wWt35dRwEboRs1nrSx7G0#tarjetas-de-la-tienda-co-branded). Si no dispones de esta certificación, deberás implementar el conector utilizando la solución [Secure Proxy](https://developers.vtex.com/docs/guides/payments-integration-secure-proxy) de VTEX.
- Alta disponibilidad y cobertura regional del conector, conforme a lo establecido en el contrato firmado con VTEX.
- Desarrollo de los endpoints del conector de acuerdo con las mejores prácticas para la creación de APIs.

## Benefícios da integração PPP

La implementación de conectores desarrollados mediante [VTEX Payment Provider Protocol (PPP)](https://developers.vtex.com/docs/api-reference/payment-provider-protocol) ofrece las siguientes ventajas:

- __Optimización del esfuerzo técnico:__ reduce la necesidad del desarrollo de integraciones personalizadas.
- __Escalabilidad:__ se pueden agregar nuevos medios de pago rápidamente. Una vez publicado, el conector de un partner queda disponible para todos los retailers de VTEX, lo que potencia el alcance y acelera la adopción de la solución.
- __Mayor conversión de ventas:__ flexibilidad para adaptarse a las particularidades y necesidades específicas de cada retailer.
- __Gestión centralizada:__ la información de configuración del conector puede ajustarse directamente en el Admin VTEX.

## Fases de desarrollo del conector

El proceso de desarrollo de un conector VTEX puede dividirse en cuatro fases:

<blockquote><ui>1. **Implementación de la API:** los endpoints deben desarrollarse conforme al [VTEX Payment Provider Protocol (PPP)](https://developers.vtex.com/docs/api-reference/payment-provider-protocol), incorporando definiciones como el entorno de operación, la infraestructura y el flujo de compra.</ui>

  <blockquote><ui>2. **Realización de pruebas:** el conector se valida mediante pruebas predefinidas que garantizan su correcto funcionamiento. Esta etapa es clave, ya que cualquier error identificado puede impactar el SLA de entrega originalmente previsto.</ui>

<blockquote>> ℹ️ Una vez completadas las [pruebas iniciales](/es/tutorial/payment-provider-protocol--RdsT2spdq80MMwwOeEq0m#4-pruebas) y enviado el conector para homologación, se recomienda iniciar las [pruebas de compra](https://developers.vtex.com/docs/guides/payments-integration-payment-provider-framework#placing-an-order-with-your-new-connector) en el entorno de pruebas. Esta acción es esencial para detectar posibles incoherencias que puedan interferir en el progreso de la homologación.</blockquote>

<blockquote><ui>3. **Homologación:** el partner desarrollador del conector abre un ticket, que será atendido por el equipo de Partner Support de VTEX. A partir de esta etapa, empieza el proceso de validación interna y la publicación del conector en el entorno VTEX.</ui>

<blockquote>> ⚠️ Para iniciar el proceso de [homologación de un conector de pago](https://developers.vtex.com/docs/guides/integrating-a-new-payment-provider-on-vtex#7-homologation-and-go-live) en la plataforma es necesario contar con un contrato activo y no tener obligaciones financieras pendientes con VTEX.</blockquote>

<blockquote><ui>4. **Activación del conector:** una vez homologado y publicado, ya puedes configurar los [medios de pago](/es/tutorial/afiliaciones-de-gateway--tutorials_444) en tu tienda a través del [Admin VTEX](/es/tutorial/admin-vtex-comience-aqui--531cHtUCUi3puRXNDmKziw).</ui></blockquote>

Para más detalles sobre el flujo de creación de un conector, accede a [Integrating a new payment provider on VTEX](https://developers.vtex.com/docs/guides/integrating-a-new-payment-provider-on-vtex). 

## Elección de la infraestructura del conector

Durante la fase de implementación de la API, el partner puede definir el tipo de infraestructura que desea utilizar para integrar el conector en VTEX.

Consulta las características de cada opción de infraestructura disponible:

### Infraestructura propia

#### Beneficios:

- __Libertad en la elección de las herramientas de desarrollo:__ como el desarrollador controla completamente la infraestructura, tiene total libertad para seleccionar las herramientas que mejor se adapten a sus necesidades, como lenguajes de programación, bases de datos y otros recursos tecnológicos.

- __Recepción directa de datos de tarjeta en el conector:__ al desarrollar un conector en tu propia infraestructura y en conformidad con los estándares [PCI-DSS](https://developers.vtex.com/docs/guides/payments-integration-pci-dss-compliance), puedes recibir directamente los datos de tarjeta, en caso de que sea necesario. Esto elimina la necesidad de utilizar funcionalidades como [Secure Proxy](https://developers.vtex.com/docs/guides/payments-integration-secure-proxy) para capturar esos datos.  

#### Puntos a considerar: 

- __Necesidad de mantenimiento de la infraestructura:__ al desarrollar el conector en su propia infraestructura, el equipo de desarrollo asume la responsabilidad del mantenimiento, escalabilidad y estabilidad del sistema, lo que implica una mayor carga de trabajo para asegurar su correcto funcionamiento.

- __Menor autonomía para realizar cambios:__ como el conector se desarrolla fuera de la infraestructura de VTEX IO, cambios como la incorporación de nuevos medios de pago o la activación de [split](https://developers.vtex.com/docs/guides/split-payouts-on-payment-provider-protocol) no pueden realizarse directamente. En estos casos, el desarrollador debe ponerse en contacto con el equipo de VTEX para solicitar las modificaciones necesarias. Este proceso está sujeto a un SLA definido por el equipo de Payments de VTEX, y puede durar hasta 30 días.

### Infraestructura VTEX IO

#### Beneficios:

- __[Payment Provider Framework (PPF)](https://developers.vtex.com/docs/guides/payments-integration-payment-provider-framework):__ guía completa para construir conectores utilizando VTEX IO.

- __Flexibilidad total:__ se puede utilizar para cualquier tipo de integración, no solo medios de pago. Además, permite implementar personalizaciones adicionales en el conector de forma sencilla, cuando sea necesario.

- __Diversas opciones de personalización:__ posibilita la creación de componentes de frontend para [Store Framework](https://developers.vtex.com/docs/guides/store-framework), incluyendo banners en la página de inicio de la tienda, páginas de categorías y upsell, entre otros.

- __Desarrollo integrado al ecosistema VTEX:__ permite crear aplicaciones que interactúan con todas las APIs y eventos de la plataforma, como la captación de datos de CRM, datos del carrito y del checkout y datos logísticos.

- __Acceso a eventos en tiempo real:__ utiliza [Event Bus](https://medium.com/dev-axe/aws-amazon-eventbridge-event-bus-explained-ad52ec36d185) para seguir acciones realizadas en la plataforma.

- __Integración simplificada con base de datos como servicio:__ se conecta fácilmente a bases de datos como VBase y [Master data](/es/tutorial/master-data--4otjBnR27u4WUIciQsmkAw) para gestionar datos de manera eficiente en tu aplicación.

- __Elimina la necesidad de desarrolladores con certificación PCI-DSS:__ los conectores creados en VTEX IO utilizan [Secure Proxy](https://developers.vtex.com/docs/guides/payments-integration-secure-proxy) para el tratamiento de datos de tarjeta, garantizando que el conector no tenga acceso directo a información sensible. Aun así, el partner debe contar con la certificación [PCI-DSS](https://developers.vtex.com/docs/guides/payments-integration-pci-dss-compliance).

- __Infraestructura que no requiere mantenimiento:__ al desarrollar el conector en VTEX IO, toda la gestión de la infraestructura es automática, lo que permite que el desarrollador se enfoque únicamente en cómo debe funcionar la integración, sin preocuparse por aspectos técnicos del sistema.

- __Actualización automatizada mediante versionado de la aplicación:__ las actualizaciones del conector se realizan de forma automática, sin necesidad de intervención del equipo de VTEX.  

#### Recursos operativos:

- __Estructura sin servidor (serverless):__ VTEX IO opera directamente en el entorno VTEX, eliminando la necesidad de infraestructura externa.

- __GraphQL + REST APIs:__ ofrece soporte a diversas formas de comunicación, proporcionando flexibilidad en la integración

#### Puntos a considerar:

- __No hay acceso directo a los datos de tarjeta por parte del conector__: VTEX IO no es compatible con los requisitos de [PCI-DSS](https://developers.vtex.com/docs/guides/payments-integration-pci-dss-compliance), por lo que los conectores desarrollados en esta plataforma no pueden acceder directamente a los datos de tarjeta. Para manejar esta información, es necesario utilizar la funcionalidad [Secure Proxy](https://developers.vtex.com/docs/guides/payments-integration-secure-proxy). Si el modelo de negocio necesita procesar los datos de la tarjeta antes de enviarlos al adquirente, VTEX IO puede no ser la mejor opción, ya que no permite ese nivel de acceso.

- __Limitaciones en los lenguajes y frameworks admitidos__: VTEX IO solo es compatible con algunos lenguajes y frameworks específicos, como React, Node y .NET. Los desarrolladores que no estén familiarizados con estas tecnologías tendrán que adaptarse al entorno, lo que puede requerir más tiempo de aprendizaje y ajustes del flujo de trabajo.

- __Se requiere conocimiento de VTEX IO__: aunque VTEX IO es intuitivo y fácil de usar, tiene características específicas que requieren que el desarrollador entienda cómo funciona para aprovechar todo su potencial. Si no se tiene experiencia previa les llevará algún tiempo adaptarse a las particularidades de la plataforma.

La elección entre desarrollar un conector en tu propia infraestructura o en VTEX IO depende de las necesidades de cada integración y del nivel de personalización deseado. [PPP](https://developers.vtex.com/docs/api-reference/payment-provider-protocol) es obligatorio para medios de pago, mientras que VTEX IO ofrece más flexibilidad para personalizaciones avanzadas.

A la hora de definir la infraestructura, considera los conocimientos técnicos del equipo como un factor estratégico. Trabajar con tecnologías conocidas reduce los riesgos, acelera la entrega y aumenta la eficacia operativa.

## Mejores prácticas en el desarrollo de conectores: confiabilidad y valor agregado

A continuación se describen las mejores prácticas para el desarrollo de conectores, que incluyen tanto aspectos técnicos como empresariales que son esenciales para garantizar la eficacia y la calidad de la integración. Las características descritas representan las mejores prácticas identificadas a lo largo de años de colaboración con adquirentes, agencias y proveedores de servicios antifraude, con el objetivo de desarrollar soluciones confiables y de alto rendimiento.

### Diferencial técnico: idempotencia  

La [idempotência](https://es.wikipedia.org/wiki/Idempotencia) en el conector garantiza que múltiples requests con los mismos parámetros produzcan siempre el mismo resultado, sin importar cuántas veces se envíen. Este comportamiento es esencial en flujos críticos, como el transaccional. Además, VTEX realiza intentos automáticos de llamadas idénticas (retry), lo que puede generar múltiples requests con el mismo `paymentId` para actualizar el status de la transacción.

En conectores que poseen idempotencia se observan las siguientes características operativas:

- Se evitan pagos duplicados en caso de reenvío automático. Este comportamiento asegura el procesamiento único de una transacción, evitando duplicados. Si el conector no es idempotente, pueden ocurrir cargos duplicados, generando incoherencias.

- En casos de fallos en la red (comunicación), se garantiza la confiabilidad de la integración.

- Cuando un retailer o adquirente reporta un problema transaccional, la idempotencia garantiza que los logs y las respuestas sean consistentes y previsibles.

- Se reduce el número de llamadas innecesarias al proveedor. Si el pago ya se ha procesado, el conector puede simplemente devolver la respuesta previamente registrada, evitando la necesidad de un nuevo request al adquirente.

#### Implementación de la idempotencia

Para implementar la idempotencia es necesario adoptar las siguientes especificaciones durante el desarrollo del conector: 

1. Garantizar un identificador único para cada transacción (`paymentId`).
2. Almacenar y reutilizar la respuesta (éxito, fallo, pendiente) del request en caso de reenvío.
3. Definir un tiempo de expiración para los registros idempotentes.
4. Asegurar que la idempotencia se mantenga también para cancelaciones y reembolsos.
5. Cuando se utiliza la infraestructura VTEX IO:
   - Se recomienda utilizar VBase para almacenar la respuesta basada en el `paymentId` enviado por el gateway de pago, a través de la ruta [Create Payment](https://developers.vtex.com/docs/api-reference/payment-provider-protocol#post-/payments).
   - Cuando recibe una nueva llamada, el conector puede comprobar en VBase si ya se ha registrado un request similar. Si es así, se puede retornar la respuesta previamente registrada. Consulta este [ejemplo de implementación](https://github.com/vtex-apps/payment-provider-example/blob/main/node/connector.ts#L53).

### Recursos estratégicos para el negocio

Además de la fiabilidad técnica, algunas características funcionales pueden aumentar significativamente el impacto comercial del conector. A continuación destacamos las funcionalidades que contribuyen directamente al éxito de la operación, promoviendo una mayor seguridad, eficiencia y conversión.

#### Soporte para carteras digitales (Apple Pay, NuPay, Google Pay, PayPal)

El creciente uso de carteras digitales (wallets) aporta mayor seguridad y comodidad a los consumidores. Los conectores compatibles con estas carteras ofrecen los siguientes beneficios: 

- __Checkout más directo:__ reduce la fricción en el pago, ya que los datos de la tarjeta están almacenados en la cartera digital.
- __Mayor seguridad:__ el uso de autenticación biométrica y tokenización minimiza fraudes y contracargos.
- __Mayor conversión:__ menos pasos en el checkout resultan en un menor abandono de carrito. 

#### Soporte para Google Pay con tokenización DPAN (Device Primary Account Number)

El soporte para Google Pay con [tokenización DPAN](/es/tutorial/dpan-y-fpan-comprender-la-seguridad-en-el-flujo-de-pagos-tokenizados-online--3RM7RvhKZ057wja5xVEOqb) ofrece ventajas importantes para la seguridad y la experiencia del usuario:

- __Mayor seguridad:__ los datos reales de la tarjeta no se comparten, lo que reduce el riesgo de fraude.
- __Menos fricción en las compras recurrentes:__ los DPANs se pueden reutilizar (pagos recurrentes) sin necesidad de volver a solicitar los datos del usuario.
- __Compatibilidad con múltiples dispositivos:__ permite utilizar la misma tarjeta en diferentes dispositivos sin necesidad de una nueva autenticación.
- __Reducción de costos por fraudes:__ la tokenización evita el uso indebido de credenciales, lo que puede disminuir el número de contracargos. 

> ⚠️ El soporte para Google Pay con DPAN solo está disponible a través de la [cartera Google Pay nativa de VTEX](/es/tracks/cartera-digital-e-wallet--6X8YyZBoVJpz5R8oXciTyu/61JMBvM5Vanqj6RaJsP8CT).  

#### Soporte de pago vía PDV (VTEX Sales App)

Los conectores compatibles con pagos vía [Punto de venta (PDV)](https://es.wikipedia.org/wiki/Terminal_punto_de_venta) en [VTEX Sales App](/es/tracks/instore-primeros-pasos-y-configuracion--zav76TFEZlAjnyBVL5tRc/7fnnVlG3Kv1Tay9iagc5yf) hacen posibles transacciones [Omnichannel](/es/tracks/estrategias-de-comercio-unificado--3WGDRRhc3vf1MJb9zGncnv/2LGAiUnHES1enjHsfi8fI3) entre el entorno físico y digital. Los beneficios incluyen:

- __Integración entre canales:__ el cliente puede iniciar una compra online y finalizarla en la tienda física utilizando el mismo medio de pago.
- __Reducción de errores operativos:__ dado que el pago está integrado con VTEX Sales App, no es necesario registrar manualmente las transacciones en el [ERP](https://es.wikipedia.org/wiki/Sistema_de_planificaci%C3%B3n_de_recursos_empresariales).
- __Experiencia de compra optimizada:__ los vendedores pueden procesar los pagos rápidamente en un único sistema.
- __Soporte para diferentes opciones de pago:__ el PDV puede aceptar tarjetas de crédito, débito, Pix (Brasil) mediante código QR y carteras digitales.

#### Soporte para split de cobros

Los conectores con funcionalidad de [split de cobros](/es/tutorial/split-de-pagos--6k5JidhYRUxileNolY2VLx) permiten dividir automáticamente el valor de una transacción entre diferentes destinatarios en el momento de la autorización o de la captura, dependiendo de la configuración del proveedor. Esta funcionalidad es esencial para marketplaces y operaciones omnichannel.

- __Distribución automatizada de pagos__: el valor de la transacción se divide automáticamente, garantizando eficiencia y menor riesgo operativo.
- __Reducción de costos y complejidad__: elimina transferencias manuales, reduce costos administrativos y acelera la conciliación financiera.
- __Flexibilidad para diferentes modelos de negocio__: facilita operaciones con modelos como marketplace, entrega en casa y dropshipping.

## Más información

- [VTEX Payment Provider Protocol - Help Center](/es/tutorial/payment-provider-protocol--RdsT2spdq80MMwwOeEq0m)
- [Secure Proxy - Help Center](https://developers.vtex.com/docs/guides/payments-integration-secure-proxy#custom-supported-operators)
- [VTEX Master Data - Help Center](/es/tutorial/master-data--4otjBnR27u4WUIciQsmkAw)
- [Implementing a Payment Provider - Dev. Portal](https://developers.vtex.com/docs/guides/payments-integration-implementing-a-payment-provider)
- [Payment Provider Framework - Dev. Portal](https://developers.vtex.com/docs/guides/payments-integration-payment-provider-framework)
- [Split Payouts on Payment Provider Protocol - Dev. Portal](https://developers.vtex.com/docs/guides/split-payouts-on-payment-provider-protocol)
- [PCI-DSS - Dev. Portal](https://developers.vtex.com/docs/guides/payments-integration-pci-dss-compliance)
- [Payment apps - Dev. Portal](https://developers.vtex.com/docs/guides/payments-integration-payment-app)
- [Whats is VTEX IO - Dev. Portal](https://developers.vtex.com/docs/guides/vtex-io-documentation-what-is-vtex-io)
- [Exemplo de integração: payment-provider-example - GitHub](https://github.com/vtex-apps/payment-provider-example)
- [Developing services on VTEX IO - Learning Center](https://learn.vtex.com/docs/course-service-course-lang-en)

