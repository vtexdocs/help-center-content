---
title: 'Pedidos para entrega (Beta)'
id: 4K7Z6FNIJgEt55B5vqVeCe
status: PUBLISHED
createdAt: 2022-06-01T19:54:02.324Z
updatedAt: 2023-05-31T14:45:17.174Z
publishedAt: 2023-05-31T14:45:17.174Z
firstPublishedAt: 2022-06-02T20:26:20.805Z
contentType: tutorial
productTeam: Shopping
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: order-to-delivery
legacySlug: pedidos-para-entrega
locale: pt
subcategoryId: 5SE2asHiQtHKfbnFru8RWH
---

<div class="alert alert-info">
  <p>Essa funcionalidade está em fase Beta, o que significa que estamos trabalhando para aprimorá-la. Em caso de dúvidas, entre em contato com <a href="https://support.vtex.com/hc/pt-br/requests">nosso Suporte</a>.</p>
</div>  

**Pedidos para entrega** é uma página que permite gerenciar os pedidos que serão preparados na loja para envio ou coleta pelo cliente. Ela apresenta a quantidade de pedidos em cada categoria, além de alertas para pedidos atrasados ou com pendências.

<div class="alert alert-info">
  <p>Essa funcionalidade está disponível apenas para o aplicativo do VTEX Sales App.</p>
</div>

**Pedidos para entrega** permite que os vendedores acompanhem as etapas dos pedidos, por meio de informações de pedido e entrega dentro de cada categoria.

Você pode buscar por um pedido clicando no ícone da lupa 🔍. Você pode clicar em <i class="fas fa-ellipsis-v" alt="elipses"></i> para receber pedidos de outra origem ou gerar um relatório de pedidos.

