---
title: 'Certificados SSL personalizados'
id: 1hoaDEbU50PDZSe6AYep9q
status: PUBLISHED
createdAt: 2025-02-28T14:30:02.015Z
updatedAt: 2025-02-28T15:03:40.701Z
publishedAt: 2025-02-28T15:03:40.701Z
firstPublishedAt: 2025-02-28T14:34:42.133Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: custom-ssl-certificates
locale: es
legacySlug: certificados-ssl-personalizados
subcategoryId: jrgbOxKaOW0kdZs7rdgvS
---

<div class="alert alert-info">
  <p>Esta funcionalidad es parte de <a href="https://help.vtex.com/es/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh">VTEX Shield</a>. Si ya es cliente de VTEX y desea adoptar VTEX Shield para su negocio, por favor, póngase en contacto con el <a href="https://help.vtex.com/es/tracks/soporte-en-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ">Soporte Comercial</a>. Pueden aplicarse tarifas adicionales. Si aún no es cliente pero está interesado en esta solución, por favor, complete el <a href="https://vtex.com/co-es/contacto/">formulario de contacto</a>.</p>
</div>

De forma predeterminada, VTEX utiliza [certificados SSL](/es/tutorial/certificado-de-seguranca-ssl--tutorials_1308) emitidos por [Let's](https://letsencrypt.org/) [Encrypt](https://letsencrypt.org/), que es una solución de código abierto ampliamente adoptada en el mercado. Esto garantiza la seguridad, confiabilidad y compatibilidad con la mayoría de los navegadores.

Sin embargo, algunas tiendas requieren el uso de certificados SSL personalizados por cuestiones de compliance específicas, requisitos de seguridad internos o por preferir entidades de certificación que ofrecen garantías adicionales.

Para estos casos, la página **Certificados SSL** permite instalar un nuevo certificado SSL personalizado y gestionar certificados existentes.

La página presenta la siguiente información en forma de tabla:

| Columnas | Descripción |
| :---- | :---- |
| **Dominio** | Dirección de la tienda (host), compuesto por subdominio, dominio y dominio de nivel superior. Por ejemplo, `www.mystore.com`. Para saber más sobre la estructura de la dirección, consulta [Configurar dominio de la tienda](/es/tutorial/configurar-o-dominio-da-loja--tutorials_2450#estrutura-do-endereco-da-loja). |
| **AC** | Autoridad de certificación. |
| **Fecha de instalación** | Fecha de instalación del certificado. |
| **Fecha de vencimiento** | Fecha de vencimiento del certificado. |
| **Status** | Status del certificado, que puede ser: <ul><li><strong>Activo:</strong> certificado válido y activo para el host.</li><li><strong>Sobrescrito:</strong> el certificado para este host ha sido reemplazado por otro a través de un método externo, como una llamada de API en la CDN.</li><li><strong>Instalando:</strong> instalación del certificado en curso.</li><li><strong>Desconocido:</strong> no se pudo determinar el status del certificado debido a problemas técnicos internos de comunicación, configuración o monitoreo.</li><li><strong>Expira pronto:</strong> el certificado está cerca de su fecha de vencimiento (30 días antes o menos).</li><li><strong>La instalación falló:</strong> después del status <em>Instalando</em> la instalación puede fallar. En este caso el usuario tiene que intentarlo de nuevo después.</li><li><strong>Vencido:</strong> la fecha de vencimiento pasó.</li></ul> |

## Prerrequisitos

Antes de instalar un certificado personalizado, debes cumplir con los requisitos a continuación:

* Ser un usuario asociado a un [rol](/es/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) con los siguientes [recursos de License Manager](/es/tutorial/recursos-de-license-manager--3q6ztrC8YynQf6rdc6euk3) para ver y gestionar la información de la página:

  * **Producto:** *CDN API*  
  * **Categoría:** *Certificate management*  
  * **Recursos:** *Update certificate* y *View certificate*

* Tener un archivo `.KEY` con una clave privada de certificado de hasta 1 MB guardado en tu dispositivo.
* Tener un archivo `.CRT` con un certificado de hasta 1 MB guardado en tu dispositivo.

## Instalar nuevo certificado SSL

Sigue las instrucciones a continuación para instalar un nuevo certificado personalizado en VTEX:

1. En el Admin VTEX, accede a **Configuración de la tienda > Shield > Certificados SSL**.  
2. Haz clic en `Instalar nuevo`.  
3. En el campo **Hosts**, selecciona uno o más hosts para aplicar el certificado. Solo se muestran los hosts previamente registrados en tu cuenta.  
4. En **Clave privada**, haz clic en `Elige un archivo` para seleccionar un archivo en formato `.KEY` de hasta 1 MB guardado en tu dispositivo.  
5. En **Certificado**, haz clic en `Elegir un archivo` para seleccionar un archivo en formato `.CRT` de hasta 1 MB guardado en tu dispositivo.  
6. Haz clic en `Instalar`.

Si la configuración tiene éxito, se te redirigirá a la página de lista de certificados, donde podrás visualizar los hosts seleccionados.

La instalación puede tomar 7 días para completarse y durante este periodo el status de los hosts será **Instalando**. Una vez finalizada la instalación, el status de los hosts cambiará a **Activo**.

<div class="alert alert-info">
  <p>Para saber cómo solucionar errores de instalación, consulta la guía de resolución de problemas <a href="https://help.vtex.com/es/tutorial/error-al-instalar-el-certificado-ssl-personalizado--6hgFzbcc96mcrqXZMmHCTr" target="_blank" rel="noopener noreferrer">Error al instalar certificado SSL personalizado</a>.</p>
</div>

Más información

* [VTEX Shield](/es/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh)  
* [Configurar dominio de la tienda](/es/tutorial/configurar-o-dominio-da-loja--tutorials_2450)  
* [Go-live](/es/tracks/realizando-o-go-live-da-sua-loja--4Ns5FxIiksmjsdX2yOTduM/12bQlMbJ68Ot0LIaO6Btkj#realizar-apontamento-de-dns)
* [Error al instalar certificado SSL personalizado](/es/tutorial/error-al-instalar-el-certificado-ssl-personalizado--6hgFzbcc96mcrqXZMmHCTr)
