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
locale: es
legacySlug: como-cambiar-el-dominio-de-la-tienda
subcategoryId: yMp6sKDiJEi66CGAIQ4ma
---

Cambiar el [dominio](/es/tutorial/configurar-dominio-de-la-tienda--tutorials_2450) de una tienda tras el go live exige una atención cuidadosa para minimizar problemas de SEO y garantizar una transición transparente, sin impactar la experiencia del cliente.

Consulta en las secciones a continuación más información sobre el proceso completo para cambiar tu dominio en VTEX:

1. [Prerrequisitos](#prerrequisitos)  
2. [Configurar el nuevo dominio](#configurar-el-nuevo-dominio)  
3. [Eliminar el dominio antiguo](#eliminar-el-dominio-antiguo)  
4. [Redirigir el dominio antiguo](#redirigir-el-dominio-antiguo)

## Prerrequisitos

Antes de empezar, debes:

* Haber registrado el nuevo dominio y que esté accesible.  
* Tener acceso al proveedor de DNS del dominio.

## Configurar el nuevo dominio

Sigue los pasos a continuación para cambiar el dominio:

1. Crea un nuevo host en el Admin VTEX, como se ilustra en [Registrar nuevo host](/es/tutorial/configurar-dominio-de-la-tienda--tutorials_2450#registrar-nuevo-host). En este punto, el DNS del nuevo dominio aún no debe apuntar a VTEX.

2. En el Admin VTEX, verifica la configuración de Checkout en **Configuración de la tienda > Storefront > Checkout**, según se describe en [Configurar template en SmartCheckout](/es/tutorial/configurar-template-en-el-smartcheckout-update--ToTE5XB39t0SwtHgpgwSv). 

   Este paso es imprescindible para que Checkout siga funcionando tras el cambio.  
   Es necesario verificar que los sitios configurados estén asociados a la cuenta registrada en **Configuración de la cuenta > Cuenta**. Para más información, consulta [Gestión de la cuenta](/es/tutorial/gestion-de-la-cuenta--2vhUVOKfCaswqLguT2F9xq).

3. Si tu tienda utiliza [VTEX IO - Store Framework](https://developers.vtex.com/docs/guides/storefront-implementation) o [FastStore](https://developers.vtex.com/docs/guides/faststore/docs-what-is-faststore), ponte en contacto con el [Soporte VTEX](/es/support) y solicita el apuntamiento interno, informando el nuevo dominio. Más información sobre [apuntamiento interno](/es/tracks/como-realizar-el-go-live-de-tu-tienda--4Ns5FxIiksmjsdX2yOTduM/7sM5IMx02zaHvAFTm0OxiJ#solicitar-el-apuntamiento-io).

   Una vez abierto el ticket, el equipo de soporte tiene hasta tres días laborables para analizar la configuración y realizar el apuntamiento. 

4. Realiza el apuntamiento de DNS a la CDN de VTEX siguiendo las instrucciones de la guía [Go live](/es/tracks/como-realizar-el-go-live-de-tu-tienda--4Ns5FxIiksmjsdX2yOTduM/12bQlMbJ68Ot0LIaO6Btkj). 

## Eliminar el dominio antiguo

Tras el periodo de transición, se recomienda desactivar el dominio antiguo para garantizar que todos los clientes utilicen la nueva dirección y evitar confusiones.

Es posible mantener ambos dominios (el antiguo y el nuevo) funcionando simultáneamente durante el periodo de transición, pero es importante tomar precauciones para evitar problemas como:

* Confusión del cliente sobre cuál es el dominio oficial, lo que puede afectar negativamente a la confianza y las ventas.  
* Impacto negativo en el SEO, ya que los motores de búsqueda pueden interpretar que los dominios compiten entre sí.

Después de confirmar el apuntamiento interno y la propagación de DNS del nuevo host, sigue las instrucciones para eliminar los hosts antiguos y conservar únicamente el nuevo:

1. En la barra superior del Admin VTEX, haz clic en el avatar de tu perfil que tiene la inicial de tu email.  
2. Haz clic en **Configuración de la cuenta**.  
3. Haz clic en **Cuenta**.  
4. Haz clic en la pestaña **Tiendas**.  
5. En la fila de la tienda de la que deseas eliminar el host, haz clic en el botón de acciones ⁝ y, a continuación, en `Editar`.  
6. En la fila del host antiguo, haz clic en el botón de acciones ⁝ y después en `Eliminar`.

## Redirigir el dominio antiguo

Sigue las instrucciones a continuación para garantizar que todos los accesos al antiguo dominio se redirijan al nuevo:

* Configura una redirección HTTP 302, que indicará a los navegadores que reenvíen los request al nuevo dominio.  
* Recomendamos el uso de herramientas como [redirhub.com](https://www.redirhub.com/es/free-redirect-service) y [redirect.center](https://redirect.center) para crear la redirección.  
* En el panel DNS, evita utilizar CNAME para la redirección, ya que esta configuración no garantiza una redirección correcta.

<div class="alert alert-warning">
  <p>Es habitual que las primeras visitas al nuevo dominio sean más lentas de lo esperado, debido al proceso inicial de creación de la caché. Este impacto es temporal y se normaliza con el tiempo.</p>
</div>
