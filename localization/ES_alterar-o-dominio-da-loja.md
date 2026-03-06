---
title: 'Cambiar el dominio de la tienda'
id: frequentlyAskedQuestions_626
status: PUBLISHED
createdAt: 2019-01-24T20:45:57.032Z
updatedAt: 2025-01-21T21:49:12.366Z
publishedAt: 2025-01-21T21:49:12.366Z
firstPublishedAt: 2019-01-24T22:02:37.712Z
contentType: tutorial
productTeam: Identity
author: authors_84
slugEN: change-the-store-domain
legacySlug: que-debo-hacer-para-cambiar-el-dominio-de-mi-tienda
locale: es
subcategoryId: yMp6sKDiJEi66CGAIQ4ma
---

Cambiar el [dominio](/es/docs/tutorials/configurar-o-dominio-da-loja) de una tienda después del go live requiere una atención cuidadosa para minimizar problemas de SEO, evitar la indisponibilidad y garantizar una transición transparente, sin afectar la experiencia de los clientes.

> ⚠️ No remuevas ni modifiques el dominio existente hasta que la migración esté completamente finalizada y validada. Esto garantiza que la tienda permanezca accesible durante la transición, evitando la indisponibilidad.

## Prerrequisitos

Antes de empezar, debes:

- Tener el nuevo dominio ya registrado y accesible.
- Tener acceso al proveedor de DNS del dominio.
- Mantener el dominio antiguo activo durante todo el proceso de migración.

## Información general

La migración del dominio se realiza en los siguientes pasos:

1. [Registrar el nuevo dominio](#1-registrar-el-nuevo-dominio) sin eliminar el anterior, manteniendo activo el dominio antiguo en License Manager.
2. [Solicitar migración interna a VTEX](#2-solicitar-migracion-interna-a-vtex), asegurando que todos los registros DNS y configuraciones internas se propaguen correctamente.
3. [Actualizar URLs y validar el nuevo dominio](#3-actualizar-urls-y-validar-el-nuevo-dominio) solo después de confirmar que todos los cambios de DNS se han aplicado.
4. [Remover el dominio antiguo](#4-remover-el-dominio-antiguo) cuando el nuevo dominio esté completamente operativo y validado.
5. [Configurar redirección](#5-configurar-redireccion) del dominio antiguo al nuevo.

## 1) Registrar el nuevo dominio

Agrega al nuevo dominio en License Manager sin remover el dominio anterior:

1. Crea el nuevo host en el Admin VTEX siguiendo las instrucciones descritas en [Registrar un nuevo host](/es/docs/tutorials/configurar-o-dominio-da-loja#cadastrar-um-novo-host). En este punto, el DNS del nuevo dominio aún no debe apuntar a VTEX.

2. En el Admin VTEX, verifica la configuración de Checkout en **Configuración de la tienda > Storefront > Checkout**, según se describe en [Configurar plantilla en SmartCheckout](/pt/faq/configurar-template-no-smartcheckout/).

   Este paso es esencial para que Checkout siga funcionando después del cambio.

   Debes comprobar que los sitios web configurados estén asociados a la cuenta registrada en **Configuración de la cuenta > Cuentas**. Consulta [Gestión de la cuenta](/es/docs/tutorials/gerenciamento-da-conta) para más detalles.

> ⚠️ No elimines el dominio antiguo ni modifiques el DNS todavía.

## 2. Solicitar migración interna a VTEX

Si tu tienda utiliza [VTEX IO - Store Framework](https://developers.vtex.com/docs/guides/storefront-implementation) o [FastStore](https://developers.vtex.com/docs/guides/faststore/docs-what-is-faststore), ponte en contacto con el [Soporte VTEX](https://supporticket.vtex.com/support) y solicita la migración interna de dominio, proporcionando el nuevo dominio deseado.

VTEX realizará la migración interna garantizando que todos los registros DNS y configuraciones internas se propaguen correctamente.

Más información sobre [apuntamiento interno](/es/tracks/realizando-o-go-live-da-sua-loja--4Ns5FxIiksmjsdX2yOTduM/7sM5IMx02zaHvAFTm0OxiJ#solicitar-apontamento-io).

Una vez abierto el ticket, el equipo de soporte tiene hasta tres días laborables para analizar la configuración y realizar el apuntamiento.

Después de la confirmación del apuntamiento interno, realiza el apuntamiento del DNS a la CDN de VTEX siguiendo las instrucciones de la guía [Go live](/pt/docs/tracks/go-live).

## 3. Actualizar URLs y validar el nuevo dominio

Solo después de confirmar que todos los cambios de DNS se hayan aplicado correctamente, realiza las siguientes validaciones:

1. Confirma que el DNS del nuevo dominio está completamente propagado.
2. Valida la navegación completa de la tienda en el nuevo dominio.
3. Actualiza las URLs en el código base (cuando corresponda).
4. Verifica integraciones externas (gateways, antifraude, webhooks, APIs, etc.).

> ⚠️ Continúa con el siguiente paso después de confirmar que el nuevo dominio es totalmente funcional y estable.

## 4. Eliminar el dominio antiguo

Después de validar que el nuevo dominio es completamente funcional, remueve el dominio antiguo:

1. En la barra superior del Admin VTEX, haz clic en el avatar de tu perfil, marcado con la inicial de tu email.
2. Haz clic en el botón **Configuración de la cuenta**.
3. Haz clic en **Cuenta**.
4. Haz clic en la pestaña **Tiendas**.
5. En la fila de la tienda donde deseas eliminar el host, haz clic en el menú de acciones ⁝ y luego en `Editar`.
6. En la fila del host antiguo, haz clic en el menú de tres puntos ⁝ y luego en `Eliminar`.

Pueden mantenerse ambos dominios (el antiguo y el nuevo) funcionando simultáneamente durante el periodo de transición, pero es importante tomar precauciones para evitar problemas como:

- Confusión del cliente sobre cuál es el dominio oficial, lo que puede afectar negativamente a la confianza y las ventas.
- Impacto negativo en SEO, ya que los buscadores pueden interpretar que los dominios compiten entre sí.

## 5. Configurar redirección

Sigue las instrucciones a continuación para garantizar que todos los accesos al antiguo dominio se redirijan al nuevo:

- Configura una redirección HTTP 302, que indicará a los navegadores que deben redirigir los requests al nuevo dominio.
- Recomendamos el uso de herramientas como [redirhub.com](https://direcionar.com.br) y [redirect.center](https://redirect.center) para crear la redirección.
- En el panel DNS, evita utilizar CNAME para la redirección, ya que esta configuración no garantiza una redirección correcta.

> ⚠️ Es habitual que las primeras visitas al nuevo dominio sean más lentas de lo esperado, debido al proceso inicial de creación de la caché. Este impacto es temporal y se normaliza con el tiempo.
