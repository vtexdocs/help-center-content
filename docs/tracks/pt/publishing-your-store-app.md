---
title: 'Publicar sua store app'
id: 6NTZJvsxz9qLwO6XCoxgQb
status: DRAFT
createdAt: 2019-03-07T18:21:25.255Z
updatedAt: 2020-03-13T21:24:46.397Z
publishedAt: 
firstPublishedAt: 2019-03-07T18:22:31.278Z
contentType: trackArticle
productTeam: VTEX IO
slug: publicar-sua-store-app
trackId: 5qJr8BIQXAKec9CpBWrTNv
trackSlugPT: crie-uma-loja-usando-vtex-io
---

Nesse momento você já estruturou as páginas de sua loja, estilizou seus componentes e até mesmo os customizou um pouco com seu próprio CSS. Está na hora de aprender como mostrar o nosso trabalho ao mundo.

## Usando `vtex release` para lançar uma nova versão

Vamos usar `vtex release` para automatizar algumas tarefas, especificamente lançando uma nova versão dentro do seu manifest.json de acordo com a nomenclatura de versionamento semântico, atualizando seu CHANGELOG.md, atribuindo etiquetas (commits tags) e finalmente enviando as alterações para um repositório remoto (push).

Para esse tutorial, vamos lançá-lo automaticamente para o ambiente de estabilização (stable), abrindo seu terminal e executando `vtex release major stable`.

Alternativamente, é possível só usar `vtex release <major|minor|patch> <stable|beta>` para ajustar seu release de forma diferente.

## Publicando o app no seu registro

O registro é onde todos os apps de VTEX.IO são armazenados. Para que seu app apareça no registro, você deverá executar `vtex publish`.

Alternativamente, é possível fazer que 'vtex release' faça isso automaticamente para você, adicionando 'postrelease' para o manifest.json de seu app.

Exemplo:

```
//manifest.json
  "scripts": {
    "postrelease": "vtex publish"
  }
```

## Redefinir seu workspace

Agora que acabou de adicionar o seu app no registo. Estamos na reta final ao iniciarmos o processo para tornar seu app instalável.

Vamos redefinir seu workspace, pois não podemos promover nosso app enquanto houver apps  vinculados. Isso é extremamente importante uma vez que a vinculação (como a desvinculação) faz com que nosso workspace reproduza o master workspace.

Execute:

`vtex workspace reset workspace name`

## Instalar seu app

Enquanto estávamos desenvolvendo nossos apps, criamos vários links (que agora foram removidos). Agora vamos tornar o nosso app instalável, o que significa que vai oferecer a mesma experiência ao usuário final, independentemente dos links e configurações.

Essa etapa é importante porque estamos transformando nosso app em um bundle.

Pense nos links como temporários (constantemente atualizados) e instalando (agrupando seu app) como permanente.

## Promover o workspace para master  

Agora temos de promover o workspace para master. Isso diz para VTEX.IO que o workspace selecionado é a produção pronta e estará recebendo tráfego. 

```
vtex promote
```

## Switching DNS

Abra um ticket e deixe-nos saber que está na hora de apontar nosso DNS para seu app. Ficaremos felizes em fazê-lo de forma rápida e eficiente.

