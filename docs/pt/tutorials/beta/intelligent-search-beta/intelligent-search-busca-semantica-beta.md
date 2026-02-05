---
title: 'Intelligent Search: Busca semântica (Beta)'
id: 366JCdaoDVz8V3FFZZ2fUD
status: PUBLISHED
createdAt: 2025-06-13T14:11:56.694Z
updatedAt: 2025-10-29T21:46:04.706Z
publishedAt: 2025-10-29T21:46:04.706Z
firstPublishedAt: 2025-06-13T14:15:17.126Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: intelligent-search-semantic-search-beta
legacySlug: intelligent-search-busca-hibrida-beta
locale: pt
subcategoryId: 23WdCYqmn2V2Z7SDlc14DF
---

> ℹ️ Essa funcionalidade está na fase Beta fechado, o que significa que somente clientes selecionados têm acesso a ela no momento. Se já é cliente da VTEX e deseja adotar essa funcionalidade em seu negócio, entre em contato com o [Suporte Comercial](/pt/docs/tracks/suporte-comercial). É possível que taxas adicionais se apliquem. Se ainda não é cliente, mas tem interesse nesta solução, preencha o [formulário de contato](https://vtex.com/br-pt/contato/).

O Intelligent Search combina a precisão das técnicas lexicais com a inteligência dos modelos semânticos de busca para oferecer uma experiência relevante, fluida e adaptada à intenção do usuário.

Essa estratégia melhora a descoberta de produtos, aumenta a conversão e reduz atrito nas interações, especialmente em catálogos extensos e variados.

## Conceitos iniciais

O Intelligent Search une dois conceitos principais:

* **Busca lexical**: baseada na correspondência direta de palavras-chave.  
* **Busca semântica**: focada na interpretação do significado e da intenção por trás da consulta.

Saiba mais sobre cada um a seguir.

### Busca lexical

A camada lexical da busca opera com base na correspondência direta entre os termos da consulta e os dados indexados no catálogo — como nome do produto, descrição, atributos técnicos, entre outros. Essa abordagem funciona bem quando o cliente utiliza palavras-chave exatas ou busca por códigos de produto.

**Exemplo:**

* **Consulta:** `Tênis Nike Air Max 90`  

   * A busca lexical retorna exatamente os produtos com esse nome no catálogo.

### Busca semântica

Já a camada semântica, baseada em **Processamento de Linguagem Natural (NLP)** e **modelos de machine learning**, interpreta o significado das palavras e o contexto em que são usadas. Ela reconhece sinônimos, relaciona termos semelhantes e identifica a intenção do cliente mesmo quando a consulta não menciona palavras exatas encontradas no catálogo.

**Exemplo:**

* **Consulta**: `tênis para correr maratona`  

   * A busca semântica entende que o usuário procura um tênis com foco em performance de longa distância, e prioriza produtos voltados para corrida de resistência, mesmo que não usem “maratona” na descrição.

* **Consulta**: `roupas para treino no frio`

   * **Lexical**: pode não encontrar correspondência direta com “treino no frio”.  
   * **Semântica**: entende que o usuário procura por vestuário esportivo com proteção térmica, e prioriza peças como calças térmicas e blusas de manga longa.

## Abordagem do Intelligent Search

O Intelligent Search combina essas duas estratégias de forma dinâmica. A plataforma utiliza modelos semânticos treinados para o contexto de varejo e complementa essa interpretação com a estrutura lexical consolidada no Intelligent Search.

Esse modelo considera:

* Campos estruturados do catálogo (lexical)  
* Relações entre termos e sinônimos (semântica)  
* Contexto da busca e comportamento do usuário  
* Relevância estatística e aprendizado de máquina

O resultado é um sistema de busca que oferece resultados mais alinhados ao que os consumidores realmente querem encontrar, mesmo quando usam linguagem natural ou ambígua.

Exemplo: um ecommerce de informática recebe tanto buscas específicas por "SSD A400 480GB" (cenário em que a busca léxica é ideal) quanto consultas como "melhor armazenamento para jogos" (cenário em que a busca semântica é superior). O Intelligent Search consegue lidar eficientemente com ambas as consultas.

Na prática, se um cliente digita "memória 16GB", por exemplo, a parte léxica identifica a capacidade exata (16GB) enquanto o componente semântico entende que "memória" pode se referir tanto a RAM quanto a cartões de memória, apresentando ambas as categorias com prioridade para os produtos mais relevantes baseados no comportamento anterior do usuário.

## Vantagens

A seguir, destacamos as principais vantagens dessa solução para a experiência do consumidor e a performance da loja:

* **Aumento na conversão:** a entrega de resultados mais relevantes reduz o tempo até a descoberta de um produto, o que pode acelerar decisões de compra.  
* **Entendimento de linguagem natural:** clientes podem buscar como falam: com perguntas completas, termos vagos ou linguagem informal. Por exemplo, é possível fazer uma consulta `qual é o melhor tênis para trilha?` e a busca entende que o cliente procura calçados com características específicas, como solado tratorado e resistência à água.  
* **Suporte a casos complexos de descoberta:** ideal para catálogos com produtos com descrições mais subjetivas (ex: moda, beleza, decoração), onde o atributo exato pode não estar explicitamente presente, mas a intenção do usuário pode ser inferida.

