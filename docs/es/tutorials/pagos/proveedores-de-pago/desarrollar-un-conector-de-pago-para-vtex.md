---
title: 'Desarrollar un conector de pago para VTEX'
createdAt: 2025-05-28T10:29:13.599Z
updatedAt: 2026-10-16T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: developing-a-payment-connector-for-vtex
locale: es
hidden: false
---

Este artículo describe los requisitos, las opciones de infraestructura y las buenas prácticas para partners que desean desarrollar [conectores de pagos](/es/docs/tutorials/que-es-el-conector) compatibles con la plataforma VTEX. El objetivo es garantizar una integración eficiente y estandarizada, que permita utilizar los conectores en todas las tiendas de la plataforma.

Este contenido se dirige a:

- **Desarrolladores y equipos técnicos de partners de pago:** responsables de implementar soluciones de integración eficientes.
- **Gerentes de producto y equipos de integración:** responsables de la cohesión y la operación de los conectores en la plataforma.
- **Equipos de soporte técnico de proveedores de pago, gateways y sistemas antifraude:** responsables del soporte continuo, la operación estable y la conformidad de las soluciones.

## Información general

En VTEX, un conector de pago es un servicio externo que implementa el [VTEX Payment Provider Protocol (PPP)](https://developers.vtex.com/docs/api-reference/payment-provider-protocol). Este protocolo permite la comunicación entre la plataforma y los proveedores de pago (como gateways, adquirentes y soluciones antifraude), lo que facilita a los retailers procesar transacciones de forma integrada y estandarizada, sin necesidad de desarrollar integraciones personalizadas.

Consulta a continuación las secciones de esta guía:

- [Requisitos técnicos obligatorios](#requisitos-tecnicos-obligatorios)
- [Beneficios de la integración PPP](#beneficios-de-la-integracion-ppp)
- [Fases de desarrollo del conector](#fases-de-desarrollo-del-conector)
- [Elección de la infraestructura del conector](#eleccion-de-la-infraestructura-del-conector)
- [Buenas prácticas en el desarrollo de conectores](#buenas-practicas-en-el-desarrollo-de-conectores-confiabilidad-y-valor-agregado)

## Requisitos técnicos obligatorios

Los partners que deseen desarrollar un conector de pago en VTEX deben implementar las siguientes funcionalidades en sus integraciones:

- Autorización de pagos (síncrona o asíncrona).
- Cancelación de autorizaciones antes de capturar los valores.
- Captura de valores (inmediata o programada).
- Reembolso de valores después de la captura.
- Notificaciones asíncronas de status transaccional que actualizan automáticamente el status del pago en VTEX.
- Certificación [PCI-DSS](https://developers.vtex.com/docs/guides/payments-integration-pci-dss-compliance) para procesar tarjetas de crédito, débito o [co-branded](/es/tracks/pagos--6GAS7ZzGAm7AGoEAwDbwJG/1wWt35dRwEboRs1nrSx7G0#tarjetas-de-la-tienda-co-branded), o implementación del conector con la solución [Secure Proxy](https://developers.vtex.com/docs/guides/payments-integration-secure-proxy) de VTEX, que no requiere esta certificación.
- Alta disponibilidad y cobertura regional del conector, conforme a lo establecido en el contrato firmado con VTEX.
- Desarrollo de los endpoints del conector de acuerdo con las buenas prácticas para la creación de APIs.

## Beneficios de la integración PPP

La implementación de conectores desarrollados mediante [VTEX Payment Provider Protocol (PPP)](https://developers.vtex.com/docs/api-reference/payment-provider-protocol) ofrece las siguientes ventajas:

- **Optimización del esfuerzo técnico:** reduce la necesidad de desarrollar integraciones personalizadas.
- **Escalabilidad:** se pueden agregar nuevos medios de pago rápidamente. Una vez publicado, el conector de un partner queda disponible para todos los retailers de VTEX, lo que potencia el alcance y acelera la adopción de la solución.
- **Mayor conversión de ventas:** flexibilidad para adaptarse a las particularidades y necesidades específicas de cada retailer.
- **Gestión centralizada:** la información de configuración del conector puede ajustarse directamente en el Admin VTEX.

## Fases de desarrollo del conector

La guía [Integrating a new payment provider on VTEX](https://developers.vtex.com/docs/guides/integrating-a-new-payment-provider-on-vtex) es la referencia para el proceso completo de creación de un conector. En resumen, el partner implementa los endpoints del PPP, valida el conector con los [casos de prueba de Payment Provider Test Suite](https://developers.vtex.com/docs/guides/payments-integration-payment-provider-homologation) y realiza [pruebas de compra](https://developers.vtex.com/docs/guides/payments-integration-payment-provider-framework#placing-an-order-with-your-new-connector) en una tienda de prueba. Cuando todos los casos de prueba son aprobados, el partner solicita la homologación abriendo un ticket en el [Soporte VTEX](https://supporticket.vtex.com/support), lo que requiere un contrato activo y ninguna deuda pendiente con VTEX. Una vez que el conector es homologado y publicado, los retailers pueden configurar los [medios de pago](/es/docs/tutorials/afiliaciones-de-gateway) en sus tiendas desde el [Admin VTEX](/es/docs/tutorials/admin-vtex-comience-aqui).

## Elección de la infraestructura del conector

Al implementar los endpoints, el partner elige si el conector se hospedará en infraestructura propia o en VTEX IO. Consulta las características de cada opción:

### Infraestructura propia

#### Beneficios:

- **Libertad en la elección de las herramientas de desarrollo:** como el desarrollador controla completamente la infraestructura, tiene total libertad para seleccionar las herramientas que mejor se adapten a sus necesidades, como lenguajes de programación, bases de datos y otros recursos tecnológicos.

- **Recepción directa de datos de tarjeta en el conector:** al desarrollar un conector en tu propia infraestructura y en conformidad con los estándares [PCI-DSS](https://developers.vtex.com/docs/guides/payments-integration-pci-dss-compliance), puedes recibir directamente los datos de tarjeta, en caso de que sea necesario. Esto elimina la necesidad de utilizar funcionalidades como [Secure Proxy](https://developers.vtex.com/docs/guides/payments-integration-secure-proxy) para capturar esos datos.

#### Puntos a considerar

- **Necesidad de mantenimiento de la infraestructura:** al desarrollar el conector en su propia infraestructura, el equipo de desarrollo asume la responsabilidad del mantenimiento, escalabilidad y estabilidad del sistema, lo que implica una mayor carga de trabajo para asegurar su correcto funcionamiento.

- **Menor autonomía para realizar cambios:** como el conector se desarrolla fuera de la infraestructura de VTEX IO, cambios como la incorporación de nuevos medios de pago o la activación de [split](https://developers.vtex.com/docs/guides/split-payouts-on-payment-provider-protocol) no pueden realizarse directamente. En estos casos, el desarrollador debe ponerse en contacto con el equipo de VTEX para solicitar las modificaciones necesarias. Este proceso está sujeto a un SLA definido por el equipo de Payments de VTEX, y puede durar hasta 30 días.

### Infraestructura VTEX IO

#### Beneficios:

- **[Payment Provider Framework (PPF)](https://developers.vtex.com/docs/guides/payments-integration-payment-provider-framework):** guía completa para construir conectores utilizando VTEX IO.

- **Uso más allá de medios de pago:** VTEX IO puede usarse en otros tipos de integración además de medios de pago y permite implementar personalizaciones adicionales en el conector cuando sea necesario.

- **Diversas opciones de personalización:** posibilita la creación de componentes de frontend para [Store Framework](https://developers.vtex.com/docs/guides/store-framework), incluyendo banners en la página de inicio de la tienda, páginas de categorías y upsell, entre otros.

- **Desarrollo integrado al ecosistema VTEX:** permite crear aplicaciones que interactúan con todas las APIs y eventos de la plataforma, como la captación de datos de CRM, datos del carrito y del checkout y datos logísticos.

- **Acceso a eventos en tiempo real:** las aplicaciones de VTEX IO pueden [recibir y gestionar eventos](https://developers.vtex.com/docs/guides/services-2-handling-and-receiving-events) disparados por acciones realizadas en la plataforma.

- **Integración simplificada con base de datos como servicio:** se conecta fácilmente a bases de datos como VBase y [Master Data](/es/docs/tutorials/master-data-es) para gestionar datos de manera eficiente en tu aplicación.

- **Tratamiento de datos de tarjeta mediante Secure Proxy:** los conectores creados en VTEX IO usan obligatoriamente [Secure Proxy](https://developers.vtex.com/docs/guides/payments-integration-secure-proxy) para tratar los datos de tarjeta de modo que el conector no accede directamente a los datos sensibles. Al usar Secure Proxy, estos conectores no requieren que el partner cuente con certificación [PCI-DSS](https://developers.vtex.com/docs/guides/payments-integration-pci-dss-compliance).

- **Infraestructura que no requiere mantenimiento:** al desarrollar el conector en VTEX IO, toda la gestión de la infraestructura es automática, lo que permite que el desarrollador se enfoque únicamente en el funcionamiento de la integración, sin preocuparse por aspectos técnicos del sistema.

- **Actualización automatizada mediante versiones de la aplicación:** las actualizaciones del conector se realizan de forma automática, sin necesidad de intervención del equipo de VTEX.

#### Recursos operativos:

- **Estructura sin servidor (serverless):** VTEX IO opera directamente en el entorno VTEX, eliminando la necesidad de infraestructura externa.

- **GraphQL + REST APIs:** ofrece soporte a diversas formas de comunicación, proporcionando flexibilidad en la integración.

#### Puntos a considerar

- **No hay acceso directo del conector a los datos de tarjeta**: como el entorno de VTEX IO no tiene la certificación [PCI-DSS](https://developers.vtex.com/docs/guides/payments-integration-pci-dss-compliance), los conectores desarrollados en esta plataforma no acceden directamente a los datos de tarjeta y deben usar [Secure Proxy](https://developers.vtex.com/docs/guides/payments-integration-secure-proxy) para procesarlos. Si el modelo de negocio necesita procesar los datos de la tarjeta antes de enviarlos al adquirente, VTEX IO puede no ser la mejor opción.

- **Limitaciones en los lenguajes y frameworks admitidos**: VTEX IO solo es compatible con algunos lenguajes y frameworks específicos, como React, Node y .NET. Los desarrolladores que no estén familiarizados con estas tecnologías tendrán que adaptarse al entorno, lo que puede requerir más tiempo de aprendizaje y ajustes en el flujo de trabajo.

- **Se requiere conocimiento de VTEX IO**: [VTEX IO](https://developers.vtex.com/docs/guides/vtex-io-documentation-what-is-vtex-io) tiene características específicas y los desarrolladores sin experiencia previa en la plataforma necesitan un tiempo de adaptación para aprenderlas.

En ambas opciones, el conector implementa el [PPP](https://developers.vtex.com/docs/api-reference/payment-provider-protocol). La diferencia está en el hosting y el nivel de personalización: en la infraestructura propia, el partner mantiene el entorno y puede recibir datos de tarjeta directamente, mientras que en VTEX IO la infraestructura la gestiona la plataforma y hay más recursos para personalizaciones avanzadas. La elección depende de las necesidades de cada integración y del nivel de personalización deseado.

A la hora de definir la infraestructura, considera los conocimientos técnicos del equipo como un factor estratégico. Trabajar con tecnologías conocidas reduce los riesgos, acelera la entrega y aumenta la eficiencia operativa.

## Buenas prácticas en el desarrollo de conectores: confiabilidad y valor agregado

A continuación se presentan buenas prácticas para el desarrollo de conectores: una característica técnica y recursos de negocio que contribuyen a la eficacia y la calidad de la integración. Estas prácticas reflejan la experiencia de VTEX a lo largo de años de colaboración con adquirentes, agencias y proveedores de antifraude.

### Diferencial técnico: idempotencia

La [idempotencia](https://es.wikipedia.org/wiki/Idempotencia) en el conector garantiza que múltiples solicitudes con los mismos parámetros produzcan siempre el mismo resultado, sin importar cuántas veces se envíen. Este comportamiento es esencial en flujos críticos, como las transacciones. Además, VTEX realiza intentos automáticos de llamadas idénticas (retry), lo que puede generar múltiples solicitudes con el mismo `paymentId` para actualizar el status de la transacción.

En conectores que poseen idempotencia se observan las siguientes características operativas:

- Se evitan pagos duplicados en caso de reenvío automático. Este comportamiento asegura el procesamiento único de una transacción.

- En casos de fallos en la red (comunicación), se garantiza la confiabilidad de la integración.

- Cuando un retailer o adquirente reporta un problema transaccional, la idempotencia garantiza que los logs y las respuestas sean consistentes y previsibles.

- Se reduce el número de llamadas innecesarias al proveedor. Si el pago ya se ha procesado, el conector puede simplemente devolver la respuesta previamente registrada, evitando la necesidad de una nueva solicitud al adquirente.

#### Implementación de la idempotencia

Para implementar la idempotencia es necesario adoptar las siguientes especificaciones durante el desarrollo del conector:

1. Garantizar un identificador único para cada transacción (`paymentId`).
2. Almacenar y reutilizar la respuesta (éxito, fallo, pendiente) de la solicitud en caso de reenvío.
3. Definir un tiempo de vencimiento para los registros idempotentes.
4. Asegurar que la idempotencia se mantenga también para cancelaciones y reembolsos.
5. Cuando se utiliza la infraestructura VTEX IO:
   - Se recomienda utilizar VBase para almacenar la respuesta basada en el `paymentId` enviado por el gateway de pago, a través de la ruta [Create Payment](https://developers.vtex.com/docs/api-reference/payment-provider-protocol#post-/payments).
   - Al recibir una nueva llamada verifica en VBase si ya se registró una solicitud similar y, de ser así, devuelve la respuesta registrada. Consulta este [ejemplo de implementación](https://github.com/vtex-apps/payment-provider-example/blob/main/node/connector.ts#L53).

### Recursos estratégicos para el negocio

Además de la confiabilidad técnica, algunas características funcionales pueden aumentar significativamente el impacto comercial del conector. A continuación destacamos las funcionalidades que contribuyen directamente al éxito de la operación, promoviendo una mayor seguridad, eficiencia y conversión.

#### Soporte para carteras digitales (Apple Pay, NuPay, Google Pay, PayPal)

El creciente uso de carteras digitales (wallets) aporta mayor seguridad y comodidad a los consumidores. Los conectores compatibles con estas carteras ofrecen los siguientes beneficios:

- **Checkout más directo:** reduce la fricción en el pago, ya que los datos de la tarjeta están almacenados en la cartera digital.
- **Mayor seguridad:** el uso de autenticación biométrica y tokenización minimiza fraudes y contracargos.
- **Mayor conversión:** menos pasos en el checkout resultan en un menor abandono de carrito.

#### Soporte para Google Pay con tokenización DPAN (Device Primary Account Number)

El soporte para Google Pay con [tokenización DPAN](/es/docs/tutorials/dpan-y-fpan-comprender-la-seguridad-en-el-flujo-de-pagos-tokenizados-online) ofrece ventajas importantes para la seguridad y la experiencia del usuario:

- **Mayor seguridad:** los datos reales de la tarjeta no se comparten, lo que reduce el riesgo de fraude.
- **Menos fricción en las compras recurrentes:** los DPANs se pueden reutilizar (pagos recurrentes) sin necesidad de volver a solicitar los datos del usuario.
- **Compatibilidad con múltiples dispositivos:** permite utilizar la misma tarjeta en diferentes dispositivos sin necesidad de una nueva autenticación.
- **Reducción de costos por fraudes:** la tokenización evita el uso indebido de credenciales, lo que puede disminuir el número de contracargos.

> ⚠️ El soporte para Google Pay con DPAN solo está disponible a través de la [cartera Google Pay nativa de VTEX](/es/docs/tracks/google-pay).

#### Soporte de pago vía PDV (VTEX Sales App)

Los conectores compatibles con pagos vía [Punto de venta (PDV)](https://pt.wikipedia.org/wiki/Caixa_(varejo)) en [VTEX Sales App](/es/docs/tracks/vtex-sales-app-primeros-pasos-y-configuracion) hacen posibles transacciones [omnichannel](/es/docs/tracks/comercio-unificado-101) entre el entorno físico y digital. Los beneficios incluyen:

- **Integración entre canales:** el cliente puede iniciar una compra online y finalizarla en la tienda física utilizando el mismo medio de pago.
- **Reducción de errores operativos:** dado que el pago está integrado con VTEX Sales App, no es necesario registrar manualmente las transacciones en el [ERP](https://es.wikipedia.org/wiki/Sistema_de_planificaci%C3%B3n_de_recursos_empresariales).
- **Experiencia de compra optimizada:** los vendedores pueden procesar los pagos rápidamente en un único sistema.
- **Soporte para diferentes opciones de pago:** el PDV puede aceptar tarjetas de crédito, débito, Pix (Brasil) vía código QR y carteras digitales.

#### Soporte para split de cobros

Los conectores con funcionalidad de [split de cobros](/es/docs/tutorials/split-de-pagos#split-de-cobros) permiten dividir automáticamente el valor de una transacción entre diferentes destinatarios en el momento de la autorización o de la captura, dependiendo de la configuración del proveedor. Esta funcionalidad es esencial para marketplaces y operaciones omnichannel.

- **Distribución automatizada de pagos**: el valor de la transacción se divide automáticamente, garantizando eficiencia y menor riesgo operativo.
- **Reducción de costos y complejidad**: elimina transferencias manuales, reduce costos administrativos y acelera la conciliación financiera.
- **Flexibilidad para diferentes modelos de negocio**: facilita operaciones con modelos como marketplace, envío desde la tienda y dropshipping.

## Más información

- [VTEX Payment Provider Protocol - Help Center](/es/docs/tutorials/payment-provider-protocol)
- [Secure Proxy - Dev. Portal](https://developers.vtex.com/docs/guides/payments-integration-secure-proxy#custom-supported-operators)
- [VTEX Master Data - Help Center](/es/docs/tutorials/master-data-es)
- [Implementing a Payment Provider - Dev. Portal](https://developers.vtex.com/docs/guides/payments-integration-implementing-a-payment-provider)
- [Payment Provider Framework - Dev. Portal](https://developers.vtex.com/docs/guides/payments-integration-payment-provider-framework)
- [Split Payouts on Payment Provider Protocol - Dev. Portal](https://developers.vtex.com/docs/guides/split-payouts-on-payment-provider-protocol)
- [PCI-DSS - Dev. Portal](https://developers.vtex.com/docs/guides/payments-integration-pci-dss-compliance)
- [Payment apps - Dev. Portal](https://developers.vtex.com/docs/guides/payments-integration-payment-app)
- [What is VTEX IO - Dev. Portal](https://developers.vtex.com/docs/guides/vtex-io-documentation-what-is-vtex-io)
- [Ejemplo de integración: payment-provider-example - GitHub](https://github.com/vtex-apps/payment-provider-example)
- [Developing services on VTEX IO - Learning Center](https://learn.vtex.com/docs/course-service-course-lang-en)
