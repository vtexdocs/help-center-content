---
title: 'Configurar alerta para renovar tokens de API'
id: kcGIFysFt02FDuhsfjQwZ
status: PUBLISHED
createdAt: 2024-09-30T18:38:54.891Z
updatedAt: 2025-08-13T14:18:37.743Z
publishedAt: 2025-08-13T14:18:37.743Z
firstPublishedAt: 2024-10-08T18:42:01.264Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: configuring-alerts-to-renew-api-tokens
legacySlug: configurar-la-duracion-de-las-claves-de-api-beta
locale: es
subcategoryId: 3OlaStejO5MSzvDSU3VCH3
---

La página **Claves de API** permite configurar alertas para recomendar la renovación de tokens de API para claves generadas internamente.

[Renovar los tokens](https://help.vtex.com/es/tutorial/renovar-token-de-api--7r4AzptYjXErGHadg9LnJ3%5D) periódicamente es importante para garantizar la seguridad, limitar la exposición a riesgos y controlar el acceso a los recursos, lo que minimiza el impacto de claves comprometidas.

![token-renewal-es](//images.ctfassets.net/alneenqid6w5/0YykrEUuUAjQ6VUjL48aI/4159b7e09e3ab0c96d3bd884db0a58f3/token-renewal-es.png)

La alerta de renovación se muestra a los 3 meses de forma predeterminada, a menos que se seleccione otra opción. Para configurar la periodicidad de la alerta sigue los pasos a continuación:

1. En la barra superior del Admin VTEX, haz clic en el **avatar de tu perfil**, marcado por la inicial de tu email, y luego en **Configuración de la cuenta** \> **Claves de API**.  
2. Haz clic en `Configuración`.  
3. Selecciona el periodo deseado:

   * **3 meses** (recomendado)  
   * **6 meses**  
4. Haz clic en `Aplicar`.

La periodicidad de la alerta se aplicará a todas las claves, tanto nuevas como existentes, tomando la fecha de creación de cada clave como referencia para calcular su plazo de validez.

> ℹ️ El token no vence después del plazo definido. La configuración solamente determina cuándo la interfaz recomendará la renovación sin desactivar la utilización del token. La alerta es un recordatorio para [renovar el token manualmente](https://help.vtex.com/es/tutorial/renovar-token-de-api--7r4AzptYjXErGHadg9LnJ3).

## Visibilidad de la alerta

Cuando se cumple el plazo definido, la alerta de renovación se muestra al lado de la clave en la pestaña **Generadas**:

![renew-recommended-es](//images.ctfassets.net/alneenqid6w5/33RBvgeiebVLBudT0L7GhC/beb1f70eea01b40412f32e526af81080/renew-recommended-es.png)

La alerta naranja indica que el token superó el plazo de uso recomendado por un periodo inferior a 3 meses.

![renew-highly-recommended-es](//images.ctfassets.net/alneenqid6w5/5dk1vc3reYddm3C2xXWmUq/d61c7db95076c3cb2a067b7349a9f0d0/renew-highly-recommended-es.png)

La alerta roja indica que el plazo de uso recomendado se superó hace 3 meses o más.

Cuando veas una clave con alerta, [renueva el token](https://help.vtex.com/es/tutorial/renovar-token-de-api--7r4AzptYjXErGHadg9LnJ3) tan pronto como sea posible. Después de renovarlo, la alerta se mostrará nuevamente una vez que haya pasado el periodo seleccionado (3 o 6 meses) desde la fecha de renovación más reciente.

## Más información

* [Claves de API](https://help.vtex.com/es/tutorial/claves-de-api--4bFEmcHXgpNksoePchZyy6)
* [Claves generadas](https://help.vtex.com/es/tutorial/claves-generadas--7fnU4iZdvZKbxCaT3Ymdjc)
* [Renovar token de API](https://help.vtex.com/es/tutorial/renovar-token-de-api--7r4AzptYjXErGHadg9LnJ3)
