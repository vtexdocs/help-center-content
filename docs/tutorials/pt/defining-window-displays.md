---
title: 'Definição de Vitrines'
id: tutorials_561
status: PUBLISHED
createdAt: 2017-04-27T22:00:48.932Z
updatedAt: 2023-03-29T18:03:26.896Z
publishedAt: 2023-03-29T18:03:26.896Z
firstPublishedAt: 2017-04-27T23:03:38.784Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slug: definicao-de-vitrines
locale: pt
legacySlug: definicao-de-vitrines
subcategory: 2g6LxtasS4iSeGEqeYUuGW
---

<div class = "alert alert-warning">
  <p><b>Atenção:</b> existem duas formas de configurar coleções, por meio do CMS ou utilizando o módulo de Coleções Beta. Este artigo, refere-se à <a href = "https://help.vtex.com/pt/tutorial/cadastro-de-colecoes-cms--2YBy6P6X0NFRpkD2ZBxF6L">configuração de coleções por meio do CMS</a>.</p>
</div>

As vitrines são utilizadas no destaque de produtos em diversas páginas, elas também podem ser utilizadas para recomendações, na página do produto.

Primeiramente, antes de definir uma vitrine, deve-se criar uma coleção (vide instruções [aqui](http://help.vtex.com/pt/tutorial/criando-colecao-de-produtos)) com os produtos que serão exibidos nela. Também é necessário que as páginas estejam devidamente estruturadas, com os devidos controles inseridos em seus templates.

Realizadas as devidas definições, o vínculo da coleção com a vitrine é feito em **Storefront > Layout**.

No exemplo abaixo, iremos definir a vitrine apresentada na Home, sendo assim, deve-se realizar a alteração no seguinte layout:

![cms_layout_home ](https://images.ctfassets.net/alneenqid6w5/36BJckeyOAIYeEm8sOwQO0/e7a24fbbfe861550445a9f18dee77954/cms_layout_home.png)

No layout selecionado, adicione o controle correspondente à vitrine onde deseja exibir a coleção clicando em **Add object**.
Após selecionar o tipo de controle desejado, defina seu nome e clique em **Adicionar**.

__Não se esqueça de salvar as configurações feitas para que seja possível posteriormente editar o controle criado.__

![save settings cms](https://images.ctfassets.net/alneenqid6w5/21omKZNVc8QaWSw6K4akEQ/70105f086510d2eec6bfb3862a9979f5/save_settings_cms.png)

### Edição do controle

Para editar seus controles, clique no **símbolo de lápis**, conforme mostra a imagem exemplo abaixo: 

![banner_edit_cms](https://images.ctfassets.net/alneenqid6w5/5eOuIai1zGGWOKI4OmoMOQ/5ff1b51e63a08d6d265a1e053999a369/banner_edit_cms.png)

Ao editar o controle é necessário adicionar seus conteúdos, que representam cada conjunto de itens que serão exibidos.
Para isso, clique em **Add content**

![cadastro_conteudo_cms ](https://images.ctfassets.net/alneenqid6w5/TWIydQxL2M4WsEiccmI2A/f8ff28eafb9dde3e01926b899262f519/cadastro_de_conteudo_1.png)
![cadastro_conteudo_cms 2](https://images.ctfassets.net/alneenqid6w5/6Q0ZTbWIBUeu2uSY8w2mMs/5fb5a636e8781881b47237714571ee1c/cadastro_de_conteudo_2.png)

- **"Adicionar arquivo":** para selecionar a coleção que será exibida nesse conteúdo. 
- **Partner / Campaign / Source:**  define a exibição desse conteúdo caso o visitante possua alguma UTM correspondente em sua URL de origem. 
- **Keywords:** vincula a exibição do conteudo a uma busca por termo(s) específico(s). 
- **Category / Brand:** vincula a exibição do conteúdo em uma página de Categoria/Marca específica. 
- **From / To:** define o período em que o conteúdo ficará ativo. 

Deve-se marcar a opção **Active Content** e clicar em **Add content list**, salvando todas as configurações (**Save Settings**) posteriormente.

**Atenção!** Sempre que utilizar mais de um conteúdo ativo no mesmo controle, deve-se ordená-los (clicando e arrastando seus conteúdos) de forma que o conteúdo sem condições de exibição sempre fique na última posição. 

### Edição do conteúdo criado 

Se caso depois de salvo o conteúdo for necessário editá-lo, basta clicar no segundo simbolo de lápis conforme mostra a imagem abaixo:

![edit_content_cms](https://images.ctfassets.net/alneenqid6w5/3m9TM8vkEU0UmkueoEYIM8/89b2385f1e14978383b9d4fd0ecfd129/edi_content.png)

Deve-se realizar as mudanças desejadas, clicar em **Update Content List** e salvar todas as configurações feitas clicando em **Save Settings** depois. 

__Atenção!__ Sempre que alguma alteração for feita, é indispensável clicar em **Save Settings** para que nenhuma alteração seja perdida. 

