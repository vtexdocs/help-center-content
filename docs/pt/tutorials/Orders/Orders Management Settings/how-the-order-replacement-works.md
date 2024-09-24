---
title: 'Como funciona a Substituição de Pedidos'
id: 3aBxdbUPKgweug68YyK8oQ
status: ARCHIVED
createdAt: 2017-05-25T18:12:10.611Z
updatedAt: 2021-12-07T18:16:14.226Z
publishedAt: 
firstPublishedAt: 2017-05-30T20:52:49.085Z
contentType: tutorial
productTeam: Post-purchase
author: 7FpKZ0rc6k4WqeymES80cw
slug: como-funciona-a-substituicao-de-pedidos
locale: pt
legacySlug: como-funciona-a-substituicao-de-pedidos
subcategoryId: 1qvm3kIrt6KA6IeGc4EQ6k
---

A **Substituição de Pedidos** permite aos clientes da sua loja alterar dados de pedidos já realizados. O objetivo é ajudá-los a corrigir erros sem a necessidade de realizar um novo pedido manualmente ou de entrar em contato com seu suporte, o que facilita a operação da sua loja.

### Como ativar a Substituição de Pedidos

A funcionalidade está disponível para todos as lojas, porém para a ativação será necessário alterar a configuração inicial de seu Gerenciador de Pedidos:

- Acessar **Configurações** de **Gerenciamento de Pedidos**;
- Em configurações **Gerais** marcar a opção **Permitir que clientes façam alterações em pedidos**;
- Em 15 minutos, após a atualização automática do cache, a funcionalidade estará disponível.


### Características da Funcionalidade


Os seguintes dados do pedido podem ser alterados:

- Endereço
- Tipo de frete
- Forma de pagamento
- SKU

E o mais importante é que **as condições comerciais do pedido original são mantidas**. Ou seja, se o cliente tinha promoções ou descontos aplicados ao pedido original, estes continuam valendo no pedido substituído. Nos casos em que não for possível manter as condições comerciais para um pedido, a substituição fica indisponível.

Mas atenção: as condições comerciais apenas serão mantidas se três aspectos permanecerem iguais: mesmos produtos, mesma quantidade de SKUs por produto e mesmo preço-base do SKU. Se isso não ocorrer, o pedido deixa de ser uma substituição, caracterizando-se como um novo pedido.

### Casos que não permitem substituição

Os seguintes casos não permitem substituição:
- Pedidos incompletos
- Pedidos com transação compartilhada (pedidos com mais de um Seller com pagamento sendo feito ao Marketplace)
- Pedidos com alguma modificação feita pelo lojista
- Pedidos realizados antes do dia 27 de maio de 2017

Além disso, não é possível fazer a substituição nos seguintes status de pedido:

- Faturando
- Faturado
- Cancelar
- Cancelado
- Solicitação de cancelamento
- Substituído
- Processando

## Novo layout

Com essa funcionalidade, os usuários da sua loja ganham uma página de Meus Pedidos redesenhada, com opções de alteração e cancelamento:

![meu pedidos1 PT](//images.contentful.com/alneenqid6w5/3HQW2z7EfmokwYcWWCae8C/f0b0a251aecf8b2e140ad9a1ec2ee3c9/meu_pedidos1_PT.png)

![meus pedidos3 PT](//images.ctfassets.net/alneenqid6w5/Np1Rhp4HIsQ6ocyOcqG4i/291263f717dd3da2ef8a027b5a1534e6/meus_pedidos3_PT.png)

Ao selecionar **Alterar pedido**, o cliente é levado para uma tela onde escolhe qual informação gostaria de substituir:

![meus pedidos2 PT](//images.contentful.com/alneenqid6w5/3H4kcxj1Fm0Y0MkmouU2Sq/244d2ca249c117c42ecc7af26b5bfb4d/meus_pedidos2_PT.png)

Para concluir a alteração, ele é levado para o carrinho e o Checkout, onde pode alterar endereço, tipo de frete, forma de pagamento e SKU.

>⚠️ É necessário fechar a compra para concluir o processo, mas **o cliente nunca é cobrado duas vezes**. Em alguns casos o pagamento anterior será reaproveitado; quando isso não for possível, a cobrança anterior no cartão de crédito será automaticamente estornada.

A reutilização de pagamento só pode ser usada se o valor do pedido novo for igual ao do pedido original. Além disso, se o pagamento expira em até 2 dias, ele não pode ser reutilizado.
