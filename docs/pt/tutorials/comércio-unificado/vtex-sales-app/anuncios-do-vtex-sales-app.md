---
title: 'Anúncios do VTEX Sales App'
id: 3UtOFwbwD4muz3p72RBPmC
status: PUBLISHED
createdAt: 2023-05-25T17:16:06.902Z
updatedAt: 2024-06-26T18:31:53.389Z
publishedAt: 2024-06-26T18:31:53.389Z
firstPublishedAt: 2023-05-26T22:11:51.769Z
contentType: tutorial
productTeam: Shopping
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: ads-from-vtex-sales-app
legacySlug: anuncios-do-vtex-sales-app
locale: pt
subcategoryId: 4T6qfa6gNO6g4sAUIa6s2G
---

A nova área de anúncios no VTEX Sales App conta com dois tipos principais de anúncios: produtos específicos ou resultados de busca. Essa flexibilidade permite que os merchants adaptem suas estratégias de marketing de acordo com suas necessidades e objetivos específicos, promovendo produtos individuais ou grupos de produtos relacionados.

Para customizar a vitrine de uma loja, os lojistas podem adicionar uma página de `Anúncio por loja` especificando o ID da loja no [Master Data](https://developers.vtex.com/docs/guides/master-data-introduction) ao qual o anúncio será vinculado, permitindo criar anúncios personalizados para cada loja.

Neste documento, forneceremos instruções detalhadas sobre como instalar, configurar e utilizar a nova área de anúncios. Siga os passos descritos abaixo para configurar esta ferramenta e impulsionar suas vendas online.

* [Instalar as dependências da VTEX](#instalar-as-dependencias-da-vtex)
* [Configurar o aplicativo Headless CMS](#configurar-o-aplicativo-headless-cms)
* [Criar página de anúncios](#criar-pagina-de-anuncios)
* [Ativar o menu de anúncios no VTEX Sales App](#ativar-o-menu-de-anuncios-no-vtex-sales-app)
* [Acessar os anúncios no VTEX Sales App](#acessar-os-anuncios-no-vtex-sales-app)

## Instalar as dependências da VTEX

Antes de instalar as dependências, você deve possuir o [VTEX IO CLI](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-install) instalado. Com o VTEX IO CLI instalado, execute os seguintes comandos no prompt do seu computador para instalar as dependências necessárias:

1.
    ```
    vtex login {account}  
    ```
2.
    ```
    vtex install vtex.admin-cms@1.x vtex.admin-cms-graphql@0.x vtex.admin-cms-graphql-rc@1.x vtex.admin-releases@0.x vtex.cms-builder-sf-jamstack@1.x
    ```

## Configurar o aplicativo Headless CMS

1. No Admin VTEX, acesse  **Aplicativos > Meus Aplicativos**, ou digite **Meus Aplicativos** na barra de busca no topo da página.
2. Clique em `Configurações` do item **CMS (alpha)**.
3. Clique em `Add More`.
4. No campo **Project ID**, digite `assisted-sales-app`.
5. No campo **Sections URL**, digite `https://instore--instore.vtex.app/assisted-sales/cms/sections.json`.
6. No campo **Content types URL**, digite `https://instore--instore.vtex.app/assisted-sales/cms/content-types.json`.
7. Clique em `Save`.

## Criar página de anúncios

Para criar uma página de anúncios para o VTEX Sales App, siga os passos abaixo:

1. Acesse a URL do VTEX Admin: 
```https://{conta_principal}.myvtex.com/admin/new-cms/assisted-sales-app```
2. Clique em **Criar Novo** e selecione **Anúncios**.
3. Clique em **Untitled** para editar e incluir o nome que desejar. Recomendamos o nome **Anúncios**.
4. Na aba **Seções**, clique no botão `+` para adicionar uma nova seção. Cada seção é um uma coleção de produtos ou termos de busca. Cada seção será exibida como uma vitrine no formato de carrossel. Você pode ordernar as vitrines clicando nos botões `Mover para baixo` ou `Mover para cima`. 
5. Selecione um tipo de anúncio, produtos ou resultados de buscas. 
  - **Vitrine de produtos:** exibirá cada produto e SKU (opcional) que você determinar. Adicione as  seguintes informações:
    * **Título da vitrine:** nome da vitrine que  será exibido na página.
    * **ID do produto:** número identificador do produto que você deseja exibir. Campo obrigatório.
    * **SKU ID do produto:** número identificador do  SKU do produto que você deseja exibir. Campo opcional.
![vitrine-produto-pt](//images.ctfassets.net/alneenqid6w5/6SREOFdog1AfNXqyhH0I5Z/6a0001784a5ba632dfa4a39078e5293a/image.png)
Após preencher os campos, será exibido a imagem do produto com o preço com a "partir de". Caso você inclua o SKU, será exibido o preço e promoção do SKU indicado. Você pode incluir mais produtos clicando em `+ NOVO PRODUTO`. É possível adicionar até 10 produtos em cada vitrine. 
O resultado da vitrine de produtos será exibido conforme imagem abaixo.
![vitrine-produto-2-pt](//images.ctfassets.net/alneenqid6w5/3SY8POqXIAK0Qi2lWax8qq/df73bbed63b08096c0d2269918d11731/image.png)
  - **Vitrine de resultado de buscas:** exibirá produtos de um resultado de busca que você definir. Adicione as  seguintes informações:
    * **Título da vitrine:** nome da vitrine que  será exibido na página.
    * **Imagem da busca:** imagem que representará a seleção de produtos na vitrine.
    * **Nome da busca:** nome da busca que será exibido na página.
    * **Termo de busca:** termo de busca que será referência dos produtos.
![vitrine-busca-pt](//images.ctfassets.net/alneenqid6w5/2nOoe8dF1IaF1YPIr3N3dV/5c7a481b24a5639cb70fbfc91df13a5d/image.png)
Quando o vendedor clicar no termo de busca, ele será direcionado para o resultado de buscas que foi determinado em **Termo de busca**. Você também poderá incluir até 10 buscas em cada vitrine. Veja o resultado na imagem abaixo:
![vitrine-busca-2-pt](//images.ctfassets.net/alneenqid6w5/s6MJ80nGy16Ex39NnPwnT/ed37b9e0861094d9b2b74c3f28e1a41b/image.png)
<ol start="6">
  <li>Depois de criar as seções, clique em `Salvar`, em seguida, clique em `Publicar` e `Publicar agora` para finalizar.</li>
</ol> 
- **Vitrine de coleção:** exibirá produtos da coleção que você definir. Adicione as seguintes informações: **Título da vitrine:** nome da vitrine que será exibido na página. **ID da coleção:** número do identificador da coleção que será exibido na página.

![Vitrine-PT](//images.ctfassets.net/alneenqid6w5/4hppMA8Zky77l93af8W6ks/d83fcc5ea60cc763f33f1cc3bab74c6f/Vitrine-PT.png)

A publicação da vitrine entrará na fila de indexação e estará publicada em torno de alguns  segundos.

## Ativar o menu de anúncios no VTEX Sales App

1. Acesse as configurações técnicas do VTEX Sales App em: 
```https://{conta_principal}.myvtex.com/admin/portal/#/sites```
2. Clique no botão <i class="fas fa-cog"></i>. 
3. Selecione a aba **Código**.
4. Selecione na aba lateral o arquivo `checkout-instore-custom-js`.
![checkout-instore-custom-js-file](//images.ctfassets.net/alneenqid6w5/6JgOUD4YUDyArNzUkgzIVJ/5a409dc3b01459cb8957e398f79a8c42/image.png)
5. No objeto `window.INSTORE_CONFIG`, adicione a flag `enableExplore: true,`.
![window.INSTORE_CONFIG](//images.ctfassets.net/alneenqid6w5/6kpTp7g4zRuIsyYGdo5Bio/08b22d0623a7e72a032872e838c114f6/image.png)
6. Clique em <i class="fas fa-save"></i> `Salvar`. 
7. Opcionalmente, você pode determinar que a página inicial do vendedor seja a página de anúncios. Para isso, adicione a flag `initialPage : 'advertisements',` no objeto `window.INSTORE_CONFIG`.

![initialPage : advertisements](//images.ctfassets.net/alneenqid6w5/1zS4dgPnw7Q0ZP2w0thQdt/eaac77cd87a26f72436209229c733fa4/image.png)

## Acessar os anúncios no VTEX Sales App

No VTEX Sales App, o vendedor terá a possibilidade de acessar a página de anúncios de duas maneiras diferentes:

* **Página inicial:** se o administrador da loja cadastrou previamente a página de anúncios como a página inicial do vendedor, ao efetuar login na plataforma, o vendedor será direcionado diretamente para a página de anúncios. Essa configuração garante que os vendedores estejam sempre atualizados sobre os anúncios e promoções relevantes, assim que acessarem o sistema.
* **Menu Explorar:** caso a página de anúncios não seja a página inicial do vendedor, ela ainda pode ser facilmente acessada por meio do menu **Explorar**. Para acessar a página de anúncios, o vendedor deve clicar no menu **Explorar**. Isso levará o vendedor diretamente à página de anúncios, onde poderá visualizar e interagir com os produtos e promoções disponíveis.

![vitrine-sale-app-pt](//images.ctfassets.net/alneenqid6w5/3YddBVVXNGJiVWfDK1xUrg/40b0fd419c940ec568889b2cb4f004eb/image.png)
