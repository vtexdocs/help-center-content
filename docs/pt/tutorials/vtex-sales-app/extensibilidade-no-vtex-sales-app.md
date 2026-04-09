---
title: 'Extensibilidade no VTEX Sales App'
createdAt: 2026-04-02T19:46:33.357Z
updatedAt: 2026-04-02T20:19:18.600Z
contentType: tutorial
productTeam: Shopping
slugEN: extensibility-in-vtex-sales-app
locale: pt
---

> ℹ️ Essa funcionalidade está em fase Beta, o que significa que estamos trabalhando para aprimorá-la. Em caso de dúvidas, entre em contato com nosso [Suporte](https://help.vtex.com/pt/support).

# **Tutorial: Como realizar um Projeto de Extensibilidade Sales App** 

Este guia orienta clientes e parceiros no planejamento e desenvolvimento de extensões para o Sales App. As extensões permitem que recursos únicos sejam integrados à jornada de compra, centralizando operações e personalizando a experiência sem comprometer a estabilidade da plataforma.

## **1\. O que é a Extensibilidade?**

Cada cliente possui necessidades e funcionalidades específicas na jornada de vendas. As extensões existem para complementar a jornada padrão do Sales App com recursos específicos do seu negócio. Os pontos de extensão são um jeito seguro, estável e com controle essencial para evitar quebras e comportamentos inesperados. 

A extensão é a capacidade de inserir componentes próprios em pontos estratégicos da jornada de vendas do Sales App. Os clientes podem integrar APIs externas e interagir com dados da aplicação e ações específicas para desenvolver recursos que tornam sua operação mais eficiente e aderente.

Alguns cenários esperados para criar uma extensão:

* **Integrar serviços ou dados externos:** Integrar programas de fidelidade, venda de serviços adicionais como garantias ou seguros, aplicação de descontos em troca de produtos, motores de comissionamento ou financiamento, ou outros dados e serviços gerados externamente. Geralmente esses serviços já são usados no ecommerce e/ou na loja física.   
* **Integrar dados da VTEX:** Integrar dados e soluções da VTEX essenciais para os eu negócio e que não fazem parte da jornada padrão do Sales App.   
* **Centralizar tarefas do vendedores:** Permitir que o vendedor realize tarefas cotidianas em uma única plataforma, como captura de leads ou consulta de dados. 

Ao identificar a necessidade de uma extensão o cliente ou parceiro é responsável por sua definição e implementação seguindo a documentação da VTEX. 

## **2\. Como funciona a extensão?** 

Existem atualmente 7 pontos de extensão disponíveis no Carrinho/Checkout, na Página de detalhes do produto e em modais adicionais acessados pelo menu do Sales App. Cada um dos pontos de extensão permite interação com dados e funções específicas dentro do contexto da página. Os pontos e conjunto de dados e funções podem ser vistos na documentação técnica.

Os componentes criados em cada ponto podem criar fluxo adicionais com suporte de uma drawer que abre à direita da tela, e pode ser utilizada quando relacionada aos pontos de extensão da PDP e Carrinho.

O ponto de extensão acessado pelo Menu do Sales App sempre abrirá uma drawer à esquerda do fluxo que pode conter multi-navegação interna. 

### **Segurança e Estabilidade**

Os pontos de extensão podem apresentar limitações propositais. Elas garantem que:

* Desenvolvedores apliquem códigos com segurança.  
* A aplicação mantenha a estabilidade mesmo com quebras no fluxo customizado.   
* Evoluções no Sales App não quebrem as customizações feitas pelo cliente. Este modelo garante que o investimento feito na extensão não seja perdido em atualizações futuras.

## **3\. Preparação e Definição de Requisitos do projeto**

Antes de iniciar o desenvolvimento, é fundamental que o **Merchant, Parceiro** ou a **Agência Parceira** defina o escopo do recurso a ser implementado. Este processo deve ser apoiado pelas nossas *documentações* oficiais e de acordo com o recurso a ser implementado. 

## **4\. Passo a Passo do Projeto**

### **Passo 1: Mapeamento de Requisitos e UX**

* Mapeie o passo a passo técnico ou as histórias de usuário (ex: "durante o checkout, o cliente precisa inserir o seu cpf para acessar seus bônus").  
  * Nesse momento, todos requisitos e fluxos do projeto devem ser mapeados.  
* **Recomendação de Design:** se você já tem o recurso implementado no seu ecommerce, Siga a mesma experiência. Utilize nosso material no **Figma** com os pontos de extensão já desenhados como apoio, se precisar.  
* **Recomendação de projeto:** Se o seu projeto tiver requisitos e fluxos complexos é indicado um designer ou gestor de produtos para definicoes de requisitos

Dica: MCP de Extensibilidade

Temos um MCP (inserir link de como instalar) que desenvolvedores podem instalar para auxiliar na fase de definição de projeto, implementação e orientações para o deploy. Nessa etapa, o MCP é capaz de:

- Levantar os requisitos de experiência: Identificar o que as regras de negócio, fluxo esperados e pontos utilizados.Se já existir um projeto ele pode ser utilizado de exemplo para esse levantamento.  
- Estruturar Requisitos: Diferenciar claramente as ações esperadas na experiência do usuário (UX) das ações esperadas pela API (Backend).   
- Definir UI dos componentes: o MCP de Extensão já conhece as guidelines de design e pode propor uma interface baseada nos requisitos levantados, acelerando o trabalho do desenvolvedor e sem necessitar de um designer dedicado

### **Passo 2: Viabilidade Técnica e Feedback**

Antes do código, o desenvolvedor deve validar se os requisitos se alinham aos **hooks** **e funções** existentes nos pontos de extensão e mapear as integrações necessárias de acordo com a documentacão.

* **Atenção:** Caso identifique a inexistência de um *hook* ou função necessária, abra um ticket para a VTEX explicando seu caso de uso e necessidade para que possamos considerar a necessidade em evoluções do produto.

**Passo 3: Implementação**

Após o planejamento o desenvolver deve implementar , podendo rodar de maneira local o projeto, em uma conta VTEX com o Sales App instalado e configurado. Geralmente o merchant, parceiras e agencias já possuem essa conta. Caso contrário, será necessário instalar o Sales App na sua conta VTEX.

Dica: MCP de Extensibilidade

O MCP também pode ajudar na etapa de implementação, com um planejamento e especificações bem definidas, ele poderá desenvolver o front e guiar às integrações necessárias. Ele conhece os hooks e funções, além de toda documentação de extensão, faststore, sales app e VTEX.

**Passo 4: Deploy**

Depois que o fluxo estiver testado e validado. O deploy na conta em desenvolvimento pode ser feito seguindo a documentação. 

Dica: MCP de Extensibilidade

O MCP também é capaz de guiar o desenvolvedor com o passo a passo para deploy.

\> Recomendações para Parceiros com múltiplos clientes utilizando a extensão

Para parceiros que desenvolvem módulos que podem ser reaproveitados em diferentes clientes, a priori a extensão deverá ser copiada para cada repositório. Mas recomendamos entrar em contato com o time de VTEX Sales App para ter sugestões de como habilitar para diferentes cliente.
