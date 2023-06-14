---
title: 'Configuración inicial de Google Shopping Ads'
id: 4H0V9Z4NkQUiS4y2K0I8IU
status: CHANGED
createdAt: 2018-10-30T22:36:53.918Z
updatedAt: 2020-11-27T19:40:21.348Z
publishedAt: 2020-02-13T15:34:48.598Z
firstPublishedAt: 2018-10-30T22:53:54.339Z
contentType: trackArticle
productTeam: Channels
slug: configuracion-inicial-de-google-shopping-ads
locale: es
trackId: 47kz5PRQPK0IEaqGqiIuA
trackSlugES: como-hacer-campanas-a-traves-de-google-ads
---

Después de instalar el app, vamos a realizar las configuraciones iniciales. Siga el siguiente procedimiento:

1. Abra el app en la barra lateral del Admin, en la sección __"Apps instalados"__;
2. En la interfaz del app, haga clic en __"Comenzar"__.

## Definiendo la tienda que va a utilizar el app

En este paso, se debe configurar qué tienda utilizará el app y para cuál URL los anuncios de Google deben redirigir. Es importante prestar mucha atención en este paso, ya que cualquier configuración incorrecta hará que sus anuncios redirijan a la URL equivocada o que integre productos de la cuenta equivocada.

1. En la opción `Tienda`, seleccione el sub-account que deberá utilizarse para el app;
2. En la opción `URL`, seleccione la URL correspondiente al sitio web de la cuenta que haya elegido en el paso anterior.

<div class="alert alert-warning">
<strong>OBS:</ strong> asegúrese de que la URL elegida es la correcta, ya que las opciones mostrarán cualquier URL que esté registrada en <a href="https://help.vtex.com/es/tutorial/configurando-dominios-no-license-manager?locale=es">sus dominios</a>. <strong>Generalmente la URL usada es que la tiene WWW</strong>.
</div>

## Definiendo la cuenta en Google Merchant Center

El Google Merchant Center (GMC) es la plataforma de Google donde sus productos estarán disponibles para hacer campañas. Es necesario sincronizar los productos que están en su catálogo de VTEX con el GMC. Las campañas de shopping solo se harán para los productos que estén activos y con inventario (disponibilidad) en el GMC.

El app le da dos opciones en cuanto a la cuenta en el GMC. Elija la opción que se adapte a su caso e inicie sesión.

- __Crear nueva:__ el app creará una nueva cuenta en el GMC para usted. Al iniciar sesión, utilice un correo electrónico que tendrá permiso para tener acceso al GMC creado.

Al seleccionar __"Crear nueva"__, es muy importante enseguida [acceder al GMC](https://www.google.com/retail/solutions/merchant-center/) y configurar el logo y los datos de su empresa. Usted debe iniciar sesión con el mismo correo electrónico que definió para esta cuenta. Estos datos se utilizarán para los anuncios de remarketing en display.

- __Asociar existente:__ el app utilizará la cuenta que ya posee en el GMC. Al  momento de iniciar sesión, debe utilizar exactamente el mismo correo electrónico que utiliza en el GMC que desea asociar.

<div class="alert alert-warning">
<strong>OBS:</strong> la URL configurada en el GMC debe ser <strong>exactamente la misma</strong> que fue elegida anteriormente. Inclusive, tomando en cuenta el protocolo (http o https).
</div>

Al seleccionar __"Asociar a un GMC existente"__, luego será necesario definir si la integración de productos con Google se hará a través de VTEX o a través de alguna sincronización externa que usted ya realice.

- __Sincronizar con VTEX:__ el app creará una integración de productos vía API que enviará su catálogo al GMC. Actualizaremos precios e inventarios instantáneamente conforme estos sufran modificaciones en VTEX.

- __Sincronización externa:__ la responsabilidad en cuanto al envío y actualización del feed de productos al GMC no será del app y dependerá exclusivamente del proceso que usted utiliza (sea XML o API).

Recomendamos utilizar la sincronización de VTEX para garantizar un mejor control sobre la integración dentro de la plataforma.

## Definiendo la política comercial

Es necesario definir qué política comercial se utilizará para sus anuncios en Google. Esta definición implicará cuatro aspectos principales: surtido de productos, inventario, precio, sitio web. Es decir, la disponibilidad y los precios de sus productos en determinado canal de ventas estarán completamente basados en la política comercial que usted elija.

En cuanto a la cuestión del sitio web, la política elegida debe ser la misma que se utiliza en el sitio web/tienda que usted determinó en los pasos anteriores. Esto es porque los anuncios de Google redirigen a los usuarios a su sitio web, donde ellos terminarán la compra. De esta manera, si usted utiliza una política comercial en el app diferente a la que utiliza en su sitio web, se está arriesgando a sufrir escenarios con divergencias de precio o inventario, por ejemplo.

Después de seleccionar la política comercial, haga clic en __"Continuar"__. Se le dirigirá a los Términos de Servicio del app.

Después de aceptar los términos, el app entrará en una página de *loading* que puede tardar un poco, pues en este momento está realizando todas las configuraciones elegidas por usted y armando en el GMC. Es necesario esperar un poco y no salir de esta pantalla.

## Definiendo cuenta Google Ads

El siguiente paso es definir una cuenta en Google Ads - plataforma de Google responsable de administrar las campañas de anuncios. En el momento de la integración, VTEX Shopping Ads presenta dos opciones con respecto a la cuenta de Google Ads.

Estas son:

### Asociar existente

En este caso, VTEX Shopping Ads utiliza la cuenta que el usuario ya tiene en Google Ads. Debido a esto, se mantienen tanto las configuraciones de las campañas como la forma de pago.

Ahora, al seleccionar esta opción, el administrador de la tienda  debe iniciar sesión con un correo electrónico que tenga acceso administrativo a la cuenta de Google Ads. A continuación, debe seleccionar el Id de la cuenta que el usuario desea asociar con VTEX Shopping Ads. Finalmente, haga clic en __ "Continuar"__.

### Crear nueva

Aquí VTEX Shopping Ads crea una nueva cuenta en Google Ads. Al seleccionar esta opción, el usuario recibirá un crédito para la creación de sus campañas. Al final del mes, el valor de este crédito que se invirtió en anuncios se incluirá en la mensualidad de VTEX.

En ambos casos, después que el usuario seleccione una opción que se adapte mejor a la realidad de su negocio, VTEX Shopping Ads lo dirigirá a una página de *loading* para completar el proceso de configuración.

<div class="alert alert-danger">
El usuario no puede salir de la página de <em>loading</em> hasta que se completen todas las configuraciones. De lo contrario, la integración no se realizará.
</div>

*__¡Listo!__ Después que VTEX Shopping Ads termine este loading, puede comenzar a usarlo y crear una campaña. ¡Vea en el siguiente paso!*
