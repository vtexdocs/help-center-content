---
title: "Los activadores de páginas en G4A se duplican en las páginas de búsqueda personalizadas."
id: 4hIwZ2v9bbyyZXrxoDglyx
status: PUBLISHED
createdAt: 2023-11-08T13:35:27.802Z
updatedAt: 2024-02-19T18:43:16.271Z
publishedAt: 2024-02-19T18:43:16.271Z
firstPublishedAt: 2023-11-08T13:35:28.390Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: los-activadores-de-paginas-en-g4a-se-duplican-en-las-paginas-de-busqueda-personalizadas
locale: es
kiStatus: Backlog
internalReference: 888042
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


El evento pageView se muestra duplicado en dataLayer cuando en las páginas de búsqueda personalizada


##

## Simulación



- Vaya a cualquier página de búsqueda personalizada
- Abre la consola de tu navegador
- Escribe dataLayer y comprueba el evento pageView

El comportamiento esperado es el evento duplicado


##

## Workaround


N/A


## **Notas Internas**

También encontré algo curioso en la página del departamento con pageView y page_view

https://storetheme.vtex.com/apparel---accessories/

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Store%20Framework/los-activadores-de-paginas-en-g4a-se-duplican-en-las-paginas-de-busqueda-personalizadas_1.png)

Pero, este problema específico es replicable en

https://www.dzarm.com.br/outlet

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Store%20Framework/los-activadores-de-paginas-en-g4a-se-duplican-en-las-paginas-de-busqueda-personalizadas_2.png)

