---
title: "Histórico de versões"
createdAt: 2026-07-09T17:08:52.219Z
updatedAt: 2026-07-09T17:08:52.219Z
contentType: tutorial
productTeam: CMS
slugEN: cms-version-history
locale: pt
---

O CMS mantém um histórico de versões para cada conteúdo, registrando quem fez cada alteração e quando. Esse histórico permite revisar como o conteúdo evoluiu ao longo do tempo, comparar estados anteriores e restaurar uma versão anterior com um único clique usando o recurso Restaurar versão anterior.

Neste guia, você aprenderá como conferir a linha do tempo do histórico de versões e restaurar uma versão anterior de um conteúdo.

![version-history-overview](https://vtexhelp.vtexassets.com/assets/docs/src/cms-versioning___1a610e124a85b4fc41630dd75556960c.gif)

## Entendendo a linha do tempo do histórico de versões

O histórico de versões registra cada evento de salvamento de um conteúdo. Sempre que você salva conteúdo na branch `main` ou em outra branch, o CMS cria uma nova versão e armazena o nome do usuário que fez a alteração e a data em que ela foi salva. Para abrir o histórico de versões de um conteúdo:

1. No Admin VTEX, acesse **Storefront > Todo o conteúdo**.  
2. Clique no conteúdo que você deseja revisar.  
3. Abra o painel lateral Histórico de versões na barra de ferramentas do conteúdo.

A linha do tempo mostra todas as versões salvas do conteúdo em ordem cronológica. Para cada versão, você pode ver:

* A data e a hora em que a versão foi salva.  
* O usuário que fez a alteração.  
* A branch em que a versão foi salva, como `main` ou outra branch.  
* Qual versão está publicada atualmente na branch `main`.

> ⚠️ Apenas versões que passaram por merge na branch `main` podem ser restauradas.

## Visualizar uma versão anterior

Visualizar uma versão anterior permite inspecionar conteúdo passado antes de decidir se deseja restaurá-lo. Para visualizar uma versão anterior, siga os passos abaixo:

1. No painel lateral Histórico de versões, passe o cursor sobre a versão que você deseja revisar.  
2. Clique em `Visualizar versão`.

O formulário do conteúdo é atualizado para exibir o conteúdo como ele existia naquele momento. Você pode ler todos os campos e seções, mas não pode editar o conteúdo nessa visualização. Depois de visualizar, você pode escolher uma das seguintes ações:

| Ação | Descrição |
| :---- | :---- |
| Restaurar em main | Duplica a versão e a publica na branch `main` como uma nova versão no storefront. |
| Restaurar em branch | Duplica a versão e a adiciona a uma branch selecionada para edição posterior, sem afetar o storefront. |
| Fechar | Fecha a versão anterior e retorna ao estado atual sem aplicar alterações. |

## Restaurar uma versão anterior

Com o recurso Restaurar versão anterior, você pode republicar conteúdo de uma versão anterior sem precisar inserir novamente os dados antigos manualmente. A ação de restauração duplica a versão selecionada e preserva todo o histórico intermediário. Esse recurso é útil nos seguintes cenários:

* Página com erro depois que uma campanha termina.  
  * Sua equipe atualizou a página inicial para uma promoção, mas o layout pós-campanha agora está exibindo conteúdo incorreto. Restaure a versão anterior à campanha diretamente em `main` para corrigir o storefront.  
* Reutilizar conteúdo de uma campanha anterior.  
  * Você deseja reutilizar o layout da Black Friday do ano passado como ponto de partida para a campanha deste ano. Restaure essa versão em uma branch, atualize as datas e ofertas, e faça merge da branch em `main` quando ela estiver pronta.

### Restaurar em main

Use Restaurar em main para publicar imediatamente uma versão anterior no storefront.

1. No painel lateral Histórico de versões, passe o cursor sobre a versão que você deseja restaurar.  
2. Clique em `Visualizar versão`.  
3. Revise o conteúdo para confirmar que é a versão correta.  
4. Clique em `Restaurar em main`.

O CMS duplica a versão selecionada, adiciona essa versão à branch `main` como uma nova versão e a publica no storefront. O histórico de versões é preservado, e todas as versões intermediárias permanecem na linha do tempo.

> ⚠️ O conteúdo pode permanecer em cache por alguns minutos depois de ser restaurado em `main`. Aguarde um breve intervalo antes de confirmar que a alteração está ativa no storefront.

### Restaurar em branch

Use Restaurar em branch para trazer uma versão anterior para uma branch e continuar editando antes de publicar.

1. No painel lateral Histórico de versões, passe o cursor sobre a versão que você deseja restaurar.  
2. Clique em `Visualizar versão`.  
3. Revise o conteúdo para confirmar que é o ponto de partida correto.  
4. Clique em `Restaurar em branch`.  
5. Selecione a branch de destino.

O CMS duplica a versão selecionada e a adiciona à branch escolhida. O storefront não é afetado até que você faça merge da branch na branch `main`. Para mais informações sobre como fazer merge de uma branch, consulte [Gerenciar versões e branches](https://help.vtex.com/docs/tutorials/managing-versions-and-branches).
