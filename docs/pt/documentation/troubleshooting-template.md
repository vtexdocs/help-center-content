---
title: 'Problemas conhecidos'
id: edu0010-pt
status: PUBLISHED
createdAt: 2025-11-25T19:24:22.388Z
updatedAt: 2025-11-25T11:55:00.388Z
publishedAt: 2025-11-25T19:24:22.388Z
firstPublishedAt: 2025-11-25T19:24:22.388Z
contentType: trackArticle
productTeam: Education
slugPT: problemas-conhecidos
locale: pt
trackId: 5PxyAgZrtiYlaYZBTlhJ2A
trackSlugPT: problemas-conhecidos
---

Os artigos de troubleshooting ajudam os usuários a encontrar soluções práticas para os problemas que possam surgir ao usarem a plataforma. 

Neste guia, você verá diretrizes gerais, modelos disponíveis e exemplos de artigos de troubleshooting. 

> ℹ️ Lembre-se de consultar as diretrizes em [Melhores práticas para escrever documentação](https://contentguide.vtex.com/docs/documentation/documentation-overview#best-practices-for-writing-documentation). 

## Como escrever um artigo de troubleshooting

| **Tema** | **Descrição** |
| ------------ | ---------------------- |
| **Título** | Descreva claramente o problema de forma concisa e direta, escrevendo em primeira pessoa. |
| **Introdução** | Apresente uma breve descrição do problema, incluindo os módulos afetados, mensagens de erro e capturas de tela. |
| **Soluções** | Descreva as etapas para resolver o problema, incluindo: <ol><li><b>Nome da solução:</b> Apresente uma label clara e concisa para cada solução.</li><li><b>Passo a passo:</b> Divida a solução em etapas numeradas, usando uma linguagem clara e concisa.</li></ol> |
| **Recursos visuais** | Adicione capturas de tela ou outros recursos visuais para melhorar a compreensão, se aplicável. |
| **Perspectiva do usuário** | Escreva a partir do ponto de vista do usuário, com foco no problema que ele está enfrentando. |
| **Tags e palavras-chave do produto** | **Inclua tags e palavras-chave relevantes para o produto para melhorar a visibilidade na busca.** |
| **Responsabilidade** | Indique quem é responsável por resolver o problema e tomar as medidas necessárias: a VTEX, o usuário ou ambos. |
| **Análise da raiz da causa** | Identifique a causa principal do problema para oferecer soluções eficazes. |

## Modelos de artigos de troubleshooting

<details>
<summary><b>Modelo 1 - Grupos de erros e problemas</b></summary>

```md
# Título
Product tags: [Adicione produtos relacionados ao problema. Exemplo: Pedidos e Pagamentos]

Keywords: [Palavras que ajudam a identificar o conteúdo do artigo na busca. Exemplo: pedido não identificado, SKU, etc.]

[Inclua uma breve introdução descrevendo o problema enfrentado pelo usuário. Sempre que possível, limite-se a dois parágrafos.]

## Solução

Para identificar o significado e indicar a correção específica para cada mensagem de erro, consulte a tabela abaixo:

| Tipo de erro ou mensagem | Significado | Ação necessária |
| :--- | :--- | :--- |
| `{Adicione uma mensagem de erro}` ou `Adicione um tipo de erro` | [Descreva o significado da mensagem ou a causa do tipo de erro. Exemplo: Pedido não encontrado na VTEX (item removido do catálogo ou informação incorreta).] | [Guie o usuário com instruções claras. Exemplo: apresente um resumo das etapas, mencione outro artigo ou recomende entrar em contato com o Suporte para obter mais ajuda.] |
```

</details>
<details>
<summary><b>Modelo 2 - Artigos gerais</b></summary>

```md
# Título

Product tags: [Adicione produtos relacionados ao problema. Exemplo: Pedidos e Pagamentos]

Keywords: [Palavras que ajudam a identificar o conteúdo do artigo na busca. Exemplo: pedido não identificado, SKU, etc.]

[Inclua uma breve introdução descrevendo o problema enfrentado pelo usuário. Sempre que possível, limite-se a dois parágrafos.]

## Solução

[Descreva possíveis soluções para resolver o erro relatado. Quando houver várias etapas para corrigir o erro, elas devem ser divididas em etapas individuais. Veja o próximo template, o Modelo 3 - Artigos gerais: Mais de uma etapa para a solução.]

Para resolver esse problema, há diversas soluções que você pode considerar:

- [Nome da solução 1](#nome-solucao-1): [Descreva o cenário deste problema. Exemplo: "O Site Editor não abre."]

- [Nome da solução 2](#nome-solucao-2): …

### Nome da solução 1

[Título de exemplo: "Verificar perfis de acesso"]

[Descreva o que precisa ser feito para resolver o problema e qual o resultado esperado.]

### Nome da solução 2

.
.
.
```

</details>
<details>
<summary><b>Modelo 3 - Artigos gerais: Mais de um passo para a solução</b></summary>

```md
# Título alternativo

### Nome da solução 1

[Título de exemplo: Configure sua conta VTEX]

[Descreva as etapas da investigação. Em cada etapa, indique os passos necessários para resolver o problema e qual o resultado esperado.]

### Passo 1 - Nome do passo 1

.
.
.

#### Passo 2 - Nome do passo 2

.
.
.

### Nome da solução 2

.
.
.
#### Passo 1 - Nome do passo 1

.
.
.

#### Passo 2 - Nome do passo 2

.
.
.
```

</details>

## Exemplos de artigos de troubleshooting

- [Help Center](https://help.vtex.com/category/troubleshooting--39pDkp8qxSll6mGj0tWViz)
  - [Meu anúncio não é exibido no Mercado Livre](https://help.vtex.com/pt/troubleshooting/meu-anuncio-nao-e-exibido-no-mercado-livre)
  - [O Site Editor da minha loja não está funcionando](https://help.vtex.com/pt/troubleshooting/o-site-editor-da-minha-loja-nao-esta-funcionando)
  - [Promoção não aplicada ao marketplace](https://help.vtex.com/pt/troubleshooting/promocao-nao-aplicada-ao-marketplace)

- [Developer Portal](https://developers.vtex.com/docs/troubleshooting)
  - [I can't update the EAN of my SKUs via API](https://developers.vtex.com/docs/troubleshooting/i-cant-update-the-ean-of-my-skus-via-api)
  - [Modal Layout closes when I click a SKU](https://developers.vtex.com/docs/troubleshooting/modal-layout-closes-when-i-click-a-sku)
  - [My store is slow or unavailable](https://developers.vtex.com/docs/troubleshooting/my-store-is-slow-or-unavailable)
