---
title: 'Ver detalhes da transação'
id: 3Nt40DMEWkvhlpaL5PlBy
status: PUBLISHED
createdAt: 2019-11-26T17:51:49.079Z
updatedAt: 2023-03-30T15:01:36.099Z
publishedAt: 2023-03-30T15:01:36.099Z
firstPublishedAt: 2019-11-26T20:29:18.064Z
contentType: trackArticle
productTeam: Financial
slugEN: viewing-transaction-details
locale: pt
trackId: 6GAS7ZzGAm7AGoEAwDbwJG
trackSlugEN: pagamentos
order: 7
---

Toda transação que acontece em uma loja VTEX fica registrada no módulo de **Pedidos**, e você pode consultar os detalhes de todas elas.

Para isso, faça o seguinte:

1. No Admin VTEX, acesse **Pedidos** > **Transações**, ou digite **Transações** na barra de busca no topo da página.

2. Você vai ver então a lista de transações, onde é possível fazer uma busca. Para filtrar, clique no ícone de funil. Você pode filtrar por:
- Canal
- Data de início da transação
- Data de autorização
- Data de finalização
- Data de cancelamento
- Meio de pagamento
- Número de parcelas
- Status da transação (exemplos: `cancelada`, `autorizando`, `aprovada` ou `finalizada`)

Ao encontrar a transação desejada, basta clicar nela.

Na tela da transação, há duas caixas contendo as principais informações referentes ao pagamento do pedido. Essas informações são atualizadas à medida que a transação avança em seu fluxo.

No lado direito da tela, há uma caixa contendo:
- O valor total do pedido
- Dados do cliente
- O ID do pedido
- O número de identificação de antifraude (caso exista na operação)

Na barra superior, encontra-se um link que direciona para a página de detalhes do pedido, no módulo de **Gerenciamento de Pedidos**.

Já na parte esquerda da tela, estão concentradas as informações relacionadas ao meio de pagamento usado no pedido.

Para tansações com cartão de crédito, cada pagamento (o pedido pode ter sido fechado com dois cartões) possui um ID gerado pela VTEX. Além disso, a adquirente também cria um número identificador, chamado __Transaction ID (TID)__. O TID é específico para cada cartão, ou seja, se um pedido é pago com dois cartões, haverá duas transações e, logo, dois TIDs.

Logo abaixo, fica uma das áreas mais úteis dessa tela: a timeline de __Eventos da Transação__.

Nessa timeline ficam registradas todas as comunicações entre a VTEX e os afiliados cadastrados – antifraude, gateways e adquirentes –, incluindo mensagens de sucesso e de erro, com seus respectivos códigos.

Nessa área é possível ver cada mudança de status da transação, com o momento exato em que ocorreram, e averiguar possíveis problemas.

Ao ler a descrição de um evento de cancelamento, por exemplo, você pode descobrir quem foi o autor desse cancelamento, ou pode descobrir que foi o conector quem negou a autorização do pagamento.

Leia o artigo __Visualizar detalhes da transação em Pedidos__ para consultar [exemplos de eventos registrados nessa timeline](https://help.vtex.com/pt/tutorial/como-visualizar-detalhes-do-pedido--tutorials_452#exemplos).
