---
title: 'Conheça o novo sistema de tradução do VTEX IO'
id: CLDXiPt21R0R4lklbksqF
status: ARCHIVED
createdAt: 2019-02-18T21:18:44.129Z
updatedAt: 2020-03-13T21:24:39.126Z
publishedAt: 
contentType: updates
productTeam: VTEX IO
author: TnXcuQydAAOuwWACo864E
slug: conheca-o-novo-sistema-de-traducao-do-vtex-io
locale: pt
legacySlug: conheca-o-novo-sistema-de-traducao-do-vtex-io
announcementImageID: ''
announcementSynopsisPT: 'O novo Messages App (e mudanças no MessagesBuilder) facilitam e ampliam a tradução de apps front e back-end.'
---

Estamos lançando o novo __Messages App__ ao mesmo tempo que implementamos mudanças significativas no `MessagesBuilder`. As novas funcionalidades atendem às necessidades de desenvolvedores interessados em um sistema de tradução mais completo, capaz de adicionar suporte a várias línguas (seja em aplicações front-end ou respostas de apps back-end).


## Como era antes
Desenvolver apps em várias línguas sempre foi considerado um processo demorado, especialmente com apps back-end. Enquanto aplicações front-end podem ser traduzidas com bibliotecas de internacionalização (como `react-intl`), apps back-end ainda exigem que cada string seja traduzida em um JSON dentro da pasta `/messages`.

Além disso, é comum que o suporte a línguas seja limitado ao conhecimento do desenvolvedor: ou seja, raramente vai além de inglês, português, espanhol e sua língua materna (caso não seja nenhuma dessas).


## O que mudou
O __Messages App__ é responsável pela tradução das strings de toda a plataforma do IO. Primeiro, ele vai tentar traduzir o conteúdo a partir das traduções definidas pelo usuário. Depois, vai buscar as traduções do próprio app (definidas na pasta `/messages`). Por último, ainda pode realizar um fallback para nosso sistema automático de tradução.


## Principais vantagens do novo Messages App
- Permite tanto traduções do desenvolvedor (humanas) quanto automáticas (máquina) para todas as strings na plataforma do VTEX IO.
- Suporte a todas as línguas disponíveis na web.
- Libera você para focar nas strings mais críticas, enquanto o sistema automático cuida do restante.
- Entrada facilitada em mercados estrangeiros.
- Ciclos de desenvolvimento mais rápidos, possibilitados pela tradução automática.


Adicione o __Messages App__ à sua aplicação no VTEX IO usando [este artigo do Help](/pt/tutorial/como-usar-o-messages-em-apps-do-vtex-io).
