---
title: 'VTEX Shield: nuevas capas de protección con certificados SSL personalizados y mTLS'
id: Xy5vaUOgmjsYKzI7h1tPd
status: PUBLISHED
createdAt: 2025-07-22T14:31:35.784Z
updatedAt: 2025-07-28T12:59:52.171Z
publishedAt: 2025-07-28T12:59:52.171Z
contentType: updates
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: 2025-07-22-vtex-shield-new-protection-layers-with-custom-ssl-certificates-and-mtls
locale: es
legacySlug: vtex-shield-nuevas-capas-de-proteccion-con-certificados-ssl-personalizados-y
announcementImageID: 'undefined'
announcementSynopsisES: 'VTEX Shield ahora ofrece certificados SSL personalizados y mTLS, ampliando los recursos de seguridad avanzados.'
---

[VTEX Shield](https://help.vtex.com/es/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh) es un producto add-on que proporciona capas personalizables de seguridad para la tienda que van más allá de los estándares de seguridad garantizados por las [certificaciones y prácticas de seguridad](https://vtex.com/mx-es/security/security-practices/) existentes en la plataforma VTEX.

Hemos ampliado los recursos de seguridad avanzados que VTEX Shield ofrece. Ahora puedes contratar dos nuevas funcionalidades:

* **Certificados SSL personalizados**: permite que las tiendas utilicen certificados propios en lugar del certificado predeterminado (Let's Encrypt).

* **Mutual Transport Layer Security (mTLS)**: exige autenticación mutua entre VTEX y sistemas externos, agregando una capa de protección adicional a las integraciones de API.

Estas nuevas funcionalidades aumentan el control sobre la comunicación entre sistemas y satisface los requisitos de seguridad y compliance de proyectos más complejos.

## ¿Qué cambió?

VTEX Shield ya permitía contratar [Web Application Firewall (WAF)](https://help.vtex.com/es/tutorial/web-application-firewall-waf--6BZYLlU03ws72iqIFF6jdn), [Security Monitor](https://help.vtex.com/es/tutorial/security-monitor--5LOVNLrrtmgSj99pM1NS4x) y [Data Protection Plus](https://help.vtex.com/es/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh#data-protection-plus) como capas de seguridad adicionales. Ahora también puedes optar por los certificados SSL personalizados y el protocolo mTLS.

### Certificados SSL personalizados

La configuración predeterminada de VTEX utiliza [certificados SSL](https://help.vtex.com/es/tutorial/certificado-de-seguranca-ssl--tutorials_1308) de la autoridad de certificación [Let's Encrypt](https://letsencrypt.org/). Sin embargo, algunas tiendas necesitan control directo sobre los certificados digitales para cumplir con requisitos de seguridad o compliance específicos.

Los certificados SSL personalizados permiten que las tiendas que tengan que cumplir con ese tipo de requisitos puedan instalar y gestionar sus propios certificados directamente en el Admin VTEX.

Consulta más información en [Certificados SSL personalizados](https://help.vtex.com/es/tutorial/certificados-ssl-customizados--1hoaDEbU50PDZSe6AYep9q).

### Mutual Transport Layer Security (mTLS)

El protocolo mTLS proporciona mayor protección en las integraciones entre VTEX y sistemas externos como ERP, WMS o tienda headless.

A diferencia del protocolo TLS tradicional, que solo requiere que el servidor compruebe su identidad, el protocolo mTLS garantiza la autenticación bidireccional exigiendo que [tanto el cliente como el servidor presenten certificados válidos](https://help.vtex.com/es/tutorial/mutual-transport-layer-security-mtls--6YR3SoynJMfeEKGlY1Cqlo#arquitetura-cliente-servidor) antes de intercambiar datos. Esta práctica reduce el riesgo de conexiones maliciosas o no autorizadas.

Consulta más información en [Mutual Transport Layer Security (mTLS)](https://help.vtex.com/es/tutorial/mutual-transport-layer-security-mtls--6YR3SoynJMfeEKGlY1Cqlo).

## ¿Por qué realizamos este cambio?

A medida que las integraciones con sistemas externos se vuelven más complejas, aumenta la necesidad de garantizar la autenticidad y de ejercer un control riguroso en las comunicaciones. Algunas tiendas tienen necesidades específicas de compliance, auditoría y seguridad que van más allá del certificado predeterminado y la autenticación unidireccional.

Las nuevas opciones de VTEX Shield proporcionan una capa adicional que permite:

* Gestionar certificados SSL propios para cumplir políticas internas y auditorías.  
* Exigir autenticación bidireccional entre sistemas para evitar accesos no autorizados.  
* Reducir riesgos en integraciones críticas y fortalecer la confianza entre las partes.

Con estas funcionalidades, VTEX Shield cumple con las prácticas más avanzadas del mercado y atiende las crecientes demandas de seguridad de las operaciones digitales.

## ¿Qué se necesita hacer?

Si ya eres cliente de VTEX y deseas activar certificados SSL personalizados, mTLS u otras funcionalidades de VTEX Shield en tu tienda, ponte en contacto con [Soporte comercial](https://help.vtex.com/es/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ) para solicitar la activación y realizar la configuración necesaria. Pueden aplicarse cargos adicionales.

Si aún no eres cliente, pero te interesan estas funcionalidades, llena el [formulario de contacto](https://vtex.com/es-mx/contacto/).  
