---
title: 'CatalogV2 Funções do usuário que não se aplicam'
id: 3cDaOuqpAJyCL5JOMzD5nL
status: PUBLISHED
createdAt: 2022-02-25T12:18:17.776Z
updatedAt: 2024-02-16T20:26:53.078Z
publishedAt: 2024-02-16T20:26:53.078Z
firstPublishedAt: 2022-02-25T12:18:18.632Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalogv2-user-roles-not-applying
locale: pt
kiStatus: No Fix
internalReference: 489297
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

Atualmente, a IU do usuário para a aplicação CatalogV2 não está aplicando corretamente as permissões de controle de acesso quando um usuário está utilizando a IU para criar/ler/atualizar produtos.


## Simulação


1) Acesse a interface do gerenciador de licenças para uma loja que tenha o CatalogV2 instalado (/admin/license-manager/#/role-details)

2) Definir uma função de usuário somente leitura

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

3) Com estas regras definidas, faça o login com o usuário relacionado

4) Tente atualizar um produto, você será capaz de, apesar das credenciais somente leitura.







## Workaround


Utilize as APIs GraphQL do catálogo v2 para gerenciar essas permissões.

