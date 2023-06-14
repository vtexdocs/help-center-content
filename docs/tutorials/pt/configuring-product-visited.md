---
title: 'Configurar produto visitado'
id: tutorials_3136
status: PUBLISHED
createdAt: 2017-04-27T21:52:11.184Z
updatedAt: 2023-03-28T23:34:22.351Z
publishedAt: 2023-03-28T23:34:22.351Z
firstPublishedAt: 2017-04-27T23:03:54.918Z
contentType: tutorial
productTeam: Master Data
author: authors_3
slug: configurando-produto-visitado
legacySlug: configurando-produto-visitado
subcategory: 2nx7hMJmisofwqwy2P9l2i
---

O produto visitado é a funcionalidade que envia e-mails para os clientes que navegaram por um produto em seu site mas não finalizaram compra. Esse e-mail tem como objetivo a recuperação da venda, enviando, além do produto abandonado, sugestões de novos produtos. Tudo isso é possível através de seu Master Data.

[![ExemploProdutoVisitado](//images.contentful.com/alneenqid6w5/3S5FjnFRl6SUoqAkIY84sI/1f6913ec8cd925c89906500a923de0c2/ExemploProdutoVisitado.png)](//images.contentful.com/alneenqid6w5/3S5FjnFRl6SUoqAkIY84sI/1f6913ec8cd925c89906500a923de0c2/ExemploProdutoVisitado.png "![ExemploProdutoVisitado](//images.contentful.com/alneenqid6w5/3S5FjnFRl6SUoqAkIY84sI/1f6913ec8cd925c89906500a923de0c2/ExemploProdutoVisitado.png)")

_Para esse recurso funcionar de forma adequada é necessário que sua loja possua um alto fluxo de visitas e compras, uma vez que as prateleiras são geradas relacionando dados de navegação a um produto específico._

### Defina um intervalo mínimo de disparo

Definir um intervalo de disparo significa limitar o tempo mínimo de espera entre um disparo e outro para o mesmo cliente. Isso evita que o cliente receba vários e-mails durante uma mesma navegação na loja.

Para configurar esse intervalo, é preciso criar um campo na entidade **CL.**

1. No Admin VTEX, acesse **Configurações da loja** > **Storefront** > **Master Data**.
2. No Master Data, clique em **Aplicações** > **Estrutura de dados**.
3. Acesse a aba **Entidade de dados**.
4. Na entidade **Cliente**, clique sobre o símbolo de lápis.
5. Clique no botão **Novo campo**.

Preencha os campos conforme indicação abaixo:
- **Nome**: lastTrigger
- **Nome de exibição**: Data do último trigger enviado
- **Tipo**: Date and Time

Por fim, clique no botão **Salvar**.

### Exiba os campos no formulário

Após criar um campo na entidade, é preciso configurar para que o campo seja exibido no formulário &#8211; assim, é possível ver os dados cadastrados nele. Isso também é válido para campos que criados automaticamente pela VTEX mas que não foram marcados para serem exibidos no formulário. Segue abaixo um manual de como exibir os campos que serão importantes para o cenário de Produto Visitado.

1. Acesse o módulo **Master Data**;
2. Na aplicação **Profile System**, clique no símbolo de **engrenagem**; [![aplicacaoEditar](//images.contentful.com/alneenqid6w5/5EGLrHpiY8MOcEsUCUCaqS/7edf07ca138296670b0e2b7a0455bbef/aplicacaoEditar.png)](//images.contentful.com/alneenqid6w5/5EGLrHpiY8MOcEsUCUCaqS/7edf07ca138296670b0e2b7a0455bbef/aplicacaoEditar.png "![aplicacaoEditar](//images.contentful.com/alneenqid6w5/5EGLrHpiY8MOcEsUCUCaqS/7edf07ca138296670b0e2b7a0455bbef/aplicacaoEditar.png)")
3. Clique no símbolo do **lápis** sobre o formulário **Cliente**;
4. Clique na aba **Schemas de Layout**;
5. Clique no botão **Incluir Nova seção**;
6. Dê um nome para esta seção;
7. Na coluna **Campos disponíveis**, arraste o campo desejado até a área **Campos da coluna 1**, abaixo do nome da seção criada; [![arrastandoCampo](//images.contentful.com/alneenqid6w5/57Ridc88Te6kIo2CO4sOEI/80f6dd2602600841e62b666e88a2bd38/arrastandoCampo.png)](//images.contentful.com/alneenqid6w5/57Ridc88Te6kIo2CO4sOEI/80f6dd2602600841e62b666e88a2bd38/arrastandoCampo.png "![arrastandoCampo](//images.contentful.com/alneenqid6w5/57Ridc88Te6kIo2CO4sOEI/80f6dd2602600841e62b666e88a2bd38/arrastandoCampo.png)") [![arrastandoCampo2](//images.contentful.com/alneenqid6w5/4TQBONq7tKoEuEqCSoAS44/967247336bbb61ca775f7dd2488ae4f0/arrastandoCampo2.png)](//images.contentful.com/alneenqid6w5/4TQBONq7tKoEuEqCSoAS44/967247336bbb61ca775f7dd2488ae4f0/arrastandoCampo2.png "![arrastandoCampo2](//images.contentful.com/alneenqid6w5/4TQBONq7tKoEuEqCSoAS44/967247336bbb61ca775f7dd2488ae4f0/arrastandoCampo2.png)") [![seçãoCriada](//images.contentful.com/alneenqid6w5/6DwxZSd692YAweEwQs64C4/ed5a48459e501cf8f57ff180ba96dc73/se_C3_A7_C3_A3oCriada.png)](//images.contentful.com/alneenqid6w5/6DwxZSd692YAweEwQs64C4/ed5a48459e501cf8f57ff180ba96dc73/se_C3_A7_C3_A3oCriada.png "![seçãoCriada](//images.contentful.com/alneenqid6w5/6DwxZSd692YAweEwQs64C4/ed5a48459e501cf8f57ff180ba96dc73/se_C3_A7_C3_A3oCriada.png)")
8. Clique no botão **Salvar**.

### Crie o template de e-mail

O template do e-mail que será enviado, assim como no Carrinho Abandonado, é configurado no módulo CMS. Para auxiliar a configuração, [use nosso template de exemplo](//assets.contentful.com/alneenqid6w5/6TloqmkC76AAauQ4e4SWmA/bf28c1d0d7d6618d5eb1231a578934f1/produtoVisitadoExemplo.html "use nosso template de exemplo").

1. Acesse o módulo **CMS**;
2. Clique em **Portal**;
3. [Clique aqui para baixar o template de exemplo](//assets.contentful.com/alneenqid6w5/6TloqmkC76AAauQ4e4SWmA/bf28c1d0d7d6618d5eb1231a578934f1/produtoVisitadoExemplo.html "Clique aqui para baixar o template de exemplo");
4. Clique em **Templates de página**;
5. Clique em **novo template**;
6. Preencha o nome e cole o código de seu template. Atenção! Se estiver usando o template de exemplo, lembre-se de alterar o código `TEMPLATE_DE_PRATELEIRA` pelo id de seu template de prateleira e o código `NOME_DA_LOJA` pela URL de sua loja.
7. Clique no botão **Salvar**.

#### Entenda os produtos enviados

Perceba que o controle responsável por exibir o produto visitado é o `ProductQueryStringReferenceShelf` e o controle que exibirá a(s) prateleira(s) de similares é `&lt;vtex.cmc:productsCrossSelling` &#8230; `crossSellingType="1" /&gt;` com o parâmetro `crossSellingType` variando de 1 a 6, sendo:

- **1**: Quem viu, viu também
- **2**: Quem viu, comprou também
- **3**: Quem comprou, comprou também
- **4**: Produtos similares
- **5**: Sugestões
- **6**: Acessórios

As três primeiras prateleiras são montadas automaticamente pelo sistema e as [três últimas são configuradas manualmente no cadastro de produto](http://help.vtex.com/tutorial/configurando-produto-similar-sugestoes-acessorios-e-genericos/ "três últimas são configuradas manualmente no cadastro de produto").

#### Crie a estrutura de pastas

Após criar o template, é preciso criar a estrutura de pastas necessária para a configuração da trigger. Siga o passo a passo abaixo.

1. Clique em **Websites**;
2. Clique sobre sua loja;
3. Clique na pasta **/**;
4. Clique na pasta **CEM**;
5. Clique em nova pasta;

Preencha os campos conforme abaixo;

- **Nome da Pasta**: Produto-visitado
- **Protocolo**: HTTP
- **Requer Autenticação**: desmarcado

Por fim, clique no botão **Salvar Pasta**.

Após a criação da pasta, associe o template de página ao layout da página.

1. Clique na pasta criada;
2. Clique em **novo layout**; [![novoLayout](//images.contentful.com/alneenqid6w5/7x9hPRCKsgwOgk4iQ4IAsq/2eeb7573f284daf0429c7d129a8eaf26/novoLayout.png)](//images.contentful.com/alneenqid6w5/7x9hPRCKsgwOgk4iQ4IAsq/2eeb7573f284daf0429c7d129a8eaf26/novoLayout.png "![novoLayout](//images.contentful.com/alneenqid6w5/7x9hPRCKsgwOgk4iQ4IAsq/2eeb7573f284daf0429c7d129a8eaf26/novoLayout.png)")
3. Selecione o template criado anteriormente;
4. Clique no botão **Salvar**.

### Configure a trigger de disparo do e-mail

1. Acesse **nomedaloja**.ds.vtexcrm.com.br;
2. Clique na aba **Trigger**;
3. Clique no botão **Novo**;
4. Insira o nome da trigger;
5. Em **Status**, marque **Ativo**;
6. Em **Condição do trigger**, selecione **O valor de um atributo for alterado**;
7. Em Informe o atributo, selecione Produto Visitado;

Em **Filtro adicional**, configure conforme abaixo:
- **Checkout** Está nulo and
- **Produto Visitado** Não está nulo and

Clique no botão **Incluir grupo**, então clique em **Incluir filtro** e preencha conforme abaixo:
- **Data do último trigger enviado** Menor ou igual `DATAL ATUAL` &#8211; `Subtrair dias` &#8211; `7` or
- **Data do último trigger enviado** Está nulo [![CondicoesTrigger](//images.contentful.com/alneenqid6w5/2fU6mJE1asQiQ4agmCSSaG/ff6148cbe2f6f07a8e01aea1ee0a68f1/CondicoesTrigger.png)](//images.contentful.com/alneenqid6w5/2fU6mJE1asQiQ4agmCSSaG/ff6148cbe2f6f07a8e01aea1ee0a68f1/CondicoesTrigger.png "![CondicoesTrigger](//images.contentful.com/alneenqid6w5/2fU6mJE1asQiQ4agmCSSaG/ff6148cbe2f6f07a8e01aea1ee0a68f1/CondicoesTrigger.png)")

Depois, siga os passos abaixo:

1. Clique na aba **Agendamento**;
2. Selecione uma das opções de envio. Ex.: Agendar execução para uma data dinâmica, [DATA ATUAL] mais 2 horas;
3. Clique na aba** Ações em caso positivo**;
4. Em **Destinatário**, como teste, digite seu e-mail e clique em **Incluir e-mail estático**. Quando já tiver testado, exclua seu e-mail e selecione **Cliente: Email **e clique em **Incluir e-mail dinâmico**;
5. Em **Formato do corpo do e-mail**, selecione **HTML**;
6. Em **Nome do remetente**, insira o nome de sua loja;
7. Em **E-mail de resposta**, preencha com o endereço de e-mail que o cliente poderá responder com dúvidas;
8. Em **Origem do conteúdo**, selecione **Conteúdo de uma URL**;
9. Preencha o campo **Assunto**;

Em **URL**, insira o endereço de sua loja com as pastas em que o layout do carrinho abandonado foi configurado. Ex.: **nomedaloja**.com.br/CEM/Produto-Visitado**?refp={!productVisitedTag}**;
Lembre-se! Atenção ao final **?refp={!productVisitedTag}** que deve estar no final da URL para que os produtos sejam exibidos.

Em **Adicionar utm\_source em todos os links com valor**, preencha com “CEM”, para facilitar a identificação de compras pelo produto visitado.

Finalmente, marque a opção **Sobrescrever utm\_source** e clique no botão **Salvar**.

<iframe src="https://www.youtube.com/embed/c8bLByqTTzY" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

