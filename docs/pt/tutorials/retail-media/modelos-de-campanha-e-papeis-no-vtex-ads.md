---
title: 'Modelos de campanha e papéis no VTEX Ads'
createdAt: 2026-10-09T00:00:00.000Z
updatedAt: 2026-10-09T00:00:00.000Z
contentType: tutorial
productTeam: Others
slugEN: vtex-ads-campaign-models-and-roles
locale: pt
---

As campanhas do **[VTEX Ads](/pt/docs/tracks/retail-media)** se diferenciam não só pelo tipo de anúncio, como **produtos patrocinados**, **banners** e **marcas patrocinadas**, mas também por quem participa delas. O tipo de anúncio define o formato exibido ao usuário e está descrito no artigo [Retail Media](/pt/docs/tracks/retail-media). O modelo de campanha define a relação entre as partes envolvidas: quem cria e financia a campanha, de quem é o inventário que exibe o anúncio, quem aprova os criativos, quem recebe o tráfego e quem acompanha quais métricas.

Este artigo apresenta os três modelos de campanha do **VTEX Ads** (campanha 1:1, campanha Network e campanha offsite), define os papéis específicos de cada modelo e reúne, em uma matriz, o que cada parte faz em cada um deles.

## Papéis base

Os papéis de anunciante, publisher e agência de marketing são comuns a todas as campanhas do **VTEX Ads** e estão descritos em [Papéis e atribuições em Retail Media](/pt/docs/tracks/papeis-e-atribuicoes-em-retail-media). Em qualquer modelo de campanha, a agência de marketing atua em nome do anunciante ou do publisher e não tem um papel próprio.

Os modelos Network e offsite acrescentam papéis que não existem na campanha 1:1:

- **Rede:** conta publisher do **VTEX Ads** que reúne vários publishers. Uma campanha veiculada em uma rede é uma campanha Network.
- **Sub-publisher:** publisher que faz parte de uma rede. Em uma campanha Network, o anúncio é exibido nas lojas dos sub-publishers.
- **Publisher de mídia:** parte que exibe o anúncio de uma campanha offsite fora da loja que recebe o tráfego. Também é chamado de Publisher Offsite. No **VTEX Ads**, esse lado da campanha aparece para o cliente como **Offsite VTEX Ads**.
- **Varejo de destino:** loja que recebe o tráfego de uma campanha offsite e onde a compra acontece. É uma conta publisher do **VTEX Ads** que aceitou participar de campanhas offsite na tela **Varejo de destino**. Consulte [Varejo de destino](/pt/docs/tutorials/varejo-de-destino).

## Campanha 1:1

A campanha 1:1 reúne um anunciante e um publisher. O anunciante cria a campanha na própria conta, financia a veiculação e define a URL de destino dos anúncios. O publisher aprova os criativos e exibe os anúncios no próprio inventário, como o site, o app ou a loja física.

Como o anúncio é exibido na loja do publisher, é essa loja que recebe o tráfego e registra a conversão. Cada parte acompanha o seu lado dos resultados: o anunciante vê o desempenho e o custo da campanha, e o publisher vê a receita gerada pelos anúncios exibidos na sua loja. Consulte [Métricas e atribuição do VTEX Ads](/pt/docs/tutorials/metricas-e-atribuicao-do-vtex-ads).

## Campanha Network

A campanha Network reúne um anunciante, uma rede e os sub-publishers que fazem parte dela. O anunciante cria a campanha na própria conta e financia a veiculação, como na campanha 1:1. A diferença está no lado do publisher: em vez de um único inventário, o anúncio pode ser exibido nas lojas de vários sub-publishers.

Por padrão, a campanha Network veicula em toda a rede. A rede pode habilitar a seleção de sub-publishers específicos. Nesse caso, o anunciante seleciona os sub-publishers ao criar a campanha, e o anúncio é exibido somente nas lojas selecionadas.

