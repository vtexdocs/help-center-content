---
title: 'Corrigir falhas na integração do Indeva com sistemas de vendas'
id: 53ga7DATVMpOYpSLFJRPwW
status: PUBLISHED
createdAt: 2025-09-17T17:20:43.672Z
updatedAt: 2025-10-17T11:39:09.669Z
publishedAt: 2025-10-17T11:39:09.669Z
firstPublishedAt: 2025-09-17T17:29:41.905Z
contentType: tutorial
productTeam: Others
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: fix-integration-failures-with-sales-systems-indeva
legacySlug: corrigir-falhas-na-integracao-com-sistemas-de-vendas-indeva
locale: pt
subcategoryId: 2TvvbKyvcItxWiM018erXt
---

Este conteúdo se aplica às integrações da Indeva com os seguintes sistemas: **Linxpos**, **Alterdata**, **Cigam**, **Interfacenet**, **Falcon** e **PDVNet**.

A integração com esses sistemas é realizada diretamente no **servidor da loja** por meio do programa **Integrador Indeva**, que consulta as vendas no banco de dados e envia as informações para a plataforma web.

Duas situações comuns podem causar falhas na integração:

## Manter o Integrador aberto em segundo plano

O **Integrador Indeva** precisa permanecer aberto em segundo plano para que a integração funcione corretamente. É possível que alguém o tenha fechado sem perceber.

Verifique se o ícone da Indeva aparece na bandeja do sistema (seta no canto inferior direito da tela). Caso o ícone não esteja visível:

- Abra o menu **Iniciar** e pesquise por **Integrador Indeva**.  
- Se o programa aparecer, abra-o e clique em **Esconder Integrador**.  
- Mesmo após reiniciar o computador, o integrador continuará ativo até ser fechado manualmente.

## Restaurar o Integrador colocado em quarentena pelo antivírus

Se o **Integrador Indeva** não estiver no computador, verifique a área de **quarentena do antivírus**.

O Integrador é seguro, mas como não é homologado pelo Windows, alguns antivírus o classificam como suspeito. É comum que o arquivo `IDP.generic`, componente do Integrador, seja movido para a quarentena.

Para resolver:

- Restaure o arquivo da quarentena e configure uma exceção no antivírus.  
- Em seguida, abra o **Integrador Indeva** pelo menu **Iniciar** e clique em **Esconder Integrador** para mantê-lo em execução.

