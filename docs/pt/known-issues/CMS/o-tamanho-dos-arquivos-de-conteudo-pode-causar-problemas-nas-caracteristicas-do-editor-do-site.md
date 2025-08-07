---
title: "O tamanho dos arquivos de conteúdo pode causar problemas nas características do Editor do site"
id: UevN0hPbmi9f9RQtsI1bi
status: PUBLISHED
createdAt: 2022-12-13T14:37:50.733Z
updatedAt: 2022-12-13T14:37:51.370Z
publishedAt: 2022-12-13T14:37:51.370Z
firstPublishedAt: 2022-12-13T14:37:51.370Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: o-tamanho-dos-arquivos-de-conteudo-pode-causar-problemas-nas-caracteristicas-do-editor-do-site
locale: pt
kiStatus: Backlog
internalReference: 715480
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Cada atualização de conteúdo ou estrutura em um tema de loja é registrada em arquivos chamados `content.json` e `template.json`, esses arquivos funcionam como "mapas" que mantêm as referências de todo o conteúdo que a vitrine mostra, portanto, é também baseada no que é exibido como uma prévia no Editor do Site.

Quando um desses arquivos é muito grande, pode causar problemas de desempenho e afetar características do Editor do Site como Programação da Versão do Conteúdo.


##

## Simulação


Não há uma maneira específica de simular problemas com base no tamanho dos arquivos de conteúdo, mas aqui está um exemplo de uma falha no conteúdo programado:

Quando um arquivo de conteúdo é muito grande a solicitação GET, que é responsável por atualizar as informações na tela, pode apresentar um erro de timeout, portanto, o conteúdo utilizado pode ser baseado no cache do render-server, que conterá informações desatualizadas sobre as alterações feitas na nova versão de conteúdo, causando falhas no cronograma.


##

## Workaround


- É essencial entender porque esses arquivos são grandes e tentar reduzi-los;
- Verificar se a loja tem múltiplas ligações e se elas são bem definidas e indispensáveis porque podem afetar diretamente o tamanho dos arquivos de conteúdo;
- Verificar se o aplicativo `vtex.render-server' e o aplicativo `vtex.store' estão em sua versão final;
- Em um cenário de falha programada, o usuário pode ativar manualmente a versão falhada.

