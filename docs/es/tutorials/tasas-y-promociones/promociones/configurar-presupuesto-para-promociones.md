---
title: 'Configurar presupuesto para promociones'
id: 3ZCbnELZdMNykXhqBYdFOa
status: PUBLISHED
createdAt: 2025-09-10T10:30:37.848Z
updatedAt: 2025-10-13T13:56:04.974Z
publishedAt: 2025-10-13T13:56:04.974Z
firstPublishedAt: 2025-09-10T11:43:30.901Z
contentType: tutorial
productTeam: Others
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: configuring-promotion-budgets
legacySlug: configurar-presupuesto-para-promociones
locale: es
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

> ℹ️ Esta funcionalidad está en fase de pruebas (beta cerrada). Si estás interesado en participar, abre un ticket con el equipo de [ Soporte de VTEX ](https://supporticket.vtex.com/support).

El módulo Promociones del Admin VTEX permite establecer un presupuesto para limitar el total de descuentos concedidos en una promoción. Esta funcionalidad ayuda a controlar el gasto en beneficios, garantizando que los descuentos no superen un límite previamente definido.

Además, el módulo ofrece a los retailers la posibilidad de supervisar, ajustar o descontinuar promociones según el consumo del presupuesto. También proporciona visibilidad clara y en tiempo real del valor disponible, lo que facilita la toma de decisiones sobre la modificación o extensión de la promoción.

Actualmente, el control del presupuesto es compatible con los siguientes tipos de beneficios:

- **Comprar juntos:** aplica a todas las promociones.
- **Compra uno y lleva uno gratis:** precio máximo.
- **Más por menos:** aplica a todas las promociones.
- **Descuento progresivo:** aplica a todas las promociones.
- **Promoción regular:** valor fijo, precio porcentual, precio máximo y listas de precios.

> ⚠️ Si el beneficio de la promoción se cambia a un tipo no compatible con la funcionalidad de presupuesto, la promoción se pausará automáticamente, pero la configuración no se eliminará. La promoción continuará activa, pero no se aplicará un límite de gasto. Si el beneficio vuelve a ser compatible, el control de presupuesto se reactivará y se retomará la aplicación del límite de gasto.

## Cómo funciona el presupuesto
El presupuesto define el valor máximo permitido en la concesión de descuentos de la promoción mientras esté vigente.

A cada aplicación de descuento, el valor deducido del presupuesto se calcula de la siguiente manera:

Valor del SKU original – Valor del SKU con descuento = Valor deducido del presupuesto

> ℹ️ Al duplicar una promoción existente, se copian todos los ajustes excepto el presupuesto. Este campo no se duplica automáticamente y debe completarse manualmente en la nueva promoción.

Para utilizar esta funcionalidad, configura un presupuesto al crear la promoción en el Admin VTEX.

## Cómo crear una promoción con presupuesto
1. En el Admin VTEX, accede a **Promociones > Promociones**, o ingresa **Promociones** en la barra de búsqueda en la parte superior de la página.
2. Haz clic en `Crear promoción`.
3. Selecciona el tipo de promoción que deseas.
4. En el panel derecho, haz clic en el botón <i class="fas fa-plus" aria-hidden="true"></i> junto a Presupuesto.
5. Define el valor total disponible para descuentos en el campo Presupuesto de la promoción con el valor total que se puede consumir en descuentos en esta promoción.
6. Haz clic en `Aplicar` para asociar el presupuesto a la promoción.
7. Llena la información restante de la promoción.
8. Hacer clic en `Guardar`.

> ❗ En escenarios de alta competencia entre pedidos simultáneos, el presupuesto final consumido puede superar levemente el previsto, debido al gran volumen de solicitudes procesadas al mismo tiempo.

## Editar el presupuesto de una promoción
Si el presupuesto de una promoción se agota y la promoción queda pausada, puedes ajustarlo aumentando o disminuyendo el valor:

1. En el Admin VTEX, accede a **Promociones > Promociones**, o ingresa **Promociones** en la barra de búsqueda en la parte superior de la página.
2. Selecciona la promoción deseada.
3. Ajusta el presupuesto.
4. En el panel derecho, haz clic <i class="fas fa-pencil-alt" aria-hidden="true"></i> junto a Presupuesto.
5. Actualiza el campo Presupuesto de la promoción con el nuevo límite.
6. Haz clic en `Aplicar`.
7. Haz clic en `Salvar`.

## Remover el presupuesto de una promoción
Para desvincular un presupuesto de una promoción sigue estos pasos:

1. En el Admin VTEX, accede a Promociones > Promociones, o ingresa Promociones en la barra de búsqueda en la parte superior de la página.
2. Selecciona la promoción deseada.
3. Ajusta el presupuesto.
4. En el panel derecho, haz clic en el icono “Papelera” <i class="far fa-trash-alt" aria-hidden="true"></i> junto a Presupuesto.
5. En la ventana de confirmación, haz clic en `Continuar`.
6. Haz clic en `Guardar`.

## Aplicación de la promoción al agotarse el presupuesto
El status Activo indica que la promoción puede aplicarse. Sin embargo, su aplicación también depende de la disponibilidad de presupuesto.

Cuando el presupuesto se consume por completo, la promoción deja de aplicarse automáticamente, aunque el status continúe Activo y la fecha de finalización aún no haya llegado. La promoción solo se aplicará nuevamente después de actualizar el presupuesto.

> ⚠️ Asegúrate de revisar o remover cualquier comunicación activa relacionada con la promoción.

