---
title: 'Gestionar Almacenes'
id: tutorials_137
status: PUBLISHED
createdAt: 2017-04-27T22:16:29.061Z
updatedAt: 2023-05-31T14:45:13.291Z
publishedAt: 2023-05-31T14:45:13.291Z
firstPublishedAt: 2017-04-27T23:00:45.952Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slug: gestionar-almacenes
legacySlug: gerenciar-inventario, gestionar-almacenes
subcategory: 7fTH6bP0C4IaM8qWi0kkQC
---

El almacén es el espacio de almacenamiento físico del ecommerce. En la plataforma VTEX, puede añadir ítems a los almacenes registrados en su tienda. De este modo, puede controlar los movimientos, la disponibilidad y gestionar el envío de ítems mediante los [muelles](https://help.vtex.com/pt/tutorial/gerenciar-doca--7K3FultD8I2cuuA6iyGEiW) y las [políticas de envío](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140). 

<div class="alert alert-info">
Para comprender mejor cómo la plataforma VTEX interpreta y define el funcionamiento de los almacenes, consulte lo artículo <a href="https://help.vtex.com/pt/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb">Almacén</a>.
 </div>

Además, es posible registrar el almacén, los muelles por los que saldrán los productos, el tiempo que tardan los ítems en ser transportados desde el almacén hasta el muelle y el importe cobrado por este transporte.

Este artículo contiene la información necesaria para:

* [Registrar un nuevo almacén](https://help.vtex.com/es/tutorial/gestionar-almacenes--tutorials_137#registrar-almacen).
* [Rellenar los campos de registro del almacén](https://help.vtex.com/es/tutorial/gestionar-almacenes--tutorials_137#campos-de-registro).
* [Editar un almacén existente](https://help.vtex.com/es/tutorial/gestionar-almacenes--tutorials_137#editar-almacen).
* [Eliminar un almacén](https://help.vtex.com/es/tutorial/gestionar-almacenes--tutorials_137#eliminar-almacen).

<div class="alert alert-warning">
Como el almacén forma parte del sistema logístico de su tienda, le sugerimos que registre los módulos relacionados con la operación logística en el siguiente orden:
<body>
<ol>
<li><a href="https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV">Política Comercial;</a></li>
  <li><a href="https://help.vtex.com/en/tutorial/politica-de-envio--tutorials_140">Política de envío;
</a></li>
  <li><a href="https://help.vtex.com/es/tutorial/gerenciar-doca--7K3FultD8I2cuuA6iyGEiW">Muelle;</a></li>
<li>Almacén.</li>
 </ol>
</body>
</div>

## Registrar almacén

1. Acceda al módulo `Inventario y envío`;
2. Haga clic en `Estrategia de envío`;
3. Haga clic en la pestaña `Almacenes`;
4. Haga clic en el botón `Crear almacén`.
5. Compruebe que el botón <i class="fas fa-toggle-on"></i> está configurado como **Activo** en la esquina superior derecha. Si no es así, cámbialo a **Activo.**
6. Rellene los [campos de registro](#campos-de-registro).
7. Haga clic en el botón `Guardar cambios`.

### Campos de registro

* **Nombre:** el nombre del almacén.
* **ID** (opcional): el identificador del almacén. Si no se rellena, se creará automáticamente.
* **Origen:** relaciona el almacén con un muelle. Seleccione un [muelle](https://help.vtex.com/pt/tutorial/gerenciar-doca--7K3FultD8I2cuuA6iyGEiW) existente: 
    * Haga clic en el botón `Agregar muelle`.
    * Seleccione qué muelle (o muelles) quiere agregar.
    * Haga clic en `Guardar cambios`.
    * Rellene los campos de **Días y horas de procesamiento.** Debe configurar el tiempo de manipulación de los pedidos (en días y horas) para transportarlos desde el almacén hasta el muelle. Seleccione el número de días haciendo clic en <i class="fas fa-minus"></i> y <i class="fas fa-plus"></i> y la cantidad de horas y minutos en el campo <i class="far fa-clock"></i>. 
    * Rellene la **Tarifa adicional** si hay algún costo adicional de preparación de los pedidos.
    * Haga clic en `Guardar cambios.`
* **Almacén inStore:** configure el <i class="fas fa-toggle-on"></i> como `Activo` para vincular el almacén a una tienda física que tenga inStore. Para que los [puntos de recogida](https://help.vtex.com/pt/tutorial/configurar-pontos-de-retirada-pickup-points--2R5ClQiwe4KoSQgsuiOw4E) estén disponibles para ser asociados, es necesario registrarlos previamente.

## Editar almacén

1. En el Admin VTEX, accede a **Envío > Estrategia de Envío**, o escribe *Estrategia de Envío* en la barra de búsqueda en la parte superior de la página.  
2. Haga clic en la pestaña `Almacenes`.  
3. Busque la tarjeta del almacén que desea editar.   
4. Haga clic en <i class="fas fa-ellipsis-v"></i>.  
5. Haga clic en `Editar`.  
6. Cambie los [campos](#campos-de-registro) que desee.  
7. Haga clic en `Guardar cambios`.  

## Eliminar almacén

1. En el Admin VTEX, accede a **Envío > Estrategia de Envío**, o escribe *Estrategia de Envío* en la barra de búsqueda en la parte superior de la página.  
2. Haga clic en la pestaña `Almacenes`.
3. En la tarjeta del almacén que desea eliminar, haga clic en <i class="fas fa-ellipsis-v"></i>
4. Seleccione la opción `Eliminar`.

<div class="alert alert-warning">
Para añadir ítems al almacén, primero debe registrarlos en el catálogo. Después de registrar los ítems a través del <a href="https://help.vtex.com/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/7kz4uWVq6NoaOdUpiJv4PR">catálogo</a> y tener un almacén registrado, debe asociar los ítems a su respectivo almacén en la página <a href="https://help.vtex.com/es/tutorial/gerenciar-itens-em-estoque--tutorials_139">Gestión del stock</a>.
</div>
