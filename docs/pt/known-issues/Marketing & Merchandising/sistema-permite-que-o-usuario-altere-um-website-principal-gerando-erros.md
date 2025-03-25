---
title: 'Sistema permite que o usuário altere um website principal, gerando erros'
id: 1etuCzBmHEywwm02USmyW6
status: PUBLISHED
createdAt: 2017-06-14T18:44:43.954Z
updatedAt: 2022-12-22T20:48:39.505Z
publishedAt: 2022-12-22T20:48:39.505Z
firstPublishedAt: 2017-08-10T15:12:42.153Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slugEN: system-allows-the-user-to-change-a-main-web-site-generating-errors
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

No módulo CMS, o sistema deixa o usuário manusear um Web Site A e apontar a um Web Site B como pai.

Caso o usuário queira retornar, nao há a possibilidade de apontar o Web Site B para o A, como pai. Com isso, gera erros no site como o erro abaixo, e o admin fica inacessível.

![KI erro website](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Marketing%20&%20Merchandising/sistema-permite-que-o-usuario-altere-um-website-principal-gerando-erros_1.png)


## Simulação

- Acessar o módulo __CMS__;
- Acessar Portal > Web Sites;
- No primeiro Web Site > campo Web Site Pai, inserir o Web Site referente ao Web Site 2;
- No segundo Web Site > campo Web Site Pai, inserir o Web Site referente ao Web Site 1.

![KI erro website2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Marketing%20&%20Merchandising/sistema-permite-que-o-usuario-altere-um-website-principal-gerando-erros_2.png)

## Workaround

Quando esse tipo de problema acontece, o admin fica inacessível, e páginas de produtos geram erros. E a unica solução é voltar a configuração por meio do banco de dados.

