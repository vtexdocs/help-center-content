---
title: 'Administre el informe de comissiones'
id: 6NgHeDt8Xo9JtMoifx7DC5
status: ARCHIVED
createdAt: 2020-12-01T12:36:42.779Z
updatedAt: 2021-12-08T18:42:07.022Z
publishedAt: 
firstPublishedAt: 2020-12-04T12:24:18.019Z
contentType: tutorial
productTeam: Financial
author: 7qy2DBsUp8U5P9lqV0JHfR
slugEN: manage-the-sales-comissions-report
locale: es
legacySlug: administre-el-informe-de-comissiones
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

El informe de comisiones es una funcionalidad que crea un documento .xlsx con la relación entre los pedidos facturados de un marketplace y las respectivas tasas de comisión aplicadas a cada uno de esos pedidos. Tales pedidos, a su vez, son generados por los sellers del marketplace en cuestión. 

Esa dinámica se debe al split de pagos, funcionalidad sobre la cual puede aprender más al leer la guía de primeros pasos.

En este artículo, explicaremos cómo generar ese informe de comisiones y cómo programar la creación del mismo de forma recurrente de acuerdo con una periodicidad.

>⚠️ Antes de proceder con la configuración, verifique con su Customer Success Manager (CSM) si el informe de comisiones se incorporó al Admin de su cuenta.  

## Genere un informe de comisiones

Usted puede generar el informe de comisiones vía Admin. 

Siga las siguientes instrucciones:

1. Acceda al __Admin VTEX__.
2. Debajo del módulo Pagos, haga clic en el módulo __Comisiones__.
3. En el lado derecho de la pantalla, haga clic en el __botón azul "Generar"__.

A continuación, el Admin mostrará el modal Generar. Con este, usted puede definir el periodo de tiempo que desea analizar en el control de comisiones que se mostrará en el informe. 

Posteriormente:

5. En __“Fecha de inicio”__, defina el __primer día__ del periodo de análisis.
6. En __“Fecha de fin”__, defina el __último día__ del periodo de análisis.
7. Si quiere recibir el informe por email, seleccione la opción __Recibir en la dirección de correo electrónico__.
8. Complete el campo __Dirección de email__ con el email deseado.
9. Haga clic en el __botón azul Generar__.

>❗ Es obligatorio definir una fecha de inicio y una fecha de fin. De lo contrario, el informe de comisiones no será creado.

>ℹ️ Si no desea recibir el informe por email, no haga clic en el cuadro de selección Recibir en la dirección de email. 
>
> Haga clic en el botón "Generar". Esto creará un link en el Admin para descargar el informe.  

De esta forma, el mensaje Su informe se generó con éxito se mostrará en la pantalla para indicar que la operación se realizó correctamente. Además, el documento será enviado a la carpeta Descargas de su computador. 

La creación del informe puede demorarse si el volumen de datos analizados es extenso. En estos casos, puede seguir el proceso en la pantalla como se muestra en la siguiente imagen. 

>ℹ️ Salir de la página no afectará la operación.

![Informe de Comisiones](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

Posteriormente, usted también puede descargar el informe recién generado mediante un link de descarga en el listado de informes.

## Programe la creación de un informe

Hay situaciones en las que el marketplace necesita analizar sus comisiones con frecuencia. 

Por esta razón, usted puede crear una programación para que el informe se genere automáticamente en cada periodo de tiempo predeterminado. 

>⚠️ En el módulo Comisiones, solo se permite crear una programación por cuenta.

>ℹ️ La programación es opcional. Si no se configura no afecta la creación manual de los informes de comisiones de ninguna manera.

Toda vez que está en el módulo Comisiones, haga clic en el botón «Programar» al lado derecho de la pantalla para crear una programación. Este se muestra como un modal, similar al de generación del informe. 

Siga el paso a paso:

1. En __¿Con qué frecuencia desea recibir el informe?__, seleccione una opción de periodicidad, como Mensualmente.
2. En __¿Cuándo quiere recibir el informe?__, seleccione una opción disponible del día del mes, como Todos los días 10.
3. Si lo desea, seleccione la opción __"Recibir en la dirección de email"__.
4. Complete el campo Dirección de email ingresando el __correo electrónico deseado__.
5. Haga clic en el __botón azul "Programar"__.

Finalmente, el mensaje Se guardaron sus cambios aparecerá en la pantalla para indicar que la programación se finalizó correctamente.

### Cancele una programación

Para cancelar la programación de un informe, usted puede abrir el modal de configuración Programar y seleccionar la opción «Nunca» en ¿Con qué frecuencia desea recibir el informe?. Luego, guarde los cambios y la programación ya no será considerada. 
