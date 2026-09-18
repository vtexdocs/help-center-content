---
title: 'Definições de arquitetura para o VTEX Sales App'
status: PUBLISHED
createdAt: 2026-09-17T00:00:00.000Z
updatedAt: 2026-09-17T00:00:00.000Z
contentType: tutorial
productTeam: Shopping
slugEN: XXX
locale: pt
---

Antes de configurar o **Sales App**, o sucesso da operação depende de uma base sólida de decisões de negócio antes mesmo da configuração técnica. Este artigo apresenta o roteiro para que diferentes perfis de clientes entendam o que precisam decidir e configurar.

Antes de iniciar a implementação, é importante que sua empresa passe por estas quatro etapas decisórias:

- **Definir os casos de uso do Sales App:** principais situações nas quais o aplicativo será utiizado.
- **Definir a arquitetura técnica:** qual será a estrutura destinada para o **Sales App**, incluindo se existem contas franquias associadas à conta principal, quais políticas comerciais serão utilizadas, quais estoques estarão ativos e quais centros de distribuição (CDs) estarão ativos.
- **Definir a operação de vendas:** definir como os vendedores irão usar o app. Quais serão os níveis de acesso, quais funcionalidades estarão liberadas e como será o plano de treinamento. Um ponto crucial é o modelo de comissionamento para lojas: em operações omnichannel, o engajamento depende de como a venda feita na loja (mas entregue pelo ecommerce) será creditada para motivar a equipe.  
- **Definir as configurações de pagamento:** decida quais bandeiras e tipos de pagamento (PIX, Cartão, Link, Dinheiro) serão aceitos. Lembre-se que isso pode exigir a contratação e homologação de provedores e adquirentes específicos para a operação física.

> ℹ️ Se a arquitetura da sua conta for complexa ou exigir recursos customizados, para obter mais eficiência e garantir a segurança na implementação, considere contratar o time de Professional Services da VTEX.

## Definir os casos de uso do Sales App

Os casos de uso mais frequentes do **Sales App** são:

- Apenas como app para casos de ruptura de estoque.
- Como primeira opção para vendedores checarem o estoque local e remoto e fecharem compras com mobilidade.
- Como única ferramenta da loja física.
- **Atendimento remoto:** vendedores utilizando o app para fechar vendas assistidas via canais digitais.
- **Eventos e Pop-up Stores:** o Sales App é versátil e pode ser levado para onde seu cliente estiver, como vendas rápidas em feiras ou quiosques temporários.

> ℹ️ Se você tem um caso de uso específico ou quer acelerar seu faturamento com vendas assistidas, **abra um ticket no suporte**. Nossa equipe ajudará você a entender como o Sales App pode alavancar o seu negócio.

### Extensibilidade no VTEX Sales App

Avalie se sua operação precisa de **Extensões** (como para programas de fidelidade, serviços adicionais ou formulários customizados). Note que a funcionalidade de extensões pode exigir requisitos específicos de desenvolvimento. Independente do seu caso de uso, é importante ter em mente que para funcionalidades que o Sales App não oferece nativamente, a capacidade de extensões geralmente pode ser a resposta, permitindo que você ou seu parceiro desenvolva módulos em pontos estratégicos da jornada de vendas, para recursos que são cruciais para estratégia. Acesse a documentação de extensões.

## Definir a arquitetura técnica

O **Sales App** possui XXX de funcionalidades. Os pré-requisitos e recomendações para cada um dos principais casos de uso do VTEX Sales App em sua estratégia de [Comércio Unificado](/pt/docs/tracks/comercio-unificado-101) estão descritos abaixo.

### Prateleira Infinita

