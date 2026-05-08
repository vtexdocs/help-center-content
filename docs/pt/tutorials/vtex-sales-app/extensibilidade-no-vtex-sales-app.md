---
title: 'Extensibilidade no VTEX Sales App'
createdAt: 2026-04-09T19:46:33.357Z
updatedAt: 2026-04-09T19:46:33.357Z
contentType: tutorial
productTeam: Shopping
slugEN: extensibility-in-vtex-sales-app
locale: pt
---

> ℹ️ Essa funcionalidade está em fase Beta, o que significa que estamos trabalhando para aprimorá-la. Em caso de dúvidas, entre em contato com nosso [Suporte](https://help.vtex.com/pt/support).

A Extensibilidade é a solução que permite às lojas complementarem a jornada de venda padrão no VTEX Sales App com os recursos necessários a sua operação. Este artigo aprensenta as principais características e casos de uso das extensões e orienta como implementar a solução.

## Funcionamento da Extensibilidade

A Extensibilidade é uma solução nativa para as lojas VTEX integrarem com APIs externas e interagirem com dados de outras aplicações com segurança e estabilidade.

Existem sete pontos de extensão no Sales App e cada um permite a interação dos usuários com dados e funções específicas. Estes pontos estão disponíveis nos seguintes contextos:

* Carrinho de compras e checkout:

  ![extensibilidade_vtex_sales_app_1_cart_checkout_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-sales-app/extensibilidade_vtex_sales_app_1_cart_checkout_PT.png)

* Menu e modal lateral:

  ![extensibilidade_vtex_sales_app_2_menu_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-sales-app/extensibilidade_vtex_sales_app_2_menu_PT.png)

  ![extensibilidade_vtex_sales_app_3_drawer_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-sales-app/extensibilidade_vtex_sales_app_3_drawer_PT.png)

  > ℹ️ Ao clicar no componente da extensão do menu, é aberto o modal que fica à esquerda da interface. Isso permite às lojas criarem múltiplos fluxos de navegação interna.

* Página de detalhes do produto (PDP):

  ![extensibilidade_vtex_sales_app_4_pdp_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-sales-app/extensibilidade_vtex_sales_app_4_pdp_PT.png)

## Segurança e estabilidade de extensões

Sendo uma solução nativa, a Extensibilidade evita comportamentos inesperados e contribui para a continuidade das operações da loja. Alguns dos principais objetivos da funcionalidade são:

* **Segurança:** aumentar a segurança com que pessoas desenvolvedoras implementam códigos.
* **Estabilidade:** promover a estabilidade da aplicação, mesmo em cenários de falhas em customizações existentes.
* **Compatibilidade:** preservar a compatibilidade das extensões com customizações, de forma que evoluções do Sales App não comprometam modificações realizadas pela loja.

## Casos de uso de extensões

Alguns exemplos de contextos que se beneficiam da Extensibilidade são:

| Contexto | Descrição |
| :--- | :--- |
| Integração com serviços ou dados externos | Integração com programas de fidelidade, venda de serviços adicionais (como garantias ou seguros), aplicação de descontos em troca de produtos, motores de comissionamento ou financiamento, ou outros dados e serviços gerados externamente. Em geral, são serviços já utilizados no ecommerce e/ou na loja física. |
| Integração com dados da VTEX | Integrar dados e soluções da VTEX essenciais para o negócio e que não fazem parte da jornada padrão do Sales App, como o contexto de marketplace ou algumas soluções de pagamento. |
| Centralização de tarefas de vendedores | Permitir que o vendedor capture leads ou consulte determinados dados da gestão da loja, por exemplo. Ao realizar todas suas tarefas cotidianas em uma única plataforma, os vendedores ganham em agilidade e eficiência. |

## Passo a passo para implementar extensões

Para realizar a implementação da Extensibilidade, siga os passos desta seção.

> ⚠️ A implementação da Extensibilidade do Sales App é responsabilidade dos lojistas e parceiros. Para isso, recomendamos seguir nossa documentação oficial.

### 1. Planejar escopo do projeto

O primeiro passo é de planejamento, no qual o lojista ou parceiro deve delimitar o escopo do que será implementado.

**Exemplo:** em uma loja que vende material para construção, o escopo do projeto será adicionar à página de produtos (PDP) uma calculadora da quantidade de material necessário para a contrução por metro quadrado, de forma que para cada metro quadrado (m²) construído, o cliente da loja deve adquirir 4 quilogramas (kg) de argamassa.

> ⚠️ Nesta etapa, recomendamos que seja feita a instalação das Skills da Extensibilidade do Sales App, pois elas auxiliam na implementação das extensões.

### 2. Mapear fluxo da experiência do usuário

O segundo passo é mapear de forma detalhada os fluxos da experiência do usuário (UX) e os requisitos técnicos para essa implementação.

> ℹ️ Nesta etapa de mapeamento, uma ótima ferramenta para auxiliar são as **Skills de Extensibilidade**, que desenvolvedores podem instalar para auxiliar na fase de definição de projeto, implementação e orientações para o deploy. Saiba mais na documentação de [Skills de Extensibilidade no VTEX Sales App](#link).

**Exemplo:** na loja de material para construção, de forma simplificada, o mapeamento incluiria como o usuário acessa a calculadora na fluxo de compra, como a calculadora aparece no storefront e quais cálculos ela permite. O mapeamento dos requisitos técnicos envolveriam detalhar como as operações da calculadora vão se relacionar com os dados de checkout, catálogo e inventário da loja na implementação.

> ℹ️ Quando o recurso já está implementado no ecommerce, recomendamos à loja proporcionar a mesma experiência de fluxo, para manter a consistência da experiência nos seus canais de venda.

#### Dica: MCP de Extensibilidade

Temos um MCP (inserir link de como instalar) que desenvolvedores podem instalar para auxiliar na fase de definição de projeto, implementação e orientações para o deploy. Nessa etapa, o MCP é capaz de:

* Levantar os requisitos de experiência: Identificar o que as regras de negócio, fluxo esperados e pontos utilizados.Se já existir um projeto ele pode ser utilizado de exemplo para esse levantamento.  
* Estruturar Requisitos: Diferenciar claramente as ações esperadas na experiência do usuário (UX) das ações esperadas pela API (Backend).
* Definir UI dos componentes: o MCP de Extensão já conhece as guidelines de design e pode propor uma interface baseada nos requisitos levantados, acelerando o trabalho do desenvolvedor e sem necessitar de um designer dedicado

> ℹ️ Caso o projeto tenha fluxos e requisitos muito complexos, recomendamos ao lojista designar alguém especializado para esta etapa, como um designer e/ou gestor de produtos.

### 3. Viabilidade Técnica e Feedback

Antes do código, o desenvolvedor deve validar se os requisitos se alinham aos hooks e funções existentes nos pontos de extensão e mapear as integrações necessárias de acordo com a documentacão.

> ❗ Caso identifique a inexistência de um hook ou função necessária, abra um ticket para a VTEX explicando seu caso de uso e necessidade para que possamos considerar a necessidade em evoluções do produto.

### Passo 3: Implementação

Após o planejamento o desenvolver deve implementar , podendo rodar de maneira local o projeto, em uma conta VTEX com o Sales App instalado e configurado. Geralmente o merchant, parceiras e agencias já possuem essa conta. Caso contrário, será necessário instalar o Sales App na sua conta VTEX.

Dica: MCP de Extensibilidade

O MCP também pode ajudar na etapa de implementação, com um planejamento e especificações bem definidas, ele poderá desenvolver o front e guiar às integrações necessárias. Ele conhece os hooks e funções, além de toda documentação de extensão, faststore, sales app e VTEX.

### Passo 4: Deploy

Depois que o fluxo estiver testado e validado. O deploy na conta em desenvolvimento pode ser feito seguindo a documentação.

Dica: MCP de Extensibilidade

O MCP também é capaz de guiar o desenvolvedor com o passo a passo para deploy.

> Recomendações para Parceiros com múltiplos clientes utilizando a extensão

Para parceiros que desenvolvem módulos que podem ser reaproveitados em diferentes clientes, a priori a extensão deverá ser copiada para cada repositório. Mas recomendamos entrar em contato com o time de VTEX Sales App para ter sugestões de como habilitar para diferentes cliente.
