---
title: 'Criar listas de presente no site'
id: tutorials_248
status: DRAFT
createdAt: 2017-04-27T22:12:16.638Z
updatedAt: 2022-09-08T16:44:29.667Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:11.354Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slug: criando-listas-no-site
legacySlug: criando-listas-no-site
subcategory: 6aeeWirCBUwwCmeIWOgIWs
---

Esta funcionalidade possibilita ao consumidor criar na loja listas de compras, que podem ser associadas a um evento como casamento, chá de panela, aniversário, chá de bebê ou ser simplesmente uma lista de desejo. Para que funcione corretamente, a sua agência ou equipe responsável pelo front-end devem criar os devidos templates no módulo de CMS 

A definição das opções de tipos de listas a serem criadas e suas respectivas particularidades, é feita pelo lojista a partir da plataforma, conforme explica o artigo [Como criar tipo de lista](/pt/tutorial/criando-tipo-de-lista).

Dependendo do tipo de lista que o consumidor criar cada uma terá sua própria serventia, mas o objetivo principal é o consumidor adicionar produtos que deseja obter e, poder acessá-la para comprar os produtos a partir do login de seu cadastro na loja. 

Pode servir também como uma lista onde outras pessoas visualizem os produtos e os compre, para dar de presente ao dono da lista, como é o caso de eventos como casamento, chá de panela, chá de bebê ou ainda aniversários.


## Criar link para acessar a seção de listas na sua loja

Para criar o elemento html que dá ao cliente o acesso às listas na Home da sua loja, você deve incluir o código abaixo dentro do ```<body>``` no seu template.

```
<a href=“/giftlist”>Listas</a>
```

A rota `/giftlist` funciona como a Home das listas para cada cliente. No template `new-Giftlist`, encontrado no CMS da sua loja, já temos incluído o controle `<vtex.cmc:GiftListSearchV2 />`. Esse controle renderiza a busca das listas criadas pelos seus clientes.

Dentro do template `new-GiftList`, há um subtemplate com o nome `new-GiftList-Sidebar-nav`. Este subtemplate contém o snippet de código abaixo e pode ser encontrado na seção de `Sub Templates`, dentro de `HTML Templates` no seu CMS:

```
<ul class="nav nav-list bs-docs-sidenav giftlist-sidenav">
    <li><a href="/giftlist/"><i class="icon-chevron-right"></i> Buscar uma Lista</a></li>
    <li><a href="/giftlist/create/"><i class="icon-chevron-right"></i> Criar nova Lista</a></li>
    <li><a href="/giftlist/manage/"><i class="icon-chevron-right"></i> Gerenciar minhas Listas</a></li>
</ul>
```

Este código renderiza uma lista com __três links__:

1. __Buscar uma Lista__: Este link leva o cliente para a rota `/giflist`, onde são realizadas as buscas pelas listas
2. __Criar nova Lista__: Este link leva o cliente para a rota `/giftlist/create`, onde o cliente cria suas listas. Nos próximos passos, vamos explicar como é feita a criação de listas.
3. __Gerenciar minhas Listas__: Este link leva o cliente para a rota `/giftlist/manage`, onde o cliente pode gerenciar suas listas. Nos próximos passos, vamos explicar como é feito o gerenciamento de listas.

## Buscar uma lista


Para buscar uma lista no site, clique no link “Minha lista” e preencha um dos campos disponíveis para filtro. Essa página pode variar de acordo com a customização que for feita no site, a qual pode, por exemplo, se limitar a usar somente os campos “Nome”, “Sobrenome” e “Data do Evento”.

