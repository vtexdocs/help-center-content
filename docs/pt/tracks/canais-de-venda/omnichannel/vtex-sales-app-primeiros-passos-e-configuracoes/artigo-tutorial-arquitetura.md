---
title: 'Planejar a implementação do VTEX Sales App'
status: PUBLISHED
createdAt: 2026-09-17T00:00:00.000Z
updatedAt: 2026-09-17T00:00:00.000Z
contentType: tutorial
productTeam: Shopping
slugEN: plan-vtex-sales-app-implementation
locale: pt
---

Antes de configurar o **Sales App**, o sucesso da operação depende de uma base sólida de decisões de negócio antes mesmo da configuração técnica. Este artigo apresenta o roteiro para que diferentes perfis de clientes entendam o que precisam decidir e configurar.

Antes de iniciar a implementação, é importante que sua empresa passe por estas quatro etapas decisórias:

- **Definir os casos de uso do Sales App:** principais situações nas quais o aplicativo será utilizado.
- **Definir a arquitetura técnica:** qual será a estrutura destinada para o **Sales App**, incluindo se existem contas franquias associadas à conta principal, quais políticas comerciais serão utilizadas, quais estoques estarão ativos, quais centros de distribuição (CDs) estarão ativos e se as lojas físicas terão preços próprios.
- **Definir a operação de vendas:** como os vendedores vão acessar e usar o app, quais ações poderão realizar e como as vendas serão acompanhadas. Um ponto crucial é o modelo de comissionamento para lojas: em operações omnichannel, o engajamento depende de como a venda feita na loja (mas entregue pelo ecommerce) será creditada para motivar a equipe.
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

### Sales App como ferramenta única da loja física

