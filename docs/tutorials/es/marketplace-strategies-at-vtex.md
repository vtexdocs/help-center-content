---
title: Estrategias de marketplace en VTEX
id: tutorials_402
status: PUBLISHED
createdAt: 2017-04-27T22:06:47.209Z
updatedAt: 2023-04-20T20:53:42.948Z
publishedAt: 2023-04-20T20:53:42.948Z
firstPublishedAt: 2017-04-27T23:03:23.819Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slug: estrategias-de-marketplace-en-vtex
legacySlug: integrando-con-marketplace
subcategory: 4uqMnZjwBO04uWgCom8QiA
---

Un _marketplace_ es una plataforma virtual a través de la cual diferentes vendedores anuncian sus productos. Estos vendedores se denominan _sellers_; y, además de ser propietarios de los productos, son responsables por la entrega del producto al comprador.

<img src="https://drive.google.com/uc?export=download&id=1qT3lLaKflfnWyHknf7IgjNbRNCki9FuQ"/>

[VTEX promueve la colaboración digital](https://vtex.com/ar-es/marketplace/) en diferentes escenarios. Usted no solo puede vender sus productos en otros _marketplaces_, sino que también puede vender productos de otros _sellers_ en su ambiente, convirtiéndose en un _marketplace_.

Además, VTEX permite gestionar todo desde un solo lugar mediante el concepto que llamamos «dashboard único». A través de la gestión unificada, puedes controlar el catálogo, precio, stock de tu B2C y varios canales para los que VTEX ofrece integración.

Algunas de las principales operaciones relacionadas con la venta de productos en los _marketplaces_ son:

- Control de_ stock_ en los múltiples canales.
- Sincronización de promociones.
- Procesamiento de pedidos.  
- Gestión de los canales.

En VTEX, no hay ninguna tarifa adicional para la integración con los _marketplaces_. Tampoco hay ningún costo adicional para que una tienda VTEX anuncie productos de otros _sellers_ en su ambiente, o venda sus productos en otra tienda VTEX.

<div class="alert alert-info">
Los pedidos aprobados en los <i/>marketplaces</i> están sujetos a las mismas <a href="https://help.vtex.com/es/tutorial/o-que-a-vtex-considera-como-receita-para-apuracao--58j4cfoXfisWyemASACwSq?locale=pt">normas contractuales</a> de los pedidos realizados a través de otros canales.
</div>

El surtido de productos enviados a un _marketplace_ se define al elegir su [política comercial](https://help.vtex.com/es/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV). Para [contratar políticas comerciales adicionales](https://help.vtex.com/es/tutorial/contratacao-de-politica-comercial-adicional--61vuFOw4yGh6nwSmkLJL1X), póngase en contacto con nuestro equipo de Growth Operations en *[Soporte](https://help.vtex.com/es/support)* seleccionando la opción **Comercial** y el tipo de solicitud `Creación de Política Comercial`.

La contratación de políticas comerciales adicionales para integración con un conector certificado, un conector partner u otras tiendas VTEX está exenta de la cuota mensual.

A continuación, abordaremos los siguientes escenarios:

- [Vender en un marketplace](#vender-en-un-marketplace)
- [Actuar como un _marketplace_](#actuar-como-un-marketplace)

## Vender en un marketplace

Los _marketplaces_ son espacios de venta donde los _sellers_ anuncian sus productos. Hay varias razones por las que vender en un _marketplace_ puede ser una ventaja estratégica, algunas de las principales son:

- **Visibilidad de su tienda:** la centralización de diversos _sellers_ y una gran variedad de productos en un _marketplace_ atrae un tráfico de usuarios elevado, y al anunciar sus productos en diferentes canales, usted permite que su marca gane visibilidad y sea conocida por nuevos públicos.
- **Bajo costo:** cada _marketplace_ tiene sus propias contrapartidas financieras, la más practicada es el cobro de una comisión sobre las ventas. Es decir, si su tienda no vende, no tiene que pagar ninguna tarifa.
- **Aumento de las ventas:** la estrategia de actuar en múltiples canales diversifica su fuente de ingresos y aumenta las oportunidades de conversión.
- **Diversificación de nicho:** usted puede definir un surtido de productos específico para cada _marketplace_ y, a partir de eso, crear estrategias de validación de mercado o realizar ventas de temporada.
- **Valor agregado al producto:** si el público no está familiarizado con su marca, resulta especialmente ventajoso aprovechar la relación de confianza que un _marketplace_ construyó con el cliente. Esto agrega valor a su producto y aumenta sus oportunidades de conversión.

En VTEX, usted puede vender en otros canales en las siguientes situaciones:

- [Como seller VTEX](https://help.vtex.com/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#como-seller-vtex)
- [Integrado con un Marketplace certificado](#integrado-con-un-marketplace-certificado)
- [Integrado con un Marketplace partner](#integrado-con-un-marketplace-partner)
- [Integrado con un marketplace externo](https://help.vtex.com/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-con-un-marketplace-externo)

<div class="alert alert-info">
Una tienda VTEX puede actuar simultáneamente como <a href="https://help.vtex.com/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#como-seller-vtex">seller VTEX</a> e <a href="https://help.vtex.com/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#ser-un-marketplace-vtex">marketplace VTEX</a>.
</div>

<div class = "alert alert-info">
La plataforma VTEX tiene diferentes funcionalidades de fulfillment, que se pueden combinar para escenarios como el <i>dropshipping</i>, cuando el seller recibe y envía el pedido del cliente a un tercero, que estará a cargo del fulfillment. La solución <a href="https://help.vtex.com/es/tutorial/logistica--53udnvI5eBy8DKo8FOjMoP">logística</a> más adecuada para el seller dependerá de la arquitectura y su modelo de negocio, y puede realizarse a través de la <a href="https://developers.vtex.com/vtex-rest-api/docs/erp-integration-guide">integración de Back office (ERP/PIM/WMS)</a>.
</div>

### Como seller VTEX

La arquitectura de VTEX permite que una tienda hospedada en su ambiente pueda anunciar sus productos en otras tiendas VTEX. Cuando una tienda VTEX vende sus productos en otra tienda VTEX, se denomina _seller_ VTEX. Más adelante veremos más información sobre una tienda que actúa como un [marketplace VTEX](https://help.vtex.com/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#ser-un-marketplace-vtex), es decir, un ambiente que anuncia los productos de los sellers VTEX.

La configuración de la [integración entre tiendas VTEX](https://help.vtex.com/es/tutorial/configurar-seller-para-vender-em-marketplace-vtex--6g045OkRSjNpqhkExbQRlP) es sencilla y prescinde de algunos de los pasos requeridos en otras integraciones. Además, puede utilizar la página __Marketplaces e integraciones__, que reúne una especie de catálogo de interesados en alianzas, lo que facilita el contacto entre los _sellers_, _marketplaces_ de VTEX y conectores certificados (partners).

[Seller Portal](https://help.vtex.com/es/tutorial/seller-portal-primeiros-passos--6w1vBdRH2uuBGmUqgNQjwK) es una edición de la plataforma VTEX destinada a que los sellers se conecten y vendan sus productos en los marketplaces hospedados en VTEX. Con el portal, los sellers acceden a todas las funcionalidades esenciales para la operación del ecommerce en grandes vitrinas, aportando visibilidad y conversión de ventas.

<div class = "alert alert-info">
En VTEX, es posible actuar como un <a href="https://help.vtex.com/es/tutorial/definicoes-de-conta-franquia-e-seller-white-label--5orlGHyDHGAYciQ64oEgKa">seller white label</a>, un seller no identificado por el consumidor en la experiencia de compra. Este tipo de seller es el estándar para las <a href="https://help.vtex.com/es/tutorial/what-is-a-franchise-account--kWQC6RkFSCUFGgY5gSjdl">cuentas franquicia</a>, por ejemplo, y puede ser estratégico para determinados modelos de negocio. Para más información, consulte el artículo <a href="https://help.vtex.com/es/tutorial/escolher-entre-conta-padrao-conta-franquia-ou-seller-portal--4S90HzzhMyZESsHqrnUs78">Elegir entre cuenta estándar, cuenta franquicia o Seller Portal</a>.
</div>

### Integrado con un Marketplace certificado

Existen _marketplaces_ de actuación nacional e internacional que son excelentes espacios para que promueva sus productos y potencie sus ventas. VTEX desarrolló sus propios conectores para la integración con algunos de los principales _marketplaces_, como Amazon, B2W y Magazine Luiza.

En la actualidad, la plataforma VTEX cuenta con los siguientes conectores certificados:

- [Amazon](https://help.vtex.com/es/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP)  
- [Mercado Livre](https://help.vtex.com/es/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq)
- [Magazine Luiza](https://help.vtex.com/es/tracks/configurar-integracao-com-o-magazine-luiza--5Yx5IrNa7Y48c6aSC8wu2Y)
- [Carrefour](https://help.vtex.com/es/tracks/configurar-integracao-com-o-carrefour--2wYlj07cNuA8k8mmwY86K2)
- [Centauro](https://help.vtex.com/es/tracks/integracao-com-a-centauro--D8Qnjbr5lfLkUfMRhsfbj)
- [Facebook](https://help.vtex.com/es/tracks/integracao-com-o-facebook--7h8KvIC4DbRRc8VlyJ8PFc)
- [Google Shopping](https://help.vtex.com/es/tracks/configurar-integracao-com-o-google-shopping--25Sl7iOqq58PGfVfTAo8Xw)
- [Google Shopping Ads](https://help.vtex.com/es/tracks/como-fazer-campanhas-atraves-do-google-ads--47kz5PRQPK0IEaqGqiIuA)  
- [Dafiti](https://help.vtex.com/es/tracks/configurar-integracao-da-dafiti--4wF4RBx9ygEkimW6SsKw8i)
- [Netshoes](https://help.vtex.com/es/tracks/configurar-integracao-da-netshoes--5Ua87lhFg4m0kEcuyqmcCm)
- [Tik Tok](https://help.vtex.com/es/tracks/integracao-com-o-tiktok--1r0yJSO11nrer1YVu3WTFd)
- - [CSU (Opte+)](https://help.vtex.com/es/tutorial/integrando-com-csu-opte-2--tutorials_4258)
- Zoom
- Kabum
- GPA
- MadeiraMadeira
- Riachuelo
- Camicado
- Renner
- Loopi
- GrupoLTM
- TudoAzul
- Webcontinental
- Farfetch

<div class="alert alert-info">
  Aunque Facebook, Google Shopping, Google Shopping Ads y TikTok no son <i>marketplaces</i>, incluimos sus conectores en esta lista porque ofrecen una experiencia similar de envío de productos desde las tiendas VTEX.
</div>  

Para realizar la integración del conector, puedes obtener ayuda en el material que guía el proceso de configuración y también, como cliente VTEX, tienes a tu disposición nuestro soporte en caso de dificultades.

Para obtener información sobre cómo un _marketplace_ externo se puede unir al [plan comercial](https://vtex.com/ar-es/partner/) y obtener la certificación de partner, consulte el artículo [Convertirse en un conector certificado (partner)](https://help.vtex.com/es/tutorial/tornar-se-um-conector-certificado-parceiro--66mnclLFVFolMBGNtZbKzt).

### Integrado con un Marketplace partner

Hay integraciones externas que fueron desarrolladas en conjunto con hubs partners. 

- Americanas
- Via Varejo
- Shopee
- [Wish](https://help.vtex.com/es/tracks/integracao-com-a-wish--50hbG4bzhSIhjz1lzqI1g4)  
- Olist
- Conecta Lá
- Anymarket
- TudoAzul
- Easy Live
- Mimo
- Wap Store
- Plugg.to
- Fast Shop
- Hubplus

### Integrado con un marketplace externo

En caso de que su tienda desee vender en un _marketplace_ que no tiene conexión con VTEX, puede desarrollar un conector personalizado para la integración. VTEX proporciona un conjunto de API e instrucciones para facilitar el proceso. Para saber más, consulte la [guía de integración con marketplaces externos](https://developers.vtex.com/vtex-developer-docs/docs/external-marketplace-integration-guide).

## Actuar como un marketplace

Además de los beneficios descritos en el contexto de la venta en un _marketplace_, existe la posibilidad de que su tienda sea el ambiente donde los _sellers_ anuncian sus productos. Algunas de las principales ventajas de actuar como un _marketplace_ son:

- **Aumento de los ingresos:** hay diferentes formas de monetización en un _marketplace_, la más común es recibir una comisión sobre las ventas realizadas en su ambiente. 
- **Mayor surtido de productos:** hay un aumento en la variedad de productos ofrecidos en su tienda.
- **Alcance de nuevos clientes:** los _sellers_ atraen a nuevos clientes al _marketplace_ y promueven así un mayor alcance de mercado y más visibilidad para su marca.
- **Mejora de la experiencia de compra:** al diversificar y ampliar su variedad de productos, usted proporciona una experiencia completa al cliente. Este puede comprar todo lo que necesita en un solo lugar _(one-stop-shop)_.
- **Bajo costo:** el proceso de colaboración no representa un aumento en sus costos. Es un modelo escalable que no requiere inversiones en áreas como _stock_, estructura o equipo, porque la entrega de los productos es responsabilidad de los _sellers_.
- **Valorización de la reputación de su marca:** si su tienda es reconocida en el mercado, significa que los productos ofrecidos en su ambiente cuentan con la confianza de los clientes. Usted puede aumentar sus lucros ofreciendo a los _sellers_ un valor agregado para sus productos.

Una tienda VTEX puede vender productos de otros _sellers_ en los siguientes casos:

- [Ser un marketplace VTEX](#ser-un-marketplace-vtex)
- [Integrado con un seller externo](#integrado-con-un-seller-externo)

### Ser un marketplace VTEX

La arquitectura de VTEX permite que las tiendas hospedadas en su plataforma anuncien productos de otras tiendas, tanto de VTEX como externas. Cuando una tienda VTEX comienza a vender productos de los _sellers_, se convierte en un marketplace VTEX.

La [configuración de marketplaces VTEX](https://help.vtex.com/pt/tutorial/configurar-marketplace-vtex--7splyp5MqIyt2Iyz5jsNzb) es sencilla y prescinde de algunos de los pasos necesarios en otras integraciones. Una vez hecha la configuración necesária, sepa más en [Acciones para la operación de marketplaces VTEX](https://help.vtex.com/es/tutorial/acoes-para-a-operacao-de-marketplaces-vtex--2SdIflvwywiOqCpczKCfev#gerenciar-pedidos).

Además, existe una página denominada __Marketplaces e integraciones__, que promueve y facilita el contacto entre los _marketplaces_ y _sellers_ de VTEX y los conectores certificados interesados en las colaboraciones.

### Integrado con un seller externo

Es posible que un _seller_ que no está integrado con VTEX quiera vender productos en un marketplace VTEX. En este caso, ellos podrían desarrollar un conector personalizado para esta integración. VTEX proporciona un conjunto de APIs e instrucciones para facilitar el proceso. Vea más información en la [guía de integración con sellers externos](https://developers.vtex.com/vtex-developer-docs/docs/external-seller-integration-guide).
