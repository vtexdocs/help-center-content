---
title: 'Como usar o VTEX Predictor Bot'
id: 5meZHatpMQskKgoAAeyOkW
status: ARCHIVED
createdAt: 2017-09-19T14:56:16.378Z
updatedAt: 2020-07-22T16:03:52.128Z
publishedAt: 
firstPublishedAt: 2017-09-19T15:02:56.612Z
contentType: tutorial
productTeam: Others
author: authors_35
slugEN: how-to-use-vtex-predictor-bot
locale: pt
legacySlug: como-usar-o-vtex-predictor-bot
subcategoryId: 5zTyefbWFicMY2awMyU2SM
---

O VTEX Predictor Bot é um aplicativo __gratuito__ projetado por uma equipe de desenvolvedores da VTEX em um esforço para transformar dados brutos em insights que possibilitem aos gerentes da loja aumentarem o desempenho em tempo real (😱).

Por enquanto __sua loja deve ter uma média de pelo menos 1 venda por hora__ para poder usar este bot. Estamos ajustando os parâmetros para incluir todas as lojas VTEX.

_Demonstramos a versão beta no VTEX Day 2017. Se você perdeu, assista ao [vídeo](https://www.youtube.com/watch?v=axwfAHC99Zw "VTEX Predictor Bot no VTEX Day 2017") ._

Usando a análise de séries temporais de seus dados para detectar anomalias, o algoritmo cria diferentes clusters. Estes podem ser separados em dias específicos da semana, depois períodos, feriados... em essência, o bot identifica qualquer tipo de sazonalidades, picos ou outros comportamentos que determinem ou mesmo fujam ao seu desempenho médio.

Ao combinar dados de diferentes fontes, ele é capaz de prever como suas vendas deveriam estar a cada momento.

## Como o Predictor Bot funciona

Começamos por uma ideia geral de como está o desempenho da sua loja.
![sales data](https://images.contentful.com/alneenqid6w5/4LVuTVHevYw6eaykMwQY4M/8b9a06a17479a1595c05d879071ad320/sales_data.png)

Conforme ilustrado na imagem acima, cada loja típica tem um padrão - mesmo em uma base diária, ou por hora. Devemos identificar esse padrão para iniciar qualquer análise.

Mas nem tudo é flores. Muitas vezes vemos algo mais ou menos assim:
![crazy sales data](//images.contentful.com/alneenqid6w5/K7vwyviY4S6Q4CwSOSsaW/a644e1f182e82da152d69c661f3f44b7/crazy_sales_data.png)

Neste caso, devemos remover discrepâncias e comparar novos conjuntos de dados contra outros períodos. Continuamos iterando assim até que nosso algoritmo saiba que temos um conjunto seguro de dados. Nesse ponto, podemos analisar e __identificar os eventos que fogem ao padrão__.

Ao final, nosso gráfico previsto é algo como a curva abaixo. A linha azul é o resultado do nosso modelo. Esta curva está contida dentro de um intervalo de confiança (área azul).

![unnamed](//images.contentful.com/alneenqid6w5/4dyeHM6ycoSGs0kgMUSQqo/56ff4ea1a3478dfea3fc8c4d9860280c/unnamed.png)

Sempre que encontramos algo, nós lhe informamos! Se o seu desempenho atual se afastar do nosso modelo mas estiver dentro dos intervalos, enviamos apenas um __ALERTA__. Se for além, você recebe um aviso __CRÍTICO__.

## O que Predictor Bot faz

Podemos mandar três tipos de e-mails. Aqui está um exemplo:

![Vtex Predictor Bot template](//images.contentful.com/alneenqid6w5/1Ft1I0ibI4g86okS4IYKy0/293929eb488252dabe8cdadee29c86e7/Vtex_Predictor_Bot_template.png)

Como você pode ver, este é um exemplo de notificação enviada quando a anomalia não existe mais e as vendas da sua loja voltaram ao normal.

O status __CRÍTICO__ vem quando as vendas caíram demais.
O status __ALERTA__ indica um soluço, mas que ainda vale ser mencionado.

## Como instalar o Predictor Bot

A instalação é bastante simples.

1. Acesse a VTEX App Store por meio da URL `https://www.apps.vtex.com`.
2. Procure o aplicativo __VTEX Predictor Bot__.
3. Pressione o botão __Obter__.
4. Instale a app.

E pronto.

Com o aplicativo instalado, começaremos a monitorar sua conta. E sempre que uma anomalia for detectada, um e-mail será enviado ao usuário Master da loja.
_O e-mail do usuário Master está localizado na guia __Conta__ dentro do módulo __License Manager__.
