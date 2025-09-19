---
title: 'VTEX Pick and Pack: FAQ'
id: 2Rvf9vTS35vmOhkE2i0xcs
status: PUBLISHED
createdAt: 2025-05-16T16:11:28.033Z
updatedAt: 2025-05-16T17:08:31.224Z
publishedAt: 2025-05-16T17:08:31.224Z
firstPublishedAt: 2025-05-16T17:06:40.015Z
contentType: tutorial
productTeam: Post-purchase
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: vtex-pick-and-pack-faq
legacySlug: vtex-pick-and-pack-faq
locale: pt
subcategoryId: 7Kllu6CmeLNV3tYXlCFvOt
---

Este guia tem como objetivo responder as perguntas mais frequentes sobre o VTEX Pick and Pack.

- [Configuração Geral](#configuracao-geral)
  - [Todos os pedidos da sua loja passarão pelo VTEX Pick and Pack?](#todos-os-pedidos-da-sua-loja-passarao-pelo-vtex-pick-and-pack)
  - [Os separadores irão lidar com um pedido por vez ou com vários pedidos simultaneamente?](#os-separadores-irao-lidar-com-um-pedido-por-vez-ou-com-varios-pedidos-simultaneamente)
- [Configuração de separação](#configuracao-separacao)
  - [O separador poderá alterar o pedido durante a separação?](#o-separador-podera-alterar-o-pedido-durante-a-separacao)
  - [Se o separador puder adicionar, substituir ou remover itens, essas ações precisarão de aprovação de um administrador?](#se-o-separador-puder-adicionar-substituir-ou-remover-itens-essas-acoes-precisarao-de-aprovacao-de-um-administrador)
  - [Se forem permitidas alterações nos pedidos, haverá um limite para o número de alterações que podem ser feitas?](#se-forem-permitidas-alteracoes-nos-pedidos-havera-um-limite-para-o-numero-de-alteracoes-que-podem-ser-feitas)
  - [Como o separador localiza os itens para a separação?](#como-o-separador-localiza-os-itens-para-a-separacao)
- [Configuração de empacotamento](#configuracao-de-empacotamento)
  - [Quais são os tamanhos e tipos de embalagens que podem ser utilizados?](#quais-sao-os-tamanhos-e-tipos-de-embalagens-que-podem-ser-utilizados)

## Configuração Geral

### Todos os pedidos da sua loja passarão pelo VTEX Pick and Pack?

A integração das funcionalidades do VTEX Pick and Pack com os pedidos da loja não é automática. É necessário definir, por meio de filtros, quais características estarão presentes nos pedidos que serão atendidos pelo VTEX Pick and Pack. Para isso, siga os seguintes passos:

1. No Admin VTEX, acesse **Envio > Pick and Pack > Configurações** ou digite **Configurações** na barra de busca no topo da página.
2. Clique em `Geral` na aba **Pedidos**.
3. Preencha os [filtros](/pt/tutorial/vtex-pick-and-pack-configuracoes--16cs3e7hWk7c4cSZqe10O9#pedidos) da página **Geral**.
4. Clique em `Salvar`.

## Os separadores irão lidar com um pedido por vez ou com vários pedidos simultaneamente?

É possível definir se o fluxo da ordem de serviço será realizado como um pedido de cada vez ou múltiplos pedidos. Para configurar como será o manuseio de pedidos, siga os passos abaixo:

1. No Admin VTEX, acesse **Envio > Pick and Pack > Configurações** ou digite **Configurações** na barra de busca no topo da página.
2. Clique em `Geral` na aba **Ordens de Serviço**.
3. Na sessão **Manuseio de pedidos**, escolha a opção que deseja configurar:
   * **Pedido único** - manuseio de pedido individual.
   * **Pedido múltiplo** - simplifica o processo de lidar com múltiplos pedidos ao mesmo tempo, tornando-o mais eficiente e conveniente.
4. Clique em `Salvar`.

## Configuração de separação

### O separador poderá alterar o pedido durante a separação?

O separador pode adicionar, substituir e rejeitar itens no pedido, além de poder aumentar a quantidade ou ajustar o preço de um item. Contudo, é necessário ativar permissões para habilitar o separador de realizar essas ações. Para configurar as permissões, siga os seguintes passos:

1. No Admin VTEX, acesse **Envio > Pick and Pack > Configurações** ou digite **Configurações** na barra de busca no topo da página.
2. Clique em `Separação` na aba **Ordens de Serviço**.
3. Na aba **[Separação](/pt/tutorial/vtex-pick-and-pack-configuracoes--16cs3e7hWk7c4cSZqe10O9#separacao)**, selecione as ações que o separador poderá executar:
   * Permitir observações nos itens
   * Solicitar confirmação para separar itens
   * Permitir adicionar itens
   * Permitir substituição de itens
   * Permitir recusar itens
   * Permitir alterações no preço dos itens
   * Permitir alterações na quantidade dos itens
4. Clique em `Salvar`.

## Se o separador puder adicionar, substituir ou remover itens, essas ações precisarão de aprovação de um administrador?

A aprovação de um administrador não é obrigatória durante a alteração de um pedido, porém, pode ser habilitada. Para isso, siga os seguintes passos:

1. No Admin VTEX, acesse **Envio > Pick and Pack > Configurações** ou digite **Configurações** na barra de busca no topo da página.
2. Clique em `Separação` na aba **Ordens de Serviço**.
3. Na aba **[Separação](/pt/tutorial/vtex-pick-and-pack-configuracoes--16cs3e7hWk7c4cSZqe10O9#separacao)**, habilite a opção **Ativar fluxo de aprovações**.
4. Clique em `Salvar`.

### Se forem permitidas alterações nos pedidos, haverá um limite para o número de alterações que podem ser feitas?

É possível definir um número limite de alterações de preço e quantidade de itens em um pedido. Para isso, siga os passos abaixo:

1. No Admin VTEX, acesse **Envio > Pick and Pack > Configurações** ou digite **Configurações** na barra de busca no topo da página.
2. Clique em `Separação` na aba **Ordens de Serviço**.
3. Na aba **[Separação](/pt/tutorial/vtex-pick-and-pack-configuracoes--16cs3e7hWk7c4cSZqe10O9#separacao)**, defina o limite de alterações na opção **Número máximo de alterações no pedido**.
4. Clique em `Salvar`.

### Como o separador localiza os itens para a separação?

A localização de itens refere-se à especificação onde cada item está armazenado no estoque, facilitando e simplificando o processo de separação. Para habilitar a localização dos itens, siga os passos abaixo:

1. No Admin VTEX, acesse **Envio > Pick and Pack > Configurações** ou digite **Configurações** na barra de busca no topo da página.
2. Clique em `Geral` na aba **Itens**.
3. Habilite a opção **Ativar localização do item**.
4. Clique em `Salvar`.

## Configuração de empacotamento

### Quais são os tamanhos e tipos de embalagens que podem ser utilizados?

Os tipos e tamanhos de embalagens utilizados pela loja devem ser cadastrados no Pick and Pack. Para adicionar uma embalagem, siga os passos abaixo:

1. No Admin VTEX, acesse **Envio > Pick and Pack > Configurações** ou digite **Configurações** na barra de busca no topo da página.
2. Clique em `Empacotamento` na aba **Ordens de Serviço**.
3. Na aba **[Empacotamento](/pt/tutorial/vtex-pick-and-pack-configuracoes--16cs3e7hWk7c4cSZqe10O9#empacotamento)**, clique na aba **Envelopes**.
4. Clique no botão `Criar` e preencha o formulário com as informações da embalagem.
5. Clique em `Salvar`.
