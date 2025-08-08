---
title: 'Pagamento com cartão via Sales App (sem maquininha)'
id: 48OR7InFvdLW6hekvfESs3
status: PUBLISHED
createdAt: 2025-03-28T15:33:24.822Z
updatedAt: 2025-04-10T19:05:57.726Z
publishedAt: 2025-04-10T19:05:57.726Z
firstPublishedAt: 2025-03-28T16:09:38.187Z
contentType: tutorial
productTeam: Shopping
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: sales-app-card-entry-without-payment-terminal
legacySlug: pagamento-com-cartao-via-sales-app
locale: pt
subcategoryId: 4T6qfa6gNO6g4sAUIa6s2G
---

A funcionalidade **Pagamento com cartão via Sales App** permite que a loja realize vendas por meio de cartões de crédito, mas sem precisar de maquininhas. A solução habilita o pagamento com cartão pelo próprio **VTEX Sales App** e permite o escaneamento automático do cartão ou preenchimento manual dos dados. Tudo realizado com segurança, pois os dados são mascarados e as informações não são armazenadas.

Com essa funcionalidade, a compra é processada pelo mesmo gateway do ecommerce, de forma que as configurações de Checkout do ecommerce são válidas. Após a venda, a confirmação de pagamento ocorre pelo próprio **VTEX Sales App**.

Este artigo apresenta a solução **Pagamento com cartão via Sales App** e está organizado nas seguintes seções:

