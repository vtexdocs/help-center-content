---
title: 'Planejar a implementação do VTEX Sales App'
status: PUBLISHED
createdAt: 2026-09-25T00:00:00.000Z
updatedAt: 2026-09-25T00:00:00.000Z
contentType: tutorial
productTeam: Shopping
slugEN: planning-the-vtex-sales-app-implementation
locale: pt
---

O sucesso de uma operação com o **VTEX Sales App** depende de decisões de negócio tomadas antes da configuração técnica. Este artigo apresenta um roteiro para que sua empresa entenda o que precisa decidir e configurar em cada etapa.

Antes de iniciar a implementação, passe por estas quatro etapas:

- **Definir os casos de uso do Sales App:** principais situações em que o app será utilizado.
- **Definir a arquitetura técnica:** quais estratégias [omnichannel](/pt/docs/tracks/comercio-unificado-101) serão adotadas e o que cada uma exige, como contas franquia, pontos de retirada, estoques e integração com o ERP. Inclui também a decisão sobre as lojas físicas terem ou não preços próprios.
- **Definir a operação de vendas:** como os vendedores vão acessar e usar o app, quais ações poderão realizar e como as vendas serão acompanhadas. Um ponto crucial é o modelo de comissionamento: em operações omnichannel, o engajamento da equipe depende de como a venda feita na loja, mas entregue pelo ecommerce, será creditada.
- **Definir as configurações de pagamento:** quais métodos de pagamento serão aceitos, como link de pagamento, Pix, cartão e dinheiro. Alguns métodos exigem a contratação e homologação de provedores e adquirentes específicos para a operação física.

> ℹ️ Se a arquitetura da sua conta for complexa ou exigir recursos customizados, considere contratar o time de Professional Services da VTEX para obter mais eficiência e segurança na implementação.

## Definir os casos de uso do Sales App

Os casos de uso mais frequentes do **Sales App** são:

- **Ruptura de estoque:** o app é usado apenas quando o produto não está disponível na loja, para vendê-lo a partir de outros estoques.
- **Consulta de estoque e venda com mobilidade:** o app é a primeira opção dos vendedores para consultar o estoque local e remoto e fechar vendas em qualquer ponto da loja.
- **Ferramenta única da loja física:** o app substitui o ponto de venda (PDV) tradicional em todas as vendas da loja.
- **Atendimento remoto:** os vendedores usam o app para fechar vendas assistidas por canais digitais.
- **Eventos e pop-up stores:** o app pode ser levado para onde o cliente estiver, como feiras ou quiosques temporários.

