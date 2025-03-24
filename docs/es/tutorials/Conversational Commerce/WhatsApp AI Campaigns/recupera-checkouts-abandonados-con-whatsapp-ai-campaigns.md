---
title: 'Recupera checkouts abandonados con WhatsApp AI Campaigns'
id: 20i0zLQHt72LKzVEmk1CRZ
status: PUBLISHED
createdAt: 2024-06-25T11:27:41.160Z
updatedAt: 2024-06-25T16:27:45.935Z
publishedAt: 2024-06-25T16:27:45.935Z
firstPublishedAt: 2024-06-25T15:29:15.011Z
contentType: tutorial
productTeam: Others
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: recovering-abandoned-checkouts-with-whatsapp-ai-campaigns
locale: es
legacySlug: recupera-checkouts-abandonados-con-whatsapp-ai-campaigns
subcategoryId: 4SC2gPmUH3cHD5HjGfQ5Vg
---


WhatsApp AI Campaigns es una funcionalidad desarrollada por VTEX para recuperar checkouts abandonados. 

Cuando un usuario abandona la página de checkout de la compra, la plataforma identifica esta acción. Si el usuario no regresa para completar la compra en el plazo de una hora, la funcionalidad le envía un recordatorio a través de WhatsApp.

Los principales beneficios de la funcionalidad son:

- **Mejora de la experiencia del cliente:** los mensajes pueden personalizarse para aumentar la relevancia y reforzar la relación con la marca.

**Aumento de las tasas de conversión y ventas:** incentiva a los clientes a volver a la página de checkout para finalizar su compra, aumentando así las ventas y las tasas de conversión de los retailers.

>ℹ️ WhatsApp AI Campaigns solamente está disponible para tiendas que utilizan [Store Framework](https://help.vtex.com/tracks/store-development--3fHF3GIjK8UugnQKIakpl9/5DTcawNjc5MovtD7HNqURl#store-framework) y no tienen personalizaciones en Checkout.

## Activar WhatsApp AI Campaigns

Para activar la funcionalidad WhatsApp AI Campaigns debes [instalar la aplicación Connectly](#installing-app-conectly) y luego [configurar un número de WhatsApp en la aplicación](#configurar-nuevo-numero-de-whatsapp).

### Instalar la aplicación Connectly

Para instalar la aplicación Connectly sigue los pasos que se indican a continuación:

1. Accede a la [App Store](https://apps.vtex.com/) de VTEX.

2. Ingresa Connectly en la barra de búsqueda.

3. Haz clic en la aplicación Connectly y, a continuación, en `Obtener app`.

4. Haz clic en `Finalizar compra`.

5. Haz clic en `Ir a la página de instalación`, y serás redirigido a la sección **Mis Apps** en el Admin VTEX.

6. En la página de instalación de la app Connectlyvtex, haz clic en `Instalar`.

7. Haz clic en `Guardar`.

### Configurar un nuevo número de WhatsApp

Para configurar un nuevo número de WhatsApp necesitarás acceso de administrador a tu perfil de Meta. Sigue las instrucciones para configurar un nuevo número y completar la asociación:

>ℹ️ Se recomienda crear un nuevo número de teléfono exclusivamente para vincularlo a WhatsApp Business. Esto ayuda a evitar pérdidas de acceso a números utilizados anteriormente para otros fines.

<ol start="1">
  <li>En el Admin VTEX, ve a <strong>Promociones &gt; Campañas de WhatsApp &gt; Vista general</strong>, o ingresa <strong>Vista general de Campañas de WhatsApp</strong> en la barra de búsqueda de la parte superior de la página.</li>
  <li>Haz clic en <code>Configurar cuenta</code>.</li>
  <li>Selecciona <strong>Sí, quiero un número gratuito</strong> y haz clic en <code>Siguiente</code>.</li>
  <li>Copia el número de teléfono proporcionado y haz clic en <code>Conectar</code> para vincular este número a tu cuenta de Meta for business.</li>
  <li>Haz clic en <code>Continuar como usuario</code>.</li>
  <li>Haz clic en <code>Comenzar</code>.</li>
  <li>Confirma que la información de <strong>Porfolio empresarial, Nombre de la empresa</strong>, <strong>Sitio web</strong> o <strong>Perfil comercial de la empresa</strong> y <strong>País</strong> son correctos.</li>
  <li>Haz clic en <code>Continuar</code>.</li>
</ol>

<p>Crear una cuenta de WhatsApp Business:</p>

<ol start="9">
  <li>Selecciona <strong>Crear una cuenta de WhatsApp Business</strong> y <strong>Crear un nuevo perfil de empresa</strong>.</li>
  <li>Haz clic en <code>Continuar</code>.</li>
  <li>Rellena los campos que se indican a continuación:
    <ul>
      <li><strong>Nombre de la cuenta de WhatsApp Business (interno)</strong>, ejemplo: Nombre de la tienda VTEX.</li>
      <li><strong>Nombre para mostrar (visible para los clientes)</strong>, ejemplo: nombre de la tienda.</li>
      <li><strong>Categoría</strong>.</li>
      <li>Haz clic en <code>Continuar</code>.</li>
    </ul>
  </li>
  <li>Pega el número de teléfono que has copiado en la etapa anterior y selecciona la opción <strong>SMS</strong>. Haz clic en <code>Continuar</code>.</li>
</ol>

>⚠️ El número generado puede ser estadounidense, pero si tu página de Meta está verificada, tus clientes verán el nombre de tu empresa. Si no está verificada, recomendamos seguir el [proceso de verificación con Meta](https://www.facebook.com/business/help/2058515294227817?id=180505742745347).

<ol start="13">
  <li>Copia el código de verificación que se muestra en el Admin VTEX.</li>
  <li>Pega el código de verificación en el campo de la ventana emergente de Meta y haz clic en <code>Continuar</code>.</li>
  <li>Haz clic en <code>Continuar</code>.</li>
  <li>Haz clic en <code>Finalizar</code>.</li>
  <li>Elige un logotipo de 400x400 px para tu nuevo número de WhatsApp. No es necesario que la imagen esté en alta resolución.</li>
</ol>

<p>Aceptar los términos y condiciones:</p>

<ol start="18">
  <li>Revisa los Términos y condiciones.</li>
  <li>Haz clic en <code>Acepto</code>.</li>
  <li>Haz clic en <code>Finalizar</code>.</li>
</ol>

>⚠️ Una vez que se ha activado una campaña de recuperación de checkout abandonado pueden transcurrir hasta 48 horas para que comiencen a mostrarse las métricas de análisis.

>ℹ️ Aprende más sobre [Gestión y detalles de WhatsApp AI Campaigns](https://help.vtex.com/es/tutorial/gerenciamento-e-detalhes-do-whatsapp-ai-campaigns--q9JqDErMqGV4zvsYqkD4s).

