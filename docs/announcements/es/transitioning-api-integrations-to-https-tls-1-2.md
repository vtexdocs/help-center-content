---
title: 'Transición de las integraciones de API a HTTPS / TLS 1.2'
id: 50H4bHnV1uk2GCY3CaJBXo
status: CHANGED
createdAt: 2020-07-10T20:32:32.971Z
updatedAt: 2021-11-17T17:58:32.348Z
publishedAt: 2020-07-21T19:14:32.690Z
contentType: updates
productTeam: Reliability
author: 127RQ7SUoFfyTh5gbXUpdM
slug: transicion-de-las-integraciones-de-api-a-https-tls-1-2
legacySlug: transicion-de-las-integraciones-de-api-a-https-tls-1-2
announcementImageID: ''
announcementSynopsisES: ' En los próximos meses, eliminaremos el soporte a las conexiones HTTP para mejorar la seguridad de nuestra plataforma.'
---

Como parte de nuestro compromiso permanente de adoptar normas de privacidad y seguridad globales, eliminaremos progresivamente el soporte a todas las conexiones HTTP en los próximos meses. 

Para permitir que nuestros clientes y partners se adapten a este cambio, establecimos un cronograma de transición hasta que el uso de HTTPS + TLS 1.2 se aplique a toda la comunicación con nuestros servidores.

<table>
  <tr>
    <td style="border-left: 4px solid #F71963;" bgcolor="#FFE6E6">Asegúrese de que los equipos responsables por su stack tecnológico e integraciones estén informados. Si su tienda se ve afectada, se requerirán cambios técnicos inmediatos.</td>
  </tr>
</table>

## ¿Qué cambió?

Hasta ahora, los servidores de VTEX requerían conexiones seguras solo en rutas específicas y las conexiones HTTPS podían hacerse utilizando TLS 1.0, TLS 1.1 o TLS 1.2.

Una vez que nuestro cronograma de transición concluya, los servidores de VTEX requerirán conexiones seguras en todas las rutas y obligarán a que las conexiones HTTPS se efectúen utilizando TLS 1.2.

<table>
  <tr>
    <td style="border-left: 4px solid #856407;" bgcolor="#FFF3CD">Las conexiones HTTP recibirán la respuesta `301 Moved Permanently` (Movido Permanentemente) que redirecciona a HTTPS. Las aplicaciones que no puedan manejar TLS 1.2 fallarán cuando traten de conectarse.</td>
  </tr>
</table>

## ¿ Por qué realizamos este cambio?

No proteger nuestro sitio web con TLS es un peligroso downgrade que puede colocar a sus usuarios y a su sitio web en riesgo. Cualquier persona con acceso a la red en la que se mueve el tráfico puede leer el tráfico HTTP. En contraste, el tráfico HTTPS solo puede ser desencriptado por el propietario del certificado HTTPS. 

Proteger su aplicación o sitio web con TLS es especialmente importante para los sitios webs que colectan información de pago (como información bancaria y de tarjeta de crédito) o información personal (como contraseñas y direcciones). Sin embargo, cualquier sitio web o aplicación que colecta información de usuario debe estar protegida por TLS para proteger a los usuarios y a sus datos.

Para más información sobre  HTTPS, consulte [¿Por qué HTTPS es importante?](https://developers.google.com/web/fundamentals/security/encrypt-in-transit/why-https) y [¿Por qué necesitamos HTTPS?](https://howhttps.works/why-do-we-need-https/)

## ¿Qué es necesario hacer?

Los equipos responsables por su stack tecnológico e integraciones deben verificar que todos los softwares que se comunican con VTEX mediante nuestras APIs estén utilizando HTTPS y TLS 1.2. 

Cualquier software que no se comunique actualmente con los servidores de VTEX utilizando HTTPS y TLS 1.2 debe ajustarse para cumplir con estas normas.

<table>
  <tr>
    <td style="border-left: 4px solid #004084;" bgcolor="#CCE5FE">Para estar seguros de que sus clientes HTTPS pueden comunicarse de forma segura con nuestros servidores, colocamos a disposición la siguiente ruta de prueba para asegurarnos  de que su implementación es correcta:
<pre><a href="https://sandbox.vtexcommercestable.com.br/api/test">https://sandbox.vtexcommercestable.com.br/api/test</a></pre>
Hacer un request a la dirección y obtener una respuesta <code>200 OK</code> indica que su cliente tiene la capacidad de utilizar los protocolos requeridos.</td>
  </tr>
</table>

## Cronograma de transición

Para conceder el tiempo necesario para estos cambios, vamos a iniciar pruebas controladas con ventanas de bloqueo de requests HTTP a partir del 30 de julio de 2020. 

Durante estas ventanas de bloqueo de requests, las conexiones HTTP recibirán la respuesta 301 Moved Permanently que redirecciona a HTTPS, y nuestros servidores obligarán a que las conexiones HTTPS se efectúen utilizando TLS 1.2.

La siguiente tabla lista todas las ventanas de bloqueo de requests en este periodo de transición:

| Fecha      | Hora (UTC-3) | Duración |
| ---------- | ------------ | -------- |
| 13/08/2020 | 04:00:00     | 2:00:00  |
| 28/08/2020 | 07:00:00     | 4:00:00  |
| 05/09/2020 | 10:00:00     | 8:00:00  |
