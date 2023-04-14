---
title: "Se descontinuará la entidad de pedidos de Master Data v2"
slug: "2023-11-04-master-data-v2-orders-entity-will-be-depreacted"
createdAt: 2023-04-11T09:18:00.000Z
---

[Master Data v2](https://help.vtex.com/es/tutorial/master-data--4otjBnR27u4WUIciQsmkAw) es una solución de la plataforma VTEX para la base de datos que se puede personalizar fácilmente. Una de sus entidades de datos nativas almacena la información de los pedidos y algunos desarrolladores la utilizan para realizar integraciones de pedidos con servicios externos como sistemas de gestión de stock o recursos.

Sin embargo, VTEX ya ofrece el [feed y hook de pedidos](https://developers.vtex.com/vtex-rest-api/docs/orders-feed), una solución más adecuada para el desarrollo de este tipo de integración.

## Qué cambió?

Este cambio se realizará en dos etapas, [algunas cuentas VTEX ya no tienen acceso a la funcionalidad](#cuentas-ya-afectadas), mientras que [otras cuentas tienen hasta el fin de septiembre de 2023 para adaptarse](#cuentas-que-se-veran-afectadas). Consulta los detalles a continuación para saber en qué grupo te encuentras.

Para ambos grupos, la pérdida de la funcionalidad, por ahora, solo significa que VTEX dejará de agregar los datos de los pedidos de la cuenta a la entidad. Las cuentas afectadas en cada etapa aún podrán ver la información anteriormente registrada en la entidad de pedidos de Master Data v2.

### Cuentas ya afectadas

Las cuentas que anteriormente utilizaban esta funcionalidad y no interactuaron con la entidad de pedidos de Master Data v2 en el año 2022, ya se vieron afectadas. En otras palabras, VTEX ya dejó de registrar pedidos en la entidad, pero todavía se pueden ver los pedidos registrados anteriormente.

### Cuentas que se verán afectadas

A partir de octubre de 2023, la entidad de datos de pedidos de Master Data v2 dejará de usarse en todas las cuentas. Esto incluye cuentas que nunca han interactuado con la entidad, así como también las que hayan interactuado recientemente.

Esto significa que VTEX dejará de registrar datos de pedidos en la entidad. Aún se podrá ver la información registrada anteriormente.

## ¿Qué se necesita hacer?

Ponte en contacto con el equipo de desarrollo de tu tienda para garantizar que tus integraciones de pedidos no dependan de la entidad de datos de pedidos de Master Data v2 antes del fin de septiembre de 2023.

Las [cuentas ya afectadas](#cuentas-ya-afectadas) no interactuaron con la entidad de pedidos en el año 2022, por lo tanto, probablemente no tienen integraciones que dependen de este recurso. Sin embargo, recomendamos que te pongas en contacto con tu equipo de desarrollo para confirmar que las integraciones de pedidos estén adaptadas.

Si tu operación tiene este tipo de integración, el equipo de desarrollo de tu tienda deberá adaptarlas para que utilicen el feed o hook de pedidos, según se describe en los siguientes documentos técnicos:

- [Feed y hook de pedidos](https://developers.vtex.com/vtex-rest-api/docs/orders-feed)
- [Implementar integraciones de pedidos](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-set-up-order-integration)
