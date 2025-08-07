---
title: "Exibição da disponibilidade do produto atrasada ao usar vários canais de vendas"
id: 7JluVogO4pom0l57UobYIP
status: PUBLISHED
createdAt: 2023-12-07T16:18:59.300Z
updatedAt: 2023-12-07T16:19:00.098Z
publishedAt: 2023-12-07T16:19:00.098Z
firstPublishedAt: 2023-12-07T16:19:00.098Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: exibicao-da-disponibilidade-do-produto-atrasada-ao-usar-varios-canais-de-vendas
locale: pt
kiStatus: Backlog
internalReference: 949411
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A exibição, para lojas de portais antigos, de produtos em PLPs é baseada no canal de vendas da loja e em seus dados básicos de disponibilidade.

Se um produto tiver estoque, preço e seus dados básicos para ser vendido adequadamente em uma loja e pertencer ao canal de vendas mencionado, esse produto estará e deverá ser listado na loja.

No entanto, quando esse produto tiver a tag da opção "mostrar se não estiver disponível" definida como falsa, ele deverá ser removido das páginas da loja quando não puder ser vendido.

Na maioria das vezes, esse processo ocorre de forma eficiente, mas nos casos em que o produto não está disponível para um determinado canal de vendas, mas está para outros, ele ainda pode ser exibido nos canais não intencionais.


**Exemplo**:

1 - O produto 1 está disponível nos canais de vendas 1, 2 e 3.

2 - Ele ficou fora de estoque no canal de vendas 2. Ele não deve mais ser exibido nesse canal.

3 - Como ainda está disponível nos canais 1 e 3, ele pode ficar "preso" e continuar sendo exibido por um longo período no canal 2, apesar de sua indisponibilidade.

*Esse problema só ocorre quando um produto com o referido sinalizador = falso passa de disponível para indisponível em um único canal de vendas e continua sendo exibido nos demais. Essa inconsistência não ocorre no sentido inverso (passando de indisponível para disponível).


## Simulação


Para uma loja com vários canais de vendas e que usa domínios diferentes para cada um, obtenha um produto que esteja disponível em ambos e seja exibido em um resultado de pesquisa específico.

Esse produto de teste deve ter a opção "mostrar mesmo se não estiver disponível" definida como falsa.

Em seguida, defina-o como fora de estoque em um dos canais de vendas.

Ele ainda será exibido, mesmo depois de muito tempo, nos resultados de pesquisa de ambos os domínios, apesar da indisponibilidade em um dos canais

## Workaround


**Opção A**) Execute uma exclusão de indexador e uma reindexação do banco de dados se sua loja tiver menos de 10.000 produtos e tiver vários itens nesse cenário.

**Opção B**) Para um pequeno conjunto de produtos, remova sua disponibilidade da loja por completo (torne-o indisponível em todos os canais de vendas) e, em seguida, reverta imediatamente essas alterações.






