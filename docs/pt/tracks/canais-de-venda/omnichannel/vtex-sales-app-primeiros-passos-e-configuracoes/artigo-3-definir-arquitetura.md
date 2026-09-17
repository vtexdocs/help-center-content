---
title: 'Definições da arquitetura da operação'
status: PUBLISHED
createdAt: 2026-09-17T00:00:00.000Z
updatedAt: 2026-09-17T00:00:00.000Z
contentType: trackArticle
productTeam: Shopping
slugEN: XXXXXX
locale: pt
trackSlugEN: vtex-sales-app-getting-started-and-setting-up
order: 3
---

Referência na doc da arquitetura:

- Defina sua arquitetura e operação
- Defina sua implantação
- Verifique se possui os requisitos de configuração
  - Ter conta franquia (Biba: "Não é mandatório, mas é indicada a depender da arquitetura - pensar melhor em quando apresentar")
  - Configuração omnichannel
  - Configuração de estoques

Links da planilha da Biba:

- Contas franquia: SERÁ ARQUIVADO`https://help.vtex.com/pt/docs/tracks/criar-contas-franquias` / LINKAR AO INVÉS PARA `https://help.vtex.com/pt/docs/tutorials/o-que-e-conta-franquia`
- Omnichannel: `https://help.vtex.com/pt/docs/tracks/comercio-unificado-101`
- Delivery: `https://help.vtex.com/pt/docs/tracks/delivery`
- Ship From Store: `https://help.vtex.com/pt/docs/tracks/configurar-ship-from-store`
- Lojas físicas como pontos de retirada: `https://help.vtex.com/pt/docs/tracks/configurar-lojas-fisicas-como-pontos-de-retirada`

## TEXTO DA BIBA - Definições Fundamentais de Projeto

`https://docs.google.com/document/d/1_NfEwrVMQltM1E9JvyU9z0QrCQOs6CNI6VIUWnAGH3M/edit?tab=t.0`

Antes de configurar o **Sales App**, o sucesso da operação depende de uma base sólida de decisões de negócio antes mesmo da configuração técnica. Este artigo apresenta o roteiro para que diferentes perfis de clientes entendam o que precisam decidir e configurar.

## Definições Fundamentais de Projeto

Antes de iniciar a implementação, sua empresa precisa passar por estas quatro etapas decisórias:

1. **Casos de uso:** Em que situações o Sales App será utiizado?
2. **Definições de Negócio (Arquitetura):** Determine como será sua estrutura de lojas e estoques. Isso inclui definir o uso de contas franquia, centros de distribuição (CDs) e quais estoques estarão ativos para o Sales App. Defina também qual será a política comercial em uso e se haverá oferta de produtos de marketplace (3P). É vital estabelecer quais estoques ficarão disponíveis para o vendedor e configurá-los corretamente.  
3. **Definições de Operação (Engajamento):** Como os vendedores irão usar o app? Defina os níveis de acesso, quais funcionalidades estarão liberadas e como será o plano de treinamento. Um ponto crucial é o modelo de comissionamento para lojas: em operações omnichannel, o engajamento depende de como a venda feita na loja (mas entregue pelo e-commerce) será creditada para motivar a equipe.  
4. **Definições de Pagamento:** Decida quais bandeiras e tipos de pagamento (PIX, Cartão, Link, Dinheiro) serão aceitos. Lembre-se que isso pode exigir a contratação e homologação de provedores e adquirentes específicos para a operação física.

**Suporte Especializado:** Se a sua arquitetura for complexa ou exigir recursos customizados, não hesite em acionar o time de **Professional Services da VTEX** para garantir a segurança e eficiência da implementação.

### Casos de uso

Definir como quer usar o Sales App é crucial para o próximo passo. Os casos de uso mais frequentes são:

- Apenas como app para casos de ruptura de estoque.
- Como primeira opção para vendedores checarem o estoque local e remoto e fecharem compras com mobilidade.
- Como única ferramenta da loja física.
- **Atendimento remoto:** vendedores utilizando o app para fechar vendas assistidas via canais digitais.
- **Eventos e Pop-up Stores:** o Sales App é versátil e pode ser levado para onde seu cliente estiver, como vendas rápidas em feiras ou quiosques temporários.

> ℹ️ Certifique-se de seguir o **Playbook para Eventos** da VTEX para evitar surpresas operacionais.  

Avalie se sua operação precisa de **Extensões** (como para programas de fidelidade, serviços adicionais ou formulários customizados). Note que a funcionalidade de extensões pode exigir requisitos específicos de desenvolvimento. Independente do seu caso de uso, é importante ter em mente que para funcionalidades que o Sales App não oferece nativamente, a capacidade de extensões geralmente pode ser a resposta, permitindo que você ou seu parceiro desenvolva módulos em pontos estratégicos da jornada de vendas, para recursos que são cruciais para estratégia. Acesse a documentação de extensões.

