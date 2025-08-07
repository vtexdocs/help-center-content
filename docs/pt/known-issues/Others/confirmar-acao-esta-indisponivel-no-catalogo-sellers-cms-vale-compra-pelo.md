---
title: 'Confirmar Ação" está indisponível no Catálogo, Sellers, CMS, Vale-compra pelo Google Chrome'
id: 5UzVaWa63dPwPlbK3n2AH5
status: PUBLISHED
createdAt: 2021-07-27T22:29:39.402Z
updatedAt: 2022-12-14T22:44:54.580Z
publishedAt: 2022-12-14T22:44:54.580Z
firstPublishedAt: 2021-07-28T17:29:39.548Z
contentType: knownIssue
productTeam: Others
author: 0QBQws7rk0t5Mnu8fgfUv
tag: Catalog,Gift Card,Portal (CMS),Suggestions
slugEN: confirmar-acao-esta-indisponivel-no-catalogo-sellers-cms-vale-compra-pelo
locale: pt
kiStatus: Fixed
internalReference:  
---

## Sumário

A [atualização 92 do Google Chrome](https://chromestatus.com/feature/5148698084376576) removeu o suporte para as funções de Javascript `alert` e `confirm`    no iframe. Isso removerá a notificação de "confirme ação" no seu Admin VTEX nos módulos do Catálogo, Sellers, Vale-compra e CMS, o que faz com que algumas ações não possam ser realizadas. 


## Simulação

Os cards de "confirme ação" em Vale-compra, Sellers, CMS e Catálogo estão indisponíveis devido à atualização 92 do Google Chrome. Ações que usuários não poderão cumprir incluem por exemplo:

- __Vale-compra:__ usuários não conseguem cancelar vale-compra.
- __Catálogo:__ usuários não conseguem deletar imagens de SKU, excluir marcas, remover list types, excluir ou habilitar anexos, editar coleções XML, excluir condições comerciais e remover fornecedores. 
- __Sellers (somente as páginas de Gerenciamento e Vínculos de SKU):__ usuários não conseguem desativar sellers e remover vínculos de SKU.
- __CMS (configurações):__ usuários não conseguem excluir regiões geográficas na página de configurações do CMS.


## Workaround

Para evitar esse problema, usuários podem:

- Acessar o Admin VTEX por outro navegador, como Mozilla Firefox, Internet Explorer, Microsoft Edge, ou Apple Safari.    
- Adicionar a seguinte flag no seu atalho do Google Chrome:  

`--disable-features="SuppressDifferentOriginSubframeJSDialogs"`   

Confira a [documentação do Google Chrome](https://support.google.com/chrome/a/answer/6271282?hl=en#zippy=%2Cwindows) para saber como.    


