---
title: 'Registrar un inventario'
id: 3mlfDHjikOgUna1SS2Nr1Y
status: ARCHIVED
createdAt: 2019-08-21T13:46:49.042Z
updatedAt: 2022-03-08T18:42:46.857Z
publishedAt: 
firstPublishedAt: 2019-10-21T12:48:16.576Z
contentType: trackArticle
productTeam: Post-purchase
slugEN: adding-warehouses
locale: es
trackId: 13TFDwDttPl9ki9OXQhyjx
trackSlugES: logistica-101
---

Hay dos formas de registrar un inventario:  

- Por Admin
- Por API REST

Siga el siguiente procedimiento para registrar un inventario en su tienda:  

## Admin

1. Haga clic en **Inventario y Envío**
2. Haga clic en la sección **Estratégia de Envío**
3. Haga clic en el botón **Nuevo Inventario**
4. Rellene los campos del formulario de inventario. Para entender mejor el significado de cada campo, consulte abajo la sección [Campos de Registro](#campos-de-registro).
5. Haga clic en el botón **Guardar**

![ES Cadastrar Estoque GIF](https://images.ctfassets.net/alneenqid6w5/29hDNueQOJgRlg6rLIk8T5/ee2fba7fcb9da60690df299825e0cdef/ES_Cadastrar_Estoque_GIF.gif)

### Campos de registro

- _ID (Opcional):_ campo identificador del inventario. Si no se rellena, se creará automáticamente un valor para este campo.

- _Nombre:_ nombre del inventario.

- _Entregando a partir de_: muelles que consumirán el inventario respectivo. Puede seleccionar más de un muelle, indicando el costo y el tiempo de costo para cada uno de ellos. Seleccione el _muelle_ y haga clic en el botón __Incluir__.

## API REST

>⚠️ Las autenticaciones para las llamadas de API REST del módulo de Inventario y Envío  deben realizarse a través de AppKey y AppToken. Para entender más, acceda a  nuestro artículo sobre [cómo generar un Appkey y un AppToken para autenticar sus integraciones](https://help.vtex.com/es/tutorial/crear-appkey-y-apptoken-para-autenticar-las-integraciones--43tQeyQJgAKGEuCqQKAOI2)

Para registrar un **Inventario** por API, debe enviar un __POST__ para el siguiente  endpoint:

`https://logistics.{{environment}}.com.br/api/logistics/pvt/configuration/warehouses?an={{accountName}}`

- El objeto del request tiene las siguientes propiedades:

| __Propiedades__ | __Tipos__ |__Descripción__|
|------------------|-----------|-------------|
| id| string| ID del inventario
| name| string| Nombre del inventario|
| warehouseDocks| array| Muelle vinculado al inventario (ítems del array descritos abajo. Verifique el ejemplo de body)
| dockId| string| Identificación del muelle |
| name| string| Seleccionar nombre del muelle |
| time| string| Tiempo de procesamiento (en días) |
| cost| float| Costo|
| translateDays| string| Determinar rango temporal |
| costToDisplay| string| Costo para mostrar |

A continuación se muestra un ejemplo de Header y un posible ejemplo de Body  para pasarse en el request.

### Headers

| Header| Value |
|------------------|-----------|
| Accept |   application/json |
| Content-Type |   application/json; charset=utf-8 |
| X-VTEX-API-AppKey | {{X-VTEX-API-AppKey}} |
| X-VTEX-API-AppToken | {{X-VTEX-API-AppToken}} |

### Body - Ejemplo

```json
{
  "id": "15bfc76",
  "name": "Inventario Principal",
  "warehouseDocks": [
    {
      "dockId": "1a8bce3",
      "name": "Centro de Distribución Principal",
      "time": "3.00:00:00",
      "cost": "5.00",
      "translateDays": "días",
      "costToDisplay": "5,00"
    }
  ]
}
```