A rede aprova os criativos da campanha Network. Depois da aprovação, os anúncios são exibidos nas lojas dos sub-publishers incluídos na campanha, e cada uma dessas lojas recebe o tráfego e registra as conversões dos anúncios exibidos nela.

<!-- TODO (equipe de docs): reconfirmar com a equipe do VTEX Ads o estado atual da aprovação em campanhas Network (quem aprova os criativos e quem define a URL de destino) antes de publicar (Q7b). -->

## Campanha offsite

A campanha offsite reúne um anunciante, um publisher de mídia e um varejo de destino. O anúncio é exibido fora da loja que recebe o tráfego, no canal do publisher de mídia, e o clique leva o usuário até o varejo de destino, onde a compra acontece.

Nesse modelo, a equipe do **VTEX Ads** cria a campanha na conta do anunciante, define o publisher de mídia e o varejo de destino e aprova a campanha. O anunciante financia a campanha, mas não a cria nem a aprova. O publisher de mídia e o varejo de destino também não aprovam.

Cada parte acompanha um recorte diferente dos resultados. O anunciante vê as métricas de entrega e de conversão agregadas por campanha, sem detalhe de qual publisher de mídia exibiu o anúncio. O varejo de destino vê quais anunciantes enviam tráfego para a loja e quantas campanhas ativas cada um tem, sem métricas de desempenho. Para entender a jornada do clique até o pedido atribuído e o que cada parte precisa garantir, consulte [Campanhas offsite no VTEX Ads](/pt/docs/tutorials/campanhas-offsite-no-vtex-ads).

## Matriz de papéis por modelo de campanha

A tabela a seguir resume quem é responsável por cada etapa em cada modelo de campanha:

| Responsabilidade | Campanha 1:1 | Campanha Network | Campanha offsite |
| :---- | :---- | :---- | :---- |
| Criar a campanha | Anunciante | Anunciante | Equipe do **VTEX Ads**, na conta do anunciante |
| Financiar a campanha | Anunciante | Anunciante | Anunciante |
| Definir onde a mídia é exibida | Publisher, no próprio inventário | Rede, em toda a rede por padrão. Quando a rede habilita a seleção de sub-publishers, o anunciante seleciona sub-publishers específicos | Equipe do **VTEX Ads**, ao definir o publisher de mídia da campanha |
| Aprovar criativos | Publisher | Rede | Equipe do **VTEX Ads** |
| Definir a URL de destino | Anunciante | Anunciante | Equipe do **VTEX Ads**, ao definir o varejo de destino da campanha |
| Receber o tráfego | Loja do publisher | Loja do sub-publisher em que o anúncio foi exibido | Varejo de destino |
| Registrar a conversão | Loja do publisher | Loja do sub-publisher em que o anúncio foi exibido | Varejo de destino, por meio do script web ou do SDK mobile instalado |
| Acompanhar métricas | Anunciante e publisher, cada um com a visão do seu lado | Anunciante e rede, cada um com a visão do seu lado | Anunciante, com métricas agregadas por campanha. Varejo de destino, com a lista de anunciantes e de campanhas ativas |

<!-- TODO (equipe de docs): antes de publicar, confirmar com a equipe do VTEX Ads (1) o que o publisher de mídia vê dentro da plataforma em campanhas offsite (Q5b) e (2) o estado atual da aprovação em campanhas Network, refletido nas células "Aprovar criativos" e "Definir a URL de destino" da coluna Network (Q7b). -->

## Saiba mais

- [Campanhas offsite no VTEX Ads](/pt/docs/tutorials/campanhas-offsite-no-vtex-ads)
- [Varejo de destino](/pt/docs/tutorials/varejo-de-destino)
- [Papéis e atribuições em Retail Media](/pt/docs/tracks/papeis-e-atribuicoes-em-retail-media)
- [Glossário de Retail Media](/pt/docs/tracks/glossario-de-retail-media)
- [Métricas e atribuição do VTEX Ads](/pt/docs/tutorials/metricas-e-atribuicao-do-vtex-ads)
- [Retail Media](/pt/docs/tracks/retail-media)
