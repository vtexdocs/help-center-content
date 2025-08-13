---
title: 'Configurar política comercial para marketplace'
id: tutorials_404
status: PUBLISHED
createdAt: 2017-04-27T22:06:38.350Z
updatedAt: 2025-03-27T15:03:39.564Z
publishedAt: 2025-03-27T15:03:39.564Z
firstPublishedAt: 2017-04-27T23:03:23.796Z
contentType: tutorial
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: configuring-a-marketplace-trade-policy
legacySlug: configurar-politica-comercial-para-marketplace
locale: es
subcategoryId: 5AxJjgQO1Uc0kWKMwyi08W
---

En VTEX, las [políticas comerciales](https://help.vtex.com/es/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) agrupan la configuración del catálogo, los precios, las promociones, la logística, la segmentación de clientes y los pagos para diferentes estrategias de venta. Las tiendas que operan como *sellers* establecen políticas comerciales para aplicar condiciones específicas para cada *marketplace* en el que venden productos. 

Vea cómo se pueden configurar las políticas comerciales en los siguientes módulos cuando su tienda opera como *seller*.

- [Configuración de la tienda](#configuracion-de-la-tienda)  
- [Gestión de pedidos](#gestion-de-pedidos)  
- [Promociones](#promociones)  
- [Pagos](#pagos)  
- [Catálogo](#catalogo)  
- [Precios](#precios)  
- [Estrategia de envío](#estrategia-de-envio)  
- [Integraciones](#integraciones)  

Para [contratar políticas comerciales adicionales](https://help.vtex.com/es/tutorial/contratacao-de-politica-comercial-adicional--61vuFOw4yGh6nwSmkLJL1X), póngase en contacto con nuestro equipo de Growth Operations en *[Soporte](https://help.vtex.com/es/support)* seleccionando la opción **Comercial** y el tipo de solicitud `Creación de Política Comercial`.

Por cada política comercial adicional se cobra un valor mensual, independientemente de si se utiliza para la integración con marketplaces certificados, partners, externos o VTEX.

<div class=alert alert-warning> Si se aplica la misma política comercial a un conector certificado y a un conector asociado, no hay exención de tarifas.</div>

## Configuración de la tienda 
La creación de una nueva política comercial es el primer paso para definir las condiciones aplicadas a cada *marketplace* en el que opera un *seller*. Los *sellers* pueden crear múltiples políticas comerciales o pueden aplicar la misma política en más de un *marketplace*. 

Esta configuración se realiza en el módulo «Configuración de la tienda», en la página «Políticas comerciales». Debe crear [una nueva política comercial](https://help.vtex.com/es/tutorial/o-que-e-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE) cuando la configuración de catálogo, precios, promociones, logística y pagos sean diferentes entre los *marketplaces* en que los *sellers* venden sus productos. 

![ES Add Politica comercial](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/trade-policies/trade-policies-settings/configurar-politica-comercial-para-marketplace_1.jpg)

## Gestión de pedidos
Después de crear una política comercial, debe asociarla a cada *marketplace* en que el *seller* venda productos al registrar [afiliados](https://help.vtex.com/es/tutorial/o-que-e-afiliado--4bN3e1YarSEammk2yOeMc0). Así es como los *sellers* identifican la política comercial que opera en cada *marketplace*. Si su tienda vende productos en tres *marketplaces* diferentes, deberá crear tres afiliados, cada uno de los cuales representará un *marketplace*. 

Esto se hace en la página *Configuración* del módulo *Gestión de pedidos* de su tienda al registrar afiliados. Incluso si crea varias, es importante tener en cuenta que solamente se aplicará una política comercial a la vez en el *marketplace*. 

![PT Afiliado](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/trade-policies/trade-policies-settings/configurar-politica-comercial-para-marketplace_2.jpg)

*En el ejemplo anterior, el afiliado «Amazon» está vinculado a la política comercial «1».* 

## Promociones
Los sellers pueden crear promociones con diferentes condiciones para los *marketplaces* en los que venden productos. Al crear una promoción, las políticas comerciales indican en qué *marketplaces* se aplicarán. Si desea crear una promoción para su tienda en un *marketplace* que ofrece una comisión más baja para sus productos, debe indicar la política comercial en la que se aplicará la promoción.

La configuración se realiza en el módulo *Promociones* en todas las [promociones](https://help.vtex.com/es/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/4W2AA8MWwIy80z5UCYw0f9) que su tienda ofrece como *seller*. Para realizar la configuración:

1. Seleccione la política comercial en el campo **Restringir políticas comerciales**. 
2. Configure el origen de las promociones como `Entregado por mí`. 

Si no selecciona ninguna política comercial, la promoción estará disponible en todos los canales de venta.

![ES Promoções Politica Comercial](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/trade-policies/trade-policies-settings/configurar-politica-comercial-para-marketplace_3.jpg)

*En el ejemplo anterior, la promoción solo se aplicará a los pedidos de las políticas comerciales «Marketplace-BRL» y «Argentina-ARS», donde la tienda opera como seller. La promoción no estará disponible en el storefront de VTEX.* 

## Pagos
Los *sellers* que tramitan el pago de las ventas de sus productos en un *marketplace* pueden crear [condiciones especiales](https://help.vtex.com/es/tutorial/condicoes-especiais--tutorials_456) de pago y aplicarlas en *marketplaces* específicos mediante políticas comerciales. Si desea que su tienda ofrezca más opciones de plazos para los pedidos en *marketplaces* asociados, debe crear una condición especial y asociarla a la política comercial vigente en esos *marketplaces*. 

La configuración se realiza en el módulo *Pagos* al [crear una condición especial](https://help.vtex.com/es/tutorial/condicoes-especiais--tutorials_456) y asociarla a las políticas comerciales deseadas. Si no establece ninguna restricción, la política comercial se aplicará a todos los canales de venta. 

![ES Pagamento Politica comercial](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/trade-policies/trade-policies-settings/configurar-politica-comercial-para-marketplace_4.jpg)

*En el ejemplo anterior, el plazo de pago está asociado a la política comercial «Marketplace». Esto hace que la condición de pago esté disponible solo en los canales de venta asociados a esta política comercial.*

## Catálogo 
Los *sellers* pueden restringir la disponibilidad de los productos en su catálogo mediante diferentes políticas comerciales. Así, los *sellers* determinan los productos que venderán en los diferentes *marketplaces* en que operan. Si su tienda vende productos electrónicos y ropa, para vender en un *marketplace* que solo ofrece productos electrónicos, debe segmentar el surtido de productos y excluir la ropa. 

Esta configuración se realiza en el módulo *Catálogo*, al [registrar productos](https://help.vtex.com/es/tutorial/cadastrando-produtos--tutorials_2567) e indicar a qué políticas comerciales estarán vinculados. Si no se establecen restricciones al crear el producto, estará disponible en todas las políticas comerciales. 

> ⚠️ No recomendamos vincular políticas comerciales a colecciones para determinar el surtido de productos, especialmente para los marketplaces fuera de VTEX. Cuando se elimina un producto de la colección de políticas comerciales, el sistema VTEX no notifica al marketplace de esta actualización, lo que hace que el producto continúe disponible en el marketplace.

[![ES Catalogo Politica](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/trade-policies/trade-policies-settings/configurar-politica-comercial-para-marketplace_5.jpg)

*En el ejemplo anterior, el producto solo estará disponible para los canales de venta que utilicen las políticas comerciales «Carrefour» y «Marketplace».* 

## Precios
Los *sellers* pueden definir una estrategia de precios diferente para cada *marketplace* en el que operan. Supongamos que el Marketplace A cobra un 5 % de comisión por los productos del *seller*, y el Marketplace B cobra un 10 %: puede ajustar los precios para compensar la diferencia de *markup*. 

Esta configuración se realiza en el módulo *Precios* mediante políticas comerciales. Al definir los precios de los productos, los *sellers* deben tomar en cuenta que cada política comercial se crea con su propia tabla de precios. Para diferenciar los precios de las políticas comerciales, puede utilizar:

- [Reglas de precio](https://help.vtex.com/es/tutorial/configurar-regra-de-preco-para-politica-comercial--5LQMLwcUcEGCWK6SMI6cEM): para determinar un *markup* para categorías y marcas específicas;
- [Precios fijos](https://help.vtex.com/es/tracks/prices-101--6f8pwCns3PJHqMvQSugNfP/3HxF2u5VwidqnUGnFoKdDy): para diferenciar precios en productos específicos.

![ES Regra de preço](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/trade-policies/trade-policies-settings/configurar-politica-comercial-para-marketplace_6.jpg)

*En el ejemplo anterior, la regla de precios aplicó un *markup* a la política comercial «Marketplace» para los productos de la categoría «Fera-Fashion».* 

## Estrategia de envío

Los *sellers* pueden configurar [rutas logísticas](https://help.vtex.com/es/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx/1xo0jmMDcnAUU5ZOavdQ7M) específicas para cada *marketplace* en el que venden sus productos. Esto significa que hay que vincular una combinación de *stock*, inventario, política de envío (transportadora) y hasta punto de recogida a las diferentes políticas comerciales. Si su tienda proporciona productos del *Stock 1* para el *Marketplace A*, debe crear el vínculo al configurar muelles y *stocks*.

Ambas configuraciones se realizan en el módulo *Estrategia de envío*. Al crear un [muelle](https://help.vtex.com/es/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx/4Rr5XpzAzUPv2Eo9Mh7cEj), debe indicar las políticas comerciales a las que servirá. Esto hace que las políticas de envío que estén asociadas a ese muelle estén disponibles para las políticas comerciales vinculadas. Luego, debe asociar el [stock](https://help.vtex.com/es/tutorial/gerenciar-estoque) deseado a un muelle para que el inventario esté disponible para las políticas comerciales asociadas a ese muelle. 

![ES Doca Politica](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/trade-policies/trade-policies-settings/configurar-politica-comercial-para-marketplace_7.jpg)
*En el ejemplo anterior, el muelle está asociado a la política comercial «Marketplace», que recibirá servicio de la transportadora «Transportadora A».*

![ES Estoque Politica](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/trade-policies/trade-policies-settings/configurar-politica-comercial-para-marketplace_8.jpg)
*En el ejemplo anterior, el stock está asociadao al "Muelle A", por lo que este será el *stock* que utilizarán las políticas comerciales vinculadas al "Muelle A".* 

## Integraciones
Las políticas comerciales también se aplican a todas las integraciones en las que su tienda vende productos. A través de ellas, los *sellers* indican las condiciones de precio, catálogo, promociones, logística, pagos y estrategia de envío estarán disponibles para la venta en la integración con Netshoes, o Google Shopping, por ejemplo. 

Las [integraciones](https://help.vtex.com/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402?&utm_source=autocomplete#vender-em-marketplace) se realizan en la página *Configuración* del módulo *Integraciones*. Cada canal suele requerir condiciones comerciales específicas, aunque es posible que diferentes canales compartan la misma política comercial. 

![ES Integracao Politica](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/trade-policies/trade-policies-settings/configurar-politica-comercial-para-marketplace_9.jpg)
*En el ejemplo anterior, la política comercial «Marketplace» se aplica a la integración con Google Shopping.*

## Sepa más

- [Crear una política comercial](https://help.vtex.com/es/tutorial/o-que-e-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE)  
- [Como funciona una política comercial](https://help.vtex.com/es/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV)  
- [Estratégias de marketplace en VTEX](https://help.vtex.com/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402)
