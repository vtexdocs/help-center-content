---
title: 'Melhoria no controle de permissões de Catálogo'
id: 7f2oJiK1j4EYeZBikTHihh
status: PUBLISHED
createdAt: 2025-05-13T20:43:35.895Z
updatedAt: 2025-06-06T21:15:25.435Z
publishedAt: 2025-06-06T21:15:25.435Z
contentType: updates
productTeam: Management
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: 2025-05-13-improved-control-of-catalog-permissions
locale: pt
legacySlug: melhoria-no-controle-de-permissoes-de-catalogo
announcementImageID: ''
announcementSynopsisPT: 'Novos recursos do License Manager de Catálogo, agora mais intuitivos e que unificam acessos via Admin VTEX ou API.'
---

Atualizamos os [recursos do License Manager](/pt/tutorial/recursos-do-license-manager--3q6ztrC8YynQf6rdc6euk3) relacionados ao Catálogo para aprimorar o gerenciamento de permissões. Veja a seguir as principais mudanças: 

- Recursos mais simples e intuitivos relacionados a ações no Catálogo.
- Controle unificado de acessos para tarefas realizadas no Admin VTEX ou via API.

## O que mudou?

Considerando a organização por produtos no License Manager, fizemos mudanças em dois produtos:

- Os recursos previamente alocados no produto **Catalog** agora estão alocados no produto **Catalog Legacy**.
- O recurso **View Product**, previamente alocado no produto **Catalog API**, agora está alocado no produto **Catalog**.

Além disso, acrescentamos novos recursos no License Manager, relativos ao produto **Catalog** e à categoria **General**. Confira abaixo detalhes sobre as permissões concedidas:

| **Recurso** | **Chave** | **Descrição** |
|---|---|---|
| Edit Product | EditProduct | Editar detalhes de produtos e SKUs. |
| View Product | ViewProduct | Visualizar detalhes de produtos e SKUs. |
| View Category | ViewCategory | Visualizar detalhes de categorias. |
| Edit Category | EditCategory | Editar detalhes de categorias. |
| View Collection | ViewCollection | Visualizar detalhes de coleções. |
| Edit Collection | EditCollection | Editar detalhes de coleções. |
| View Brand | ViewBrand | Visualizar detalhes de marcas. |
| Edit Brand | EditBrand | Editar detalhes de marcas. |
| Import Spreadsheet | ImportSpreadsheet | Importar produtos e SKUs por planilha. |
| Export Spreadsheet | ExportSpreadsheet | Exportar planilha de informações do catálogo. |

Esses recursos dão acesso a determinadas tarefas da plataforma, independentemente da interface. Por exemplo: um usuário com qualquer perfil contendo o recurso **Edit Category** tem permissão para editar detalhes de categorias, seja pelo Admin VTEX ou pela [API do catálogo](https://developers.vtex.com/docs/api-reference/catalog-api#overview).

<div class = "alert alert-info">
  <p>O produto <b>Catalog Legacy</b> (anteriormente <b>Catalog</b>) continua ativo, mas concede acesso apenas às telas antigas de gerenciamento de catálogo, caso ainda estejam em uso na sua loja.</p>
</div> 

## O que precisa ser feito?

Os novos recursos já estão ativos, foram documentados neste [artigo do License Manager](/pt/tutorial/recursos-do-license-manager--3q6ztrC8YynQf6rdc6euk3) e foram automaticamente designados para todos os perfis de acesso que utilizavam o produto **Catálogo**. Porém, é necessário que as lojas realizem uma revisão das suas permissões de acesso até 1 de julho de 2025. A partir desta data, qualquer tentativa de acesso sem os recursos mencionados será bloqueada.

Recomendamos que aproveite esta ocasião para revisar as permissões da sua loja, mantendo apenas as permissões necessárias para cada usuário.

Para saber mais sobre como gerenciar permissões de usuários e chaves de aplicação, confira os artigos a seguir:

- [Perfis de acesso](/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc)
- [Gerenciar usuários](/pt/tutorial/gerenciando-usuarios--tutorials_512)
- [Gerenciar chaves de aplicação](/pt/tutorial/chaves-de-aplicacao--2iffYzlvvz4BDMr6WGUtet#gerenciar-chaves-de-aplicacao)
- [Recursos do License Manager](/pt/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3)
