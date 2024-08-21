---
title: 'Gerenciar Tarifas de envio'
id: tutorials_141
status: PUBLISHED
createdAt: 2017-04-27T22:17:04.172Z
updatedAt: 2023-03-29T15:06:40.531Z
publishedAt: 2023-03-29T15:06:40.531Z
firstPublishedAt: 2017-04-27T23:00:45.116Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slug: gerenciar-tarifas-de-envio
locale: pt
legacySlug: gerenciar-valores-de-frete
subcategory: 7uJcyu0VawEm8ggqKu404u
---

As [tarifas de envio](https://help.vtex.com/pt/tutorial/tarifas-de-envio--1Balpg3rv0854udEPedvMM) da sua loja são os preços de frete que serão oferecidos aos seus clientes. Pelo módulo **Tarifas de envio** no Admin VTEX, você pode gerenciar individualmente uma tarifa de envio utilizando o código postal. Nesse módulo, é possível:

* [Cadastrar](#cadastrar) novas tarifas de envio;
* [Pesquisar](#pesquisar) as tarifas de envio existentes;
* [Editar](#editar) as tarifas de envio;
* [Excluir](#excluir) as tarifas de envio.

>ℹ️ Para casos em que há vários preços de envio para serem atualizados ou cadastrados, recomendamos utilizar a Planilha de frete em vez do módulo **Tarifas de envio**. Caso queira conferir como as tarifas de envio cadastradas serão apresentadas ao cliente final, utilize o módulo **[Simulador de envio**](https://help.vtex.com/pt/tutorial/simulacao-de-frete--tutorials_144).

## Cadastrar

Para cadastrar uma nova tarifa de envio, siga as instruções abaixo:

1. No Admin VTEX, acesse **Envio > Tarifas de envio** ou digite *Tarifas de envio* na barra de busca no topo da página.     
2. Clique no botão `Novo Valor de Frete`.  
3. Preencha os campos:
    * **Política de envio:** selecione a [política de envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140) que corresponde à nova tarifa;
    * **País**: país em que a transportadora fará a entrega;
    * **Faixa de código postal**: limite inicial e final dos códigos postais que a nova tarifa atende. Esse campo deve ser preenchido apenas com números e/ou letras.
    * **Faixa de peso**: limite inicial e final de peso que a transportadora aceita para o envio (considerando a tarifa de envio e o código postal). Esse campo deve ser preenchido por um número decimal. A unidade de peso (gramas, quilogramas, etc) deve ser a mesma utilizada no cadastro dos itens no catálogo (SKU). 
    * **Valor do frete**: tarifa fixa cobrada para a realização da entrega (considerando o código postal e o peso especificados). Esse campo deve ser preenchido com um valor decimal.
    * **Valor adicional**: valor percentual do produto que será adicionado para o envio. Por exemplo, se o produto custa R$ 80,00 e o valor adicional é 1 então será somado ao valor final do frete R$ 0,80.<p>A porcentagem cadastrada se refere ao valor cheio do produto (valor do produto sem possíveis descontos). Esse campo deve ser preenchido com um número decimal.Por exemplo para adicionar um percentual de 
23%, você pode preencher o campo com `23` ou `23,00`.</p>
    * **Valor adicional por peso**: valor adicionado para cada unidade acima do limite inferior da faixa de peso. Esse campo deve ser preenchido com um número decimal.
    * **Volume cúbico máximo**: limite de volume aceito pela transportadora. Esse campo deve ser preenchido com um número decimal.
    * **Prazo de entrega**: prazo da transportadora para realização da entrega. Esse campo deve ser preenchido com um número natural.

## Pesquisar

Para consultar as tarifas de envio cadastradas, siga as instruções abaixo:

1. No Admin VTEX, acesse **Envio > Tarifas de envio** ou digite *Tarifas de envio* na barra de busca no topo da página.    
2. Na página **Valores do frete,** preencha o campo **Código postal**;
3. Selecione uma **Política de envio**;
4. Clique no botão `Pesquisar`.

Ficará disponível uma lista com os requisitos da pesquisa. A lista contém as tarifas cadastradas (tanto pela [planilha de frete](https://help.vtex.com/pt/tutorial/planilha-de-frete--tutorials_127) quanto pelas [tarifas de envio](https://help.vtex.com/pt/tutorial/tarifas-de-envio--1Balpg3rv0854udEPedvMM)) e é possível [editar ](#editar)ou [excluir](#excluir) uma tarifa de envio.

## Editar

1. No Admin VTEX, acesse **Envio > Tarifas de envio** ou digite *Tarifas de envio* na barra de busca no topo da página.    
2. Na página **Valores do frete,** preencha o campo **Código postal**.  
3. Selecione uma **Política de envio**.  
4. Clique no botão `Pesquisar`.
5. Na coluna **Ações,** clique no ícone <i class="fas fa-edit"></i>  de edição avançada;
6. Altere os campos desejados.  
7. Clique no botão `Salvar`.

## Excluir

1. No Admin VTEX, acesse **Envio > Tarifas de envio** ou digite *Tarifas de envio* na barra de busca no topo da página.    
3. Na página **Valores do frete,** preencha o campo **Código postal**.  
4. Selecione uma **Política de envio**.  
5. Clique no botão `Pesquisar`.  
6. Na coluna **Ações** clique no `X`.
