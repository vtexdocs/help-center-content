---
title: "O uso do layout do controle deslizante com a propriedade navigationStep em 1 faz com que os últimos pontos fiquem vazios"
id: 28hbmflHNhAQmHN51Y6abX
status: PUBLISHED
createdAt: 2023-09-29T14:41:34.387Z
updatedAt: 2023-09-29T14:57:48.863Z
publishedAt: 2023-09-29T14:57:48.863Z
firstPublishedAt: 2023-09-29T14:41:35.227Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: o-uso-do-layout-do-controle-deslizante-com-a-propriedade-navigationstep-em-1-faz-com-que-os-ultimos-pontos-fiquem-vazios
locale: pt
kiStatus: Backlog
internalReference: 910125
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando temos um bloco de layout de controle deslizante com a propriedade `navigationStep` definida como 1 e `itemsPerPage` diferente de 1, o último ponto fica vazio e não é possível excluí-lo.

## Simulação



- Crie um novo bloco de layout de controle deslizante
- Defina o `navigationStep` como 1
- Defina o `itemsPerPage` em um valor diferente de 1
- Usando as setas do controle deslizante, tente navegar até o último ponto do controle deslizante
- Você verá que o último ponto está vazi

## Workaround


N/A





