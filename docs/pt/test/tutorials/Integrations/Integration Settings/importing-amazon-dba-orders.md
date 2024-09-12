---
title: 'Importação de Pedidos Amazon DBA'
id: 1um6EfKlALGsHzERbH7jig
status: PUBLISHED
createdAt: 2023-02-09T01:51:48.849Z
updatedAt: 2024-08-30T14:32:55.200Z
publishedAt: 2024-08-30T14:32:55.200Z
firstPublishedAt: 2023-02-09T02:16:48.830Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slug: importacao-de-pedidos-amazon-dba
locale: pt
legacySlug: importacao-de-pedidos-amazon-dba
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

>ℹ️ A funcionalidade Importação de Pedidos Amazon DBA está disponível apenas para sellers VTEX Brasil.  

Existem três tipos de configuração logística para atender aos pedidos realizados na Amazon:

  - [Selfship](#Selfship)
  - [FBA Classic, para conhecer sobre o programa e a integração com a VTEX, confira a documentação Importação de Pedidos Amazon FBA Classic](https://help.vtex.com/pt/tutorial/importacao-de-pedidos-amazon-fba-classic--2MJZgBen3hpK4xkXqcv8TO).
  - FBA Onsite, para conhecer sobre o programa e a integração com a VTEX, confira a documentação sobre [Importação de pedidos FBA Onsite](https://help.vtex.com/pt/tutorial/importacao-de-pedidos-amazon-fba-onsite--7gNpMDDchHo29fu3Sbvl1n)
  - [DBA](#DBA-Delivery-by-Amazon)

O Seller pode utilizar o Selfship, FBA e DBA de forma simultânea ou apenas uma das opções logísticas, considerando a elegibilidade dos produtos para os respectivos programas. Independente de optar por utilizar somente uma das opções logísticas ou utilizar dois, ou mais programas, é possível acompanhar e gerenciar todos os pedidos realizados através do Admin VTEX.

## Selfship

_Selfship_ é a estratégia logística onde o seller é responsável por todo o processo de Fulfillment, desde separar o produto até a entrega final do mesmo. Para configurar essa opção, você deve seguir os passos descritos nas etapas [Criar uma política comercial](https://help.vtex.com/pt/tutorial/o-que-e-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE) e [Definir Estratégia de Envio na Amazon](https://help.vtex.com/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/37hdzaRUhJqRfXH1bIRXAa#definicao-da-estrategia-de-envio). 

## DBA (Delivery by Amazon)  

[Delivery by Amazon (DBA)](http://venda.amazon.com/cresca/dba) é um serviço de entrega oferecido pela Amazon. A cada venda finalizada, o seller é o responsável por embalar e imprimir a etiqueta dos produtos, enquanto a Amazon é responsável por entregar os produtos de forma 100% rastreável e com opções de frete grátis.  

Para configurar o DBA, é necessário seguir estas etapas de configuração:  

1. [Configurar DBA na integração Amazon](#configurar-dba-na-integracao-amazon)
2. [Enviar XML NFs](#enviar-xml-nfs)
3. [Download de etiqueta](#download-de-etiqueta)

### 1. Configurar DBA na integração Amazon  

1. Acesse o Admin VTEX. 
2. Em Marketplace, selecione a opção Conexões.  
3. Clique em Configurações.  
4. No card de integração da Amazon, clique na engrenagem e selecione a opção Editar configurações.  
5. Clique em DBA para ativar essa funcionalidade na integração.  
6. Selecione o formato da etiqueta, definida no Seller Central Amazon:  

      - ZPL  
      - PDF  

7. Clique em Salvar.  

Após salvar as configurações, o DBA estará ativo na integração com a Amazon.  

### 2. Enviar XML NFs    

A cada compra finalizada, os pedidos correspondentes ao DBA aparecerão na aba __Pedidos > Todos pedidos__ do Admin VTEX. O sufixo **`_DBA`** aparecerá no ID de cada pedido do programa. Para prosseguir com a entrega, o pedido precisa ser faturado, conforme os passos descritos em [Faturar um pedido > Nota Fiscal](https://help.vtex.com/pt/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/2WgQrlHTyVo4hLjhUs1LMT#nota-fiscal).  

![pedido DBA](https://downloads.ctfassets.net/alneenqid6w5/29NDtLCX5tVW7SzePTvuEG/32ab35230267fe61f772d9c60ea555e8/Pedidos.gif)

### 3. Download de etiqueta  

Quando o status do pedido for Faturado, você poderá solicitar o download da etiqueta seguindo os passos abaixo:  

1. Clique no pedido que deseja.  
2. Vá em __Etiqueta de entrega > Amazon Label__.  
3. Um arquivo em formato PDF será transferido para o seu computador.  

Ao solicitar o download da etiqueta, de maneira automática o agendamento da coleta é realizado. 

