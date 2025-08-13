---
title: 'Rendimiento de Páginas Web '
id: FaapHjGgfWq9LaPKBiZgS
status: DRAFT
createdAt: 2022-06-29T13:23:10.593Z
updatedAt: 2022-06-30T13:34:57.729Z
publishedAt: 
firstPublishedAt: 2022-06-29T19:03:11.878Z
contentType: tutorial
productTeam: Management
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: web-page-performance
legacySlug: rendimiento-de-paginas-web
locale: es
subcategoryId: QPnz120TdtLcXSh65c4Gs
---

<div class = "alert alert-info">
Esta página solo está disponible para las tiendas que operan con el <a href="https://help.vtex.com/es/announcements/bem-vindo-ao-novo-admin-vtex--5tLPBodp6Xu03vYdyBTGTa">nuevo Admin VTEX</a>. Para acceder a esta página y formar parte de una nueva experiencia, únete al <a href="https://content.vtex.com/participe-do-programa-beta-es/?utm_source=landing_page&utm_medium=help_center&utm_campaign=new_admin_beta">programa Beta</a> del nuevo Admin VTEX.
</div>

[PageSpeed Insights](https://developers.google.com/speed/docs/insights/v5/about) es una herramienta desarrollada por Google para generar informes de rendimiento de una página, tanto en dispositivos móviles como de escritorio, y brinda sugerencias sobre cómo se podría mejorar. Utiliza las [Métricas web principales de Google](https://web.dev/vitals/#core-web-vitals) para evaluar el rendimiento _online_. 

El dashboard Rendimiento de las páginas web incorpora la herramienta [PageSpeed Insights](https://developers.google.com/speed/docs/insights/v5/about) de Google a tu Admin VTEX para permitirte hacer un seguimiento del rendimiento de las URL de tu _ecommerce_. Ayuda a los comerciantes a hacer un seguimiento de la experiencia de rendimiento de las páginas principales de su _ecommerce _y, al mismo tiempo, a averiguar las razones de un rendimiento más lento. 

Aunque el _dashboard_ Rendimiento de las páginas web ofrece las mismas funcionalidades que PageSpeed Insights de Google, los comerciantes pueden agregar varias URL y hacerles un seguimiento constante únicamente en el Admin VTEX. 

![Web page performance Dash ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/beta/dashboards-beta/rendimiento-de-paginas-web_1.png)

## ¿Por qué deberías hacer un seguimiento del rendimiento de una página web?

En el mercado del comercio digital, brindar una experiencia que hace que el comprador encuentre la información que necesita o termine un pedido rápidamente puede significar una ventaja competitiva entre las marcas que compiten por captar la atención de los mismos usuarios.

Mejorar la velocidad de la tienda digital es un ejercicio importante que las empresas deben llevar adelante para poder ser más competitivas en un mercado en el que los segundos que tarda en cargar una página son de suma importancia.

La herramienta PageSpeed Insights de Google establece una manera de medir una buena experiencia del usuario en la página, asegurándose de que las páginas web sean rápidas, receptivas y agradables de usar. 

Una buena experiencia de usuario suele conducir a mejores resultados comerciales y conversiones de ventas. Las [Métricas web principales de Google](https://web.dev/vitals/#core-web-vitals) también forman parte de las señales que indican una buena experiencia en la página en el buscador de Google. Por lo tanto, mejorar tu puntuación en esas métricas es otra manera de hacer que tu sitio web sea más reconocible para los usuarios.

## Datos

Las métricas de rendimiento se pueden medir con dos tipos de datos:

* **Datos de campo:** seguimiento de usuarios reales que cargan la página e interactúan con ella. Este tipo de datos es útil para conocer el rendimiento de tu sitio web en distintas condiciones, por ejemplo, las funcionalidades de la red y cómo es la experiencia de las personas en tu página. Los datos de campo se pueden ver en la sección Métricas web principales de la página. Los datos de campo provienen de[ Chrome User Experience Report](https://developers.google.com/web/tools/chrome-user-experience-report). Los datos surgen de un promedio de 28 días de los datos recolectados de las URL agregadas. Esto significa que las mejoras que le hagas a la página web tardarán un tiempo en verse reflejadas en los números de los datos de campo. Para medir los resultados a corto plazo, te recomendamos usar datos de laboratorio.
* **Datos de laboratorio:** se usan herramientas para simular la carga de una página en un entorno consistente y controlado en tiempo real. Este tipo de datos es útil al momento de desarrollar nuevas funcionalidades porque sirven para probar su rendimiento antes de lanzarlas al público. Los datos de laboratorio se pueden ver en la sección Rendimiento de la página. Sus datos surgen de simulaciones en las que se usa [Lighthouse](https://github.com/GoogleChrome/lighthouse) con fines de diagnóstico. También se puede actualizar el informe de forma manual para obtener datos sobre estas secciones casi en tiempo real.

Ten en cuenta que no deberías comparar los resultados de los dos tipos de datos. No son comparables porque provienen de distintas fuentes y cumplen distintos propósitos. Obtén más información sobre cómo se puede aplicar cada tipo de dato en el documento de Google [Cómo se miden las métricas](https://web.dev/user-centric-performance-metrics/#how-metrics-are-measured).

<div class = "alert alert-info">
  Para asegurarte de que tu sitio web alcance el objetivo recomendado para todas las métricas, PageSpeed Insights mide la actividad del percentil 75 de las cargas de la página, dividida entre los dispositivos móviles y de escritorio.
</div>

### Cómo usar los datos de campo y de laboratorio para mejorar las Métricas web principales

Puedes intercambiar entre datos de laboratorio y de campo para poner a prueba distintas hipótesis y, de esta manera, mejorar las Métricas web principales de tu página web. Te sugerimos seguir estos pasos generales en tu proyecto:

1. Medir el estado actual de los datos de campo.
2. Seleccionar un objetivo para mejorar la experiencia de usuario.
3. Crear una hipótesis sobre cómo lograrlo. 
4. Recabar pruebas con las Métricas web principales.
5. Probar posibles soluciones con datos de laboratorio.
6. Lanzar la nueva versión.
7. Validarla con datos de campo con el paso del tiempo.
8. Repetir.

## Listado de las URLs

El dashboard Rendimiento de las páginas web te permite agregar varias URL para evaluar constantemente el rendimiento de cada página web.

La URL se muestra en una tarjeta junto con:

* **Evaluación:** resultado de la evaluación de rendimiento de la URL, que incluye las evaluaciones de las Métricas web principales: _Malo, Bueno, No aplicable_ y _No hay suficientes datos._ Más información en la sección Métricas web principales de este artículo. 
- **Impresiones:** cantidad de veces que se accedió a las principales 10 URL del sitio web de tu ecommerce en los últimos 28 días.

Puedes buscar entre los links agregados y elegir cuál mostrar en Rendimiento de las páginas web y analizar sus métricas de rendimiento. Al hacer clic en el ícono de menú <i class=’fa-solid fa-ellipsis-vertical’></i>, también verás las opciones `Copiar URL` y `Visitar página` haciendo clic en los botones correspondientes de la tarjeta de la URL.

### ¿A qué URL deberías hacerles seguimiento? 
Si tu *storefront* está dentro de VTEX, la página muestra de manera predeterminada las 10 páginas más visitadas de tu tienda. 

Si tu storefront no está dentro de VTEX, te recomendamos hacer un seguimiento de las URL que tengan mayor impacto en tu negocio. Por ejemplo, aquellas que estén presentes en tu embudo de ventas, como el carrito de compras, el checkout o las páginas de pago.

También se puede editar la lista al agregar o eliminar las URL. Puedes agregar URL de campañas recientes, promociones o incluso competidores del segmento de tu tienda. 

### Cómo agregar una URL

1. En tu Admin VTEX, accede a **Dashboards > Rendimiento de las páginas web**.
2. En la parte superior de la página haz clic en + **Agregar**.
3. Rellena el campo con el _link_ deseado. 

    > Debe tener el formato: `https://www.example.com/`.

4. Para agregar más de una URL, haz clic en + Agregar URL, y pega el _link_ deseado.
5. Para eliminar una URL, haz clic en el <i class=’fa-solid fa-trash-can’></i> ícono del cesto de basura.
6. Haz clic en **Agregar**.

### Cómo eliminar una URL

Ten en cuenta que no podrás eliminar las 10 páginas más visitadas de tu _ecommerce_. Solo podrás eliminar las páginas que tú mismo agregaste.

1. En tu Admin VTEX, accede a **Dashboards > Rendimiento de las páginas web**.
2. Si la URL que se muestra en la página no es la que quieres eliminar, haz clic en ella y busca en la lista de URL agregadas.
3. Haz clic en la URL elegida para seleccionarla.
4. Haz clic en el botón Eliminar.

## Métricas web principales

![Core web vitals ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/beta/dashboards-beta/rendimiento-de-paginas-web_2.png)

Para cada URL, la página Rendimiento de las páginas web muestra la puntuación de las [Métricas web principales de Google](https://web.dev/vitals/#core-web-vitals) para esa página web. 

Las Métricas web principales son el subconjunto de [métricas web](https://web.dev/vitals/) que se aplican a todas las páginas web al medir las métricas relacionadas con la experiencia del usuario de la página. Cada Métrica web principal representa una faceta distinta de la experiencia de usuario y puede medirse en el campo.

Cada Métrica web principal se asocia a la facilidad de uso y se emplea para diagnosticar si la página web brinda una experiencia ideal a los usuarios. Obtén más información sobre cada Métrica web principal accediendo a los siguientes _links_ de documentos de Google:

<table>
  <tr>
   <td><strong>Métricas web principales</strong>
   </td>
   <td><strong>Experiencia del usuario</strong>
   </td>
  </tr>
  <tr>
   <td><a href="https://web.dev/first-contentful-paint/">Primer despliegue de contenido (FCP)</a>
   </td>
   <td>Carga: <em>¿Está cargando?</em>
   </td>
  </tr>
  <tr>
   <td><a href="https://web.dev/fid/">Demora de la primera entrada (FIP)</a>
   </td>
   <td>Interacción: <em>¿Es receptiva?</em>
   </td>
  </tr>
  <tr>
   <td><a href="https://web.dev/cls/">Cambio acumulativo del diseño (CLS)</a>
   </td>
   <td>Estabilidad visual:<em> ¿Es agradable?</em>
   </td>
  </tr>
</table>

### Límites y evaluaciones de las Métrica web principales

Cada Métrica web principal tiene un intervalo numérico que define sus [Límites](https://web.dev/defining-core-web-vitals-thresholds/). Los límites pueden ser:

* **Bueno:** el código de color es verde. 
* **Necesita mejorar:** el código de color es naranja.
* **Malo:** el código de color es rojo. 

Al hacer clic en el botón `See details`, la tarjeta se expande y muestra los límites de cada Métrica web principal tal como se muestra en la imagen a continuación. Para cada límite, la página muestra el porcentaje de datos que disminuyó en cada categoría.

También se muestra una evaluación general de todos los límites de las Métricas web principales o un «resultado» de su combinación. La **evaluación de las Métricas web principales **puede ser:

* **Buena:** cuando tres Métricas web principales están dentro del límite «bueno».  
* **Mala:** cuando al menos una de las Métricas web principales está por fuera del límite «bueno».   
* **No hay suficientes datos:** cuando la página no tuvo suficientes accesos en los últimos 28 días como para realizar una evaluación válida.  
* **No aplicable:** cuando algunas Métricas web principales tuvieron accesos suficientes como para poder medirlos, pero otros no.  

En la página Rendimiento de las páginas web, puedes ver tanto los límites como las evaluaciones.  

## Oportunidades
La sección Oportunidades indica el número de oportunidades de mejora que encontró PageSpeed Insights basadas en las [Auditorías de rendimiento](https://web.dev/lighthouse-performance/). Al hacer clic en `See details`, aparece una ventana que muestra los diagnósticos de Lighthouse Performance Scoring. En la ventana, puedes hacer clic en el botón :arrow: para expandir cada línea, tal como se muestra en la imagen a continuación. Luego, verás una breve descripción y un _link_ a documentación de Google si haces clic en `Obtén más información`.

## Puntuación de rendimiento / Métricas de diagnóstico

La sección Rendimiento de Rendimiento de las páginas web incluye una puntuación que resume la simulación de rendimiento de la página. Esta puntuación se determina al ejecutar [Lighthouse de Google](https://developer.chrome.com/docs/lighthouse/overview/) para recolectar datos de laboratorio y analizar información de diagnóstico sobre la página. La puntuación pueden ser:

* **Buena**: 90 o más. El código de color es verde.
* **Necesita mejorar:** de 50 a 90. El código de color es naranja.
* **Mala**: por debajo de 50. El código de color es rojo.

<div class = "alert alert-warning">
Ten en cuenta que el rendimiento varía mucho entre las tiendas y depende de cómo se creó la arquitectura del storefront. Los storefronts complejos, con códigos externos y funcionalidades, suelen tener un rendimiento con puntuaciones bajas. Para las tiendas creadas en VTEX IO, consulta <a href="https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-debugging-performance-issues">VTEX IO: Debugging Performance Issues (Depuración de problemas de rendimiento)</a>. Para las tiendas que usan <a href="https://www.faststore.dev/">FastStore</a>, hay un <a href="https://www.faststore.dev/releases/2022/04/22/webops">informe automático de Lighthouse para desplegar vistas previas</a>.
</div>

Debajo de la puntuación verás cada puntuación individual que se logró a través de un listado de Métricas web principales, junto con un código de color que indica su límite. Puedes actualizar la puntuación manualmente haciendo clic en el ícono de actualizar <i class='fa fa-refresh'></i>.

## Más información

* [VTEX IO: Comenzar a usar Lighthouse](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-getting-started-with-lighthouse)  
* [Seguimiento de cambios en Lighthouse Performance Score](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-tracking-changes-in-lighthouse-performance-score)  

