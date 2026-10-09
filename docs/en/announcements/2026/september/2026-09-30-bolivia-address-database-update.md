---
title: 'Bolivia address database update'
slug: '2026-09-30-bolivia-address-database-update'
hidden: false
createdAt: 2026-09-30T00:00:00.000Z
updatedAt: 2026-09-30T00:00:00.000Z
contentType: updates
productTeam: Checkout
slugEN: '2026-09-30-bolivia-address-database-update'
locale: en
announcementSynopsisEN: 'The Bolivia address database has been updated with official data from the 2024 Census. Stores using Bolivian postal codes must review their shipping rate templates and pickup points.'
tags:
  - Checkout
  - Logistics
---

VTEX updated the Bolivia address database used at checkout. Departments, provinces, municipalities, and postal codes now follow the official data from the [2024 Census by Bolivia's Instituto Nacional de Estadística (INE)](https://cpv2024.ine.gob.bo/).

## What has changed?

As of September 30, 2026, Bolivia's address database includes all 343 official municipalities. The update introduced the following changes:

| Field | Update | Example |
| :----------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| Postal codes | Several municipalities received a new postal code. | The code for Sucre changed from `20511` to `10101`, and the code for Cochabamba changed from `30400` to `30101`. |
| Provinces | Some municipalities were reassigned to a different province, and duplicate or outdated province names were renamed or removed. | Pedro Domingo Murillo was renamed Murillo. |
| Municipality names | The spelling of some municipalities was corrected. | Machareti is now spelled Macharetí. |
| Localities | The level below the municipality (communities, estancias, and districts) was removed from the database, as it isn't part of the official data. | The Paititi (Beni) locality, with code `10000`, was removed. |

> ⚠️ Some old postal codes have been reassigned to different municipalities. In these cases, a configuration that still uses the old code won't generate an error, but will match a different locality. For example, code `20101`, which previously corresponded to Villa Serrano (Chuquisaca), now corresponds to Nuestra Señora de La Paz (La Paz).

## Why did we make this change?

Bolivia's address database was outdated compared to the country's official data. This caused discrepancies between the address provided by the customer and the official territorial division, affecting shipping calculations and order delivery.

## What needs to be done?

If your store operates in Bolivia, review the settings that use Bolivian postal codes and update them with the new codes:

- **Shipping rate templates:** Check the postal code ranges in your [shipping policies](https://help.vtex.com/en/docs/tutorials/shipping-policy) and update the [shipping rate template](https://help.vtex.com/en/docs/tutorials/shipping-rate-template) when needed.
- **Pickup points:** Check the postal code added for each [pickup point](https://help.vtex.com/en/docs/tutorials/pickup-points).

See the full list of changes below to identify which codes changed:

<DataTable
  src="data-tables/bolivia-address-database-changes.json"
  columns={[
    { key: 'changeType', label: 'Change', sortable: true, filterable: true },
    { key: 'department', label: 'Department', sortable: true, filterable: true },
    { key: 'previousProvince', label: 'Previous province', sortable: true, filterable: true },
    { key: 'newProvince', label: 'Current province', sortable: true, filterable: true },
    { key: 'previousLocation', label: 'Previous municipality or locality', sortable: true, filterable: true },
    { key: 'newMunicipality', label: 'Current municipality', sortable: true, filterable: true },
    { key: 'previousCode', label: 'Previous postal code', type: 'code', sortable: true, filterable: true },
    { key: 'newCode', label: 'Current postal code', type: 'code', sortable: true, filterable: true },
    { key: 'reassignedTo', label: 'Previous code current use' },
  ]}
/>

If you have any questions, contact [VTEX Support](https://help.vtex.com/en/support).

## Learn more

- [Shipping policy](https://help.vtex.com/en/docs/tutorials/shipping-policy)
- [Shipping rate template](https://help.vtex.com/en/docs/tutorials/shipping-rate-template)
- [Pickup points](https://help.vtex.com/en/docs/tutorials/pickup-points)
