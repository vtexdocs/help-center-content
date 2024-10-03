---
title: 'Como transformar o site da minha loja em um PWA'
id: 3i8VmYeToAUGKgo2kKK6I2
status: CHANGED
createdAt: 2018-03-19T18:20:25.794Z
updatedAt: 2024-05-07T14:04:52.042Z
publishedAt: 2023-07-10T14:28:55.813Z
firstPublishedAt: 2018-03-20T14:54:55.189Z
contentType: tutorial
productTeam: Others
author: 7FpKZ0rc6k4WqeymES80cw
slugEN: how-to-turn-my-store-website-into-a-pwa
locale: pt
legacySlug: como-transformar-o-site-da-minha-loja-em-um-pwa
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

<div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
Tutorial válido apenas para lojas CMS Portal Legado.
</div>

PWA é a abreviação em inglês de Progressive Web App - um conjunto de técnicas usadas para desenvolver aplicações web e adicionar funcionalidades que antes só eram possíveis em apps nativos.

Se você já tem um site ou uma aplicação web, pode implementar aos poucos as características que definem um PWA, como notificações, cache de arquivos, execução em modo off-line e outras possibilidades que fazem o usuário se sentir em um aplicativo nativo.

>⚠️ A plataforma VTEX **não** possui features nativas para transformar sua loja em PWA. Ela apenas oferece as condições para que essa implementação seja feita. Lojas desenvolvidas com o VTEX IO Store Framework possuem este recurso nativamente.

## O Google define com exatidão o que é esperado de um PWA:

__Progressivo:__ para qualquer usuário, independente do browser.

__Responsivo:__ se adequa a qualquer dispositivo: desktop, tablet e mobile.

__Independente de conexão:__ funciona mesmo quando o usuário estiver offline.

__Semelhante ao app:__ o usuário se sente em um aplicativo nativo.

__Atualizado:__ não é necessário baixar atualizações, o browser simplesmente detecta e atualiza quando necessário, graças ao Service Worker.

__Seguro:__ fornecido apenas com HTTPS.

__Engajável:__ através de push notifications, o usuário tem como ser engajado constantemente.

__Instalável:__ é possível adicionar um ícone na tela principal do smartphone, sem precisar acessar uma store.

__Compartilhável:__ seu compartilhamento é facilitado por URL, sem instalação complexa.

## Como criar seu PWA do zero

Antes de começar, você deve ter a aplicação que irá adicionar as técnicas necessárias para que seu site ou aplicação web seja transformada em um PWA.

### Primeiro passo
É preciso criar o arquivo manifest.json. O manifesto do aplicativo da web fornece informações sobre um aplicativo (como nome, autor, ícone e descrição) em um arquivo de texto JSON. O propósito do arquivo manifest é transformar uma aplicação web em algo instalável em um smartphone.

__Para criar o JSON, siga o passo a passo abaixo:__

1. No admin VTEX, acesse **Storefront > Layout**.
2. Clique na pasta **CMS**.
3. Depois, na aba __Código__.
4. Clique em __Novo__ e em seguida em __Arquivo__.
5. Inclua o nome do arquivo exatamente como: __manifest.json__.
6. Insira as informações do aplicativo (como nome, autor, ícone e descrição).
7. Para finalizar, clique em __Salvar__.

__Seu arquivo deve ser importado no index.html, assim:__

`<link rel="manifest" href="/arquivos/manifest.json">`

Depois disso, sua aplicação web poderá abrir um splash screen exatamente igual aos apps nativos.

### Segundo passo
Você deve criar um Service Worker para ter a opção de manipular as requisições que são feitas por sua aplicação e com isso possibilitar recursos que beneficiem seu PWA, como sincronização periódica, notificações push e até execução em modo off-line.

__Para criar o script, siga o passo a passo abaixo:__

1. No admin VTEX, acesse **Storefront > Layout**.
2. Clique na pasta **CMS**.
3.  Depois, na aba __Código__.
4.  Clique em __Novo__ e em seguida em __Arquivo__.
5.  Inclua o nome do arquivo exatamente como: __service-worker.js__.
6.  Programe a funcionalidade.
7.  Para finalizar, clique em __Salvar__.

Apesar de o arquivo se encontrar em `/arquivos/service-worker.js`, ele recebe o header `Service-Worker-Allowed` com valor `/`, o que permite interceptar requests da raiz do site.

### Terceiro passo
A forma fácil de saber se você está no caminho certo na construção do seu PWA é usar alguma ferramenta de inspeção, como o Lighthouse do Google.

Basta fazer o download da extensão, entrar no site da sua loja e clicar no widget. Depois, aguardar o resultado e visualizar o feedback da ferramenta. O ideal é ir inspecionando aos poucos, para saber quais itens estão faltando.

Fazendo isso, você terá uma versão do seu site com cara de app, por um custo muito mais baixo.
