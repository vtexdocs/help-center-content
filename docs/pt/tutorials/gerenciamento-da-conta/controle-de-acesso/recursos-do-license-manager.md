---
title: 'Recursos do License Manager'
id: 3q6ztrC8YynQf6rdc6euk3
status: PUBLISHED
createdAt: 2022-02-14T17:53:22.572Z
updatedAt: 2025-10-24T22:59:13.330Z
publishedAt: 2025-10-24T22:59:13.330Z
firstPublishedAt: 2022-02-14T19:56:27.935Z
contentType: tutorial
productTeam: Identity
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: license-manager-resources
legacySlug: recursos-do-license-manager
locale: pt
subcategoryId: 1HSqkejwuYcQSMC400uY84
---

A VTEX disponibiliza vários [perfis de acesso](/pt/docs/tutorials/perfis-de-acesso) pré-definidos para usuários administrativos. Isso permite que colaboradores da empresa exerçam suas funções acessando o mínimo necessário de recursos. No entanto, sabemos que cada ecommerce tem suas necessidades únicas e a flexibilidade é essencial para atender a problemas específicos de negócios. 

Por isso, a plataforma VTEX oferece a possibilidade de criar perfis de acessos customizados, permitindo que você escolha precisamente quais recursos poderão ser acessados por um dado perfil customizado. Abaixo, você encontra a descrição dos recursos da VTEX disponíveis para cada produto.

> ❗ O uso irrestrito de recursos aumenta o risco de ataques às lojas por vazamento de credenciais de login com acesso a recursos críticos. Caso haja dúvidas sobre a descrição de um recurso específico, não hesite em nos contatar.

<DataTable
  src="data-tables/license-manager-resources.json"
  columns={[
    { key: 'product', label: 'Produto', sortable: true, filterable: true },
    { key: 'category', label: 'Categoria', sortable: true, filterable: true },
    { key: 'resource', label: 'Recurso', sortable: true, filterable: true },
    { key: 'description', label: 'Descrição' },
    { key: 'key', label: 'Chave', type: 'code', sortable: true, filterable: true },
    { key: 'resourceId', label: 'ID do Recurso', type: 'number', sortable: true },
    { key: 'productId', label: 'ID do Produto', type: 'number', sortable: true },
  ]}
/>

> ℹ️ No aplicativo [Audit](/pt/docs/tutorials/audit), recursos do License Manager são identificados pelas respectivas chaves.

## Recursos internos ou deprecados

Na interface do License Manager, você também encontra recursos deprecados ou de uso exclusivamente interno da VTEX. Estes não têm impacto para a sua loja. São eles:

<DataTable
  src="data-tables/license-manager-internal-resources.json"
  columns={[
    { key: 'product', label: 'Produto', sortable: true, filterable: true },
    { key: 'category', label: 'Categoria', sortable: true, filterable: true },
    { key: 'resource', label: 'Recurso', sortable: true, filterable: true },
    { key: 'key', label: 'Chave', type: 'code', sortable: true, filterable: true },
    { key: 'resourceId', label: 'ID do Recurso', type: 'number', sortable: true },
    { key: 'productId', label: 'ID do Produto', type: 'number', sortable: true },
  ]}
/>

