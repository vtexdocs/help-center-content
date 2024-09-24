---
title: 'Security Monitor'
id: 5LOVNLrrtmgSj99pM1NS4x
status: PUBLISHED
createdAt: 2024-04-25T00:42:30.944Z
updatedAt: 2024-04-25T03:01:13.448Z
publishedAt: 2024-04-25T03:01:13.448Z
firstPublishedAt: 2024-04-25T02:41:44.798Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: security-monitor
locale: es
legacySlug: security-monitor
subcategoryId: jrgbOxKaOW0kdZs7rdgvS
---

>ℹ️ Esta funcionalidad es parte de [VTEX Shield](https://help.vtex.com/es/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh).  Si ya es cliente de VTEX y desea adoptar VTEX Shield para su negocio, por favor, póngase en contacto con el [Soporte Comercial](https://help.vtex.com/es/tracks/soporte-en-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ). Pueden aplicarse tarifas adicionales. Si aún no es cliente pero está interesado en esta solución, por favor, complete el [formulario de contacto](https://vtex.com/co-es/contacto/).

Security Monitor es un dashboard que ayuda a los retailers a identificar y gestionar riesgos potenciales en su entorno en tiempo real. La herramienta identifica y notifica por email a los retailers sobre riesgos relacionados con la configuración y el comportamiento de los usuarios administrativos, lo que permite tomar medidas preventivas contra las vulnerabilidades de seguridad.

Para acceder al dashboard sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Dashboards**, o ingresa **Dashboards** en la barra de búsqueda.
2. En **Security Monitor**, haz clic en **Security Monitor Dashboard**.

![1-security-monitor-es](//images.ctfassets.net/alneenqid6w5/k2BpYU2kF3p3grDdfy4aB/fb2b0e5a7758c15f7a85a28d6092e119/1-security-monitor-es__2_.png)

Security Monitor presenta los resultados en tres pestañas, divididas por status:

* [Abiertos](#abiertos)
* [Pospuestos](#pospuestos)
* [Cerrados](#cerrados)

En todas las pestañas pueden realizarse las siguientes acciones:

* [Buscar hallazgos](#buscar-hallazgos)
* [Filtrar hallazgos por tipo](#filtrar-hallazgos-por-tipo)
* [Editar configuración de las notificaciones](#editar-configuracion-de-las-notificaciones)

Consulta a continuación información específica sobre la información disponible en cada pestaña y las acciones relacionadas.

## Abiertos

La pestaña **Abiertos** muestra las amenazas identificadas por Security Monitor que aún no han sido gestionadas o pospuestas.

La barra superior muestra el número total de hallazgos y el número de amenazas por nivel de gravedad (alto, medio o bajo).

![2-findings-es](//images.ctfassets.net/alneenqid6w5/4wpzGuNHIyqAaRGuv5Dt8E/630a7a558c2c57d07e6b8b68de359a4b/2-findings-es.png)

La pestaña muestra la lista completa de hallazgos abiertos en una tabla, del más reciente al más antiguo: 

| Columnas | Descripción |
| --- | --- |
| Hallazgo | Email de usuario o clave de la aplicación relacionado con el hallazgo. |
| Tipo | Tipo de hallazgo detectado:<br/><ul><li><strong>Claves de aplicación antiguas:</strong> <a href="https://help.vtex.com/es/tutorial/claves-de-aplicacion--2iffYzlvvz4BDMr6WGUtet" rel="noopener noreferrer" target="_self" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">claves de aplicación</a> que se crearon hace más de 6 meses.</li><li><strong>Excesivos Admin Super:</strong> usuarios o claves de aplicación con el <a href="https://help.vtex.com/es/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc" rel="noopener noreferrer" target="_self" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">rol</a> <strong>Owner (Admin Super)</strong>.</li><li><strong>Claves de aplicación filtradas:</strong> <a href="https://help.vtex.com/es/tutorial/claves-de-aplicacion--2iffYzlvvz4BDMr6WGUtet" rel="noopener noreferrer" target="_self" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">claves de aplicación</a> expuestas en la web, identificadas por el equipo de seguridad de VTEX.</li><li><strong>Usuarios inactivos:</strong> usuarios que no han accedido al Admin en los últimos 30 días.</li></ul> |
| Detectado | Fecha en que se detectó el hallazgo. |
| Sensor | Sensor que detectó la amenaza: <br/><ul><li><strong>VTEX Identity</strong></li></ul> |
| Gravedad | Nivel de gravedad de la amenaza, determinado por el impacto o riesgo potencial: <br /><ul><li><strong>Alta</strong></li><li><strong>Media</strong></li><li><strong>Baja</strong></li></ul> |
| Menú de acciones ⋮ | Opciones disponibles para abordar el hallazgo: <br/><ul><li><a href="#gestionar-hallazgo" rel="noopener noreferrer" target="_self" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">Gestionar</a></li><li><a href="#posponer-hallazgo" rel="noopener noreferrer" target="_self" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">Posponer</a></li></ul> |

### Gestionar hallazgo

Para gestionar un hallazgo sigue las instrucciones a continuación:

1. En la fila del hallazgo, haz clic en el menú ⋮ .
2. Después, en `Gestionar`.

   Serás redirigido a la pantalla de **Usuarios** en **Configuración de la cuenta** para editar los roles asociados al usuario o a la clave de aplicación en cuestión.

### Posponer hallazgo

Para mover un hallazgo a la pestaña **Pospuestos**, es decir, removerlo de la pestaña **Abiertos**, sigue las instrucciones a continuación:

1. En la fila del hallazgo, haz clic en el menú ⋮ .
2. Después, en `Posponer`.
3. Elige el periodo de tiempo, en días, durante el cual deseas mantener este hallazgo en la pestaña **Pospuestos**. Las opciones disponibles son: **7**, **90** o **120** días.
4. Haz clic en `Posponer`.

![3-snooze-finding-es](//images.ctfassets.net/alneenqid6w5/1neaA5XmCxK4EB3HAVxcud/38af2109f1f98bfcb771fbb654b4113b/3-snooze-finding-es.png)

## Pospuestos

La pestaña **Pospuestos** presenta en una tabla los hallazgos que se pospusieron, con la misma información descrita en la pestaña [Abiertos](#abiertos).

En la pestaña **Pospuestos**, el menú de acciones de cada hallazgo presenta únicamente la opción `Reactivar alerta`, la cual te permite revertir la acción de posponer y devolver el hallazgo a la pestaña **Abiertos**.

## Cerrados

La pestaña **Cerrados** contiene la lista de hallazgos ya gestionados, es decir, finalizados. Esta información se presenta en forma de tabla y contiene: 

| Columnas | Descripción |
| --- | --- |
| Hallazgo | Email de usuario o clave de la aplicación relacionado con el hallazgo. |
| Tipo | Tipo de hallazgo detectado:<br/><ul><li><strong>Claves de aplicación antiguas:</strong> <a href="https://help.vtex.com/es/tutorial/claves-de-aplicacion--2iffYzlvvz4BDMr6WGUtet" rel="noopener noreferrer" target="_self" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">claves de aplicación</a> que se crearon hace más de 6 meses.</li><li><strong>Excesivos Admin Super:</strong> usuarios o claves de aplicación con el <a href="https://help.vtex.com/es/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc" rel="noopener noreferrer" target="_self" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">rol</a> <strong>Owner (Admin Super)</strong>.</li><li><strong>Claves de aplicación filtradas:</strong> <a href="https://help.vtex.com/es/tutorial/claves-de-aplicacion--2iffYzlvvz4BDMr6WGUtet" rel="noopener noreferrer" target="_self" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">claves de aplicación</a> expuestas en la web, identificadas por el equipo de seguridad de VTEX.</li><li><strong>Usuarios inactivos:</strong> usuarios que no han accedido al Admin en los últimos 30 días.</li></ul> |
| Detectado | Fecha en que se detectó el hallazgo. |
| Cerrado | Fecha en que se cerró el hallazgo. |
| Cerrado por | Indica que el hallazgo se cerró automáticamente tras ser gestionado por un usuario administrativo. |
| Gravedad | Nivel de gravedad de la amenaza, determinado por el impacto o riesgo potencial: <br /><ul><li><strong>Alta</strong></li><li><strong>Media</strong></li><li><strong>Baja</strong></li></ul> |

## Buscar hallazgos

En la barra de búsqueda, ingresa la dirección de email del usuario o el nombre de la clave de la aplicación para encontrar hallazgos relacionados.

## Filtrar hallazgos por tipo

Al hacer clic en `Tipo` <i class="fas fa-chevron-down"></i>, puedes elegir uno de los tipos de hallazgo para filtrar los resultados mostrados en la lista. Haz clic en `Aplicar` para confirmar el filtro elegido y la lista se actualizará.

![4-filter-findings-es](//images.ctfassets.net/alneenqid6w5/1qJnJBy5YHJzQKynw783W7/9718adf02a9fe3d71842848d87dca37c/4-filter-findings-es.png)

## Editar configuración de las notificaciones

Para editar aquellos usuarios administrativos que recibirán notificaciones en caso de hallazgos, sigue los pasos a continuación:

1. Haz clic en el engranaje de la esquina superior derecha de la pantalla. 
2. Ingresa el email del usuario a notificar y pulsa `Enter`. Repite este paso para agregar tantos usuarios como sea necesario.

   Para remover un usuario, haz clic en la `X` junto al email relacionado.
3. Haz clic en `Guardar`.

![5-edit-notifications-es](//images.ctfassets.net/alneenqid6w5/1CmMhWokQgzxRAqk1Jvqn4/b68c5dab3fabde1021d0c41db8ba2673/5-edit-notifications-es__1_.png)

## Más información

* [VTEX Shield](https://help.vtex.com/es/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh)
* [Roles](https://help.vtex.com/es/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc)
* [Usuarios](https://help.vtex.com/es/tutorial/gestionar-usuarios--tutorials_512)
* [Claves de aplicación](https://help.vtex.com/es/tutorial/claves-de-aplicacion--2iffYzlvvz4BDMr6WGUtet)

