---
title: 'Mutual Transport Layer Security (mTLS)'
id: 6YR3SoynJMfeEKGlY1Cqlo
status: PUBLISHED
createdAt: 2025-05-21T23:02:08.320Z
updatedAt: 2025-07-22T14:43:57.796Z
publishedAt: 2025-07-22T14:43:57.796Z
firstPublishedAt: 2025-05-21T23:17:03.123Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: mutual-transport-layer-security-mtls
legacySlug: mutual-transport-layer-security-mtls
locale: es
subcategoryId: jrgbOxKaOW0kdZs7rdgvS
---

> ℹ️  Esta funcionalidad es parte del producto [VTEX Shield](https://help.vtex.com/es/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh). Si ya eres cliente de VTEX y deseas adoptar VTEX Shield en tu empresa, ponte en contacto con nuestro [Soporte Comercial](https://help.vtex.com/support?/cultureInfo=es-mx). Pueden aplicarse cargos adicionales. Si aún no eres cliente VTEX, pero te interesa esta solución, llena el [formulario de contacto](https://vtex.com/br-pt/contato/). 

En las integraciones entre sistemas, especialmente cuando se intercambia información sensible o se gestionan operaciones críticas del negocio, es fundamental garantizar la confiabilidad de ambos extremos de la comunicación. mTLS es una funcionalidad de [VTEX Shield](https://help.vtex.com/es/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh) que agrega un nivel avanzado de seguridad a las integraciones entre sistemas externos y VTEX.

## Conceptos clave

Antes de entender cómo funciona mTLS en la práctica, es importante repasar dos conceptos significativos en las integraciones entre sistemas: la arquitectura cliente-servidor y el uso de certificados digitales.

### Arquitectura cliente-servidor

Toda comunicación entre sistemas basada en APIs sigue, en esencia, una **arquitectura cliente-servidor**. En esta arquitectura, un sistema (cliente) hace un request, y el otro (servidor) responde. En el modelo tradicional (TLS/HTTPS), solo el servidor presenta un certificado digital, y es el cliente quien lo verifica.

### Certificados digitales

Un certificado digital es como un ID electrónico que un sistema usa para comprobar su identidad durante una conexión. Lo emite una Autoridad de Certificación (AC), que actúa como tercero de confianza que valida las identidades digitales.

* El servidor presenta su certificado y el cliente verifica si fue emitido por una AC confiable.  
* En el caso de mTLS, el proceso es bidireccional: además del servidor, el cliente también presenta su certificado, y el servidor comprueba si lo emitió la AC correcta.

Este intercambio mutuo de certificados permite la verificación recíproca de identidad entre ambas partes, elevando considerablemente el nivel de seguridad en la integración.

## Cómo funciona mTLS

En lugar de limitarse a cifrar el tráfico basándose únicamente en la autenticación del servidor (como ocurre con el protocolo TLS estándar), mTLS exige que tanto el cliente como el servidor presenten certificados digitales válidos.

Con mTLS, solo los sistemas confiables pueden comunicarse, reforzando la seguridad de las integraciones y evitando accesos no autorizados. Es decir, toda notificación entre un storefront headless y VTEX o entre un ERP y VTEX, en cualquier dirección, está protegida por autenticación mutua y cifrado, impidiendo que conexiones no autorizadas accedan a datos sensibles o manipulen la información intercambiada.

El diagrama a continuación representa el flujo de autenticación mutua utilizando mTLS, donde cliente y servidor validan sus identidades antes de cualquier intercambio de datos:

![mtls-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/seguridad/vtex-shield/mutual-transport-layer-security-mtls_1.png)

1. El cliente inicia la conexión con el servidor.  
2. El servidor presenta su certificado TLS.  
3. El cliente verifica que el certificado del servidor sea válido.  
4. A continuación, el cliente presenta su propio certificado TLS.  
5. El servidor verifica el certificado del cliente.  
6. Después de la verificación mutua, se concede el acceso.  
7. La comunicación se desarrolla de forma segura, cifrada y basada en la confianza establecida entre ambas partes.

### Flujo mTLS en el contexto de VTEX

Consulta a continuación cómo se aplica este flujo a la comunicación entre los sistemas de VTEX y los del retailer. Dependiendo del caso, VTEX puede actuar como cliente o servidor.

| Dirección del request | Descripción |
| :---- | :---- |
| **Tienda headless o ERP/WMS → VTEX** | Cuando un request se envía desde la tienda hacia VTEX, se enruta a un **proxy mTLS de entrada** alojado en nuestra VPC.<br><br>Este proxy valida el certificado incluido en el request, verificando que haya sido emitido por la AC de VTEX.<br><br>El request solamente se reenvía a los microservicios internos tras una validación satisfactoria. |
| **VTEX → Tienda headless o ERP/WMS** | En caso de que VTEX envíe un request a la tienda, el tráfico pasa por un **proxy mTLS de salida** dentro de nuestra VPC, que inyecta el certificado emitido por la AC del retailer.<br><br>Esto permite que el entorno del retailer verifique la autenticidad del request y acepte solo conexiones legítimas y seguras. |

## Beneficios

Los principales beneficios del uso de mTLS en VTEX son:

* **Autenticación mutua:** el cliente y el servidor verifican la identidad del otro antes de intercambiar cualquier dato, lo que impide accesos no autorizados.

* **Cifrado de extremo a extremo:** todos los datos están cifrados, protegiendo la información sensible de los clientes y los detalles de las transacciones contra intercepciones.

* **Integración fluida:** los retailers pueden integrar fácilmente mTLS con sus APIs de comercio y aplicaciones de terceros, reduciendo la complejidad y el riesgo.

* **Protección flexible:** puedes elegir en qué integraciones activar mTLS (como proveedores de pago o ERPs) lo que te permite ajustar el nivel de seguridad a cada caso específico.

### Protección contra ataques

Al autenticar ambas partes de la conexión, mTLS ayuda a proteger contra los siguientes tipos de ataques:

* **Man-in-the-Middle (MitM):** también conocido como “on-path”, es un ataque en el que agentes maliciosos se sitúan entre el cliente y el servidor para interceptar o alterar las comunicaciones. Con mTLS habilitado, los agentes maliciosos no pueden autenticarse como cliente o servidor, lo que hace que este tipo de ataque sea prácticamente imposible.

* **Llamadas maliciosas a la API:** mTLS garantiza que las llamadas a la API las realicen únicamente usuarios legítimos y autenticados. Esto evita que atacantes envíen requests maliciosos destinados a explotar vulnerabilidades o manipular el funcionamiento de la API.

* **Ataques de spoofing:** los atacantes pueden intentar “suplantar” un servidor web para engañar a un usuario, o hacerse pasar por un usuario para engañar al servidor. Debido a que mTLS exige certificados TLS válidos en ambos extremos, estos ataques se vuelven significativamente más difíciles.

* **Credential stuffing:** los ciberdelincuentes utilizan combinaciones de credenciales filtradas para obtener acceso no autorizado. Este tipo de ataque es ineficaz contra organizaciones que usan mTLS, ya que los atacantes no pueden autenticarse sin un certificado TLS válido.

## Requisitos

Como mTLS es una protección para integraciones entre sistemas, el extremo opuesto a VTEX necesita ser otro sistema, por ejemplo: un middleware que procese el frontend de una integración headless, o que procese llamadas a un ERP o WMS.

Para utilizar mTLS, la tienda debe cumplir con al menos uno de los siguientes requisitos:

* Operar en un modelo headless, donde todas las interacciones con VTEX se realicen mediante integraciones basadas en API.

  > ⚠️  El uso de mTLS no se aplica a implementaciones con storefront nativo, como [Store Framework](https://help.vtex.com/es/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/4yB9wSl79cArd68aRBnBZ2) y [Portal CMS Legado](https://help.vtex.com/es/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj). 

* Tener una o más integraciones vía API con servicios externos (ERP, WMS, sellers externos, etc.).

### Requisitos adicionales para integraciones que reciben respuestas de VTEX

En cualquier escenario en el que VTEX deba enviar requests al entorno del retailer, como en integraciones con sellers externos o flujos de inicio de sesión, se deben cumplir los siguientes requisitos:

* El retailer debe tener su propia AC. Esta AC es responsable de emitir el certificado que VTEX usará, lo que permite al retailer validar la autenticidad de los requests provenientes de VTEX.  
* El servidor del retailer debe configurarse para solicitar o exigir el certificado del cliente durante el handshake TLS, ajustando la configuración SSL/TLS y habilitando la autenticación mutua, lo que garantiza que ambos extremos de la conexión validen sus identidades antes de intercambiar cualquier dato.

## Modalidades de uso

mTLS puede implementarse en todos los sistemas o solo en integraciones específicas, ofreciendo flexibilidad según las necesidades de seguridad de la tienda. Consulta a continuación las modalidades disponibles:

### mTLS en todos los sistemas

* Proporciona protección integral de mTLS para toda la comunicación entrante y saliente entre VTEX y los servidores destino del retailer.  
* Garantiza que todos los intercambios de datos estén protegidos por autenticación mutua, garantizando la seguridad de cada interacción de API en todo el ecosistema.

### mTLS en integraciones específicas

* Proporciona protección mTLS únicamente en integraciones específicas, en lugar de abarcar todos los extremos.  
* Protege las conexiones seleccionadas con servicios externos, como sistemas ERP y WMS/TMS, sellers externos y otros sistemas de terceros.

## Más información

* [VTEX Shield](https://help.vtex.com/es/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh)
* [mTLS API](https://developers.vtex.com/docs/api-reference/mtls-api#overview)
* [Implementing Mutual Transport Layer Security (mTLS)](https://developers.vtex.com/docs/guides/implementing-mtls)
* [Revoking SSL private certificates when using Mutual Transport Layer Security (mTLS)](https://developers.vtex.com/docs/guides/revoking-ssl-private-certificates-when-using-mtls)
