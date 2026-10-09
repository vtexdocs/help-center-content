---
title: 'Actualización de la base de direcciones de Bolivia'
slug: '2026-09-30-actualizacion-de-la-base-de-direcciones-de-bolivia'
hidden: false
createdAt: 2026-09-30T00:00:00.000Z
updatedAt: 2026-09-30T00:00:00.000Z
contentType: updates
productTeam: Checkout
slugEN: '2026-09-30-bolivia-address-database-update'
locale: es
announcementSynopsisES: 'La base de direcciones de Bolivia se actualizó con los datos oficiales del Censo 2024. Las tiendas que usan códigos postales bolivianos deben revisar las plantillas de envío y los puntos de recogida.'
tags:
  - Checkout
  - Logística
---

VTEX actualizó la base de direcciones de Bolivia utilizada en el checkout. Ahora, departamentos, provincias, municipios y códigos postales siguen los datos oficiales del [Censo 2024 del Instituto Nacional de Estadística (INE) de Bolivia](https://cpv2024.ine.gob.bo/).

## ¿Qué cambió?

Desde el 30 de septiembre de 2026, la base de direcciones de Bolivia reconoce los 343 municipios oficiales del país. La actualización incluyó los siguientes cambios:

| Campo | Actualización | Ejemplo |
| :-------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------ |
| Códigos postales | Varios municipios pasaron a tener un nuevo código postal. | El código de Sucre pasó de `20511` a `10101`, y el de Cochabamba, de `30400` a `30101`. |
| Provincias | Algunos municipios pasaron a pertenecer a otra provincia, y las provincias duplicadas o con nombres desactualizados se renombraron o se eliminaron. | Pedro Domingo Murillo pasó a ser Murillo. |
| Nombres de municipios | Se corrigió la ortografía de algunos municipios. | Machareti pasó a ser Macharetí. |
| Localidades | El nivel inferior al municipio (comunidades, estancias y distritos) fue eliminado de la base, ya que no forma parte de los datos oficiales. | La localidad Paititi (Beni), de código `10000`, se eliminó. |

> ⚠️ Algunos códigos postales antiguos fueron reasignados a otros municipios. En esos casos, una configuración que todavía usa el código antiguo no genera un error, pero pasa a corresponder a otra localidad. Por ejemplo, el código `20101`, que antes correspondía a Villa Serrano (Chuquisaca), ahora corresponde a Nuestra Señora de La Paz (La Paz).

## ¿Por qué realizamos este cambio?

La base de direcciones de Bolivia estaba desactualizada respecto a los datos oficiales del país. Esto generaba divergencias entre la dirección informada por el cliente y la división territorial oficial, lo que afectaba el cálculo del envío y la entrega de los pedidos.

## ¿Qué se necesita hacer?

Si tu tienda opera en Bolivia, revisa las configuraciones que usan códigos postales bolivianos y actualízalas con los nuevos códigos:

- **Plantillas de envío:** revisa los rangos de códigos postales de las [políticas de envío](https://help.vtex.com/es/docs/tutorials/politica-de-envio) y actualiza la [plantilla de envío](https://help.vtex.com/es/docs/tutorials/plantilla-de-flete) cuando sea necesario.
- **Puntos de recogida:** revisa el código postal registrado en cada [punto de recogida](https://help.vtex.com/es/docs/tutorials/puntos-de-recogida).

Para identificar los códigos que cambiaron consulta la lista completa de cambios a continuación:

<DataTable
  src="data-tables/bolivia-address-database-changes.json"
  columns={[
    { key: 'changeType', label: 'Cambio', sortable: true, filterable: true },
    { key: 'department', label: 'Departamento', sortable: true, filterable: true },
    { key: 'previousProvince', label: 'Provincia anterior', sortable: true, filterable: true },
    { key: 'newProvince', label: 'Provincia actual', sortable: true, filterable: true },
    { key: 'previousLocation', label: 'Municipio o localidad anterior', sortable: true, filterable: true },
    { key: 'newMunicipality', label: 'Municipio actual', sortable: true, filterable: true },
    { key: 'previousCode', label: 'Código postal anterior', type: 'code', sortable: true, filterable: true },
    { key: 'newCode', label: 'Código postal actual', type: 'code', sortable: true, filterable: true },
    { key: 'reassignedTo', label: 'Uso actual del código anterior' },
  ]}
/>

Si tienes dudas, ponte en contacto con el [Soporte VTEX](https://help.vtex.com/es/support).

## Más información

- [Política de envío](https://help.vtex.com/es/docs/tutorials/politica-de-envio)
- [Plantilla de envío](https://help.vtex.com/es/docs/tutorials/plantilla-de-flete)
- [Puntos de recogida](https://help.vtex.com/es/docs/tutorials/puntos-de-recogida)
