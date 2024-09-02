---
title: 'Os acionadores de exibição de página no G4A estão sendo duplicados em páginas de pesquisa personalizadas'
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
slug: os-acionadores-de-exibicao-de-pagina-no-g4a-estao-sendo-duplicados-em-paginas-de-pesquisa-personalizadas
locale: pt
kiStatus: Backlog
internalReference: 888042
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O evento pageView está sendo exibido duplicado no dataLayer quando em páginas de pesquisa personalizadas

## Simulação



- Vá para qualquer página de pesquisa personalizada
- Abra o console do seu navegador
- Digite dataLayer e verifique o evento pageView

O comportamento esperado é o evento duplicado



## Workaround


N/A


## **Notas internas**

Também encontrei algo curioso na página do departamento com pageView e page_view

https://storetheme.vtex.com/apparel---accessories/

 ![](https://vtexhelp.zendesk.com/attachments/token/dXFuDY5Q9XhZ7hgIvA8m8ugJ3/?name=image.png)

Porém, esse problema específico pode ser replicado em

https://www.dzarm.com.br/outlet

 ![](https://vtexhelp.zendesk.com/attachments/token/EVakZYSBKtcrCQoNXBe92uAzQ/?name=image.png)

