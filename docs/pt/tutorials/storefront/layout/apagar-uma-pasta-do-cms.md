---
title: 'Apagar uma pasta do CMS'
id: 6rlNmChZmgy22mium8WYaC
status: PUBLISHED
createdAt: 2019-01-24T20:45:43.331Z
updatedAt: 2023-03-29T14:11:50.929Z
publishedAt: 2023-03-29T14:11:50.929Z
firstPublishedAt: 2019-01-24T22:04:21.998Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slugEN: deleting-a-folder-from-cms
legacySlug: apagar-uma-pasta-do-cms
locale: pt
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

<div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
Tutorial válido apenas para lojas CMS Portal Legado.
</div>

Para apagar uma pasta do CMS, siga os passoa abaixo:
1. No Admin VTEX, acesse **Storefront > Layout > CMS**.
2. Clique na pasta CMS e depois em __Sites and Channels__.
3. Clique no website desejado e depois na pasta raiz (/).
4. Na linha da pasta que você deseja apagar, clique em __delete__.

![erroDeletarPasta2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/storefront/layout/apagar-uma-pasta-do-cms_1.png)

> ❗ Algumas pastas são obrigatórias. Sua loja não funcionará corretamente sem elas. Outras são importantes, portanto não é uma boa ideia apagá-las.<br><br>Entenda melhor este assunto no artigo [Estrutura de pastas do CMS](http://help.vtex.com/pt/tutorial/estrutura-de-pastas-do-cms).

Se uma pasta contém outras pastas, antes de apagá-la é necessário apagar todas as pastas internas. Caso contrário, o sistema retornará o erro "Object reference not set to an instance of an object", como na imagem abaixo.

![erroDeletarPasta](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/storefront/layout/apagar-uma-pasta-do-cms_2.png)

Por exemplo, se você deseja deletar a pasta A, e dentro dela ficam as pastas A1 e A2, primeiro apague as pastas A1 e A2, e somente depois apague a pasta A.
