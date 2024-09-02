---
title: 'Novo horário de funcionamento nas transportadoras'
id: 1EDwYgBmqddlVZ5aXhaa4t
status: DRAFT
createdAt: 2019-02-18T20:40:07.893Z
updatedAt: 2021-05-26T13:51:50.667Z
publishedAt: 
contentType: updates
productTeam: Post-purchase
author: authors_41
slug: novo-horario-de-funcionamento-nas-transportadoras
locale: pt
legacySlug: novo-horario-de-funcionamento-nas-transportadoras
announcementImageID: ''
announcementSynopsisPT: 'A partir de 29/01, você vai poder configurar os horários de funcionamento de uma transportadora.'
---

A partir de __29/01/2019__, você vai poder configurar os __horários de funcionamento__ de uma transportadora.

## O que muda
- Adição de novos campos para configuração do horário de funcionamento das lojas. 
- Possibilidade de aceitar ou não vendas fora do horário de funcionamento. Se a flag não estiver marcada e a venda aconteça fora do horário configurado, a loja não vai ser considerada na simulação de frete.
- Nova flag para marcar a transportadora como ativa (antes, só era possível inativar uma transportadora usando a API).

## Como configurar
Para configurar horários de funcionamento para transportadoras, siga os passos abaixo:

1. No menu lateral do Admin, clique em __Estoque & entrega__.
2. Nas opções que se abrem, clique em __Painéis__.
3. Na coluna __Trasportadoras__, clique em __Nova Transportadora__ ou em uma que já exista.
4. Na tela de configuração, você vai encontrar as novas flags `Transportadora ativa`, `Cadastrar dias e horários de funcionamento da transportadora` e `Aceitar vendas fora do horário de funcionamento`. São elas que permitem as novas configurações.

## Próximos passos
Em breve, também será permitida a criação de mais de um horário por dia. Assim, lojas que fecham na hora do almoço, por exemplo, vão poder cadastrar seus horários de pausa. Confira o artigo de configuração do [Horário de Funcionamento das Transportadoras](https://help.vtex.com/pt/tutorial/configurar-horario-de-funcionamento-para-transportadoras--2oGpbInIgdxSWUi3TZjdCS).

<div class="alert alert-info">
A configuração vem, por default, com todos os dias marcados e com os horários de 00:00 a 23:59 (sempre em horário local).
</div>

<div class="alert alert-warning">
Ao usar a opção de horário de funcionamento, não é possível a utilização do horário de corte. Isso quer dizer que você vai precisar escolher qual das configurações faz mais sentido para sua loja.
</div>
