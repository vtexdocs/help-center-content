---
title: 'Prevención de Fraude (Beta)'
createdAt: 2026-03-27T00:00:00.000Z
updatedAt: 2026-03-27T00:00:00.000Z
contentType: tutorial
productTeam: Others
slugEN: fraud-prevention
locale: es
---

>ℹ️ Esta funcionalidad es parte del producto [VTEX Shield](https://help.vtex.com/es/docs/tutorials/vtex-shield). Si ya eres cliente de VTEX y deseas adoptar VTEX Shield en tu empresa, ponte en contacto con nuestro [Soporte comercial](https://help.vtex.com/es/docs/tracks/soporte-comercial). Pueden aplicarse cargos adicionales. Si aún no eres cliente VTEX, pero te interesa esta solución, llena el [formulario de contacto](https://vtex.com/es-mx/contacto/).

La **Prevención de fraude** es una funcionalidad de **VTEX Shield** que protege tu tienda contra ataques de pruebas de tarjetas (card testing).

Los ataques de pruebas de tarjetas ocurren cuando los estafadores prueban diferentes combinaciones de tarjetas robadas en un corto periodo de tiempo para identificar las que están activas. Este tipo de práctica puede generar un alto volumen de intentos de pago fallidos, costos adicionales con adquirentes y herramientas antifraude, además de impactar la operación de la tienda.

En cada intento de pago realizado en el checkout, la solución realiza un análisis de riesgo de fraude en el pago y asigna una puntuación de fraude (0 a 1), que indica la probabilidad de que la transacción forme parte de un ataque de prueba de tarjetas.

Con base en esta puntuación el sistema recomienda acciones preventivas y cuando el bloqueo automático está habilitado puede bloquear intentos considerados sospechosos.

El objetivo de la funcionalidad es permitir acciones en el flujo de compra siempre que el riesgo de la transacción sea alto, reduciendo el impacto de ataques y protegiendo la operación del retailer.

Para acceder a la página sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda**.
2. En **Shield**, haz clic en **Prevención de Fraude**.

![prevencion-de-fraude-es](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/seguridad/vtex-shield/prevencion-de-fraude.png)

## Información general

La página contiene los siguientes indicadores:

* **Intentos de transacciones:** total de intentos de transacción procesados en el periodo seleccionado.
* **Intentos de transacciones sospechosas:** transacciones identificadas como potencialmente fraudulentas por el algoritmo.

### Historial de detecciones

La tabla **Historial de detecciones** muestra los detalles de los intentos analizados:

| Columna | Descripción |
| :---- | :---- |
| ID del intento de transacción | Identificador único del intento de pago generado por la plataforma. |
| Hora de inicio | Fecha y hora en que se inició el intento de transacción. |
| Valor | Valor total de la transacción. |
| Pago  | Red de la tarjeta utilizada. |
| Acción del algoritmo | Acción ejecutada automáticamente con base en la puntuación de fraude (autorizar o bloquear la transacción). La acción ejecutada puede diferir de la acción sugerida si el bloqueo automático está desactivado en el momento del intento. |
| Acción sugerida | Acción recomendada por el mecanismo de análisis de fraude para ese intento de transacción, de acuerdo con el riesgo identificado. De forma predeterminada, a partir de una puntuación de 0.9 se recomienda bloquear la transacción, pero esta configuración puede modificarse al contratar el producto o contactando al [Soporte](https://help.vtex.com/es/docs/tutorials/abrir-tickets-para-el-soporte-vtex). |
| Puntuación de fraude | Puntuación de 0 a 1 que indica la probabilidad de fraude. Cuanto más cerca de 1, mayor es la probabilidad. |

Esta página también te permite realizar las siguientes acciones:

* [Filtrar intentos de transacción por periodo](#filtrar-intentos-de-transacción-por-periodo)
* [Activar bloqueo](#activar-bloqueo)
* [Desactivar bloqueo](#desactivar-bloqueo)

## Permisos requeridos

Para acceder y gestionar la funcionalidad de prevención de fraude, el usuario debe tener un [rol](https://help.vtex.com/es/docs/tutorials/roles) con los siguientes [recursos de License Manager](https://help.vtex.com/es/docs/tutorials/recursos-del-license-manager):

* **Producto:** Fraud Prevention
* **Categoría:** Transaction Attempts
* **Recursos:** View transaction attempts y Edit transaction attempt action settings

## Filtrar intentos de transacción por periodo

De manera predeterminada, la página muestra los datos de los **últimos 7 días**.

Para cambiar el periodo, haz clic en el periodo actual y luego en la opción deseada:

* Hoy
* Últimos 7 días
* Últimos 30 días
* Personalizada: selecciona la fecha de inicio y la fecha de fin, luego haz clic en Aplicar.

El historial se actualizará automáticamente con los intentos de transacción en el periodo seleccionado.

## Activar bloqueo

Para activar el bloqueo automático de transacciones de alto riesgo:

1. Haz clic en el menú **⋮**.
2. Haz clic en **Activar bloqueo**.

A partir de ese momento, las transacciones consideradas sospechosas podrán bloquearse automáticamente según la configuración del algoritmo.

## Desactivar bloqueo

Para desactivar el bloqueo automático:

1. Haz clic en el menú **⋮**.
2. Haz clic en **Desactivar bloqueo**.
3. Haz clic en **Confirmar**. 

Los intentos seguirán analizándose y mostrándose en el historial, pero no se bloquearán automáticamente. Cuando el bloqueo automático está desactivado, la funcionalidad opera en modo de monitoreo (observación), registrando y analizando los intentos sin impedir el checkout.

## Más información

* [VTEX Shield](https://help.vtex.com/es/docs/tutorials/vtex-shield)
