---
title: 'Transferir crédito entre empresas del mismo grupo económico'
createdAt: '2026-11-24T00:00:00.000Z'
updatedAt: '2026-11-24T00:00:00.000Z'
contentType: tutorial
productTeam: Billing
slugEN: transferring-credit-between-companies-in-the-same-economic-group
locale: es
subcategoryId: credit-wallet
seeAlso:
  - "/es/docs/tutorials/como-funciona-la-transferencia-de-credito-entre-empresas"
  - "/es/docs/tutorials/cartera-de-credito"
  - "/es/docs/tutorials/consultar-cartera-de-credito"
---

Puedes transferir parte del saldo de la [cartera de crédito](/es/docs/tutorials/cartera-de-credito) de una empresa a otra del mismo grupo económico desde la página **Créditos** del Admin VTEX. Esto es útil cuando algunas empresas del grupo tienen crédito excedente y otras consumen más [Master Data](/es/docs/tutorials/master-data-es) que el crédito disponible. Para entender la diferencia entre cuenta, empresa y grupo económico, consulta [Estructura de facturación](/es/docs/tutorials/cartera-de-credito#estructura-de-facturación).

En este artículo, aprenderás a transferir crédito entre empresas y a buscar la empresa de destino por el nombre de la cuenta. Para entender las reglas de la transferencia y el plazo para descontar la factura, consulta [Cómo funciona la transferencia de crédito entre empresas](/es/docs/tutorials/como-funciona-la-transferencia-de-credito-entre-empresas).

## Antes de empezar

Antes de iniciar la transferencia, verifica que cumples los siguientes requisitos:

- **Acceso a la página Créditos:** debes tener el rol [Finance](/es/docs/tutorials/roles-de-usuario-predefinidos#finance), el rol [Finance - Full access](/es/docs/tutorials/roles-de-usuario-predefinidos#finance-full-access) o el recurso `View Credits` de [Billing](/es/docs/tutorials/roles-de-usuario-predefinidos#billing) vinculado a tu rol.
- **Permiso para transferir:** debes tener el recurso `Transfer Credit` de Billing vinculado a tu rol y habilitado en la empresa de origen. Este requisito se aplica a usuarios (email) y a claves de API (`appKey`).

## Instrucciones

Esta es una visión general de los pasos:

- [Transferir crédito](#transferir-crédito)
- [Buscar la empresa de destino por nombre de cuenta](#buscar-la-empresa-de-destino-por-nombre-de-cuenta)

### Transferir crédito

Para transferir crédito de la empresa de origen a otra empresa del grupo económico, sigue las instrucciones a continuación:

1. En el Admin VTEX, haz clic en tu avatar, identificado por la inicial de tu email, en la esquina superior derecha de la pantalla.
2. Haz clic en **Facturación > Créditos**.
3. Haz clic en `Transferir crédito`.
4. En el modal que se abre, completa los campos:
   - **Origen:** muestra la empresa de origen, con el saldo disponible. No puedes modificar este campo.
   - **Destino:** en la lista, selecciona la empresa que recibirá el crédito. La lista muestra solo empresas del mismo grupo económico, con el nombre guardado en Billing. Si dos empresas tienen el mismo nombre, el identificador (ID) aparece junto al nombre.
   - **O busca la empresa por el nombre de la cuenta:** si no sabes el nombre de la empresa, pero conoces el nombre de una de sus cuentas, ingresa el nombre de la cuenta en este campo. La pantalla muestra a qué empresa pertenece la cuenta, y esa empresa pasa a ser el destino de la transferencia. Si la cuenta pertenece a la empresa de origen, la pantalla muestra un mensaje que indica que es la misma empresa y no te deja continuar. Si ninguna cuenta del grupo económico coincide con la búsqueda, la pantalla muestra un mensaje que indica que no hay resultados.

   > ℹ️ El crédito pertenece a la empresa, no a la cuenta. Por eso, la transferencia siempre va a la empresa en su conjunto, incluso cuando la encuentras por el nombre de una cuenta.

   - **Valor:** ingresa el valor que quieres transferir. Debe ser mayor que cero y hasta el saldo disponible de la empresa de origen.
5. Haz clic en `Continuar`.
6. Revisa el resumen de la transferencia, que muestra el origen, el destino, el valor y el nuevo saldo de la empresa de origen.

   > ⚠️ No puedes deshacer la transferencia después de confirmarla. Antes de confirmar, verifica la empresa de destino y el valor.

7. Haz clic en `Sí, transferir {valor}` para confirmar la transferencia. Por ejemplo, si ingresaste **500 USD** en el campo **Valor**, el botón muestra `Sí, transferir 500 USD`.

La transferencia solo se envía después de que la confirmes. Al concluir la transferencia, el modal muestra el identificador de la transferencia, la empresa de destino y el valor transferido. Al cerrar el modal, el sistema actualiza el **Estado de cuenta de créditos** y el saldo de la empresa de origen.

> ℹ️ El crédito transferido solo descuenta la factura si llega a la empresa de destino antes de que Billing genere la factura, el primer día del mes siguiente. Obtén más información en [Plazo para descontar la factura](/es/docs/tutorials/como-funciona-la-transferencia-de-credito-entre-empresas#plazo-para-descontar-la-factura).

## Errores comunes

Si el sistema no completa la transferencia, la pantalla muestra un mensaje con el motivo. Estos son los casos posibles:

- **Saldo insuficiente:** el valor es mayor que el saldo disponible de la empresa de origen. Ingresa un valor menor.
- **Empresa de destino fuera del grupo económico o que no existe:** selecciona otra empresa en la lista del campo **Destino**.
- **Valor no válido:** ingresa un valor mayor que cero.
- **Falta de permiso:** verifica que tu rol tenga el recurso `Transfer Credit` habilitado en la empresa de origen.
- **Transferencia duplicada:** el mensaje describe la transferencia ya realizada. Consulta el **Estado de cuenta de créditos** antes de intentarlo de nuevo.
