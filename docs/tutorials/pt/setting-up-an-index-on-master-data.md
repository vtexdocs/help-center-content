---
title: Configurar índice no Master Data
id: tutorials_785
status: PUBLISHED
createdAt: 2017-04-27T21:58:03.173Z
updatedAt: 2022-10-17T18:32:35.482Z
publishedAt: 2022-10-17T18:32:35.482Z
firstPublishedAt: 2017-04-27T23:03:42.760Z
contentType: tutorial
productTeam: Post-purchase
author: authors_3
slug: configurando-indice-no-master-data
legacySlug: configurando-indice-no-master-data
subcategory: WpbGhubuRZaNZilJSXnqu
---

Índice é uma referência a uma ou mais colunas, que é utilizada para otimização das consultas em uma entidade de dados. Isto é, é um estrutura que permite uma busca mais rápida de registros.

Para ilustrar, imagine que o índice no Master Data funciona como um índice de um livro, que contém a indicação das abordagens desse livro. Quando se deseja fazer uma pesquisa, ao invés de ter que passar por todas as páginas do livro, uma a uma, para encontrar o resultado desejado, é possível acessar o índice e ir direto ao termo que deseja. É assim que funciona o índice no Master Data, fornecendo um método mais eficiente de recuperação de dados.

<!--No Master Data, existem dois usos para o índice:-->






## Consultas rápidas que retornam até mil documentos

O uso do índice é indicado para resultado de buscas de até mil documentos. Isto, pois caso o retorno de buscas frequentemente retorne um valor maior de documentos, é mais performático que se indexe este campo, ou seja, que marque o campo como filtro na configuração de entidade de dados. 
Ou seja, em casos de resultados de buscas muito grandes (mais de mil documentos) [é mais indicada a configuração de um filtro com o campo que estava no índice](/tutorial/filtrando-dados-no-master-data/ "é mais indicada a configuração de um filtro com o campo que estava no índice"). Assim, a busca será feita mais rapidamente do que com o índice.

## Restrição de valores por documento (uma chave alternativa)

Existe também a possibilidade de se bloquear uma ou mais colunas para receber valores repetidos. O nome técnico utilizado para esse conceito é chave alternativa. A chave alternativa é configurada pelo campo **Valores Únicos** na criação do índice e funciona de maneiras diferentes dependendo da quantidade de campos inseridos no índice. 

### Um só campo no índice

A chave alternativa não vai permitir que um valor que já foi cadastrado nesse campo seja cadastrado novamente. 

**Exemplos:**
A tabela cliente possui 2 colunas: ID e nome.
ID é um número que não se repete, pois é o número que identifica o cliente. Nome é o nome do cliente.
Porém, para facilitar a busca, a coluna nome foi criada como índice e colocada como **Valores Únicos**. 

[![indice1](//images.contentful.com/alneenqid6w5/2Z02pI4DxeaaWOmYw42Suu/60bb0d893f5bd07f94928288390a5526/image011.png)](//images.contentful.com/alneenqid6w5/2Z02pI4DxeaaWOmYw42Suu/60bb0d893f5bd07f94928288390a5526/image011.png "![indice1](//images.contentful.com/alneenqid6w5/2Z02pI4DxeaaWOmYw42Suu/60bb0d893f5bd07f94928288390a5526/image011.png)")Com isso, caso se queira inserir um nome que já tenha sido cadastrado em Cliente, não será possível. 

[![indice2](//images.contentful.com/alneenqid6w5/FwEjcrqaQwKE8U4AEMOY4/ca741feb38fb89e6c3e0bd3ec442ba37/image002.png)](//images.contentful.com/alneenqid6w5/FwEjcrqaQwKE8U4AEMOY4/ca741feb38fb89e6c3e0bd3ec442ba37/image002.png "![indice2](//images.contentful.com/alneenqid6w5/FwEjcrqaQwKE8U4AEMOY4/ca741feb38fb89e6c3e0bd3ec442ba37/image002.png)")
Esse exemplo mostra que a opção **Valores Únicos** deve ser utilizada com cuidado, pois, caso um valor possa se repetir, ele será impedido de ser cadastrado com a configuração realizada.

### Vários campos no Índice

Neste caso, a chave alternativa vai impedir que a combinação dos campos selecionados se repitam. 

**Exemplos:**

Seguindo o mesmo exemplo, imagine que a entidade cliente tenha mais uma coluna: CPF. Então, na configuração do índice, em **Composição de campos**, foram inseridas as colunas nome e CPF.

[![indice3](//images.contentful.com/alneenqid6w5/41Y8vUIFjWGuqoqwA6UYaK/0a33bc147f17f95ea5038124bbd5132a/image021.png)](//images.contentful.com/alneenqid6w5/41Y8vUIFjWGuqoqwA6UYaK/0a33bc147f17f95ea5038124bbd5132a/image021.png "![indice3](//images.contentful.com/alneenqid6w5/41Y8vUIFjWGuqoqwA6UYaK/0a33bc147f17f95ea5038124bbd5132a/image021.png)")
Então, agora é possível incluir o Marcos do exemplo anterior, basta que ele não tenha o mesmo CPF que o Marcos já inserido. Ou seja, apenas a combinação de campos não pode se repetir. Podem ter CPFs repetidos entre si e podem ter nomes repetidos entre si, porém, não pode ser CPF e nome repetido para o mesmo registro.

[![indice4](//images.contentful.com/alneenqid6w5/36308RenwQq2aYcSkAYq6K/5a18bd8e7eca83e3f7ac40d3e6ca41ad/image031.png)](//images.contentful.com/alneenqid6w5/36308RenwQq2aYcSkAYq6K/5a18bd8e7eca83e3f7ac40d3e6ca41ad/image031.png "![indice4](//images.contentful.com/alneenqid6w5/36308RenwQq2aYcSkAYq6K/5a18bd8e7eca83e3f7ac40d3e6ca41ad/image031.png)")

__Lembre-se!__ Neste caso também é necessário atenção pois a mesma combinação de valores não poderão e repetir e o registro será impossibilitado de ser gravado. Recomendamos que o atributo **Valores Únicos** no Índice seja utilizado apenas quando os valores não têm possibilidade de se repetir.
