---
title: 'Planejar a implementação do VTEX Sales App'
createdAt: 2026-09-30T00:00:00.000Z
updatedAt: 2026-10-21T00:00:00.000Z
contentType: tutorial
productTeam: Shopping
slugEN: planning-vtex-sales-app-implementation
locale: pt
---

O sucesso de uma operação com o **VTEX Sales App** depende de decisões de negócio tomadas antes da configuração técnica. Este artigo apresenta um roteiro para que sua empresa entenda o que precisa decidir e configurar em cada etapa.

Antes de iniciar a implementação, passe por estas quatro etapas:

| Etapa | O que definir |
| --- | --- |
| [Definir os casos de uso do Sales App](#definir-os-casos-de-uso-do-sales-app) | Principais situações em que o **Sales App** será utilizado. |
| [Definir a arquitetura técnica](#definir-a-arquitetura-tecnica) | Quais estratégias [omnichannel](/pt/docs/tracks/comercio-unificado-101) serão adotadas e o que cada uma exige, como [contas franquia](/pt/docs/tutorials/o-que-e-conta-franquia), pontos de retirada, estoques e integração com o ERP. |
| [Definir a operação de vendas](#definir-a-operacao-de-vendas) | Como os vendedores vão acessar e usar o **Sales App**, quais ações poderão realizar e como as vendas serão acompanhadas. Um ponto importante é o modelo de comissionamento. Em operações omnichannel, o engajamento da equipe depende de como será creditada a venda feita na loja e entregue pelo ecommerce. |
| [Definir as configurações de pagamento](#definir-as-configuracoes-de-pagamento) | Quais métodos de pagamento serão aceitos, como link de pagamento, Pix, cartão e dinheiro. Alguns métodos exigem a contratação e homologação de provedores e adquirentes específicos para a operação física. |

> ℹ️ Se a arquitetura da sua conta for complexa ou exigir recursos customizados, considere contratar o time de Professional Services da VTEX para obter mais eficiência e segurança na implementação. Para isso, abra um chamado para o [nosso suporte comercial](https://help.vtex.com/pt/docs/tutorials/abrir-chamados-para-o-suporte-vtex#suporte-financeiro-e-comercial).

## Definir os casos de uso do Sales App

Os casos de uso mais frequentes do **Sales App** são:

- **Ruptura de estoque:** o app é usado apenas quando o produto não está disponível na loja, para vendê-lo a partir de outros estoques.
- **Consulta de estoque e venda com mobilidade:** o app é a primeira opção dos vendedores para consultar o estoque local e remoto e fechar vendas em qualquer ponto da loja.
- **Ferramenta única da loja física:** o app substitui o ponto de venda (PDV) tradicional em todas as vendas da loja.
- **Atendimento remoto:** os vendedores usam o app para fechar vendas assistidas por canais digitais.
- **Eventos e pop-up stores:** o app pode ser levado para onde o cliente estiver, como em feiras ou quiosques temporários.

> ℹ️ Se você tem um caso de uso específico ou quer ampliar suas vendas assistidas, abra um ticket para o [Suporte VTEX](https://help.vtex.com/support). Nossa equipe ajudará você a entender como o **Sales App** pode atender ao seu negócio.

### Extensibilidade no VTEX Sales App

Para funcionalidades que o **Sales App** não oferece nativamente, como programas de fidelidade, serviços adicionais ou formulários customizados, avalie o uso do [VTEX Sales App Extensibility](/pt/docs/tutorials/vtex-sales-app-extensibility-pt). Com ele, seu time ou um parceiro pode desenvolver módulos em pontos estratégicos da jornada de vendas.

## Definir a arquitetura técnica

A arquitetura técnica depende das estratégias que sua operação adotará com o **Sales App**. As seções a seguir apresentam as principais estratégias, o que decidir em cada uma delas e as configurações necessárias. Se sua operação combinar mais de uma estratégia, atenda aos requisitos de todas elas.

### Prateleira Infinita

A [Prateleira Infinita](/pt/docs/tracks/prateleira-infinita) dá aos seus clientes acesso a todo o inventário, integrado entre os canais de venda. Ou seja, um cliente que está em uma loja física pode comprar um produto do estoque de outras lojas físicas ou do ecommerce, e a entrega pode ser feita a partir de qualquer um desses estoques.

- **Público-alvo:** empresas que buscam vendas incrementais, evitando a ruptura de estoque local ao oferecer o catálogo do ecommerce.
- **O que decidir:** modelo de estoques e arquitetura de lojas, incluindo se haverá contas franquia e [pontos de retirada](#retirada-em-loja).
- **Requisitos:** ter o **Sales App** instalado na conta principal e definir a [política comercial](/pt/docs/tutorials/como-funciona-uma-politica-comercial) que ele vai usar.

#### Configuração da Prateleira Infinita

Escolha a configuração de acordo com a arquitetura da operação:

- **Sem [arquitetura omnichannel](/pt/docs/tracks/comercio-unificado-101):** configure o **Sales App** na conta principal usando a mesma política comercial e os mesmos estoques do ecommerce.
- **Com arquitetura omnichannel e multiestoque:** cadastre cada loja física como um estoque na conta principal. Essa opção é recomendada para quem não precisa de gestão separada de preços por loja.
- **Com contas franquia:** crie uma conta franquia para cada loja. As contas franquia têm obrigatoriamente o mesmo catálogo da conta principal, mas podem ter configurações de logística próprias.

### Ship from Store

O [Ship from Store](/pt/docs/tracks/configurar-ship-from-store) permite que o cliente receba em casa pedidos com produtos que saem do estoque de uma loja física. Ou seja, a loja funciona como um pequeno centro de distribuição.

- **Público-alvo:** marcas que querem reduzir custos e prazos de entrega usando as lojas físicas mais próximas do cliente como origem dos pedidos.
- **O que decidir:** quais lojas farão entregas, quais transportadoras atenderão cada loja e como integrar o ERP para que o inventário de cada loja esteja sempre atualizado.

#### Configuração do Ship from Store

- **Arquitetura de conta franquia:** recomendamos criar uma [conta franquia](/pt/docs/tutorials/o-que-e-conta-franquia) para cada loja, para que cada uma tenha sua própria logística.
- **Configuração logística:** na conta franquia, cadastre a transportadora como uma [política de envio](/pt/docs/tutorials/politica-de-envio), associe essa política a uma doca e indique a doca como origem do estoque da loja.
- **Integração com ERP:** obrigatória, para que o inventário da loja esteja sempre atualizado.

### Retirada em loja

Com a [retirada em loja](/pt/docs/tracks/configurar-lojas-fisicas-como-pontos-de-retirada), as lojas físicas funcionam como pontos de retirada. No **Sales App**, isso permite que o vendedor feche a venda em qualquer loja ou em um atendimento remoto e que o cliente busque o pedido na loja física de sua preferência. Pedidos feitos no ecommerce também podem ser retirados nesses pontos.

- **Público-alvo:** marcas com lojas físicas que querem oferecer ao cliente a opção de buscar o pedido na loja, reduzindo custos de frete e gerando mais visitas às lojas.
- **O que decidir:** quais lojas serão pontos de retirada, se os pedidos retirados sairão do estoque da própria loja ou de outro estoque e como manter o inventário da loja atualizado. Para isso, recomendamos a integração com o ERP.

#### Configuração da retirada em loja

- **Arquitetura de conta franquia:** recomendamos que cada loja funcionando como ponto de retirada seja uma [conta franquia](/pt/docs/tutorials/o-que-e-conta-franquia).
- **Configuração logística:** crie um [ponto de retirada](/pt/docs/tutorials/cadastro-de-pontos-de-retirada) e associe-o ao estoque da loja seguindo os passos descritos no artigo [Lojas físicas como pontos de retirada](/pt/docs/tracks/configurar-lojas-fisicas-como-pontos-de-retirada). Além disso, associe o ponto de retirada a uma [política de envio](/pt/docs/tutorials/politica-de-envio).

### Venda do estoque local e carrinhos mistos

A [venda do estoque local](/pt/docs/tutorials/habilitar-venda-de-estoque-local-do-vtex-sales-app) permite que o cliente leve o produto na hora da compra na loja física, em uma venda do tipo "Levar agora" (On Hands). Essa estratégia pode ser combinada com carrinhos mistos, quando uma mesma venda contém itens que o cliente leva na hora e itens que serão entregues em sua casa a partir de outro estoque.

- **Público-alvo:** lojas físicas que desejam vender produtos do estoque local e combinar em um mesmo pedido itens para levar na hora e itens para entrega.
- **O que decidir:** como integrar o ERP e o sistema fiscal da loja para que o inventário esteja sempre atualizado e a nota fiscal seja emitida no momento da venda.

#### Configuração da venda do estoque local e carrinhos mistos

- **Arquitetura de conta franquia:** usa a mesma base da [retirada em loja](#retirada-em-loja), ou seja, uma conta franquia para cada loja, com um ponto de retirada cadastrado com o endereço da loja física.
- **Configuração logística:** siga o passo a passo de [venda do estoque local](/pt/docs/tutorials/habilitar-venda-de-estoque-local-do-vtex-sales-app) para vincular o ponto de retirada ao estoque da loja e habilitar vendas do tipo "Levar agora" (On Hands). A venda de carrinhos mistos já vem configurada por padrão nas lojas VTEX.
- **Faturamento:** integre o faturamento ao sistema de nota fiscal (NFC-e/SAT), pelo PDV ou pelo ERP, para permitir a saída imediata do produto.
- **Conciliação:** ajuste o sistema e a operação de conciliação para garantir o fluxo correto de faturamento, de acordo com as definições da sua área financeira.

> ℹ️ Para usar a retirada em loja e os carrinhos mistos, é necessário ativar o **Checkout v6**. Essa versão permite que o cliente escolha um ponto de retirada e divida um mesmo pedido entre itens entregues em casa e itens retirados na loja. Para mais informações, leia o artigo [Como ativar o Checkout v6](/pt/docs/tutorials/ativar-o-checkout-v6).

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
- [Forçar estoque local](https://developers.vtex.com/docs/guides/force-stock-availability).
- Cancelar pedido.
- Visualizar a própria performance de vendas.
- Visualizar a performance de vendas dos demais vendedores.

### Performance e comissionamento

- **Acompanhamento no app:** ative a performance de vendas para que os vendedores acompanhem suas métricas básicas no próprio **Sales App**.
- **Integração com sistemas internos:** use os campos do pedido para enviar os dados de venda aos seus sistemas internos e calcular o comissionamento. Em [customData.customApps](https://developers.vtex.com/docs/guides/orderform-fields#customdata), o `id` do **Sales App** é `sales-app`.
- **Modelo de comissionamento:** defina com as áreas internas, lojas próprias e franquias como as vendas omnichannel entrarão nas metas e no repasse de lojas, franquias, gerentes e vendedores. Essa definição não depende de configuração na VTEX, mas é essencial para o modelo de repasse e para o engajamento da equipe com o app.

> ⚠️ O **Sales App** não calcula o comissionamento de vendas. Esse cálculo deve ser realizado por um sistema externo com base nos dados do pedido.

## Definir as configurações de pagamento

Defina quais métodos de pagamento estarão disponíveis no **Sales App**. Alguns métodos reaproveitam configurações do ecommerce, enquanto outros exigem a contratação de parceiros ou integrações.

- **Link de pagamento (social selling):** usa o checkout do ecommerce. Para configurá-lo, siga o tutorial [Como ativar o app Carrinho Compartilhável (Social Selling)](/pt/docs/tutorials/como-ativar-o-app-carrinho-compartilhavel).
- **Pix:** usa o mesmo gateway de pagamento do ecommerce.
- **Dinheiro:** o pagamento é controlado fora da plataforma, e o pedido é registrado com o método promissória.
- **Adquirentes homologados:** exigem a contratação de um parceiro disponível na sua região, a configuração dos terminais de pagamento (maquininhas) e do provedor na conta principal, e a realização de testes.
- **Pagamentos não integrados:** usam o método promissória e exigem integração com sistemas externos, como PDV ou ERP, para receber a confirmação do pagamento. São indicados para cartões private label ou métodos de pagamento já consolidados na loja.

> ℹ️ Para mais informações, leia o artigo [Configurar métodos de pagamento para o VTEX Sales App](/pt/docs/tracks/configurar-metodos-de-pagamento-para-o-vtex-sales-app).
