---
title: 'Configuración del conector'
id: 5OP69kHWKca01wLH0w10jX
status: PUBLISHED
createdAt: 2021-02-08T19:26:40.865Z
updatedAt: 2022-01-27T18:14:48.306Z
publishedAt: 2022-01-27T18:14:48.306Z
firstPublishedAt: 2021-02-08T20:10:36.973Z
contentType: trackArticle
productTeam: Channels
slugEN: configuring-the-connector-facebook
locale: es
trackId: 7h8KvIC4DbRRc8VlyJ8PFc
trackSlugEN: integracion-de-facebook
order: 4
---

El conector nativo que se utiliza para la integración con Facebook se configura en el Admin. Para realizar la configuración, siga las instrucciones a continuación:

1. Acceda al Admin.
2. En el módulo _MARKETPLACE_, haga clic en `Integraciones`. 
3. Haga clic en `Configuración`.
4. En la tarjeta, haga clic en `Integrar`.
5. Rellene los campos que aparecen en la pantalla según se describen a continuación y después haga clic en `Guardar configuración` (los campos marcados con el símbolo * son obligatorios).

- **Integración (si elige desactivar la integración, se eliminará toda la configuración, incluyendo la autenticación y la afiliación)*:** seleccione _Activada_ para iniciar la integración.
- **ID del afiliado*:** código de identificación para crear un [afiliado](https://help.vtex.com/es/tutorial/o-que-e-afiliado--4bN3e1YarSEammk2yOeMc0) que aún no está registrado en tu sistema. El código debe estar compuesto por tres consonantes, repetidas o no. No se aceptan vocales. Sugerencia: FCB. La configuración del conector crea el afiliado automáticamente.
- **Email del afiliado*:** ingrese un _email_ para el afiliado que está creando. Las notificaciones sobre la integración se enviarán a este _email_.
- **Política comercial*:** es el ID de la política comercial que se utilizará en la integración. Todos los productos vinculados a esta política comercial se enviarán a Facebook.
- **Nombre de visualización del producto*:** determina cuál será la regla para nombrar los SKU en Facebook. Hay dos opciones que puede seleccionar.
   * **Nombre del Producto - Nombre del SKU:** los nombres se formarán a partir de los campos _Nombre del producto_ y _Nombre del SKU._
   * **Nombre del Producto:** los nombres se formarán a partir del campo _Nombre del producto_.

- **ID del Business Manager*:** código asignado a su perfil de administrador comercial de Facebook. Es una secuencia numérica y puede encontrarla en la configuración de la cuenta.
- **URL del sitio web de la tienda*:** es la dirección electrónica de su tienda. Este campo se utiliza para formar la URL completa del producto que se enviará a Facebook.
<br></br>
Ejemplo: `https://www.sutienda.com`

- **Utilizar categoría*:** todos los productos que se envíen a Facebook deben pertenecer a una categoría. Puede identificar la categoría de su producto de dos formas:
   * **Menos específica:** es el nombre correspondiente a la categoría principal de su árbol de categorías.
   * **Mais específica:** es el nombre correspondiente a la subcategoría más profunda de su árbol de categorías.
<br></br>
Ejemplo: su producto es una camiseta. Digamos que está registrada en la categoría _Ropa_ y en la subcategoría _Blusas_. Si selecciona la opción _Menos específica_, en Facebook, su producto aparecerá bajo la categoría _Ropa_. Por otro lado, si selecciona la categoría _Mais específica_, la categoría se definirá como blusas.
