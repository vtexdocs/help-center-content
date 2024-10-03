---
title: 'O que é um Builder do VTEX IO?'
id: 5ZqqfbmAuIaKcwaaA2eWoM
status: ARCHIVED
createdAt: 2018-12-06T12:41:20.098Z
updatedAt: 2020-03-13T21:25:28.345Z
publishedAt: 
firstPublishedAt: 2018-12-06T12:53:56.939Z
contentType: frequentlyAskedQuestion
productTeam: VTEX IO
author: 4tz85APeKIwMEk6amWS0ou
slugEN: what-is-a-vtex-io-builder
locale: pt
legacySlug: o-que-e-um-builder-do-vtex-io
---


O **VTEX IO** é um ambiente de desenvolvimento serverless que permite criar facilmente aplicativos Web prontos para produção e de alta qualidade.

Uma de suas principais características é a capacidade de definir **builders**, que são apps responsáveis por transformar o código e as configurações de outras apps. Por exemplo, o builder **react** transforma o código-fonte dos componentes React do TypeScript em pacotes compilados, prontos para serem importados para aplicativos Render.

## De zero a um

Começamos com alguns builders básicos que davam acesso total a abstrações de nível muito baixo na plataforma, incluindo a execução de serviços node do lado do servidor e a montagem de componentes React em paths arbitrários.

Com a evolução da plataforma, percebemos que é importante que os builders:

- Tenham responsabilidades mínimas e muito bem definidas, em vez de criarem múltiplos efeitos colaterais não relacionados;
- Sejam abstratos e opinativos, ao contrário de serem de baixo nível e fazerem o usuário lidar com escolhas difíceis;
- Permitam um controle de permissão refinado, em vez de estarem disponíveis universalmente para todas as contas e todos os usuários.

Como resultado, atualmente estamos trabalhando em vários novos builders que simplificarão drasticamente o desenvolvimento de apps, tornando cada parte das responsabilidades de uma app clara e destacada.

Ao dividir as responsabilidades em builders menores, poderemos desenvolvê-las separadamente - com mais rapidez e menos alterações drásticas.
