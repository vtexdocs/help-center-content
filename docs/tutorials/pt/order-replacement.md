---
title: 'Substituição de pedidos'
id: 2IK9mwQjBKseQmE8K8saO8
status: PUBLISHED
createdAt: 2018-02-20T19:29:21.502Z
updatedAt: 2024-07-08T14:22:27.104Z
publishedAt: 2024-07-08T14:22:27.104Z
firstPublishedAt: 2018-02-20T20:24:08.083Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slug: substituicao-de-pedidos
locale: pt
legacySlug: permitir-alteracao-de-pedidos-ja-fechados, como-funciona-a-substituicao-de-pedidos
subcategory: 1qvm3kIrt6KA6IeGc4EQ6k
---

**Substituição de pedidos** é a funcionalidade que permite que um cliente altere dados de um pedido sem precisar entrar em contato com o suporte ou realizar um novo pedido. 

A [Alteração de itens](https://help.vtex.com/pt/tutorial/alteracao-de-itens-de-um-pedido-finalizado--tutorials_190) é diferente da substituição de pedidos. Na substituição de pedido o cliente solicita as mudanças no pedido, e na alteração de itens a loja modifica o pedido.

>❗ A funcionalidade está disponível para todas as lojas, no entanto, é preciso ativá-la para que seus clientes possam utilizá-la.

Neste artigo é possível consultar:

* [Como ativar a funcionalidade](#ativacao-da-funcionalidade)
* [Quais as condições para realizar uma substituição](#condicoes-para-substituicao)
* [Como a funcionalidade é vista pelo seu cliente](#uso-da-funcionalidade-pelo-cliente)

## Ativação da funcionalidade

>❗ Se a Substituição de pedidos for ativada em lojas que têm customização na página Meus Pedidos, é preciso recriar a customização. A funcionalidade substitui a versão antiga da página (que está customizada) por uma página nova não customizada. Para esses casos, recomendamos que, antes de ativar a funcionalidade na sua loja, utilize um [ambiente beta](https://help.vtex.com/pt/tutorial/acessar-o-ambiente-beta-pelo-dominio-myvtex-com--3BHM289568gcSwk2O80Asu) e valide a ativação com customização.

Para ativar a funcionalidade, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Pedidos > Configurações**, ou digite *Pedidos* na barra de busca no topo da página e selecione **Configurações da loja / Pedidos**.
2. Na aba **Gerais**, ao final da página, selecione o <a class="far fa-check-square"></a> em **Substituição do pedido**, ao lado de _Permitir que os clientes façam alterações em pedidos_.
3. Clique em `Salvar`.

## Condições para substituição

Com a funcionalidade ativada, fique atento para as seguintes condições e restrições para a realização de substituições pelos clientes.

Para que o cliente possa realizar alterações no pedido, é preciso que as condições comerciais originais sejam mantidas. Assim, as promoções e descontos continuam os mesmos no pedido substituído. Observe também que as condições comerciais são mantidas apenas se o pedido inclui os mesmos produtos, a mesma quantidade de SKUs e o mesmo preço base do SKU. Caso as condições comerciais não sejam mantidas, o pedido se torna um novo pedido em vez de uma substituição.

Os clientes podem alterar um pedido até que ele seja faturado, diferentemente dos casos em que o cliente precisa da aprovação da loja para efetivar o cancelamento (como é o caso de um pedido com status `Pronto para manuseio`).

Os dados que podem ser alterados com a substituição de pedidos são:

* Endereço de entrega;
* [Tipo de entrega](https://help.vtex.com/pt/tutorial/como-funciona-o-tipo-de-entrega--tutorials_126);
* Forma de pagamento;
* [SKU](https://help.vtex.com/pt/tutorial/o-que-e-um-sku--1K75s4RXAQyOuGUYKMM68u);

### Restrições para as condições

Não é possível realizar substituição de pedidos nos casos de:

* [Pedidos incompletos](https://help.vtex.com/pt/tutorial/entendendo-os-pedidos-incompletos--tutorials_294): quando o pedido não está com todas as informações completas para ser finalizado na plataforma.
* Transação compartilhada: pedidos com um seller ou mais e pagamento realizado para o marketplace.
* Pedidos já modificados pela loja.
* Pedidos com os seguintes status:
    * Verificando nota fiscal
    * Faturado
    * Solicitar cancelamento
    * Solicitação de cancelamento
    * Cancelamento solicitado
    * Cancelando
    * Cancelado
    * Substituído
    * Processando

## Uso da funcionalidade pelo cliente 

Com a funcionalidade ativada, os clientes da sua loja têm acesso a uma nova página de acompanhamento de pedidos. A alteração é feita na página **Meus Pedidos,** da seguinte forma:

* O cliente acessa o pedido e seleciona o botão `Alterar pedido`.
* Uma nova página ficará disponível para que ele realize as alterações desejadas.

Depois de clicar em `Alterar pedido` , o cliente é levado ao carrinho de compras e depois para o checkout, onde é possível realizar as alterações desejadas (endereço, tipo de entrega, forma de pagamento e SKU). O processo só é concluído quando a compra é finalizada. O cliente não é cobrado duas vezes pelo mesmo pedido.

>⚠️ O aproveitamento do pagamento (utilizar o pagamento efetuado anteriormente) só pode ser usado se o valor do pedido novo for igual ao do pedido original. Se o pagamento anterior por cartão de crédito não for aproveitado, a cobrança anterior é automaticamente estornada.
> <p>Para formas de pagamento que expiram em até 2 dias (como boleto), o pagamento não pode ser reutilizado.

