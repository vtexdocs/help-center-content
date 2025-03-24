---
title: 'Configurar Merchant ID en Apple Pay'
id: 3pPmMlmexyKwWU6QckGiIC
status: ARCHIVED
createdAt: 2018-05-21T14:35:20.296Z
updatedAt: 2022-01-27T19:54:36.660Z
publishedAt: 
firstPublishedAt: 2018-05-23T19:25:49.127Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slugEN: setting-up-merchant-id-in-apple-pay
locale: es
legacySlug: configurar-merchant-id-en-apple-pay
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

>⚠️ Este proceso será más sencillo cuando Apple valide las integraciones con la plataforma VTEX. Este artículo se actualizará para satisfacer al nuevo escenario.

Para que su tienda reciba pagos con __Apple Pay__, necesitará configurar el __Merchant ID__ en su cuenta de desarrollador en Apple (`developer.apple.com`). 

## Creando el Merchant ID

El primer paso es crear el propio Merchant ID – la identificación de su tienda en el sistema Apple. 

Este registro funciona como su inicio de sesión en la configuración de Apple Pay en VTEX. Más específicamente, es el Merchant ID que se informará en el registro de la afiliación de gateway que, a su vez, procesará los pagos.

De este modo, es importante que elija un ID fácil de memorizar. 
Recomendamos que sea semejante a `merchant.nombreSuTienda.vtexpayments.com.br.apple`.

Además, no hay riesgo de que su Merchant ID sea igual al de otra tienda. El sistema de Apple garantiza que cada identificación sea única.

Dicho esto, verifique el siguiente procedimiento:

1. Acceda a su __cuenta de desarrollador__ Apple en `https://developer.apple.com/account/#/overview/`.
2. Seleccione la opción __Certificates, ID & Profiles__.
![AP1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Payments/Payment%20Settings/configurar-merchant-id-en-apple-pay_1.PNG)
3. Haga clic en __ Identifiers__.
 ![AP2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Payments/Payment%20Settings/configurar-merchant-id-en-apple-pay_2.PNG)
4. Al lado de Identifiers, haga clic en __botón azul +__.
![AP3](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Payments/Payment%20Settings/configurar-merchant-id-en-apple-pay_3.PNG)
5. Seleccione la opción __Merchant IDs__.
6. Haga clic en el botón azul __Continue__.
![AP4](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Payments/Payment%20Settings/configurar-merchant-id-en-apple-pay_4.PNG)
7. Rellene el campo __Description__.
8. Rellene el campo __Identifier__.
9. Haga clic en el botón __Continue__.
![AP5](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Payments/Payment%20Settings/configurar-merchant-id-en-apple-pay_5.PNG) 

De este modo, se creará el __Merchant ID__. 

## Creando el certificado para procesar pagos

Ahora que usted tiene el Merchant ID, necesita un certificado para activarlo.   

