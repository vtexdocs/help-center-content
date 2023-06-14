---
title: 'CMS - Portal Legado'
id: 1oN446gRGcR2s70RvBCAmj
status: PUBLISHED
createdAt: 2022-01-10T20:17:10.358Z
updatedAt: 2023-03-08T17:44:29.465Z
publishedAt: 2023-03-08T17:44:29.465Z
firstPublishedAt: 2022-01-10T20:41:44.261Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slug: cms-portal-legado
locale: es
trackId: 2YcpgIljVaLVQYMzxQbc3z
trackSlugES: cms
---

## Layout

La sección [Layout](https://help.vtex.com/es/subcategory/layout--2g6LxtasS4iSeGEqeYUuGW) te permite crear tu storefront con HTML y CSS. Se organiza en carpetas y archivos con fines específicos:

![CMS - Layout ES](https://images.ctfassets.net/alneenqid6w5/4YnFtKkC8exlv3vm8VTCqh/b79de6b1ecd88c672cd7f004666e4106/cms-layout-es.png)

- **HTML Templates:** construye el código HTML y los archivos JavaScript y CSS de referencia que se utilizarán en las páginas del sitio web.

- **Shelves Templates:** gestiona las plantillas de estantes, es decir, los componentes responsables de renderizar un grupo de productos en el storefront.

- **Custom Elements:** crea las condiciones necesarias para implementar componentes reutilizables, como los pies de página, en otras partes de la tienda.

- **URL Builder:** redirige las URLs existentes a otras de interés. Esto evitará errores de indexación y ayudará a mantener el posicionamiento SEO.

- **Files Manager:** sube archivos de imagen para el sitio web de tu tienda. Almacena los archivos JavaScript, CSS y de imagen del sitio web. Si deseas utilizar alguno de estos archivos en tu tienda, debes hacer referencia a ellos dentro de la sección **HTML Templates**.

- **Product Cluster (Collections):** crea grupos de productos. Puede utilizarlos para crear páginas de destino de campañas o colecciones de productos que carguen grupos de productos específicos.

- **Sites and Channels:** configura [el binding de tu tienda](https://help.vtex.com/en/tutorial/what-is-binding--4NcN3NJd0IeYccgWCI8O2W) y otros ajustes del License Manager. Para obtener más información, consulta el artículo [Estructura de la carpeta CMS](https://help.vtex.com/en/tutorial/cms-folder-structure--2RdMaJSv4AK4EyscmQuocu).

## Configuración

La sección [Configuración](https://help.vtex.com/es/subcategory/configuracion-de-cms--6kovkwzMRyeOOc2iEC4suM) te permite configurar los ajustes relacionados con el sitio web de tu tienda, como sus metadatos, las etiquetas SEO, los tipos de archivo, etc. 

![CMS - Settings ES](https://images.ctfassets.net/alneenqid6w5/1JFkw9wFlJd5oulogEGDDL/68fd8114fc801d74c45f115716d2a73e/cms-settings-es.png)

La sección **Configuración** está estructurada de la siguiente manera:

- **General:** configuraciones generales relacionadas con los metadatos de la tienda y las opciones de compra, como el título de la página de inicio y la cantidad máxima de SKU en el carrito.
- **SEO:** opciones para personalizar las palabras clave y las meta etiquetas de SEO.
- **Textos de la tienda:** base de datos de variables de texto reutilizables que se muestran en el storefront.
- **Tipos de archivos:** configuraciones relacionadas con los archivos de recursos, como las dimensiones y el tamaño de las imágenes. 
- **Regiones geográficas:** base de datos de las regiones geográficas donde están disponibles los productos de la tienda.

## Estructura de carpetas del CMS Legado 

En VTEX, toda nueva cuenta ya tiene carpetas preinstaladas en su CMS. Sin embargo, algunas de estas son __obligatorias__. 

Es decir, si su tienda no tiene estas carpetas - __con los nombres exactamente iguales__ a los que indicamos en este artículo - tendrá problemas de navegación e indexación.

Las otras carpetas son apenas __sugerencias__ por ser útiles para la mayoría de las tiendas. Pero su ausencia no afecta en absoluto a una cuenta.

En este artículo, hablaremos de todas estas carpetas.

### Carpetas obligatorias

Toda tienda debe tener, sin excepción, las siguientes carpetas en el CMS para asegurar el correcto funcionamiento de la navegación e indexación:
- Búsqueda 
- Categoría
- Departamento
- Login 
- Producto

Vea abajo estas carpetas básicas en el CMS:

![2 1](https://images.ctfassets.net/alneenqid6w5/6jvwsPMcIBTllVekqROlkk/ea2d4a9d0d4cdb8a07dd02a3add4b40b/2_1.png)

Estas carpetas vienen de forma predeterminada en el ambiente de todas las tiendas VTEX.

<div clas="alert alert-warning">
Atención: los nombres de las carpetas obligatorias <strong>no</strong> deben ser alterados.
</div>

Como las carpetas se refieren a páginas dinámicas, sus nombres no aparecen en la navegación del cliente. 

Esto significa que el hecho de que la edición de los nombres sea vetada no afecta al texto final de sus URLs ni, por lo tanto, a la internacionalización de su sitio web.

De esta manera, los nombres de los layouts pueden editarse sin ningún problema.

### Carpetas importantes

Algunas carpetas del CMS no son obligatorias, pero son útiles. Por lo tanto, recomendamos que no las excluya.

Estas son:
- `/account`: cuenta del cliente
- `/account/orders`: pedidos del cliente

Para estas dos carpetas, lo que importa es el control o placeholder que lee su contenido. Sus nombres pueden ser editados libremente.

<div class="">
Tanto <code>/account</code> como <code>/account/orders</code>  son carpetas privadas. Por lo tanto, ambas requieren autenticación. Vea en el artículo <a href="https://help.vtex.com/es/tutorial/exigir-autenticacion-en-paginas-de-la-tienda">Exigir autenticación en páginas de la tienda</a> cómo asegurarse de que están configuradas para solicitar la autenticación del usuario.

</div>

### Carpetas útiles

Hay carpetas que, aunque no son tan importantes como las anteriores, suelen ser útiles para la mayoría de las tiendas. 

Estas son:
- `/sistema/buscavazia`: carpeta donde el usuario es dirigido si la búsqueda no encuentra resultados.
- `/sistema/{codigoHTTP}`: carpeta que renderiza páginas de errores de acuerdo con los códigos de status HTTP, tales como 404 (página no encontrada), 401 (no autorizado) y 500 (error de servidor).
- `/marcas`: carpeta que contiene layouts de páginas de marca, que pueden ser personalizadas con un layout exclusivo. Si no hay layout específico para marcas, estas páginas se renderizarán de la misma manera que la carpeta de búsqueda. Para entender cómo funcionan las páginas de marca, consulte el artículo [Cómo funciona la búsqueda de VTEX](https://help.vtex.com/es/tutorial/como-funciona-la-busqueda-de-vtex).

## Controles nativos de VTEX

Controles son fragmentos de código que puede utilizar en los templates  de su sitio web para realizar acciones específicas.

En VTEX, encontrará una serie de controles nativos para renderizar  diversas funcionalidades. 

Por ejemplo, utilizando el control `<vtex.cmc:productName/>` en una página de producto, el sistema proporcionará el nombre del producto que se mostrará en la pantalla.

Para agregar un control, basta con pegarlo en el código. El resultado será renderizado en la posición del código donde se agregue.

### Lista de controles nativos de VTEX

Puede consultar todos los controles nativos disponibles y sus respectivos usos en el artículo [Lista de controles para templates](https://help.vtex.com/es/tutorial/lista-de-controles-para-templates).

## Referencias
- [Layout](https://help.vtex.com/es/subcategory/layout--2g6LxtasS4iSeGEqeYUuGW)
- [Configuración](https://help.vtex.com/es/subcategory/configuracion-de-cms--6kovkwzMRyeOOc2iEC4suM)
- [Estructura de las carpetas del Layout](https://help.vtex.com/es/tutorial/cms-folder-structure--2RdMaJSv4AK4EyscmQuocu?&utm_source=autocomplete)
- [Lista de controles para plantillas](https://help.vtex.com/es/tutorial/list-of-controls-for-templates--tutorials_563)
- [¿Qué son las plantillas?](https://help.vtex.com/es/tutorial/o-que-sao-templates--4l7BQBYO9ycumsqua2CU88?&utm_source=autocomplete)
- [¿Qué es un sitio web?](https://help.vtex.com/es/tutorial/o-que-e-um-web-site--5sPUdFEv9C02i0MMqqSo0U?&utm_source=autocomplete)
- [¿Qué son los controles?](https://help.vtex.com/es/tutorial/o-que-sao-controles--6e2qsk9zu8IQuyEysKweag?&utm_source=autocomplete)
- [¿Qué son los layouts?](https://help.vtex.com/es/tutorial/o-que-sao-layouts--CckPh00rZIcIUG60y8Gse?&utm_source=autocomplete)
- [¿Qué son los estantes?](https://help.vtex.com/es/tutorial/o-que-sao-prateleiras--28D8d6GFfuAsuAoeWC8eq0?&utm_source=autocomplete)
- [¿Qué es binding?](https://help.vtex.com/es/tutorial/o-que-e-binding--4NcN3NJd0IeYccgWCI8O2W?&utm_source=autocomplete)

## Guías
- **[Crear o editar una plantilla de página](https://help.vtex.com/es/tutorial/como-criar-um-template-de-pagina--frequentlyAskedQuestions_1850):** Aprende a crear plantillas de página. La plantilla de página es un modelo creado para definir una estructura HTML para presentar el contenido de las páginas.

- **[Asociar una plantilla a un layout](https://help.vtex.com/en/tutorial/associando-um-template-a-um-layout--7CkgOHRj7DVbsRxyR8YQrK?&utm_source=autocomplete):** Asocia una plantilla a un layout utilizando la carpeta Sites and Channels.

- **[Gestión de placeholders](https://help.vtex.com/es/tutorial/gerenciandoplaceholders--29Y7r9JqcWIqmGipReGLQI):** Un placeholder es un fragmento de código configurable que atiende a las condiciones establecidas por la tienda. Inserta y configura un placeholder, por ejemplo un banner en tu tienda.

- **[Uso de controles nativos de VTEX](https://help.vtex.com/es/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/7mGkGmo8l6wf4fXJCkWwPi?&utm_source=autocomplete):** Los controles son fragmentos de código que puedes utilizar en las plantillas de tu sitio web para realizar acciones específicas, por ejemplo, un control en una página de producto para mostrar el nombre del producto en la pantalla.

- **[¿Para qué sirve el Control Personalizado?](https://help.vtex.com/es/tutorial/what-is-the-purpose-of-the-customized-control--frequentlyAskedQuestions_627):** Además de los controles nativos de VTEX, puedes crear tus propios controles.

## Controles
- [Lista de controles para templates](https://help.vtex.com/es/tutorial/lista-de-controles-para-templates)
- [Control de búsqueda - fulltextSearchBox](https://help.vtex.com/es/tutorial/controle-de-busca-fulltextsearchbox--tutorials_549?&utm_source=autocomplete)
- [Control de destaque de la colección](https://help.vtex.com/es/tutorial/controle-de-destaque-de-colecao--1tGdb2ndjqy6yWsk2YwKMu?&utm_source=autocomplete)
- [Control de breadcrumbs](https://help.vtex.com/es/tutorial/controle-de-breadcrumb--3qQS5O9XpusAC6oUqSIQMM?&utm_source=autocomplete)
- [Controles de la plantilla de estante](https://help.vtex.com/es/tutorial/controles-do-template-de-prateleira--tutorials_550?&utm_source=autocomplete)