### Definição de arquitetura Técnica

#### A. Prateleira Infinita (Endless Aisle)

**Para quem é:** Empresas que buscam vendas incrementais, evitando a ruptura de estoque local ao oferecer o catálogo do e-commerce.

**O que decidir:** Modelo de estoques e arquitetura de lojas, franquias e retirada.

**Configuração:** Pode ser implementada sem Omni (conta principal), com Multiestoque (lojas como warehouses) ou com Contas Franquia (gestão logística independente).

**Configuração Técnica:**

* **Sem Omni:** Configure o Sales App na conta principal usando as mesmas políticas comerciais e estoques do e-commerce.  
* **Com Omni (Multiestoque):** Cadastre cada loja física como um *warehouse* (estoque) na conta principal. Recomendado para quem não precisa de gestão separada de preços por loja.  
* **Com Conta Franquia:** Crie contas franquia para cada loja. Elas herdam o catálogo, mas possuem gestão própria de logística.

#### B. Estoque Local e Carrinhos Mistos (Carry Out)

**Para quem é:** Lojas que já possuem o ship from store habilitado ou que  querem permitir que o cliente "leve agora" o produto ou misture itens de retirada e entrega no mesmo pedido.

**O que decidir:** Como será feita a integração com o ERP para garantir que o inventário da loja esteja sempre atualizado?

**Configuração:** Exige arquitetura de **Conta Franquia** para vincular o estoque local ao ponto de retirada, além de integração em tempo real com o ERP para inventário e emissão de nota fiscal (NFC-e).

**Configuração Técnica:**

* **Arquitetura de Franquia:** Essencial para vincular a loja ao ponto de retirada e ao estoque local.  
* **Vínculo Logístico:** Configure o ponto de retirada com o endereço da loja e ative o estoque para "instore".  
* **Faturamento:** Integre com o sistema de Nota Fiscal (NFC-e/SAT) via PDV ou ERP para permitir a saída imediata do produto, por meio do protocolo de integração.
* **Conciliação:** Ajuste sistêmico e operacional para garantir o fluxo correto de faturamento de acordo com suas definições junto ao financeiro.

#### C. Ferramenta Única de Venda (POS-like)

**Para quem é:** Operações que desejam substituir o PDV tradicional pelo Sales App para 100% das vendas.

* **Configuração:** Camada de integração com o ecossistema para módulos adicionais para loja física como gestão de caixa (sangrias, fechamento), relatórios de conciliação e fluxos avançados de troca e devolução por meio de pontos de extensão e integrações  
* **O que decidir:** Quais módulos são necessários e quais parceiros do ecossistema serão utilizado?  
* **Configuração Técnica mais comum :**  
  * **Módulos de Gestão:** Implementar camadas de *Cash Management* (sangrias, suprimentos e fechamento de turno).  
  * **Pós-Venda:** Configurar módulos de troca e devolução integrados ao OMS e ERP para reorquestração de estoque.  
  * Mapeamento de mais requisitos irão variar de acordo com o projeto de cada cliente&nbsp;

**Extensões:** Se você possui casos como venda de serviços adicionais, programas de fidelidade, ou quer trazer alguma informação da sua operação para dentro da jornada do Sales App, considere o uso de Extensões \[Link\], permitindo que seu time ou parceiros desenvolvam módulos específicos integrados à jornada.&nbsp;

### Definições de Operação

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

**Definições de Pagamento

5. Antes de instalar o Sales App, você precisa definir os métodos de pagamentos que irá habilitar no seu fluxo. Importante que parte desses fluxos;  
6. **Definições de Pagamento:**
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

### Próximos passos

Se você tem um caso de uso específico ou quer acelerar seu faturamento com vendas assistidas, **abra um ticket no suporte**. Nossa equipe ajudará você a entender como o Sales App pode alavancar o seu negócio.

________________________________________________________________________________________________

## ARTIGO ANTERIOR - Criar contas franquias

`https://help.vtex.com/pt/docs/tracks/criar-contas-franquias`

Na plataforma VTEX, recomendamos que as lojas físicas sejam sempre configuradas como contas franquia. O aplicativo do VTEX Sales App é instalado e acessado pela conta principal da marca, e busca as informações sobre o estoque e as formas de entrega nas contas franquias, ou seja, nas lojas físicas e na conta principal.