Este certificado se crea en VTEX. Por lo tanto, el administrador de la tienda debe [abrir un ticket] (https://help.vtex.com/es/tutorial/abrir-chamados-para-o-suporte-vtex?locale=pt "abrir un ticket") de soporte para que el equipo responsable por las integraciones le reenvíe el archivo.

En seguida, el administrador de la tienda puede enviarlo al sistema Apple Pay.

Para comenzar esta etapa, continúe con las instrucciones:

1. En el menú del lado izquierdo, seleccione __Certificates__.
![AP6](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Payments/Payment%20Settings/configurar-merchant-id-en-apple-pay_6.PNG)
2. Digite su __Merchant ID__ creado recientemente en la barra de búsqueda.
3. Seleccione el __Merchant ID__ deseado.
![AP7](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Payments/Payment%20Settings/configurar-merchant-id-en-apple-pay_7.PNG)
4. En el ítem __ Apple Pay Payment Processing Certificate__, haga clic en el botón __Create Certificate__.
![AP8](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Payments/Payment%20Settings/configurar-merchant-id-en-apple-pay_8.PNG)
5. Asegúrese de que la pregunta *"Will payments associated with this Merchant ID be processed exclusively in China?"* esté marcada con __la opción default (No)__.
![AP9](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Payments/Payment%20Settings/configurar-merchant-id-en-apple-pay_9.PNG)

En seguida, será redirigido a una pantalla con instrucciones sobre la creación del CRS (Certificate Signing Request). 

Aquí es cuando debe abrir el ticket con la solicitud del certificado. El equipo de VTEX enviará un archivo `{{merchantID}}.csr.` y, con este guardado en su computadora, deberá hacer clic en el botón __Continue__.

Después de eso, el administrador de la tienda será redirigido nuevamente. Esta vez a la página de upload.

Con el {{merchantID}}.csr. que recibió, finalice:

1. Haga clic en __Choose File__.
2. Seleccione el __archivo CSR__ deseado.
3. Haga clic en el botón __Continue__.
![AP10](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Payments/Payment%20Settings/configurar-merchant-id-en-apple-pay_10.PNG)
4. Haga clic en __Download__.
![AP11](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Payments/Payment%20Settings/configurar-merchant-id-en-apple-pay_11.PNG)
5. Haga clic en __Done__.

## Registrando dominios en el Merchant ID
El siguiente paso es asociar los dominios utilizados por su tienda Merchant ID que acabó de crear.

Primero, debe validar cada una de las URL deseadas. Una vez que este paso se complete correctamente, el propio sistema de Apple creará un archivo `.txt` e indicará en cuál dominio debe asociarse este documento.

Finalmente, es necesario importar este archivo al sistema de VTEX a través de Postman - herramienta de gestión de [APIs](https://help.vtex.com/es/tutorial/introduccion-a-las-apis-vtex--3SjAqQ0BeUqu2ge8AiIkmW "APIs").

>⚠️ **Importante:** solo puede hacerse esta validación de un dominio a la vez. Esto significa que si su tienda usa 10 dominios diferentes, el proceso tendrá que repetirse 10 veces.

Verifique las instrucciones:

1. Digite el __Merchant ID__ creado recientemente en la barra de búsqueda.
![AP12](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Payments/Payment%20Settings/configurar-merchant-id-en-apple-pay_12.PNG)
2. Haga clic en el __Merchant ID__ deseado.
3. En el módulo __Merchant Domains__, haga clic en el botón __Add Domain__.
![AP13](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Payments/Payment%20Settings/configurar-merchant-id-en-apple-pay_13.PNG)
4. Agregue el dominio en el campo __Enter the domain you wish to register__.
5. Haga clic en __Save__.

Ahora, para hacer upload del archivo `.txt` por medio de la API, prosiga con las instrucciones:   

1. Haga clic en __Download__ y no realice ninguna alteración en el archivo.  
![AP14](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Payments/Payment%20Settings/configurar-merchant-id-en-apple-pay_14.PNG)
2. Abra el archivo `.txt` y __copie__ todo el contenido.

En seguida, inicie una sesión en el Postman. Usted realizará una llamada vía POST para la CDN de VTEX:  

1. Configure la ruta __POST__ `https://{{sudominio}}/.well-known/raw/{token}`.
2. Asegúrese de que __todo__ el contenido del archivo `.txt` esté entre __comillas dobles__ y __ sin salto de líneas __.
3. Agregue en el header el __X-VTEX-API-AppKey__ y el __X-VTEX-API-AppToken__.

Al realizar la llamada *POST*, la respuesta debe informar que el certificado se guardará durante 60 minutos. Durante este tiempo, debe completar la validación del dominio.

Ahora, regrese al sitio web de Apple. En la misma pantalla donde descargó el archivo `.txt`, haga clic en __Verify__.
![AP15](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Payments/Payment%20Settings/configurar-merchant-id-en-apple-pay_15.PNG)

Así, si el procedimiento se realiza correctamente, el dominio se registrará con el estado __Verified__. Si lo desea, puede repetir todo el proceso para registrar más dominios utilizando el botón __Add Domain__ en la sección __Merchant Domains__.

## Creando un Merchant Identity Certificate

Ahora, debe generar un certificado del Merchant ID, que se utilizará cada vez que Apple muestre la pantalla de Apple Pay a sus clientes. Para completar las etapas de este proceso, es importante que tenga una computadora Mac disponible.

Para completar la acción, deberá crear una contraseña para proteger los datos exportados.

>ℹ️ Atención: Recomendamos que la contraseña sea fácil de recordar, ya que se ingresará en el campo Apple Merchant Password en el momento de la configuración de la afiliación de gateway en VTEX.

1. Acceda al módulo __Certificates, Identifiers & Profilers__.
2. En el menú del lado izquierdo, haga clic en __Identifiers__.
3. En la esquina superior derecha, filtre por __Merchant IDs__.
![AP16](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Payments/Payment%20Settings/configurar-merchant-id-en-apple-pay_16.PNG)
4. Seleccione el __Merchant Identifier__ deseado.
5. Haga clic en __Create Certificate__.
![AP17](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Payments/Payment%20Settings/configurar-merchant-id-en-apple-pay_17.PNG)
6. Siga las __instrucciones__ que se muestran en la pantalla para crear un certificado. 
7. Haga clic en el botón __Continue__.
![AP18](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Payments/Payment%20Settings/configurar-merchant-id-en-apple-pay_18.PNG)
8. Haga clic en __Download__.    
![AP19](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Payments/Payment%20Settings/configurar-merchant-id-en-apple-pay_19.PNG)

Ahora, cuando se descargué el archivo, haga doble clic para instalarlo en Keychain Access.

Luego, continúe con el procedimiento:

1. Abra el __Keychain Access__.
2. Localice el __certificado__ creado en el paso cuatro anterior.
3. Haga clic derecho en el ícono __llave__. ![AP20](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Payments/Payment%20Settings/configurar-merchant-id-en-apple-pay_20.PNG) 
4. Haga clic en __Export__.
5. Nombre el __certificado__.
6. Seleccione el formato de exportación __.p12__.
7. Haga clic en el botón __OK__.

Finalmente, guarde el certificado en su computadora. Este archivo debe cargarse en el campo __Apple Merchant Certificate (.p12)__ de la configuración de la afiliación de gateway que procesará Apple Pay en su tienda VTEX.

Después de realizar todas estas etapas, tendrá un Merchant ID configurado en Apple Pay, un certificado .p12 guardado en su computadora y una contraseña de acceso. Todos estos datos se solicitarán durante el proceso de configuración de la afiliación de gateway que procesará los pagos de Apple Pay.

Para saber cómo hacer esto, visite este [artículo de Help] (https://help.vtex.com/es/tutorial/configurar-adquirente-rede-com-o-erederest?locale=pt "artículo en Help").

### Artículos relacionados
- [Configurar pagos con Apple Pay](/pt/tutorial/configurar-pagamentos-com-apple-pay).
- [Configurar adquirente Rede con ERedeRest](/pt/tutorial/configurar-adquirente-rede-com-o-erederest).

