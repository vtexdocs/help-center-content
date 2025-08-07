---
title: 'Configuración de la plataforma VTEX'
id: 37hdzaRUhJqRfXH1bIRXAa
status: PUBLISHED
createdAt: 2019-02-28T23:02:24.211Z
updatedAt: 2025-01-09T15:52:41.921Z
publishedAt: 2025-01-09T15:52:41.921Z
firstPublishedAt: 2019-02-28T23:11:20.994Z
contentType: trackArticle
productTeam: Channels
slugEN: vtex-platform-settings
locale: es
trackId: 6sgd4Pagy3wNsWKBvmIFrP
trackSlugEN: integracion-de-amazon
---

Una vez realizada la configuración en la plataforma de Amazon, iniciaremos la configuración en la plataforma VTEX.

Durante todo el proceso de configuración en la plataforma VTEX, tenga siempre a mano las credenciales e identificadores proporcionados. El [ID del vendedor y el token de autorización MWS](https://help.vtex.com/es/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/43L0dpbjLBz6tcim1BbTzf), por ejemplo, son necesarios para configurar la integración dentro de la plataforma VTEX.

## Definir la política comercial en Amazon

En VTEX, la [política comercial](https://help.vtex.com/es/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) es lo que determina el surtido de productos, los precios y la estrategia de envío en un canal de venta. Es decir, a través de la política comercial se puede definir la configuración que se aplicará a sus productos en Amazon.

Si se utiliza la misma configuración de catálogo, precio y estrategia de envío de su tienda VTEX en Amazon, no es necesario [crear una nueva política comercial](https://help.vtex.com/es/tutorial/o-que-e-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE). Se puede utilizar la misma política comercial para diferentes canales de venta.

Solo tendrá que [configurar una política comercial](https://help.vtex.com/pt/tutorial/configurando-a-politica-comercial-para-marketplace--tutorials_404) de marketplace específica si tiene alguno de los siguientes objetivos:

- Ofrecer una selección diferente de productos en Amazon.
- Proporcionar una cantidad de stock diferente.
- Enviar precios diferentes a Amazon.
- Enviar promociones diferentes a Amazon.
- Configurar otras condiciones de pago.
- Definir una estrategia de envío diferente.

Para [contratar políticas comerciales adicionales](https://help.vtex.com/es/tutorial/contratacao-de-politica-comercial-adicional--61vuFOw4yGh6nwSmkLJL1X), solo tiene que rellenar el [formulario de política comercial adicional](https://docs.google.com/forms/d/e/1FAIpQLSe9qCGB_KM_xsV5e9uNe06JE8tMZrWcv6EuHUOmqTiM8oRW7w/viewform). Si tiene alguna duda, póngase en contacto con nuestro equipo de Growth Operations en *[Soporte](https://help.vtex.com/es/support)* seleccionando la opción **Comercial** y el tipo de solicitud `Creación de Política Comercial`.

Por cada política comercial adicional se cobra una tarifa mensual, ya sea que se utilice para integración con marketplaces certificados, socios, externos o VTEX.

## Definir la Estrategia de Envío

Para vender sus productos en Amazon necesita determinar una [Estrategia de Envío](https://help.vtex.com/es/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3?&utm_source=autocomplete), es decir, informar cuál será la logística de entrega de sus productos. La Estrategia de Envío se compone de tres etapas logísticas: [Política de Envío](https://help.vtex.com/es/tutorial/politica-de-envio--tutorials_140), [Almacén](https://help.vtex.com/es/tutorial/o-que-e-um-estoque--23kq5gUdY0QOymOu8QSGcA) y [Muelle](https://help.vtex.com/es/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx/4Rr5XpzAzUPv2Eo9Mh7cEj?&utm_source=autocomplete). 

La Política de Envío (transportadora) se asocia al Almacén de su tienda a través del Muelle. El muelle es el punto intermedio y donde se establecen las condiciones entre la transportadora y el almacenaje de su tienda.

Si desea utilizar la misma Estrategia de Envío definida para su tienda VTEX en la integración con Amazon, no es necesario crear nuevas configuraciones logísticas. Sin embargo, si desea crear una Estrategia de Envío específica para el marketplace, deberá realizar los siguientes pasos:

1. [Registrar la Política de envío](https://help.vtex.com/es/tutorial/politica-de-envio--tutorials_140#cadastrar-uma-politica-de-envio) asociada a la política comercial utilizada en la integración.
2. [Registrar el Muelle](https://help.vtex.com/es/tutorial/como-cadastrar-doca--7K3FultD8I2cuuA6iyGEiW) asociado a la política comercial utilizada en la integración.
3. [Registrar el Almacén](https://help.vtex.com/es/tutorial/gerenciar-estoque--tutorials_137) asociado al Muelle creado en el paso anterior.

Si desea comprobar si la configuración se ha realizado correctamente, puede realizar una [simulación de envío](https://help.vtex.com/es/tutorial/simulacao-de-frete--tutorials_144). El simulador de envío es una herramienta que permite consultar las condiciones de entrega del producto sin necesidad de crear un pedido.

<div class="alert alert-info">
Amazon selecciona el tipo de envío a partir de la <a href="https://help.vtex.com/es/tutorial/como-montar-a-planilha-de-frete--tutorials_127">plantilla</a> que el administrador de la tienda <a href="https://help.vtex.com/pt/tutorial/importando-e-exportando-planilha-de-estoque--tutorials_2034">exporta</a>. Por lo tanto, es importante que la plantilla que el administrador de la tienda exporta esté alineada con la plantilla registrada en VTEX, de modo que se reduzca la posibilidad de divergencias.
</div>

### Tiempo de procesamiento

En Amazon hay el campo *“fulfillment latency”*, que se utiliza para configurar el tiempo de preparación de la entrega de un determinado producto. Para utilizarlo en la configuración con Amazon, debe rellenar el campo **Tiempo de Procesamiento** en el [registro del muelle](https://help.vtex.com/es/tutorial/como-cadastrar-doca) asociado a la [política comercial](#definir-la-política-comercial-en-amazon) utilizada para Amazon. Si este campo no se rellena, Amazon utilizará su valor por defecto (2 días).

<div class="alert alert-warning">
Filling in this field is essential, because if your store delays the delivery of an order, your account may be blocked. 
</div>
