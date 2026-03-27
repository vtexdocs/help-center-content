---
title: 'Agregar o editar presupuestos'
createdAt: '2025-02-27T10:00:00.000Z'
updatedAt: '2025-02-27T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: adding-or-editing-budgets
locale: es
---

Los presupuestos permiten definir y hacer seguimiento de los límites de gastos de forma centralizada. Esta funcionalidad ayuda a controlar el uso de los montos a lo largo del tiempo y a organizar el presupuesto por diferentes contextos del negocio. 

> ⚠️ Esta funcionalidad solo está disponible para tiendas que usan B2B Buyer Portal, actualmente está disponible para cuentas seleccionadas.

También permite crear presupuestos, configurar notificaciones de consumo, definir asignaciones y controlar la disponibilidad de estos valores en el checkout.

> ℹ️ Obtén más información sobre [Presupuestos](https://help.vtex.com/es/docs/tutorials/budgets-informacion-general)

En esta página puedes realizar las siguientes acciones:
 
* [Crear un presupuesto](#crear-un-presupuesto)  
* [Configurar notificaciones de consumo](#configurar-notificaciones-de-consumo)  
* [Configurar asignaciones de presupuesto](#configurar-asignaciones-de-presupuesto)  
* [Gestionar un presupuesto](#gestionar-un-presupuesto)  
* [Remover asignaciones del presupuesto](#remover-asignaciones-del-presupuesto)

## Crear un presupuesto

Para crear un nuevo presupuesto para la unidad organizativa, debes acceder a la lista de presupuestos y llenar la siguiente información: 

1. En la [pantalla de inicio de Organization Account](https://help.vtex.com/en/docs/tutorials/organization-account#accessing-the-organization-account), haz clic en **Presupuestos**.
2. En la página **Presupuestos**, haz clic en el botón **`+`** en la esquina superior derecha.  
3. En el menú lateral Agregar nuevo presupuesto llena los siguientes campos:      
    * **Nombre:** nombre del presupuesto.  
    * **Valor:** valor total del presupuesto.  
    * **Fecha de inicio:** fecha de inicio de vigencia.  
    * **Fecha de fin:** fecha de fin de vigencia.  
4. Para configurar la renovación automática del presupuesto, activa el botón Renovar el valor y el periodo del presupuesto al vencer.    
5. Para configurar notificaciones de consumo, activa el botón de Notificaciones.  
6. Haz clic en **Continuar para avanzar a la siguiente etapa del flujo**.  
7. En el paso **Agregar asignaciones de presupuesto**, elige una de las siguientes opciones:  
    * Para agregar asignaciones de inmediato, selecciona un tipo de asignación y haz clic en Agregar.  
    * Para saltar la configuración de asignaciones en este momento, haz clic en Omitir.

Una vez completado el flujo, el nuevo presupuesto se mostrará en la lista de presupuestos.

> ⚠️ Si haces clic en Omitir en el paso de asignaciones, el presupuesto se crea pero no está disponible para uso hasta que se agregue al menos una asignación.

## Configurar notificaciones de consumo

Para configurar notificaciones que alerten a los usuarios cuando el consumo del presupuesto alcanza límites definidos, sigue los pasos a continuación:

1. En el menú lateral Agregar nuevo presupuesto, activa el botón Notificaciones para habilitar el envío de notificaciones de consumo.
2. En la sección Notificaciones, ajusta el límite de consumo con los botones `+` y `–`.
3. En la misma sección, verifica los valores mostrados en las columnas Consumido y Restante, que se actualizan automáticamente de acuerdo con el límite configurado.

4. Para agregar un nuevo límite de consumo, haz clic en Agregar límite.
    * Se permite agregar hasta cinco límites por presupuesto.
5. Haz clic en Agregar usuarios y selecciona los usuarios que recibirán las notificaciones.
6. Para remover un límite de consumo o un usuario, haz clic en el ícono `–` correspondiente.
7. Haz clic en Continuar para guardar.

> ⚠️ Para recibir notificaciones de consumo es necesario agregar al menos un usuario.

## Configurar asignaciones de presupuesto

Las asignaciones definen los contextos en los que el presupuesto puede usarse en el checkout. Para agregar asignaciones a un presupuesto sigue los pasos a continuación:

1. En la página Agregar asignaciones de presupuesto, abre el menú desplegable del tipo de asignación.
2. Selecciona el tipo de asignación que define cómo se aplicará el presupuesto:
    * **Usuarios**: aplica el presupuesto a usuarios específicos.
    * **Direcciones de envío**: aplica el presupuesto a direcciones de envío específicas.
    * **Números de orden de compra**: aplica el presupuesto a números de pedido.
    * **Centros de costo**: aplica el presupuesto a centros de costo.
    * **Liberaciones**: aplica el presupuesto a liberaciones específicas.
3. Haz clic en `Agregar` para confirmar la asociación y avanzar a la configuración.
4. Para finalizar la creación del presupuesto sin configurar asignaciones, haz clic en `Omitir`.

## Gestionar un presupuesto

Después de crear un presupuesto, es posible ver sus detalles y realizar acciones de gestión. Para acceder y gestionar un presupuesto sigue los pasos a continuación:

1. En la página de **Presupuestos**, ubica el presupuesto deseado en la lista.
2. Haz clic en el nombre del presupuesto para acceder a la página con los detalles del mismo.
3. En la página de detalles del presupuesto, observa las siguientes secciones:
    * **Saldo restante**: muestra el saldo disponible del presupuesto.
    * **Configuración**: muestra la configuración general del presupuesto.
    * **Notificaciones**: muestra las reglas de notificación configuradas.
    * **Asignaciones**: muestra las asignaciones asociadas al presupuesto.
4. Haz clic en Editar en la sección **Configuración** para editar la configuración general.
5. Haz clic en Editar en la sección **Notificaciones** para ajustar las notificaciones.
6. Haz clic en Agregar en la sección Asignaciones para agregar nuevas asignaciones.
7. Haz clic en el ícono de la papelera para remover una asignación existente.

## Remover asignaciones del presupuesto

Remover asignaciones impide que un presupuesto sea aplicado a ciertos contextos en el checkout. Para remover asignaciones asociadas a un presupuesto sigue los pasos a continuación:

1. En la página Presupuestos, ubica el presupuesto deseado en la lista.
2. Haz clic en el nombre del presupuesto para acceder a Detalles del presupuesto.
3. En la sección Asignaciones, localiza la asignación que deseas remover.
4. Haz clic en el ícono de papelera al final de la fila de la asignación.
5. Confirma la remoción, si se solicita.

Una vez removida, la asignación deja de estar vinculada al presupuesto.

> ⚠️ Si el presupuesto no tiene ninguna asignación asociada, dejará de estar disponible en el checkout hasta que se agregue una nueva asignación.

