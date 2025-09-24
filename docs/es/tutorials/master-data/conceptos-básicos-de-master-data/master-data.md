---
title: 'Master Data'
id: 4otjBnR27u4WUIciQsmkAw
status: CHANGED
createdAt: 2018-04-02T19:01:38.026Z
updatedAt: 2025-09-02T23:26:45.478Z
publishedAt: 2025-08-29T14:19:54.707Z
firstPublishedAt: 2018-04-02T20:54:18.272Z
contentType: tutorial
productTeam: Master Data
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: master-data
legacySlug: que-es-el-master-data
locale: es
subcategoryId: 1l3IVVYwrrG5YOtdt7R2SN
---

Master Data es una solución de la plataforma VTEX para el banco de datos que no solo permite su personalización, sino también la creación de aplicaciones.

Por defecto, Master Data se usa para almacenar y organizar los datos de los clientes de tu tienda. Cuenta con un potente motor de búsqueda que te permite almacenar, buscar, expandir y personalizar datos.

En este artículo, encontrarás más detalles sobre cada versión disponible de Master Data, así como conceptos importantes y cómo utilizarlo.

> ℹ️ Ten en cuenta que, según la funcionalidad y la versión que desees utilizar, se recomienda ponerse en contacto con el equipo de desarrollo de tu operación.

## Versiones disponibles

