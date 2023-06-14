---
title: Configurar Customer Credit
id: 21ok0GBwmcIeaY2IukYMOg
status: PUBLISHED
createdAt: 2018-11-07T17:11:22.823Z
updatedAt: 2022-01-07T13:30:23.058Z
publishedAt: 2022-01-07T13:30:23.058Z
firstPublishedAt: 2018-11-07T17:23:16.520Z
contentType: trackArticle
productTeam: Financial
slug: configuracion-de-la-app
trackId: 1hCRg21lXYy2seOKgqQ2CC
trackSlugES: customer-credit-como-empezar
---

## Configuración de primero acceso

Ahora vamos a configurar Customer Credit. 

El primer paso es acceder a la página de configuración de la aplicación en el Admin. 

Luego de hacer esto, justo al inicio de la pantalla, verá tres comandos dentro del box "Pendiente".

Estos son: 

1. __Activar correos electrónicos transaccionales en el Message Center__: instala los templates de correos electrónicos transaccionales relativos al Customer Credit en el Message Center. Para activarlo, haga clic en el botón "Activar".
2. __Configurar las condiciones de pago del checkout__: define las reglas de plazo y de pago en cuotas de la tienda. Para activarlo, haga clic en el botón "Configurar".
3. __AppKey y AppToken de la afiliación no definidos__: Customer Credit como forma de pago. Para activarlo, haga clic en el botón “Autenticar”. A continuación, usted será redirigido a la página “Afiliaciones de Gateway”, donde deberá rellenar los campos vacíos con su Key y Token para aquella tienda. Para saber más detalles, consulte nuestro [artículo sobre cómo crear appKey y appToken](https://help.vtex.com/es/tutorial/creating-appkeys-and-apptokens-to-authenticate-integrations--43tQeyQJgAKGEuCqQKAOI2 "artículo sobre cómo crear appKey y appToken"). 

De esta manera, Customer Credit estará disponible como forma de pago en el SmartCheckout de su tienda.

## Configuración de la aplicación 

A continuación, tendrá cuatro opciones de personalización de la experiencia que su consumidor tendrá en la tienda. 

Revise los detalles de cada uno de estos.

### Tolerancia

Esta opción permite cerrar una compra aunque exceda el crédito disponible del usuario. Cabe mencionar que es posible registrar un porcentaje excedente de crédito disponible para cada cuenta registrada.

Por ejemplo, digamos que una cuenta tiene R$ 1.000,00 de crédito disponible y una tolerancia del 10%. De esta manera, el sistema permitirá que se hagan pedidos de hasta R$ 1.100,00.

<div class="alert alert-warning">
Los valores de tolerancia se establecen en números decimales, donde 0 representa el 0% y 1 representa el 100%. Ejemplo: para una tolerancia del 5%, el valor a configurar es 0.05.
</div>

Para establecer la tolerancia, consulte el procedimiento: 

1. Acceda al __Admin__.
2. Haga clic en __Customer Credit__.
3. Luego, haga clic en __Cuentas__.
4. Haga clic en la cuenta de cliente para la que desea establecer la tolerancia.
5. En __Tolerancia__, haga clic en __Editar__.
6. Complete el valor de tolerancia (en decimales).
7. Haga clic en __Actualizar__.

### Creación automática de cuenta  
Este flag permite a los clientes finalizar una compra utilizando Customer Credit como forma de pago, aunque no tengan una cuenta previa con un límite de crédito definido. 

En la página de configuración, tiene la opción de establecer un límite de crédito predeterminado para los clientes cuyas cuentas se crearán automáticamente en el SmartCheckout

### Mi página de créditos
Es la interfaz a través de la cual el usuario final tendrá acceso a la información de su cuenta.

En esta, el usuario ve sus límites disponibles, los títulos abiertos y pagados, el extracto de cuenta y la posibilidad de añadir o eliminar dependientes. 

Cuando la página esté habilitada, estará disponible en el área de acceso del cliente - MyAccount.

### Instrucciones de pago  

Aquí, el usuario puede ingresar instrucciones de pago en los documentos de sus títulos. Para esto, simplemente haga clic en "Editar" y escriba la orientación que prefiera. No olvide hacer clic en el botón azul "Actualizar" para guardar la configuración.

Además, destacamos que la misma instrucción se reproducirá en todas las facturas de la tienda, independientemente de la cuenta a la que esté vinculado el título y de su status.

## Condiciones de pago  
En ese momento, Customer Credit está correctamente instalado y configurado en su tienda. Ahora puede crear condiciones de pago que se mostrarán en el  SmartCheckout.

Puede definir diferentes escenarios de negocio para estas condiciones de pago. Esto también implica los plazos y el número de cuotas disponibles para sus clientes. 

Algunos de los plazos utilizados son:

- Pagos realizados en 7, 28 y 45 días.
- Pagos hechos en 45 días. 
- Plazos de 30, 60 y 90 días. 

A continuación, consulte el procedimiento: 

1. Acceda al __Admin__.
2. Haga clic en __Pagos__.
3. Luego, haga clic en __Configuración__.
4. Asegúrese de que está en la pestaña __Planes de Pago__.
5. En el lado derecho de la pantalla, haga clic en el botón verde __“+”__.
6. Localice y haga clic en la opción __Customer Credit__.
7. En el lado derecho, establezca el criterio en el box __Configure las reglas de plazo y parcelación__.

Si desea establecer más de una regla, solo tiene que hacer clic en el botón azul "Agregar nueva regla". Por último, haga clic en el botón "Guardar" para actualizar la configuración.

Además, como en otras formas de pago, Customer Credit también permite la configuración de [condiciones especiales](https://help.vtex.com/es/tutorial/condicoes-especiais?locale=es "condiciones especiales"). Esto hace que el usuario defina los contextos de compra que se aplicarán para cada plan de pago configurado en la tienda.

### Intereses 
Por último, también puede establecer tasas de interés simples para las reglas de pago en cuotas establecidas en su tienda. Actualmente, puede aplicar estas tasas a los pedidos que se pagarán en dos o más cuotas.

<div class="alert alert-warning">
<strong>Atención</strong>: las tasas de interés <strong>no</strong> se aplican a los pedidos que se pagarán en solo una cuota.
</div> 

Sin embargo, apenas un valor de intereses aplicado a las cuotas aparecerá en el SmartCheckout.

Por ejemplo, digamos que ha configurado tres cuotas para Customer Credit, cada una con un tipo de interés diferente: la primera con el 10%, la segunda con el 15% y la tercera con el 20%.

Como la configuración de 10 % es la más ventajosa para el consumidor final, esta será la única opción de pago que se mostrará en el SmartCheckout.
