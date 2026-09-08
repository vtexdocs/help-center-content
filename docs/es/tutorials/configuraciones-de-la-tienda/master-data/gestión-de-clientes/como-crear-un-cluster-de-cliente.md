---
title: 'Crear clúster de clientes'
createdAt: 2019-01-24T20:45:58.065Z
updatedAt: 2026-04-09T00:00:00.000Z
contentType: tutorial
productTeam: Marketing & Merchandising
slugEN: how-can-i-create-cluster-of-customers
locale: es
---

Un clúster de clientes es una forma de segmentar clientes en grupos. Esto se puede lograr creando un campo booleano en **Master Data** (ej.: `Revendedores`, `VIP`, `Empleados`). Los clientes marcados como `true` en ese campo pertenecen al clúster, mientras que los demás no. Una vez creado, puede usar clústeres para dirigirse a segmentos específicos de clientes con promociones exclusivas, campañas personalizadas o experiencias diferenciadas.

> ℹ️ Este artículo aborda Master Data v1. Obtenga más información sobre las [versiones de Master Data](/es/docs/tutorials/master-data#versions-available) y [Master Data v2](https://developers.vtex.com/docs/guides/master-data-v2-basics).

## Creando el campo de clúster de clientes

Siga los pasos a continuación para crear un clúster de clientes:

1. En el Admin VTEX, acceda a **Master Data**.
2. Cree un nuevo campo booleano en la entidad de datos de clientes (`CL`) con el nombre del clúster deseado (ej.: `Revendedores`, `VIP`, `Mayoristas`). Consulte [Crear un campo en Master Data](/es/docs/tutorials/como-crear-un-campo-en-master-data) para más detalles.
3. Defina el campo como **buscable** y **filtrable**. Esto es necesario para que el clúster funcione correctamente con promociones.
4. Agregue el campo al formulario de clientes para que sea visible al consultar los datos del cliente. Consulte [Crear un campo en Master Data](/es/docs/tutorials/como-crear-un-campo-en-master-data) para más detalles.

## Poblando el clúster

Después de crear el campo de clúster, debe definirlo como `true` para cada cliente que desee incluir en el clúster. Puede hacerlo utilizando uno de los siguientes métodos:

- **Importación por planilla:** Use el [recurso de importación de Master Data v1](/es/docs/tutorials/importar-datos-en-master-data-v1) para asignar clientes de forma masiva.
- **API:** Actualice los registros de clientes programáticamente a través de la [API de Master Data](https://developers.vtex.com/docs/api-reference/masterdata-api).
- **Entrada manual:** Edite registros individuales de clientes en el formulario de clientes del CRM.

## Más información

- [Crear promoción para un clúster de clientes](/es/docs/tutorials/creando-promociones-cluster-clientes)
