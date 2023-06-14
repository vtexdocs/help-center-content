---
title: '¿Cómo hacer transferencias?'
id: 4tgh8GByPAUWy8AMX73Z6l
status: DRAFT
createdAt: 2020-03-09T22:28:14.512Z
updatedAt: 2023-01-27T01:15:05.623Z
publishedAt: 
firstPublishedAt: 2020-03-11T23:18:40.043Z
contentType: tutorial
productTeam: Financial
author: 7qy2DBsUp8U5P9lqV0JHfR
slug: como-hacer-transferencias
legacySlug: como-hacer-transferencias-a-traves-de-vtex-payment
subcategory: 6J5IKNejpAxT1Ie23PDtU4
---

La transferencia de VTEX Payment es similar al proceso hecho en un cajero electrónico común. 

Los datos necesarios son:

- Institución bancaria;
- Agencia - incluyendo 0 y sin dígito;
- Cuenta bancaria.

Recuerde que, en el caso de que otro sea el titular de la cuenta también deberá informar el nombre y CPF/CNPJ (documento de identificación fiscal) del favorecido.

También señalamos que, para transferencias a otro titular, VTEX Payment cuenta con Two Factor - un sistema de autenticación en el que se envía un código por SMS al número del titular de la cuenta. Es decir, el teléfono celular registrado en VTEX Payment.

Funciona de la siguiente manera: al hacer clic en el botón "Confirmar Transferencia", recibirá un código de identificación por SMS que deberá escribir en el Pop-up que aparecerá en la pantalla. De esta manera, la transferencia será efectuada.

Esto sucede porque solo el titular de la cuenta es responsable de autorizar las transacciones para otros titulares. Si está interesado, puede registrar un dependiente para el titular de la cuenta. Simplemente entre en contacto con VTEX.

Dicho esto, realice el procedimiento de transferencia para otro titular:

1. Acceda al __Admin VTEX__.
2. Del lado izquierdo de la pantalla, haga clic en el módulo __VTEX Payment__.
3. Haga clic en __Resumen de la Cuenta__.
4. Del lado de Pagar Factura, haga clic en el botón __Transferir__.
5. En el campo __Favorecido__, seleccione la opción __“Otro Titular”__.
6. Complete los campos __“Nombre”__ y __“CPF/CNPJ”__.
7. Luego, complete los campos vacíos en __Datos Bancarios__.
8. En la esquina inferior derecha de la pantalla, haga clic en el botón gris __“Continuar”__.
9. En el campo __Valor__, digite la cantidad que se transferirá.
10. Asegúrese de que los __datos__ informados están __correctos__.
11. En la esquina inferior derecha de la pantalla, haga clic en el botón __Confirmar Transferencia__.
12. Ingrese el __código__ enviado por SMS en el __Pop-up__ que aparece en la pantalla.
13. En la esquina inferior derecha del Pop-up, haga clic en __Validar__.

El proceso para hacer una transferencia para el mismo titular es aún más simple.

Vea a continuación:

1. Acceda al __Admin VTEX__.
2. Del lado izquierdo de la pantalla, haga clic en el módulo __VTEX Payment__.
3. Haga clic en __Resumen de la Cuenta__.
4. Del lado de Pagar Cuenta, haga clic en el botón __Transferir__.
5. En el campo __Favorecido__, seleccione la opción __“Mismo Titular”__.
6. Complete los campos vacíos en __Datos Bancarios__.
7. En la esquina inferior derecha de la pantalla, haga clic en el botón gris __“Continuar”__.
8. En el campo __Valor__, digite la cantidad que se transferirá.
9. Asegúrese de que los __datos__ informados están __correctos__.
10. Haga clic en el botón __Confirmar Transferencia__.

En ambos casos, el sistema envía un mensaje al correo electrónico del titular de la cuenta. Al igual que con el número de teléfono celular utilizado en Two Factor, el correo electrónico en cuestión será el ingresado en el registro de VTEX Payment.

El mensaje informa el status - si se completó con éxito o si se produjo algún error - y la descripción de la transferencia. El administrador de la tienda puede verificar la información de la transacción como: valor, cuenta corriente, agencia y datos del favorecido.

Sin embargo, esta no es la única manera de verificar esta información. En caso de ser necesario, el administrador de la tienda también puede consultarla en el módulo de __Declaraciones (Extracto Financiero)__. En la pestaña __Declaraciones__, simplemente seleccione la opción  deseada para ver los detalles.

<div class="alert alert-info">
Al igual que en las transacciones bancarias, la transferencia solicitada puede ser denegada si el administrador de la tienda alcanza el límite de su cuenta. De ser necesario, se puede solicitar el aumento del límite mediante un ticket en la plataforma de atención VTEX.
</div>
