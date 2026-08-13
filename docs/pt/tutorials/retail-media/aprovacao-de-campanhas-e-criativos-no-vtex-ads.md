---
title: 'Aprovação de campanhas e criativos no VTEX Ads'
createdAt: 2026-08-13T00:00:00.000Z
updatedAt: 2026-08-13T00:00:00.000Z
contentType: tutorial
productTeam: Others
slugEN: vtex-ads-campaign-and-creative-approval
locale: pt
---

Antes de ser veiculada no site de um publicador, toda campanha do VTEX Ads passa por uma etapa de aprovação. O anunciante envia a campanha ou um novo criativo para revisão, e o publicador aprova ou rejeita a partir do seu próprio dashboard antes que o anúncio seja exibido em seu inventário.

Este artigo descreve como funciona esse fluxo nos dois tipos de campanha:

- **Campanhas 1:1:** um anunciante envia campanhas para a revisão de um único publicador.
- **Campanhas Network:** um anunciante alcança vários publicadores ao mesmo tempo, e cada um deles revisa, de forma independente, os criativos elegíveis para o próprio inventário.

> ℹ️ Para a definição dos papéis de anunciante e publicador citados neste artigo, consulte [Papéis e atribuições em Retail Media](/pt/docs/tracks/papeis-e-atribuicoes-em-retail-media).

## Formatos cobertos

A aprovação se aplica às campanhas de banner e de marcas patrocinadas (Sponsored Brands).

## Como funciona o fluxo

O fluxo tem duas etapas, cada uma conduzida por um papel diferente:

1. O anunciante cria a campanha ou adiciona um novo criativo e confirma o envio para aprovação do publicador.
2. O publicador acessa o dashboard de Retail Media, revisa o conteúdo enviado e aprova ou rejeita. Veja o passo a passo em [Como revisar e aprovar campanhas e criativos no VTEX Ads](/pt/docs/tutorials/como-revisar-e-aprovar-campanhas-e-criativos-no-vtex-ads).

Nenhum criativo é veiculado no inventário do publicador antes de ser aprovado.

## Níveis de aprovação

A aprovação pode acontecer em dois níveis:

- **Campanha inteira:** aprova ou rejeita de uma vez todos os criativos da campanha.
- **Criativo individual:** aprova ou rejeita um anúncio específico dentro da campanha, sem afetar os demais.

## Especificidades de campanhas Network

Para o publicador, a aprovação de uma campanha Network acontece na mesma tela do fluxo 1:1, e a mecânica de revisão, aprovação e rejeição não muda. Por isso, não é preciso saber se a campanha é Network ou 1:1 para revisá-la.

O que muda são o alcance da aprovação, o conjunto de criativos exibido a cada publicador e o preenchimento da URL de destino, como descrito a seguir.

> ℹ️ Para saber se a aprovação de criativos em campanhas Network já está ativa na sua rede, ou para solicitar ativação, entre em contato com o [Suporte VTEX](https://help.vtex.com/support).

### URL de destino

No momento da aprovação, o próprio publicador informa a URL de destino dos criativos de banner, ou seja, a página para onde o cliente é levado ao clicar no anúncio veiculado na loja do publicador. O preenchimento é obrigatório e o campo aceita apenas endereços iniciados por `http://` ou `https://`. O botão `Aprovar` permanece indisponível até que todas as URLs exigidas estejam preenchidas corretamente.

A URL informada por um publicador vale somente para os anúncios veiculados no inventário dele e não fica visível para os demais publicadores da rede. Se o anunciante enviar a mesma campanha novamente para aprovação, o publicador pode informar uma URL diferente ao aprová-la.

### Aprovação independente por publicador

A aprovação ou a rejeição feita por um publicador da rede não depende dos demais publicadores nem os bloqueia. Assim que um publicador aprova, a campanha passa a ser veiculada no inventário dele, mesmo que os demais ainda não tenham revisado o conteúdo.

Por isso, uma mesma campanha Network pode estar ativa para parte da rede e pendente de aprovação para o restante.

### Criativos filtrados pelo inventário

Cada publicador vê apenas os tamanhos de banner e as variações de marcas patrocinadas (Sponsored Brands) cadastrados no próprio inventário. Um publicador nunca é solicitado a aprovar um formato que não pode veicular, mesmo que a campanha inclua outros formatos para outros publicadores da rede.

Como o filtro é aplicado individualmente, a mesma campanha pode apresentar conjuntos diferentes de criativos a publicadores diferentes.

### Dados financeiros ocultos para o publicador

O orçamento total da campanha, o custo por clique (CPC) e o custo por mil impressões (CPM) não aparecem para o publicador em nenhuma tela de aprovação. O número de publicadores que participam da mesma campanha Network também não é exibido.

## Saiba mais

- [Como revisar e aprovar campanhas e criativos no VTEX Ads](/pt/docs/tutorials/como-revisar-e-aprovar-campanhas-e-criativos-no-vtex-ads)
- [Papéis e atribuições em Retail Media](/pt/docs/tracks/papeis-e-atribuicoes-em-retail-media)
