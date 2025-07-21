---
title: 'VTEX Shield'
id: 2CVk6H9eY2CBtHjtDI7BFh
status: PUBLISHED
createdAt: 2024-04-25T00:31:01.895Z
updatedAt: 2025-05-21T23:32:42.108Z
publishedAt: 2025-05-21T23:32:42.108Z
firstPublishedAt: 2024-04-25T01:19:00.025Z
contentType: tutorial
productTeam: Others
author: 1malnhMX0vPThsaJaZMYm2
slugEN: vtex-shield
locale: es
legacySlug: vtex-shield
subcategoryId: jrgbOxKaOW0kdZs7rdgvS
---

<div class="alert alert-info">
  <p>Si ya eres cliente de VTEX y deseas adoptar VTEX Shield para tu negocio, ponte en contacto con <a href="https://help.vtex.com/es/tracks/soporte-en-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ">Soporte Comercial</a>. Pueden aplicarse tarifas adicionales. Si aún no eres cliente pero estás interesado en esta solución, llena el <a href="https://vtex.com/co-es/contacto/">formulario de contacto</a>.</p>
</div>

VTEX Shield ofrece capas de protección adicionales y personalizables para tiendas que priorizan la resiliencia de la plataforma, además de los estándares de seguridad garantizados por las certificaciones y [prácticas de seguridad](https://vtex.com/mx-es/security/security-practices/) existentes en VTEX.

La solución cuenta con recursos de seguridad avanzados que permiten detectar riesgos potenciales y realizar acciones preventivas. Así, puedes proteger tu tienda contra interrupciones inesperadas, garantizando la operatividad y confiabilidad de la misma.

Al contratar VTEX Shield tienes la opción de elegir entre las siguientes funcionalidades:

* [Security Monitor](#security-monitor)
* [Web Application Firewall (WAF)](#web-application-firewall-waf)
* [Data Protection Plus](#data-protection-plus)
* [Certificados SSL personalizados](#certificados-ssl-personalizados)
* [Mutual Transport Layer Security (mTLS)](#mutual-transport-layer-security-mtls)

## Security Monitor

Security Monitor es un dashboard del Admin VTEX que detecta amenazas de seguridad relacionadas con el comportamiento de usuarios administrativos y configuraciones inapropiadas. Los riesgos potenciales incluyen [claves de aplicación](/es/tutorial/claves-de-aplicacion--2iffYzlvvz4BDMr6WGUtet) antiguas o expuestas en la web, usuarios o credenciales con permisos excesivos y usuarios inactivos. La herramienta ofrece una visión general de las amenazas y soluciones, con la opción de notificar al retailer por email de cada hallazgo detectado.

Security Monitor está disponible en el Admin VTEX solo para tiendas con VTEX Shield que opten por este recurso. Para obtener más información, consulta la guía [Security Monitor](/es/tutorial/security-monitor--5LOVNLrrtmgSj99pM1NS4x).

## Web Application Firewall (WAF)

Web Application Firewall (WAF) es una herramienta para proteger aplicaciones web mediante monitoreo y filtrado del tráfico de internet.

Este recurso de seguridad desempeña un papel clave en la protección de servicios online, aplicaciones y sitios web frente a diversos ataques, como la inyección SQL, XSS (cross-site scripting) y otras vulnerabilidades web comunes.

Solo las tiendas con VTEX Shield que opten por este recurso pueden solicitar la activación de WAF. Más información sobre su funcionamiento y los tipos de amenazas que combate en [Web Application Firewall (WAF)](/es/tutorial/web-application-firewall-waf--6BZYLlU03ws72iqIFF6jdn).

## Data Protection Plus

<div class="alert alert-info">
  <p>Esta funcionalidad se encuentra en fase beta cerrada y está disponible solo en algunas regiones. Si tienes alguna duda, ponte en contacto con <a href="https://help.vtex.com/es/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ">nuestro soporte</a>.</p>
</div>

[Data Protection Plus](https://developers.vtex.com/docs/guides/data-protection-plus) es una arquitectura de datos que proporciona una capa adicional de protección para datos personales. En esta arquitectura, todos los datos de información de identificación personal (PII, Personally Identifiable Information) se almacenan en [Profile System](https://developers.vtex.com/docs/guides/profile-system), un servicio desarrollado específicamente para procesar PII siguiendo un [conjunto de reglas y procesos](https://developers.vtex.com/docs/guides/pii-data-architecture-specifications) apropiado para este objetivo.

Otros módulos de la plataforma, como Pedidos y Checkout, solamente almacenan datos anonimizados asociados con un token de Profile System, lo que aumenta la seguridad de esta información.

Consulta el conjunto de guías de la categoría [Data Protection Plus](https://developers.vtex.com/docs/guides/data-protection-plus) en el Developer Portal para obtener más detalles y especificaciones sobre esta arquitectura.

## Certificados SSL personalizados

De forma predeterminada, VTEX utiliza [certificados SSL](/es/tutorial/certificado-de-seguranca-ssl--tutorials_1308) emitidos por [Let’s Encrypt](https://letsencrypt.org/) para garantizar la seguridad y compatibilidad. Sin embargo, algunas tiendas pueden necesitar certificados personalizados para cumplir con requisitos de compliance o seguridad.

Para atender esa necesidad, la página **Certificados SSL** permite instalar y gestionar certificados personalizados. Está disponible en el Admin VTEX para tiendas que utilizan VTEX Shield y elijan este recurso. Para más información, consulta la guía [Certificados SSL personalizados](/es/tutorial/certificados-ssl-customizados--1hoaDEbU50PDZSe6AYep9q).

## Mutual Transport Layer Security (mTLS)

Mutual Transport Layer Security (mTLS) es una solución de seguridad avanzada ofrecida por VTEX Shield, que refuerza la protección de las integraciones entre sistemas externos y VTEX. Esta capa extra de protección es aplicable a escenarios de integración vía APIs, como tiendas headless o conexiones con ERPs y WMS.

A diferencia del TLS tradicional, en el que sólo el servidor tiene que demostrar su identidad, el mTLS requiere autenticación mutua: tanto el cliente como el servidor presentan certificados digitales válidos, lo que garantiza que ambas partes de la comunicación son dignas de confianza antes de intercambiar datos. Más información en [Mutual Transport Layer Security (mTLS)](/es/tutorial/mutual-transport-layer-security-mtls--6YR3SoynJMfeEKGlY1Cqlo).
