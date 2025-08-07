---
title: '¿Qué es una cuenta franquicia?'
id: kWQC6RkFSCUFGgY5gSjdl
status: PUBLISHED
createdAt: 2021-10-13T20:38:07.014Z
updatedAt: 2024-05-24T16:38:26.710Z
publishedAt: 2024-05-24T16:38:26.710Z
firstPublishedAt: 2021-10-13T20:57:01.457Z
contentType: tutorial
productTeam: Shopping
author: 1malnhMX0vPThsaJaZMYm2
slugEN: what-is-a-franchise-account
legacySlug: que-es-una-cuenta-franquicia
locale: es
subcategoryId: 3vhg10rO4MSmy06KeIYMIa
---

En la plataforma VTEX, tienes la opción de registrar tiendas físicas, franquiciados y representantes de tu red como cuentas franquicia. Esta es una forma de ampliar tu estrategia de [Comercio Unificado](https://help.vtex.com/es/tracks/estrategias-de-comercio-unificado--3WGDRRhc3vf1MJb9zGncnv/2LGAiUnHES1enjHsfi8fI3) u _Omnichannel_.

La cuenta franquicia está asociada a una cuenta principal. En el caso de una marca que tenga varias tiendas físicas, franquiciados o representantes, cada uno de ellos puede tener una cuenta franquicia vinculada a la cuenta principal de la marca. Esto les permite entregar los productos vendidos por el ecommerce de la marca.

![diagrama contas v2 - es](//images.ctfassets.net/alneenqid6w5/6KC4yvWh08WZ3DMcGRJS4I/38f2bac55f9150f6049aaa20193aa97e/diagrama_contas_v2_-_es.png)

En este artículo, trataremos los siguientes temas:

- [Características de la cuenta franquicia](#caracteristicas-de-la-cuenta-franquicia)
- [Relación entre la cuenta franquicia y el Seller White Label](#relacion-entre-la-cuenta-franquicia-y-el-seller-white-label)
- [Configuración de la cuenta franquicia](#configuracion-de-la-cuenta-franquicia)
    - [Precios](#precios)
    - [Pagos](#pagos)
- [Solicitar la creación de una cuenta franquicia](#solicitar-la-creacion-de-una-cuenta-franquicia)

## Características de la cuenta franquicia

La cuenta franquicia hereda el **Catálogo** de la cuenta principal, pero tiene su propia **Logística** y realiza su propia **Gestión de pedidos**, para que la tienda física pueda gestionar los pedidos y entregar los productos.

Además, utilizando la cuenta franquicia, puedes gestionar precios y medios de pago o puedes optar por heredarlos de la cuenta principal. Consulta la sección [Configuración](#configuracion-de-la-cuenta-franquicia) para entender las posibilidades de uso.

Una cuenta franquicia no tiene su propio sitio web. Los consumidores navegan directamente en el sitio web de la cuenta principal, que funciona como un _marketplace_ en esta situación. Los datos de los clientes se almacenan en el Master Data de la cuenta principal.

![diagrama admin contas - es](//images.ctfassets.net/alneenqid6w5/226ePm8TzkWPFnTvJj2Sej/b30710b00e3a9a898fe2cd1fb5dd96c5/diagrama_admin_contas_-_es.png)

## Relación entre la cuenta franquicia y el _Seller White Label_

Cada cuenta franquicia opera automáticamente como un _Seller White Label_ de la cuenta principal. Esto significa que cuando el consumidor añade un producto al carrito y simula el costo de envío en la tienda de la cuenta principal, el sistema selecciona automáticamente el _Seller White Label _que tiene ese producto en _stock_ y muestra las formas de entrega de los _sellers _que ofrecen las mejores condiciones. Para saber más sobre el algoritmo de selección de _Sellers White Label_, lee nuestro [artículo](https://help.vtex.com/pt/tutorial/algoritmo-de-selecao-de-sellers-white-label--3MemNQ4pKkWCpMdzI27AHa) sobre el tema.

Los clientes finales no eligen ni tienen visibilidad de la existencia de los _Sellers White Label_ en ningún momento del proceso. En esta lógica, la relación de los consumidores es con la marca (cuenta principal) y no con cada tienda física (cuenta franquicia).

<div class="alert alert-info">
<p>Aunque todas las cuentas franquicia operan como <em>Sellers White Label</em> de la cuenta principal, estos conceptos no significan lo mismo. La cuenta franquicia es un tipo de cuenta, mientras que ser <em>White Label</em> es una propiedad del <em>seller</em>.
<ul>
<li><strong>Cuenta</strong>: puede ser del tipo franquicia o puede ser una cuenta normal.</li>
<li><strong><em>Seller</em></strong>: puede ser del tipo <em>White Label </em>o puede ser del tipo no <em>White Label.</em></li>
</ul>
Como estos conceptos son independientes, <strong>eventualmente</strong> es posible que una cuenta franquicia opere como seller no White Label de un marketplace que no es la cuenta principal.</p>
</div>

## Configuración de la cuenta franquicia

Puedes acceder y hacer configuraciones en los módulos de **[Logística](https://help.vtex.com/es/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx/7k4SWtm3EIvLQ3aGXWC07)**, **[Gestión de pedidos](https://help.vtex.com/es/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa)**, **[Precios](https://help.vtex.com/es/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP)**, **[Pagos](https://help.vtex.com/es/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG)** y **[Tasas y Promociones](https://help.vtex.com/es/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR)** directamente en el Admin de cada una de las cuentas franquicia o utilizando las [API de VTEX](https://developers.vtex.com/vtex-rest-api/reference/get-to-know-vtex-apis).

Para acceder al Admin de cada cuenta franquicia, entre en la URL `{{nombredelacuentafranquicia}}.myvtex.com/admin`, sustituyendo el `{{nombredelacuentafranquicia}}` por el nombre de la cuenta franquicia que desees gestionar.

### Precios

#### Utilizar los precios de la cuenta principal

Para que la cuenta franquicia utilice los precios configurados en la cuenta principal, es necesario seleccionar la opción **Heredar precios de la cuenta padre** en la Configuración del módulo de **Precios** de la cuenta franquicia, como se describe en [este artículo](https://help.vtex.com/es/tutorial/price-configuration--3hbBtCzNUBrj8GaWgCtSWN#configuracoes-gerais-de-precos).

#### Configurar precios propios de la cuenta franquicia

Para configurar precios propios de la cuenta franquicia, es necesario quitar la marca de la casilla **Heredar precios de la cuenta padre** en la Configuración del módulo de **Precios** de la cuenta franquicia, como se describe en [este artículo](https://help.vtex.com/es/tutorial/price-configuration--3hbBtCzNUBrj8GaWgCtSWN). Además, es necesario configurar los precios deseados en el [módulo de Precios](https://help.vtex.com/es/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP) o mediante la [API de Pricing](https://developers.vtex.com/vtex-rest-api/reference/pricing-api-overview).

Para garantizar una experiencia de compra uniforme, es importante [configurar la regionalización](https://help.vtex.com/pt/tutorial/configurar-a-regionalizacao-de-sellers--32t6wLpQCEnumoh8TjT5fw?&utm_source=autocomplete) cuando cada cuenta franquicia tiene precios diferentes.
La adopción de la regionalización posibilita solicitar el código postal del cliente antes de que este inicie la navegación, lo que a su vez permite mostrar los productos y precios correspondientes a la cuenta franquicia antes de continuar al checkout.
Si la regionalización no está activa, puede haber casos en los que el consumidor vea un determinado valor de producto al navegar por la tienda, pero al llegar al checkout e ingresar el código postal se determine que la cuenta franquicia que debe atender el pedido es otra y, por lo tanto, el precio sea diferente.
Esto ocurre porque el catálogo de menor precio es priorizado durante la navegación por la tienda. Sin embargo, en el checkout, si la cuenta franquicia de menor precio no tiene stock disponible, se seleccionará el catálogo de otro seller que tenga stock del producto disponible y se actualizará el precio al valor utilizado por dicho seller.

### Pagos

#### Utilizar los medios de pago de la cuenta principal

El comportamiento predeterminado de la plataforma es que la cuenta franquicia utilice los medios de pago configurados en la cuenta principal.

Una vez que hayas [cambiado esta configuración](#configurar-medios-de-pago-propios-de-la-cuenta-franquicia), si deseas volver al comportamiento predeterminado, debes seguir los pasos que se indican a continuación.

1. Accede a **Configuración** en el módulo de **Gestión de pedidos**.
2. Accede a la pestaña **Afiliados**.
3. Haz clic en el afiliado que representa la cuenta principal, si existe.
4. Quita la marca de la casilla **Utilizar mi medio de pago**.
5. Haz clic en `Guardar`.

#### Configurar medios de pago propios de la cuenta franquicia

VTEX ofrece soluciones de _split_ de pagos que pueden hacer que la distribución de las cuentas por cobrar a los _sellers_ sea automática. Para más información, lee el artículo _[Split de pagos](https://help.vtex.com/es/tutorial/split-de-pagamento--6k5JidhYRUxileNolY2VLx)_.

Existen varios tipos de configuración posibles para los precios y medios de pago relacionados con las cuentas franquicia en VTEX, que se indican a continuación. Puedes elegir la forma de uso que mejor se adecue a tu negocio.

<div class="alert alert-warning">
<p>Si deseas implementar la aplicación VTEX Sales App, es necesario que las tiendas físicas utilicen los medios de pago de la cuenta principal.</p>
</div>

## Solicitar la creación de una cuenta franquicia

Para abrir una cuenta franquicia, póngase en contacto con nuestro equipo de Growth Operations por el [*Soporte*](https://help.vtex.com/es/support) seleccionando la opción **Comercial** y el tipo de solicitud `Creación de Entorno White Label`.

La creación de una cuenta franquicia tiene un costo previsto en su contrato de OMS. Si el costo no está previsto en su contrato, añada esta observación a su solicitud para que se añada una adenda al contrato. 

Los campos deben rellenarse con la siguiente información:

- Email del Usuario Titular
- Nombre de los sellers: compuesto por (Main Vtex Account) + sufijo

Si el número de cuentas es superior a 10, inclúyalas en una tabla adjunta.

## Sepa más

* [Multilevel Omnichannel Inventory](https://help.vtex.com/es/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4)
* [Elegir entre cuenta estándar, cuenta franquicia o Seller Portal](https://help.vtex.com/es/tutorial/escolher-entre-conta-padrao-conta-franquia-ou-seller-portal--4S90HzzhMyZESsHqrnUs78)
