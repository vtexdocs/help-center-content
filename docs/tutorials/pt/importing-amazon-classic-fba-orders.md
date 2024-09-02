---
title: 'Importação de Pedidos Amazon FBA Classic '
id: 2MJZgBen3hpK4xkXqcv8TO
status: PUBLISHED
createdAt: 2022-10-07T21:33:29.864Z
updatedAt: 2024-08-30T14:31:51.101Z
publishedAt: 2024-08-30T14:31:51.101Z
firstPublishedAt: 2022-10-07T21:52:55.581Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slug: importacao-de-pedidos-amazon-fba-classic
locale: pt
legacySlug: importacao-de-pedidos-amazon-fba-classic
subcategory: 4uqMnZjwBO04uWgCom8QiA
---

Existem três tipos de configuração logística para atender aos pedidos realizados na Amazon:

  - [Selfship](#Selfship)
  - [FBA Classic](#FBA-Classic-Fulfillment-by-Amazon)
  - FBA Onsite, para conhecer sobre o programa e a integração com a VTEX, confira a documentação sobre [Importação de pedidos FBA Onsite](https://help.vtex.com/pt/tutorial/importacao-de-pedidos-amazon-fba-onsite--7gNpMDDchHo29fu3Sbvl1n)  
  - [DBA, para conhecer sobre o programa e a integração com a VTEX, confira a documentação Importação de Pedidos Amazon DBA](https://help.vtex.com/pt/tutorial/importacao-de-pedidos-amazon-dba--1um6EfKlALGsHzERbH7jig)  

O Seller pode utilizar o Selfship, FBA e DBA de forma simultânea ou apenas uma das opções logísticas, considerando a elegibilidade dos produtos para os respectivos programas. Independente de optar por utilizar somente uma das opções logísticas ou utilizar dois, ou mais programas, é possível acompanhar e gerenciar todos os pedidos realizados através do Admin VTEX.

## Selfship

_Selfship_ é a estratégia logística onde o seller é responsável por todo o processo de Fulfillment, desde separar o produto até a entrega final do mesmo. Para configurar essa opção, você deve seguir os passos descritos nas etapas [Criar uma política comercial](https://help.vtex.com/pt/tutorial/o-que-e-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE) e [Definir Estratégia de Envio na Amazon](https://help.vtex.com/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/37hdzaRUhJqRfXH1bIRXAa#definicao-da-estrategia-de-envio). 

## FBA Classic (Fulfillment by Amazon)

O [FBA (Fulfillment by Amazon), ou FBA Classic](https://venda.amazon.com.br/cresca/fba), é um serviço logístico oferecido pela Amazon no qual o estoque e o envio de produtos ao consumidor final ficam sob responsabilidade da Amazon. Cada vez que uma venda é finalizada, os produtos comprados são separados, empacotados e enviados dentro de 24 horas.

É possível configurar esse serviço na sua loja através da criação de um estoque exclusivo e uma especificação de produto para pedidos FBA Classic. 

Veja a seguir as etapas necessárias para ativar esse serviço na integração com a VTEX:

1. [Criar especificação de produto](#criar-especificacao-de-produto)
2. [Definir Estratégia de Envio para Pedidos FBA Classic](#definir-estrategia-de-envio-para-pedidos-fba-classic)
3. [Configurar FBA Classic na integração da Amazon](#configurar-fba-classic-na-integracao-da-amazon)

### 1. Criar especificação de produto

O primeiro passo para configurar seus produtos FBA Classic é [Cadastrar uma especificação de produto](https://help.vtex.com/pt/tutorial/cadastrar-especificacoes-ou-campos-de-produto--tutorials_106) chamada **`AMAZON_CHANNEL`**. Dessa forma, você sinaliza à Amazon o tipo de envio do produto.

Ao cadastrar um [tipo de campo de produto](https://help.vtex.com/pt/tutorial/cadastrar-especificacoes-ou-campos-de-produto--tutorials_106#tipos-de-campo-de-produto), selecionar o tipo __Radio__. Os valores que deverão ser preenchidos vão variar conforme a segmentação dos produtos:

- **MFN:** valor correspondente aos produtos que serão entregues sob a responsabilidade do seller. Válido para o programa Selfship ou DBA.

- **AFN:** valor correspondente aos produtos que serão entregues sob a responsabilidade da Amazon.

Após criar a especificação de produto, seu produto estará ativo para os pedidos FBA Classic. Caso queira modificar o tipo de envio desse mesmo produto, bastará modificar o valor da especificação.

### 2. Definir Estratégia de Envio para Pedidos FBA Classic

<div class = "alert alert-info">
É importante assegurar que a política comercial utilizada é específica para a Amazon. Dessa forma, você garante que o estoque criado não será utilizado por outra integração.
</div>

Para dar continuidade à configuração, é preciso determinar uma [Estratégia de Envio](https://help.vtex.com/pt/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3) exclusiva para o FBA Classic, ou seja, informar qual será a operação de entrega de seus produtos. Dessa forma, você não influenciará na estratégia de envio já definida na etapa Definir Estratégia de Envio na Amazon.

Para criar uma Estratégia de Envio específica, é necessário realizar os seguintes passos:

1. Crie uma [Política de envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140#cadastrar-uma-politica-de-envio) associada à política comercial usada na integração da Amazon.
2. Crie uma [Doca](https://help.vtex.com/pt/tutorial/como-cadastrar-doca--7K3FultD8I2cuuA6iyGEiW) associada à política comercial usada na integração da Amazon.
3. Crie um [Estoque](https://help.vtex.com/pt/tutorial/gerenciar-estoque--tutorials_137) associado à Doca criada no passo anterior.
4. Acesse a página [Gerenciar Inventário](https://help.vtex.com/pt/tutorial/managing-stock-items--tutorials_139), localize o estoque criado no passo anterior e ative o campo **Estoque Infinito.**

### 3. Configurar FBA Classic na integração da Amazon

Para finalizar a configuração, siga os passos abaixo:

  1. Acesse o Admin VTEX.
  2. Em *Marketplace*, selecione a opção **Integrações**.
  3. Clique em **Configurações**.
  4. No card de integração da Amazon, clique na engrenagem <i class="fas fa-cog"></i> e selecione a opção `Editar configurações`.
  5. Clique em `FBA Classic` <i class="fas fa-toggle-on"></i> para ativar essa funcionalidade na integração.
  6. Preencha o campo `ID da Doca` com o ID da doca criada exclusivamente para o FBA Classic.
  7. Clique em `Salvar`.

Após salvar as configurações, o FBA Classic estará ativo na integração com a Amazon e todos os pedidos de compras realizadas aparecerão no Admin VTEX com o sufixo *`_FBA`*.
