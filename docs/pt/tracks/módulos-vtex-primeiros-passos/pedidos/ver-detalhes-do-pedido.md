---
title: 'Ver detalhes do pedido'
id: 204AjAQseJe8RLUi8GAhiC
status: PUBLISHED
createdAt: 2019-11-14T15:12:10.952Z
updatedAt: 2023-11-08T14:56:01.508Z
publishedAt: 2023-11-08T14:56:01.508Z
firstPublishedAt: 2019-11-18T12:20:18.851Z
contentType: trackArticle
productTeam: Post-purchase
slugEN: seeing-order-details
locale: pt
trackId: 2xkTisx4SXOWXQel8Jg8sa
trackSlugEN: pedidos
order: 4
---

No menu lateral do Admin da VTEX, dentro da área de Pedidos, fica a seção __Todos os pedidos__, onde é possível ver a lista de pedidos da loja.

Na visualização padrão dessa tela são listados todos os pedidos da loja a partir do mais recente. É possível alterar a ordenação clicando no nome das colunas, assim como buscar os pedidos por meio de dados específicos, e também exportar esses dados.

Além disso, a busca oferece um filtro bastante flexível, que explicaremos em detalhes no [próximo artigo](/pt/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/3cjk655ZzDGICH4rVfgu7O).

Para entender a lista de pedidos em detalhes, consulte o artigo [Lista de pedidos - Visão geral](/pt/tutorial/lista-de-pedidos--tutorials_200)

Além de pesquisar pedidos em **Pedidos > Todos os pedidos**, você pode buscar pedidos a partir de qualquer página no Admin VTEX usando a barra de busca global no topo da página. Por padrão, a busca está configurada para `Páginas`. Para buscar um pedido, clique sobre a barra, selecione a opção `Pedidos` e utilize algum dos seguintes critérios:

- ID do pedido
- Nome do cliente
- Email do cliente
- Documento do cliente 

## Vendo os detalhes de um pedido

Ao clicar em um pedido, você é direcionado para a tela de [detalhes do pedido](/pt/tutorial/order-details-page-interface--2Y75n54Cc9VizrlG1N6ZNl), onde é possível consultar uma série de informações sobre o pedido e ainda executar algumas ações, tais como:
- Reenviar o último e-mail para o cliente.
- Cancelar manualmente o pedido.
- Faturar os itens do pedido.
- Aprovar manualmente o pagamento.

Veja abaixo como interpretar as informações em cada área da tela de detalhes do pedido. 

### Dados do cliente

As informações exibidas no card (CPF para cliente e CNPJ para empresa) além de e-mail e telefone, são sua forma de identificar aquele cliente.

O botão __Reenviar último e-mail__, quando acionado, volta a enviar a última comunicação feita com o cliente por e-mail. Para ter certeza de qual e-mail se trata, é possível visualizar todos na área Linha do tempo, no final da página.

Na plataforma VTEX também existe uma funcionalidade para unificar a comunicação por e-mail com o cliente, o Conversation Tracker. 

Todos os dados do cliente são inseridos no momento do fechamento do pedido e não podem ser alterados aqui. Para visualizar e gerenciar esses dados, você pode acessar o Master Data.

> ℹ️ Caso sua loja atue apenas como seller de um pedido, o e-mail do cliente não será exibido. Entendemos que a relação do cliente é com o marketplace, por isso não é aconselhável o compartilhamento dos seus dados com o seller sem consentimento prévio.

### Valor total

São exibidos os detalhes de valores do pedido, como descontos, frete, valor do produto, cupom etc.

### Promoções e parcerias

Nesse card são exibidas as promoções que foram aplicadas em cima do valor do pedido assim como as parcerias utilizadas referentes àquele pedido.

### Status do pedido

É o status atual do pedido, de acordo com o momento em que o pedido se encontra dentro do [fluxo do pedido](/pt/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/4811ExCe3WrEiRMV3sy9n8).

### Fluxo

O fluxo do pedido pode ser exibido por meio de um __Diagrama__ ou de __Interações__. Para uma visão mais simples do todo, recomendamos usar o Diagrama. As Interações são úteis principalmente para interpretar erros ou encontrar detalhamentos específicos do fluxo.

### Itens a faturar

Exibe informações relacionadas aos itens do pedido. Ao clicar nos três pontinhos, é possível modificar a fatura e tomar algumas ações relacionadas ao pedido. No entanto, é recomendado que você redobre a atenção ao executá-las.

O botão __Faturar pacote__ envia a documentação fiscal da compra ao e-mail do cliente e deve ser acionado apenas quando toda a transação já estiver aprovada.

O card de __Endereço de entrega__ mostra as informações que dizem respeito à entrega do pedido.

Essas informações foram inseridas no momento do fechamento do pedido e não podem ser alteradas. Assim como os dados de clientes, os dados de entrega podem ser visualizados e gerenciados no Master Data.

### Pagamento

Mostra um resumo das informações relacionadas ao pagamento do pedido.

### Linha do Tempo

Ilustra todo o processo de transição dos status de um pedido, incluindo o meio de pagamento usado e e-mails trocados com o cliente.

Uma feature que pode ser útil para sua operação é a de __comentários__: você pode inserir comentários na Linha do Tempo, visíveis apenas para a loja, nunca para o cliente.
