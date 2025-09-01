---
title: 'Claves de API: optimizaciones para mayor seguridad, control y visibilidad'
id: 5shFvP1QiNRdMllp77iVXA
status: PUBLISHED
createdAt: 2025-08-12T22:04:47.768Z
updatedAt: 2025-08-13T14:29:17.461Z
publishedAt: 2025-08-13T14:29:17.461Z
contentType: updates
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: 2025-08-12-api-keys-improvements-for-more-security-control-and-visibility
locale: es
legacySlug: claves-de-api-optimizaciones-para-mayor-seguridad-control-y-visibilidad
announcementImageID: 'undefined'
announcementSynopsisES: 'Actualizamos la experiencia de Claves de API con exportación, búsqueda, alertas y enlaces de acceso único.'
---

Para optimizar la gestión de las credenciales de acceso, actualizamos la experiencia de **Claves de API**. Las optimizaciones ya están disponibles para todas las cuentas.

![generated-keys-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/announcements/2025/agosto/2025-08-12-claves-de-api-optimizaciones-para-mayor-seguridad-control-y-visibilidad_1.png)

## ¿Qué cambió?

Agrupamos las novedades en tres categorías para mejorar la seguridad, simplificar la administración y aumentar la visibilidad de las claves de API.

### Seguridad al compartir

Ahora, en lugar de que el token se muestre directamente al crearlo o renovarlo, se genera un link de acceso único. El objetivo de este cambio es reforzar la seguridad en el manejo de datos sensibles y disminuir la superficie de exposición a ataques.

El link de acceso único se puede copiar para acceder más tarde o compartir con la persona que necesite utilizarlo. Solo se puede acceder al link una vez; es decir, expira al hacer clic en él. Si no hay ninguna interacción en 24 horas, el link también expira.

![one-time-link-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/announcements/2025/agosto/2025-08-12-claves-de-api-optimizaciones-para-mayor-seguridad-control-y-visibilidad_2.png)

> ⚠️ La URL oficial para acceder al token siempre sigue el formato `share.vtex.com/credentials/{token}`. El `{token}` es un identificador aleatorio generado cuando se crea o renueva la clave. Comprueba el formato del link antes de abrirlo para evitar riesgos de phishing o acceso a páginas maliciosas.

### Facilidad de gestión

* **Exportación de claves de API**: ahora puedes generar un archivo XLSX con información de las claves de API generadas en la cuenta y claves externas.  

* **Funcionalidad de búsqueda mejorada**: la lista de claves de API ahora permite buscar una clave utilizando tanto el nombre original como el valor configurado en el campo Identificación de la clave.

### Optimización de las alertas

* **Renovación de token**: la columna **Duración del token** fue removida para facilitar la comprensión durante la gestión de claves generadas. El sistema ahora muestra alertas que recomiendan la renovación a partir del periodo configurado (3 o 6 meses), sin desactivar la validez del token.  

  A continuación se ilustra cómo se muestran las alertas en la fila de la clave de API:

<table style="border-collapse:collapse;border:none;margin:auto;">
  <tr>
    <td style="border:none;padding:0;text-align:center;">
      <img src="https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/announcements/2025/agosto/2025-08-12-claves-de-api-optimizaciones-para-mayor-seguridad-control-y-visibilidad_3.png" alt="renew-recommended-es" style="display:block;max-width:100%;height:auto;margin:auto;">
    </td>
  </tr>
  <tr>
    <td style="border:none;padding:8px 0;text-align:center;font-size:14px;color:#666;">
        La alerta naranja indica que el token superó el plazo de uso recomendado por un periodo inferior a 3 meses.
    </td>
  </tr>
</table>

<br>

<table style="border-collapse:collapse;border:none;margin:auto;">
  <tr>
    <td style="border:none;padding:0;text-align:center;">
      <img src="https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/announcements/2025/agosto/2025-08-12-claves-de-api-optimizaciones-para-mayor-seguridad-control-y-visibilidad_4.png" alt="renew-highly-recommended-es" style="display:block;max-width:100%;height:auto;margin:auto;">
    </td>
  </tr>
  <tr>
    <td style="border:none;padding:8px 0;text-align:center;font-size:14px;color:#666;">
       La alerta roja indica que el plazo de uso recomendado se superó hace 3 meses o más.
    </td>
  </tr>
</table>

* **Eliminación pendiente del token**: agregamos alertas que avisan que la eliminación de un token antiguo está pendiente después de su [renovación](https://help.vtex.com/es/tutorial/renovar-token-de-api--7r4AzptYjXErGHadg9LnJ3).

<table style="border-collapse:collapse;border:none;margin:auto;">
  <tr>
    <td style="border:none;padding:0;text-align:center;">
      <img src="https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/announcements/2025/agosto/2025-08-12-claves-de-api-optimizaciones-para-mayor-seguridad-control-y-visibilidad_5.png" alt="pending-deletion-alert-es" style="display:block;max-width:100%;height:auto;margin:auto;">
    </td>
  </tr>
  <tr>
    <td style="border:none;padding:8px 0;text-align:center;font-size:14px;color:#666;">
      Alerta general, en la parte superior de la pestaña **Generadas**.
    </td>
  </tr>
</table>

<br>

<table style="border-collapse:collapse;border:none;margin:auto;">
  <tr>
    <td style="border:none;padding:0;text-align:center;">
      <img src="https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/announcements/2025/agosto/2025-08-12-claves-de-api-optimizaciones-para-mayor-seguridad-control-y-visibilidad_6.png" alt="delete-pending-es" style="display:block;max-width:100%;height:auto;margin:auto;">
    </td>
  </tr>
  <tr>
    <td style="border:none;padding:8px 0;text-align:center;font-size:14px;color:#666;">
      Alerta en la fila de la clave generada.
    </td>
  </tr>
</table>

## ¿Por qué realizamos este cambio?

Aplicamos estas optimizaciones para proporcionar una experiencia más completa e intuitiva en la gestión de las claves de API y contribuir a la seguridad y eficiencia de las operaciones.

El objetivo es ofrecer más seguridad y practicidad:

* Se refuerza la protección al compartir tokens, minimizando el riesgo de exposición accidental.  
* Se optimiza la colaboración entre los equipos responsables de la cuenta y los equipos de desarrollo.

## ¿Qué se necesita hacer?

No es necesaria ninguna acción. La actualización se aplicará a todas las cuentas automáticamente.

Consulta la documentación actualizada para explorar todas las funcionalidades:

* [Claves de API](https://help.vtex.com/es/tutorial/claves-de-api--4bFEmcHXgpNksoePchZyy6)
* [Claves externas](https://help.vtex.com/es/tutorial/claves-externas--1isU0HfKkeg0atlxRha14Q)
* [Claves generadas](https://help.vtex.com/es/tutorial/claves-generadas--7fnU4iZdvZKbxCaT3Ymdjc)
* [Configurar alerta para renovar tokens de API](https://help.vtex.com/es/tutorial/configurar-alerta-para-renovar-tokens-de-api--kcGIFysFt02FDuhsfjQwZ)  
* [Exportar claves de API](https://help.vtex.com/es/tutorial/exportar-claves-de-api--1p4eYJWD26gOdicUdiiGC5)
* [Renovar token de API](https://help.vtex.com/es/tutorial/renovar-token-de-api--7r4AzptYjXErGHadg9LnJ3)
