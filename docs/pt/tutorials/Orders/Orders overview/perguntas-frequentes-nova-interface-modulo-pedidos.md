---
title: 'Perguntas frequentes sobre a nova interface do módulo de pedidos'
id: 1mgSrqT2X3lxIkccEv8bLW
status: PUBLISHED
createdAt: 2022-12-08T18:26:26.850Z
updatedAt: 2023-01-05T18:01:01.354Z
publishedAt: 2023-01-05T18:01:01.354Z
firstPublishedAt: 2023-01-05T13:24:51.496Z
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: frequently-asked-questions-new-orders-module-interface
locale: pt
legacySlug: perguntas-frequentes-sobre-a-nova-interface-do-modulo-de-pedidos
subcategoryId: 3VNOhxDrvYxJThhuJClrYZ
---

O módulo **Todos os pedidos** do Admin VTEX foi transformado para oferecer uma experiência mais intuitiva e completa. Entre as últimas melhorias, agora você pode [buscar pedidos sem limite de data](https://help.vtex.com/pt/tutorial/como-filtrar-pedidos--tutorials_192), não mais existindo a restrição de buscar somente nos últimos seis meses.

A partir de 1 de fevereiro de 2023, a nova interface será o padrão de todas as lojas VTEX e não será possível retornar à versão anterior. Para auxiliar na transição, criamos este documento, que responde às seguintes perguntas:

* [O que aconteceu com o filtro de busca de seis meses?](#o-que-aconteceu-com-o-filtro-de-busca-de-seis-meses)
* [Como visualizar o diagrama de fluxo do pedido?](#como-visualizar-o-diagrama-de-fluxo-do-pedido)
* [Como faturar o pedido?](#como-faturar-o-pedido)
* [Como reenviar o último email para o cliente?](#como-reenviar-o-ultimo-email-para-o-cliente)

Você pode visualizar a correspondência de seções e campos entre a versão antiga da página **Detalhes do pedido** e a nova versão na imagem abaixo:

![board_comparativo_interface_pedido_v2_pt](https://images.ctfassets.net/alneenqid6w5/30tYehAYOCvQoX0MpSIoNH/70f75ff7e98e67c9c403c32965ab4882/board_comparativo_interface_pedido_v2_pt.png)

## O que aconteceu com o filtro de busca de seis meses?

O filtro de seis meses foi substituído pela busca sem limite de data, que retorna todos os pedidos relacionados ao critério utilizado, independente da data de criação do pedido. É possível, por exemplo, acessar o histórico completo de compras de um cliente, utilizando o nome, email ou documento do cliente. Saiba mais no artigo [Filtrar pedidos em Todos os pedidos](https://help.vtex.com/pt/tutorial/como-filtrar-pedidos--tutorials_192).

>ℹ️ A busca em todos os pedidos não pode ser associada a outros filtros, portanto, ao remover o limite de datas da busca, outros filtros se tornam inativos. Você pode, no entanto, combinar filtros e selecionar o período personalizado de seis meses, por exemplo.

Para buscar em todos os pedidos, digite o termo desejado na caixa de busca. Isso fará com que a opção <i class="fas fa-toggle-off"></i> `Remover limite de datas` se torne visível. Depois basta ativá-la e isso dará início à busca.

![busca_sem_limite_data_all_pt](//images.ctfassets.net/alneenqid6w5/7mDlDQAgphKCmH12REooCx/b6fee3d3358a18d7fe217d8afc005ca3/busca_sem_limite_data_all_pt.png)

## Como visualizar o diagrama de fluxo do pedido?

Na nova interface, por padrão, o que é exibido é uma linha tempo com os eventos de **Status do pedido**, como na imagem abaixo:

![timeline_pedido_pt](//images.ctfassets.net/alneenqid6w5/JID8bYMxBA94nRGXJQ3BI/c062ec0b49a67aaecd9856a5bbec865b/timeline_pedido_pt.png)

Caso você deseje ver o **Diagrama do pedido** como na interface antiga, clique em `Ver diagrama` e um modal como o da imagem abaixo vai aparecer:

![diagrama_pedido_pt](//images.ctfassets.net/alneenqid6w5/3to0oQYzjgz3Y5i4sDPIG3/20ac041bccaef4e607b082b1e6a346d0/diagrama_pedido_pt.png)

## Como faturar o pedido?

Na seção **Itens a faturar** da nova interface, todas as ações relacionadas a faturamento são acessadas pelo botão `Faturar`, que aparece tanto nesta seção quanto no topo da tela. Ao clicar em `Faturar`, são apresentadas as seguintes opções:

* **Enviar nota fiscal referenciando itens:** esta opção é exclusiva da nova interface. Por meio dela, é possível emitir a nota fiscal total ou parcial de determinados itens, que são identificados por SKU, estoque e preço. Veja um exemplo na imagem a seguir:

![faturar_referenciar_pedidos_final_pt](//images.ctfassets.net/alneenqid6w5/3h0sV3Gq2dkJk3ZoT85SyG/cef5f7a10b488a14945a0f210d464aea/faturar_referenciar_pedidos_final_pt.png)

* **Enviar nota fiscal avulsa:** a opção corresponde ao antigo _Enviar nota fiscal_ e permite faturar o valor total ou parcial do pedido. A apresentação da página é diferente, mas os campos permanecem os mesmos.

Para faturar um pedido, siga os passos abaixo:

1. Na seção **Itens a faturar** ou no topo da página **Detalhes do pedido**, clique em `Faturar`.
2. Selecione uma das opções:
    * Enviar nota fiscal referenciando itens
    * Enviar nota fiscal avulsa
3. Preencha os campos.
4. Clique em `Salvar nota fiscal`.

## Como reenviar o último email para o cliente?

Na nova interface, dentro da seção **Histórico do pedido**, existe uma linha do tempo apresentando eventos relacionados ao pedido, inclusive emails enviados, que são identificados com o ícone <i class="fas fa-envelope"></i>. 

Para reenviar um email para o cliente, clique no evento de email enviado ou no ícone seta <i class="fas fa-angle-right"></i> para ver os detalhes do evento, que vão aparecer como na imagem a seguir:

![enviar_email_pt](//images.ctfassets.net/alneenqid6w5/5c2ZuqUC1b497RQdImDQ46/f59d8a815163c889d8af29cd4e04ccbd/enviar_email_pt.png)

Clique sobre o botão `Reenviar email` e o email será imediatamente enviado ao cliente, sendo que a seguinte mensagem de confirmação deve aparecer: _Email reenviado ao cliente com sucesso_.
