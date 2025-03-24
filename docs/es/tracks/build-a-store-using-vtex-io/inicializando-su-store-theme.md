---
title: 'Inicializando su store theme'
id: 7cL3Qt4Aavm7RWr1UiTlPS
status: ARCHIVED
createdAt: 2019-02-19T19:50:26.133Z
updatedAt: 2020-03-13T21:24:47.109Z
publishedAt: 
firstPublishedAt: 2019-02-19T19:50:29.572Z
contentType: trackArticle
productTeam: VTEX IO
slugEN: initializing-your-store-theme
locale: es
trackId: 5qJr8BIQXAKec9CpBWrTNv
trackSlugES: crear-una-tienda-utilizando-vtex-io
---

Nuestro toolbelt ofrece un comando `init` que puede clonar rápidamente el [repositorio del store theme estándar](https://github.com/vtex-apps/store-theme) en su computadora e iniciar algunas opciones.

Primero, utilizando su terminal, navegue hasta un directorio donde usted desea que su proyecto de tema sea creado. Después, utilice el comando `init`.

```
$ cd Projects
$ vtex init
```


Seleccione `store-theme` y confirme que desea descargar el proyecto template en la carpeta de destino.

Usted recibirá información importante sobre la aplicación, como el vendor, el nombre, el título y la descripción de la app. Utilice el __account name__ de la tienda que está desarrollando como el __vendor__. Esto es importante para que posteriormente pueda publicar correctamente esta aplicación en esta cuenta. Para utilizar los valores predeterminados, simplemente presione Enter.

![store-theme](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/build-a-store-using-vtex-io/inicializando-su-store-theme_1.svg)

## Entendiendo la estructura de la app

Vamos a echar un vistazo a los archivos que se crearon para entender la estructura de esta aplicación. Usted puede navegar en su código con cualquier editor, pero le recomendamos usar el [Visual Studio Code (VSCode)](https://code.visualstudio.com/).

Si tiene el VSCode instalado, simplemente utilice el comando `code .` para abrirlo en su carpeta actual. (Si esto no funciona, siga los pasos de la [guía de configuración del VSCode](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line) para agregar este comando a su variable de ambiente PATH.)

El archivo principal de cualquier aplicación es el `manifest.json`. Él guarda metadatos importantes sobre sus aplicaciones, como vendor, nombre, versión (usamos [versionado semántico](https://semver.org/)), dependencias de apps, builders y policies.

Vamos a echar un vistazo a un ejemplo de archivo manifest y todas sus propiedades:

```json
{
 "vendor": "storecomponents",
 "name": "store-theme",
 "version": "0.1.0",
 "title": "Store Components",
 "description": "Demo for store theme init",
 "builders": {
   "styles": "1.x",
   "store": "0.x"
 },
 "dependencies": {
   "vtex.store": "2.x",
   "vtex.store-header": "2.x",
   "vtex.store-footer": "2.x",
   "vtex.carousel": "2.x",
   "vtex.shelf": "1.x",
   "vtex.product-details": "1.x",
   "vtex.product-kit": "1.x",
   "vtex.search-result": "3.x",
   "vtex.login": "2.x",
   "vtex.my-account": "1.x"
 }
}
```


- __Vendor, Nombre y Versión__: estas tres propiedades componen su __App Id__. Al publicar una aplicación, este es el identificador inmutable para instalar y desinstalar una app. Por ejemplo, podríamos hacer referencia a esta aplicación como `storecomponents.store-theme@0.1.0`.
- __Título y Descripción__: serán utilizados por interfaces de administración, como el Admin de My Apps.
__Builders__: definen qué tipo de código o configuración desea exportar en esta aplicación. Esta app está usando los builders Styles y Store, que afectan, respectivamente, el tema visual y la estructura de layout de una tienda. Hay varios otros builders para casos de uso específicos, como `react`, `messages`, `node`, `graphql`, etc. Usted puede [leer más sobre builders](/es​/faq/que-es-un-builder-del-vtex-io), pero, por ahora, vamos a concentrarnos en esos dos.
__Dependencias__: su app puede depender de ciertas features proporcionadas por otras aplicaciones. Dependencias pueden ser llamadas *en tiempo de ejecución* por su aplicación - por ejemplo, dependiendo de una aplicación que exporte un Schema GraphQL - o se pueden utilizar para __importar dinámicamente código de otra app__. Hablaremos más sobre eso después.

El init del store-theme también creó dos carpetas diferentes, denominadas con base en los builders definidos en el manifest:  __store/__ y __styles/__. Estas serán procesadas por sus respectivos builders, a fin de tener los efectos deseados en su tienda.

<div class="alerta alerta-info">
Tenga en cuenta que el <code>store-theme</code> depende de la <a href="https://github.com/vtex-apps/store">app</a> <code>vtex.store</code> . Esta aplicación declara las configuraciones básicas para tener una tienda en funcionamiento, como interfaces, rutas, configuraciones de tienda y mucho más. Usted puede pensar en ello como parte del VTEX Store Framework. Esta aplicación viene preinstalada en todas las cuentas de VTEX y no se puede desinstalar.
</div>

Vamos a empezar a editar estos archivos pronto. Pero primero, vamos a hacer el link de esta aplicación y verla funcionando.

## Haga el link de su código local al VTEX IO

Linkar su código es el proceso de sincronizar los archivos locales de su computadora con la plataforma VTEX IO y crear una *instalación soft*. Esto no es lo mismo que instalar una aplicación, porque __sólo es posible instalar apps publicadas con una versión fija__. Durante el desarrollo, el número de su versión no refleja el código en su aplicación. Es por eso que usted no puede promover workspaces linkados!__

Durante un "link", todos los cambios realizados en su código se envían automáticamente y se reflejan casi instantáneamente. Si algún cambio no se refleja, usted puede intentar salir (`CTRL-C`) y volver a entrar.

Ejecute `vtex link` y vea que su aplicación de ejemplo se compila y se publica en la cuenta y en el workspace que acaba de crear.

![vtex-link](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/build-a-store-using-vtex-io/inicializando-su-store-theme_2.svg)

<div class="alerta alerta-info">
Recuerde: ejecute <code>vtex whoami</code> para asegurarse de que está en la cuenta correcta y en un workspace de prueba. De lo contrario, el <code>VTEX Toolbelt</code> se queja del link directo con master.
</div>

## Visitando nuestra nueva tienda

Abra su navegador y acceda a:

`https://{{workspace}}-{{account}}.myvtex.com`

Donde `workspace` es el workspace que acaba de crear y account es el nombre de la cuenta de la tienda.

El `{{account}}.myvtex.com` es su dominio privado destinado a probar nuevos workspaces, por lo que pedirá su información de login. Después de iniciar sesión, usted debe ver el tema default de la tienda.

Felicitaciones por hacer el link de su primera app en VTEX IO!

![dreamstore](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/build-a-store-using-vtex-io/inicializando-su-store-theme_3.svg)
