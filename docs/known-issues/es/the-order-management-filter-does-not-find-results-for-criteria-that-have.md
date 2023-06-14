---
title: '​​El punto de recogida no es visible durante la asociación con la política de envío'
id: 3GcfZkPG9yB3l8Cfd1lVzf
status: PUBLISHED
createdAt: 2021-12-16T19:34:39.907Z
updatedAt: 2022-01-13T19:04:23.643Z
publishedAt: 2022-01-13T19:04:23.643Z
firstPublishedAt: 2021-12-16T19:51:24.285Z
contentType: knownIssue
productTeam: Order Management
author: 30TBnJ838LXSZvdJFlcB8H
tag: Logistics
slug: el-filtro-de-gestion-de-pedidos-no-devuelve-resultados-para-los-criterios
kiStatus: Backlog
internalReference: Zendesk Ticket #353656
---

## Sumario

Después de crear un [punto de recogida](https://help.vtex.com/es/tutorial/configurar-puntos-de-recogida-pickup-points--2R5ClQiwe4KoSQgsuiOw4E), debes vincularlo a una política de envío para que esté disponible para los clientes. Para ello, el campo `Nombres de los puntos de recogida` ([de la política de envío](https://help.vtex.com/es/tutorial/politica-de-envio--tutorials_140)) debe rellenarse con el nombre del punto de recogida registrado. Para rellenarlo, es necesario realizar una búsqueda por el nombre del punto de recogida. Sin embargo, durante la búsqueda, es posible que no se encuentre el punto de recogida cuando haya más de 999 puntos de recogida registrados en la tienda.

Así, es posible que el punto de recogida deseado no aparezca en los resultados de la búsqueda de puntos de recogida en las tiendas que tienen más de 999 puntos de recogida registrados.


## Simulación

Para realizar la simulación, asegúrate de que la tienda tiene más de 999 puntos de recogida registrados.

1. Cree o modifique una [política de envío](https://help.vtex.com/es/tutorial/politica-de-envio--tutorials_140#cadastrar-uma-politica-de-envio):
    1. En la ventana **Asociar puntos de recogida**, busca un punto de recogida en el campo `Nombres de los puntos de recogida`;
    2. Observa que los resultados de los puntos de recogida no contienen el punto de recogida deseado.

## Workaround

<!-- Yay, no errors, warnings, or alerts! -->

Hay dos _workarounds_ para este escenario:

* **Mediante el Admin:** en este caso, es necesario vincular una etiqueta ([tag](https://help.vtex.com/es/tutorial/adding-pickup-points--2R5ClQiwe4KoSQgsuiOw4E#2-link-a-pickup-point-to-a-shipping-policy)) al punto de recogida. Al crear un punto de recogida, utiliza el campo[ tag](https://help.vtex.com/es/tutorial/adding-pickup-points--2R5ClQiwe4KoSQgsuiOw4E#2-link-a-pickup-point-to-a-shipping-policy) para añadir el punto de recogida a un grupo. Rellena el campo `Tags de los puntos de recogida` antes de realizar la búsqueda en el campo `Nombres de los puntos de recogida`.
* **Mediante API:** es posible asociar el punto de recogida a una política de envío utilizando la API [Update Shipping Policy](https://developers.vtex.com/vtex-rest-api/reference/shipping-policies#put_logistics-pvt-shipping-policies-id).
    1. Utiliza **[GET](https://developers.vtex.com/vtex-rest-api/reference/shipping-policies#get_logistics-pvt-shipping-policies-id)** para consultar la configuración de la política de envío;
    2. Sustituye el campo `DeliveryChannel: delivery` por `deliveryChannel`: `pickup-in-point`;
    3. En el objeto `pickupPointsSettings`, añade el[ ID del punto de recogida](https://developers.vtex.com/vtex-rest-api/reference/pickup-points-1) en el campo `PickupPointIds`.


