---
title: 'Configuración del conector'
id: wWyl0Njxgs5KfXvxYZJrl
status: PUBLISHED
createdAt: 2021-04-14T21:01:49.270Z
updatedAt: 2024-11-06T20:39:02.421Z
publishedAt: 2024-11-06T20:39:02.421Z
firstPublishedAt: 2021-04-15T17:41:17.442Z
contentType: trackArticle
productTeam: Channels
slugEN: configuring-the-connector
locale: es
trackId: 25Sl7iOqq58PGfVfTAo8Xw
trackSlugEN: integracion-con-google-shopping
order: 5
---

La configuración de la integración con Google Shopping se realiza en el Admin. Para completarla, siga las instrucciones a continuación:

1. Accede al Admin VTEX.
2. En el módulo Marketplace, haz clic en __Marketplace e integraciones__.
3.  Ingresa __Google Shopping__ en el campo Buscar marketplace por nombre o nombre de cuenta y haz clic en `Conectar`.
4. Lee la información contenida en la ventana emergente, rellena los campos que aparecen en la pantalla según se describe a continuación y después, en la parte superior derecha de la pantalla, haz clic en `Conectar`. (Los campos marcados con el símbolo * son obligatorios).

   - **Integración*:** solamente se habilitará la integración si marca _sí_.
   - **Ignorar el envío de EAN (GTIN):** la opción _sí_ significa que se enviarán los SKU sin código de barras. Si su producto tiene un código de barras, se recomienda marcar _no_ para así incluir esta información en la integración. Puede consultar el artículo [Registrar el campo EAN](/es/tutorial/cadastrar-o-codigo-de-barra-dos-skus-para-o-instore--2jkOdRB4XSMG2ke0uUQIKS#registrar-el-campo-ean).
   - **Merchant Id*:** código atribuido a su perfil de Google Merchant Center (secuencia numérica que aparece en la parte superior derecha de la pantalla cuando accede a su cuenta).
   - **Políticas comerciales*:** número de la política comercial que definirá el surtido del catálogo y los valores de los ítems utilizados en la integración.
   - **Email de Google Merchant*:** _email_ utilizado para crear la cuenta de Google Merchant Center.
   - **Aplicar descuento en el precio enviado*:** aquí el seller debe elegir qué tipo de descuento desea enviar a Google Shopping. Puede seleccionar __No aplicar__ (envía el precio registrado en la plataforma VTEX), __Para medio de pago configurado en la API de Checkout__ (debe seleccionarse si el seller tiene el descuento configurado) o __Mayor descuento configurado__.  
   - **Eliminar SKU sin stock*:** al hacer clic en _no_, cuando un producto no esté disponible, no desaparecerá de su _feed_ de Google Shopping, solo aparecerá con el estado _indisponible_. Si hace clic en _sí_, el SKU que haya sido retirado temporalmente por falta de _stock_ volverá a aparecer en el _feed_ cuando se reabastezca el _stock_.
   - **Merchant Id (Multi-Client):** solo debe utilizarse este campo cuando se configure una cuenta avanzada en Google Merchant Center. El propósito de crear una cuenta avanzada es gestionar varios vendedores y dominios a gran escala. En estos casos, debe rellenar el campo con el código atribuido a su cuenta avanzada en Google Merchant Center, que se puede identificar de la misma forma que el Merchant Id (secuencia numérica localizada en la parte superior derecha de la pantalla). Puede ver más detalles en el artículo de Google [Convertir una cuenta de varios clientes](https://support.google.com/merchants/answer/188487).
   - **Enviar precio*:** hay dos opciones: _Sin multiplicador de unidades_, con la cual el producto aparecerá con el valor unitario, y _Con multiplicador de unidades_, cuando el cobro de su producto tiene algún tipo de medidor.

     Ejemplo: si el producto es un piso de cerámica vendido en metros cuadrados, la opción adecuada sería _Con multiplicador de unidades_.

## Configuración en Google Merchant Center

Para que la integración sea efectiva, **no hay configuraciones obligatorias** que deban realizarse en su cuenta de Google Merchant Center. Sin embargo, para minimizar los errores, se recomienda **inhabilitar la actualización automática de los ítems**.

Inhabilitar la actualización automática impide que Google pueda cambiar los precios de sus productos y eso fuerza a que solo se puedan cambiar desde la plataforma VTEX. Por lo tanto, después de iniciar sesión en [Google Merchant Center](https://www.google.com/intl/es_ar/retail/solutions/merchant-center/), verifique si las preferencias de su cuenta corresponden a esta recomendación.
