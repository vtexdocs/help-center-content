---
title: 'Inicializando seu store theme'
id: 7cL3Qt4Aavm7RWr1UiTlPS
status: ARCHIVED
createdAt: 2019-02-19T19:50:26.133Z
updatedAt: 2020-03-13T21:24:47.109Z
publishedAt: 
firstPublishedAt: 2019-02-19T19:50:29.572Z
contentType: trackArticle
productTeam: VTEX IO
slug: inicializando-seu-store-theme
locale: pt
trackId: 5qJr8BIQXAKec9CpBWrTNv
trackSlugPT: crie-uma-loja-usando-vtex-io
---

Nosso toolbelt oferece um comando `init` que pode rapidamente clonar o [repositório do store theme padrão](https://github.com/vtex-apps/store-theme) em seu computador e inicializar algumas opções.

Primeiro, usando seu terminal, navegue até um diretório onde você deseja que seu projeto de tema seja criado. Então, use o comando `init`.

```
$ cd Projects
$ vtex init
```

Selecione `store-theme` e confirme que você gostaria de fazer o download do projeto modelo na pasta de destino.

Você receberá informações importantes sobre o aplicativo, como o vendor, o nome, o título e a descrição do aplicativo. Use o __account name__ da loja que você está desenvolvendo como o __vendor__. Isso é importante para que posteriormente você consiga publicar corretamente essa app nesta conta. Para usar os valores padrão, basta pressionar Enter.

![store-theme](//images.ctfassets.net/alneenqid6w5/6FEPaKbOMqkndELmvd0u6z/f47d4a3a04b5cf270372b5dbc72940a9/store-theme.svg)

## Entendendo a estrutura da app

Vamos dar uma olhada nos arquivos que foram gerados para entender a estrutura dessa app. Você pode navegar em seu código com qualquer editor, mas recomendamos usar o [Visual Studio Code (VSCode)](https://code.visualstudio.com/).

Se você tem o VSCode instalado, simplesmente use o comando `code .` para abri-lo na sua pasta atual. (Se isso não funcionar, [siga os passos do guia de configuração do VSCode](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line) para adicionar esse comando à sua variável de ambiente PATH.)

O arquivo principal de qualquer app é o `manifest.json`. Ele guarda metadados importantes sobre suas apps, como vendor, nome, versão (usamos [versionamento semântico](https://semver.org/)), dependências de apps, builders e policies.

Vamos dar uma olhada em um exemplo de arquivo manifest e todas as suas propriedades:

```json
{
 "vendor": "storecomponents",
 "name": "store-theme",
 "version": "0.1.0",
 "title": "Store Components",
 "description": "Demo for store theme init",
 "builders": {
   "styles": "1.x",
   "store": "0.x"
 },
 "dependencies": {
   "vtex.store": "2.x",
   "vtex.store-header": "2.x",
   "vtex.store-footer": "2.x",
   "vtex.carousel": "2.x",
   "vtex.shelf": "1.x",
   "vtex.product-details": "1.x",
   "vtex.product-kit": "1.x",
   "vtex.search-result": "3.x",
   "vtex.login": "2.x",
   "vtex.my-account": "1.x"
 }
}
```


- __Vendor, Nome e Versão__: estas três propriedades compõem o seu __App Id__. Ao publicar uma app, esse é o identificador imutável para instalar e desinstalar uma app. Por exemplo, poderíamos referenciar essa app como `storecomponents.store-theme@0.1.0`.
- __Título e Descrição__: serão usados por interfaces de administração, como o Admin do My Apps.
__Builders__: definem qual tipo de código ou configuração você deseja exportar nessa app. Esta app está usando os builders Styles e Store, que afetam, respectivamente, o tema visual e a estrutura de layout de uma loja. Existem vários outros builders para casos de uso específicos, como `react`, `messages`, `node`, `graphql` etc. Você pode [ler mais sobre builders](/pt/faq/o-que-e-um-builder-do-vtex-io), mas, por enquanto, vamos nos concentrar nesses dois.
__Dependências__: sua app pode depender de determinadas funcionalidades fornecidas por outras apps. Dependências podem ser chamadas *em runtime* pela sua app - por exemplo, dependendo de uma app que exporte um Schema GraphQL - ou podem ser usadas para __importar dinamicamente código de outra app__. Falaremos mais sobre isso depois.

O init do store-theme também criou duas pastas diferentes, nomeadas com base nos builders definidos no manifest: __store/__ e __styles/__. Estas serão processadas por seus respectivos builders, a fim de ter os efeitos desejados em sua loja.

<div class="alerta alerta-info">
Note que o <code>store-theme</code> depende da <a href="https://github.com/vtex-apps/store">app</a> <code>vtex.store</code>. Essa app declara as configurações básicas para se ter uma loja funcionando, como interfaces, rotas, configurações de loja e muito mais. Você pode pensar nisso como parte do VTEX Store Framework. Essa app vem pré-instalada em todas as contas da VTEX e não pode ser desinstalada.
</div>

Vamos começar a editar esses arquivos em breve. Mas primeiro, vamos linkar essa app e vê-la funcionando.

## Linkando seu código local ao VTEX IO

Linkar seu código é o processo de sincronizar os arquivos locais do seu computador com a plataforma VTEX IO e criar uma *instalação soft*. Isso não é o mesmo que instalar uma app, porque __só é possível instalar apps publicadas com uma versão fixa__. Durante o desenvolvimento, o número da sua versão não reflete o código na sua app. É por isso que você __não pode promover workspaces com apps linkadas!__

Durante um "link", todas as alterações feitas no seu código são automaticamente enviadas e refletidas quase instantaneamente. Se alguma mudança não for refletida, você pode tentar sair (`CTRL-C`) e entrar novamente.

Execute o `vtex link` e veja seu aplicativo de exemplo ser compilado e publicado na conta e no workspace que você acabou de criar.

![vtex-link](//images.ctfassets.net/alneenqid6w5/1peFxCLM0kF9JvC8AmPeFi/9cef3e4e5e5877a744c15ca3f6e8db18/vtex-link.svg)

<div class="alerta alerta-info">
Lembre-se: execute <code>vtex whoami</code> para ter certeza de que você está na conta certa e em um workspace de teste. Caso contrário, o <code>VTEX Toolbelt</code> irá reclamar do link direto com o master.
</div>

## Visitando nossa nova loja

Abra seu browser e navegue até:

`https://{{workspace}}-{{account}}.myvtex.com`

Onde `workspace` é o workspace que você acabou de criar e account é o nome da conta da loja.

O `{{account}}.myvtex.com` é o seu domínio privado destinado a testar novos workspaces, por isso ele irá pedir suas informações de login. Após o login, você deve ver o tema padrão da loja.

Parabéns por linkar sua primeira app no VTEX IO!

![dreamstore](//images.ctfassets.net/alneenqid6w5/7G77GAWEmdysNJ2JBYaAI8/6b2bc7f47f994242c8a853e84e3f0b67/dreamstore.svg)
