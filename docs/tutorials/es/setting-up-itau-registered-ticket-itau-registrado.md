---
title: 'Configurar boleto registrado Itaú (Itaú Registrado)'
id: 6MEHf1oDTOkuWM2CaYi4gu
status: DRAFT
createdAt: 2018-11-30T18:23:45.696Z
updatedAt: 2024-03-18T18:01:00.472Z
publishedAt: 
firstPublishedAt: 2018-12-11T17:59:44.827Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-boleto-registrado-itau-itau-registrado
locale: es
legacySlug: configurar-boleto-registrado-itau-itau-registrado
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

>❗ Esta integración de pago ya no se puede configurar en la plataforma debido al [proceso de descontinuación de los proveedores legados](https://help.vtex.com/es/announcements/descontinuacion-de-conectores-de-pago-legados-en-2024--4R5YIjUu1IWkiOHzXtQU14) y el artículo pronto se eliminará del Help Center. Consulte con su proveedor para obtener más información sobre el desarrollo de la nueva integración de pago y los pasos necesarios para migrar la configuración en su tienda.

Para configurar el boleto registrado de Itaú, usted puede elegir entre dos conectores diferentes: __Invoice Itaú__ (también conocido como Itaú Registrado o Boleto Itaú, que vas a aprender a configurar en este artículo) o el [ItauShopline](https://help.vtex.com/es/tutorial/configurar-boleto-registrado-itau--3TqzCHPU7KIYGsOKuUeQcq). En el caso del __Invoice Itaú__, la generación del boleto es hecha de forma transparente (sin redireccionamiento para el sitio del Itaú), pero la conciliación es hecha a través de archivos.

Después de registrar una de estas afiliaciones de gateway, debe configurar la condición de pago de boleto bancario. De esta forma, los boletos emitidos serán registrados por Itaú.

## Configurar la afiliación de gateway de Invoice Itaú (Itaú Registrado)

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __BankInvoiceItau__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. Introduzca el nombre de su empresa en el campo __Nombre de la empresa__ (Nome da Empresa). Recuerde que esa es la información que va a venir en el campo _Beneficiario_ del boleto.
5. En el campo __CNPJ__, llene el número de registro de su empresa, sin puntuación.
6. Rellene los datos bancarios de su empresa en los campos __Agencia__ y __Número de Cuenta__.
7. En __Validad del boleto en días__, elija la cantidad de días (contados a partir de la generación del boleto) que su cliente tendrá para hacer el pago.
8. En el campo __Instrucciones en el boleto al Cajero__ (Instruções no boleto ao Caixa), escriba las instrucciones que se imprimir en el boleto.
9.  Rellene los campos de registro con los datos proporcionados por Itaú: _Cartera_ (Portfólio ou Carteira), _Convenio_ y _Código del Cedente_.
10. En __Dirección del Beneficiario__ (Endereço do Beneficiário), introduzca la dirección comercial de su empresa (respetando el límite de hasta _200 caracteres_).
11. En el campo __¿Registrado?__, seleccione la opción _Si_. Al hacer esto, nuevos campos van a surgir para que usted llene.
12. En __Ambiente de Autenticación__, introduzca el valor `beta`.
13. En el campo __Tipo de Ambiente__, introduzca el valor `2`.
14. Rellene los campos de registro con los datos proporcionados por Itaú: _Id del cliente_, _Secret del cliente_ y _Chave del itau_.
15. En el campo __Días hasta que expire la transacción del boleto__, defina en cuántos días, después del vencimiento del boleto, expira la propia transacción. 
16. Haga clic en el botón __Salva__.

## Configurar la condición de pago Boleto Bancario
1. Después de configurar la afiliación de gateway __Invoice Itaú__, haga clic en la pestaña __Planes de Pago__.
2. A continuación, haga clic en el botón __+__.
3. En la sección __Factura__, seleccione la opción __Boleto Bancario__.
4. Llene el nombre de la condición de pago, para facilitar su identificación.
5. Haga clic en el botón __Status__ para activar la condición de pago.
6. Seleccione la afiliación de gateway configurada anteriormente (__Boleto Itaú__).
7. Si lo desea, puede configurar una [condición especial](/es/tutorial/condiciones-especiales/) para esta condición de pago.
8. Haga clic en el botón __Salva__.

