---
title: 'Configurar el gateway Spin Pay'
id: 3YuCJzFJV30COTjEs8Vyl3
status: PUBLISHED
createdAt: 2021-04-19T13:39:06.747Z
updatedAt: 2022-12-05T16:40:29.772Z
publishedAt: 2022-12-05T16:40:29.772Z
firstPublishedAt: 2021-04-19T14:13:34.952Z
contentType: tutorial
productTeam: Financial
author: 13Ue4MX9WNiX9f3SVCUZZW
slugEN: configuring-spin-pay-gateway
locale: es
legacySlug: configurar-el-gateway-spin-pay
subcategoryId: unknown-subcategory
---

En VTEX, ahora puede ofrecer el *gateway* [Spin Pay](https://spinpay.com.br/) para procesar los pagos en su tienda. A través de esta solución, podrá recibir pagos vía PIX (método de pago instantáneo en Brasil) y las principales billeteras digitales que actualmente están disponibles en el mercado. 

>⚠️ Para utilizar Spin Pay en VTEX, debe tener una **Application Key (App Key)** y una **Application Token (App Token)**. Estos datos únicamente se obtienen después de que Spin Pay aprueba su registro y usted firma el contrato de prestación de servicios. Si su registro ya ha sido aprobado y el contrato firmado, realice los siguientes pasos.

Realice los siguientes pasos para configurar Spin Pay en su tienda:

1. Acceda al __Admin__ VTEX.
2. Acceda al módulo __Pagos__.
3. Haga clic en __Configuración__.
4. En __Afiliaciones__, haga clic en el botón verde “__+__”.
5. Busque y seleccione la opción __Spin Pay__.
6. En __Nombre de la afiliación__, edite el texto y solo deje __Spin Pay__.
7. En los campos __Application Key__ y __Application Token__, introduzca los datos que están disponibles en el panel de su cuenta Spin Pay. Lea el paso a paso en [esta documentación](https://spinpay.zendesk.com/hc/pt-br/articles/5067562692247-Onde-encontro-as-credenciais-que-preciso-para-ativar-o-Pix-em-minha-Loja-Virtual-).
8. Haga clic en __Salva__ para guardar las configuraciones.

Posteriormente, Spin Pay estará listo para procesar pagos en su tienda. Realice los siguiente pasos para configurar la __condición de pago__.

### Configurar condición de pago

Cuando el gateway está instalado en su tienda, debe configurar la [condición de pago](https://help.vtex.com/es/tutorial/condicoes-de-pagamento--tutorials_455?&utm_source=autocomplete) para que los pagos se procesen correctamente. 

1. Acceda al __Admin__ VTEX.
2. Acceda al módulo __Pagos__.
3. Haga clic en __Configuración__.
4. En __Planes de pago__, haga clic en el botón verde “__+__”.
5. Busque y seleccione la opción __Spin Pay__.
6. En __Nombre de la regla__, defina un nombre para la identificación de la condición de pago.
7. Active el botón de __Status__.
8. En __Proceso con la afiliación__, elija la opción __Spin Pay__ que acaba de configurar.
9. En __Usando Antifraude__, en caso de que haya contratado una solución, habilite el campo y seleccione la opción deseada.
10. Haga clic en __Salva__ para guardar las configuraciones.

>⚠️ Spin Pay es una solución brasileña de pago instantáneo en la que el débito se efectúa directamente en la cuenta del consumidor. Por esta razón, no es posible ofrecer pagos en cuotas.

Cuando concluya todos los pasos, Spin Pay estará habilitado para procesar los pagos en su tienda.

