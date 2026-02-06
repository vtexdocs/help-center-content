---
title: 'Security Monitor'
id: 5LOVNLrrtmgSj99pM1NS4x
status: PUBLISHED
createdAt: 2024-04-25T00:42:30.944Z
updatedAt: 2025-08-12T22:54:55.978Z
publishedAt: 2025-08-12T22:54:55.978Z
firstPublishedAt: 2024-04-25T02:41:44.798Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: security-monitor
legacySlug: security-monitor
locale: es
subcategoryId: jrgbOxKaOW0kdZs7rdgvS
---

> ℹ️ Esta funcionalidad es parte de [VTEX Shield](/es/docs/tutorials/vtex-shield). Si ya es cliente de VTEX y desea adoptar VTEX Shield para su negocio, por favor, póngase en contacto con el [Soporte Comercial](/es/docs/tracks/soporte-comercial). Pueden aplicarse tarifas adicionales. Si aún no es cliente pero está interesado en esta solución, por favor, complete el [formulario de contacto](https://vtex.com/co-es/contacto/).

Security Monitor es un dashboard que ayuda a los retailers a identificar y gestionar riesgos potenciales en su entorno en tiempo real. La herramienta identifica y notifica por email a los retailers sobre riesgos relacionados con la configuración y el comportamiento de los usuarios administrativos, lo que permite tomar medidas preventivas contra las vulnerabilidades de seguridad.

Para acceder al dashboard sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Dashboards**, o ingresa **Dashboards** en la barra de búsqueda.
2. En **Security Monitor**, haz clic en **Security Monitor Dashboard**.

![1-security-monitor-es](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/seguridad/vtex-shield/security-monitor_1.png)

Security Monitor presenta los resultados en tres pestañas, divididas por status:

* [Abiertos](#abiertos)
* [Pospuestos](#pospuestos)
* [Cerrados](#cerrados)

En todas las pestañas pueden realizarse las siguientes acciones:

* [Buscar hallazgos](#buscar-hallazgos)
* [Filtrar hallazgos por tipo](#filtrar-hallazgos-por-tipo)
* [Exportar hallazgos](#exportar-hallazgos)
* [Editar configuración de las notificaciones](#editar-configuracion-de-las-notificaciones)

Consulta a continuación información específica sobre la información disponible en cada pestaña y las acciones relacionadas.

## Abiertos

La pestaña **Abiertos** muestra las amenazas identificadas por Security Monitor que aún no han sido gestionadas o pospuestas.

La barra superior muestra el número total de hallazgos y el número de amenazas por nivel de gravedad (alto, medio o bajo).

![2-findings-es](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/seguridad/vtex-shield/security-monitor_2.png)

La pestaña muestra la lista completa de hallazgos abiertos en una tabla, del más reciente al más antiguo: 

| Columnas | Descripción |
| --- | --- |
| Hallazgo | Email de usuario o clave de API relacionado con el hallazgo. |
| Tipo | Tipo de hallazgo detectado:<br/><ul><li>**Claves de API antiguas:** [claves de API](/es/docs/tutorials/claves-de-api) que se crearon hace más de 6 meses.</li><li>**Excesivos Admin Super:** usuarios o claves de API con el [rol](/es/docs/tutorials/roles) **Owner (Admin Super)**.</li><li>**Claves de API filtradas:** [claves de API](/es/docs/tutorials/claves-de-api) expuestas en la web, identificadas por el equipo de seguridad de VTEX.</li><li>**Usuarios inactivos:** usuarios que no han accedido al Admin en los últimos 30 días.</li><li>**Permisiones Excesivas:** usuarios o claves de API con acceso a recursos que no han utilizado en los últimos 30 días.</li></ul> |
| Detectado | Fecha en que se detectó el hallazgo. |
| Sensor | Sensor que detectó la amenaza: <br/><ul><li>**VTEX Identity**</li></ul> |
| Gravedad | Nivel de gravedad de la amenaza, determinado por el impacto o riesgo potencial: <br /><ul><li>**Alta**</li><li>**Media**</li><li>**Baja**</li></ul> |
| Menú de acciones ⋮ | Opciones disponibles para abordar el hallazgo: <br/><ul><li>[Gestionar](#gestionar-hallazgo)</li><li>[Posponer](#posponer-hallazgo)</li></ul> |

### Gestionar hallazgo

Para gestionar un hallazgo sigue las instrucciones a continuación:

1. En la fila del hallazgo, haz clic en el menú ⋮ .
2. Después, en `Gestionar`.

   Serás redirigido a la pantalla de **Usuarios** en **Configuración de la cuenta** para editar los roles asociados al usuario o a la clave de API en cuestión.

### Posponer hallazgo

Para mover un hallazgo a la pestaña **Pospuestos**, es decir, removerlo de la pestaña **Abiertos**, sigue las instrucciones a continuación:

1. En la fila del hallazgo, haz clic en el menú ⋮ .
2. Después, en `Posponer`.
3. Elige el periodo de tiempo, en días, durante el cual deseas mantener este hallazgo en la pestaña **Pospuestos**. Las opciones disponibles son: **7**, **90** o **120** días.
4. Haz clic en `Posponer`.

![3-snooze-finding-es](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/seguridad/vtex-shield/security-monitor_3.png)

## Pospuestos

La pestaña **Pospuestos** presenta en una tabla los hallazgos que se pospusieron, con la misma información descrita en la pestaña [Abiertos](#abiertos).

En la pestaña **Pospuestos**, el menú de acciones de cada hallazgo presenta únicamente la opción `Reactivar alerta`, la cual te permite revertir la acción de posponer y devolver el hallazgo a la pestaña **Abiertos**.

## Cerrados

La pestaña **Cerrados** contiene la lista de hallazgos ya gestionados, es decir, finalizados. Esta información se presenta en forma de tabla y contiene: 

| Columnas | Descripción |
| --- | --- |
| Hallazgo | Email de usuario o clave de API relacionado con el hallazgo. |
| Tipo | Tipo de hallazgo detectado:<br/><ul><li>**Claves de API antiguas:** [claves de API](/es/docs/tutorials/claves-de-api) que se crearon hace más de 6 meses.</li><li>**Excesivos Admin Super:** usuarios o claves de API con el [rol](/es/docs/tutorials/roles) **Owner (Admin Super)**.</li><li>**Claves de API filtradas:** [claves de API](/es/docs/tutorials/claves-de-api) expuestas en la web, identificadas por el equipo de seguridad de VTEX.</li><li>**Usuarios inactivos:** usuarios que no han accedido al Admin en los últimos 30 días.</li></ul> |
| Detectado | Fecha en que se detectó el hallazgo. |
| Cerrado | Fecha en que se cerró el hallazgo. |
| Cerrado por | Indica que el hallazgo se cerró automáticamente tras ser gestionado por un usuario administrativo. |
| Gravedad | Nivel de gravedad de la amenaza, determinado por el impacto o riesgo potencial: <br /><ul><li>**Alta**</li><li>**Media**</li><li>**Baja**</li></ul> |

## Buscar hallazgos

En la barra de búsqueda, ingresa la dirección de email del usuario o el nombre de la clave de API para encontrar hallazgos relacionados.

## Filtrar hallazgos por tipo

Al hacer clic en `Tipo` <i class="fas fa-chevron-down"></i>, puedes elegir uno de los tipos de hallazgo para filtrar los resultados mostrados en la lista. Haz clic en `Aplicar` para confirmar el filtro elegido y la lista se actualizará.

![4-filter-findings-es](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/seguridad/vtex-shield/security-monitor_4.png)

## Exportar hallazgos

Para exportar hallazgos a un archivo CSV sigue los pasos a continuación:

1. Haz clic en el botón `Exportar` en la esquina superior derecha de la pantalla.  
2. Selecciona los hallazgos que deseas incluir en el archivo a exportar:
   * Todos los hallazgos  
   * Abiertos  
   * Pospuestos  
   * Cerrados  
3. Haz clic en `Exportar`. El archivo generado se enviará por email tan pronto como esté listo. 
4. Abre el email recibido y haz clic en `Download` para descargar el archivo.

### Información en el archivo exportado

Consulta a continuación la información sobre cada hallazgo incluida en el archivo CSV exportado:

| Columna | Descripción |
| :---- | :---- |
| *Id* | ID del hallazgo. |
| *Type* | Tipo de hallazgo detectado. |
| *Finding* | Email de usuario o clave de API relacionado con el hallazgo. |
| *Sensor* | Sensor que detectó la amenaza (VTEX Identity). |
| *Account* | Cuenta en la que se detectó la amenaza. |
| *Severity* | Nivel de gravedad de la amenaza, determinado por el impacto o riesgo potencial: <ul><li>High (alta)</li><li> Medium (media)</li><li> Low (baja)</li></ul> |
| *Detected* | Fecha y hora del hallazgo, en formato DD/MM/AAAA hh:mm:ss. |
| *Description* | Acción recomendada ante el hallazgo. |
| *Status* | Status de la amenaza: <ul><li>Open (abierta)</li><li>Closed (cerrada) </li><li> AutoClosed (cerrada automáticamente)</li></ul>|
| *Snoozed Until* | Fecha hasta cuando estará pospuesto el hallazgo, en formato DD/MM/AAAA hh:mm:ss. Este campo se llena únicamente si el hallazgo está pospuesto. |
| *Closed* | Fecha y hora en que el hallazgo se cerró, en formato DD/MM/AAAA hh:mm:ss. |
| *Closed By* | Responsable de cerrar el hallazgo. |

## Editar configuración de las notificaciones

Para editar aquellos usuarios administrativos que recibirán notificaciones en caso de hallazgos, sigue los pasos a continuación:

1. Haz clic en el engranaje de la esquina superior derecha de la pantalla. 
2. Ingresa el email del usuario a notificar y pulsa `Enter`. Repite este paso para agregar tantos usuarios como sea necesario.

   Para remover un usuario, haz clic en la `X` junto al email relacionado.
3. Haz clic en `Guardar`.

![5-edit-notifications-es](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/seguridad/vtex-shield/security-monitor_5.png)

## Más información

* [VTEX Shield](/es/docs/tutorials/vtex-shield)
* [Roles](/es/docs/tutorials/roles)
* [Usuarios](/es/docs/tutorials/gestionar-usuarios-administrativos)
* [Claves de API](/es/docs/tutorials/claves-de-api)

