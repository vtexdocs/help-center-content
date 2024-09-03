---
title: 'Configuração de Preços (Beta)'
id: 5VGOhV4yRpg9WB5B0Pjw1J
status: DRAFT
createdAt: 2020-09-08T15:14:39.844Z
updatedAt: 2022-07-27T12:43:11.380Z
publishedAt: 
firstPublishedAt: 2020-09-24T17:54:32.771Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slug: beta-configuracao-de-precos
locale: pt
legacySlug: configuracao-de-precos-beta
subcategoryId: 2XTQ6yFYeU5bGHK8Qq3f4I
---

>ℹ️ Essa funcionalidade está em estágio Beta, o que significa que estamos trabalhando para aprimorá-la. Em caso de dúvidas, entre em contato com <a href = "https://support.vtex.com/hc/pt-br/requests">nosso Suporte</a>.

Esta nova seção de Configuração de Preços (Beta) permite criar e gerenciar regras para tabelas de preços e alterar configurações gerais de forma prática e rápida. 

## Configurações gerais de Preços

Nesta seção, você pode definir o markup padrão e o limite de variação de preço da sua loja. Aqui também é possível herdar preços da conta-pai e sobrescrever os preços de sellers com os da sua conta.

- **Markup padrão para novos preços:** percentagem de lucro padrão sobre um novo preço cadastrado em um produto ou um serviço.
- **Usar limite de variação de preço:** garante que os preços dos SKUs não sejam alterados para valores indesejados.
  - **Decréscimo máximo:** maior decréscimo no preço de um SKU.
  - **Acréscimo máximo:** maior acréscimo no preço de um SKU.
- **Herdar preços da conta-pai:** opção que permite a conta atual de herdar preços de uma conta-pai. A herança de preços é feita nas seguintes situações:
  - **Sempre:** a conta sempre vai herdar todos os preços da conta-pai.
  - **Apenas para preços inexistentes:** os preços da conta-pai serão herdados apenas se forem inexistentes na conta atual.

<div class = "alet alert-info">
  <p>A configuração <b>Herdar preços da conta-pai</b> é disponível apenas para contas-filhas.</p>
</div>

- **Sobrescrever preços de sellers:** essa opção sobrescreve todos os preços de sellers com os da conta atual.

>ℹ️ A configuração **Sobrescrever preços de sellers** não é disponível para sellers white label.

## Regras para tabelas de preço

<div class = “alert alert-warning”>
  <p>Esta seção é a alternativa para clientes que configuravam seus preços por meio de UTM do Pricing V1. Agora é possível selecionar uma tabela de preço para cenários de UTM.</p>
</div>

Nesta seção você pode criar regras de priorização de tabelas de preço a partir de condições específicas.

### Estratégia

- **Menor preço:** configura a loja para usar o menor preço encontrado na sequência de tabelas de preço.
- **Maior preço:** configura a loja para usar o maior preço encontrado na sequência de tabelas de preço.
- **Prioridade (customizado):** configura a loja para usar o primeiro preço encontrado segundo a prioridade de tabelas de preço definida.

### Criar regra para tabela de preço

Para criar uma nova regra, siga os passos a seguir:

1. No Admin, clique no módulo **Preços**.
2. Clique em **Configurações**.
3. Na seção **Regras para tabelas de preço**, clique no botão **Adicionar nova regra**.
4. Preencha o **Nome** da regra.
5. Selecione a tabela de preços que a regra será aplicada.
6. Indique as condições de ativação da regra:

  a. **Sempre ativar:** a tabela de preço está constantemente ativada, independente de condições.

  b. **Ativar em condições específicas:** a tabela de preço será ativada segundo as condições configuradas na regra. Veja as possibilidades de configuração com as imagens a seguir:

  ![config-preco-PT](https://images.ctfassets.net/alneenqid6w5/4U3RNX4VaQm3EPUO3JX0Pu/d8ef577cd574c3bf765b38c63f08bd7b/config-preco-PT.png)

  ![config-preco2-PT](https://images.ctfassets.net/alneenqid6w5/3RYREfiFKxAPqodf8uCAy6/3500e92785edeef7184e5f4f273f1f38/config-preco2-PT.png)

  ![config-preco3-PT](https://images.ctfassets.net/alneenqid6w5/56mqdIxfxQMDOzzod8Juc5/e14da5f91d1b77a354ee9319ab5d6470/config-preco3-PT.png)

7. Clique em **Confirmar**. 

### Editar regra para tabela de preço

Para editar uma regra, siga os passos a seguir:

1. No Admin, clique no módulo **Preços**.
2. Clique em **Configurações**.
3. Na seção **Regras para tabelas de preço**, clique no ícone <i class="fas fa-pen"></i>.
4. Realize as alterações desejadas.
5. Clique em **Confirmar**.

Se você estiver com a estratégia **Prioridade (customizado)** ativada, pode alterar a ordenação das regras para modificar a prioridade. Para isso, clique no ícone <i class="fas fa-grip-vertical" title = "arrastar vertical"></i>, arraste o item e solte para a posição desejada.

## Deletar ou duplicar regra para tabela de preço

Caso você deseje deletar uma regra, basta clicar no ícone <i class="fas fa-trash-alt" title = "lixeira"></i> na lista de regras. 

Se você deseja duplicar uma regra, clique no ícone <i class="fas fa-clone" title = "clonar"></i> da respectiva regra.