- **Tipo de lista:** Seleção do tipo de lista de acordo com o cadastro feito pelo lojista na plataforma, conforme explica o artigo [Como criar tipo de lista](/pt/tutorial/criando-tipo-de-lista). Esse campo é o único que, se preenchido, precisa ser em conjunto com outro campo, pois no seu site existirão listas de diversos consumidores e se o tipo de lista retornasse todas os resultados, um cliente poderia acessar a lista do outro;
- **Código da lista:** Disponibilizado na criação da lista. Esse campo pode ser usado sozinho para filtrar a lista;
- **Nome:** Conforme definição do dono da lista. O convidado ou qualquer usuário que for buscar uma lista, normalmente a fará pelo nome do dono da lista. Esse campo pode ser usado sozinho para filtrar as listas referentes ao nome do dono da lista, mas se o dono tiver mais de uma lista, ambas serão exibidas;
- **Sobrenome:** Conforme definição do dono da lista. Esse campo pode ser usado sozinho para filtrar as listas referentes ao sobrenome do dono da lista, mas se o dono tiver mais de uma lista, ambas serão exibidas. Se utilizado juntamente com o campo nome e tipo de lista, trará um resultado mais específico;
- **Local do evento:** Endereço de onde será realizado o evento. Esse campo pode ser usado sozinho para filtrar as listas referentes ao endereço informado, mas por ser uma informação que pode ser preenchida de diversas formas, é recomendável utilizar juntamente com outros campos, para ter um resultado mais específico;
- **Data do evento:** Dia em que o evento ocorrerá. Assim como os outros campos, pode ser que haja outras listas como eventos que ocorram no mesmo dia. Se usar somente esse campo para filtrar, pode ser que retornem outras listas além daquela que procura.

## Criar uma lista nova

Para criar uma nova lista no site, acesse o link “Minha Lista” (que normalmente tem o caminho /giftlist), clique em “Criar nova Lista”, preencha os campos do formulário, conforme abaixo, marque a opção “Li e estou de acordo com o regulamento” e salve. Se faz necessário que o usuário tenha um cadastro na sua loja e faça o login, pois este será o dono da lista e o fato de estar logado associará a lista ao usuário. Quando uma lista é criada no seu site, fica salva na plataforma no módulo de Catálogo > Relatórios > Listas de compras. Abaixo os detalhes de cada campo disponível no formulário para a criação da lista:

## Criar lista

- __Tipo de lista__: Tipos cadastrados pelo lojista na plataforma.
- __Nome da lista__: É definido pelo usuário no momento da criação. Depende muito do tipo de lista escolhido, mas normalmente é o nome do próprio usuário, se formos pensar que normalmente a lista é usada em eventos como casamento, aniversário, chá de bebê e chá de panela.
- **URL da lista**: É o link que será usado na divulgação da sua lista. Basta inserir neste campo, o final do endereço da sua lista após a última barra. O padrão é http://www.sualoja.com.br/list/ + o valor que inserir neste campo.
- **Quem pode ver esta lista?:** As opções que aparecem aqui variam de acordo com as configurações cadastradas pelo lojista ao criar o tipo de lista. Caso esteja configurado para “Criador da lista decide”, aparecerão as opções “Somente os participantes desta Lista” e “Qualquer pessoa”. Aparecerá somente a primeira opção se o tipo de lista tiver visibilidade definida como “Privada” e, somente a segunda opção se estiver como “Pública”. A opção “Criador da lista decide” é importante para o usuário, em uma lista de casamento, por exemplo, porque os noivos podem querer restringir o acesso à lista somente a eles, enquanto escolhem os produtos e a gerenciam, e abrir para que qualquer pessoa tenha acesso quando a lista estiver completa.
- **Upload de imagem:** Este campo permite atribuir uma imagem para representar o evento ou para de alguma forma personalizar a lista, com a foto dos noivos, por exemplo.
- **Mensagem:** Permite que o dono da lista deixe uma mensagem para seus convidados, conforme desejar. Tem limite de 1000 caracteres (contando letras, números, espaços e pontuação).

## Membros

- Nome
- Sobrenome
- E-mail

