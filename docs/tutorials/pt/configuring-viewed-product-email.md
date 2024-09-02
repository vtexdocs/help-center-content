---
title: 'Configurar email sobre produto visitado'
id: tutorials_3136
status: PUBLISHED
createdAt: 2017-04-27T21:52:11.184Z
updatedAt: 2024-08-20T17:44:37.317Z
publishedAt: 2024-08-20T17:44:37.317Z
firstPublishedAt: 2017-04-27T23:03:54.918Z
contentType: tutorial
productTeam: Master Data
author: 1malnhMX0vPThsaJaZMYm2
slug: configurar-email-sobre-produto-visitado
locale: pt
legacySlug: configurando-produto-visitado
subcategory: 2nx7hMJmisofwqwy2P9l2i
---

<div class="alert alert-warning">
  <p>Tutorial válido apenas para lojas CMS Portal Legado.</p>
</div>

O email sobre produto visitado é uma mensagem automática enviada para clientes que visitaram a página de um produto no site mas não finalizaram a compra. O envio do email tem como objetivo a recuperação da venda e a oferta de outros produtos.

É possível configurar o disparo desse tipo de email utilizando o Master Data. Para isso, siga as instruções das próximas seções:

1. [Definir um intervalo mínimo de disparo](#definir-um-intervalo-minimo-de-disparo)
2. [Exibir os campos no formulário](#exibir-os-campos-no-formulario)
3. [Criar template de email sobre produto visitado](#criar-template-de-email-sobre-produto-visitado)
4. [Criar a estrutura de pastas](#criar-a-estrutura-de-pastas)
5. [Configurar a trigger de disparo do email](#configurar-a-trigger-de-disparo-do-email)

<div class="alert alert-warning">
  <p>Para esse recurso funcionar de forma adequada, é necessário que sua loja possua um alto fluxo de visitas e compras, uma vez que as prateleiras são geradas relacionando dados de navegação a um produto específico.</p>
</div>

## Definir um intervalo mínimo de disparo

Definir um intervalo de disparo significa limitar o tempo mínimo de espera entre um disparo e outro para o mesmo cliente. Isso evita que o cliente receba vários emails durante uma mesma sessão de navegação na loja.

Para configurar esse intervalo, é preciso criar um campo na entidade **CL**:

1. No Admin VTEX, acesse **Configurações da loja** > **Storefront** > **Master Data**.
2. No Master Data, clique em **Aplicações** > **Estrutura de dados**.
3. Acesse a aba **Entidade de dados**.
4. Na entidade **Cliente**, clique no símbolo de lápis.
5. Clique no botão `Novo campo`.
6. Preencha os campos conforme a indicação abaixo:
    * **Nome**: lastTrigger
    * **Nome de exibição**: Data do último trigger enviado
    * **Tipo**: Date and Time
7. Clique no botão `Salvar`.

## Exibir os campos no formulário

Após criar um campo na entidade, é preciso configurar a exibição do campo no formulário, para que seja possível visualizar os dados cadastrados nele. Isso também é válido para campos criados automaticamente pela VTEX, mas que não foram marcados para serem exibidos no formulário.

Siga o passo a passo abaixo para exibir os campos importantes para o cenário de produto visitado:

1. No Admin VTEX, acesse **Configurações da loja** > **Storefront** > **Master Data**.
2. Na aplicação **Profile System**, clique no ícone de engrenagem <i class="fas fa-cog"></i>.
3. Clique no ícone de lápis <i class="fas fa-pencil-alt"></i> sobre o formulário **Cliente**.
4. Clique na aba **Schemas de Layout**.
5. Clique no botão `Incluir Nova seção`.
6. Dê um nome para esta seção.
7. Na coluna **Campos disponíveis**, arraste o campo desejado até a área **Campos da coluna 1**, abaixo do nome da seção criada.
8. Clique no botão `Salvar`.

## Criar template de email sobre produto visitado

O template do email que será enviado deve ser configurado no Portal CMS Legado, seguindo o passo a passo abaixo. Para auxiliar a configuração, você pode utilizar o [template de exemplo](https://assets.ctfassets.net/alneenqid6w5/6TloqmkC76AAauQ4e4SWmA/90018592126fff6bd0d7a9a4ae8568d7/produtovisitadoexemplo.zip).

1. No Admin, acesse **Storefront > Layout**.
2. Clique em **HTML Templates**.
3. Clique em **new template**.
4. Preencha o nome e cole o código de seu template. Se estiver usando o template de exemplo, lembre-se de alterar o código `TEMPLATE_DE_PRATELEIRA` pelo ID de seu template de prateleira e o código `NOME_DA_LOJA` pela URL de sua loja. Também é necessário alterar os arquivos de imagem.
5. Clique no botão `Save template`.

### Produtos enviados

O controle responsável por exibir o produto visitado é o `ProductQueryStringReferenceShelf` e o controle que exibirá a(s) prateleira(s) de similares é `<vtex.cmc:productsCrossSelling … crossSellingType="1" />`. O parâmetro `crossSellingType` varia de 1 a 6, sendo:

* **1**: Quem viu, viu também
* **2**: Quem viu, comprou também
* **3**: Quem comprou, comprou também
* **4**: Produtos similares
* **5**: Sugestões
* **6**: Acessórios

As três primeiras prateleiras são montadas automaticamente pelo sistema e as três últimas são configuradas [manualmente no cadastro de produtos](https://help.vtex.com/pt/tutorial/configurando-produto-similar-sugestoes-acessorios-e-genericos/).

## Criar a estrutura de pastas

Após criar o template, é preciso criar a estrutura de pastas necessária para a configuração da trigger. Siga o passo a passo abaixo:

1. No Admin, acesse **Storefront > Layout**.
2. Clique em **CMS** > **Sites and channels**.
3. Clique na sua loja.
4. Clique na pasta `/` e, em seguida, na pasta **CEM**.
5. Clique em **new folder**.
6. Preencha os campos conforme abaixo:
    * **Folder Name**: Produto-visitado
    * **Protocol**: HTTPS
    * **Authentication Required?**: manter desmarcado.
7. Clique no botão `Save Folder`.
8. Após a criação da pasta, você precisa associar o template de página ao layout da página. Clique na pasta criada no menu lateral esquerdo do Portal CMS Legado.
9. Clique em **new layout**.
10. Em **Template**, selecione o template criado anteriormente.
11. Clique no botão `Save Layout`.

## Configurar a trigger de disparo do email

Para configurar a trigger, siga as instruções abaixo:

1. Acesse `{nomedaloja}.ds.vtexcrm.com.br`, substituindo `{nomedaloja}` pelo seu nome de conta VTEX.
2. Faça login conforme solicitado.
3. Clique na aba __Trigger__.
4. Clique no botão `Adicionar`.
5. Preencha os campos:
    * __Nome:__ insira o nome da trigger.
    * __Entidade de dados:__ selecione a entidade de dados à qual a trigger pertence.
    * __Status:__ marque a opção __Ativo__.
6. Na aba **Regras**, no campo **Regra de ativação**, selecione **O valor de um atributo é alterado**.
7. Em **Campo**, selecione** Produto Visitado**.
8. Em **Filtro adicional**, clique em `Adicionar filtro`. Configure dois filtros conforme abaixo:
    * _Checkout – É nulo – e_
    * _Produto Visitado – Não é nulo – e_
9. Clique no botão `Adicionar grupo`.
10. Clique em `Adicionar filtro` para incluir um filtro no grupo. Preencha conforme abaixo:
    * _Data do último trigger enviado –  Menor ou igual a –  DATA ATUAL – Subtrair dias – 7 – ou_
    * _Data do último trigger enviado –  É nulo_
11. Clique na aba **Agendar**.
12. Selecione uma das opções de agendamento da trigger. Exemplo: agendar em uma data dinâmica, como _DATA DE HOJE – mais –  2 horas_.
13. Clique na aba** Se positivo**.
14. Preencha esta aba da seguinte forma:
    * **Ação**: selecione **Enviar um email**.
    * **Destinatário**: como teste, digite seu e-mail e clique em `Adicionar e-mail estático`. Quando já tiver testado, exclua seu e-mail, selecione **CL: Email **e clique em `Adicionar e-mail dinâmico`.
    * **Formato do corpo do e-mail**: selecione **HTML**.
    * **Nome do remetente**: insira o nome de sua loja da forma que você deseja que apareça no remetente do email.
    * **Responder para**: preencha com o endereço de email para o qual o cliente poderá enviar uma resposta.
    * **Tipo de conteúdo**: selecione **Conteúdo da URL**.
    * **Assunto**: preencha com o assunto do email.
    * **URL**: insira o endereço de sua loja com as pastas em que o layout do produto visitado foi configurado. Exemplo: **`nomedaloja.com.br/CEM/Produto-Visitado?refp={!productVisitedTag}`**. Atenção ao final **`?refp={!productVisitedTag}`** que precisa estar no final da URL para que os produtos sejam exibidos.
    * **Adicionar utm_source em todos os links com valor**: preencha com “CEM”, para facilitar a identificação de compras pelo produto visitado.
    * **Sobrescrever utm_source:** marque esta opção.
15. Clique no botão `Salvar`.