![Pedidos para entrega - PT](//images.ctfassets.net/alneenqid6w5/6yMDBApwvfHclrY5DS3fVk/d1bad3ebb121029d42034109b5d9154e/Screenshot_2022-06-01_at_17-09-12_Figma.png)

As categorias de etapas do pedido são as seguintes: 

- [Preparação](#preparacao)
- [Entrega em casa](#entrega-em-casa)
- [Retirada da loja](#retirada-da-loja)
- [Recusados](#recusados)
- [Devoluções](#devolucoes)
- [Entregues](#entregues)

## Preparação
A etapa **Preparação** exibe os pedidos que estão em fase de preparação, ou seja, todos os pedidos com itens sendo separados, empacotados e faturados. Essa etapa apresenta um prazo a partir do momento que o pedido é sinalizado como faturado.

Os pedidos são ordenados por prioridade de prazo, ou seja, o pedido com previsão de entrega mais próximo ou atrasado há mais tempo é o primeiro da lista.

Você pode buscar por um pedido clicando no ícone da lupa 🔍.

Cada pedido apresenta as seguintes informações:

- Cronômetro decrescente contando o prazo definido pela operação. Em casos de atraso, será indicado quanto tempo passou para além do prazo e ele será destacado em amarelo.
- Data e horário de quando o pedido foi recebido.
- Em casos de atraso da entrega do pedido, é indicado quanto tempo a entrega está atrasada e o pedido será destacado em vermelho.
- ID do pedido.
- Status atual do pedido, podendo ser **Pronto para separação**, **Separando**, **Pronto para empacotar**, **Empacotando**, **Pronto para faturar** ou **Faturado**.
- Tipo de entrega, podendo ser **Retirada na loja** ou **Entrega em casa**.
- Modalidade de entrega do pedido, como **Expressa** ou **Normal**.

![Preparação - PT](//images.ctfassets.net/alneenqid6w5/4gdmIBJfITnEIkYf68xDjk/c0fc7e138a6bf423b073ee78649b06d7/Screenshot_2022-06-01_at_17-24-04_Figma.png)

## Entrega em casa
A etapa **Entrega em casa** exibe os pedidos que estão em fase de envio para a casa do cliente. Os pedidos são ordenados por prioridade de prazo, ou seja, o pedido com previsão de entrega mais próximo ou atrasado há mais tempo é o primeiro da lista.

Você pode buscar por um pedido clicando no ícone da lupa 🔍.

Na aba **Pedidos** são exibidos os pedidos na etapa. Cada pedido apresenta as seguintes informações:

- Data e horário de quando o pedido foi recebido.
- Em casos de atraso, é indicado quanto tempo a entrega está atrasada.
- ID do pedido.
- Status atual do pedido, podendo ser **Aguardando criação do envio**, **Aguardando transportadora** ou **Coletado pela transportadora**.

![Entrega em casa - PT](//images.ctfassets.net/alneenqid6w5/4C9M1TGP6cExmF6RICxOR6/090775ac0eacddb8ce7101db419a672e/Screenshot_2022-06-02_at_16-24-36_Figma.png)

Na aba **Lotes de envio** são exibidas informações de cada envio feito pela loja. São apresentadas as seguintes informações:

- Número de pedidos e de pacotes daquele lote.
- Número do lote de envio e nome da transportadora.
- Status atual do envio, podendo ser **Aguardando transportadora**, **Coletado pela transportadora** ou **Concluído**.

![Entrega em casa - lotes de envio -PT](//images.ctfassets.net/alneenqid6w5/2o1qrINumd4BhrsKCX1YVy/8bd3d3ebb16e344e11a942be97b811b3/Entrega_em_casa_-_lotes_de_envio.png)

Para criar um novo lote, clique em <i class="fas fa-plus"></i> `Criar lote de envio`.

Ao selecionar um lote de envio será exibido uma tela com os detalhes de cada pedido relacionado a ele. Caso a transportadora responsável pelo envio não esteja integrada com a loja, será exibido um alerta, como na imagem abaixo.

![Lote de envio - PT](//images.ctfassets.net/alneenqid6w5/3dw9uaaJMdMPZQb6q5xqLN/d44731538f9e485360a5af9176812dc0/Screenshot_2022-06-02_at_16-31-42_Figma.png)

Para confirmar o envio dos pedidos, siga os passos a seguir:

1. Clique em `Confirmar envio`.
2. Clique em `Confirmar` para confirmar o envio ou `Cancelar` para cancelar a confirmação.

Ao clicar em <i class="fas fa-ellipsis-v"></i> `Outras opções`, você terá as seguintes opções:

- Imprimir etiquetas de envio.
- Imprimir lista de envio.
- Adicionar pedidos.
- Excluir lote de envio.

Ao clicar no ícone <i class="fas fa-ellipsis-v"></i> de um pedido, é possível imprimir etiqueta de envio, imprimir nota fiscal, fazer devolução do pedido e remover deste lote de envio.

Clicando em `Informações do envio`, será exibida uma tela com **Status**, **Transportadora**, **Pedidos neste envio** e **Data de criação**.

![Informações do envio - PT](//images.ctfassets.net/alneenqid6w5/132AGJoZVmHLM04lLEkB8B/383a20e3500a3147597af869f47576b9/Screenshot_2022-06-02_at_16-33-50_Figma.png)

Caso a loja não apresente integração com transportadora, será preciso marcar manualmente os pedidos como Entregue quando eles forem entregues ao cliente. Caso exista a integração com a transportadora, os pedidos são marcados como entregues automaticamente.

## Retirada da loja
A etapa **Retirada em loja** exibe os pedidos que estão em fase de retirada do cliente. Os pedidos são ordenados por prioridade de prazo, ou seja, o pedido com previsão de entrega mais próximo ou atrasado há mais tempo é o primeiro da lista.

Você pode buscar por um pedido clicando no ícone da lupa 🔍.

Cada pedido apresenta as seguintes informações:

- Previsão de retirada do pedido na loja pelo cliente.
- Em casos de atraso, é indicado quanto tempo a retirada do cliente está atrasada.
- ID do pedido.

![Retirada na loja - PT](//images.ctfassets.net/alneenqid6w5/5dWy0rBy4GfEb2jVmS0MIE/256dedcced031fcf6717a6404a045a37/Screenshot_2022-06-02_at_16-36-07_Figma.png)

## Recusados
A etapa **Recusados** exibe os pedidos que foram cancelados pela loja por falta do item no estoque, produto com defeito, entre outros motivos. Os pedidos são ordenados por prioridade de prazo, ou seja, o pedido com previsão de entrega mais próximo ou atrasado há mais tempo é o primeiro da lista.

Você pode buscar por um pedido clicando no ícone da lupa 🔍.

Cada pedido apresenta as seguintes informações:

- Previsão de retirada do pedido na loja pelo cliente.
- Em casos de atraso, é indicado quanto tempo a retirada do cliente ou a entrega está atrasada.
- ID do pedido.
- Status atual do pedido, podendo ser **Cancelado** ou **Aguardando análise**.
- Modalidade de entrega, podendo ser **Retirada na loja** ou **Entrega em casa**.

![Recusados - PT](//images.ctfassets.net/alneenqid6w5/6JOEUXqZsrD4Fl4PflbIeU/3295b747e4b5c12bf33d7efa8a5a72c1/Screenshot_2022-06-02_at_16-40-10_Figma.png)

## Devoluções
A etapa **Devoluções** exibe os pedidos que foram devolvidos pelo cliente. Você pode buscar por um pedido clicando no ícone da lupa 🔍. Cada pedido apresenta as seguintes informações:

- ID do pedido.
- Data e horário de quando o pedido foi devolvido.
- Modalidade de entrega, podendo ser **Retirada na loja** ou **Entrega em casa**.

![Devoluções - PT](//images.ctfassets.net/alneenqid6w5/sI6uA75Ms3LQHAkaCF1ts/0a0e7b5140d72fb78053f9a894fff0ff/Screenshot_2022-06-02_at_17-09-08_Figma.png)

## Entregues
A etapa Entregues exibe os pedidos que foram finalizados e entregues ao cliente. Você pode buscar por um pedido clicando no ícone da lupa 🔍. Cada pedido apresenta as seguintes informações:

- ID do pedido.
- Tipo de entrega, podendo ser **Retirada na loja** ou **Entrega em casa**.
- Modalidade de entrega do pedido, como **Expressa** ou **Normal**.

![Entregues - PT](//images.ctfassets.net/alneenqid6w5/5GJhMUquRRYWAo9zRtZtst/62aaef737462a4f77cd37c025cdbbed5/Screenshot_2022-06-02_at_17-22-45_Figma.png)
