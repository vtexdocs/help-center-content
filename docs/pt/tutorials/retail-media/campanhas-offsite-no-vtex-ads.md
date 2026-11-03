---
title: 'Campanhas offsite no VTEX Ads'
createdAt: 2026-10-09T00:00:00.000Z
updatedAt: 2026-10-09T00:00:00.000Z
contentType: tutorial
productTeam: Others
slugEN: vtex-ads-offsite-campaigns
locale: pt
---

O **[VTEX Ads](/pt/docs/tracks/retail-media)** veicula campanhas dentro e fora dos canais do varejo. Em uma campanha onsite, o anúncio aparece nos canais da própria loja, como o site, o app ou a loja física. Em uma campanha offsite, o anúncio aparece fora da loja que recebe o tráfego, e o clique leva o usuário até ela. As definições gerais de [mídia onsite](/pt/docs/tracks/glossario-de-retail-media) e [mídia offsite](/pt/docs/tracks/glossario-de-retail-media) estão no **Glossário de Retail Media**.

Este artigo explica o que diferencia uma campanha offsite, quem participa dela, o caminho que o usuário percorre do clique no anúncio até o pedido atribuído à campanha e o que cada parte precisa garantir para que esse caminho funcione. Ele não descreve como criar uma campanha offsite, porque a criação é feita pela equipe do **VTEX Ads**, como explicado em [Como a campanha é criada](#como-a-campanha-e-criada).

## Como funciona a jornada

Uma campanha offsite envolve duas partes diferentes: o publisher de mídia, que exibe o anúncio, e o varejo de destino, que recebe o usuário e onde a compra acontece. Por isso, a atribuição da venda depende de o **VTEX Ads** reconhecer o usuário quando ele chega ao varejo de destino. A jornada segue estas etapas:

1. **Exibição:** o anúncio é exibido fora do varejo de destino, no canal do publisher de mídia.
2. **Clique:** o usuário clica no anúncio. O link de destino carrega os parâmetros do **VTEX Ads** que identificam a campanha e o clique.
3. **Chegada:** o usuário chega ao varejo de destino, no site ou no app. O script web ou o SDK mobile instalado pelo varejo registra essa chegada e envia o sinal ao **VTEX Ads**.
4. **Associação:** o **VTEX Ads** associa o acesso registrado ao clique no anúncio.
5. **Atribuição:** se o usuário fizer um pedido dentro da janela de atribuição do formato, a conversão é atribuída à campanha offsite.

> ℹ️ A janela de atribuição aplicada à conversão é a do tipo de anúncio veiculado, como nas demais campanhas do **VTEX Ads**. Consulte [Métricas e atribuição do VTEX Ads](/pt/docs/tutorials/metricas-e-atribuicao-do-vtex-ads).

Em jornadas que terminam no app do varejo de destino, não existe um clique dentro do app. O link do anúncio abre o app com os parâmetros da campanha, e o SDK mobile registra essa abertura como o clique offsite. A compra concluída no app fecha a conversão.

## Quem participa

Uma campanha offsite reúne três partes, cada uma com um papel distinto:

- **Anunciante:** marca ou empresa que financia a campanha e cujos produtos são anunciados. O anunciante não cria nem aprova a campanha offsite. Consulte [Como a campanha é criada](#como-a-campanha-e-criada).
- **Publisher de mídia:** parte que exibe o anúncio fora do varejo de destino. Também é chamado de Publisher Offsite. Costuma ser um canal de mídia digital tradicional, mas pode ser também um parceiro de outro tipo que exiba o anúncio. No **VTEX Ads**, esse lado da campanha aparece para o cliente como **Offsite VTEX Ads**.
- **Varejo de destino:** loja que recebe o tráfego do anúncio e onde a compra acontece. É uma conta publisher do **VTEX Ads** que aceitou participar de campanhas offsite na tela **Varejo de destino** e instalou a coleta de dados nas superfícies que recebem o tráfego. Consulte [Varejo de destino](/pt/docs/tutorials/varejo-de-destino).

> ℹ️ Para entender os papéis de anunciante, publisher e agência de marketing em Retail Media, consulte [Papéis e atribuições em Retail Media](/pt/docs/tracks/papeis-e-atribuicoes-em-retail-media).

## O que cada parte precisa garantir

A atribuição de uma venda à campanha offsite só acontece quando todas as pré-condições a seguir são atendidas. Cada uma depende de uma parte diferente:

| Pré-condição | Responsável | Onde saber mais |
| :---- | :---- | :---- |
| O anúncio é veiculado com os parâmetros do **VTEX Ads** preservados, e o link de destino não é encurtado nem alterado. | Publisher de mídia | - |
| A loja está disponível como destino de campanhas offsite, com o toggle `Disponível para novas campanhas` ativo na tela **Varejo de destino**. | Varejo de destino | [Varejo de destino](/pt/docs/tutorials/varejo-de-destino) |
| O script web está instalado na vitrine, o SDK mobile está instalado no app, ou ambos, e a página ou o app de destino carrega para o usuário. | Equipe do varejo de destino | [Installing the offsite capture web script](https://developers.vtex.com/docs/guides/installing-the-offsite-capture-web-script) e [Installing Activity Flow in mobile apps](https://developers.vtex.com/docs/guides/installing-activity-flow-in-mobile-apps) |
| A campanha está configurada com o varejo de destino correto. | Equipe do **VTEX Ads** | - |

> ⚠️ Participar como destino e ter a coleta de dados funcionando são estados independentes. Ativar a participação na tela **Varejo de destino** não instala nem valida a coleta. Se o script web ou o SDK mobile não estiver implementado, o **VTEX Ads** não registra a chegada do usuário e a venda não é atribuída à campanha.

## Como a campanha é criada

Hoje, a equipe do **VTEX Ads** cria a campanha offsite na conta do anunciante, define o publisher de mídia e o varejo de destino e aprova a campanha. O anunciante não cria a campanha nem passa por uma etapa de aprovação, e o varejo de destino também não aprova. Como a criação não está disponível em autoatendimento, este artigo não descreve esse procedimento. Para solicitar uma campanha offsite, o anunciante entra em contato com a equipe do **VTEX Ads**.

## Onde os resultados aparecem

Cada parte vê uma parcela diferente dos resultados de uma campanha offsite:

- **Anunciante:** acompanha as métricas de entrega e de conversão no relatório de campanha do **VTEX Ads**, agregadas por campanha. O relatório não detalha qual publisher de mídia veiculou o anúncio.
- **Varejo de destino:** vê, na tela **Varejo de destino**, quais anunciantes estão enviando tráfego de campanhas offsite para a loja e quantas campanhas ativas cada um tem. A tela não exibe métricas de desempenho dessas campanhas.

<!-- TODO: confirmar com a equipe do VTEX Ads o que o publisher de mídia vê dentro da plataforma (Q5b) antes de publicar. -->

## Saiba mais

- [Varejo de destino](/pt/docs/tutorials/varejo-de-destino)
- [Modelos de campanha e papéis no VTEX Ads](/pt/docs/tutorials/modelos-de-campanha-e-papeis-no-vtex-ads)
- [Papéis e atribuições em Retail Media](/pt/docs/tracks/papeis-e-atribuicoes-em-retail-media)
- [Métricas e atribuição do VTEX Ads](/pt/docs/tutorials/metricas-e-atribuicao-do-vtex-ads)
- [Installing the offsite capture web script](https://developers.vtex.com/docs/guides/installing-the-offsite-capture-web-script)
- [Understanding ads events](https://developers.vtex.com/docs/guides/understanding-ads-events)
