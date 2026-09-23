---
title: 'Configurar el antifraude Nethone'
id: 7wyoUovwCkoT998uXkOis8
status: PUBLISHED
createdAt: 2021-06-16T17:00:06.641Z
updatedAt: 2025-09-04T20:09:26.219Z
publishedAt: 2025-09-04T20:09:26.219Z
firstPublishedAt: 2021-06-16T17:19:21.268Z
contentType: tutorial
productTeam: Financial
author: 13Ue4MX9WNiX9f3SVCUZZW
slugEN: setting-up-nethone-antifraud
legacySlug: configurar-antifraude-nethone
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

[Nethone](https://nethone.com/) es una solución antifraude que a través de la inteligencia artificial y el aprendizaje automático (o *machine learning*) identifica aspectos de comportamiento específicos del usuario y minimiza los riesgos y las posibilidades de fraude en las transacciones de su tienda.

> ⚠️ La integración de Nethone en VTEX se realiza mediante **Application Key (App Key)** y **Application Token (App Token)**. Puede encontrar esta información en el paquete del *plugin* que Nethone le enviará después de firmar el contrato. Si tiene alguna duda, póngase en contacto con el equipo de soporte de Nethone.

Para configurar Nethone, necesitará:

1. Configurar el antifraude Nethone
2. Asociar a Nethone una condición de pago
3. Habilitar Google Tag Manager en el checkout
4. Configurar Google Tag Manager
5. Crear el activador de tags

Una vez que se hayan realizado todas las configuraciones, cada intento de compra será analizado por el antifraude y se mostrará en su panel de Nethone.

## Configurar el antifraude Nethone

1. Acceda al __Admin__ de VTEX.
2. Acceda al módulo __Pagos__.
3. Haga clic en __Configuración__.
4. En __Afiliaciones__, haga clic en el botón verde «__+__».
5. En la sección __Antifraudes__, seleccione la opción __Nethone__.
6. En __Nombre de la afiliación__, solo tiene que cambiar a __Nethone__.
7. En los campos __Application Key__ y __Application Token__, ingrese los datos que recibió en el paquete del *plugin*.
8. Haga clic en __Salvar__ para guardar los cambios.

## Asociar a Nethone una condición de pago

Para que Nethone pueda llevar a cabo el análisis antifraude, debe asociarse a las condiciones de pago existentes o crear nuevas condiciones. Para esto, siga las instrucciones a continuación:

1. Acceda al __Admin__ de VTEX.
2. Acceda al módulo __Pagos__.
3. Haga clic en __Configuración__.
4. En __Planes de pago__, haga clic en la condición deseada o siga el tutorial [Configurar una condición de pago](/es/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/6bzGxlz4inf8sKmvZ1c7i3?&utm_source=autocomplete) para crear una nueva condición.
5. Asegúrese de que la condición de pago esté __activada__.
6. Después de seleccionar o crear una nueva condición, habilite la opción __Usando antifraude__.
7. Seleccione la opción __Nethone__.
8. Haga clic en __Salvar__ para guardar los cambios.

## Habilitar Google Tag Manager en el checkout

El siguiente paso de configuración de Nethone se realiza a través de Javascript, mediante la integración con Google Tag Manager. 

1. [Haga clic aquí](http://tagmanager.google.com) y acceda a Google Tag Manager.
2. Inicie sesión en su cuenta. Si aún no tiene una cuenta, solo tiene que crearla.
3. En el panel de inicio, verá un número que comienza con GTM-XXXX. Copie el número.
4. Acceda al __Admin__ de VTEX.
5. Acceda al módulo __Configuración de la tienda__.
6. Seleccione la opción __Checkout__.
7. En __Default__, haga clic en el ícono de engranaje.
8. En el menú superior, seleccione la opción __Checkout__.
9. En __Google Tag Manager__, ingrese el número de identificación que copió. 
10. Haga clic en __Guardar__.

## Configurar Google Tag Manager

> ⚠️ Las configuraciones documentadas a continuación se realizan en un sistema externo a VTEX y pueden descontinuarse sin previo aviso.

Con el número de identificación de la cuenta instalado en el checkout, configure los ajustes a continuación para dar seguimiento a los intentos de compra que ocurran en su tienda. 

1. [Haga clic aquí](http://tagmanager.google.com) e inicie sesión en Google Tag Manager.
2. En el panel de inicio, haga clic en __Variables__.
3. En __Variables definidas por el usuario__, haga clic en __Nueva__. 
4. En __Configuración de la variable__, haga clic en el ícono de lápiz.
5. En la sección __Utilidades__, seleccione la opción __Constante__.
6. Asigne *profilerUrl* como nombre de la variable.
7. En el campo __Valor__, ingrese el enlace proporcionado por Nethone en el paquete de plugins que recibió.
8. Haga clic en __Guardar__.

## Crear el activador de tags

Después de crear la variable, siga los pasos a continuación para definir los activadores:

1. En panel de Google Tag Manager, acceda a __Activadores__.
2. Haga clic en __Nuevo__.
3. Asigne el nombre *Profiler Trigger* al activador.
4. En __Configuración del activador__, haga clic en el ícono de lápiz.
5. En la sección __Otros__, seleccione __Evento personalizado__.
6. En __Nombre del evento__, ingrese la siguiente información, incluya los paréntesis: (email|profile|shipping|payment).
7. Habilite la opción __Utilizar una expresión regular que coincida con__.
8. En __Este activador se activa en__, seleccione __Algunos eventos personalizados__.
9. Seleccione las opciones __Page Path - coincide con la expresión regular - Checkout__.
10. Haga clic en __Guardar__.
11. Vuelva al panel de inicio y haga clic en __Etiquetas__. 
12. Haga clic en __Nueva__.
13. En __Configuración de la etiqueta__, haga clic en el ícono de lápiz.
14. En la sección __Personalizado__, seleccione la opción __HTML personalizado__.
15. Pegue el siguiente código en el campo HTML y asegúrese de que en el campo __src="your profiling link"__ el valor ingresado sea el mismo que Nethone le proporcionó en el paquete de *plugins*.

 ```
    <script type="text/javascript" id="nthScript" crossorigin="use-credentials"
    src="yourprofilinglink" async></script>
    <script>
    (function() {
    function uuidv4() {
    return
    'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r &
    0x3 | 0x8);
    return v.toString(16);
    });
    }
    var attRef = uuidv4();
    window.vtex.deviceFingerprint = attRef;
    var options = {
    attemptReference: attRef,
    sensitiveFields: []
    };
    if (window.dftp) {
    dftp.init(options);
    } else {
    var el = document.getElementById("nthScript");
    el.addEventListener("load", function() {
    dftp.init(options);
    });
    }
    })()
    </script>
    ```

16. Habilite la opción __Compatible con document.write__.
17. En __Configuración avanzada > Opciones de activación de la etiqueta__, seleccione Una vez por página.
18. En el menú __Activación__, haga clic en el ícono de lápiz.
19. Seleccione la opción *Profile Trigger* como activador y haga clic en __Guardar__. 
20. En la página que aparece, haga clic en __Enviar__.
21. En __Nombre de la versión__, ingrese *Nethone Profiler* y haga clic en __Publicar__.

Una vez hecho esto, el antifraude Nethone se habrá instalado correctamente y estará listo para procesar sus transacciones.
