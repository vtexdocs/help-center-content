---
title: Valor padrão na especificação só funciona quando se cria produtos através de Admin
id: 6oL4LDFx18s0pOvOEKcniQ
status: PUBLISHED
createdAt: 2022-03-25T14:21:28.216Z
updatedAt: 2022-11-25T21:46:27.899Z
publishedAt: 2022-11-25T21:46:27.899Z
firstPublishedAt: 2022-03-25T14:21:29.045Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: valor-padrao-na-especificacao-so-funciona-quando-se-cria-produtos-atraves-de-admin
kiStatus: Backlog
internalReference: 550097
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Ao criar uma especificação em uma Categoria VTEX você pode configurar um valor padrão que será preenchido quando o sku/produto for criado sem esta informação.

Entretanto, esta característica não se comporta como esperado quando o sku/produto é criado usando API ou planilha de cálculo. O campo permanece vazio.

Ao criar o sku/produto via Admin UI, o valor padrão funciona normalmente.



## Simulação



1. Criar uma especificação com um valor padrão;
2. Criar um produto através de Admin sem preencher este campo;
3. Verificar se o valor do campo é o valor padrão;
4. 4. Criar um produto através de API ou planilha eletrônica;
5. 5. Verificar se o valor do campo está vazio;



## Workaround


Criar o produto usando Admin.

