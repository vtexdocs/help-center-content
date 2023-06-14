---
title: 'Categorias.aspx Especificação Timeout'
id: 2HNWe5x0VvSe49G88X2y4Y
status: PUBLISHED
createdAt: 2022-02-25T12:33:15.024Z
updatedAt: 2022-11-25T21:46:43.258Z
publishedAt: 2022-11-25T21:46:43.258Z
firstPublishedAt: 2022-02-25T12:33:15.356Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: categoriasaspx-especificacao-timeout
locale: pt
kiStatus: Backlog
internalReference: 433664
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Não há limite para o registro dos campos de especificação, o que pode gerar timeouts na administração do catálogo.


## Simulação



- Registre uma quantidade muito grande de campos (ou seja, 1000+) em uma única especificação.
- Abra a administração desta especificação Ou tente mudar um produto que contenha esta especificação
- Receber a resposta de um pedido 404 ou 504








## Workaround


Prevenir: Não registrar muitos valores em uma única especificação.
Consertar: Desativar a especificação e registrar os valores em várias especificações, de preferência distribuir em diferentes categorias
Dica: Não concatenar as especificações, especialmente na categoria raiz

