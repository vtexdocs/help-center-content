---
title: 'CatalogV2 Funções do usuário que não se aplicam'
id: 3cDaOuqpAJyCL5JOMzD5nL
status: PUBLISHED
createdAt: 2022-02-25T12:18:17.776Z
updatedAt: 2022-11-25T21:55:04.311Z
publishedAt: 2022-11-25T21:55:04.311Z
firstPublishedAt: 2022-02-25T12:18:18.632Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: catalogv2-funcoes-do-usuario-que-nao-se-aplicam
kiStatus: Backlog
internalReference: 489297
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>

Atualmente, a IU do usuário para a aplicação CatalogV2 não está aplicando corretamente as permissões de controle de acesso quando um usuário está utilizando a IU para criar/ler/atualizar produtos.


## Simulação


1) Acesse a interface do gerenciador de licenças para uma loja que tenha o CatalogV2 instalado (/admin/license-manager/#/role-details)

2) Definir uma função de usuário somente leitura

 ![](https://vtexhelp.zendesk.com/attachments/token/NpEBOSahA9ogF72lsW9kYRjyH/?name=inline441836406.png)

3) Com estas regras definidas, faça o login com o usuário relacionado

4) Tente atualizar um produto, você será capaz de, apesar das credenciais somente leitura.







## Workaround


Utilize as APIs GraphQL do catálogo v2 para gerenciar essas permissões.

