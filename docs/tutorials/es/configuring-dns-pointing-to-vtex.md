---
title: 'Configurar el apuntamiento del DNS para VTEX'
id: tutorials_4280
status: DRAFT
createdAt: 2017-04-27T21:51:26.318Z
updatedAt: 2022-12-12T12:21:42.161Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:11:15.230Z
contentType: tutorial
productTeam: Reliability
author: authors_4
slug: configurando-el-apuntamiento-del-dns-para-vtex
legacySlug: processo-de-ssl-y-golive
subcategory: 2Za4fjGfxYOo6oqykukgyy
---

La siguiente información es crucial durante el proceso de apuntar el dominio de la tienda a VTEX. Tal proceso ocurre cuando la tienda realiza su Go Live, cuando la tienda cambia su dirección o cuando se agrega una dirección adicional. 

Es tambien en esta etapa que es generado el certificado SSL de su tienda, el cual es esencial para tener páginas en HTTPS. 

Acá estan los pasos: 

1. [Antes de comenzar](#antes-de-comenzar)
2. [Configurar registros CAA](#configurar-registros-caa)
4. [Apuntar el DNS](#apuntamiento-de-dns)
4. [Generar el certificado SSL](#generar-el-certificado-ssl)

## Antes de comenzar

Antes de apuntar un dominio a VTEX, se debe garantizar el cumplimiento de los requisitos mencionados a continuación.

<div class="alert alert-warning">
Atención: si estás migrando tu tienda de <strong>Loja Integrada</strong> a VTEX, ponte en contacto con nuestro equipo de soporte antes de direccionar el DNS. Hay que liberar el dominio de Loja Integrada para que pueda ser usado con la tienda VTEX.
</div>

### Registrar el dominio en VTEX

Debes [registrar el dominio en Configuración de la cuenta](https://help.vtex.com/es/tutorial/configurando-dominios-no-license-manager). Eso es lo que conecta la dirección a la tienda.

### Tienda en producción

Asegúrate de que tu tienda [está en producción](https://help.vtex.com/es/tutorial/passando-a-loja-para-producao/). De lo contrario, la plataforma no proporcionará las páginas del sitio.

### Evita los dominios duplicados con los proveedores de CDN

VTEX utiliza dos proveedores de CDN para las tiendas: **Cloudfront** y **Azion**. Es importante que el dominio de tu tienda no esté registrado en estos servicios al momento de realizar el apuntamiento. De lo contrario, se producirá un fallo en el aprovisionamiento de CDN para tu tienda y, en consecuencia, en el go-live.

Por lo tanto, si tienes el dominio de la tienda registrado en la plataforma **Cloudfront** o **Azion**, remueve el registro antes de apuntar el DNS a VTEX.

<div class="alert alert-warning">
Si no puedes remover el registro de dominio de tu tienda de la plataforma <strong>Cloudfront</strong> o <strong>Azion</strong>, ponte en contacto con el <a href="https://help.vtex.com/es/support">equipo de soporte de VTEX</a> y explícales la situación. Así, el equipo VTEX te ayudará a asegurar el buen funcionamiento de la tienda en el go-live.
</div>

## Configurar registros CAA

<div class="alert alert-warning">
La configuración de registros CAA según se describe en esta sección, solo es necesaria si tu servidor de DNS tiene un registro CAA. Si no, pasa al tema siguiente de esta guía.
</div>

Los registros CAA indican qué autoridades de certificación (CA) están autorizadas para generar y renovar los certificados que validan la identidad de tu dominio. La configuración adecuada de los registros es necesaria para poder generar los [certificados SSL](https://help.vtex.com/es/tutorial/certificado-de-seguranca-ssl-a-que-se-refere-e-como-contratar--tutorials_1308) y utilizar la CDN de VTEX.

Debes asegurarte de que los registros CAA contengan la siguiente entrada:

```
domain.com. CAA 0 issue letsencrypt.org
```

Esto significa que la autoridad de certificación **Let's Encrypt** puede emitir certificados para el dominio `domain.com`. No hay conflicto si es necesario autorizar a otra autoridad de certificación. Lo importante es que esté autorizada.

Otra alternativa, aunque no recomendada, sería no incluir registros CAA en tu servidor DNS, lo que indicaría que todas las autoridades de certificación pueden emitir y renovar certificados para tu dominio.

<div class="alert alert-info">
Puede que estos tipos de entrada no estén disponibles en la interfaz de tu gestor de DNS; sin embargo, muchas veces es posible gestionarlos a través de llamadas en el soporte de la herramienta específica.
</div>

Para facilitar el trabajo de crear y verificar tus registros CAA, puedes utilizar [CAA Record Helper de SSLMate](https://sslmate.com/caa/). El programa [DiG](https://www.hostinger.com/tutorials/how-to-use-the-dig-command-in-linux/) también puede ayudar a verificar los registros mediante el comando `dig domain.com CAA`; el status `SERVFAIL` puede indicar que tu servidor DNS no está en cumplimiento.

<div class = "alert alert-info">
Más información:
<p>
<ul>
<li><a href="https://sslmate.com/caa/">CAA Record Helper by SSLMate</a></li>
<li><a href="https://letsencrypt.org/docs/caa/">Let's Encrypt: Certificate Authority Authorization (CAA)</a></li>
<li><a href="https://sslmate.com/caa/about">SSL Mate: About CAA</a></li>
</ul>
</p>
</div>

## Apuntamiento de DNS

Los pasos necesarios para completar el apuntamiento de DNS de tu tienda dependen del CMS utilizado para crear tu storefront.

Si se utilizó el [Portal de CMS heredado](https://help.vtex.com/es/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj), solo debes realizar el paso de [apuntamiento de DNS común](#apuntamiento-de-dns-comun).

Si tu storefront fue creado con [CMS IO](https://help.vtex.com/es/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/4yB9wSl79cArd68aRBnBZ2), debes solicitar el [apuntamiento interno a CMS IO](#apuntamiento-interno-a-cms-io) y, luego, realizar el [apuntamiento de DNS común](#apuntamiento-de-dns-comun).

### Apuntamiento interno a CMS IO

Si tu storefront se creó con [CMS IO](https://help.vtex.com/es/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/4yB9wSl79cArd68aRBnBZ2), solicita el apuntamiento interno de DNS a CMS IO mediante un ticket con el [equipo de soporte de VTEX](https://help.vtex.com/es/support). Este proceso puede tomar hasta tres días laborables.

Después de recibir la confirmación del apuntamiento interno, debes realizar el [apuntamiento de DNS común](#apuntamiento-de-dns-comun) dentro de cinco días. De lo contrario, se eliminará el apuntamiento interno y tendrás que volver a solicitarlo.

<div class = "alert alert-info">
Aprende más sobre el <a href="https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-go-live">Go-live con Store Framework</a> o la <a href="https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-migrating-storefront-from-legacy-to-io">Migración del CMS heredado a Store Framework</a>.
</div>

## Apuntamiento de DNS común

En la zona de DNS de tu dominio, debes crear una entrada de tipo CNAME en el subdominio deseado al siguiente destino:
```
{dominio}.cdn.vtex.com
```

Ten en cuenta que el `{dominio}` indicado anteriormente debe ser el mismo que [registraste en VTEX](#registrar-el-dominio-en-vtex).

<div class="alert alert-warning">
Si utilizas Cloudflare como zona de DNS, puede que tengas que desactivar el proxy de DNS y, por lo tanto, desactivar los servicios de CDN y WAF de Cloudflare. Puedes ver más información en el artículo <a href="https://help.vtex.com/pt/tutorial/disable-cloudflare-proxy--75QqsXAqR7NdkRc1GZPiXb">Cómo desactivar el proxy de Cloudflare</a>.
</div>

## Generar el certificado SSL

Es necesario notificar al sistema que un nuevo dominio se asigno a VTEX. Mientras esto no este hecho, los usuarios no podrán ver la tienda. 

Una vez la notificación es enviada, la tienda estará disponible, pero aun esperando la habilitación del certificado SSL, el cual debiera ocurrir dentro de 10 minutos. 

En caso de una falla en generar el certificado, ya sea por demora en la propagación del dominio u otro tipo de error, verá un mensaje al acceder al sitio informando que el certificado de SSL esta siendo generado.

Esta notificación se realiza aceddiendo a __Gestión de la cuenta__, en la pestaña de __Cuentas__, entrando en su cuenta específica y haciendo clic en __Guardar__ (aún sin realizar modificaciones) al final de la página.

El certificado es generado vía [Let's Encrypt](https://letsencrypt.org/) y es válido por 90 días. De todas formas es automáticamente renovado dentro de los cinco días antes de su expiración, mientras el dominio permanezca correctamente apuntado a VTEX.

---

<div class="alert alert-info">
La propagación del apuntamiento de DNS toma entre 24 y 48 horas en ocurrir completamente, esto significa que la dirección configurada puede no estar disponible justo luego de configurar todo correctamente.
</div>

Las instrucciones de arriba tienen que ver exclusivamente con el apuntamiento del dominio primario a su tienda VTEX. Es importante que si su tienda tiene otros dominios, ellos sean redirigidos a un dominio primario único. 

También consideramos su dominio sin www (o subdominio correspondiente, tal como quienes usan "tienda.dominio.com"). Conozca más al respecto en el articulo [Cómo configurar acceso sin www](https://help.vtex.com/es/tutorial/configurando-acesso-sem-www--tutorials_4278?&utm_source=autocomplete).