- [Características](#caracteristicas)
- [Benefícios](#beneficios)
- [Casos de uso](#casos-de-uso)
- [Configurações](#configuracoes)
- [Usando a solução](#usando-a-solucao)

## Características

O **Pagamento com cartão via Sales App** tem as seguintes características:

- ✅ Permite pagamentos pelas mesmas bandeiras de cartão de crédito do ecommerce.
- ✅ Inclui as mesmas [condições de pagamento](https://help.vtex.com/pt/tutorial/diferenca-entre-meios-de-pagamento-e-condicoes-de-pagamento--3azJenhGFyUy2gsocms42Q) e parcelamentos disponíveis no ecommerce.
- ✅ É [PCI compliant](https://help.vtex.com/pt/tutorial/o-que-e-o-pci-ssc), ou seja, protege os dados dos clientes e não armazena informações sensíveis.

No entanto, a funcionalidade tem restrições:

- ❌ Não oferece suporte a [Cartões de Loja](https://help.vtex.com/pt/tutorial/configurar-pagamentos-com-cartoes-de-loja-bandeira-propria--428FgVdSGQUeAOoogkaIw4) de terceiros.
- ❌ Não permite o uso de múltiplos cartões para uma mesma compra.

## Benefícios

A tabela a seguir apresenta as principais vantagens de usar o **Pagamento com cartão via Sales App:**

| **Tema** | **Descrição** |
| :---: | :--- |
| **Rapidez e praticidade** | O escaneamento do cartão do cliente e a possibilidade de preenchimento automático (ou manual) aceleram e simplificam o fechamento da compra. |
| **Experiência integrada e sem fricções** | A realização da compra e confirmação do pagamento ocorrem no **VTEX Sales App**, o que elimina a necessidade de múltiplos ambientes para a conclusão da venda e promove uma experiência contínua. |
| **Compras seguras** | Durante a compra, o cliente acompanha o escaneamento do cartão e o preenchimento (automático ou manual) dos dados, que permanecem mascarados e não são armazenados após a conclusão da compra. |
| **Suporte a cartões virtuais** | O **Pagamento com cartão via Sales App** suporta cartões físicos numerados ([código BIN](https://help.vtex.com/pt/tutorial/cadastrar-informacoes-de-bins--7xvo4JJ53WM7aLzufdC4au)) e cartões virtuais, expandindo as opções de pagamento para os clientes. |
| **Starter kit de pagamento** | Além da opção [carrinho compartilhado (Social Selling)](https://help.vtex.com/pt/tracks/instore-usando-o-app--4BYzQIwyOHvnmnCYQgLzdr/6deiffo22iKkY27PkfstXy), com o Pagamento com cartão via Sales App os lojistas que estão começando a usar o VTEX Sales App podem integrar a solução sem depender da contratação de um adquirente adicional. |

## Casos de uso

Ao utilizar o **Pagamento com cartão via Sales App** em vendas de [Prateleira Infinita](https://help.vtex.com/pt/tracks/estrategias-de-comercio-unificado--3WGDRRhc3vf1MJb9zGncnv/40KMlmGI5tN0r0KPCDWgGn) com entrega padrão (acima de 24h), o processamento da compra ocorre pelo mesmo fluxo de checkout do ecommerce e é considerado um caso de cartão não presente, termo técnico para quando o pagamento não é considerado como tendo sido realizado com um cartão físico.

<div class="alert alert-danger">
<p>As transações realizadas pela funcionalidade estão sujeitas às regras de antifraude e, quando a autorização da compra passa pelo fluxo de antifraude, sua aprovação pode demorar até 24h. Por este motivo, não é recomendado utilizar o <b>Pagamento com cartão via Sales App</b> nos seguintes cenários</p><p><ul><li>Vendas com entrega expressa</li><li>Vendas de estoque local (On Hands)</li></ul></p>
</div>

Caso a loja tenha uma [política comercial](https://help.vtex.com/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) para o **VTEX Sales App** separada do ecommerce, com uma revisão de regras do antifraude exclusiva, é possível usar o **Pagamento com cartão via Sales App** para vendas com estoque local (On Hands) ou entrega expressa.

## Configurações

As configurações necessárias para ativar a funcionalidade são diferentes para lojas que já utilizam o **VTEX Sales App** ou que vão começar a usar a solução.

<div class="alert alert-warning">
Antes de ativar a funcionalidade, certifique-se que a loja tenha uma integração com um parceiro de pagamentos e seja capaz de processar vendas com cartão de crédito.
</div>

### Lojas começando a usar o VTEX Sales App

Ao [configurar o VTEX Sales App](https://help.vtex.com/pt/tracks/instore-primeiros-passos-e-configuracoes--zav76TFEZlAjnyBVL5tRc/4L5SoLxE8O3YkxF7FKymrO), na etapa de habilitação de meios de pagamento, mantenha ativada a opção <i class="fas fa-toggle-on" aria-hidden="true"></i> **Pagamento com cartão via Sales App.**

### Lojas que usam o VTEX Sales App

Para usar o **Pagamento com cartão via Sales App**, existem duas configurações principais a serem checadas, uma do Checkout e outra de Pagamentos.

#### Configuração no Checkout

Os IDs das bandeiras de cartões de crédito precisam estar habilitados como meios de pagamento nas configurações de pagamento do VTEX Sales App. Para confirmar, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Storefront > Checkout**, ou digite **Checkout** na barra de busca no topo da página.
2. Clique no ícone <i class="fas fa-cog" alt="engrenagem azul" aria-hidden="true"></i> engrenagem em `Default`.
3. Clique na aba **Código**.
4. Em **Arquivos**, clique em `Checkout-instore-custom.js`.
5. Confira as informações e, caso adicione um novo ID de pagamento, clique em `Salvar`. 

#### Configuração em Pagamentos

Os IDs das bandeiras de cartão de crédito devem estar habilitados para pagamentos nessa modalidade. Para confirmar, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Confirme se os IDs das bandeiras de cartão de crédito estão com situação `Ativa`. Caso não estejam, prossiga para o passo seguinte.
3. Configure uma [condição de pagamento](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento--tutorials_455) de cartão de crédito para a sua loja.

## Usando a solução

Após realizar as [configurações](#configuracoes) de sistema, conheça as instruções para fazer uma venda com o **Pagamento com cartão via Sales App**.

### Antes da venda

Autorize o funcionamento da câmera no aplicativo do **VTEX Sales App**, o que pode ser feito nas configurações do app ou no primeiro acesso ao **Pagamento com cartão via Sales App**. Esta configuração é necessária para o escaneamento de cartões.

### Finalizando a venda

Realize os passos abaixo para vender usando o **Pagamento com cartão via Sales App**:

1. No checkout do **VTEX Sales App**, na etapa para que você `Selecione um meio de pagamento`, clique em `Digitar cartão`.
2. Selecione a opção para escanear o cartão ou digitar os dados manualmente.
3. Capture automaticamente os dados do cartão com a tela de captura ou preencha os dados de forma manual. É necessário escanear a frente e o verso do cartão.
4. Após a aprovação do pagamento, a confirmação da compra é feita no **VTEX Sales App**.

<div class = "alert alert-info">
Caso o cliente prefira, ele pode realizar ele próprio o escaneamento do cartão ou preenchimento manual dos dados.
</div>

## Saiba mais

- [VTEX Sales App: FAQ](https://help.vtex.com/pt/tutorial/vtex-sales-app-faq--3CRKQHzflSW0DXenEHUpP5)
- [Compartilhar carrinho utilizando o VTEX Sales App Social Selling](https://help.vtex.com/pt/tracks/instore-usando-o-app--4BYzQIwyOHvnmnCYQgLzdr/6deiffo22iKkY27PkfstXy)
- [Pré-requisitos para usar o VTEX Sales App](https://help.vtex.com/pt/tracks/instore-primeiros-passos-e-configuracoes--zav76TFEZlAjnyBVL5tRc/1wtAanSRA3g2316dw7bw8u)