_Para incluir um novo participante, clique no link “incluir participante”. O limite de inclusão de membros na lista é conforme for configurado na criação do tipo de lista, porém é recomendável que a lista tenha no máximo duas pessoas, pois quanto maior a quantidade de membros administrando a lista, maior a probabilidade dos usuários fazerem o mau uso da lista._

## Endereço de entrega

- CEP
- Rua
- Número
- Complemento
- Bairro
- Cidade
- Estado
- Endereço comercial
- Quem receberá
- 
_Caso o usuário já tenha cadastro na loja, o endereço aparecerá automaticamente, mas ele terá a opção de modificar o endereço ou cadastrar um novo endereço e usar esse novo. Para isso existem os links “Modificar endereço selecionado” e “Entregar em outro endereço”, respectivamente._

## Regulamento

É definido de acordo com necessidade de termos e condições de cada loja para regular e informar como funciona a lista em seu site. É apresentado como um campo de texto somente para leitura e com barra de rolagem vertical. O texto que será visualizado aqui deve ser cadastrado em configuração de textos no admin. Para isso siga os passos abaixo:

- Acesse __CMS__
- Em **Configurações**, clique em __Textos da Loja__
- Clique em __Selecione o ID do texto a Editar__
- Busque por __GifListThermsText__
- Digite o texto no campo abaixo do campo de seleção e clique em **Salvar**.

_Para essas informações aparecerem no campo regulamento, toda vez que um cliente for criar uma lista, sua agência ou equipe responsável pela customização do front-end precisará inserir o controle `<vtex.cmc:GiftListFormV2 />` no ```<body>``` de seu template._

## Gerenciar minhas Listas

Para gerenciar suas listas, o usuário precisa estar logado no site, para então acessar o link “Minha Lista” (que normalmente tem o caminho `/giftlist`), clicar em “Gerenciar minhas Listas” e depois em uma das ações abaixo, referente à respectiva linha da lista que se deseja tomar a ação selecionada.

### Visualizar

Aqui terá uma visão macro da sua lista que conterá as informações preenchidas na criação da lista e os produtos inseridos na lista. Além disso terão os links para divulgar a lista, ou seja, torná-la pública, caso tenha configurado como privada; editar e gerenciar, conforme explicação abaixo e pode ter também um resumo de quantos produtos você adicionou e quantos já foram comprados. Podem existir outras funcionalidades como comprar todos os produtos da lista ou imprimir lista, mas isso dependerá da customização que fizer em seu front-end.

### Gerenciar

Aqui a visão é bem parecida com a ação anterior, porém com a funcionalidade de adicionar mais unidades dos produtos selecionados ou excluí-los da lista.

### Editar

Aqui a visão é a mesma que o usuário tem quando cria a lista. A intenção é que o dono da lista possa alterar qualquer configuração que tenha feito na criação.

### Excluir

Excluirá a lista. Ao clicar aparece um popup para confirmar a solicitação.

## Inserindo produtos à lista

Após criar a lista, pode incluir os produtos a uma lista através da navegação pelo site e clicando no botão “Adicionar produtos às suas Listas”. A funcionalidade deste botão está atrelada ao uso do controle `<vtex.cmc:GiftListInsertSkuV2 />` no ```<body>``` do template de sua página de produto.

_Existe uma limitação na quantidade de associações de **300** SKUs por lista. _

### Particularidades em Lista Vale

Os itens comprados a partir da sua lista, gerarão um crédito que acumulará em um vale automaticamente gerado no momento de criação da lista. Este vale funcionará como uma forma de pagamento, para que o dono da lista resgate em compras no site quaisquer itens que desejar. 

Saiba mais sobre a forma de pagamento vale no artigo [Gift Card](/pt/tutorial/gift-card). Lembrando que os tipos de listas disponíveis para criação no site, deverão ser previamente criados na plataforma pelo lojista.

**Observação importante:** Lojas que sejam marketplace (vendam produtos de sellers, outros parceiros em sua loja) não estão habilitadas a utilizar Lista Vale.
