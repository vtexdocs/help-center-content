---
title: 'Regla de autorización para divergencia de valores (Beta)'
id: 3CKxNtngadl7WA9fRDDhsl
status: DRAFT
createdAt: 2021-07-16T20:31:14.633Z
updatedAt: 2021-12-25T20:50:19.890Z
publishedAt: 
firstPublishedAt: 2021-07-19T15:29:43.169Z
contentType: tutorial
productTeam: Channels
author: 46G4yHIZerH7B9Jo0Iw5KI
slug: reglas-en-divergencia-de-valores
legacySlug: reglas-de-autorizacion-en-divergencia-de-valores-para-sellers
subcategory: 4ZBiXqnPntLbsijZ0djFcD
---

<div class="alert alert-info">
  <p>Esta funcionalidad está en versión Beta, lo que significa que estamos trabajando para mejorarla. Si tiene alguna pregunta, póngase en contacto con <a href="https://support.vtex.com/hc/es-419/requests">nuestro Soporte</a>.</p>
</div>

Las integraciones entre los sellers VTEX y los [conectores nativos](https://help.vtex.com/es/tutorial/integrando-com-marketplace--tutorials_402#integrado-con-un-conector-nativo-vtex) pueden presentar divergencias en los precios configurados en VTEX y lo que se exhibe en el estante del marketplace. Esto puede generar errores en el OMS.

Los pedidos que presentan errores por divergencia de valores mayores que los valores configurados en la integración con el marketplace, no se cargan automáticamente en el OMS. Por tanto, permanecen con el status de error en la sección `Pedidos` del módulo *INTEGRACIONES* del Admin, a la espera de ser reprocesados manualmente.

![divergenciadepreçosES-01](//images.contentful.com/alneenqid6w5/2he3DSbVXaIpDMuAQu4094/66781d82b678c9b312bbd508cc6c2b92/divergenciadepre__osES-01.gif)

Para que los pedidos con divergencia de valores se carguen al OMS, se creó la regla de autorización (Beta). En esta regla, todos los pedidos con divergencia de valores se envían al OMS y deben ser aprobados manualmente por el administrador de la tienda, con el email registrado en *Gestión de la cuenta > Cuenta*. Se puede tener más de un email registrado.

A través de la regla de autorización, los pedidos con divergencia de valores se crean en el OMS, garantizando la reserva de stock y quedando pendientes de autorización con el status `Esperando autorización manual`. 

Los pedidos se deben gestionar y aprobar manualmente a través del OMS o por [VTEX DO](https://help.vtex.com/es/tutorial/vtex-do--tutorials_203). Solo los usuarios con autorización pueden aprobar los pedidos.

Una regla se configura automáticamente con el porcentaje de divergencia de 0% a 30% para `Negar automáticamente` los pedidos en su Admin VTEX. Además, se puede alterar o inclusive crear más de una regla al realizar la configuración.

<div class="alert alert-info">
Una vez que haya configurado el mecanismo de regla de autorización (Beta), ya no tendrá que configurar el campo Divergencia de valores en la integración del marketplace. Si ya configuró el campo en la integración, la configuración realizada ya no será válida.
</div>

## Configuración de una regla de autorización (Beta)

Hay dos opciones de configuración en la regla de autorización: 
- [Crear reglas](#crear-reglas)
- [Editar reglas](#editar-reglas)

### Crear reglas

![barra regradivergenciaES](//images.contentful.com/alneenqid6w5/31XPGn5RQPGtJRoaXabiRL/16f13095fe5760e51d249d7b55f18f80/barra_regradivergenciaES.JPG)

Para crear las reglas, realice los siguientes pasos:

1. Acceda al Admin.
2. En el módulo *PEDIDOS*, seleccione la opción `Gestión de pedidos`.
3. Haga clic en `Autorización de pedidos`.
   * Si esta opción no aparece en su Admin, acceda a la URL `https://{accountname}.myvtex.com/admin/order-auth`, sustituyendo {accountname} por el nombre de su tienda.
4. En *DIVERGENCIA DE VALORES*, haga clic en `CREAR REGLAS`.
5. En la página que se abrió, haga clic en el botón `CREAR REGLAS`.
   * Se crea una regla configurada automáticamente con un porcentaje de divergencia del 0% al 30%, la cual corresponde a la barra celeste.
6. Para aumentar o disminuir el porcentaje de divergencia, haga clic en la barra y arrástrela desde los extremos, a menos " < " o a más " > ".
7. Elija entre las siguientes acciones de reglas para pedidos: `Autorizar automáticamente`, `Negar automáticamente` o `Crear una tarea en VTEX DO para aprobar`.
8. Para crear más reglas, haga clic en el icono <img class="shadow-4" src="https:////images.ctfassets.net/alneenqid6w5/7E2BhdEapQ5Lmm4fLRKxpp/2770eaaa5af9653a71416c2f9677eb37/__cone_regras.JPG" /> y repita los pasos 6 y 7.
9. Haga clic en `Guardar reglas`.

Durante el proceso de creación de reglas, se muestran las siguientes pestañas: 
   * **Todas:** Si no añade más reglas, solo a. aparecerá esta pestaña en la página. A medida que cree más reglas, se agruparán en esta pestaña.
   * **1ª regla:** cuando se crea una regla adicional, se puede configurar en esta pestaña.
   * **2ª regla en adelante:** configuración de la 2ª regla o subsiguiente, que solo aparece después de configurar una regla anterior.

### Editar reglas

Para editar las reglas existentes, realice los siguientes pasos:

1. Acceda al Admin.
2. En el módulo *PEDIDOS*, seleccione la opción `Gestión de pedidos`.
3. Haga clic en `Autorización de pedidos`.
4. Si esta opción no aparece en su Admin, acceda a la URL `https://{accountname}.myvtex.com/admin/order-auth`, sustituyendo {accountname} por el nombre de su tienda.
5. En *DIVERGENCIA DE VALORES*, haga clic en `CREAR REGLAS`.
6. Edite la regla que desee modificando la barra de porcentaje.
7. Haga clic en `Guardar reglas`.

![divergenciadepreçosES-02](//images.contentful.com/alneenqid6w5/2AUFOv0VJLYU5hJvBUgSfH/75f22616f278d53efacd9457ff737e38/divergenciadepre__osES-02.gif)

## Autorización de pedidos 

Hay dos formas de autorizar los pedidos que tienen el status `Esperando autorización manual`:
- [Autorizar manualmente en el OMS](#autorizacion-manual-en-el-oms)
- [Autorizar por VTEX DO](#autorizacion-por-vtex-do)

<div class="alert alert-warning">
Debe tener permiso del propietario de la cuenta para autorizar los pedidos, de lo contrario aparecerá el siguiente mensaje en la pantalla: 
«Usted aún no posee reglas de autorización. Por lo tanto, todos los casos de divergencia son negados automáticamente».
</div>

### Autorización manual en el OMS

Para autorizar manualmente los pedidos, realice los siguientes pasos:

1. Acceda al Admin.
2. En el módulo *PEDIDOS*, seleccione la opción `Gestión de pedidos`.
3. Haga clic en `Todos los pedidos`.
4. Seleccione el pedido que tiene el status `Esperando autorización manual` que desea autorizar.
5. Haga clic en `Confirmar pedido`.

![divergenciadepreçosES-03](//images.contentful.com/alneenqid6w5/3dNZ1HQF0Nl979OmPkszEv/56de42e69dea0dea0efed9630c054a8d/divergenciadepre__osES-03.gif)

### Autorización por VTEX DO

[VTEX DO](https://help.vtex.com/es/tutorial/vtex-do--tutorials_203) es un gestor de tareas generadas por los módulos de la plataforma que se realizarán manualmente. Para autorizar los pedidos por VTEX DO, realice los siguientes pasos:

1. Acceda al Admin.
2. En el módulo *PEDIDOS*, seleccione la opción `Gestión de pedidos`.
3. Haga clic en `Todos los pedidos`.
4. Haga clic en VTEX DO, el icono de bandeja de entrada que se encuentra en la esquina inferior derecha de la pantalla.
5. Seleccione el pedido que desea autorizar. 
6. Haga clic en `Cerrar`.
7. Haga clic en `Autorizar`.

![divergenciadepreçosES-04](//images.contentful.com/alneenqid6w5/3yOoU6kEwFcMZAEZC0tAvA/a84b0c0fbdb948e93a9dfdf2b8b22c1e/divergenciadepre__osES-04.gif)
