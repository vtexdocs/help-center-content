---
title: 'Configurar XML'
id: tutorials_242
status: PUBLISHED
createdAt: 2017-04-27T22:12:41.700Z
updatedAt: 2023-03-14T17:46:51.658Z
publishedAt: 2023-03-14T17:46:51.658Z
firstPublishedAt: 2017-04-27T23:03:10.195Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slug: configurando-xml
locale: pt
legacySlug: xml-de-produtos
subcategoryId: 2OCA7SVfWoMSiAi0GEGwKo
---

XML é uma linguagem de marcação que permite a comunicação entre computadores e aplicações. Sua principal característica é a estrutura hierarquicamente organizada para a criação de textos, banco de dados ou desenhos vetoriais. 

A linguagem XML pode ser combinada com diferentes padrões, o que possibilita que um XML criado a partir do banco de dados A possa ser lido pelo banco de dados B. 

A funcionalidade de configuração do XML na VTEX se utiliza dessa característica de poder combinar diferentes padrões para possibilitar que outros bancos de dados leiam as estruturas criadas pelo banco de dados da VTEX. 

Isso quer dizer que, ao preencher os nomes da *tag* no campo __Id do Produto__, por exemplo, com __Product_Id__, o banco de dados da VTEX entenderá que ali deverá preencher essa informação, tornando possível a compreensão do lado dos sistemas do Google, Facebook, Buscapé, entre outros, que lerão a estrutura.

Veja a seguir alguns exemplos de parceiros que integram com o XML da VTEX:

- Afilio
- Buscapé
- Criteo
- Facebook
- Google
- MSN
- Sociomantic
- UOL
- UOL Dynad
- Zanox

>ℹ️ Alterações no XML levam em média duas horas para serem atualizadas.

## Novo XML

Antes de realizar o cadastro de um novo XML, é importante ter acesso à estrutura do sistema para o qual pretende exportar seu catálogo. Ou seja, você precisará saber os nomes das *tags* que são utilizadas pelo XML deles e quais informações eles exigem para que essa estrutura seja montada, por exemplo ID do produto, nome do produto, ID do SKU, nome do SKU, preço, entre outras.

Com isso em mãos, siga os passos abaixo para configurar o seu XML:

1. No Admin VTEX, acesse __Configurações da loja__, ou digite __Configurações da loja__ na barra de busca no topo da página.
2. Em __Canais__, clique em __Integração XML__.
3. Em seguida, clique no botão `Novo XML`.
   Você será redirecionado(a) para um formulário.
4. Selecione o __Tipo de XML__.
5. Preencha o nome do arquivo, para identificá-lo na lista de XMLs.
6. Escolha o __Tipo de codificação__.
7. Defina qual coleção terá seus produtos listados.
8. Selecione o símbolo de moeda nos preços.
9. Escolha a formatação dos preços (com ou sem separador de milhar).
10. Selecione entre usar o separador de categorias padrão ou do Google Shopping (leia mais sobre configurações para XML do Google Shopping no artigo [Padrão de valor para Atributo de Especificações de Produto - GoogleShopping](http://help.vtex.com/pt/tutorial/atributo-de-especificacoes-de-produto-xml-googleshopping/)).
11. Escolha se exibirá no site do marketplace os SKUs indisponíveis ou não, ou seja, se o produto será exibido para compra, ainda que não esteja disponível para pronta entrega.
12. Selecione se quer que o produto seja exibido com as informações do SKU padrão.
13. A partir daqui, preencha as *tags* conforme definido pelo sistema para o qual enviará o XML. Marque a caixa de seleção da coluna __Mostrar conteúdo__, nas tags que tiver preenchido o nome. As tags que já estiverem com essa opção marcada e cuja seleção não for possível desfazer são de preenchimento obrigatório.
14. A URL usada para acessar o XML é gerada automaticamente, conforme o [domínio cadastrado no dicionário do Web Site](https://help.vtex.com/pt/tutorial/configurar-dominio-do-xml--2RkGK4vHS0c6sYuUw0cUWC), no __CMS__.

>⚠️ Se a política comercial possuir restrição de acesso, o XML não será gerado.

## Conectores nativos: uma alternativa ao XML para integrar com marketplaces

Ao invés de integrar por XML, existe a possibilidade de integrar com marketplaces usando conectores nativos desenvolvidos pela VTEX. A escolha por conector nativo é a recomendação padrão e representa mais eficiência. Os conectores nativos disponíveis são:

- [Amazon](https://help.vtex.com/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP)
- [B2W](https://help.vtex.com/pt/tracks/configurar-integracao-da-b2w--6w07SJBVqE020KIOOS8ygk)
- [Mercado Livre](https://help.vtex.com/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq)
- [Magazine Luiza](https://help.vtex.com/pt/tracks/configurar-integracao-com-o-magazine-luiza--5Yx5IrNa7Y48c6aSC8wu2Y)
- [Carrefour](https://help.vtex.com/pt/tracks/configurar-integracao-com-o-carrefour--2wYlj07cNuA8k8mmwY86K2)
- [Centauro](https://help.vtex.com/pt/tracks/integracao-com-a-centauro--D8Qnjbr5lfLkUfMRhsfbj)
- [Wish](https://help.vtex.com/pt/tracks/integracao-com-a-wish--50hbG4bzhSIhjz1lzqI1g4)
- [Facebook](https://help.vtex.com/pt/tracks/integracao-com-o-facebook--7h8KvIC4DbRRc8VlyJ8PFc)
- [Google Shopping](https://help.vtex.com/pt/tracks/configurar-integracao-com-o-google-shopping--25Sl7iOqq58PGfVfTAo8Xw)
- [Google Shopping Ads](https://help.vtex.com/pt/tracks/como-fazer-campanhas-atraves-do-google-ads--47kz5PRQPK0IEaqGqiIuA)
- [Via Varejo](https://help.vtex.com/pt/tracks/configurar-integracao-da-via-varejo--3E9XylGaJ2wqwISGyw4GuY)
- [Dafiti](https://help.vtex.com/pt/tracks/configurar-integracao-da-dafiti--4wF4RBx9ygEkimW6SsKw8i)
- [Netshoes](https://help.vtex.com/pt/tracks/configurar-integracao-da-netshoes--5Ua87lhFg4m0kEcuyqmcCm)
