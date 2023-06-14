---
title: 'Estoque reservado em pedidos faturados'
id: TfDOKEybi6eSAEoCEEAqg
status: PUBLISHED
createdAt: 2017-06-13T18:43:58.606Z
updatedAt: 2022-12-22T14:51:09.663Z
publishedAt: 2022-12-22T14:51:09.663Z
firstPublishedAt: 2017-06-14T00:07:07.051Z
contentType: knownIssue
productTeam: Post-purchase
author: authors_4
tag: Order Management
slug: estoque-reservado-em-pedidos-faturados
kiStatus: Backlog
internalReference: 
---

## Sumário

Ocasionalmente o pedido já foi faturado, o estoque dos produtos envolvidos já foi alterado (para dar a baixa no estoque), mas os itens continuam reservados. Ao verificar o estoque destes produtos, vemos que eles **não entraram** na coluna "em manuseio".

Isso acontece quando o pedido está no status `Pronto para manuseio` e o cliente solicita cancelamento do pedido. Se a loja não acatar o cancelamento e fatura o pedido, este pulará as etapas `Iniciar manuseio` e `Preparando entrega`, de modo que a reserva não será reconhecida.

Exemplo com o fluxo do pedido:

![2017-06-13 182850](//images.contentful.com/alneenqid6w5/5Skd8YsCcMIicCcEGyoqwG/1a1a839dc36cdb9f818240b68817de3e/2017-06-13_182850.jpg)

Na etapa circulada do fluxo do pedido, o produto é faturado sem o reconhecimento da reserva.

Como as reservas já estão confirmadas, não irão expirar.

## Simulação

1. Fazer um pedido;
2. Atingir o status "Pronto para manuseio";
3. Como cliente, solicitar o cancelamento através do "Meus Pedidos";
4. O status do pedido passará a ser "Cancelamento solicitado";
5. Enviar a nota fiscal, a fim de faturar o pedido;
6. No estoque, o item permanecerá reservado na coluna "Itens Reservados".

## Workaround

Não há workaround para este problema.

Nos casos em que isso ocorra, o estoque permanecerá reservado, sendo necessário entrar em contato com o suporte VTEX para a liberação da reserva.

