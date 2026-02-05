---
title: 'Planificación del go live'
id: 6xYnNxDHUcY6FyChgziCoH
status: PUBLISHED
createdAt: 2024-01-08T13:11:05.385Z
updatedAt: 2025-04-16T19:25:34.034Z
publishedAt: 2025-04-16T19:25:34.034Z
firstPublishedAt: 2024-02-22T14:07:27.548Z
contentType: trackArticle
productTeam: Others
slugEN: planning-the-go-live
locale: es
trackId: eSDNk26pdvemF3XKM0nK9
trackSlugEN: serie-de-la-tienda-vtex
order: 8
---

El go live es el momento en que la tienda empieza a estar disponible para que los clientes accedan a ella y realicen compras. Este artículo explica cómo planificar todas las etapas necesarias para el go live de una tienda VTEX, que son las siguientes:

1. [Preparación para el go live](#1-preparacion-para-el-go-live)
2. [Configuración de la tienda](#2-configuracion-de-la-tienda)
3. [Configuración del dominio y la cuenta](#3-configuracion-del-dominio-y-la-cuenta)
4. [Pruebas antes del go live](#4-pruebas-antes-del-go-live)
5. [Registro del dominio y solicitud de apuntamiento](#5-registro-del-dominio-y-solicitud-de-apuntamiento)
6. [Go live](#6-go-live)
7. [Acciones después del go live](#7-acciones-despues-del-go-live)

## Antes de comenzar

Para preparar una tienda para el go live, es importante definir previamente el equipo o [agencia partner](/es/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#partners-de-implementacion) que se encargará de la implementación, escoger los [tipos de cuenta VTEX](/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#tipos-de-cuenta-en-vtex) según el tipo de operación y planificar la arquitectura de la tienda. Para más información sobre las etapas, consulta el artículo [Cuentas y arquitectura](/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl).

## 1. Preparación para el go live

El proceso de go live de una tienda, incluyendo las configuraciones y pruebas necesarias, puede variar según el nivel de complejidad operativa de la misma. Por este motivo, recomendamos planificar todas las etapas necesarias del go live con un mínimo de 15 días de antelación.

En la siguiente imagen puedes ver las etapas de planificación del go live de una tienda VTEX:

![go-live-es](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/guía-de-onboarding/serie-de-la-tienda-vtex/planificacion-del-go-live_1.png)

### Definir MVP

El primer paso es determinar los elementos fundamentales del Minimum Viable Product (MVP), incluyendo las funcionalidades, páginas y datos necesarios para el lanzamiento oficial de la tienda.

Es importante hacer una lista de todos los requisitos que se deben implementar antes del go live. Los recursos deseables (pero no esenciales) se deben anotar por separado y se deben implementar como cambios graduales después del lanzamiento.

### Definir roadmap

Para organizar los equipos participantes y realizar el go live en la fecha deseada, es importante crear un roadmap, es decir, un documento que recoja las acciones requeridas y que indique los responsables de cada etapa y los plazos acordados. La siguiente imagen muestra un ejemplo de roadmap:

![golive 2 ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/guía-de-onboarding/serie-de-la-tienda-vtex/planificacion-del-go-live_2.png)

Recomendamos planificar reuniones periódicas con los [equipos de implementación](/es/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#partners-de-implementacion) para mantener una alineación frecuente y, de ser necesario, crear un war room para resolver asuntos pendientes la semana antes del go live.

### Planificar lanzamiento piloto

Además de las pruebas durante el desarrollo del proyecto, recomendamos incluir un lanzamiento piloto en el roadmap, o sea, un lanzamiento restringido a un público o mercado antes del lanzamiento oficial. Esta etapa puede ayudar a refinar y corregir detalles no observados durante el proyecto de implementación.

Después de la fecha del lanzamiento oficial, con la tienda plenamente operativa, los desarrolladores pueden seguir iterando el MVP y añadiendo mejoras sin interrumpir las ventas.

## 2. Configuración de la tienda

Antes del go live, es muy importante comprobar las configuraciones esenciales para el buen funcionamiento de la tienda. Para esto recomendamos verificar la [Lista de configuración de la tienda](https://assets.ctfassets.net/alneenqid6w5/3yv1ofQRJ5xeX7J5EGglGy/dbe5b9175ab01586916c6155ac5681fa/Checklist_de_configura____o_de_loja.xlsx). En cada punto se debe confirmar que las configuraciones se completaron de acuerdo con las características de operación de la tienda.

> ⚠️ La lista de comprobación indicada anteriormente enumera las funcionalidades y configuraciones básicas para el funcionamiento de una tienda VTEX. El [equipo de implementación](/es/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#partners-de-implementacion) de cada tienda es responsable de definir las funcionalidades y configuraciones que se deben aplicar para producir la experiencia de compra deseada para los clientes. Recomendamos comprobar todos los aspectos operativos de la tienda y añadirlos a la lista en caso de que no estén incluidos.

## 3. Configuración del dominio y la cuenta

Después de completar las configuraciones internas de la tienda se deben realizar algunos pasos para la configuración del dominio y la cuenta VTEX. Estos ajustes no dependen de la fecha prevista para el go live, pero deben realizarse antes de la etapa de pruebas.

1. [Comprobar dominio en las redes CDN](/es/tracks/realizando-o-go-live-da-sua-loja--4Ns5FxIiksmjsdX2yOTduM/7wFsbWgN4rnZsbjhv8IItX#conferir-dominio-nos-cdns): confirmar que el dominio no esté registrado previamente en [Cloudfront](https://aws.amazon.com/es/cloudfront/?nc1=h_ls).
2. [Configurar registro CAA](/es/tracks/realizando-o-go-live-da-sua-loja--4Ns5FxIiksmjsdX2yOTduM/7wFsbWgN4rnZsbjhv8IItX#configurar-registro-caa): indicar que la autoridad de certificación (CA) **Let's Encrypt** está autorizada para generar y renovar certificados que acrediten la identidad del dominio. Este paso es necesario si hay un registro CAA en el servidor DNS.
3. [Añadir cuenta en producción](/es/tracks/realizando-o-go-live-da-sua-loja--4Ns5FxIiksmjsdX2yOTduM/7wFsbWgN4rnZsbjhv8IItX#colocar-conta-em-producao): activar la cuenta VTEX en producción. Aun después de la activación, la tienda sigue sin estar disponible para clientes externos. Solo se podrán ver y comprar productos en la tienda después de la finalización del go live, según los pasos que se describen en las próximas secciones de este artículo.

> ⚠️ Desde el momento en que la cuenta se active en producción, todos los pedidos se cobrarán automáticamente y el [take rate](/es/tutorial/compreenda-o-valor-da-receita-aprovada--tutorials_4322#valores-da-receita-aprovada) se aplicará según el plan acordado con VTEX. Esto incluye los pedidos realizados en `{nombredelatienda}.myvtex.com`, incuso si fueron realizados como prueba.

Para más información, consulta el artículo [Configuración](/es/tracks/realizando-o-go-live-da-sua-loja--4Ns5FxIiksmjsdX2yOTduM/7wFsbWgN4rnZsbjhv8IItX), que forma parte de la serie [Go live](/es/tracks/realizando-o-go-live-da-sua-loja--4Ns5FxIiksmjsdX2yOTduM/1iP90RcJvlrfQhnlxM54wo).

## 4. Pruebas antes del go live

Recomendamos llevar a cabo pruebas antes del go live para observar el comportamiento de la tienda y evitar errores o problemas en el lanzamiento oficial. En las siguientes secciones, explicamos los dos tipos de prueba más comunes: [Quality Assurance (QA)](#quality-assurance-qa) y [User Acceptance Testing (UAT)](#user-acceptance-testing-uat).

VTEX permite crear entornos independientes para estas pruebas. Cuando se crea un entorno de pruebas, se deben replicar las configuraciones del entorno principal que se van a probar. Por ejemplo, si se desea probar el funcionamiento de una promoción, se deben configurar todos los elementos requeridos para simular un escenario en el que se aplicaría una promoción, tales como productos, precios, logística, checkout, medios de pago.

Para planificar una fase de pruebas ponte en contacto con [nuestro equipo de soporte](/es/tracks/soporte-en-vtex--4AXsGdGHqExp9ZkiNq9eMy), que es el canal para [contratar un entorno de pruebas](/es/tutorial/contratar-ambiente-de-testes--2nmZAHlfQoGsCWmEWGIoGy).

> ℹ️ Si la tienda fue [creada utilizando VTEX IO](/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/67SCtUreXxKYWhZh8n0zvZ#entorno-de-desarrollo), puedes realizar pruebas A/B entre workspaces, es decir, comparar el rendimiento de entornos de desarrollo de storefront. Para más información, consulta la guía de desarrolladores [Running A/B tests](https://developers.vtex.com/docs/guides/vtex-io-documentation-running-native-ab-testing).

### Quality Assurance (QA)

La fase de pruebas de QA es la garantía de calidad mediante el proceso de verificación y validación de todos los aspectos de la tienda y de sus funcionalidades antes de que se pongan a disposición del público general. Esto conlleva probar a fondo todos los elementos, desde la facilidad de navegación y el rendimiento del sitio web hasta los distintos escenarios de flujo de compra, procesamiento de pagos e integraciones de sistemas.

El objetivo es identificar y corregir cualquier problema, error o falla para garantizar que la tienda esté lista y cumpla con el alcance previsto para el MVP del lanzamiento. En esta etapa es importante documentar bugs y errores y planificar su corrección antes de la fecha del go live.

### User Acceptance Testing (UAT)

Las pruebas UAT (User Acceptance Testing), o pruebas de aceptación de usuario, representan la última fase de las pruebas en que usuarios finales validan y verifican si la tienda cumple con las expectativas y funcionalidades requeridas para el MVP. Generalmente, este tipo de prueba incluye al equipo de la tienda y, en algunos casos, un grupo seleccionado de clientes.

Durante las pruebas UAT, los probadores exploran el sitio web, realizan pedidos de prueba y evalúan la experiencia general del usuario. Esta fase es otra oportunidad para informar, documentar y corregir cualquier problema o comportamiento indeseado en la experiencia antes del lanzamiento oficial, lo que aumenta la probabilidad de éxito después del go live.

## 5. Registro del dominio y solicitud de apuntamiento

Después de concluidas las pruebas y ajustes correspondientes, se debe preparar la tienda para el go live. Siete a tres días antes de la fecha prevista para el lanzamiento oficial, se deben completar las siguientes acciones:

1. [Registrar el dominio en VTEX](/es/docs/tutorials/configurar-dominio-de-la-tienda): hay que acceder a **Configuración de la cuenta** en el Admin VTEX para conectar la dirección de la tienda.

   > ⚠️ Después del registro, hay un plazo de siete días para completar el go live. Si la tienda no completa los procedimientos requeridos para el go live en ese periodo, habrá que acceder al registro y guardarlo nuevamente.

2. **Solicitar apuntamiento interno:** hay que abrir un ticket con el [soporte VTEX](/es/tracks/soporte-en-vtex--4AXsGdGHqExp9ZkiNq9eMy) para solicitar el apuntamiento de DNS interno. El plazo para completar esta solicitud es de hasta tres días laborables.

    El tipo de solicitud enviada debe corresponder a la [tecnología escogida](/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/67SCtUreXxKYWhZh8n0zvZ) para el storefront:

  <table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
  <thead>
    <tr class="bb b--muted-3">
      <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">Tecnología</th>
      <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">Solicitud</th>
    </tr>
  </thead>
  <tbody>
    <tr class="bb b--muted-3">
      <td class="t-body pa5" style="min-width: 10rem;">Store Framework o FastStore (VTEX IO)</td>
      <td class="t-body pa5" style="min-width: 10rem;">Solicitar el [apuntamiento de DNS interno para VTEX IO](/es/tracks/realizando-o-go-live-da-sua-loja--4Ns5FxIiksmjsdX2yOTduM/7sM5IMx02zaHvAFTm0OxiJ#solicitar-apontamento-io) mediante un ticket con el [soporte VTEX](https://supporticket.vtex.com/support).<br> <br>Para más información, consulta los artículos:<ul><li>[Going live with a new store](https://developers.vtex.com/docs/guides/vtex-io-documentation-go-live) (Store Framework)</li><li>[Migrating your storefront from Legacy CMS Portal to Store Framework](https://developers.vtex.com/docs/guides/vtex-io-documentation-migrating-storefront-from-legacy-to-io)</li><li>[Configuring external DNS for a custom domain](https://www.faststore.dev/docs/go-live/2-configuring-external-dns) (FastStore)</li></ul></td>
    </tr>
    <tr class="bb b--muted-3">
      <td class="t-body pa5" style="min-width: 10rem;">CMS Portal (Legado)</td>
      <td class="t-body pa5" style="min-width: 10rem;">Si el acceso a la tienda está restringido por una [política comercial](/es/docs/tutorials/crear-una-politica-comercial) con una regla condicional y tu storefront fue creado con[CMS Portal (Legado)](/es/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj), debes solicitar un [apuntamiento interno especial](/es/tracks/go-live-your-store--4Ns5FxIiksmjsdX2yOTduM/7sM5IMx02zaHvAFTm0OxiJ#solicitar-apontamento-especial). Un ejemplo común son las tiendas B2B que restringen el acceso a empresas preaprobadas. La solicitud de apuntamiento especial se envía a través del [soporte VTEX](https://supporticket.vtex.com/support), que debe incluir la política comercial y la regla condicional configurada.</td>
    </tr>
  </tbody>
  </table>

Independientemente del tipo de solicitud que se necesite, el ticket para el soporte VTEX debe contener la siguiente información:

- Título que indique la intención de realizar el go live.
- Si la [tecnología de storefront](/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/67SCtUreXxKYWhZh8n0zvZ) fue desarrollada en VTEX IO o CMS Portal (Legado).
- URL que se debe apuntar.
- Horario en que se realizará el apuntamiento interno, entre 9:00 y 17:00 UTC-3.
- Indicar si la tienda tiene reglas condicionales de [políticas comerciales](/es/docs/tutorials/crear-una-politica-comercial).
- Si ya hay un sitio web activo que se esté migrando a VTEX, indicar si se utiliza la red CDN de Cloudfront.

> ⚠️ Después de recibir la confirmación de apuntamiento interno, hay que realizar el apuntamiento común de DNS en hasta cinco días. De lo contrario, el apuntamiento interno se eliminará y habrá que enviar una nueva solicitud.

## 6. Go live

Durante el go live, después de la confirmación del apuntamiento interno realizado en la etapa anterior, será necesario llevar a cabo el apuntamiento de DNS y notificar a VTEX:

1. [Realizar el apuntamiento DNS:](/es/tracks/go-live-your-store--4Ns5FxIiksmjsdX2yOTduM/12bQlMbJ68Ot0LIaO6Btkj#realizar-apontamento-de-dnshttps://help.vtex.com/pt/tracks/go-live-your-store--4Ns5FxIiksmjsdX2yOTduM/12bQlMbJ68Ot0LIaO6Btkj#realizar-apontamento-de-dns) en la zona DNS del dominio, crear una entrada de tipo CNAME en el subdominio deseado para el destino ``{dominio}.cdn.vtex.com``. El ``{dominio}`` debe ser el mismo que está registrado en VTEX.

   > ⚠️ La propagación del apuntamiento DNS puede tomar de 24 a 48 horas para completarse. Esto significa que la dirección configurada puede no estar accesible a todo el mundo justo después de la configuración.

2. [Notificar el apuntamiento:](/es/tracks/go-live-your-store--4Ns5FxIiksmjsdX2yOTduM/12bQlMbJ68Ot0LIaO6Btkj#notificar-apontamento) para que la tienda esté disponible al público general, se debe notificar a la plataforma VTEX que el apuntamiento fue realizado. Para esto, hay que guardar nuevamente la **Configuración de la cuenta** en el Admin VTEX.

   > ℹ️ Si la tienda fue creada con[ FastStore](/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/67SCtUreXxKYWhZh8n0zvZ#faststore), también se deben seguir los pasos descritos en el artículo[ Configuring external DNS for a custom domain](https://www.faststore.dev/docs/go-live/2-configuring-external-dns).

Luego de completar las etapas anteriores, la tienda estará disponible en el dominio registrado para que los clientes puedan entrar y hacer compras.

## 7. Acciones después del go live

Después del lanzamiento oficial de la tienda, hay varias acciones importantes que se deben tomar para garantizar que los clientes tengan acceso a la dirección correcta y para monitorear el rendimiento de ventas y navegación del sitio web.

### Configurar redirecciones

Después del go live, se puede acceder a la tienda en el [dominio registrado](/es/tracks/como-realizar-el-go-live-de-tu-tienda--4Ns5FxIiksmjsdX2yOTduM/7sM5IMx02zaHvAFTm0OxiJ#cadastrar-dominio-na-vtex). Sin embargo, puede que sea necesario redirigir direcciones antiguas o una dirección sin subdominio `www` para garantizar el acceso a la dirección de la tienda nueva. Recomendamos seguir los tutoriales de los siguientes artículos:

- [Redirección de otras direcciones](/es/docs/tutorials/redireccion-de-otras-direcciones)
- [Configurar acceso sin www](/es/docs/tutorials/mejores-practicas-para-acceder-a-tienda-sin-www)

### Monitorear el rendimiento de la tienda

Recomendamos monitorear el rendimiento de la tienda después del lanzamiento desde el menú de [Dashboards](/es/docs/tutorials/vista-general-dashboards) en el Admin VTEX, que incluye las siguientes páginas:

- [Vista general:](/es/docs/tutorials/vista-general-de-la-tienda) métricas principales que afectan los ingresos de las tiendas. Este dashboard monitorea los principales indicadores de la evolución de ventas mediante los recursos de análisis de tendencias de pedidos, tasa de conversión y gráficos del embudo de ventas.
- [Desempeño de ventas:](/es/docs/tutorials/desempeno-de-ventas) dashboard que control para el comercio unificado, que ayuda a las tiendas a ampliar su negocio y tomar decisiones con mayor precisión.

Además de las herramientas disponibles en el Admin VTEX, puedes monitorear el rendimiento de la tienda a través de [Google Analytics](https://analytics.google.com/analytics/web/) si fue previamente configurado. Para más información, accede a la guía [Configurar Google Analytics 4 en una tienda VTEX](/es/docs/tutorials/como-configurar-el-google-analytics-en-tienda-vtex).