Actualmente existen dos versiones disponibles y puedes elegir la que mejor se adapte a las necesidades de tu operación. La principal diferencia entre ambas es que la v2 no incluye interfaz gráfica, por lo que se puede usar solo a través de la [API del Master Data v2](https://developers.vtex.com/docs/api-reference/master-data-api-v2), pero sí tiene otras funcionalidades importantes, por ejemplo, [esquemas JSON](https://developers.vtex.com/docs/guides/starting-to-work-on-master-data-with-json-schema).

> ℹ️ VTEX guarda de forma automática los datos de los clientes de tu tienda en Master Data v1.

En la tabla a continuación, obtendrás más información sobre las diferencias en las funcionalidades de cada versión.

| Funcionalidad             | v1                                                                                                                                                 | v2                                                                                                                                                          | Más información                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Interfaz gráfica           | Sí                                                                                                                                                 | No                                                                                                                                                          | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| API                        | Sí                                                                                                                                                 | Sí                                                                                                                                                          | - [Master Data v1 API](https://developers.vtex.com/docs/api-reference/masterdata-api) <br> - [Master Data v2 API](https://developers.vtex.com/vtex-rest-api/reference/master-data-api-v2-overview)                                                                                                                                                                                                                                                                                |
| Importar y exportar plantillas | Sí                                                                                                                                            | No                                                                                                                                                          | - [Importar datos en Master Data](/es/tutorial/importing-data-into-master-data--tutorials_1135) <br> - [Exportar datos de Master Data](/es/tutorial/exporting-data--tutorials_1125)                                                                                                                                                                                                                                                     |
| Anexos (imágenes)          | Sí                                                                                                                                                 | No                                                                                                                                                          | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Triggers                   | Sí                                                                                                                                                 | Sí                                                                                                                                                          | - [Triggers](#triggers) <br> - [Crear trigger en Master Data v1](/es/tutorial/creating-trigger-in-master-data--tutorials_1270) <br> - [Crear trigger en Master Data v2](https://developers.vtex.com/vtex-rest-api/docs/setting-up-triggers-in-master-data-v2)                                                                                                                                                                                                 |
| Esquemas JSON              | No                                                                                                                                                 | Sí                                                                                                                                                          | - [Esquemas JSON](http://json-schema.org/) <br> - [Qué son los esquemas JSON](https://json-schema.org/understanding-json-schema) <br> - [Empieza a trabajar con los esquemas JSON en Master Data](https://developers.vtex.com/vtex-rest-api/docs/starting-to-work-on-master-data-with-json-schema) <br> - [Ciclo de vida del esquema en Master Data](https://developers.vtex.com/vtex-rest-api/docs/master-data-schema-lifecycle)                                                      |
| Propiedades anidadas       | No                                                                                                                                                 | Sí                                                                                                                                                          | - [Propiedades anidadas](#nested-properties)                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Entidades de datos         | Se nombran con acrónimos compuestos de dos letras mayúsculas. Ejemplo: `CL` almacena los clientes, `AD` los domicilios. No se puede crear con API. | Se los llama por sus nombres, por ejemplo `Notification`. Solo se puede crear con API.                                                                      | - [Entidades de datos](#data-entities) <br> - [Entidades de datos en Master Data v1](/es/tutorial/criando-entidade-de-dados--tutorials_1265) <br> - [Crear relaciones entre entidades de datos de Master Data v2](https://developers.vtex.com/vtex-rest-api/docs/creating-relationships-between-data-entities-using-api)                                                                                                   |
| Campos                     | Se deben rellenar en el formato específico configurado en la entidad de datos.                                                                    | No hay restricción de campos y formatos. La validación del formato se hace a través de los esquemas JSON.                                                   | - [Tipos de campos en Master Data v1](/es/tutorial/criando-entidade-de-dados--tutorials_1265#entendendo-os-tipos) <br> - [Esquemas JSON](#v2-esquemas)                                                                                                                                                                                                                                                               |
| Índices                    | Sí                                                                                                                                                 | Sí                                                                                                                                                          | - [Configurar índices en Master Data v1](/es/tutorial/setting-up-an-index-on-master-data--tutorials_785) <br> - [Configurar índices con la API de Master Data v2](https://developers.vtex.com/vtex-rest-api/reference/putindices)                                                                                                                                                                                                                           |

> ❗ Las entidades de datos de ambas versiones son independientes, aunque algunas pueden ser análogas. Esto significa que un dato creado en una entidad de la v1 no se puede consultar ni editar usando recursos de la v2 y viceversa.

## Componentes básicos

Ambas versiones de Master Data usan algunos componentes básicos que pueden ser iguales a conceptos encontrados en otras soluciones de base de datos con otros nombres, por ejemplo, registro o tabla. A continuación, encontrarás más detalles sobre:

- [Entidades de datos](#entidades-de-datos)
- [Documentos](#documentos)
- [Campos](#campos)
- [Índices](#índices)

### Entidades de datos

Las entidades de datos son como tablas donde se registran documentos y campos.

Se hace referencia a las entidades de datos en Master Data v1 con acrónimos compuestos de dos letras mayúsculas. En la v2 puedes usar el nombre de la entidad de datos. Por ejemplo, en la v1, la entidad `CL` almacena los datos de los clientes de la tienda, y la entidad `AD` guarda datos de los domicilios de los clientes. En la v2, las entidades equivalentes se llaman `Client` y `Address`.

En una entidad de datos, la información se estructura en [documentos] (#documentos) y [campos](#campos).

### Documentos

Los documentos son registros en una entidad de datos. Si las entidades de datos son como tablas, cada documento es una línea dentro de una tabla.

Por ejemplo, se guarda información de un cliente en cada documento almacenado dentro de una entidad (por ejemplo, `CL` o `Client`).

Cada documento tiene un ID que la plataforma genera automáticamente durante la creación; se trata de un código único que identifica a ese registro.

### Campos

Se denomina «campos» a los atributos que componen los documentos de Master Data. Si comparamos las entidades de datos con tablas, podríamos imaginar que los campos son las columnas de la tabla.

Por ejemplo, en una entidad donde se guardan datos de clientes de la tienda, por ejemplo, `CL` o `Client`, podemos rellenar los campos como **nombre**, **email**, **fecha de nacimiento** y **documento**.

En Master Data v1, los campos se deben rellenar en el formato específico configurado en la entidad de datos. Obtén más información sobre los [tipos de campo en Master Data v1](/es/tutorial/criando-entidade-de-dados--tutorials_1265).

En la v2, no hay restricción de campos ni formatos. La validación del formato se hace a través de [esquemas JSON](#v2-schemas).

### Propiedades anidadas

La v2 de Master Data te permite estructurar los datos con propiedades anidadas, una estructura que se suele encontrar en el formato [JSON](https://www.json.org/json-en.html). Este concepto consiste en la posibilidad de crear campos compuestos a partir de otros campos para una mejor estructuración de los datos. Por ejemplo, un perfil de cliente puede tener el campo `Documento` que, a la vez, incluye las propiedades `Tipo` y `Número`. También puedes crear [triggers](#triggers) anidados.

### Índices

Los índices se usan para especificar un documento al que se accederá, indicado con un campo indexado en lugar de su ID.

Como se dijo anteriormente, cada documento tiene un ID que la plataforma genera automáticamente cuando lo crea. Si quieres consultar un documento pero no sabes el ID, puedes usar los índices.

Por ejemplo, puedes consultar un documento con información de un cliente especificando el valor del campo `email` del cliente.

> ℹ️ Obtén más información sobre cómo <a href=/es/tutorial/setting-up-an-index-on-master-data--tutorials_785>configurar índices en Master Data v1</a> o <a href=https://developers.vtex.com/vtex-rest-api/reference/putindices>configurar índices con la API del Master Data v2</a>.

## Triggers

Un trigger del Master Data es un mecanismo que ejecuta una acción después de la creación o actualización de un documento, en caso de que se cumplan las condiciones establecidas en la configuración. Estas acciones pueden ser de tres tipos:
- Enviar una solicitud HTTP.
- Enviar email.
- Guardar documento en otra entidad de datos.

Obtén más información sobre cómo [configurar triggers en el Master Data v1] (/es/tutorial/criando-trigger-no-master-data--tutorials_1270) o cómo [configurar triggers con la API de Master Data v2](https://developers.vtex.com/vtex-rest-api/docs/setting-up-triggers-in-master-data-v2)

## v2 esquemas

Con la v2 de Master Data puedes definir formatos de datos con esquemas JSON. Este formato indica cómo Master Data debe validar e indexar los documentos.

> ℹ️ Obtén más información en <a href=https://json-schema.org/>esquemas JSON</a>.

Puedes guardar un documento en cualquier entidad de datos si el contenido es un JSON válido. Una entidad de datos puede tener asociados o no varios esquemas JSON.

![Master Data schemas](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/master-data/conceptos-b%C3%A1sicos-de-master-data/master-data_1.jpg)

> ℹ️ Un documento puede ser compatible con varios esquemas JSON, o con ninguno.

## Aplicaciones

Ambas versiones de Master Data son extremadamente flexibles, lo cual te permite cubrir diversas necesidades de tu tienda. A continuación, puedes ver algunos ejemplos de cómo se aplican las funcionalidades de Master Data.

### Pruebas A/B

Con los triggers de la v2, puedes establecer varias acciones para un mismo trigger al configurar el porcentaje de carga que debe recibir cada acción. De este modo, puedes hacer pruebas comparativas para medir el impacto de distintas automatizaciones en tu tienda.

Cómo configurar [pruebas A/B con Master Data v2](https://developers.vtex.com/vtex-rest-api/docs/setting-up-an-ab-test-with-master-data-v2-trigger).

### Carrito abandonado

Master Data también puede usarse para crear integraciones de carrito abandonado. Es decir, la realización de acciones automáticas cuando un cliente agrega productos al carrito de tu tienda y termina su sesión sin finalizar la compra.

Para obtener más información, consulta esta guía sobre [configuración de carrito abandonado](/es/tutorial/configurar-carrinho-abandonado--tutorials_740)

