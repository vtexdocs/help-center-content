---
title: 'Importação de Pedidos Amazon FBA Onsite'
id: 7gNpMDDchHo29fu3Sbvl1n
status: PUBLISHED
createdAt: 2024-08-30T13:13:15.945Z
updatedAt: 2024-08-30T14:25:39.575Z
publishedAt: 2024-08-30T14:25:39.575Z
firstPublishedAt: 2024-08-30T13:59:25.499Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: importing-amazon-fba-onsite-orders
legacySlug: importacao-de-pedidos-amazon-fba-onsite
locale: pt
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

Existem quatro tipos de configuração logística para atender aos pedidos realizados na Amazon:  

- [Selfship](#selfship)  
- [FBA Onsite](#fba-onsite)  
- FBA Classic, para conhecer sobre o programa e a integração com a VTEX, confira a documentação [Importação de Pedidos Amazon FBA Classic](https://help.vtex.com/pt/tutorial/importacao-de-pedidos-amazon-fba-classic--2MJZgBen3hpK4xkXqcv8TO)  
- DBA, para conhecer sobre o programa e a integração com a VTEX, confira a documentação [Importação de Pedidos Amazon DBA](https://help.vtex.com/pt/tutorial/importacao-de-pedidos-amazon-dba--1um6EfKlALGsHzERbH7jig)  

O Seller pode utilizar o Selfship, FBA Onsite, FBA Classic e DBA de forma simultânea ou apenas uma das opções logísticas, considerando a elegibilidade dos produtos para os respectivos programas. Independente de optar por utilizar somente uma das opções logísticas ou utilizar dois, ou mais programas, é possível acompanhar e gerenciar todos os pedidos realizados através do Admin VTEX.  

## Selfship

_Selfship_ é a estratégia logística onde o seller é responsável por todo o processo de Fulfillment, desde separar o produto até a entrega final do mesmo. Para configurar essa opção, você deve seguir os passos descritos nas etapas [Criar uma política comercial](https://help.vtex.com/pt/tutorial/o-que-e-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE) e [Definir Estratégia de Envio na Amazon](https://help.vtex.com/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/37hdzaRUhJqRfXH1bIRXAa#definicao-da-estrategia-de-envio).  

## FBA Onsite (Fulfillment by Amazon)

O [FBA (Fulfillment by Amazon Onsite), ou FBA Onsite](https://venda.amazon.com.br/cresca/fba-onsite), é um serviço logístico oferecido pela Amazon no qual o envio de produtos ao consumidor final fica sob responsabilidade da Amazon.  

Cada vez que uma venda é finalizada, o seller é responsável pelo preparo do produto para envio e a Amazon é responsável pela retirada do mesmo no centro de distribuição do seller, entrega e pós-venda.  

Veja a seguir as etapas necessárias para ativar esse serviço na integração com a VTEX:  

1. [Criar especificação de produto](#criar-especificacao-de-produto)  
2. [Definir Estratégia de Envio para Pedidos FBA Onsite](#definir-estrategia-de-envio-para-pedidos-fba-onsite)  
3. [Configurar FBA Onsite na integração da Amazon](#configurar-fba-onsite-na-integracao-da-amazon)  

### 1. Criar especificação de produto

O primeiro passo para configurar seus produtos FBA Onsite é [cadastrar uma especificação de produto](https://help.vtex.com/pt/tutorial/cadastrar-especificacoes-ou-campos-de-produto--tutorials_106) chamada **AMAZON_CHANNEL**. Dessa forma, você sinaliza à Amazon o tipo de envio do produto.
Os valores que deverão ser preenchidos vão variar conforme a segmentação dos produtos:  

- **MFN:** valor correspondente aos produtos que serão entregues sob a responsabilidade do seller. Válido para o programa Selfship ou DBA.  
- **AFN:** valor correspondente aos produtos que serão entregues sob a responsabilidade da Amazon, FBA Classic ou FBA Onsite.  

Após criar a especificação de produto, seu produto estará ativo para os pedidos FBA Onsite. Caso queira modificar o tipo de envio desse mesmo produto, bastará modificar o valor da especificação.  

### 2. Definir Estratégia de Envio para Pedidos FBA Onsite

<div class="alert alert-info">
É importante assegurar que a <a href=”https://help.vtex.com/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV”>política comercial</a> utilizada é específica para a Amazon. Dessa forma, você garante que o estoque criado não será utilizado por outra integração.
</div>  

Para dar continuidade à configuração, é preciso determinar uma [Estratégia de Envio](https://help.vtex.com/pt/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3) exclusiva para o FBA Onsite, ou seja, informar qual será a operação de entrega de seus produtos.  

Para criar uma Estratégia de Envio específica, é necessário realizar os seguintes passos:  

1. Crie uma [Política de envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140#cadastrar-uma-politica-de-envio) associada à política comercial usada na integração da Amazon.  
2. Crie uma [Doca](https://help.vtex.com/pt/tutorial/como-cadastrar-doca--7K3FultD8I2cuuA6iyGEiW) associada à política comercial usada na integração da Amazon.  
3. Crie um [Estoque](https://help.vtex.com/pt/tutorial/gerenciar-estoque--tutorials_137) associado à Doca criada no passo anterior.  
4. Acesse a página [Gerenciar Inventário](https://help.vtex.com/pt/tutorial/managing-stock-items--tutorials_139), localize o estoque criado no passo anterior e ative o campo **Estoque Infinito.**  

### 3. Configurar FBA Onsite na integração da Amazon

Para finalizar a configuração, siga os passos abaixo:  

1. No Admin VTEX vá em **Marketplace > Marketplaces e integrações.**  
2. Busque a integração **Amazon** e clique para abrir a página de configuração.  
3. Clique em **Editar.**  
4. Clique em FBA Onsite para ativar essa funcionalidade na integração.  
5. Preencha o campo ID da Doca com o ID da doca criada exclusivamente para o FBA Onsite.  
6. Clique em `Salvar`.  

Após salvar as configurações, o FBA Onsite estará ativo na integração com a Amazon e todos os pedidos de compras realizadas aparecerão no Admin VTEX com o sufixo **_FBAOS**.