Para criar contas franquia, entre em contato com o [nosso Suporte](https://support.vtex.com/hc/pt-br/requests).

Antes de começar a utilizar o VTEX Sales App, é necessário que a loja tenha contas franquias já associadas à sua conta principal.

Ao criar contas franquias, cada uma das suas lojas físicas terá um Admin VTEX separado, com logística própria, mas herdando o catálogo da conta principal.

Suas contas franquias funcionarão como [Sellers White Label](/pt/docs/tutorials/seller-white-label#o-que-e-um-seller-white-label). Isto significa que quando um pedido for realizado em qualquer canal, seja o VTEX Sales App ou o ecommerce, o sistema buscará entre todas elas aquela que consegue fazer a entrega com melhor [SLA](/pt/docs/tutorials/acordo-de-nivel-de-servico-sla-de-operacao-da-vtex).

> ⚠️ Cada seller deve ter um CNPJ diferente para o funcionamento correto do pagamento dos pedidos.

A logística de cada uma das contas franquias pode ser gerenciada em um Admin VTEX separado. Para acessá-lo, entre na URL `{nome-da-conta-franquia}.myvtex.com/admin`.

Para mais detalhes sobre esse tipo de conta e suas configurações, acesse [O que é conta franquia?](/pt/docs/tutorials/o-que-e-conta-franquia).

________________________________________________________________________________________________

## ARTIGO ANTERIOR - Pré-requisitos para usar o VTEX Sales App

\\✅CONTEÚDO PARCIAL DO ARTIGO, MAS O RESTANTE JÁ FOI MOVIDO PARA O ARTIGO SOBRE REQUISITOS

`https://help.vtex.com/pt/docs/tracks/pre-requisitos-para-usar-o-vtex-sales-app`

## Casos de uso

Os pré-requisitos e recomendações para cada um dos principais casos de uso do VTEX Sales App em sua estratégia de [Comércio Unificado](/pt/docs/tracks/comercio-unificado-101) estão descritos abaixo.

### Prateleira Infinita

A [Prateleira Infinita](/pt/docs/tracks/prateleira-infinita) é o recurso que dá aos seus clientes acesso a todo o seu inventário, integrado entre todos os canais. Com isso, se um cliente estiver em uma loja física, ele poderá comprar um produto do estoque de outras lojas ou mesmo do seu ecommerce.

Para mais informações, leia o guia sobre a [Prateleira Infinita](/pt/docs/tracks/prateleira-infinita).

Os pré-requisitos para implementar a Prateleira Infinita na sua loja são todos os itens descritos nos tópicos anteriores.

### Ship from Store e Pontos de retirada

O [Ship from Store](/pt/docs/tracks/configurar-ship-from-store) transforma suas lojas físicas em pequenos centros de distribuição. Com esse recurso, você pode enviar produtos a partir do estoque de uma loja, mesmo que eles não tenham sido comprados lá.

Os [Pontos de retirada](/pt/docs/tracks/configurar-lojas-fisicas-como-pontos-de-retirada) ou pickup points são locais onde o cliente tem a opção de retirar por conta própria o seu pedido. As lojas físicas da sua rede, por exemplo, podem funcionar como pontos de retirada.

Os pré-requisitos para implementar essas estratégias são todos os itens descritos nos tópicos anteriores.

Recomendações adicionais:

* Ativar o módulo **Checkout v6**. Leia o artigo [Como ativar o Checkout v6](/pt/docs/tutorials/ativar-o-checkout-v6) para mais informações.
* Preços: recomendamos que suas lojas físicas herdem os preços do ecommerce. No entanto, se você optar por ter preços diferenciados, considere os requisitos e observações abaixo.
    * É necessário envolver uma agência parceira para regionalizar o catálogo.
    * Isso pode impactar as ferramentas de comparação de preços, pois eles recebem apenas um valor.
    * Isso pode impactar nas vendas em marketplaces, pois eles também recebem apenas um valor.
    * Recomendamos a contratação do time de Professional Services da VTEX para personalizar sua arquitetura e viabilizar a diferenciação de preços.

### VTEX Sales App integrado ao PDV

Esse é o recurso que permite usar o VTEX Sales App [integrado aos pontos de venda](/pt/tracks/estrategias-de-comercio-unificado--3WGDRRhc3vf1MJb9zGncnv/5XWo7q35jkDDq3PxUs1EVi) de suas lojas físicas.

Pré-requisitos para implementar a integração entre o VTEX Sales App e o PDV:

* Todos os pré-requisitos descritos nos tópicos anteriores, inclusive os de [Prateleira Infinita](#prateleira-infinita), [Ship from Store e Pontos de retirada](#ship-from-store-e-pontos-de-retirada).
* Integração com um sistema de Nota Fiscal, conforme descrito em [Faturamento](#faturamento).
