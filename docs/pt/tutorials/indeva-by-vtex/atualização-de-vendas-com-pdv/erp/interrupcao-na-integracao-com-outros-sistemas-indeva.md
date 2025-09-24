---
title: 'Interrupção na integração com outros sistemas'
id: 53ga7DATVMpOYpSLFJRPwW
status: PUBLISHED
createdAt: 2025-09-17T17:20:43.672Z
updatedAt: 2025-09-17T17:30:27.692Z
publishedAt: 2025-09-17T17:30:27.692Z
firstPublishedAt: 2025-09-17T17:29:41.905Z
contentType: tutorial
productTeam: Others
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: integration-interruption-with-other-systems-indeva
legacySlug: interrupcao-na-integracao-com-outros-sistemas-indeva
locale: pt
subcategoryId: 2TvvbKyvcItxWiM018erXt
---

Este conteúdo se aplica às integrações da Indeva com os seguintes sistemas: **Linxpos**, **Alterdata**, **Cigam**, **Interfacenet**, **Falcon** e **PDVNet**.  

A integração com esses sistemas é realizada **diretamente no servidor da loja** por meio do programa **Integrador Indeva**, que consulta as vendas no banco de dados e alimenta a plataforma web com os valores correspondentes.  

Duas situações comuns podem causar falhas nessa integração:  

## Integrador fechado em segundo plano

O Integrador precisa estar aberto em segundo plano para que a integração funcione corretamente. É possível que alguém o tenha fechado sem perceber.  

Verifique se o ícone da Indeva aparece na bandeja do sistema (seta no canto inferior direito da tela). Caso não esteja visível:  

- Abra o menu inicial e pesquise por **Integrador Indeva**.  
- Se o programa aparecer, abra-o e clique em **Esconder Integrador**.  
- Mesmo após reiniciar o computador, o integrador continuará ativo até ser fechado manualmente.  

## Integrador em quarentena pelo antivírus

Se o Integrador não estiver no computador, verifique a área de **quarentena do antivírus**.  

O Integrador Indeva é seguro, mas como não é homologado pelo Windows, alguns antivírus o classificam como suspeito. É comum que o arquivo `IDP.generic`, componente do Integrador, seja colocado em quarentena.  

Para resolver: 

- Restaure o arquivo da quarentena e configure uma exceção no antivírus.  
- Depois disso, abra o **Integrador Indeva** pelo menu inicial e clique em **Esconder Integrador** para mantê-lo em execução.  

