---
title: 'Go live'
id: 12bQlMbJ68Ot0LIaO6Btkj
status: PUBLISHED
createdAt: 2022-12-09T21:36:11.449Z
updatedAt: 2023-04-18T16:00:31.228Z
publishedAt: 2023-04-18T16:00:31.228Z
firstPublishedAt: 2022-12-09T22:07:42.750Z
contentType: trackArticle
productTeam: Reliability
slugEN: go-live
locale: es
trackId: 4Ns5FxIiksmjsdX2yOTduM
trackSlugES: go-live
---

Tras completar los pasos descritos previamente, en esta etapa tu tienda entrará realmente en producción. Para ello, [realiza el apuntamiento de DNS](#realizar-el-apuntamiento-de-dns) y [notifica el apuntamiento](#notificar-el-apuntamiento) a la plataforma.

## Realizar el apuntamiento de DNS

En la zona de DNS de tu dominio, debes crear una entrada de tipo CNAME en el subdominio deseado al siguiente destino:
```
{dominio}.cdn.vtex.com
```

Ten en cuenta que el `{dominio}` indicado anteriormente debe ser el mismo que [registraste en VTEX](https://help.vtex.com/es/tracks/como-realizar-el-go-live-de-tu-tienda--4Ns5FxIiksmjsdX2yOTduM/7sM5IMx02zaHvAFTm0OxiJ#registrar-el-dominio-en-vtex).

>⚠️ Si utilizas Cloudflare como zona de DNS, puede que tengas que desactivar el proxy de DNS y, por lo tanto, desactivar los servicios de CDN y WAF de Cloudflare. Puedes ver más información en el artículo [Cómo desactivar el proxy de Cloudflare](https://help.vtex.com/pt/tutorial/disable-cloudflare-proxy--75QqsXAqR7NdkRc1GZPiXb).

Ejemplos:

```
Host de tienda: www.site.com
  - Subdominio: www
  - Tipo: CNAME
  - Destino: www.site.com.cdn.vtex.com
```
```
Host de tienda: www.site.com.br
  - Subdominio: www
  - Tipo: CNAME
  - Destino: www.site.com.br.cdn.vtex.com
```
```
Host de tienda: tienda.miempresa.com
  - Subdominio: tienda
  - Tipo: CNAME
  - Destino: tienda.miempresa.com.cdn.vtex.com
```
```
Host de tienda: www.tienda.miempresa.com.br
  - Subdominio: www.tienda
  - Tipo: CNAME
  - Destino: www.tienda.miempresa.com.br.cdn.vtex.com
```

Tenga en cuenta que el subdominio (`store`, `www`, `www.store` y otros) y el dominio de nivel superior (`.com`, `.com.br`, `.com.ar` y otros) forman parte del `{hostname}` y deben estar en el destino CNAME.

>❗ No puede haber ningún apuntamiento de tipo A coexistiendo con el apuntamiento CNAME descrito anteriormente. Esta coexistencia puede causar problemas en su _go live_. Mantenga solo el apuntamiento CNAME descrito anteriormente.

Los apuntamientos de DNS tardan entre 24 y 48 horas en propagarse completamente, lo que significa que la dirección configurada puede no ser accesible a todo el mundo inmediatamente después de la configuración. Además, para que la tienda esté disponible se requiere [notificar el apuntamiento](#notificar-el-apuntamiento).

## Notificar el apuntamiento

Una vez que hayas realizado el apuntamiento de DNS, notifícalo a la plataforma VTEX siguiendo los pasos que se indican a continuación:

1. Accede al Admin VTEX.
2. En la sección **CONFIGURACIÓN DE LA CUENTA**, haz clic en **Configuración de la cuenta**.
3. Haz clic en **Cuenta**.
4. Haz clic en el botón `Guardar` aunque no hayas realizado ningún cambio.

Una vez la notificación es enviada, la tienda estará disponible, pero aun esperando la habilitación del certificado SSL, el cual debiera ocurrir dentro de 10 minutos.

En caso de una falla en generar el certificado, ya sea por demora en la propagación del dominio u otro tipo de error, verá un mensaje al acceder al sitio informando que el certificado de SSL esta siendo generado. Si esto persiste por más de treinta minutos después de la notificación de apuntamiento, abre un ticket con el [soporte de VTEX](https://help.vtex.com/es/support) con prioridad urgente.

El certificado es generado vía [Let's Encrypt](https://letsencrypt.org/) y es válido por 90 días. De todas formas es automáticamente renovado dentro de los cinco días antes de su expiración, mientras el dominio permanezca correctamente apuntado a VTEX.

