---
title: 'Gestionar el muelle'
id: 7K3FultD8I2cuuA6iyGEiW
status: PUBLISHED
createdAt: 2017-08-03T14:22:38.666Z
updatedAt: 2024-11-05T17:51:06.459Z
publishedAt: 2024-11-05T17:51:06.459Z
firstPublishedAt: 2017-08-03T14:25:42.704Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: managing-loading-docks
legacySlug: como-crear-muelle
locale: es
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---


El muelle es una de las etapas logísticas de su tienda. Es un punto intermedio entre el almacén y la transportadora, que funciona como área de salida de productos. Los muelles reciben ítems procedentes de almacenes o centros de distribución y los entregan a las transportadoras para que éstas realicen la entrega al destinatario final. 

<div class="alert alert-info">
Para saber más sobre lo que es un muelle en VTEX, consulte el artículo <a href="https://help.vtex.com/es/tutorial/muelles--5DY8xHEjOLYDVL41Urd5qj">Muelles</a>.</div>

Este artículo contiene la información necesaria para:

* [Registrar un nuevo muelle](#registrar)
* [Rellenar los campos de registro y configurar la elección del muelle](#campos-de-registro).
* [Editar un muelle existente](#editar).
* [Eliminar un muelle](#eliminar).

Es importante saber que para configurar un muelle correctamente hay que: crear el muelle, rellenar los campos de registro (que determinan los horarios de funcionamiento, la prioridad), y también asociar el muelle con la [política comercial](https://help.vtex.com/pt/tutorial/o-que-e-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE), el [almacén](https://docs.google.com/document/u/0/d/1Nx2HYf58xSJLB3V_voySEW80sxkzzhR8dNrS6mytytM/edit) y la [política de envío](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140?&utm_source=autocomplete). 

<div class="alert alert-warning">
El orden de registro sugerido en la plataforma VTEX para el funcionamiento previsto del sistema logístico es:<p><ul><li><a href="https://help.vtex.com/es/tutorial/politica-de-envio--tutorials_140">Política de envío</a></li><li><a href="https://help.vtex.com/es/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj">Muelle</a></li><li><a href="https://help.vtex.com/es/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb">Almacén</a></li></ul></p>
</div>

## Registrar

Para registrar un nuevo muelle, en el menú izquierdo del Admin VTEX:

1. En el Admin VTEX, accede a **Envío > Estrategia de Envío**, o escribe *Estrategia de Envío* en la barra de búsqueda en la parte superior de la página.    
2. Vaya a la pestaña **Muelles de carga** y haga clic en el botón `Crear muelle`.  
3. Rellene los 
[campos de registro](#campos-de-registro) y haga clic en `Guardar cambios`.

## Campos de registro

Los campos necesarios para crear un nuevo muelle son:

* **Nombre:** el nombre del muelle.
* **ID:** campo que identifica el muelle. Si no rellena el campo, se creará automáticamente.
* [Política de envío](https://help.vtex.com/es/tutorial/politica-de-envio--tutorials_140) y [política de ventas (política comercial):](https://help.vtex.com/es/tutorial/o-que-e-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE) seleccione la política de envío y la política comercial que dan servicio al muelle. Es importante tener en cuenta que ambas políticas deben haber sido registradas previamente.
* **Tiempo y prioridad:**
    * **Tiempo de procesamiento:** tiempo que se considerará en el cálculo del envío, es el tiempo que el producto tarda en llegar al muelle. Rellene el número de días, horas y minutos.
    * **Tiempo de sobrecarga:** tiempo que se utilizará para escoger un muelle cuando dos o más muelles tengan el mismo tiempo de procesamiento. No se considera en el cálculo de envío. Rellene el número de días, horas y minutos.
    * **Prioridad:** valor de desempate en la selección del muelle. Para rellenar este campo, debe seleccionar un valor en la barra numérica.
* **Integraciones:** se utiliza para integrar software externo de WMS (Warehouse Management System) al flujo de procesamiento de pedidos.
* **Dirección:** dirección del muelle registrado. Rellene los campos con el País, Código postal, Calle, Número, Complemento, Barrio, Estado y Ciudad.

### Desempate y elección de muelle

Es posible configurar el muelle que tendrá preferencia en el envío a las transportadoras mediante la manipulación de algunos criterios en el registro. Hay tres campos de la configuración del muelle que son utilizados por la plataforma para la elección del muelle. Los campos son:

* **Tiempo de procesamiento:** cuando hay más de un muelle, el sistema utiliza este campo para priorizar los muelles con menor tiempo de procesamiento.
* **Tiempo de sobrecarga:** tiempo que se utiliza para escoger un muelle cuando hay más de un muelle con el mismo tiempo de procesamiento. Cuanto menor sea el valor ingresado en este campo, mayor será la posibilidad de que el muelle sea elegido. Este campo no se utiliza en el cálculo del tiempo de entrega.
* **Prioridad:** valor utilizado para desempatar los muelles que tienen el mismo tiempo de procesamiento y el mismo tiempo de sobrecarga. Cuanto mayor sea el valor, mayor será la probabilidad de que el muelle sea elegido.

## Editar

Para editar un muelle, en el menú izquierdo del Admin VTEX:

1. En el Admin VTEX, accede a **Envío > Estrategia de Envío**, o escribe *Estrategia de Envío* en la barra de búsqueda en la parte superior de la página.     
2. Vaya a la pestaña **Muelles de carga**: se mostrarán las tarjetas de todos los muelles registrados.  
3. Seleccione el muelle deseado y haga clic en los tres puntos de la derecha.  
4. Haga clic en `Editar`.  

## Eliminar

Para eliminar un muelle, en el menú izquierdo del Admin VTEX:

1. En el Admin VTEX, accede a **Envío > Estrategia de Envío**, o escribe *Estrategia de Envío* en la barra de búsqueda en la parte superior de la página.      
2. Vaya a la pestaña **Muelles de carga**: se mostrarán las tarjetas de todos los muelles registrados.  
3. Seleccione el muelle deseado y haga clic en los tres puntos de la derecha.  
4. Haga clic en `Eliminar`.  
