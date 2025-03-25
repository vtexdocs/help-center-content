---
title: 'Configuración'
id: 7wFsbWgN4rnZsbjhv8IItX
status: PUBLISHED
createdAt: 2022-12-09T19:31:06.005Z
updatedAt: 2023-05-31T21:45:56.828Z
publishedAt: 2023-05-31T21:45:56.828Z
firstPublishedAt: 2022-12-09T22:07:58.382Z
contentType: trackArticle
productTeam: Reliability
slugEN: settings
locale: es
trackId: 4Ns5FxIiksmjsdX2yOTduM
trackSlugES: go-live
---

En esta etapa, debes ajustar la configuración que no depende de la fecha prevista para el go live. Por lo tanto, se recomienda realizarlas antes de pasar a las siguientes etapas.

## Comprobar el dominio en los CDN

VTEX utiliza dos proveedores de CDN para las tiendas: **Cloudfront** y **Azion**. Es importante que el dominio de tu tienda no esté registrado en estos servicios al momento de realizar el apuntamiento. De lo contrario, se producirá un fallo en el aprovisionamiento de CDN para tu tienda y, en consecuencia, en el go-live.

Por lo tanto, si tienes el dominio de la tienda registrado en la plataforma **Cloudfront** o **Azion**, remueve el registro antes de apuntar el DNS a VTEX.

>⚠️ Si no puedes remover el registro de dominio de tu tienda de la plataforma **Cloudfront** o **Azion**, ponte en contacto con el [equipo de soporte de VTEX](https://help.vtex.com/es/support) y explícales la situación. Así, el equipo VTEX te ayudará a asegurar el buen funcionamiento de la tienda en el go-live.

## Configurar registros CAA

>⚠️ La configuración de registros CAA según se describe en esta sección, solo es necesaria si tu servidor de DNS tiene un registro CAA. Si no, pasa al tema siguiente de esta guía.

Los registros CAA indican qué autoridades de certificación (CA) están autorizadas para generar y renovar los certificados que validan la identidad de tu dominio. La configuración adecuada de los registros es necesaria para poder generar los [certificados SSL](https://help.vtex.com/es/tutorial/certificado-de-seguranca-ssl-a-que-se-refere-e-como-contratar--tutorials_1308) y utilizar la CDN de VTEX.

Debes asegurarte de que los registros CAA contengan la siguiente entrada:

```
domain.com. CAA 0 issue letsencrypt.org
```

Esto significa que la autoridad de certificación **Let's Encrypt** puede emitir certificados para el dominio `domain.com`. No hay conflicto si es necesario autorizar a otra autoridad de certificación. Lo importante es que esté autorizada.

Otra alternativa, aunque no recomendada, sería no incluir registros CAA en tu servidor DNS, lo que indicaría que todas las autoridades de certificación pueden emitir y renovar certificados para tu dominio.

>ℹ️ Puede que estos tipos de entrada no estén disponibles en la interfaz de tu gestor de DNS; sin embargo, muchas veces es posible gestionarlos a través de llamadas en el soporte de la herramienta específica.

Para facilitar el trabajo de crear y verificar tus registros CAA, puedes utilizar [CAA Record Helper de SSLMate](https://sslmate.com/caa/). El programa [DiG](https://www.hostinger.com/tutorials/how-to-use-the-dig-command-in-linux/) también puede ayudar a verificar los registros mediante el comando `dig domain.com CAA`; el status `SERVFAIL` puede indicar que tu servidor DNS no está en cumplimiento.

>ℹ️ Más información:
>
> *[CAA Record Helper by SSLMate](https://sslmate.com/caa/)
>
> *[Let's Encrypt: Certificate Authority Authorization (CAA)](https://letsencrypt.org/docs/caa/)
>
> *[SSL Mate: About CAA](https://sslmate.com/caa/about)
> 

## Poner la cuenta en producción

Para poner tu tienda en producción, tu cuenta debe estar en producción. Para ello, sigue los pasos a continuación:

1. Accede al Admin VTEX.
2. Haz clic en tu avatar de perfil.
4. Haz clic en **Configuración de la cuenta** > **Cuenta**.
5. Haz clic en **Activar en producción** en el cuadro de advertencia.
6. Activa la opción **Comprendo el impacto de esta acción** en el cuadro que se mostrará.
7. Haz clic en el botón `Confirmar`.