Algumas operações usam o **Sales App** para substituir o ponto de venda (PDV) tradicional em todas as vendas da loja. Nesse modelo, além das funcionalidades nativas do app, a loja precisa de módulos para as rotinas que hoje ficam no PDV. Esses módulos geralmente são desenvolvidos com parceiros do ecossistema, por meio de [extensões](#extensibilidade-no-vtex-sales-app) e integrações.

- **O que decidir:** quais módulos são necessários e quais parceiros do ecossistema serão utilizados.
- **Módulos mais comuns:**
  - **Gestão de caixa (Cash Management):** sangrias, suprimentos e fechamento de turno.
  - **Pós-venda:** troca e devolução integradas ao OMS e ao ERP para reorquestrar o estoque.
  - **Conciliação:** relatórios de conciliação das vendas da loja.
- **Arquitetura técnica:** como todas as vendas da loja passam pelo app, esse modelo geralmente exige a [venda do estoque local](#venda-do-estoque-local-e-carrinhos-mistos), com integração com ERP e emissão de nota fiscal na loja.

Os demais requisitos variam de acordo com o projeto de cada cliente.

### Extensibilidade no VTEX Sales App

Avalie se sua operação precisa de **Extensões** (como para programas de fidelidade, serviços adicionais ou formulários customizados). Note que a funcionalidade de extensões pode exigir requisitos específicos de desenvolvimento. Independente do seu caso de uso, é importante ter em mente que para funcionalidades que o Sales App não oferece nativamente, a capacidade de extensões geralmente pode ser a resposta, permitindo que você ou seu parceiro desenvolva módulos em pontos estratégicos da jornada de vendas, para recursos que são cruciais para estratégia. Acesse a documentação de extensões.

## Definir a arquitetura técnica

A arquitetura técnica depende das estratégias que sua operação vai adotar com o **Sales App**. A tabela abaixo resume os principais requisitos de cada estratégia, detalhados nas seções a seguir.

| Requisito | Prateleira Infinita | Ship from Store | Retirada em loja | Estoque local e carrinhos mistos |
| --- | --- | --- | --- | --- |
| Conta franquia | Opcional | Recomendado | Sim | Sim |
| Ponto de retirada | Opcional | Não | Sim | Sim |
| Integração com ERP | Não | Sim | Recomendado | Sim |
| Emissão de nota fiscal na loja (NFC-e/SAT) | Não | {Confirmar com time} | Não | Sim |

### Prateleira Infinita

A [Prateleira Infinita](https://help.vtex.com/pt/docs/tracks/prateleira-infinita) permite aos seus clientes acesso completo ao seu inventário, integrado entre todos os canais de venda. Ou seja, se um cliente estiver em uma loja física, ele poderá comprar um produto do estoque de outras lojas físicas ou ecommerce, e a entrega pode ser realizada a partir de qualquer um dos estoques.

- **Público alvo:** empresas que buscam vendas incrementais, evitando a ruptura de estoque local ao oferecer o catálogo do ecommerce.
- **O que decidir:** modelo de estoques e arquitetura de lojas, se haverá ou não contas franquias e [pontos de retirada](#retirada-em-loja).
- **Requisitos:** não possui requisitos específicos, basta ter o **Sales App** instalado na conta principal.

#### Configuração da Prateleira Infinita

- **Sem [arquitetura multicanal (Omnichannel)](https://help.vtex.com/pt/docs/tracks/comercio-unificado-101):** configure o **Sales App** na conta principal usando as mesmas políticas comerciais e estoques do ecommerce.  
- **Com arquitetura multicanal (Omnichannel) e multiestoque:** cadastre cada loja física como um estoque na conta principal. Recomendado para quem não precisa de gestão separada de preços por loja.
  - **Com contas franquia:** crie [contas franquia](https://help.vtex.com/pt/docs/tutorials/o-que-e-conta-franquia) para cada loja, elas possuem obrigatoriamente o mesmo catálogo da conta principal, mas podem ter configurações de logística próprias.

### Ship from Store

O [Ship from Store](https://help.vtex.com/pt/docs/tracks/configurar-ship-from-store) permite que o cliente receba em casa pedidos com produtos que saem do estoque de uma loja física. Ou seja, a loja funciona como um pequeno centro de distribuição.

- **Público alvo:** marcas que querem reduzir custos e prazos de entrega usando as lojas físicas mais próximas do cliente como origem dos pedidos.
- **O que decidir:** quais lojas farão entregas, quais transportadoras atenderão cada loja e como integrar o ERP para que o inventário da loja esteja sempre atualizado.

#### Configuração do Ship from Store

- **Arquitetura de conta franquia:** a VTEX recomenda criar uma [conta franquia](https://help.vtex.com/pt/docs/tutorials/o-que-e-conta-franquia) para cada loja, para que cada uma tenha sua própria logística.
- **Configuração logística:** na conta franquia, cadastre a transportadora em uma política de envio, associe essa política a uma doca e use a doca como origem do estoque da loja.

> ℹ️ Para usar o **Ship from Store**, é necessário integrar o ERP para que o inventário da loja esteja sempre atualizado.

### Retirada em loja

Com a [retirada em loja](https://help.vtex.com/pt/docs/tracks/configurar-lojas-fisicas-como-pontos-de-retirada), as lojas físicas funcionam como pontos de retirada. No **Sales App**, isso permite que o vendedor feche a venda em qualquer loja ou em um atendimento remoto e que o cliente busque o pedido na loja física de sua preferência. Pedidos feitos no ecommerce também podem ser retirados nesses pontos.

- **Público alvo:** marcas com lojas físicas que querem oferecer ao cliente a opção de buscar o pedido na loja, reduzindo custos de frete e gerando mais visitas às lojas.
- **O que decidir:** quais lojas serão pontos de retirada e se os pedidos retirados sairão do estoque da própria loja ou de outro estoque.

#### Configuração da retirada em loja

- **Arquitetura de conta franquia:** cada loja que funcionar como ponto de retirada precisa ser uma [conta franquia](https://help.vtex.com/pt/docs/tutorials/o-que-e-conta-franquia).
- **Configuração logística:** na conta franquia, cadastre o ponto de retirada, associe-o a uma política de envio e conecte-o ao estoque da loja ativando a opção **Estoque inStore**.

### Venda do estoque local e carrinhos mistos

A [venda do estoque local](https://help.vtex.com/pt/docs/tutorials/habilitar-venda-de-estoque-local-do-vtex-sales-app) permite que o cliente leve o produto na hora da compra na loja física (venda do tipo "leve agora"). Essa estratégia pode ser combinada com carrinhos mistos (Carry Out), quando uma mesma venda contém itens que o cliente leva na hora e itens que serão entregues em sua casa a partir de outro estoque.

- **Público alvo:** lojas físicas que desejam vender produtos do estoque local e combinar em um mesmo pedido itens para levar na hora e itens para entrega.
- **O que decidir:** como integrar o ERP e o sistema fiscal da loja para que o inventário esteja sempre atualizado e a nota fiscal seja emitida no momento da venda.

#### Configuração da venda do estoque local e carrinhos mistos

- **Arquitetura de conta franquia:** usa a mesma base da [retirada em loja](#retirada-em-loja), ou seja, uma conta franquia para cada loja, com um ponto de retirada cadastrado com o endereço da loja física.
- **Configuração logística:** siga o passo a passo de [venda do estoque local](https://help.vtex.com/pt/docs/tutorials/habilitar-venda-de-estoque-local-do-vtex-sales-app) para vincular o ponto de retirada ao estoque da loja e habilitar vendas do tipo "leve agora" (`instore`). A venda de carrinhos mistos já vem configurada por padrão nas lojas VTEX.
- **Faturamento:** integre o sistema de faturamento com o de nota fiscal (NFC-e/SAT) via ponto de venda (PDV) ou ERP para permitir a saída imediata do produto por meio do protocolo de integração.
- **Conciliação:** ajuste o sistema e operacional de conciliação para garantir o fluxo correto de faturamento, de acordo com suas definições junto ao financeiro.

### Preços nas lojas físicas

Independentemente da estratégia escolhida, recomendamos que as lojas físicas herdem os preços do ecommerce. Se sua operação precisar de preços diferenciados por loja, considere os seguintes pontos:

- **Regionalização do catálogo:** é necessário envolver uma agência parceira para regionalizar o catálogo.
- **Comparadores de preço:** podem ser impactados, pois recebem apenas um valor por produto.
- **Marketplaces:** as vendas podem ser impactadas pelo mesmo motivo, já que os marketplaces também recebem apenas um valor por produto.

## Definir a operação de vendas

Com a arquitetura definida, decida como os vendedores vão usar o **Sales App** no dia a dia e como as vendas serão acompanhadas.

### Acesso ao app

- **Dispositivo:** se os vendedores vão usar o app no celular, no computador ou em ambos.
- **Login:** se haverá um login único por loja ou um login para cada vendedor.
- **Código do vendedor:** qual será o formato do código e se ele será obrigatório ou opcional no fluxo de venda.

Com essas definições, cadastre os usuários e as lojas.

### Permissões dos vendedores

Você pode habilitar ou desabilitar algumas ações dos vendedores no app. Cada configuração tem uma forma de ativação própria. As principais são:

- Aplicar preço manual.
- Forçar estoque local.
- Cancelar pedido.
- Visualizar a própria performance de vendas.
- Visualizar a performance de vendas dos demais vendedores.

### Performance e comissionamento

- **Acompanhamento no app:** ative a performance de vendas para que os vendedores acompanhem suas métricas básicas no próprio **Sales App**.
- **Integração com sistemas internos:** use os campos do pedido para enviar os dados de venda aos seus sistemas internos e calcular o comissionamento.
- **Modelo de comissionamento:** defina com as áreas internas, lojas próprias e franquias como as vendas omnichannel entrarão nas metas e no repasse de lojas, franquias, gerentes e vendedores. Essa definição não depende de configuração na VTEX, mas é essencial para o modelo de repasse e para o engajamento da equipe com o app.

## Definir as configurações de pagamento

Defina quais métodos de pagamento estarão disponíveis no **Sales App**. Alguns métodos reaproveitam configurações do ecommerce, enquanto outros exigem a contratação de parceiros ou integrações.

- **Link de pagamento (social selling):** usa o checkout do ecommerce. Para configurá-lo, siga o tutorial [Como ativar o app Carrinho Compartilhável (Social Selling)](https://help.vtex.com/pt/docs/tutorials/como-ativar-o-app-carrinho-compartilhavel).
- **PIX:** usa o mesmo gateway de pagamento do ecommerce.
- **Dinheiro:** o pagamento é controlado fora da plataforma, e o pedido é registrado com o método promissória.
- **Adquirentes homologados:** exige contratar um parceiro disponível na sua região, configurar as maquininhas, configurar o provedor na conta principal e realizar testes.
- **Pagamentos não integrados:** usam o método promissória e exigem integração com sistemas externos, como PDV ou ERP, para receber a confirmação do pagamento. São indicados para cartões private label ou métodos de pagamento já consolidados na loja. Esse modelo está em Closed Beta. Para saber mais, procure o time do **Sales App**.

> ℹ️ Recomendamos ativar o módulo **Checkout v6**. Leia o artigo [Como ativar o Checkout v6](/pt/docs/tutorials/ativar-o-checkout-v6) para mais informações.
