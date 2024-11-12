---
title: 'Associando um template a um layout'
id: 7CkgOHRj7DVbsRxyR8YQrK
status: PUBLISHED
createdAt: 2022-01-10T22:05:16.978Z
updatedAt: 2023-03-28T12:47:10.787Z
publishedAt: 2023-03-28T12:47:10.787Z
firstPublishedAt: 2022-01-10T22:10:43.500Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1DedyaVUPp5wLAvjY7wKKv
slugEN: associating-a-template-with-a-layout
locale: pt
legacySlug: associando-um-template-a-um-layout
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

<div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
Tutorial válido apenas para lojas CMS Portal Legado.
</div>

O código das páginas da sua loja são escritos nos **templates** do CMS. Assim que a loja ganha acesso ao Admin, por exemplo, o template `Home` é o que contém o código da *homepage* do site.

Mas digamos que você crie um novo template `Home2` e queira exibi-lo na homepage. Como a plataforma sabe que é o template `Home2` que deve ser mostrado na homepage, e não o template `Home`?

Para indicar isso, é preciso associar o template desejado ao **layout**, que se encontra na estrutura de pastas do site, dentro de Sites and Channels.

Essa associação é feita na configuração de propriedades do layout. Para chegar até lá, siga estes passos:

1. No Admin VTEX, acesse **Storefront > Layout > CMS** e clique em **Sites and channels**.
2. Clique no website desejado, referente à loja que você está editando.
3. Clique na pasta raiz (`/`).
4. Procure o layout que você deseja editar. 
5. Clique no dropdown **Template**. Aí serão listados os templates configurados em HTML Templates.
6. Selecione o template que você deseja associar a esse layout.
7. Digite `yes` para confirmar a mudança. (Este passo é necessário porque esta é uma alteração crítica para o site, já que o front-end da página será substituído.) 

![CMS 4 1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)
