---
title: Configuración de precios (Beta)
id: 5VGOhV4yRpg9WB5B0Pjw1J
status: DRAFT
createdAt: 2020-09-08T15:14:39.844Z
updatedAt: 2022-07-27T12:43:11.380Z
publishedAt: 
firstPublishedAt: 2020-09-24T17:54:32.771Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slug: beta-configuracion-de-precios
legacySlug: configuracion-de-precios-beta
subcategory: 2XTQ6yFYeU5bGHK8Qq3f4I
---

<div class = "alert alert-info">
  <p>Esta funcionalidad está en versión Beta, lo que significa que estamos trabajando para mejorarla. Si tiene alguna pregunta, póngase en contacto con <a href = "https://support.vtex.com/hc/es-419/requests">nuestro Soporte</a>.</p>
</div>

Esta nueva sección de Configuración de precios (Beta) permite crear y gestionar reglas para las tablas de precios, así como cambiar la configuración general de forma práctica y rápida. 

## Configuración general de precios

En esta sección, usted puede definir el markup estándar y el límite de variación de precio de su tienda. También puede heredar los precios de la cuenta padre y sobrescribir los precios de sellers con los de su cuenta. 

- **Markup estándar para nuevos precios:** porcentaje de lucro estándar sobre un nuevo precio registrado en un producto o servicio.
- **Usar límite de variación de precio:** asegura que los precios de los SKUs no se cambien a valores no deseados.
  - **Reducción máxima:** mayor reducción en el precio de un SKU.
  - **Aumento máximo:** mayor aumento en el precio de un SKU. 
- **Heredar precios de cuenta padre:** opción que permite que la cuenta actual herede precios de una cuenta padre. La herencia de precios se realiza en las siguientes situaciones: 
  - **Siempre:** la cuenta siempre heredará todos los precios de la cuenta padre. 
  - **Solo para precios inexistentes:** los precios de la cuenta padre se heredan solo si los precios de la cuenta actual son inexistentes. 

<div class = "alet alert-info">
  <p>La configuración <b>Heredar precios de cuenta padre</b> solo está disponible para la cuentas hijas.</p>
</div>

- **Sobrescribir precios de sellers:**  esta opción sobrescribe todos los precios de sellers con los de la cuenta actual.

<div class = "alert alert-info">
  <p>La configuración <b>Sobrescribir precios de sellers</b> no está disponible para sellers White label.</p>
</div>

## Reglas para tablas de precios

<div class = “alert alert-warning”>
  <p>Esta sección es la alternativa para los clientes que configuraban sus precios mediante UTM de Pricing V1. Ahora se puede seleccionar un tabla de precios para escenarios de UTM.</p>
</div>

En esta sección usted puede crear reglas de priorización de tablas de precios a partir de condiciones específicas. 

### Estrategia

- **Precio más bajo:** configura la tienda para usar el precio más bajo encontrado en la secuencia de tablas de precios. 
- **Precio más alto:** configura la tienda para usar el precio más alto encontrado en la secuencia de tablas de precios. 
- **Prioridad (personalizada):** configura la tienda para usar el primer precio encontrado de acuerdo con la prioridad definida en las tablas de precios.

### Crear regla para tabla de precios

Para crear una nueva regla, siga los pasos a continuación:

1. En el Admin, haga clic en el módulo **Precios**.
2. Haga clic en **Configuración**.
3. En la sección **Reglas para tablas de precios**, haga clic en el botón **Agregar nueva regla**.
4. Rellene el **Nombre de la regla**.
5. Seleccione la tabla de precios en la que se aplicará la regla.
6. Indique las condiciones de activación de la regla:

  a. **Activar siempre:** la tabla de precios se activará de forma permanente, independiente de las condiciones.

  b. **Activar en condiciones específicas:** la tabla de precios se activará según las condiciones configuradas en la regla. Vea las alternativas de configuración en las siguientes imágenes: 

  ![config-preco-ES](//images.ctfassets.net/alneenqid6w5/yNbbBH6crnGlgSflYJOuI/443a122a3b4909c114898816ae27e9b8/config-preco-ES.png)

  ![config-preco2-ES](//images.ctfassets.net/alneenqid6w5/4TUUMNundZb1RjgBDKHNUn/4b279c50a93f6911b705e83b3970f2c2/config-preco2-ES.png)

  ![config-preco3-ES](//images.ctfassets.net/alneenqid6w5/1MUMEqGPxoW6XBr6Yfp9L1/52b2a01a72eef3cb0caa6881dff491ac/config-preco3-ES.png)

7. Haga clic en **Confirmar**. 

### Editar regla para tabla de precios

Para editar una regla, siga los pasos a continuación:

1. En el Admin, haga clic en el módulo **Precios**.
2. Haga clic en **Configuración**.
3. En la sección **Reglas para tablas de precios**, haga clic en el ícono <i class="fas fa-pen" title = "pen"></i>.
4. Realice los cambios que desea.
5. Haga clic en **Confirmar**.

Si la estrategia **Prioridad (personalizada)** está activada, usted puede cambiar el orden de las reglas para modificar la prioridad. Para eso, haga clic en el ícono <i class="fas fa-grip-vertical" title = "arrastrar vertical"></i>, arrastre y suelte el ítem en la posición que desea.

## Eliminar o duplicar regla para tabla de precios

Si usted desea eliminar una regla, solo tiene que hacer clic en el ícono <i class="fas fa-trash-alt" title = "papelera"></i> en la lista de reglas.

Si desea duplicar una regla, haga clic en el ícono <i class="fas fa-clone" title = "clonar"></i> de la regla respectiva.

