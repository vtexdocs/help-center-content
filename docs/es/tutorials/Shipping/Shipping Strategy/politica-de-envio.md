---
title: 'Política de envío'
id: tutorials_140
status: PUBLISHED
createdAt: 2017-04-27T22:17:12.502Z
updatedAt: 2024-11-05T18:11:45.931Z
publishedAt: 2024-11-05T18:11:45.931Z
firstPublishedAt: 2017-04-27T23:00:45.247Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: shipping-policy
locale: es
legacySlug: registrar-una-transportadora, administrar-operador
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---

La [estrategia de envío](https://help.vtex.com/es/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3) en una tienda VTEX engloba las configuraciones [logísticas](https://help.vtex.com/es/tutorial/fulfillment-logistica-vtex--53udnvI5eBy8DKo8FOjMoP) esenciales y define la relación entre los siguientes elementos:

* Política de envío
* [Muelle](https://help.vtex.com/es/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj)
* [Almacén](https://help.vtex.com/es/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb)

La siguiente imagen muestra cómo se relacionan estos conceptos entre sí:

![shipping_strategy_ES](https://images.ctfassets.net/alneenqid6w5/1LdEuL3gjF12uwFj4ya6OL/ebc72f36e25bc9e6000d7d0b275bd1be/shipping_strategy_ES.png)

La **política de envío** es un conjunto de reglas y ajustes que definen las opciones de envío que se mostrarán a los clientes en el checkout. Al [calcular el tiempo de envío](https://help.vtex.com/es/tutorial/como-funciona-o-calculo-de-envio--tutorials_116) del pedido, la plataforma VTEX toma en consideración los ajustes establecidos en las políticas de envío, entre los que destacan:

* [Transportadora](https://help.vtex.com/es/tutorial/transportadoras-na-vtex--7u9duMD5UQa2QQwukAWMcE)
* [Horario laboral de la transportadora](https://help.vtex.com/es/tutorial/horario-de-funcionamento-das-transportadoras--2oGpbInIgdxSWUi3TZjdCS)
* [Feriados](https://help.vtex.com/es/tutorial/cadastrar-feriados--2ItOthSEAoyAmcwsuiO6Yk)
* [Adicionales de envío](https://help.vtex.com/es/tutorial/adicionais-de-frete--2vqGwMn0LabkOHY6zSHYNV)
* [Entrega programada](https://help.vtex.com/es/tutorial/entrega-agendada--22g3HAVCGLFiU7xugShOBi)
* [Puntos de recogida](https://help.vtex.com/es/tutorial/pontos-de-retirada--2fljn6wLjn8M4lJHA6HP3R)

Para más información sobre cómo crear una política de envío, consulta [Crear una política de envío](https://help.vtex.com/es/tutorial/criar-uma-politica-de-envio--66rJO4LKBdyMJOH6Z3dsaT). Para más información sobre gestión, consulta [Gestionar políticas de envío](https://help.vtex.com/es/tutorial/gerenciar-politicas-de-envio--30nynylgbWieimhaMtGTIE).

## Política de envío y plantilla de envío

Cada política de envío está vinculada a una [plantilla de envío](https://help.vtex.com/es/tutorial/planilha-de-frete--tutorials_127), donde se registran detalles como:

* Identificación de la transportadora
* Valor de envío cobrado por la transportadora
* Rangos de códigos postales o [polígonos](https://help.vtex.com/es/tutorial/gerenciar-geolocalizacao--tutorials_138) válidos para envíos

Después de que se vincula la plantilla de envío a la política de envío, los datos pasan a formar parte de tu operación logística en VTEX.

## Primeras configuraciones logísticas

Las configuraciones se pueden realizar a través del Admin VTEX o API. Si estás empezando a configurar tu [estrategia de envío](https://help.vtex.com/es/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3), sugerimos el siguiente orden de configuración:

| **Tema** | **Configuración en el Admin VTEX** | **Configuración por API** |
| :--- | :--- | :--- |
| 1. Política de envío | [Crear una política de envío](https://help.vtex.com/es/tutorial/criar-uma-politica-de-envio--66rJO4LKBdyMJOH6Z3dsaT) | [Create shipping policy](https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/shipping-policies) |
| 2. [Muelle](https://help.vtex.com/es/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj) | [Gestionar muelle](https://help.vtex.com/es/tutorial/gerenciar-doca--7K3FultD8I2cuuA6iyGEiW) | [Create/update dock](https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/configuration/docks) |
| 3. [Almacén](https://help.vtex.com/es/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb) | [Gestionar almacenes](https://help.vtex.com/es/tutorial/gerenciar-estoque--tutorials_137) | [Create/update warehouse](https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/configuration/warehouses) |

