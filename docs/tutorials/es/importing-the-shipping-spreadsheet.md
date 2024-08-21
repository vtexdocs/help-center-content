---
title: 'Importar planilla de envío'
id: 45I9m2rknucSmYigA2AE0G
status: DRAFT
createdAt: 2018-02-28T19:46:49.085Z
updatedAt: 2021-07-12T13:41:11.689Z
publishedAt: 
firstPublishedAt: 2018-02-28T21:32:16.417Z
contentType: tutorial
productTeam: Post-purchase
author: 7FpKZ0rc6k4WqeymES80cw
slug: importar-planilla-de-envio
locale: es
legacySlug: importar-planilla-de-envio
subcategory: 7fTH6bP0C4IaM8qWi0kkQC
---

>ℹ️ Atención: Esa documentación está en proceso de actualizarse para reflejar los cambios del término Paneles a [estratégia de envío](https://help.vtex.com/es/announcements/estoque-e-entrega-entenda-o-que-mudou-na-aba-paineis--1YNfaeNG206XKI2UbGBRSl).  

Antes de hacer la importación, es importante ter la plantilla en el modelo VTEX guardada en su máquina, es decir, __idéntica a nuestra Planilla Modelo__, incluso en el formato de las células, con el header y ya en el formato _.xls_ (Excel 97-2003). Para obtener el modelo, haga clic en el enlace __Download de la plantilla modelo__, que queda dentro en la plantilla de configuraciones del transportista.

1. Acceda al módulo __Inventario y Envío__
2. Haga clic en __Paneles__
3. Luego, en el transportista que desea importar los valores de flete
4. Haga clic en __Actualizar Tabla__ y, a continuación, en __Elegir un archivo__
5. Seleccione el archivo de Excel previamente salvo en su máquina, con las especificaciones expresadas más arriba
6. Para finalizar, haga clic en el botón __Guardar__

Después, quedará una cinta color naranja sobre el transportista que tuvo la inclusión de la tabla de flete, con la información _En procesamiento_. Dependiendo del tamaño del archivo, ese proceso será breve.

>⚠️ Recuerde que cada nueva importación sobrescribe las informaciones que fueron importadas anteriormente.

>⚠️ **Nota 1:** caso las 65.536 líneas de la versión *.xls* no sean suficientes para el catastro de todos los valores de flete del transportista, será necesario que cree una nueva pestaña dentro del mismo archivo, con el mismo encabezado para seguir llenando las informaciones.
  
>⚠️ **Nota 2:**Ponga atención en el tamaño del archivo, pues si él pasa de 10MB será necesario con la extensión *.zip*. Este archivo .zip también debe tener menos de 10 MB para que el upload funcione. Si, aún así, el archivo excede el límite, recomendamos dividir en más transportistas.

Para saber cómo registrar el transportista, acceda al artículo [Gestionar transportista](http://help.vtex.com/es/tutorial/gestionar-transportista).

### Cómo convertir la plantilla

Caso usted ponga la entrega a disposición por el Correos y la plantilla que usted tiene no esté en el estándar VTEX, acceda al sitio web de la herramienta del [integrador de los correos](http://clientes.xpagencia.com.br/ferramentas/logistics/transportadoras/planilha), ofrecida por la agência XP.

### Artículos relacionados:
[Montar la plantilla de flete](/es/tutorial/como-montar-la-plantilla-de-flete)
[Gestionar Transportista](/es/tutorial/gestionar-transportista/)
