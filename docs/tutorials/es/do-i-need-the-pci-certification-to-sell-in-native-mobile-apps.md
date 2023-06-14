---
title: '¿Es necesario tener certificado PCI para vender en apps móviles nativas?'
id: 7c36NBxoHugm0UoyMoCYWa
status: PUBLISHED
createdAt: 2019-01-24T20:45:33.947Z
updatedAt: 2019-12-31T15:22:27.674Z
publishedAt: 2019-12-31T15:22:27.674Z
firstPublishedAt: 2019-01-24T22:07:01.366Z
contentType: tutorial
productTeam: Financial
author: 2LFh4Ox3XiWIqUMWw4MOGw
slug: es-necesario-tener-certificado-pci-para-vender-en-apps-moviles-nativas
legacySlug: es-necesario-tener-certificado-pci-para-vender-en-apps-moviles-nativas
subcategory: 2Xay1NOZKE2CSqKMwckOm8
---

Para desarrollar una __app móvil nativa__ de su tienda (sea en Android o iOS) y vender a través de ella, __es importante tener el certificado PCI__ en una de sus clasificaciones. Esto ocurre porque las aplicaciones nativas se ejecutan en un ambiente externo a VTEX y es necesario que se garantice la seguridad de la información en todos los niveles del proceso de compra.

En una compra realizada a través de una aplicación nativa, los datos del cliente (personales, de pago, de entrega, etc.) se envían a VTEX por API. Sólo entonces se crea el pedido y se procesa el pago. VTEX tiene certificación PCI (lea más detalles a continuación) y garantiza la seguridad de los datos, pero la aplicación también debe cumplir con el protocolo.


## ¿Cómo obtener la certificación PCI?

Para conseguir un certificado PCI para su tienda, es necesario consultar una empresa PCI QSA (PCI Qualified Security Assessors). Estas empresas tienen calificación para evaluar sistemas y procesos, caso por caso. Un buen ejemplo es [Cipher](https://cipher.com/es/avaliacao-consultoria-pci-qsa-asv/).

Usted puede sacar todas sus dudas sobre el proceso de certificación en el sitio oficial del __[PCI Security Standards Council](https://cis.pcisecuritystandards.org/index.php)__.


## Alternativas

No recomendamos que usted invierta en una certificación PCI. Usted debe hacer el uso de la certificación de VTEX para no tener costo. Pero hay otras oportunidades para una aplicación de su tienda, es posible trabajar con las alternativas.

### Aplicación móvil híbrida
En los casos de __apps que se ejecutan en Webview__ en los sistemas Android e iOS, entendemos que __no hay necesidad de un certificado propio__. Esto sucede porque tanto el front-end como el back-end se ejecutan dentro de VTEX: su cliente ya está navegando e insertando datos en un ambiente seguro y certificado.

### Progressive Web Apps
Con la solución de __PWA__, también __no es necesario tener un certificado PCI propio__. El [PWA](/tutorial/como-transformar-o-site-da-minha-loja-em-um-pwa?locale=es) es una aplicación web que se crea en el dispositivo móvil usando datos de su sitio web en caché. Es decir, todo lo que el usuario final ve es información obtenida y ejecutada en su tienda, que está en un ambiente seguro y certificado.


## Certificación VTEX

VTEX está certificada por el __PCI DSS__ (Payment Card Industry Data Security Standard), lo que garantiza que los datos introducidos en la plataforma están seguros. Nuestra infraestructura, procesos de desarrollo, front-end y back-end pasan por evaluaciones anuales para la renovación del Certificado PCI DSS.

Vea más detalles sobre el certificado PCI de VTEX y cómo añadir el sello PCI al pie de su tienda [aquí](/tutorial/como-adicionar-o-selo-pci-ssc-a-minha-loja?locale=es).
