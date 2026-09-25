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

A arquitetura técnica depende das estratégias que sua operação vai adotar com o **Sales App**. A tabela abaixo resume os principais requisitos de cada estratégia, detalhados nas seções a seguir.

| Requisito | Prateleira Infinita | Ship from Store e carrinhos mistos | Loja física como ponto de retirada | Ferramenta Única de Venda (POS-like) |
| --- | --- | --- | --- | --- |
| Conta franquia | Opcional | Sim | Sim | {Confirmar com time} |
| Ponto de retirada | Opcional | Sim | Sim | {Confirmar com time} |
| Integração com ERP | Não | Sim | Recomendado | Sim |
| Emissão de nota fiscal na loja (NFC-e/SAT) | Não | Sim | Não | Sim |

### Prateleira Infinita

A [Prateleira Infinita](https://help.vtex.com/pt/docs/tracks/prateleira-infinita) permite aos seus clientes acesso completo ao seu inventário, integrado entre todos os canais de venda. Ou seja, se um cliente estiver em uma loja física, ele poderá comprar um produto do estoque de outras lojas físicas ou ecommerce, e a entrega pode ser realizada a partir de qualquer um dos estoques.

- **Público alvo:** empresas que buscam vendas incrementais, evitando a ruptura de estoque local ao oferecer o catálogo do ecommerce.
- **O que decidir:** modelo de estoques e arquitetura de lojas, se haverá ou não contas franquias e pontos de retirada.
- **Requisitos:** não possui requisitos específicos, basta ter o **Sales App** instalado na conta principal.

#### Configuração da Prateleira Infinita

- **Sem [arquitetura multicanal (Omnichannel)](https://help.vtex.com/pt/docs/tracks/comercio-unificado-101):** configure o **Sales App** na conta principal usando as mesmas políticas comerciais e estoques do ecommerce.  
- **Com arquitetura multicanal (Omnichannel) e multiestoque:** cadastre cada loja física como um estoque na conta principal. Recomendado para quem não precisa de gestão separada de preços por loja.
  - **Com contas franquia:** crie [contas franquia](https://help.vtex.com/pt/docs/tutorials/o-que-e-conta-franquia) para cada loja, elas possuem obrigatoriamente o mesmo catálogo da conta principal, mas podem ter configurações de logística próprias.

### Ship from Store e carrinhos mistos

O [Ship From Store](https://help.vtex.com/pt/docs/tracks/configurar-ship-from-store) permite que o cliente receba pedidos com produtos que vieram do estoque da loja física, ou seja, a loja funciona como um pequeno centro de distribuição. Além disso, você pode associar essa estratégia à opção de carrinhos mistos (Carry Out), quando uma venda contém tanto itens para retirada em loja na hora da compra, quanto itens a serem entregues na casa do cliente.

- **Público alvo:** lojas físicas que desejam vender produtos do estoque local, que querem habilitar compra do tipo "leve agora" e que desejam combinar em um mesmo pedido itens para entrega e retirada.
- **O que decidir:** como garantir a integração com o ERP de forma que o inventário da loja esteja sempre atualizado.

#### Configuração de Ship from Store e carrinhos mistos

- **Arquitetura de conta franquia:** requer [conta franquia](https://help.vtex.com/pt/docs/tutorials/o-que-e-conta-franquia) para que seja possível habilitar o estoque local da loja física como ponto de retirada.
- **Configuração logística:** configure o [ponto de retirada com o endereço da loja física](https://help.vtex.com/pt/docs/tutorials/habilitar-venda-de-estoque-local-do-vtex-sales-app) e habilite vendas do tipo "leve agora" (`instore`).
- **Faturamento:** integre o sistema de faturamente com o de Nota Fiscal (NFC-e/SAT) via ponto de venda (PDV) ou ERP para permitir a saída imediata do produto por meio do protocolo de integração.
- **Conciliação:** ajuste o sistema e operacional de conciliação para garantir o fluxo correto de faturamento, de acordo com suas definições junto ao financeiro.

> ℹ️ Para usar o **Ship from Store**, é necessário integrar o ERP para que o inventário da loja esteja sempre atualizado e a emissão de nota fiscal (NFC-e) seja permitida.

### Loja física como ponto de retirada

Com a [retirada em loja](https://help.vtex.com/pt/docs/tracks/configurar-lojas-fisicas-como-pontos-de-retirada), as lojas físicas funcionam como pontos de retirada. Assim, o cliente pode comprar pelo **Sales App** ou por outro canal e buscar o pedido na loja de sua preferência.

- **Público alvo:** marcas com lojas físicas que querem oferecer ao cliente a opção de buscar o pedido na loja, reduzindo custos de frete e gerando mais visitas às lojas.
- **O que decidir:** quais lojas serão pontos de retirada e se os pedidos retirados sairão do estoque da própria loja ou de outro estoque.

#### Configuração da retirada em loja

- **Arquitetura de conta franquia:** cada loja que funcionar como ponto de retirada precisa ser uma [conta franquia](https://help.vtex.com/pt/docs/tutorials/o-que-e-conta-franquia).
- **Configuração logística:** na conta franquia, cadastre o ponto de retirada, associe-o a uma política de envio e conecte-o ao estoque da loja ativando a opção **Estoque inStore**.

### Ferramenta Única de Venda (POS-like)

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
         1. Quando usar: casos de cartão private label, métodos de pagamentos já consolidados na sua loja. Esse modelo está em Closed Beta. Para saber mais procure o time de Sales App.

> ℹ️ Recomendação geral: ativar o módulo **Checkout v6**. Leia o artigo [Como ativar o Checkout v6](/pt/docs/tutorials/ativar-o-checkout-v6) para mais informações.

### Preços diferenciados

- Preços: recomendamos que suas lojas físicas herdem os preços do ecommerce. No entanto, se você optar por ter preços diferenciados, considere os requisitos e observações abaixo.
  - É necessário envolver uma agência parceira para regionalizar o catálogo.
  - Isso pode impactar as ferramentas de comparação de preços, pois eles recebem apenas um valor.
  - Isso pode impactar nas vendas em marketplaces, pois eles também recebem apenas um valor.
