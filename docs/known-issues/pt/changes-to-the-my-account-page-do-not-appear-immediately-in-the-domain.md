---
title: 'Alterações na página de "minha conta" não aparecem imediatamente no domínio "vtexcommercestable.com.br"'
id: iUmuXOYVj97sTpqQnJqAU
status: PUBLISHED
createdAt: 2019-03-19T13:23:11.941Z
updatedAt: 2019-12-31T15:17:19.234Z
publishedAt: 2019-12-31T15:17:19.234Z
firstPublishedAt: 2019-03-19T13:34:24.115Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: authors_4
tag: Portal (CMS)
slug: alteracoes-na-pagina-de-minha-conta-nao-aparecem-imediatamente-no-dominio
locale: pt
kiStatus: Closed
internalReference: 
---

## Sumário

Ao alterar dados na página de "minha conta" pelo domínio "vtexcommercestable.com.br", as novas informações inseridas não podem ser visualizadas imediatamente - quando a página recarrega ainda são exibidos os dados antigos.

Este problema se limita à versão de legado da página de conta.

## Simulação

1. Acessar {loja}.vtexcommercestable.com.br/account;
2. Fazer login e aguardar ser redirecionado para a página de "minha conta";
3. Alterar os dados e aguardar a página recarregar;
4. Os dados exibidos são os de antes da alteração.

## Workaround

O cenário acontece pois os dados anteriores ficaram no cache do navegador, que após recarregar a página, entregou o conteúdo sem consultar o servidor.

Para contornar o cache do navegador, basta atualizar a página com `Ctrl/Cmd + Shift + R`. Com isso a página não irá utilizar o cache e os dados exibidos serão os novos.

O cenário acontece apenas no ambiente "vtexcommercestable.com.br" e, embora seja relativo à versão em produção da loja, este cenário não irá acontecer em seu domínio final.

O cenário em questão já está corrigido definitivamente na nova App de "My Account" que substituirá a versão de legado em breve.


