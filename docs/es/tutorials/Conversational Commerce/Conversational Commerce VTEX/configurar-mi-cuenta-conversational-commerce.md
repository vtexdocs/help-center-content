---
title: 'Configurar Mi cuenta (Conversational Commerce)'
id: 42bnIdyC2c5dwz9KKT0UKc
status: ARCHIVED
createdAt: 2023-03-07T19:10:12.107Z
updatedAt: 2024-01-05T16:28:41.167Z
publishedAt: 
firstPublishedAt: 2023-03-07T19:58:45.529Z
contentType: tutorial
productTeam: Shopping
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: configuring-my-account-conversational-commerce
locale: es
legacySlug: configurar-mi-cuenta-conversational-commerce
subcategoryId: 5bBAgUbHdh6ovdZ4kGsN7O
---

[VTEX Conversational Commerce](https://help.vtex.com/es/tracks/conversational-commerce-vtex--5UZ9BdvwwtZm2t9QTXcbZs/1NwwADrU70v3roPUV7dWxI) te permite configurar tu canal de conversación con el cliente en función de la identidad de tu tienda. Sigue el paso a paso a continuación para configurar la información de tu cuenta de VTEX Conversational Commerce.

1. En el Admin VTEX, ve a **Apps** > **Conversational Commerce** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. Haz clic en **Mi cuenta**.
3. Rellena los campos de configuración de conversación. Para más información, consulta [Campos de configuración de conversación](#campos-de-configuracion-de-conversacion).
4. Haz clic en `Guardar`.

## Campos de configuración de conversación

![my account - conversational commerce - ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Conversational%20Commerce/Conversational%20Commerce%20VTEX/configurar-mi-cuenta-conversational-commerce_1.png)

- **Idioma: **el idioma predeterminado para los mensajes del bot con los clientes en VTEX Conversational Commerce. Campo obligatorio.

- **Mensaje de bienvenida: **el primer mensaje que VTEX Conversational Commerce enviará en su interacción inicial con el cliente. A este mensaje le siguen otros que explican el proceso de compra y la asistencia humana de tu equipo de soporte al cliente. Campo obligatorio. Nuestra sugerencia predeterminada es:

   > «¡Hola! Soy el asistente virtual de (marca) 😊» 

- **Lista de productos: **un ejemplo de lista de productos de la tienda para que el cliente comprenda el formato en el que deben enviar la información. Escribe un producto en cada fila con la información de cantidad, producto y marca. Por ejemplo: 2 kg de Arroz Premium Castellano. Campo obligatorio.
- **Color primario del carrito:** el color primario mostrado en todos los botones, links y otros detalles del carrito. Recuerda que debe contrastar con el color blanco. Campo obligatorio.
- **Categorías restringidas:** categorías de productos que serán excluidas de las opciones de venta de VTEX Conversational Commerce. Campo opcional.
- **Certificar la cobertura de entrega durante la conversación:** opción que solicita y valida el código postal del cliente antes de crear el carrito. Campo opcional.
- **Solicitar al comprador que se autentique en la plataforma (B2B): **opción que solicita la identificación del cliente para un escenario B2B. Al hacer clic en el enlace del carrito, se dirigirá al cliente al inicio de sesión en la tienda. Solo después de iniciar sesión podrá acceder al carrito creado a través de VTEX Conversational Commerce. Campo opcional.

