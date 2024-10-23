---
title: 'Configuração de Preços'
id: KI50xtqPhcdTJS1o4iufD
status: DRAFT
createdAt: 2020-08-24T16:48:46.057Z
updatedAt: 2020-10-22T19:48:46.513Z
publishedAt: 
firstPublishedAt: 
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: configuracao-de-precos
locale: pt
legacySlug: configuracao-de-preco
subcategoryId: 4ZBiXqnPntLbsijZ0djFcD
---

Esta nova seção de Configuração de Preços permite criar e gerenciar regras para tabelas de preços e alterar configurações gerais de forma prática e rápida. 

Essa funcionalidade está em estágio Beta, o que significa que estamos trabalhando para aprimorá-la. Em caso de dúvidas entre em contato com [nosso Suporte](https://help-tickets.vtex.com/smartlink/sso/login/zendesk?brand_id=144968&locale_id=1&return_to=https%3A%2F%2Fsupport.vtex.com%2Fhc%2Fen-us%2Frequests&timestamp=1597160167).

# Gerais

- **Markup padrão para novos preços:** markup é a percentagem de lucro sobre o valor de custo de um produto ou serviço.
- **Usar limite de variação de preço:** garante que os preços dos SKUs não sejam alterados para valores indesejados. 
- **Decréscimo máximo:** menor decréscimo que pode ser reduzido no preço do SKU.
- **Acréscimo máximo:** maior acréscimo que pode ser adicionado no preço do SKU.
- **Em caso de preços inexistentes, herdar da conta-pai:** opção que permite herdar preços de uma conta-pai, caso o preço não exista na conta atual.
- **Sobrescrever preços de sellers:** seleção comum para Seller White Label. Essa opção sobrescrever todos os preços de sellers com os da conta atual.

# Regras para tabelas de preço

<div class = “alert alert-warning”>
<p>Esta seção é a alternativa para clientes que configuravam seus preços por meio de UTM do Pricing V1. Agora é possível selecionar uma tabela de preço para cenários de UTM.</p>
</div>

Nesta seção você pode criar regras de priorização de tabelas de preço a partir de condições específicas.

## Estratégia

- **Menor preço:** configura a loja para usar o menor preço encontrado na sequência de tabelas de preços.
- **Maior preço:** configura a loja para usar o maior preço encontrado na sequência de tabelas de preços.
- **Prioridade (customizado):** configura a loja para usar o primeiro preço encontrado segundo a prioridade de tabelas de preços definida.

## Criar regra para tabela de preço
Para criar uma nova regra, siga os passos a seguir:

1. No Admin, clique no módulo **Preços**.
2. Clique em **Configurações**.
3. Na seção **Regras para tabelas de preço**, clique no botão **Adicionar nova regra**.
4. Preencha o **Nome** da regra.
5. Selecione a tabela de preços que a regra será aplicada. 
6. Indique as condições de ativação da regra:
    - **Sempre ativar:** a tabela de preço está constantemente ativada, independente de condições.
    - **Ativar em condições específicas:** a tabela de preço será ativada segundo as condições configuradas na regra. Veja as possibilidades de configuração com as imagens a seguir:
    
    ![PT-regra-tabela-de-preco3](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Beta/Configurações de Preço Beta/configuracao-de-preco_1.png)
    
    ![PT-regra-tabela-de-preco](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Beta/Configurações de Preço Beta/configuracao-de-preco_2.png)
  
    ![PT-regra-tabela-de-preco2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Beta/Configurações de Preço Beta/configuracao-de-preco_3.png)
    
7. Clique em Confirmar.

## Editar regra para tabela de preço

Para editar uma regra, siga os passos a seguir:

1. No Admin, clique no módulo **Preços**.
2. Clique em **Configurações**.
3. Na seção **Regras para tabelas de preço**, clique no ícone <i class="fas fa-pen"></i>.
4. Realize as alterações desejadas.
5. Clique em Confirmar.

Se você estiver com a estratégia **Prioridade (customizado)** ativada, pode alterar a ordenação das regras para modificar a prioridade. Para isso, clique no ícone <i class="fas fa-grip-vertical" title = “arrastar vertical”></i>, arraste o item e solte para a posição desejada.

## Deletar ou duplicar regra para tabela de preço

Caso você deseje deletar uma regra, basta clicar no ícone <i class="far fa-trash-alt" title = “lixeira”></i> na lista de regras. 

Se você deseja duplicar uma regra, clique no ícone <i class="far fa-clone"></i> da respectiva regra.
    
    
    
