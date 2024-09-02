---
title: 'Não é possível fazer upload de novas mídias/documentos em um espaço de trabalho de desenvolvimento quando a entidade tem mais de 10 mil documentos'
id: zhDX1xoXAifH9tYroXCFn
status: PUBLISHED
createdAt: 2023-04-24T20:01:04.211Z
updatedAt: 2024-06-28T16:07:27.058Z
publishedAt: 2024-06-28T16:07:27.058Z
firstPublishedAt: 2023-04-24T20:01:04.779Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slug: nao-e-possivel-fazer-upload-de-novas-midiasdocumentos-em-um-espaco-de-trabalho-de-desenvolvimento-quando-a-entidade-tem-mais-de-10-mil-documentos
locale: pt
kiStatus: Fixed
internalReference: 795940
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



Não é possível fazer upload de uma nova mídia/documento em alguma entidade por meio da galeria de mídia (admin/new-cms/media-gallery) ou do editor de sites (admin/cms/site-editor) em um espaço de trabalho de desenvolvimento quando uma entidade tem mais de 10 mil documentos porque não usamos a rolagem de dados mestre nesses cenários.

## Simulação




- Você deve ter pelo menos 10 mil documentos no gerenciador de arquivos (essas duas entidades: `vtex_admin_cms_graphql_content`
`vtex_admin_cms_graphql_contentVariant`


- Criar um espaço de trabalho de desenvolvimento (`vtex use devWorkspace`)
- Acesse: admin/new-cms/media-gallery, nesse novo espaço de trabalho de desenvolvimento
- Tentar carregar uma nova imagem
- A imagem não será carregada, acionando o erro de rolagem nos dados mestre

*A mesma coisa acontece quando você usa a galeria de mídia por meio do editor do site



## Workaround




- Carregue as imagens em um espaço de trabalho ou mestre de produção e, em seguida, selecione-as em um espaço de trabalho de desenvolvimento depois que elas forem criadas
- Realize todos os processos em um ambiente/espaço de trabalho de produção em vez de em um ambiente de desenvolvimento (`vtex use prodWorkspace --production`)





