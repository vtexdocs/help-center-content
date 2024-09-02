---
title: 'O Locale Switcher não funciona no ambiente myvtex'
id: 1ZB56egPjPbTaUUnws5juK
status: PUBLISHED
createdAt: 2023-03-27T12:26:31.974Z
updatedAt: 2024-02-02T21:03:39.535Z
publishedAt: 2024-02-02T21:03:39.535Z
firstPublishedAt: 2023-03-27T12:26:32.649Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: o-locale-switcher-nao-funciona-no-ambiente-myvtex
locale: pt
kiStatus: Backlog
internalReference: 778306
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Locale Switcher não funciona no ambiente myvtex sem definir explicitamente o espaço/ambiente de trabalho, mas não há impacto no site. Este comportamento afeta a navegação somente em myvtex e o gerenciamento de conteúdo para diferentes idiomas.


##

## Simulação



- Acesse o Editor do Site ou o Front-End no ambiente myvtex sem colocar o espaço de trabalho (por exemplo: accountName.myvtex.com/admin/cms/site-editor);
- Selecione um site com vários idiomas;
- Alterar entre os idiomas;
- Você verá que não haverá nenhuma mudança no idioma.


##

## Workaround


Espaço de trabalho "master" do usuário para alterar o conteúdo para os diferentes idiomas e validá-lo durante a navegação (por exemplo: master--accountName.myvtex.com/admin/cms/site-editor)



