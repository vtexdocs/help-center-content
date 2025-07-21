---
title: "La importación/exportación de MasterData devuelve el tiempo de espera."
id: 64De4JpmsgnQ2xckuOgYip
status: PUBLISHED
createdAt: 2024-12-13T17:12:25.937Z
updatedAt: 2024-12-13T17:12:26.798Z
publishedAt: 2024-12-13T17:12:26.798Z
firstPublishedAt: 2024-12-13T17:12:26.798Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: la-importacionexportacion-de-masterdata-devuelve-el-tiempo-de-espera
locale: es
kiStatus: Backlog
internalReference: 400265
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Al exportar y/o importar una entidad, puede producirse un timeout en los siguientes escenarios:

- Entidad con muchos campos;
- Un determinado campo con demasiada información;
- Muchos documentos en la entidad.
Estos escenarios pueden conducir a un tamaño de archivo muy grande, sobrecargando al trabajador que exporta/importa los documentos al archivo/base de datos, resultando en una respuesta de tiempo de espera con una respuesta de solicitud abortada.


##

## Simulación


Para el caso de **exportación**:

- Acceder al CRM de Datos Maestros (por ejemplo https://my-account-here.vtexcrm.com.br);
- Acceda a una Aplicación de Formularios con campos que contengan una gran cantidad de datos por campo (ej: imágenes, videos..);
- Haga clic en el botón "**Exportar XLS**":
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Storage/la-importacionexportacion-de-masterdata-devuelve-el-tiempo-de-espera_1.png)

- En la ventana emergente "**Exportar datos**", haga clic en "**Seleccionar todos los campos**" para marcarlo:
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Storage/la-importacionexportacion-de-masterdata-devuelve-el-tiempo-de-espera_2.png)

- Vuelve a la página de Aplicaciones;
- Haga clic en el botón "**Exportación**":
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Storage/la-importacionexportacion-de-masterdata-devuelve-el-tiempo-de-espera_3.png)

- Puede seguir la solicitud en "**Estado de la exportación**" (por ejemplo: https://my-account-here.vtexcrm.com.br/ExportStatus/Index);
- El correo electrónico no se enviará al usuario.

Para el caso de **importación**:

- Acceda al CRM de Datos Maestros (por ejemplo https://my-account-here.vtexcrm.com.br);
- Haga clic en el botón "**Import**":
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Storage/la-importacionexportacion-de-masterdata-devuelve-el-tiempo-de-espera_4.png)

- Elija la Entidad de Datos y el archivo .xls:
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Storage/la-importacionexportacion-de-masterdata-devuelve-el-tiempo-de-espera_5.png)

- Haga clic en el botón "**Import**";
- La importación se iniciará, se estará procesando, y luego será redirigido a `Import/ExecuteImport` (por ejemplo https://my-account-here.vtexcrm.com.br/Import/ExecuteImport), y se mostrará el siguiente error:

    This page isn't workingmy-account-here.vtexcrm.com.br took too long to respond.ERROR HTTP 504

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Storage/la-importacionexportacion-de-masterdata-devuelve-el-tiempo-de-espera_6.png)



## Workaround

**
Hay 3 maneras fáciles de utilizar soluciones en este caso.

Filtra sólo los documentos que necesites, si no necesitas toda la entidad, y luego, expórtalos:
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Storage/la-importacionexportacion-de-masterdata-devuelve-el-tiempo-de-espera_7.png)

Seleccione sólo los campos que realmente necesita, si no necesita toda la entidad, y luego, expórtelos:
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Storage/la-importacionexportacion-de-masterdata-devuelve-el-tiempo-de-espera_8.png)

Separe la hoja de cálculo que desea importar. Por ejemplo, una hoja de cálculo con 60.000 documentos, divídela en 6 hojas de cálculo de 10.000 documentos e intenta importarla de nuevo.
Recuerda que no tenemos un número exacto. Dividir el archivo en hasta 10k documentos era un ejemplo sugerido. Dependerá del número de campos/columnas, del tamaño de cada información en el campo/columna, del tamaño del archivo, del trabajador, etc. Hay algunos factores que pueden afectar a la importación prevista.






