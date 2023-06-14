---
title: Como configurar Assinatura
id: 5BprgE9RwKPcfBMYoaWZu4
status: DRAFT
createdAt: 2019-01-28T19:22:39.047Z
updatedAt: 2021-04-30T14:37:54.626Z
publishedAt: 
firstPublishedAt: 2019-01-28T19:23:44.020Z
contentType: tutorial
productTeam: Post-purchase
author: authors_61
slug: configurando-a-recorrencia-de-pedidos
legacySlug: configurando-a-recorrencia-de-pedidos
subcategory: 1rA9wuuskW3PpjvMrhatAM
---

A venda recorrente é uma excelente oportunidade para aumentar a receita da loja por meio da fidelização do cliente, permitindo a criação de pedidos automáticos programados de acordo com a necessidade de consumo.

O objetivo desse artigo é explicar passo a passo como realizar a configuração do sistema de recorrência.

Além da forma de pagamento __Cartão de Crédito__, a sua loja precisa apenas ter um "anexo especial" para suportar os pedidos de SKUs recorrentes.

## Como configurar o anexo

1. Acesse __Catálogo__
2. Clique em **Anexos**
3. Em __Serviços e SKU__, clique em **Novo anexo**
4. Cadastre o anexo __Recorrência__
5. Marque a flag de __Status__ e salve o anexo.
6. Depois de criar, na mesma página, clique no botão __Alterar__ e edite o anexo com o __Nome da chave__ = "Período". Depois defina os __Valores Permitidos__ de acordo com as frequências disponíveis.

### Valores disponíveis

Os pedidos recorrentes estão disponíveis em valores que podem ser:

- Diária
- Diário 
- Semanal
- Quinzenal
- Mensal
- Bimestral
- Trimestral
- Semestral
- Anual

## Como habilitar um produto para recorrência

1. Em **Catálago**, acesse **Produtos e SKUs**
2. Selecione o **SKU** que deseja habilitar para recorrência.
3. Acesse a aba **Configurações avançadas**.
4. Associe o anexo de **Recorrência** e clique em **salvar**.

## Como gerar o pedido recorrente

Ao adicionar um produto habilitado para recorrência no checkout, o cliente seleciona a frequência dos itens que deseja receber recorrentemente e fecha o pedido normalmente, selecionando o meio de pagamento **Cartão de Crédito**.

<div class="alert alert-warning">
A recorrência apenas será ativada quando o meio de pagamento for Cartão de Crédito.
</div>

Depois do período de tempo escolhido, o sistema automaticamente gera o pedido. Após a aprovação do pagamento, a recorrência será ativada.

*O lojista deverá entrar em contato com o adquirente para habilitar pagamentos recorrentes.*

## Meio de pagamento do pedido recorrente

O pedido com recorrência deve ser pago com cartão de crédito.
Será possivel utilizar com __qualquer gateway que aceite transacionar sem CVV__. Entre em contato com o seu gateway de pagamentos para garantir que ele possa realizar transações sem CVV.

[Entenda melhor como configurar um gateway de pagamento na sua loja.](/pt/tutorial/pci-gateway-visao-geral/)

## E-mails transacionais do pedido recorrente

Em **Central de mensagem** é possível configurar os e-mails relacionados com a recorrência.

| Recorrência – New     | Quando uma recorrência é criada     |
| ---------- | ---------- |
| Recorrência – Next Order       | Lembrete do próximo pedido       |
| Recorrência – Cancel	       | Quando uma recorrência é cancelada (removida)       |
| Recorrência – Error	       | Quando acontece algum erro no fechamento do pedido\*       |
| Recorrência – Stop	       | Quando um recorrência é “congelada”       |
| Recorrência – Approved	       | Avisa que é preciso revisar a captura de um pagamento       |
| Recorrência – Edit	       | Quando uma recorrência é alterada (item adicionado/removido)       |
| Recorrência – Item Unavailable	       | Quando um item não está disponível no momento em que o pedido recorrente for gerado       |

*O pedido deste ciclo não é criado, contudo a recorrência não é cancelada.*

[Entenda melhor como configurar os templates de e-mails transacionais na plataforma VTEX.](/pt/tutorial/conhecendo-o-message-center/)

## Como visualizar as assinaturas para recorrência de produto

As assinaturas contratadas ficam disponíveis no **Gerenciamento de pedidos**, na aba **Assinaturas**.

A recorrência será gerada após a confirmação de pagamento do pedido com o produto recorrente.
