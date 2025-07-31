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
 ![](https://vtexhelp.zendesk.com/attachments/token/p7ycuur8ck3Qtw2zmSUBNDmxE/?name=image.png)

- En la ventana emergente "**Exportar datos**", haga clic en "**Seleccionar todos los campos**" para marcarlo:
 ![](https://vtexhelp.zendesk.com/attachments/token/IIc8z6df21Cl6djTt5Toz4udk/?name=image.png)

- Vuelve a la página de Aplicaciones;
- Haga clic en el botón "**Exportación**":
 ![](https://vtexhelp.zendesk.com/attachments/token/NsI7JG4oWcuHAhDewa7PoEx1M/?name=image.png)

- Puede seguir la solicitud en "**Estado de la exportación**" (por ejemplo: https://my-account-here.vtexcrm.com.br/ExportStatus/Index);
- El correo electrónico no se enviará al usuario.

Para el caso de **importación**:

- Acceda al CRM de Datos Maestros (por ejemplo https://my-account-here.vtexcrm.com.br);
- Haga clic en el botón "**Import**":
 ![](https://vtexhelp.zendesk.com/attachments/token/3HUzAWSplEKGFAap3yU0jjmdf/?name=image.png)

- Elija la Entidad de Datos y el archivo .xls:
 ![](https://vtexhelp.zendesk.com/attachments/token/KFolvCXhUiqAhZV23iKDhTws0/?name=image.png)

- Haga clic en el botón "**Import**";
- La importación se iniciará, se estará procesando, y luego será redirigido a `Import/ExecuteImport` (por ejemplo https://my-account-here.vtexcrm.com.br/Import/ExecuteImport), y se mostrará el siguiente error:

    This page isn't workingmy-account-here.vtexcrm.com.br took too long to respond.ERROR HTTP 504

 ![](https://vtexhelp.zendesk.com/attachments/token/3brNPf70M3FBLGPiVwWsSHx94/?name=image.png)



## Workaround

**
Hay 3 maneras fáciles de utilizar soluciones en este caso.

Filtra sólo los documentos que necesites, si no necesitas toda la entidad, y luego, expórtalos:
 ![](https://vtexhelp.zendesk.com/attachments/token/CojS7MzbOiDkaQ9HgdbrxlzHD/?name=image.png)

Seleccione sólo los campos que realmente necesita, si no necesita toda la entidad, y luego, expórtelos:
 ![](https://vtexhelp.zendesk.com/attachments/token/pTOU7TEWidoOrtstbDALphW6k/?name=image.png)

Separe la hoja de cálculo que desea importar. Por ejemplo, una hoja de cálculo con 60.000 documentos, divídela en 6 hojas de cálculo de 10.000 documentos e intenta importarla de nuevo.
Recuerda que no tenemos un número exacto. Dividir el archivo en hasta 10k documentos era un ejemplo sugerido. Dependerá del número de campos/columnas, del tamaño de cada información en el campo/columna, del tamaño del archivo, del trabajador, etc. Hay algunos factores que pueden afectar a la importación prevista.






