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

A Extensibilidade é a solução que permite à loja complementar a jornada de venda padrão no VTEX Sales App com os recursos necessários ao seu modelo de negócios. Este artigo aprensenta as principais características e casos de uso das extensões e orienta na sua implementação.

## Funcionamento da Extensibilidade

A Extensibilidade é uma solução nativa para as lojas VTEX integrarem com APIs externas e interagirem com dados de outras aplicações com segurança e estabilidade.

Existem sete pontos de extensão no Sales App e cada um permite a interação dos usuários com dados e funções específicas. Estes pontos estão disponíveis nos seguintes contextos da jormada de venda:

* Carrinho de compras e checkout:

  ![extensibilidade_vtex_sales_app_1_cart_checkout_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-sales-app/extensibilidade_vtex_sales_app_1_cart_checkout_PT.png)

* Menu e modal lateral:

  ![extensibilidade_vtex_sales_app_2_menu_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-sales-app/extensibilidade_vtex_sales_app_2_menu_PT.png)

  ![extensibilidade_vtex_sales_app_3_drawer_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-sales-app/extensibilidade_vtex_sales_app_3_drawer_PT.png)

  > ℹ️ Ao clicar no componente da extensão do menu, é aberto um modal à esquerda da interface, o que permite à loja criar múltiplos fluxos de navegação interna.

* Página de detalhes do produto (PDP):

  ![extensibilidade_vtex_sales_app_4_pdp_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-sales-app/extensibilidade_vtex_sales_app_4_pdp_PT.png)

## Segurança e estabilidade de extensões

Sendo uma solução nativa, a Extensibilidade evita comportamentos inesperados e contribui para a continuidade das operações da loja. Alguns dos principais objetivos da funcionalidade são:

* **Segurança:** aumentar a segurança para desenvolvedores na implementação de códigos.
* **Estabilidade:** promover a estabilidade da aplicação, mesmo em cenários de falhas em customizações.
* **Compatibilidade:** preservar a compatibilidade das extensões com customizações, de forma que as evoluções do Sales App não comprometam as modificações realizadas pela loja.

## Casos de uso de extensões

A tabela a seguir apresenta exemplos de contextos nos quais o lojista se beneficia da Extensibilidade:

| Contexto | Descrição |
| :--- | :--- |
| Integração com serviços ou dados externos | Integração com programas de fidelidade, venda de serviços adicionais (como garantias ou seguros), aplicação de descontos em troca de produtos, comissionamento ou financiamento internos, entre outros. Em geral, são integrações com dados e serviços externos que já são utilizados no ecommerce ou loja física. |
| Integração com dados da VTEX | Integrar soluções da VTEX que não fazem parte da jornada padrão do Sales App, como o ecossistema de marketplace ou algumas soluções de pagamento, por exemplo. |
| Centralização de tarefas de vendedores | Permitir que o vendedor capture leads ou consulte determinados dados da gestão da loja, entre outros. Ao realizarem todas as tarefas cotidianas em uma única plataforma, os vendedores ganham em agilidade e eficiência. |

## Passo a passo para implementar extensões

Para realizar a implementação da Extensibilidade, siga as orientações das próximas seções.

> ❗ A implementação da Extensibilidade do Sales App é responsabilidade dos lojistas e parceiros. Para isso, recomendamos seguir nossa documentação oficial.

### Antes de começar

Recomendamos que os desenvolvedores instalem as **Skills de Extensibilidade** nas dependências da loja, para auxiliar os lojistas e parceiros nas etapas de definição e implementação do projeto. Saiba mais em [Skills de Extensibilidade VTEX Sales App](#link).

### 1. Planejar escopo do projeto

O primeiro passo é de planejamento, no qual o lojista ou parceiro deve delimitar o escopo do que será implementado.

**Exemplo:** uma loja vende material para construção e o escopo do seu projeto será adicionar à página de produto (PDP) uma calculadora que mede a quantidade de material necessário por metro quadrado (m²) construído. Por exemplo, o cliente da loja descobre que precisará comprar 16 quilogramas (kg) de argamassa para quatro metros quadrados.

### 2. Mapear experiência do usuário e requisitos técnicos

O segundo passo é mapear de forma detalhada os fluxos da experiência do usuário (UX) e os requisitos técnicos para essa implementação.

> ⚠️ Caso o projeto tenha fluxos e requisitos muito complexos, recomendamos designar para esta etapa um profissional especializado, como um designer ou gestor de produtos, por exemplo.

**Exemplo:** na loja de material para construção, de forma simplificada, o mapeamento incluiria como o usuário acessa a calculadora na fluxo de compra, como a calculadora aparece no storefront e quais cálculos ela permite realizar. O mapeamento dos requisitos técnicos envolveriam detalhar como as operações dessa calculadora vão se relacionar com os dados dos sistemas de Checkout, Catálogo e inventário da loja na implementação.

> ℹ️ Quando o recurso já está implementado no ecommerce, a experiência do usuário no Sales App deve ser a mais similar possível, para manter a consistência da experiência nos canais de venda da loja.

### 3. Viabilidade Técnica e Feedback

Antes do código, o desenvolvedor deve validar se os requisitos se alinham aos hooks e funções existentes nos pontos de extensão e mapear as integrações necessárias de acordo com a documentacão.

> ❗ Caso identifique a inexistência de um hook ou função necessária, abra um ticket para a VTEX explicando seu caso de uso e necessidade para que possamos considerar a necessidade em evoluções do produto.

### 4. Implementação

Após o planejamento o desenvolver deve implementar, podendo rodar de maneira local o projeto, em uma conta VTEX com o Sales App instalado e configurado. Geralmente o merchant, parceiras e agencias já possuem essa conta. Caso contrário, será necessário instalar o Sales App na sua conta VTEX.

Dica: MCP de Extensibilidade

O MCP também pode ajudar na etapa de implementação, com um planejamento e especificações bem definidas, ele poderá desenvolver o front e guiar às integrações necessárias. Ele conhece os hooks e funções, além de toda documentação de extensão, faststore, sales app e VTEX.

### 5. Deploy

Depois que o fluxo estiver testado e validado. O deploy na conta em desenvolvimento pode ser feito seguindo a documentação.

Dica: MCP de Extensibilidade

O MCP também é capaz de guiar o desenvolvedor com o passo a passo para deploy.

> Recomendações para Parceiros com múltiplos clientes utilizando a extensão

Para parceiros que desenvolvem módulos que podem ser reaproveitados em diferentes clientes, a priori a extensão deverá ser copiada para cada repositório. Mas recomendamos entrar em contato com o time de VTEX Sales App para ter sugestões de como habilitar para diferentes cliente.
