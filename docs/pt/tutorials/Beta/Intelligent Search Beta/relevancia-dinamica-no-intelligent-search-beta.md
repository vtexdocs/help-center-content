---
title: 'Relevância dinâmica no Intelligent Search (Beta)'
id: rFaW7JPnBKNDBFzMxpBn8
status: PUBLISHED
createdAt: 2023-09-01T17:14:43.241Z
updatedAt: 2024-01-05T17:24:55.378Z
publishedAt: 2024-01-05T17:24:55.378Z
firstPublishedAt: 2023-09-01T18:59:54.853Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: dynamic-relevance-in-intelligent-search-beta
locale: pt
legacySlug: relevancia-dinamica-no-intelligent-search-beta
subcategoryId: 23WdCYqmn2V2Z7SDlc14DF
---

>ℹ️ Essa funcionalidade está na fase Beta fechado, o que significa que somente clientes selecionados têm acesso a ela no momento. Caso tenha interesse em implementá-la futuramente, entre em contato com [nosso Suporte](https://support.vtex.com/hc/pt-br/requests).
>
> Para os clientes selecionados, a funcionalidade está disponível para uso gratuito no Admin VTEX durante seu período Beta, ou até decidido pela VTEX. É possível que taxas extras se apliquem futuramente.

O Intelligent Search é uma solução de busca da plataforma VTEX. Ele apresenta resultados relevantes com base no catálogo desde a primeira interação do usuário com a loja, seja por meio da barra de busca, navegando pelas categorias, ou mesmo pelas vitrines de produtos. 

A relevância é a funcionalidade que define a ordem dos produtos no resultado de busca. Essa configuração permite que você atribua pesos e priorize determinados critérios, como popularidade, data de lançamento do produto e participação em promoções. O Intelligent Search determina a relevância de cada produto pela combinação dos pesos e prioridades definidos por cada lojista.

No Intelligent Search, existem duas formas de configurar a relevância da sua busca:

* [Manual](#manual)
* [Dinâmica](#dinamica)

Apenas uma delas é aplicada à sua loja por vez e você pode [alterar o tipo de relevância](#alterar-o-tipo-de-relevancia) configurado na sua loja. Caso você altere a relevância manual para dinâmica, todas as regras manuais já cadastradas continuam salvas.

>ℹ️ A relevância manual é configurada como padrão da loja.

## Manual 

A relevância manual é configurada pela distribuição dos pesos realizada na página de **Regras de relevância**. Para ativar a relevância manual, siga os passos a seguir:

1. No Admin VTEX, acesse **Storefront > Intelligent Search >** **Regras de relevância**  ou digite **Regras de relevância** na barra de busca no topo da página.
2. Selecione a opção **Relevância manual**.
![relevancia-manual-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Beta/Intelligent%20Search%20Beta/relevancia-dinamica-no-intelligent-search-beta_1.png)
3. Clique em `Salvar`.

Para configurar a relevância manual, confira o artigo [Relevância](https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/1qlObWIib6KqgrfX1FCOXS).

## Dinâmica

A relevância dinâmica é um recurso da VTEX que usa inteligência artificial para encontrar tendências no comportamento dos seus usuários. Com base na consulta e na posição do resultado em que eles clicam ou realizam um pedido. Ela pode melhorar os resultados de busca aumentando a relevância dos produtos que estão crescendo em popularidade. 

Por exemplo, em uma página de novidades, a relevância dinâmica pode identificar que produtos mais recentes aumentam a conversão sem a necessidade de que o lojista configure.

Ela também pode reposicionar os resultados que não são relevantes para seus usuários no contexto de uma busca específica.

Para ativar a relevância dinâmica, siga os seguintes passos:

1. No Admin VTEX, acesse **Storefront > Intelligent Search > Regras de relevância**  ou digite **Regras de relevância** na barra de busca no topo da página.
2. Leia as informações sobre a Relevância Dinâmicas e clique em `Próximo`.
3. Selecione a opção **Relevância Dinâmica**.
![relevancia-dinamica-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Beta/Intelligent%20Search%20Beta/relevancia-dinamica-no-intelligent-search-beta_2.png)
4. Clique em `Salvar`.
5. Aguarde a barra de carregamento atingir 100%. Esse processo pode demorar algumas horas. Você receberá um email notificando que o carregamento foi finalizado.
6. Clique em `Ativar`.

## Alterar o tipo de relevância

Para alterar o tipo de relevância, siga os passos abaixo:

>⚠️ Não recomendamos a troca constante do tipo de relevância utilizado pela sua loja. O sistema precisa de uma semana para se estabelecer.

1. No Admin VTEX, acesse **Storefront > Intelligent Search > Regras de relevância**  ou digite **Regras de relevância** na barra de busca no topo da página.
2. Clique em `Alterar` .
3. Escolha o tipo de relevância que deseja aplicar.
4. Clique em `Salvar`.
