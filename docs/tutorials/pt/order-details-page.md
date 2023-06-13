---
title: Página de detalhes do pedido
id: 2Y75n54Cc9VizrlG1N6ZNl
status: PUBLISHED
createdAt: 2020-12-28T15:51:29.428Z
updatedAt: 2023-03-23T19:27:38.026Z
publishedAt: 2023-03-23T19:27:38.026Z
firstPublishedAt: 2020-12-28T19:33:51.059Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slug: pagina-de-detalhes-do-pedido
legacySlug: pagina-de-detalhes-do-pedido-beta
subcategory: 3VNOhxDrvYxJThhuJClrYZ
---

A página de **Detalhes do Pedido** permite visualizar todas as informações de um pedido e gerenciá-lo em um único lugar. Para visualizá-la, no Admin VTEX, acesse **Pedidos > [Todos os Pedidos](https://help.vtex.com/pt/tutorial/lista-de-pedidos-interface--2QTduKHAJMFIZ3BAsi6Pi)**, e clique no pedido desejado. 

Nesta página, você pode:

* Consultar em qual estágio o pedido está no fluxo de pedidos (status do pedido).
* Acessar todo o histórico de mudanças e interações do pedido.
* Visualizar a forma de pagamento utilizada.
* Conferir as promoções aplicadas ao pedido (quando aplicadas).
* Enviar e acompanhar os emails enviados ao cliente.
* Enviar a nota fiscal do pedido.
* Alterar itens do pedido.
* Gerenciar a devolução de pacotes.
* Cancelar o pedido.

A página de **Detalhes do pedido** está dividida em blocos que agrupam informações ou funcionalidades. Veja abaixo as seções da página e suas respectivas funções. 

Para saber mais sobre os status e o fluxo do pedido, confira o artigo [Fluxo e status de pedidos](https://help.vtex.com/pt/tutorial/fluxo-e-status-de-pedidos--tutorials_196).

<div class = "alert alert-info">
A seguir listamos todas as seções da página <b>Detalhes do pedido</b>. Note que somente as seções que se aplicarem ao pedido em questão estarão visíveis.
</div>

##  Barra superior

A barra superior contém as seguintes informações e permite as seguintes ações:

* **ID do pedido:** identificação numérica do pedido.
* **Status do pedido:** status em que o pedido se encontra no fluxo de pedidos. Confira o artigo [Fluxo e status de pedidos](https://help.vtex.com/pt/tutorial/fluxo-e-status-de-pedidos--tutorials_196) para mais informações.
* **Ações:** menu que permite acessar ações rápidas referentes ao pedido.
    * <i class="fas fa-print"></i> **Imprimir pedido:** permite imprimir os dados do pedido.
    * **Cancelar pedido:** botão que permite cancelar o pedido, desde que seu status não seja `Faturado`.
    * **Faturar:** botão que permite [faturar um pedido](https://help.vtex.com/pt/tutorial/como-faturar-um-pedido-manualmente--7p1h852V5t54KyscpgxE2v), aplicável a pedidos que ainda não foram faturados.
* **Navegação entre pedidos:** você pode navegar entre os pedidos anteriores e seguintes usando as setas <i class="fas fa-chevron-left"></i> e <i class="fas fa-chevron-right"></i>.

## Informações gerais 

As informações gerais do pedido são exibidas no início da página, logo abaixo da barra superior, e apresentam:

* **Data e horário:** data e horário em que o pedido foi realizado.
* **Vendido por:** nome do seller responsável pela venda.
* **Cliente:** informações pessoais do cliente, incluindo:
  - Nome
  - CPF
  - Contato (celular e email)
* **Entrega/Retirada:** dados do endereço e destinatário para o envio por transportadora ou retirada pelo cliente.

<div class = "alert alert-info">
Clique em <i class="fas fa-chevron-right"></i> na lateral dos blocos para mostrar mais informações, caso os blocos estejam minimizados.
</div>

## Status do pedido

Este bloco apresenta o status atual do pedido no [fluxo de pedidos](https://help.vtex.com/pt/tutorial/fluxo-de-pedido--tutorials_196) VTEX. Nele você encontra o [Ver histórico](#historico-do-pedido), para visualizer todas as mudanças e interações realizadas no pedido.

## Itens a faturar

O bloco **Itens a faturar** contém pacotes cujos itens estão com o pagamento aprovado, mas ainda não foram [faturados](https://help.vtex.com/pt/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/2WgQrlHTyVo4hLjhUs1LMT), ou seja, suas notas fiscais não foram emitidas na plataforma.

Um pacote é o embrulho ou a caixa que contém os itens de uma entrega. Note que um único pedido pode ter mais de um pacote, por ser composto por itens de sellers ou estoques diferentes. Saiba mais sobre a divisão de pacotes no artigo [Divisão de pedidos e divisão de entregas](https://help.vtex.com/pt/tutorial/divisao-de-pedidos-e-divisao-de-entregas--jQvzA6QgSd51e2p6bthoV).

O canto superior esquerdo inclui as seguintes ações:

* **Alterar**: altere os itens do pedido. Note que a [alteração de itens](https://help.vtex.com/pt/tutorial/como-alterar-itens-do-pedido--7jekq618QxgbsOxKkXBjE8) é diferente da [substituição de pedidos](https://help.vtex.com/pt/tutorial/substituicao-de-pedidos--2IK9mwQjBKseQmE8K8saO8). Na substituição de pedido o cliente solicita as mudanças no pedido, e na alteração de itens a loja modifica o pedido. 
* **Faturar:** emita a nota fiscal do pedido. Entenda melhor sobre o envio de faturas no artigo [Como faturar um pedido](https://help.vtex.com/pt/tutorial/como-faturar-um-pedido-manualmente--7p1h852V5t54KyscpgxE2v).

### Notas fiscais

Este bloco mostra os itens faturados com suas respectivas notas fiscais e os pacotes que compõem as entregas. Nele você pode:

* **Devolver itens:** ao clicar em `Devolver itens`, uma nova página com as informações da devolução é aberta. Para saber mais, consulte o artigo [Como devolver itens do pedido](https://help.vtex.com/pt/tutorial/como-devolver-itens-do-pedido--2bSNWwD0g8fcUmuupLao9i).
* **Rastrear a entrega do pedido:** ao clicar em `Ver rastreio`, uma nova página é aberta com os detalhes da entrega.
* **Confirmar entrega:** confirma a entrega do pedido ao destinatário. Para confirmar a entrega, clique em <i class="fas fa-ellipsis-v"></i> `Ações` e selecione <i class="fas fa-check"></i> `Confimar entrega`. A confirmação de entrega não altera nenhum status ou [fluxo do pedido](https://help.vtex.com/pt/tutorial/fluxo-de-pedido--tutorials_196). A informação é usada apenas para indicar para a loja e o cliente que a entrega foi finalizada.
* **Alterar dados de rastreio:** inserir e [editar os dados de rastreamento](https://help.vtex.com/pt/tutorial/alterar-dados-de-rastreio--63c2hG3fBSCnchiMBOR5Ck) para uso da loja e do cliente.

### Itens devolvidos

O bloco **Itens devolvidos** é exibido quando há devolução de itens do pedido. Veja quais são as informações e ações disponíveis nesse bloco:

* **Confirmar entrega:** confirma o recebimento do pacote devolvido. Saiba mais sobre a devolução de itens em [Como devolver itens do pedido](https://help.vtex.com/pt/tutorial/como-devolver-itens-do-pedido--2bSNWwD0g8fcUmuupLao9i).
* **Informações do pacote:** dados sobre o pacote com itens devolvidos.
    * **Nota fiscal de entrada:** número da nota fiscal de entrada no estoque, após a devolução.
    * **Data de emissão:** data de emissão da nota fiscal de entrada, quando a devolução ocorreu.
    * **Valor:** valor da nota fiscal dos itens devolvidos.
* **Itens devolvidos:** lista de itens devolvidos, com os dados do:
  - SKU
  - Preço unitário
  - Quantidade de itens
  - Custos extras da operação (caso exista)
  - Valor total
* **Total reembolsado:** valor total reembolsado ao cliente a partir da devolução dos itens.

### Histórico de itens alterados

Este bloco fica disponível quando há alteração de itens no pedido. O **Histórico de itens alterados** contém os detalhes da alteração: quais itens foram adicionados ou removidos, a data em que a alteração ocorreu e os valores dos produtos (valor do item devolvido, item adicionado e a diferença entre eles).

Caso existam mudanças no valor final do pedido, o item **Valor das alterações** no rodapé da seção informará a diferença de valor. 

## Histórico do pedido

Este bloco exibe as interações realizadas no pedido, com suas respectivas datas e horários. 

Clicando  em `Ver interações`, você pode acompanhar as comunicações com sistemas da VTEX e sistemas externos, como ERPs e gateways de pagamento.

No **Histórico do pedido**, você pode realizar o manuseio do pedido (caso esteja disponível), clicando em `Iniciar manuseio`. Ao clicar em `Iniciar manuseio`, você altera o status do pedido e sinaliza que os itens estão em preparação para entrega. Um modal aparecerá na tela para que você confirme sua decisão. Para seguir com a ação, marque as caixas de seleção e clique em **Avançar com status**. 

Para mais informações sobre quando o manuseio deve ser feito, leia o artigo [Fluxo e status de pedidos](https://help.vtex.com/pt/tutorial/fluxo-de-pedido--tutorials_196).

Você também pode visualizar detalhes das notificações enviadas por email ao cliente, clicando na seta <i class="fas fa-chevron-right"></i>. É possível enviar um email novamente clicando no botão `Reenviar e-mail`.

## Comentários

Esta seção permite adicionar comentários internos com observações sobre o pedido. Para isso, você pode digitar na caixa de texto e clicar em `Enviar`.

Os comentários enviados são registrados na página de detalhes do pedido com a data, o horário e o email do usuário. Eles não são visíveis para os clientes, apenas para os usuários do Admin VTEX com acesso à página **Todos os pedidos** da sua loja.

## Detalhes financeiros

Na lateral direita da página, você pode conferir os detalhes financeiros do pedido. Essas informações são atualizadas automaticamente à medida que o pedido evolui. 

* **Valor total do pedido:** valor total cobrado pelo pedido, ou seja, soma do valor dos itens, do envio e dos serviços adicionais, se houver. 
    * **Alterar valor final:** permite [alterar o valor total cobrado](https://help.vtex.com/pt/tutorial/alterar-valor-final-do-pedido--2asq4BmxvSD8Tw9xpfZuMo). 
    * **Promoções e parcerias:** promoções aplicadas ao pedido, caso existam. Estão divididas em:
        * **Promoções:** promoções de cartão-presente ou código promocional aplicado no checkout.
        * **Marketing:** promoções provenientes de campanhas de marketing.
* **Pagamento:** forma de pagamento utilizada na compra. As informações dependem de como o pagamento foi feito, e podem ser:
    * **Cartão de crédito:** dados do cartão de crédito utilizado na compra (identificação da transação, gateway, parcelas, código da transação, data da autorização e vendedor).
    * **Boleto bancário:** arquivo do boleto. Para conferir o boleto, clique em  <i class="fas fa-external-link-alt"></i> `Ver Boleto bancário`.
    * **Gift card:** os dados do vale-presente utilizado.

    Para visualizar mais detalhes sobre a transação, clique no botão `Ver Detalhes` <i class="fas fa-external-link-alt"></i>. 

    Se o pedido estiver com o status `Pagamento pendente`, você pode aprovar o pagamento manualmente, clicando em `Aprovar pagamento`.

## Saiba mais

* [Alterar itens do pedido](https://help.vtex.com/pt/tutorial/como-alterar-itens-do-pedido--7jekq618QxgbsOxKkXBjE8)  
* [Devolver itens do pedido](https://help.vtex.com/pt/tutorial/como-devolver-itens-do-pedido--2bSNWwD0g8fcUmuupLao9i)  
* [Faturar pedido](https://help.vtex.com/pt/tutorial/como-faturar-um-pedido-manualmente--7p1h852V5t54KyscpgxE2v)
