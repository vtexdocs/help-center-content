---
title: Pagos - Visión General
id: tutorials_458
status: DRAFT
createdAt: 2017-04-27T22:03:42.658Z
updatedAt: 2023-03-30T15:13:19.482Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:26.882Z
contentType: tutorial
productTeam: Financial
author: authors_84
slug: pci-gateway-vision-general
legacySlug: pci-gateway-vision-general
subcategory: 2Xay1NOZKE2CSqKMwckOm8
---

**Pagos** es el módulo responsable por intermediar y gestionar todas las transacciones y pagos entre su tienda VTEX, operadoras financieras y sus clientes. En él usted hace consultas como status de las transacciones, extornos, cancelaciones, liquidaciones y también configuraciones como condiciones para las formas de pago.

![new-admin-pagos](https://images.ctfassets.net/alneenqid6w5/CPFZboq2pqOUSI0CAuQgW/bb254d7dd631b1983cb4fb6e7d01f244/NEW_ADMIN_PAGAMENTOS_ES.png)

# Empezando a usar

Creado para ofrecer la flexibilidad máxima con relación a las configuraciones de pago, el VTEX Pagos procesa las transacciones en base a algunos conceptos de negocio. Comprenda cada uno de ellos:

## Transacciones

Todos los Pedidos, en que el pago es negociado por VTEX, mismo que haya error en su cierre, son registrados en el Pagos.

En su interface principal tendremos las transacciones listadas en orden de la más reciente para la más antigua. 

- http://help.vtex.com/es/tutorial/transacciones-pci-gateway/

## Conciliaciones bancarias

Es el local por el cual el tendero aprueba en lote los pagos de los pedidos concluidos con boleto.

Eso es posible a través del upload de un archivo tipo _.RET_ en los formatos CNAB 240 y CNAB 400, que es suministrado diariamente por el banco, conteniendo las informaciones referentes a la identificación del boleto, nuestro número (que es el código del pedido), fecha y valor del pago.

- http://help.vtex.com/es/tutorial/conciliaciones-bancarias/

## Tarjeta de regalo

El vale registrado en **Tarjeta de regalo** es como una opción extra de pago de la tienda; Los vales son configurados con un valor predeterminado en efectivo y utilizados para descuentos en el valor del pedido en la tienda. Ellos pueden o no ser reutilizable, recargable y restricto a un cliente de la tienda en específico.

- http://help.vtex.com/es/tutorial/gift-card

## Configuración

### [Planes de pagos](/es/tutorial/condiciones-de-pago)

Es aquí que el tendero define cuáles serán las formas de pago que se ofrecerán al cliente y las configuraciones de comportamiento de cada una de ellas como, por ejemplo, cuál tarjeta de crédito que ofrecerá determinado número de cuotas con o sin intereses, por un período establecido, respectivo banco emisor, para ser aplicado de acuerdo con una política comercial y/o condición comercial específicas.

No necesariamente todas las formas de pagos estarán configuradas teniendo en cuenta cada una de esas condiciones, pues es personalizable de acuerdo con la necesidad de cada tienda.

### [Pagos personalizados](/es/tutorial/como-configurar-pagamento-personalizado)

Los Medios de pago personalizados permiten que usted cree hasta 15 nuevas formas de pago para configurar una Condición de Pago. O sea, imagine que su tienda quiere ofrecer la opción de pago con dinero como forma de pago. Para utilizarla es necesario configurar uno de los pagos personalizados disponibles.

Esos medios de pago son separados en 3 categorías. Cada categoría permite 5 configuraciones.

### [Afiliaciones de Gateway](/es/tutorial/afiliaciones-de-gateway/)

Una afiliación de gateway es un conjunto de configuraciones que representa su contrato con un gateway de pago de su elección.

Con eso es posible, con mucha flexibilidad, decidir por cuál Gateway de Pago se procesarán los distintos tipos de transacciones de su tienda VTEX.

### [Cuentas alternativas](http://help.vtex.com/es/tutorial/configurar-cuentas-alternativas)

Las cuentas alternativas son una funcionalidad desarrollada para permitir que el pago de los productos entregados por un muelle específico sea enviado a sub-cuentas diferentes.

*La función de Cuentas Alternativas ya no se mantendrá y se descontinuará en breve. Para reemplazarlo, utilice la solución de Cuentas Franquicias y Sellers White Label. Aprenda más sobre el tema en [este artículo del Help](http://help.vtex.com/es/tutorial/configurar-cuentas-alternativas).*

### [Notificaciones](/es/tutorial/como-configurar-notificaciones/)

El área de notificaciones en el módulo de **Pagos** responsable por el catastro del e-mail que recibirá todas las notificaciones de pago, como un extorno que necesita hacerse manualmente, por ejemplo.
