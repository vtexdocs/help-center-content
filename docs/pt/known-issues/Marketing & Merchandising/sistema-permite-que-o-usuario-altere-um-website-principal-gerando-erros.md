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

![KI erro website](//images.contentful.com/alneenqid6w5/17hdmuW8qis8kyKUs6e8SG/2234b8f8916038ce6e8ccf98b6ff14a9/KI_erro_website.png)


## Simulação

- Acessar o módulo __CMS__;
- Acessar Portal > Web Sites;
- No primeiro Web Site > campo Web Site Pai, inserir o Web Site referente ao Web Site 2;
- No segundo Web Site > campo Web Site Pai, inserir o Web Site referente ao Web Site 1.

![KI erro website2](//images.contentful.com/alneenqid6w5/a6SpuvdBT2KOIiaSO6EGq/e98a7e9081262e773f63f165f7344ecc/KI_erro_website2.png)

## Workaround

Quando esse tipo de problema acontece, o admin fica inacessível, e páginas de produtos geram erros. E a unica solução é voltar a configuração por meio do banco de dados.