> ℹ️ Se você tem um caso de uso específico ou quer ampliar suas vendas assistidas, abra um ticket para o [Suporte VTEX](https://help.vtex.com/pt/support). Nossa equipe ajudará você a entender como o **Sales App** pode atender ao seu negócio.

### Sales App como ferramenta única da loja física

Quando o **Sales App** substitui o PDV em todas as vendas da loja, além das funcionalidades nativas do app, a loja precisa de módulos para as rotinas que hoje ficam no PDV. Esses módulos geralmente são desenvolvidos com parceiros do ecossistema, por meio de [extensões](#extensibilidade-no-vtex-sales-app) e integrações.

- **O que decidir:** quais módulos são necessários e quais parceiros do ecossistema serão utilizados.
- **Módulos mais comuns:**
  - **Gestão de caixa (Cash Management):** sangrias, suprimentos e fechamento de turno.
  - **Pós-venda:** troca e devolução integradas ao OMS e ao ERP para reorquestrar o estoque.
  - **Conciliação:** relatórios de conciliação das vendas da loja.
- **Arquitetura técnica:** como todas as vendas da loja passam pelo app, esse modelo geralmente exige a [venda do estoque local](#venda-do-estoque-local-e-carrinhos-mistos), com integração com o ERP e emissão de nota fiscal na loja.

Os demais requisitos variam de acordo com o projeto de cada cliente.

### Extensibilidade no VTEX Sales App

Para funcionalidades que o **Sales App** não oferece nativamente, como programas de fidelidade, serviços adicionais ou formulários customizados, avalie o uso do [VTEX Sales App Extensibility](/pt/docs/tutorials/vtex-sales-app-extensibility-pt). Com ele, seu time ou um parceiro pode desenvolver módulos em pontos estratégicos da jornada de vendas.

## Definir a arquitetura técnica

A arquitetura técnica depende das estratégias que sua operação vai adotar com o **Sales App**. A tabela abaixo resume os principais requisitos de cada estratégia, detalhados nas seções a seguir.

| Requisito | Prateleira Infinita | Ship from Store | Retirada em loja | Venda do estoque local e carrinhos mistos |
| --- | --- | --- | --- | --- |
| Conta franquia | Opcional | Recomendado | Sim | Sim |
| Ponto de retirada | Opcional | Não | Sim | Sim |
| Integração com ERP | Não | Sim | Recomendado | Sim |
| Emissão de nota fiscal na loja (NFC-e/SAT) | Não | {Confirmar com time} | Não | Sim |

### Prateleira Infinita

A [Prateleira Infinita](/pt/docs/tracks/prateleira-infinita) dá aos seus clientes acesso a todo o inventário, integrado entre os canais de venda. Ou seja, um cliente que está em uma loja física pode comprar um produto do estoque de outras lojas físicas ou do ecommerce, e a entrega pode ser feita a partir de qualquer um desses estoques.

- **Público-alvo:** empresas que buscam vendas incrementais, evitando a ruptura de estoque local ao oferecer o catálogo do ecommerce.
- **O que decidir:** modelo de estoques e arquitetura de lojas, incluindo se haverá contas franquia e [pontos de retirada](#retirada-em-loja).
- **Requisitos:** basta ter o **Sales App** instalado na conta principal.

#### Configuração da Prateleira Infinita

- **Sem [arquitetura omnichannel](/pt/docs/tracks/comercio-unificado-101):** configure o **Sales App** na conta principal usando as mesmas políticas comerciais e estoques do ecommerce.
- **Com arquitetura omnichannel e multiestoque:** cadastre cada loja física como um estoque na conta principal. Essa opção é recomendada para quem não precisa de gestão separada de preços por loja.
  - **Com contas franquia:** crie uma [conta franquia](/pt/docs/tutorials/o-que-e-conta-franquia) para cada loja. As contas franquia têm obrigatoriamente o mesmo catálogo da conta principal, mas podem ter configurações de logística próprias.

### Ship from Store

O [Ship from Store](/pt/docs/tracks/configurar-ship-from-store) permite que o cliente receba em casa pedidos com produtos que saem do estoque de uma loja física. Ou seja, a loja funciona como um pequeno centro de distribuição.

- **Público-alvo:** marcas que querem reduzir custos e prazos de entrega usando as lojas físicas mais próximas do cliente como origem dos pedidos.
- **O que decidir:** quais lojas farão entregas, quais transportadoras atenderão cada loja e como integrar o ERP para que o inventário da loja esteja sempre atualizado.

#### Configuração do Ship from Store

- **Arquitetura de conta franquia:** a VTEX recomenda criar uma [conta franquia](/pt/docs/tutorials/o-que-e-conta-franquia) para cada loja, para que cada uma tenha sua própria logística.
- **Configuração logística:** na conta franquia, cadastre a transportadora em uma [política de envio](/pt/docs/tutorials/politica-de-envio), associe essa política a uma doca e use a doca como origem do estoque da loja.

> ℹ️ Para usar o **Ship from Store**, é necessário integrar o ERP para que o inventário da loja esteja sempre atualizado.

### Retirada em loja

Com a [retirada em loja](/pt/docs/tracks/configurar-lojas-fisicas-como-pontos-de-retirada), as lojas físicas funcionam como pontos de retirada. No **Sales App**, isso permite que o vendedor feche a venda em qualquer loja ou em um atendimento remoto e que o cliente busque o pedido na loja física de sua preferência. Pedidos feitos no ecommerce também podem ser retirados nesses pontos.

- **Público-alvo:** marcas com lojas físicas que querem oferecer ao cliente a opção de buscar o pedido na loja, reduzindo custos de frete e gerando mais visitas às lojas.
- **O que decidir:** quais lojas serão pontos de retirada, se os pedidos retirados sairão do estoque da própria loja ou de outro estoque e como manter o inventário da loja atualizado. Para isso, recomendamos a integração com o ERP.

#### Configuração da retirada em loja

- **Arquitetura de conta franquia:** cada loja que funcionar como ponto de retirada precisa ser uma [conta franquia](/pt/docs/tutorials/o-que-e-conta-franquia).
- **Configuração logística:** na conta franquia, cadastre o ponto de retirada, associe-o a uma política de envio e conecte-o ao estoque da loja ativando a opção **Estoque inStore**.

### Venda do estoque local e carrinhos mistos

A [venda do estoque local](/pt/docs/tutorials/habilitar-venda-de-estoque-local-do-vtex-sales-app) permite que o cliente leve o produto na hora da compra na loja física, em uma venda do tipo "leve agora" (carry out). Essa estratégia pode ser combinada com carrinhos mistos, quando uma mesma venda contém itens que o cliente leva na hora e itens que serão entregues em sua casa a partir de outro estoque.

- **Público-alvo:** lojas físicas que desejam vender produtos do estoque local e combinar em um mesmo pedido itens para levar na hora e itens para entrega.
- **O que decidir:** como integrar o ERP e o sistema fiscal da loja para que o inventário esteja sempre atualizado e a nota fiscal seja emitida no momento da venda.

#### Configuração da venda do estoque local e carrinhos mistos

- **Arquitetura de conta franquia:** usa a mesma base da [retirada em loja](#retirada-em-loja), ou seja, uma conta franquia para cada loja, com um ponto de retirada cadastrado com o endereço da loja física.
- **Configuração logística:** siga o passo a passo de [venda do estoque local](/pt/docs/tutorials/habilitar-venda-de-estoque-local-do-vtex-sales-app) para vincular o ponto de retirada ao estoque da loja e habilitar vendas do tipo "leve agora" (`instore`). A venda de carrinhos mistos já vem configurada por padrão nas lojas VTEX.
- **Faturamento:** integre o sistema de faturamento ao de nota fiscal (NFC-e/SAT) via PDV ou ERP para permitir a saída imediata do produto.
- **Conciliação:** ajuste o sistema e a operação de conciliação para garantir o fluxo correto de faturamento, de acordo com as definições da sua área financeira.

### Preços nas lojas físicas

Independentemente da estratégia escolhida, recomendamos que as lojas físicas herdem os preços do ecommerce. Se sua operação precisar de preços diferenciados por loja, considere os seguintes pontos:

- **Regionalização do catálogo:** é necessário envolver uma agência parceira para regionalizar o catálogo.
- **Comparadores de preço:** podem ser impactados, pois recebem apenas um valor por produto.
- **Marketplaces:** as vendas podem ser impactadas pelo mesmo motivo, já que os marketplaces também recebem apenas um valor por produto.

## Definir a operação de vendas

Com a arquitetura definida, decida como os vendedores vão usar o **Sales App** no dia a dia e como as vendas serão acompanhadas.

### Acesso ao app

- **Dispositivo:** se os vendedores vão usar o app em um dispositivo móvel (celular ou tablet), no computador ou em ambos.
- **Login:** se haverá um login único por loja ou um login para cada vendedor.
- **Código do vendedor:** qual será o formato do código e se ele será obrigatório ou opcional no fluxo de venda.

Com essas definições, cadastre as [lojas físicas](/pt/docs/tracks/gerenciar-lojas-fisicas-no-vtex-sales-app) e os [vendedores](/pt/docs/tracks/gerenciar-vendedores-no-vtex-sales-app).

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

- **Link de pagamento (social selling):** usa o checkout do ecommerce. Para configurá-lo, siga o tutorial [Como ativar o app Carrinho Compartilhável (Social Selling)](/pt/docs/tutorials/como-ativar-o-app-carrinho-compartilhavel).
- **Pix:** usa o mesmo gateway de pagamento do ecommerce.
- **Dinheiro:** o pagamento é controlado fora da plataforma, e o pedido é registrado com o método **Promissória**.
- **Adquirentes homologados:** exigem contratar um parceiro disponível na sua região, configurar os terminais de pagamento (maquininhas), configurar o provedor na conta principal e realizar testes.
- **Pagamentos não integrados:** usam o método **Promissória** e exigem integração com sistemas externos, como PDV ou ERP, para receber a confirmação do pagamento. São indicados para cartões private label ou métodos de pagamento já consolidados na loja. Esse modelo está em beta fechado. Para saber mais, entre em contato com o time do **Sales App**.

> ℹ️ Recomendamos ativar o módulo **Checkout v6**. Leia o artigo [Como ativar o Checkout v6](/pt/docs/tutorials/ativar-o-checkout-v6) para mais informações.
