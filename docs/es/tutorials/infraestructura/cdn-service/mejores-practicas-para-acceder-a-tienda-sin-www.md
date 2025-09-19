---
title: 'Mejores prácticas para acceder a tienda sin www'
id: tutorials_4278
status: PUBLISHED
createdAt: 2017-04-27T21:51:11.002Z
updatedAt: 2024-01-23T17:50:54.783Z
publishedAt: 2024-01-23T17:50:54.783Z
firstPublishedAt: 2017-04-27T23:11:15.960Z
contentType: tutorial
productTeam: Reliability
author: 1malnhMX0vPThsaJaZMYm2
slugEN: best-practices-for-accessing-the-store-without-www
legacySlug: configurando-acceso-sin-www
locale: es
subcategoryId: 2Za4fjGfxYOo6oqykukgyy
---

El dominio principal de la tienda debe contar con un subdominio, como `www` u otro. Para acceder a la tienda mediante un dominio puro (por ejemplo, `mitienda.com`, sin subdominio), se requiere realizar una redirección. En esta guía, explicamos las razones detrás de esta necesidad y proporcionamos instrucciones detalladas sobre cómo llevar a cabo la redirección. Consulta las secciones a continuación:

* [Antes de empezar](#antes-de-empezar)
* [Dificultades de los dominios sin subdominios](#dificultades-de-los-dominios-sin-subdominios)
* [Solución recomendada: redirección](#solucion-recomendada-redireccion)
* [Solución alternativa: CNAME Flattening](#solucion-alternativa-cname-flattening)

## Antes de empezar

Recomendamos leer las siguientes guías para entender cómo funcionan los dominios y la configuración de DNS en VTEX:

* [Configurar dominio de la tienda](/es/tutorial/configurar-dominio-de-la-tienda--tutorials_2450)
* [Cómo funciona la configuración de DNS en VTEX](/es/tutorial/como-funciona-la-configuracion-de-dns-en-vtex--2P5k3oMYOj7TgSK4Mrxmgy)

## Limitaciones en la configuración de DNS para dominios puros

Esta sección explora la complejidad y las dificultades relacionadas con la configuración del sistema de DNS para dominios puros. La gestión de dominios sin subdominios requiere una atención especial, sobre todo para preservar la funcionalidad y la integridad del sitio web, sin comprometer elementos cruciales como emails, seguridad y certificados.

### Redirecciones de tipo A para dominios puros 

La configuración de DNS en VTEX debe hacerse para el dominio principal de la tienda, y no se recomienda el uso de dominios puros. Un dominio puro, sin subdominio, también conocido como naked domain (por ejemplo, `mitienda.com`, sin `www`), implica la creación de una configuración de tipo A (Address Record) en el DNS. El registro A se utiliza para apuntar directamente el dominio a una dirección IP específica.

Sin embargo, no se recomienda este tipo de configuración. No es posible utilizar configuraciones A que apunten directamente a una dirección IP, por las siguientes razones:

* **Riesgo de sitio web inaccesible:** Si un dominio puro está configurado con un registro A que apunta a una dirección IP específica y esa dirección IP cambia, el sitio puede volverse inaccesible hasta que se actualice la nueva IP en el registro A.
* **Rendimiento limitado:** si el dominio puro apunta directamente a una única dirección IP, todos los visitantes que accedan al sitio web, sin importar su ubicación, se ven obligados a conectarse a ese servidor. Esto podría provocar una degradación del rendimiento, ya que los visitantes ubicados a mayor distancia tendrían una experiencia más lenta.

### Redirecciones CNAME para dominios puros

Deben evitarse las redirecciones CNAME para dominios puros. Un registro CNAME se comporta como una redirección en el contexto de DNS: cuando alguien accede a `www.mitienda.com`, el DNS redirige automáticamente a `www.mitienda.com.cdn.vtex.com`. Sin embargo, según las reglas del protocolo DNS, un registro CNAME no puede coexistir con otras configuraciones de DNS en el mismo dominio. Esto significa que si utilizamos un registro CNAME para redirigir un sitio web, todas las configuraciones de ese sitio deben seguir esa redirección. No es posible redirigir solamente una parte de las configuraciones realizadas. 

Este comportamiento entra en conflicto directo con los dominios puros, ya que los retailers a menudo desean configurar otras funcionalidades, como registros MX para emails, registros TXT para seguridad, registros CAA para certificados y registros NS y SOA para demostrar que controlan el dominio puro.

## Dominios puros

Dadas las restricciones en la configuración de DNS para dominios puros, esta sección aborda las mejores prácticas para garantizar el acceso a la tienda sin requerir el prefijo www.

### Solución recomendada: redirección

Al [configurar el dominio principal](/es/tutorial/configurando-dominios-no-gerenciamento-da-conta--tutorials_2450) de la tienda, VTEX recomienda utilizar siempre `www` u otro subdominio, para integrar la necesidad de utilizar CNAME junto a otras configuraciones. En este escenario, se recomienda utilizar redirecciones para acceder a la dirección web sin `www` u otros subdominios. Para saber cómo configurar redirecciones, consulta [Redirección de otras direcciones](/es/tutorial/redirecionamento-de-outros-enderecos--3Xi2AeLUx2QpJQu8DTX8KQ).

Si bien algunos proveedores de DNS soportan registros CNAME en el dominio puro ([CNAME Flattening](#solucion-alternativa-cname-flattening)), es posible que no todos ofrezcan esta opción, por lo que recomendamos el uso obligatorio de un subdominio para garantizar la coexistencia de todas las funcionalidades necesarias.

### Solución alternativa: CNAME Flattening

VTEX recomienda, como opción predeterminada, utilizar un subdominio `www` para evitar problemas relacionados con la dinamicidad de las IP en la CDN. Sin embargo, algunas empresas proveedoras de hosting y servicios de DNS ofrecen una solución alternativa para resolver este problema, denominada [CNAME Flattening](https://developers.cloudflare.com/dns/cname-flattening/).

CNAME Flattening es una técnica que permite asociar un dominio puro directamente con un registro CNAME, en lugar de con un registro A. De esta manera, es posible configurar un dominio puro (sin subdominio) para que funcione con una CDN, incluso cuando haya cambios en las direcciones IP. Sin embargo, esta funcionalidad no es compatible con todos los proveedores de DNS.

Algunos proveedores de DNS, como [Cloudflare](https://www.cloudflare.com/pt-br/), ofrecen soporte para CNAME Flattening. En este caso, se puede configurar el dominio puro con un CNAME que apunte al servicio de CDN de VTEX. Esto permite que el dominio puro funcione de manera parecida al subdominio `www` y además se beneficie de la CDN.

Por lo tanto, si deseas utilizar un dominio puro con una CDN en una configuración específica, la primera etapa es comprobar si tu proveedor de DNS soporta CNAME Flattening. En caso afirmativo, puedes configurar el dominio puro de esa manera.

> ⚠️ Cuando se utiliza la solución DNS Flattening, se comportará de la misma forma que un [proxy inverso](/es/tutorial/por-que-nao-recomendamos-inserir-um-proxy-reverso-em-frente-aos-servicos-da--4PFWsfRAKviNVPf1bYdiir). En este caso, se debe configurar una entrada de verificación TXT.
