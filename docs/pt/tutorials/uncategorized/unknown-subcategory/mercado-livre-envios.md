---
title: 'Mercado Livre Envios'
id: 4fbF0Glf0R2YUCxYof4aIL
status: PUBLISHED
createdAt: 2025-09-29T19:29:40.317Z
updatedAt: 2025-09-29T19:55:28.724Z
publishedAt: 2025-09-29T19:55:28.724Z
firstPublishedAt: 2025-09-29T19:55:28.724Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: mercado-libre-envios
legacySlug: mercado-livre-envios
locale: pt
subcategoryId: 
---

A integração com o Mercado Livre disponibiliza alguns modelos logísticos que permitem entregas rápidas utilizando a infraestrutura própria do vendedor ou de parceiros. As modalidades são, [**Envios Flex**](#envios-flex) e [**Envios Turbo**](#envios-turbo).
Ambas as modalidades podem ser configuradas e gerenciadas pela interface do Admin VTEX, em **Admin VTEX > Marketplace > Mercado Livre > Preferências > Logística.**

> ℹ️ O Mercado Livre é quem define quais vendedores e quais os anúncios destes vendedores estão elegíveis para utilizar os modelos de envio **Flex** e **Turbo.** 

## Envios Flex

O **Envios Flex** é a modalidade em que o prazo de entrega da compra é no **mesmo dia.** Ou seja, pedidos realizados até o horário de corte que foi definido pelo vendedor, chegam no mesmo dia ao comprador. Essa modalidade funciona apenas em zonas urbanas específicas, calculadas com base no endereço do seu estoque. 

### Ativar Envios Flex 

Para ativar essa modalidade de envio, siga os passos abaixo:

1. No Admin VTEX vá em **Marketplace > Mercado Livre > Preferências > Logística > Envios Flex.**  
2. Clique em **Janelas de entrega.**  
3. Escolha entre as opções **Entrega no mesmo dia** ou **Entrega no dia seguinte.**  
4. Configure as seguintes informações:  
 - Dias de entrega  
 - Intervalo de horário de envios  
 - Capacidade máxima de envios  
 - Horário de corte
5. Clique no botão `Salvar`.  
6. Na guia **Área de cobertura** selecione as regiões que deseja atender com o **Envios Flex.**  
7. Clique no botão `Salvar`.  

### Configurações adicionais

Para que a modalidade **Envios Flex** funcione corretamente, o vendedor deve seguir os seguintes passos após a [ativação](#ativar-envios-flex):  

1. Criar um [campo personalizado](/pt/tutorial/cadastrar-especificacoes-ou-campos-de-produto--tutorials_106) no módulo [Categorias](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2gkZDjXRqfsq62TlAkj4uf), para cada categoria que o vendedor deseja aplicar o **Envio Flex**.  O campo deve ser criado com as seguintes especificações:  

| **Tipo do campo** | **Nome do campo** |**Valor do campo**|
|:---:|:---:|:---:|
| CheckBox | Flex |Ativar|

> ❗ O **tipo** e o **nome** devem ser exatamente como apresentado na tabela acima, caso contrário o modelo de envio não funcionará. 

2. Após criar o campo, o vendedor deve ativá-lo em cada produto elegível para o modelo de envio.

#### Desativar Envios Flex

Para desativar a modalidade **Envios Flex** siga os passos a seguir:

1. No Admin VTEX vá em **Marketplace > Mercado Livre > Preferências > Logística > Envios Flex.**  
2. Clique no menu de ações <i class="fas fa-ellipsis-v" aria-hidden="true"></i>.
3. Clique na opção **Desativar Envios Flex.**  
4. No pop-up que aparece na tela, clique no botão `Continuar para o Mercado Livre`.  
5. Na central do vendedor do Mercado Livre, desative a opção de envio.  
## Envios Turbo

O **Envios Turbo** é uma extensão do **Envios Flex,** portanto esta modalidade de envio só funcionará se o [**Envios Flex**](#envios-flex) estiver ativo. Essa é uma modalidade de entregas **ultrarrápidas,** onde o pedido é entregue em até **três horas** após a compra. Essa modalidade funciona apenas em um raio de até oito quilômetros calculados com base no endereço do seu estoque.  

O **Envios Turbo** só é aplicável a produtos com as seguintes características:

| **Altura** | **Largura** |**Comprimento**|**Peso**|
|:---:|:---:|:---:|:---:|
| 70 centímetros | 70 centímetros |70 centímetros|30 quilos|

### Configurar Envios Turbo

Para configurar a modalidade **Envios Turbo** o vendedor deve seguir os seguintes passos:

1. Configurar **Intervalo de entrega** selecionando ao menos três intervalos de horários para os envios.  
2. Configurar **Raio de cobertura.**  

> ℹ️ Os intervalos apresentados na tela de configuração são fixos e não podem ser customizados.

#### Ativar Envios Turbo 

Para ativar essa modalidade de envio, siga os passos abaixo:

1. No Admin VTEX vá em **Marketplace > Mercado Livre > Preferências > Logística > Envios Turbo.**  
2. Clique em **Janelas de entrega.**  
3. Selecione os intervalos de horário para envio.  
4. Defina o número **Máximo de envios.**  
5. Clique no botão `Salvar`.  
6. Na guia **Raio de cobertura** selecione qual o raio de distância deseja atender com o **Envios Turbo.**  
7. Clique no botão `Salvar`.  

#### Desativar Envios Turbo

Para desativar a modalidade **Envios Turbo** siga os passos a seguir:

1. No Admin VTEX vá em **Marketplace > Mercado Livre > Preferências > Logística > Envios Turbo.**  
2. Clique no menu de ações <i class="fas fa-ellipsis-v" aria-hidden="true"></i>.
3. Clique na opção **Desativar Envios Turbo.**
4. No pop-up que aparece na tela, clique no botão `Continuar para o Mercado Livre`. 
5. Na central do vendedor do Mercado Livre, desative a opção de envio.  
