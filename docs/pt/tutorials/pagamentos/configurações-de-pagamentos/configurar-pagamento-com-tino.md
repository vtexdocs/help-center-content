---
title: 'Configurar pagamento com Tino'
id: 5526MMHBskrFC4X4soQlzT
status: PUBLISHED
createdAt: 2024-09-04T21:07:35.889Z
updatedAt: 2024-09-06T14:57:34.115Z
publishedAt: 2024-09-06T14:57:34.115Z
firstPublishedAt: 2024-09-04T21:44:23.265Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: configuring-payment-with-tino
legacySlug: configurar-pagamento-com-tino
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento Tino. Por meio deste provedor, sua loja pode realizar vendas utilizando o meio de pagamento Tino.

Para habilitar o provedor Tino, é necessário:

- [Instalar os aplicativos Tino e Tino UI](#instalar-aplicativos-tino-e-tino-ui)
- [Configurar o Tino app](#configurar-tino-app)
- [Configurar o provedor Tino](#configurar-pagamento-com-tino)
- [Configurar condição de pagamento](#configurar-condicao-de-pagamento)
- [Instalar script de customização no checkout (opcional)](#script-de-customizacao-no-checkout-opcional)
- [Configurar conciliação (opcional)](#configurar-conciliacao-opcional)

## Instalar aplicativos Tino e Tino UI

Para iniciar a implementação do provedor Tino em sua loja é necessário habilitar dois aplicativos:

- __Tino app__: gerencia o processamento de pagamentos
- __Tino Ui app__: controla a interface gráfica do sistema de pagamentos.

As instalações dos apps Tino e Tino UI podem ser realizadas em sua loja por meio do VTEX IO CLI ou do Admin VTEX.

> ⚠️ Antes de iniciar a instalação por qualquer um dos métodos, verifique com a equipe de suporte da Tino os números das versões mais atuais dos aplicativos.

### Instalação via VTEX IO CLI

1. No [VTEX IO CLI](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-install), execute o comando `vtex login nomedaconta` para realizar o login em sua conta.
2. Instale o Tino app por meio do comando `vtex install tinopartnerbr.ppp-tino@{{current-app-version}}`. A informação `{{current-app-version}}` deve ser substituída pela a versão atual do aplicativo, por exemplo: __vtex install tinopartnerbr.ppp-tino@0.0.50__.
3. Instale o Tino UI app por meio do comando `vtex install tinopartnerbr.ppp-tino-payments@{{current-app-version}}`. A informação `{{current-app-version}}` deve ser substituída pela a versão atual do aplicativo, por exemplo: __vtex install tinopartnerbr.ppp-tino-payments@1.0.9__.

### Instalação via Admin VTEX

<blockquote><ui>1. Acesse o Admin VTEX.</ui>

<blockquote><ui>2. Copie e cole no navegador a URL a seguir, substituindo as seguintes informações: **SUA_URL_DA_VTEX**, pelo endereço do seu ambiente VTEX e *{{current-app-version}}*, pela a versão atual do aplicativo Tino: ***SUA_URL_DA_VTEX**/admin/apps/tinopartnerbr.ppp-tino@{{current-app-version}}/install*</ui> 

<blockquote>> ℹ️ Exemplo de URL: https://minhaloja.myvtex.com/admin/apps/tinopartnerbr.ppp-tino@0.0.50/install</blockquote>

<blockquote><ui>3. Clique em **Instalar** e siga as instruções de instalação do Tino app.</ui>

<blockquote><ui>4. Copie e cole no navegador a URL a seguir, substituindo as seguintes informações: **SUA_URL_DA_VTEX**, pelo endereço do seu ambiente VTEX e *{{current-app-version}}*, pela a versão atual do aplicativo Tino UI: ***SUA_URL_DA_VTEX**/admin/apps/tinopartnerbr.ppp-tino-payments@{{current-app-version}}/install*</ui> 

<blockquote><ui>> ℹ️ Exemplo de URL: https://minhaloja.myvtex.com/admin/apps/tinopartnerbr.ppp-tino-payments@1.0.9/install</blockquote>

  <blockquote><ui>5. Clique em **Instalar** e siga as instruções de instalação do Tino Ui app.</ui> 

## Configurar Tino app

Após instalar os aplicativos, você precisa realizar a configuração do Tino app. Para acessar a tela de configurações, siga os passos abaixo:

1. No Admin VTEX, acesse __Aplicativos > Hub de Extensões > Gerenciamento de Aplicativos__, ou digite __Gerenciamento de Aplicativos__ na barra de busca no topo da página.
2. Localize o __Tino App__ e clique em __Configurações__.
3. Na página de configurações, preencha os campos abaixo com informações fornecidas pelo time de suporte da Tino. 
- __API Key__: chave para o processamento de pagamentos
- __SDK Api Key__: chave para a operação do fluxo de checkout.

> ℹ️ As informações inseridas não devem conter espaços em branco entre caracteres.

![Tino app_4](//images.ctfassets.net/alneenqid6w5/5UliBe8XJBCddIOiY7a499/1c44b3d5716af79b63635e0b796ed029/Tino_app_4.png)

> ⚠️ A opção **Enable Development Mode** deve ser mantida desmarcada. Caso esteja sinalizada, o aplicativo estará operando somente em modo de teste e não será possível processar transações de pagamento com a Tino durante o período.

## Configurar pagamento com Tino

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página. 
2. Na tela de provedores, clique no botão `Novo provedor`. 
3. Digite o nome __Tino__ na barra de busca e clique sobre o nome do provedor.
4. Em __Autorização do provedor__, não é necessário preencher os campos __Chave de aplicação__ e __Token de aplicação__.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor Malga na tela do Admin VTEX, insira a informação no campo __Nome__ em __Informações básicas__.
6. Em __Controle de pagamento__, desative o ambiente de teste ao desmarcar a opção __Ativar modo de teste__.
7. Em __Liquidação automática__, selecione a opção __Usar comportamento recomendado pelo processador de pagamento__.

## Configurar condição de pagamento

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
2. Na aba __Condições de Pagamentos__, clique no botão `+`.
3. Localize e clique sobre a opção __Tino__.
4. Ative a condição no campo __Status__.
5. Se desejar utilizar um sistema antifraude, selecione a opção __Usar solução antifraude__.
6. Se desejar, você também pode [configurar condições especiais de pagamento](https://help.vtex.com/pt/tutorial/condiciones-especiales--tutorials_456).
7. Clique em `Salvar`.

## Script de customização no checkout (opcional)

A Tino disponibiliza a opção de coletar dados de navegação e métricas relacionadas a navegação do cliente no checkout, de forma a identificar problemas e melhorar a experiência do usuário. Para isso, é necessário implementar um script de customização do checkout por meio do VTEX IO CLI ou do Admin VTEX.

> ⚠️ Caso deseje ativar esta customização, os dados de perfil do cliente (**clientProfileData**) poderão ser acessados pela Tino.    

> ⚠️ Qualquer customização realizada no checkout por meio de um script pode impactar o fluxo de compra do cliente. Caso tenha alguma dificuldade operacional no checkout após configurar o script em sua loja, entre em contato com o suporte da Tino.

### Instalando script via Admin VTEX

1. No Admin VTEX, acesse __Configurações da loja > Storefront > Checkout__, ou digite __Checkout__ na barra de busca no topo da página.
2. Clique no ícone   do site desejado.
3. No menu de opções azul localizado na parte superior da página, clique em __Código__.
4. No canto direito da tela, em __Arquivos__, clique sobre a opção __checkout6-custom.js__.
5. Insira o código JavaScript fornecido pelo suporte da Tino.

![Tino app_5](//images.ctfassets.net/alneenqid6w5/1N5qr5pfavc7CK07deORX5/1ed2be9a5ae86c60ba0e2001f2ac4dbd/Tino_app_5.png)

6. Clique em `Salvar`.

### Intalando script via VTEX IO CLI

1. No [VTEX IO CLI](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-install), execute o comando `vtex login nomedaconta` para realizar o login em sua conta.
2. Acesse o repositório `checkout UI settings`.
3. Localize e abra o arquivo `checkout6-custom.js`.
4. Insira o código JavaScript fornecido pelo suporte da Tino dentro arquivo `checkout6-custom.js`.
5. Localize o arquivo `manifest.json` e atualize a propriedade version para a nova versão.
6. No repositório, execute os comandos `vtex publish` e `vtex install`.

## Configurar conciliação (opcional)

Para mais informações sobre como utilizar a solução da Tino que permite conciliar os pedidos e repasses realizados a fornecedores, acesse documentação da Tino [Conciliação](https://docs.tino.com.br/guias/mdulos/conciliao).

