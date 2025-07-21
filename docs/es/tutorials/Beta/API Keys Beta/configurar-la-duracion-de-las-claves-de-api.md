---
title: 'Configurar la duración de las claves de API (Beta)'
id: kcGIFysFt02FDuhsfjQwZ
status: PUBLISHED
createdAt: 2024-09-30T18:38:54.891Z
updatedAt: 2025-02-05T19:49:54.000Z
publishedAt: 2025-02-05T19:49:54.000Z
firstPublishedAt: 2024-10-08T18:42:01.264Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: configuring-the-duration-of-api-keys
locale: es
legacySlug: configurar-la-duracion-de-las-claves-de-api-beta
subcategoryId: 3OlaStejO5MSzvDSU3VCH3
---

<div class="alert alert-info">
  <p>Esta funcionalidad se encuentra en fase beta cerrada, lo que significa que por el momento solo tienen acceso a ella algunos clientes seleccionados. Si te interesa implementarla en el futuro, ponte en contacto con <a href="https://support.vtex.com/hc/es-419">nuestro soporte</a>.</p>
</div>

La página **Claves de API** permite configurar la duración de los tokens de API generados al crear una clave. Definir la duración de las claves de API es importante para garantizar la seguridad, limitar la exposición a riesgos y controlar el acceso a recursos, minimizando el impacto de claves comprometidas.

![apikeys-settings-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Beta/API%20Keys%20Beta/configurar-la-duracion-de-las-claves-de-api_1.png)

De manera predeterminada, la duración de las claves de API es de 3 meses, salvo que se seleccione otra opción.

Cuando se alcanza el plazo definido, la clave API aparece con el status *Obsoleto* en la pestaña **Generadas**.

<div class="alert alert-warning">
  <p>Durante la fase beta, la duración solo modifica el status en la interfaz del Admin VTEX, sin desactivar el uso de la clave. Se recomienda <a href="https://help.vtex.com/es/tutorial/renovar-token-de-api--7r4AzptYjXErGHadg9LnJ3">renovar manualmente el token</a> de las claves obsoletas.</p>
</div>

Para configurar la duración de los tokens de API sigue los pasos a continuación:

1. En la barra superior del Admin VTEX, haz clic en el **avatar de tu perfil**, marcado por la inicial de tu email, y luego en *Configuración de la cuenta > Claves de API*.  
2. Haz clic en <i class="fas fa-cog"></i> `Configuración`.  
3. Selecciona la opción con la duración deseada:

   * **3 meses** (recomendado)  
   * **6 meses**  
4. Haz clic en `Aplicar`.

La duración establecida se aplicará a todas las claves, tanto nuevas como existentes, tomando la fecha de creación de cada clave como referencia para calcular su validez.

## Más información

* [Claves de API (beta)](/es/tutorial/claves-de-api--4bFEmcHXgpNksoePchZyy6)
* [Claves generadas (beta)](/es/tutorial/claves-generadas--7fnU4iZdvZKbxCaT3Ymdjc)
* [Claves externas (beta)](/es/tutorial/claves-externas--1isU0HfKkeg0atlxRha14Q)
