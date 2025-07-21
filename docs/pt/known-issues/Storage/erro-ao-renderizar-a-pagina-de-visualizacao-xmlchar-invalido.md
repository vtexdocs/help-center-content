---
title: "Erro ao renderizar a página de visualização xmlChar inválido"
id: 21ppcawmC16fj0XoJkcIx1
status: PUBLISHED
createdAt: 2024-11-26T18:10:51.721Z
updatedAt: 2024-11-26T18:10:52.614Z
publishedAt: 2024-11-26T18:10:52.614Z
firstPublishedAt: 2024-11-26T18:10:52.614Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: erro-ao-renderizar-a-pagina-de-visualizacao-xmlchar-invalido
locale: pt
kiStatus: Backlog
internalReference: 1140738
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Ao renderizar a página de visualização, ocorre um erro `erro na linha ... na coluna ...: xmlParseCharRef: valor xmlChar inválido ...`. Esse erro ocorre porque o formulário contém um caractere não interpretado pelo analisador XML, fazendo com que a página falhe durante a renderização.

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Storage/erro-ao-renderizar-a-pagina-de-visualizacao-xmlchar-invalido_1.png)

Esse campo foi marcado na caixa de seleção do formulário List Fields.

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Storage/erro-ao-renderizar-a-pagina-de-visualizacao-xmlchar-invalido_2.png)

## Simulação



1. Acesse a página de visualização no sistema.
2. Carregue um formulário que contenha um campo com um caractere não compatível com o analisador XML.
3. Nas ferramentas de desenvolvimento do Chrome, observe que a página não é renderizada e exibe o seguinte

    erro: erro na linha ... na coluna ...: xmlParseCharRef: valor xmlChar inválido ...

## Workaround


Identifique o campo que contém o caractere não suportado.
Remova o caractere inválido do valor do campo usando a API.
Recarregue a página para verificar se ela está sendo renderizada corretamente.

