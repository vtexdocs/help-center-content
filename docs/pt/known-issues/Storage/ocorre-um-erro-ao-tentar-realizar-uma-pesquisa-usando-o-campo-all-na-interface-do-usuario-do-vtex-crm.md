---
title: 'Ocorre um erro ao tentar realizar uma pesquisa usando o campo "All" na interface do usuário do VTEX CRM'
id: 1OKMTJuUZx6mnDmYW3MBjP
status: PUBLISHED
createdAt: 2023-10-25T18:46:48.120Z
updatedAt: 2024-11-13T12:00:08.720Z
publishedAt: 2024-11-13T12:00:08.720Z
firstPublishedAt: 2023-10-25T18:46:48.731Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: ocorre-um-erro-ao-tentar-realizar-uma-pesquisa-usando-o-campo-all-na-interface-do-usuario-do-vtex-crm
locale: pt
kiStatus: Backlog
internalReference: 925679
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O filtro "All" (Todos) na interface do usuário do CRM retorna um erro quando usado em entidades com muitos documentos. Isso ocorre porque o filtro "All" executa uma pesquisa curinga em todos os campos pesquisáveis, o que pode resultar em um erro devido ao grande volume de dados que está sendo consultado.

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Storage/ocorre-um-erro-ao-tentar-realizar-uma-pesquisa-usando-o-campo-all-na-interface-do-usuario-do-vtex-crm_1.png)

## Simulação



- Acesse a interface de usuário do CRM `https://.vtexcrm.com.br/` e navegue até uma exibição que represente uma entidade com muitos registros.
- Inicie uma pesquisa usando o campo "All" (Todos). ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Storage/ocorre-um-erro-ao-tentar-realizar-uma-pesquisa-usando-o-campo-all-na-interface-do-usuario-do-vtex-crm_2.png)
- Pesquise qualquer termo no campo de pesquisa.
- Observe que o sistema tenta realizar uma pesquisa curinga em todos os campos pesquisáveis, o que pode resultar em um erro devido ao grande volume de dados.
"**Ocorreu um erro inesperado. Por favor, tente novamente. Se o problema persistir, entre em contato com o suporte. "**![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Storage/ocorre-um-erro-ao-tentar-realizar-uma-pesquisa-usando-o-campo-all-na-interface-do-usuario-do-vtex-crm_3.png)



## Workaround


Use filtros para campos específicos.

