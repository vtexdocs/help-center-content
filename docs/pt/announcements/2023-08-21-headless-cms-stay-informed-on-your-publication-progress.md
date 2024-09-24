---
title: 'Headless CMS: mantenha-se informado sobre o progresso das suas publicações'
id: 3ajb4FgE6nmqjblpSEg3SP
status: CHANGED
createdAt: 2023-08-21T12:33:36.149Z
updatedAt: 2023-10-04T13:35:38.902Z
publishedAt: 2023-08-21T15:36:01.683Z
contentType: updates
productTeam: VTEX IO
author: 4oTZzwYoyhy1tDBwLuemdG
slug: headless-cms-mantenha-se-informado-sobre-o-progresso-das-suas-publicacoes
locale: pt
legacySlug: headless-cms-mantenha-se-informado-sobre-o-progresso-das-suas-publicacoes
announcementImageID: ''
announcementSynopsisPT: ' Mantenha-se informado sobre as etapas de publicação do Headless CMS e identifique rapidamente erros de publicação.'
---

O Headless CMS agora conta com uma funcionalidade de notificação que mantém você informado durante cada etapa do processo de publicação. As novas notificações fornecem atualizações sobre cada estágio de uma publicação no VTEX Headless CMS, mantendo os usuários informados sobre os estágios de compilação (build) da publicação em Lançamentos, VTEX Headless CMS e FastStore. 

![Headless CMS - Notificações](//images.ctfassets.net/alneenqid6w5/3snUhFhKzrzE71wg5GJRws/faec3fe558ef0b94048f83cefd6a5106/headless-cms-publish-pt.gif)

Essa funcionalidade também permite identificar e relatar erros durante o deploy, indicando o estágio exato do erro. Além de oferecer a opção de refazer os deploys, se necessário.

## O que mudou?
Anteriormente, quando uma publicação não acontecia, era difícil determinar a origem do problema, o que dificultava o debugging e a notificação do problema, além de gerar atrasos no lançamento de campanhas.

Com esta funcionalidade, agora você pode acompanhar o status de cada estágio do deploy:

| Status                                	| Descrição 
| ------------------------------------- | ---------------------------------------------------------------------------- |
|  **Publicação iniciada**       	| CMS inicia a publicação do lançamento.             	|
|  **Build**                             	| Processo de colocar em produção as alterações do lançamento.        	                        |
|  **Atualizar o status dos documentos**  | Atualiza todos os documentos, incluindo as novas alterações. |
|  **Concluir lançamento**              	| Atualiza o status do lançamento.                                         	        |

Caso ocorra um erro durante a implementação, a notificação indicará o estágio em que se deu o erro. Você pode clicar em `Tentar novamente` para refazer o deploy.

![Headless CMS - Novo deploy](//images.ctfassets.net/alneenqid6w5/wxnKpmFM0GRlSAB7uboMK/b9ce5d741d88aa05661c2e592b9cf550/headless-cms-redeploy-pt.gif)

## Por que fizemos essa mudança?
A funcionalidade de notificação permite que você tenha maior autonomia para entender e resolver os problemas relacionados às publicações da loja, possibilitando identificá-los e relatá-los com precisão, além de repetir o processo de publicação.

## O que precisa ser feito?
Nenhuma ação é necessária, já que essa funcionalidade já foi implementada no Headless CMS.
