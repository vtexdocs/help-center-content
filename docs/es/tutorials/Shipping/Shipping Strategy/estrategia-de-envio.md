---
title: 'Estrategia de envío'
id: 58vLBDbjYVQzJ6rRc5QNz3
status: PUBLISHED
createdAt: 2021-07-15T17:04:23.563Z
updatedAt: 2024-01-31T15:00:05.216Z
publishedAt: 2024-01-31T15:00:05.216Z
firstPublishedAt: 2021-07-15T17:27:37.590Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: shipping-strategy
locale: es
legacySlug: estrategia-de-envio, cual-es-la-diferencia-entre-inventario-y-muelle
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---

Estrategia de envío es la relación entre stock, muelle y política de envío; es decir, la forma en que se comunican el stock, el muelle y la política de envío definirá la coordinación de la estructura de entrega de los pedidos de la tienda. 

![shipping_strategy_ES](//images.ctfassets.net/alneenqid6w5/1LdEuL3gjF12uwFj4ya6OL/ebc72f36e25bc9e6000d7d0b275bd1be/shipping_strategy_ES.png)

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
   <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <b><a href="https://help.vtex.com/es/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb">Stock</b></a>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">Conjunto de mercancías almacenadas en un depósito o una tienda. Funciona como una herramienta para controlar la disponibilidad de los productos.
            </td>
    </tr>
    <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <b><a href="https://help.vtex.com/es/tutorial/muelles--5DY8xHEjOLYDVL41Urd5qj">Muelle</a></b>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">Lugar de distribución del stock. Funciona como área de almacenamiento para los productos que se van a entregar.
            </td>
    </tr>
    <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <b><a href="https://help.vtex.com/es/tutorial/politica-de-envio--tutorials_140">Política de envío</b></a>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">Conjunto de reglas que definen las opciones y condiciones de envío que se presentarán al consumidor en el momento de la compra. 
            </td>
    </tr>
</table>

## Primeras configuraciones logísticas

Las configuraciones se pueden realizar a través del Admin VTEX o API. Si estás empezando a configurar tu estrategia de envío, sugerimos el siguiente orden de configuración:

| **Tema** | **Configuración en el Admin VTEX** | **Configuración por API** |
| :--- | :--- | :--- |
| 1. [Política de envío](https://help.vtex.com/es/tutorial/politica-de-envio--tutorials_140) | [Crear una política de envío](https://help.vtex.com/es/tutorial/criar-uma-politica-de-envio--66rJO4LKBdyMJOH6Z3dsaT) | [Create shipping policy](https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/shipping-policies) |
| 2. [Almacén](https://help.vtex.com/es/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb) | [Gestionar almacenes](https://help.vtex.com/es/tutorial/gerenciar-estoque--tutorials_137) | [Create/update warehouse](https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/configuration/warehouses) |
| 3. [Muelle](https://help.vtex.com/es/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj) | [Gestionar muelle](https://help.vtex.com/es/tutorial/gerenciar-doca--7K3FultD8I2cuuA6iyGEiW) | [Create/update dock](https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/configuration/docks) |
