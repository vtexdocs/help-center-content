---
title: 'Agregar Discord como un canal'
id: 2s5uqsnula0RiNQXXJDDrL
status: PUBLISHED
createdAt: 2025-09-15T14:27:46.594Z
updatedAt: 2025-10-03T14:20:32.891Z
publishedAt: 2025-10-03T14:20:32.891Z
firstPublishedAt: 2025-10-03T14:20:32.891Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: adding-discord-as-a-channel
legacySlug: agregar-discord-como-un-canal
locale: es
subcategoryId: 7e9LaCixVcvflzgWkxlftd
---

Tus usuarios necesitarán una cuenta de Discord y un dispositivo compatible para enviar/recibir mensajes. Este tipo de canal solo está disponible si tu instancia ha sido configurada con la aplicación [proxy](https://github.com/releaseplatform/RapidPro-Discord-Proxy) de Discord.

La infraestructura necesaria para el proxy no es proporcionada por Weni.#### Registra tu aplicación siguiendo las instrucciones oficiales

Discord tiene documentación oficial sobre cómo registrar tu bot.

[https://discord.com/developers/docs/getting\-started](https://discord.com/developers/docs/getting-started)

- Accede al panel de desarrolladores y haz clic en ""New Application"" y crea tu aplicación:

<https://discord.com/developers/applications>

1. Ve a la pestaña ""Bot"" y haz clic en ""Add Bot"". Tendrás que confirmar haciendo clic en ""Yes, do it!""

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/agregar-discord-como-un-canal_1.png)

2. Mantén las configuraciones predeterminadas para ""Bot público"" (marcado) y ""Requerir concesión de código OAuth2"" (desmarcado).
3. El siguiente paso es copiar el token.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/agregar-discord-como-un-canal_2.png)

4. Haz clic en ""Redefinir Token"" y obtén tu token.

### Agrega el canal a la plataforma de Weni.

1. Dentro del proyecto, ve a: Aplicaciones \-> Descubrimiento \-> Agregar Discord.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/agregar-discord-como-un-canal_3.png)

2. Después de agregarlo a ""Mis Aplicaciones"", inserta tu discord\_bot\_token proporcionado por la página de Desarrolladores de Discord y la URL del Proxy, que es la URL donde el proxy de Discord está ejecutándose.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/agregar-discord-como-un-canal_4.png)

3. Guarda los cambios.
