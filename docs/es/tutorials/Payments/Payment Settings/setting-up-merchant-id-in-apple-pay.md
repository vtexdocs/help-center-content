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
slug: configurar-merchant-id-en-apple-pay
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
![AP1](//images.ctfassets.net/alneenqid6w5/6LeAGbVL1w66i4QeoUikfC/912141350c1d591a9bb057d791e2f8d5/AP1.PNG)
3. Haga clic en __ Identifiers__.
 ![AP2](//images.ctfassets.net/alneenqid6w5/23SE1jYWfCN6ZXTgQFYc1o/19fbe5f704aee658dd5a77f8e2f3b161/AP2.PNG)
4. Al lado de Identifiers, haga clic en __botón azul +__.
![AP3](//images.ctfassets.net/alneenqid6w5/4JGlrzDtI0BL3MDChr5gfn/2fb71b0a4dfc498baff3acb0546e5476/AP3.PNG)
5. Seleccione la opción __Merchant IDs__.
6. Haga clic en el botón azul __Continue__.
![AP4](//images.ctfassets.net/alneenqid6w5/6OyfJq6Eeped4gNItoqD93/19edd37b12bb72d24d55058f5aa265bf/AP4.PNG)
7. Rellene el campo __Description__.
8. Rellene el campo __Identifier__.
9. Haga clic en el botón __Continue__.
![AP5](//images.ctfassets.net/alneenqid6w5/7cPYdu8tLJsQWH7FFemIxb/8d710da870e18a5db33e46f29d484882/AP5.PNG) 

De este modo, se creará el __Merchant ID__. 

## Creando el certificado para procesar pagos

Ahora que usted tiene el Merchant ID, necesita un certificado para activarlo.   

Este certificado se crea en VTEX. Por lo tanto, el administrador de la tienda debe [abrir un ticket] (https://help.vtex.com/es/tutorial/abrir-chamados-para-o-suporte-vtex?locale=pt "abrir un ticket") de soporte para que el equipo responsable por las integraciones le reenvíe el archivo.

En seguida, el administrador de la tienda puede enviarlo al sistema Apple Pay.

Para comenzar esta etapa, continúe con las instrucciones:

1. En el menú del lado izquierdo, seleccione __Certificates__.
![AP6](//images.ctfassets.net/alneenqid6w5/6F1QMQhaeedUplo0gYGaHd/bbc1c07ad0f8541f33a797b09224543a/AP6.PNG)
2. Digite su __Merchant ID__ creado recientemente en la barra de búsqueda.
3. Seleccione el __Merchant ID__ deseado.
![AP7](//images.ctfassets.net/alneenqid6w5/6McxWOZA6ZGUtsoxsRoVKb/d0f133d66267606fa998be562b57570b/AP7.PNG)
4. En el ítem __ Apple Pay Payment Processing Certificate__, haga clic en el botón __Create Certificate__.
![AP8](//images.ctfassets.net/alneenqid6w5/3Rp2Dt49HkCwzFHjScLjV/a83399b2270e638f3d480e4f885cc8d6/AP8.PNG)
5. Asegúrese de que la pregunta *"Will payments associated with this Merchant ID be processed exclusively in China?"* esté marcada con __la opción default (No)__.
![AP9](//images.ctfassets.net/alneenqid6w5/Sp9juhAMuWRA1vHgk6pZ9/8eda99f583b842bb94a52d729fd4066a/AP9.PNG)

En seguida, será redirigido a una pantalla con instrucciones sobre la creación del CRS (Certificate Signing Request). 

Aquí es cuando debe abrir el ticket con la solicitud del certificado. El equipo de VTEX enviará un archivo `{{merchantID}}.csr.` y, con este guardado en su computadora, deberá hacer clic en el botón __Continue__.

Después de eso, el administrador de la tienda será redirigido nuevamente. Esta vez a la página de upload.

Con el {{merchantID}}.csr. que recibió, finalice:

1. Haga clic en __Choose File__.
2. Seleccione el __archivo CSR__ deseado.
3. Haga clic en el botón __Continue__.
![AP10](//images.ctfassets.net/alneenqid6w5/3hECpP7iFDlIO6PatZCOEY/d38bfb6be71f867c1f3182616a6fcb4b/AP10.PNG)
4. Haga clic en __Download__.
![AP11](//images.ctfassets.net/alneenqid6w5/5LZH1cD0JOe4dHN1noRbUE/2de89d38d2fde3f870c4274d32092c83/AP11.PNG)
5. Haga clic en __Done__.

## Registrando dominios en el Merchant ID
El siguiente paso es asociar los dominios utilizados por su tienda Merchant ID que acabó de crear.

Primero, debe validar cada una de las URL deseadas. Una vez que este paso se complete correctamente, el propio sistema de Apple creará un archivo `.txt` e indicará en cuál dominio debe asociarse este documento.

Finalmente, es necesario importar este archivo al sistema de VTEX a través de Postman - herramienta de gestión de [APIs](https://help.vtex.com/es/tutorial/introduccion-a-las-apis-vtex--3SjAqQ0BeUqu2ge8AiIkmW "APIs").

>⚠️ **Importante:** solo puede hacerse esta validación de un dominio a la vez. Esto significa que si su tienda usa 10 dominios diferentes, el proceso tendrá que repetirse 10 veces.

Verifique las instrucciones:

1. Digite el __Merchant ID__ creado recientemente en la barra de búsqueda.
![AP12](//images.ctfassets.net/alneenqid6w5/4RnNU5b0rsfCpEKkj9dFnj/3ddb803ff21d56c9f54d214d9b8bf56f/AP12.PNG)
2. Haga clic en el __Merchant ID__ deseado.
3. En el módulo __Merchant Domains__, haga clic en el botón __Add Domain__.
![AP13](//images.ctfassets.net/alneenqid6w5/7pPoN1yAltfTpHQVQRzvb9/61da4650bae649475637cf185a228c4f/AP13.PNG)
4. Agregue el dominio en el campo __Enter the domain you wish to register__.
5. Haga clic en __Save__.

Ahora, para hacer upload del archivo `.txt` por medio de la API, prosiga con las instrucciones:   

1. Haga clic en __Download__ y no realice ninguna alteración en el archivo.  
![AP14](//images.ctfassets.net/alneenqid6w5/20a92ocy0wEVTY6zXqfa5w/56b96dc4d0fe44c322065a10af594980/AP14.PNG)
2. Abra el archivo `.txt` y __copie__ todo el contenido.

En seguida, inicie una sesión en el Postman. Usted realizará una llamada vía POST para la CDN de VTEX:  

1. Configure la ruta __POST__ `https://{{sudominio}}/.well-known/raw/{token}`.
2. Asegúrese de que __todo__ el contenido del archivo `.txt` esté entre __comillas dobles__ y __ sin salto de líneas __.
3. Agregue en el header el __X-VTEX-API-AppKey__ y el __X-VTEX-API-AppToken__.

Al realizar la llamada *POST*, la respuesta debe informar que el certificado se guardará durante 60 minutos. Durante este tiempo, debe completar la validación del dominio.

Ahora, regrese al sitio web de Apple. En la misma pantalla donde descargó el archivo `.txt`, haga clic en __Verify__.
![AP15](//images.ctfassets.net/alneenqid6w5/2rG0fF8Bvo5TqsDqAHqL4j/92c7bc8601572cd80caf4bea8b101208/AP15.PNG)

Así, si el procedimiento se realiza correctamente, el dominio se registrará con el estado __Verified__. Si lo desea, puede repetir todo el proceso para registrar más dominios utilizando el botón __Add Domain__ en la sección __Merchant Domains__.

## Creando un Merchant Identity Certificate

Ahora, debe generar un certificado del Merchant ID, que se utilizará cada vez que Apple muestre la pantalla de Apple Pay a sus clientes. Para completar las etapas de este proceso, es importante que tenga una computadora Mac disponible.

Para completar la acción, deberá crear una contraseña para proteger los datos exportados.

>ℹ️ Atención: Recomendamos que la contraseña sea fácil de recordar, ya que se ingresará en el campo Apple Merchant Password en el momento de la configuración de la afiliación de gateway en VTEX.

1. Acceda al módulo __Certificates, Identifiers & Profilers__.
2. En el menú del lado izquierdo, haga clic en __Identifiers__.
3. En la esquina superior derecha, filtre por __Merchant IDs__.
![AP16](//images.ctfassets.net/alneenqid6w5/5XBSpBP20NFq5HRQKpxQjS/e8f662462087cd43d0c8a5b7f7bdd4c3/AP16.PNG)
4. Seleccione el __Merchant Identifier__ deseado.
5. Haga clic en __Create Certificate__.
![AP17](//images.ctfassets.net/alneenqid6w5/33Mm1jF8PBhIjj7X7LjAxc/181c7490381f754c0580d847da2c120d/AP17.PNG)
6. Siga las __instrucciones__ que se muestran en la pantalla para crear un certificado. 
7. Haga clic en el botón __Continue__.
![AP18](//images.ctfassets.net/alneenqid6w5/zY9tykCxck32wV3c9w1V8/bcacdf765e787fb104b8f7f70677c2df/AP18.PNG)
8. Haga clic en __Download__.    
![AP19](//images.ctfassets.net/alneenqid6w5/3VMp9diaN7L7M8dsopkWQo/6fa0b54d0a7310bfb7dd0cd183c2a56e/AP19.PNG)

Ahora, cuando se descargué el archivo, haga doble clic para instalarlo en Keychain Access.

Luego, continúe con el procedimiento:

1. Abra el __Keychain Access__.
2. Localice el __certificado__ creado en el paso cuatro anterior.
3. Haga clic derecho en el ícono __llave__. ![AP20](//images.ctfassets.net/alneenqid6w5/1PqNUvHOaSVXkc4FfeMIEQ/cc421cbd0e0cfaff6f7763c861d84baf/AP20.PNG) 
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

