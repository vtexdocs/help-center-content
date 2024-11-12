---
title: 'No se puede pausar al vendedor'
id: 4s4VLWa93cnfOhf8faOXjU
status: PUBLISHED
createdAt: 2022-10-20T18:31:59.458Z
updatedAt: 2023-05-11T16:54:08.548Z
publishedAt: 2023-05-11T16:54:08.548Z
firstPublishedAt: 2022-10-20T18:32:00.462Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: unable-to-pause-seller
locale: es
kiStatus: Fixed
internalReference: 682151
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


A veces el mercado no puede pausar al vendedor a través del administrador o a través de la API.

El mensaje de error es genérico a través de la interfaz de usuario. Sin embargo, si el error a través de la API es
{
"error": "Canal no válido",
"datos": {
    "código": "SRAPI-408"
}
}

Entonces el error está ocurriendo porque la validación del afiliado (validación del canal) está fallando.

Si el vendedor elimina el afiliado (o cambia el id de afiliado) por su parte, el marketplace no podrá pausar al vendedor.



## Simulación



1. En la cuenta del vendedor, elimine el afiliado del mercado;
2. En la cuenta del marketplace intenta pausar al vendedor en el Admin;
3. Compruebe que se ha enviado un mensaje de error genérico.
4. Intenta poner en pausa al mismo vendedor utilizando la API de actualización de vendedores;
5. Verifique si el mensaje de error es similar/igual al error anterior;



## Workaround


Para poder pausar al vendedor hay 3 soluciones:

1. Elimine la información de `Identificación de afiliado` y `Política comercial` en la sección del vendedor llamada "Integración" en la interfaz de usuario ![](https://vtexhelp.zendesk.com/attachments/token/Pp9HF1oSjoUYYJdnmKBUSnYVO/?name=image.png)
2. 2. Pedir al vendedor que cree de nuevo el afiliado tal y como estaba antes y después pausar el vendedor. (después de que el vendedor puede eliminar el afiliado de nuevo);
3. Utilice la antigua UI de gestión de vendedores para proceder a esta acción: www.myaccount.myvtex.com/admin/site/seller.aspx