A [Prateleira Infinita](https://help.vtex.com/pt/docs/tracks/prateleira-infinita) permite aos seus clientes acesso completo ao seu inventário, integrado entre todos os canais de venda. Ou seja, se um cliente estiver em uma loja física, ele poderá comprar um produto do estoque de outras lojas físicas ou ecommerce, e a entrega pode ser realizada a partir de qualquer um dos estoques.

- **Público alvo:** empresas que buscam vendas incrementais, evitando a ruptura de estoque local ao oferecer o catálogo do ecommerce.
- **O que decidir:** modelo de estoques e arquitetura de lojas, se haverá ou não contas franquias e pontos de retirada.
- **Requisitos:** não possui requisitos específicos, basta ter o **Sales App** instalado na conta principal.

#### Configuração técnica da Prateleira Infinita

A Prateleira Infinita pode ser implementada em lojas que tenham ou não arquitetura multicanal (Omnichannel), contas franquia e multiestoque (lojas físicas como estoques). As orientaçõe para cada caso são:

- **Sem [arquitetura multicanal (Omnichannel)](https://help.vtex.com/pt/docs/tracks/comercio-unificado-101):** configure o **Sales App** na conta principal usando as mesmas políticas comerciais e estoques do ecommerce.  
- **Com arquitetura multicanal (Omnichannel) e multiestoque:** cadastre cada loja física como um estoque na conta principal. Recomendado para quem não precisa de gestão separada de preços por loja.
  - **Com contas franquia:** crie [contas franquia](https://help.vtex.com/pt/docs/tutorials/o-que-e-conta-franquia) para cada loja, elas possuem obrigatoriamente o mesmo catálogo da conta principal, mas podem ter configurações de logística próprias.

### Ship from Store e e carrinhos mistos (Carry Out)

O [Ship From Store](https://help.vtex.com/pt/docs/tracks/configurar-ship-from-store) permite que o cliente receba pedidos com produtos que vieram do estoque da loja física, ou seja, a loja funciona como um pequeno centro de distribuição. Além disso, você pode associar essa estratégia à opção de carrinhos mistos (Carry Out), quando uma venda contém tanto itens para retirada em loja na hora da compra, quanto itens a serem entregues na casa do cliente.

- **Público alvo:** lojas físicas que desejam vender produtos do estoque local, que querem habilitar compra do tipo "leve agora" e que desejam combinar em um mesmo pedido itens para entrega e retirada.
- **O que decidir:** como será feita a integração com o ERP para garantir que o inventário da loja esteja sempre atualizado?

**Configuração:** Exige arquitetura de **Conta Franquia** para vincular o estoque local ao ponto de retirada, além de integração em tempo real com o ERP para inventário e emissão de nota fiscal (NFC-e).

**Configuração Técnica:**

* **Arquitetura de Franquia:** Essencial para vincular a loja ao ponto de retirada e ao estoque local.  
* **Vínculo Logístico:** Configure o ponto de retirada com o endereço da loja e ative o estoque para "instore".  
* **Faturamento:** Integre com o sistema de Nota Fiscal (NFC-e/SAT) via PDV ou ERP para permitir a saída imediata do produto, por meio do protocolo de integração.
* **Conciliação:** Ajuste sistêmico e operacional para garantir o fluxo correto de faturamento de acordo com suas definições junto ao financeiro.

O [Ship from Store](/pt/docs/tracks/configurar-ship-from-store) transforma suas lojas físicas em pequenos centros de distribuição. Com esse recurso, você pode enviar produtos a partir do estoque de uma loja, mesmo que eles não tenham sido comprados lá.

Os [Pontos de retirada](/pt/docs/tracks/configurar-lojas-fisicas-como-pontos-de-retirada) ou pickup points são locais onde o cliente tem a opção de retirar por conta própria o seu pedido. As lojas físicas da sua rede, por exemplo, podem funcionar como pontos de retirada.

Os pré-requisitos para implementar essas estratégias são todos os itens descritos nos tópicos anteriores.

### C. Ferramenta Única de Venda (POS-like)

**Para quem é:** Operações que desejam substituir o PDV tradicional pelo Sales App para 100% das vendas.

* **Configuração:** Camada de integração com o ecossistema para módulos adicionais para loja física como gestão de caixa (sangrias, fechamento), relatórios de conciliação e fluxos avançados de troca e devolução por meio de pontos de extensão e integrações  
* **O que decidir:** Quais módulos são necessários e quais parceiros do ecossistema serão utilizado?  
* **Configuração Técnica mais comum :**  
  * **Módulos de Gestão:** Implementar camadas de *Cash Management* (sangrias, suprimentos e fechamento de turno).  
  * **Pós-Venda:** Configurar módulos de troca e devolução integrados ao OMS e ERP para reorquestração de estoque.  
  * Mapeamento de mais requisitos irão variar de acordo com o projeto de cada cliente&nbsp;

**Extensões:** Se você possui casos como venda de serviços adicionais, programas de fidelidade, ou quer trazer alguma informação da sua operação para dentro da jornada do Sales App, considere o uso de Extensões \[Link\], permitindo que seu time ou parceiros desenvolvam módulos específicos integrados à jornada.&nbsp;

## Definir a operação de vendas

1. Para acompanhar a performance das vendas de cada colaborador e loja, você pode:  
   1. Acompanhar pelo próprio Sales App, ativando a performance de vendas e recomendando ao seus colaboradores acompanhem pelo próprio app suas métricas básica  
   2. Utilize os campos no pedido \[link\] para integrar os pedidos com seus sistemas internos e cálculo de comissionamento.&nbsp;  
2. Defina com as áreas internas, lojas próprias e franquias como será o comissionamento pelas vendas omni e como elas entrarão nas metas e repasse de lojas, franquias, gerentes e vendedores.&nbsp;  
   1. Essa definição não impacta na configuração na VTEX ou nas capacidades oferecidas pelo Sales App, mas ter uma definição clara é essencial tanto para o setup correto de sua operação, modelo de repasse e também impacta no engajamento do time com a plataforma&nbsp;  
3. Defina como será o uso da plataforma nas lojas e pelos vendedores: Uso no mobile ou no desktop, um login único por loja ou por usuário?&nbsp;  
   1. De acordo com essas definições registre os usuários e lojas de acordo com a definição e registro o formato do código do vendedor, decidindo se é opcional ou obrigatório no fluxo.&nbsp;  
4. Defina o que vendedores podem fazer com o Sales App em mãos. Existem configurações que você pode habilitar/desabilitar durante o uso do app. Cada uma delas possui uma forma de ativação diferente, mas que podem ajudar na sua operação, essa configurações como:  
   1. Aplicar preço manual  
   2. Forçar estoque local  
   3. Cancelar pedido  
   4. Visualizar a sua performance de vendas  
   5. Visualizar a performance de vendas dos demais vendedores

## Definir as configurações de pagamento

Antes de instalar o Sales App, você precisa definir os métodos de pagamentos que irá habilitar no seu fluxo. Importante que parte desses fluxos;  

   1. Irá operar com social selling / link compartilhado?&nbsp;  
      1. Esse método utiliza o checkout do seu ecommerce e deve ser configurado seguindo o tutorial \[link\]  
   2. Irá operar com PIX?  
      1. Esse método usará o mesmo gateway do ecommerce.&nbsp;  
   3. Irá operar com dinheiro?  
      1. Controle de pagamentos por fora da solução, utilizando promissória como método.  
   4. Pagamentos com adquirentes já homologados  
      1. Necessário contratação do parceiro disponível na sua região , configuração das máquinas, configuração do provedor na sua conta principal, e testes&nbsp;  
   5. Pagamentos não integrados, com promissória.  
      1. Exige integração com sistema externos (PDVs, ERPs) para receber a confirmação do pagamento&nbsp;&nbsp;  
         1. Quando usar: casos de cartão private label, métodos de pagamentos já consolidados na sua loja. Esse modelo está em Closed Beta. Para saber mais procure o time de Sales App.&nbsp;

__________________________________________________________________________________________________________________________

### VTEX Sales App integrado ao PDV

Esse é o recurso que permite usar o VTEX Sales App [integrado aos pontos de venda](/pt/tracks/estrategias-de-comercio-unificado--3WGDRRhc3vf1MJb9zGncnv/5XWo7q35jkDDq3PxUs1EVi) de suas lojas físicas.

Pré-requisitos para implementar a integração entre o VTEX Sales App e o PDV:

- Todos os pré-requisitos descritos nos tópicos anteriores, inclusive os de [Prateleira Infinita](#prateleira-infinita), [Ship from Store e Pontos de retirada](#ship-from-store-e-pontos-de-retirada).
- Integração com um sistema de Nota Fiscal, conforme descrito em [Faturamento](#faturamento).

## Recomendações gerais

- Ativar o módulo **Checkout v6**. Leia o artigo [Como ativar o Checkout v6](/pt/docs/tutorials/ativar-o-checkout-v6) para mais informações.
- Preços: recomendamos que suas lojas físicas herdem os preços do ecommerce. No entanto, se você optar por ter preços diferenciados, considere os requisitos e observações abaixo.
  - É necessário envolver uma agência parceira para regionalizar o catálogo.
  - Isso pode impactar as ferramentas de comparação de preços, pois eles recebem apenas um valor.
  - Isso pode impactar nas vendas em marketplaces, pois eles também recebem apenas um valor.
