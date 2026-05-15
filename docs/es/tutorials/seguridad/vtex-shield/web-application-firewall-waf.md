---
title: 'Web Application Firewall (WAF)'
id: 6BZYLlU03ws72iqIFF6jdn
status: PUBLISHED
createdAt: 2024-04-25T00:17:16.172Z
updatedAt: 2024-10-18T17:04:59.360Z
publishedAt: 2024-10-18T17:04:59.360Z
firstPublishedAt: 2024-04-25T01:16:27.468Z
contentType: tutorial
productTeam: Others
author: 1malnhMX0vPThsaJaZMYm2
slugEN: web-application-firewall-waf
legacySlug: web-application-firewall-waf
locale: es
subcategoryId: jrgbOxKaOW0kdZs7rdgvS
---

> ℹ️ Esta funcionalidad es parte del producto [VTEX Shield](/es/docs/tutorials/vtex-shield). Si ya eres cliente VTEX y deseas adoptar esta funcionalidad en tu negocio, ponte en contacto con nuestro [Soporte comercial](es/docs/tracks/soporte-comercial). Pueden aplicarse cargos adicionales. Si aún no eres cliente, pero te interesa esta solución, llena el [formulario de contacto](https://vtex.com/es-mx/contacto/).

Web Application Firewall (WAF) es una capa de seguridad diseñada para proteger aplicaciones web mediante monitoreo y filtrado del tráfico de internet.

WAF se enfoca en las comunicaciones que se llevan a cabo a través de los protocolos HTTP (Hypertext Transfer Protocol) y HTTPS (HTTP Secure), analizando los datos de entrada para detectar y bloquear posibles amenazas.

![waf-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/segurança/vtex-shield/web-application-firewall-waf_1.png)

WAF opera a partir de la configuración de [reglas de seguridad](#reglas-de-seguridad) definidas por el equipo de seguridad de VTEX, basándose en el análisis de patrones de circulación de datos. Dichas reglas sirven para que WAF monitoree constantemente el tráfico web y cuando detecte una actividad potencialmente perjudicial, pueda bloquear el tráfico, impidiendo que los atacantes aprovechen las vulnerabilidades en la aplicación web.

## Reglas de seguridad

Las tiendas que utilizan VTEX Shield y deciden usar WAF cuentan con las siguientes reglas de seguridad contra amenazas en el sitio web:

| Amenaza | Medida de seguridad |
|---|---|
| Remote File Inclusions (RFI) | Detecta tentativas de incluir archivos, normalmente a través de scripts en el servidor web.                                                  |
| Directory traversal                             | Comprueba y valida los nombres de archivo proporcionados por los usuarios, evitando el acceso no autorizado a archivos y carpetas sensibles. |
| Cross-site scripting (XSS)   | Impide la inyección de scripts del lado del cliente en las páginas vistas por los visitantes.                                                |
| Carga de archivos                               | Detecta intentos de carga de archivos al servidor web.                                                                                       |
| Trucos de evasión                               | Protege contra algunos trucos de codificación utilizados para intentar eludir los mecanismos de protección.                                  |
| Acceso no deseado                               | Detecta intentos de acceso a páginas administrativas o vulnerables, a bots y a herramientas de escaneo de seguridad.                         |
| Ataques identificados                           | Previene varios tipos de ataques comunes y vulnerabilidades conocidas que deberían bloquearse.                                               |
| Filtro de IP                                    | Consulta una lista de direcciones IP que tienen permiso o bloqueo de acceso.                                                                 |
| Bloqueo de la red Tor                           | Impide el acceso al sitio web utilizando el navegador Tor.                                                                                   |

> ℹ️ La selección de reglas y los nombres mostrados varían según la configuración definida en el proveedor de WAF y las personalizaciones solicitadas por el retailer.

## Solicitar activación de WAF

Para solicitar la activación de WAF en tu tienda, ponte en contacto con el [Soporte VTEX](https://supporticket.vtex.com/support). Incluye la siguiente información en el ticket:

* URLs que se añadirán a WAF.
* Nombre y datos de contacto (email y teléfono) de la persona que será el punto de contacto con el equipo de seguridad de VTEX durante el proceso de activación.
* Proveedor: para tener acceso a WAF, todo el tráfico de URL de la tienda debe pasar por el proveedor que VTEX utiliza actualmente. De no ser ese el caso, debes llevar a cabo un procedimiento con el equipo de tráfico de VTEX que puede durar entre 1 y 2 semanas.

Después de la solicitud, el plazo de activación de WAF en las URLs de la tienda es de cuatro semanas, además del plazo necesario para la migración al proveedor, de ser necesario.

## Métricas WAF

VTEX Shield disponibiliza un dashboard para monitoreo en tiempo real de las métricas y actividades de WAF. Para consultar el dashboard en el Admin VTEX, accede a **Apps > Shield > WAF**, o escribe **WAF** en la barra de búsqueda.

El dashboard muestra la siguiente información y recursos:

* [Filtro de periodo](#filtro-de-periodo)
* [Métricas generales](#metricas-generales)
* [Acciones](#acciones)
* [Reglas](#reglas)
* [Tipos de ataque](#tipos-de-ataque)
* [Países de origen](#paises-de-origen)
* [Dispositivos](#dispositivos)

### Requisitos

Para ver la página es necesario:

* Tener WAF [activado](#solicitar-activacion-de-waf) previamente.

* Ser un usuario asociado a un [rol](https://help.vtex.com/es/docs/tutorials/roles) con el [recurso de License Manager](https://help.vtex.com/es/docs/tutorials/recursos-del-license-manager) a continuación:

  * **Producto**: CDN API
  * **Categoría**: WAF Control
  * **Recurso**: View WafControl Metrics

### Filtrar por periodo

En la esquina superior derecha puedes seleccionar el periodo de visualización de los datos haciendo clic en el periodo actual. Las opciones disponibles son:

* **Hoy**
* **Ayer**
* **Últimos 7 días**
* **Últimos 14 días**
* **Últimos 30 días**
* **Personalizado** permite seleccionar fechas específicas de inicio y fin, con un intervalo máximo de 30 días, limitado a los últimos 60 días.

Después de seleccionar el periodo deseado, haz clic en `Aplicar` para actualizar las métricas del dashboard.

### Métricas generales

La sección superior del dashboard presenta tres métricas principales:

* **Todas las solicitudes:** número total de solicitudes analizadas por WAF en el periodo seleccionado.
* **Bloqueados:** cantidad y porcentaje de solicitudes que WAF bloqueó antes de llegar a la aplicación por haber sido identificadas como amenazas.
* **Permitidos:** porcentaje y cantidad de solicitudes permitidas por WAF y enviadas a la aplicación después del análisis, consideradas seguras.

![waf-2-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/segurança/vtex-shield/web-application-firewall-waf_2.png)

### Acciones

El gráfico de **Acciones** muestra la evolución temporal de las actividades de WAF, indicando el volumen de solicitudes por **hora del día**, consolidado durante todo el periodo seleccionado. Permite identificar picos de tráfico en horarios específicos.

El gráfico muestra tres métricas principales:

* **Bloqueadas** (línea azul): solicitudes bloqueadas por WAF.
* **Permitidas** (línea morada): solicitudes aceptadas.
* **Total** (línea gris): volumen total de solicitudes analizadas.

![waf-3-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/seguridad/vtex-shield/web-application-firewall-waf_3.png)

### Reglas

El gráfico **Reglas** detalla las reglas de seguridad que se activaron durante el periodo seleccionado. Se puede acceder a los datos de dos maneras que se pueden seleccionar en la esquina superior derecha del gráfico:

* **Tiempo:** evolución temporal de la aplicación de cada regla.
* **Resumen:** vista consolidada de la cantidad de acciones por regla.

![waf-4-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/seguridad/vtex-shield/firewall-de-aplicacion-web-waf_4.png)

> ℹ️ La selección de reglas y los nombres mostrados varían según la configuración definida en el proveedor del WAF y las personalizaciones solicitadas por el retailer.

### Tipos de ataque

La sección **Tipos de ataque** presenta un gráfico de barras horizontales con los principales tipos de amenazas detectadas y el volumen de eventos registrados.

Los tipos de ataque que se muestran corresponden a los más relevantes para la tienda, es decir, aquellos con mayor volumen de detecciones, y no necesariamente a los definidos en la lista. Consulta más información sobre ataques comunes en [OWASP Top 10](https://owasp.org/Top10)

![waf-5-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/segurança/vtex-shield/web-application-firewall-waf_5.png)

### Países de origen

El gráfico de **Países de origen** muestra la distribución geográfica de las solicitudes, permitiendo identificar de qué países provienen los accesos a tu sitio web analizados por el WAF. Los países se enumeran por código de tres letras, con barras horizontales que indican el volumen de solicitudes de cada configuración regional.

![waf-6-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/seguridad/vtex-shield/web-application-firewall-waf_6.png)

### Dispositivos

El gráfico de **Dispositivos** presenta la distribución porcentual de los tipos de dispositivos utilizados para acceder al sitio web en las solicitudes analizadas por WAF:

* **Escritorio:** accesos a través de computadoras.
* **Móvil:** accesos a través de dispositivos móviles.
* **Tablet:** accesos vía tablets.
* **Desconocido:** dispositivos no identificados.

Los datos se muestran en un gráfico circular con los porcentajes respectivos.

![waf-7-es](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/seguridad/vtex-shield/web-application-firewall-waf_7.png)

## Más información

* [VTEX Shield](/es/docs/tutorials/vtex-shield)
