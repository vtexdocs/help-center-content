---
title: Meu site está lento. O que fazer?
id: KdXFFAzwoCewqaSOmsigK
status: PUBLISHED
createdAt: 2018-02-06T13:14:40.270Z
updatedAt: 2019-12-31T14:24:30.944Z
publishedAt: 2019-12-31T14:24:30.944Z
firstPublishedAt: 2018-02-06T14:28:36.372Z
contentType: frequentlyAskedQuestion
productTeam: Others
author: authors_24
slug: meu-site-esta-lento
legacySlug: meu-site-esta-lento
---

A performance do site deve ser uma preocupação central para todo lojista, já que uma navegação lenta diminui a conversão da loja e sua relevância em mecanismos de busca como o Google.

Há uma série de motivos que podem causar lentidão do site. Neste artigo, vamos listar alguns deles.

Se você acredita que sua loja está lenta, verifique cada um dos cenários abaixo.

- [Arquivos externos](#arquivos-externos)
- [Requisições síncronas](#requisicoes-sincronas)
- [Imagens pesadas demais](#imagens-pesadas-demais)
- [Tags de marketing, scripts e extensões](#tags-de-marketing-scripts-e-extensoes)
- [Poucas páginas cacheadas](#poucas-paginas-cacheadas)

### Arquivos externos

Se as páginas da sua loja dependem de arquivos externos para serem carregadas, você pode ficar refém do tempo de resposta dos servidores que entregam esses arquivos.

O ideal é que __todos os arquivos usados por seu site estejam armazenados na VTEX__. É o caso, por exemplo, de imagens, vídeos, scripts, funções e selos de propaganda.

### Requisições síncronas

Serviços externos que modificam as páginas da loja podem interromper o carregamento completo até que sejam executados.

Exemplo: se sua loja faz um request para o script de um parceiro de mídia diretamente pelo módulo CMS, sem que o código seja assíncrono ("async"), a página somente será carregada depois que esse script seja executado.

Em alguns casos essa espera é necessária. Mas em outros não. Imagine, por exemplo,  uma caixa de chat de atendimento. Você não precisa interromper o carregamento da página até que ela seja executada.

### Imagens pesadas demais

Quando uma imagem tem tamanho maior do que o usado para exibição no site, o navegador do usuário baixa a imagem completa para depois reduzi-la na exibição.

Com isso, a página demora mais para ser carregada do que precisaria.

Imagens com tamanho maior que o necessário são causa frequente de lentidão.

Entenda este assunto a fundo no artigo [Melhorar a performance de imagens de produtos](/pt/tutorial/melhorando-a-performance-de-imagens-do-site).

### Tags de marketing, scripts e extensões

É fundamental que você tenha segurança de que todas as extensões da sua loja estão ali por um motivo válido.

Caso contrário, pode ser que um serviço de terceiros esteja tomando tempo de carregamento sem necessidade.

Caso você note a presença de tags duplicadas ou que executem funções iguais ou parecidas, cogite o bloqueio ou a retirada dessas requisições por meio do Google Tag Manager ou qualquer outro gerenciador de tags.

### Poucas páginas cacheadas

Se sua loja foi implementada há pouco tempo e ainda tem __poucas visitas__, várias páginas deixam de ser cacheadas.

Quando um usuário abre uma página não cacheada, ela é carregada "do zero". Portanto, o tempo de carregamento dessa página torna-se maior.

Este é um comportamento esperado para sites com poucas visitas, mas que tende a ser eliminado com o aumento do tráfego no site.

