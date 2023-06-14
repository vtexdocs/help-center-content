---
title: Criar um campo no Master Data
id: frequentlyAskedQuestions_1829
status: PUBLISHED
createdAt: 2019-01-24T20:45:59.042Z
updatedAt: 2023-03-28T23:46:05.723Z
publishedAt: 2023-03-28T23:46:05.723Z
firstPublishedAt: 2019-01-24T22:09:07.683Z
contentType: tutorial
productTeam: Master Data
author: authors_84
slug: como-crio-um-campo-no-master-data
legacySlug: como-crio-um-campo-no-master-data
subcategory: WpbGhubuRZaNZilJSXnqu
---

Os campos são atributos de um documento. Para criá-los, é necessário acessar uma [entidade de dados](https://help.vtex.com/pt/tutorial/criando-entidade-de-dados--tutorials_1265 "entidade de dados") específica e editá-la.

Esse processo é feito em duas áreas do módulo. O Dynamic Storage é o ambiente em que se criam os campos. Já o CRM, em que se visualizam essas informações.

## Dynamic Storage

O Dynamic Storage é o ambiente em que é possível configurar as estruturas de dados.

Neste ambiente, você criará um campo de maneira semelhante ao processo em um banco de dados. Porém, com uma interface muito mais amigável e clara - não é preciso de script, por exemplo.

Para acessá-lo, é possível fazer o caminho tradicional até o Master Data pelo Admin VTEX. 

Confira o passo a passo:

1. No Admin VTEX, acesse **Configurações da loja** > **Storefront** > **Master Data.**
2. Clique em __Create applications.__
3. Abaixo de Configurações, clique em __Estrutura de dados.__
4. Na página clique na aba __Entidade de dados.__
5. Encontre a __entidade__ em que deseja criar o campo.
6. Clique sobre o ícone __lápis__ para editar.
7. Clique em um dos botões __Novo campo.__
8. Preencha os valores __Nome__ - sem caracteres especiais nem espaço-, __Nome de exibição__ e __Tipo.__
9. Clique no ícone __engrenagem__ para configurar as demais opções do campo.
10.  Se necessário, assinale as alternativas desejadas em __Configurações gerais__, __Configurações de busca e de filtro__, __Configurações específicas deste tipo de campo.__
11. Se necessário, preencha o campo __Descrição.__
12. Clique no botão vermelho __Ok.__
13. Clique no botão cinza __Ok.__

<div class="alert alert-info">Mais informações sobre <strong>Configurações gerais</strong> e <strong>Configurações de busca e de filtro</strong> podem ser encontradas na sessão <strong>Como configurar</strong> do artigo <a href="https://help.vtex.com/pt/tutorial/criando-entidade-de-dados--tutorials_1265#como-configurar">Criar entidade de dados</a>.</div>

![criar campo master data ds](https://images.ctfassets.net/alneenqid6w5/5cWru1fi0SyEAOoEbgShOI/95cabcfa4a60032d87c3294773ba4fd0/criar_campo_master_data_ds.gif)

Desse modo, você retornará para a página de principal da aba Entidade de Dados. Para finalizar, você precisa publicar o campo. Basta localizar a linha da entidade em que o campo foi adicionado e clicar no ícone disquete.

Em seguida, será exibida na tela a seguinte mensagem:

*“Publicação realizada com sucesso. Se há campos configurados como Filtro ou Buscável é preciso clicar no botão de reindexação”.*

Se esse for o caso, na linha da entidade alterada, clique no ícone setas para reindexar a entidade. Assim, a criação do campo será concluída.

## CRM

Caso deseje que os campos recém-criados apareçam no formulário, acesse o CRM - ambiente em que essas informações são exibidas.

Dito isso, prossiga com as instruções:

1. No topo da página, clique em __Master Data__;
2. Selecione a opção Master Data;
3. Ao lado de Profile System, clique no símbolo engrenagem;
4. No formulário desejado, clique no ícone lápis para editar;
5. Na aba Campos da Listagem, selecione os campos que deseja exibir na listagem da aba;
6. Clique na aba Schemas de Layout; 
7. Arraste o campo da lista Campos disponíveis para as colunas Campos da coluna 1 ou Campos da coluna 2;
8. No canto inferior direito da tela, clique no botão azul Salvar.

![criar campo master data CRM](https://images.ctfassets.net/alneenqid6w5/2ykQ9Vx7FCZLehkQpxMMmp/0b52e7bc11fc024e74c5223b8e534b65/criar_campo_master_data_CRM.gif)

Pronto! Assim, os campos serão exibidos no formulário.
