---
title: 'Página inicial do Admin apresenta erro na seção “Como melhorar” do Catálogo'
id: 4f8oPMiiCvBMtjFUoOVIGv
status: CHANGED
createdAt: 2021-09-29T14:02:37.809Z
updatedAt: 2022-12-09T18:27:53.061Z
publishedAt: 2021-09-29T14:12:10.806Z
firstPublishedAt: 2021-09-29T14:12:10.806Z
contentType: knownIssue
productTeam: Catalog
author: 0QBQws7rk0t5Mnu8fgfUv
tag: Catalog
slugEN: admin-homepage-has-an-error-in-how-to-improve-section-of-the-catalog
locale: pt
kiStatus: Fixed
internalReference: 
---

## Sumário

A página inicial do Admin da VTEX contém uma seção chamada *Como melhorar*, que indica os problemas identificados na loja, e o link para que o usuário seja redirecionado ao módulo com problema. 

Quando são identificados problemas relacionados ao Catálogo, usuários são redirecionados para o Inventário, diretamente para os produtos populares que ficaram sem estoque. 

Porém, foi observado que, quando a seção Catálogo indicava `1` problema encontrado, os usuários eram redirecionados para o Catálogo de forma genérica, sem que o produto com falta de estoque fosse identificado.  

Isso ocorria porque o número `1` tinha sido configurado como padrão, mesmo quando não havia de fato um problema com seu estoque. 


## Simulação

Acesse seu **Admin VTEX > Início > Como melhorar > Catálogo**. Se a seção indicar que há `1` problema encontrado, ao clicar em `Produtos populares sem estoque`, você será redirecionado para a página do Catálogo.

![Como melhorar PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

## Workaround

Não é necessário que o usuário realize nenhuma ação, pois já corrigimos o problema. Adicionamos a seguinte mensagem na seção *Como melhorar*, quando não houver problemas identificados: 

`Não encontramos problemas no seu catálogo.`

![Como melhorar fixed PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.png)

