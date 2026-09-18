---
title: 'Instalar o VTEX Sales App'
status: PUBLISHED
createdAt: 2026-09-18T00:00:00.000Z
updatedAt: 2026-09-18T00:00:00.000Z
contentType: trackArticle
productTeam: Shopping
slugEN: installing-the-vtex-sales-app
locale: pt
trackSlugEN: vtex-sales-app-getting-started-and-setting-up
order: 4
---

Após checar os [requisitos necessários](XXX) e definir a [arquitetura da sua operação](XXX), siga as orientações deste artigo para instalar o **VTEX Sales App** na sua conta principal.

## Instalação no Admin VTEX

> ⚠️ A instalação do **Sales App** é feita somente na conta principal e não requer alterações em contas franquias.

1. Acesse o [VTEX Sales App setup](https://apps.vtex.com/vtex-assisted-sales-admin/p) na VTEX App Store. Você também pode acessá-lo pelo Admin VTEX em **Aplicativos > Hub de Extensões > App Store > VTEX Sales App**.
2. Clique em `Obter app`.
3. Digite o nome da sua conta principal na VTEX e clique em `Confirmar`.
4. Clique em `Fechar pedido`.
5. Clique em `Vá para a página de instalação` para acessar o aplicativo no Admin VTEX.
6. Clique em `Instalar`.

Feito isso, uma nova página sobre checkout será criada no seu Admin VTEX, na pasta `checkout/instore`, contendo os arquivos `checkout-instore-custom.js` e `checkout-instore-custom.css`. Para visualizá-los, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Storefront > Checkout** ou digite **Checkout** no campo de busca.
2. Clique na engrenagem do campo **Default**.
3. Clique na aba **Código**.
4. Na seção **Arquivos**, você verá os arquivos `checkout-instore-custom.js` e `checkout-instore-custom.css`.

> ⚠️ Por padrão, o **Sales App** deve ser utilizado sempre no site `default` da conta principal para simplificar a operação da loja e evitar erros.

Caso deseje confirmar se a instalação do `checkout/instore` foi feita no local correto, cheque se o nome `default` aparece na URL da aba **Código**, como em: `https://{nomeloja}.myvtex.com/admin/portal#/sites/default/code`.

## Instalação em dispositivos móveis

> ❗ Antes de usar o **Sales App** em dispositivos móveis, é necessário realizar não apenas a instalação do **Sales App** no Admin VTEX, mas também concluir suas [configurações básicas](XXX), como será explicado no próximo artigo desta trilha.

Após instalar e [configurar](XXX) o **Sales App** no Admin VTEX, você poderá usá-lo em dispositivos móveis, como tablets ou smartphones. Veja a seguir os links de download referentes a cada sistema operacional:

| Sistema operacional | Link de download |
|---------------------|------------------|
| Android | [Google Play](https://play.google.com/store/search?q=VTEX%20sales%20app&c=apps&hl=pt_BR) |
| iOS | [App Store da Apple](https://apps.apple.com/us/app/vtex-sales-app/id1100390867) |
