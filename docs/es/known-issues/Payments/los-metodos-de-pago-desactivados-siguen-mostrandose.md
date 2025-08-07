---
title: "Los métodos de pago desactivados siguen mostrándose."
id: eZNUFri2GvTOjzoxBXyXf
status: PUBLISHED
createdAt: 2025-05-30T11:58:40.599Z
updatedAt: 2025-05-30T18:27:02.037Z
publishedAt: 2025-05-30T18:27:02.037Z
firstPublishedAt: 2025-05-30T11:58:41.232Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: los-metodos-de-pago-desactivados-siguen-mostrandose
locale: es
kiStatus: Backlog
internalReference: 1235817
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Los cambios realizados en las reglas de pago de las subcuentas no se reflejan para el comprador. Esto provoca que se sigan mostrando métodos de pago que ya no deberían aparecer en la caja, lo que en última instancia provoca una mala experiencia de compra, ya que los compradores no podrán completar su compra.



## Simulación



1. Configurar un entorno VTEX con una cuenta principal (por ejemplo, **miCuenta**) y una subcuenta que comparta el mismo sufijo que la cuenta principal (por ejemplo, sub**miCuenta**), ambas activas y reconocidas por el sistema.
2. Asegúrese de que ambas cuentas tienen al menos un canal de ventas configurado (por ejemplo, canal de ventas 4). Ambas cuentas deben tener reglas de pago activas y configurables.
3. Modificar o desactivar/activar los métodos de pago relevantes para la subcuenta.
4. Simule una compra en la caja de la subcuenta (submiCuenta) y observe que el cambio realizado en la regla de pago de la subcuenta no surte efecto en la caja; el comprador ve la configuración anterior, no la actualizada.



## Workaround


Abra un ticket para el equipo de soporte del producto.





