---
title: 'Configurar los horarios de la transportadora'
id: 3QVhjcZ74smYsmEEgAGsui
status: DRAFT
createdAt: 2018-02-07T21:25:14.224Z
updatedAt: 2021-05-26T13:45:55.753Z
publishedAt: 
firstPublishedAt: 2018-02-07T23:14:17.882Z
contentType: tutorial
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slug: configurar-los-horarios-de-la-transportadora
locale: es
legacySlug: configurar-los-horarios-de-la-transportadora
subcategory: 7fTH6bP0C4IaM8qWi0kkQC
---

>ℹ️ Aviso: Esta documentación está siendo actualizada con el fin de reflejar el cambio del concepto de Paneles a
> [Estrategia de Envío](https://help.vtex.com/es/announcements/estoque-e-entrega-entenda-o-que-mudou-na-aba-paineis--1YNfaeNG206XKI2UbGBRSl). 

Las transportadoras, que en su Admin se denominan Política de Envío, son las empresas responsables de hacer la distribución de los productos vendidos por un comercio electrónico. Es común que una tienda tenga varias transportadoras asociadas. Esto sucede porque el perfil de operación y de flota de las **transportadoras varía según la ruta, el plazo y el tipo de producto** que va a entregar.

Se puede manipular la configuración de las políticas de envío registradas en su tienda para que su ruta logística se acorde con la realidad de su negocio. Para que pueda personalizar su logística para vários escenarios de entrega, usted puede configurar lo siguiente:

- **Horario de corte** de transportadoras.  
- **Horario de operación** de transportadoras.  

> *De forma predeterminada, todas las transportadoras están configuradas para todos los días y con horarios de 00:00 h a 23:59 h (de acuerdo con el horario local) ya programados.*

> *No se pueden seleccionar las opciones `Registrar los días y el horario de corte de la transportadora` y `horario de operación de la transportadora` al mismo tiempo. Por lo tanto, usted debe elegir entre utilizar el horario de corte o el horario de operación.*

La información de **horario de corte** de una transportadora es muy importante para el cálculo de la fecha de entrega de un pedido.

## Horario de Corte de Transportadoras
La información de horario de corte de una transportadora es muy importante para el cálculo de la fecha de entrega de un pedido. La fecha de entrega estimada se calcula después de la aprobación del pago.
		
> *El horario de corte predeterminado es 00:00 h*.


**Ejemplo 1**
1. Una transportadora tiene un tiempo de entrega de **2 días hábiles**.  
2. El horario de corte registrado para el lunes es a las **15:00 h**.  
3. El pago de un pedido que será entregado por esta transportadora ha sido **aprobado a las 11:00 h** de un lunes.  
4. El cálculo de la fecha de entrega del pedido considerará el lunes como **día 0**. Por lo tanto, la fecha de entrega del pedido se calculará para el miércoles.  

**Ejemplo 2**  
1. Una transportadora tiene un tiempo de entrega de **2 días hábiles**.  
2. El horario de corte registrado para el lunes es a las **15:00 h**.  
3. El pago de un pedido que será entregado por esta transportadora ha sido **aprobado a las 18:00 h** de un lunes.  
4. El cálculo de la fecha de entrega del pedido considerará el martes como **día 0**, pues el pago se aprobó después del horario de corte. Por lo tanto, la fecha de entrega del pedido se calculará para el jueves.  


### Configurar el horario de corte

 1. Acceda al módulo **Inventario y Envío**.  
 2. Haga clic en la pestaña **Estrategia de Envío**.  
 3. Haga clic en la **Política de Envío** deseada.  
 4. En configuración de tiempo, registre el `Horario de corte`.  
 5. Haga clic en los días deseados y rellene con los horarios de corte.  

 > _No rellene los campos de horario de corte digitando valores. En su lugar, utilice las opciones predefinidas para evitar errores de registro_.

 6. Haga clic en **Guardar**.  
 
## Horario de Operación de las Transportadoras

El horario de operación define la disponibilidad de una transportadora para la operación logística de su tienda. Para configurar el horario de operación de una transportadora, realice los pasos a continuación:

### Configurar el horario de operación de las transportadoras
 
 1. Acceda al módulo **Inventario y Envío**.  
 2. Haga clic en la pestaña **Estrategia de Envío**.  
 3. Haga clic en la **Política de Envío** deseada.  
 4. En configuración de tiempo, registre el `Horario de operación`.  
 5. Defina los días y los horarios deseados para el operación de la transportadora.  

 > *Cuando se selecciona la opción `Aceptar ventas fuera del horario de operación`, esto permite a la transportadora aceptar ventas fuera del horario de operación configurado, es decir, se considerará en la simulación (cálculo) de flete. Cuando no se selecciona, la transportadora solo aceptará ventas, es decir, solo estará disponible para la operación logística de su tienda, dentro de los días y horarios previamente definidos.*

 6. Haga clic en **Guardar**.  
