---
title: "Gerenciando versões e branches"
createdAt: 2026-03-27T17:08:52.219Z
updatedAt: 2026-03-31T17:08:52.219Z
contentType: tutorial
productTeam: CMS
slugEN: managing-versions-and-branches
locale: pt
---

Ao trabalhar com conteúdo no CMS, as alterações ocorrem com frequência, seja ao atualizar uma página de produto, preparar uma campanha ou testar novos layouts. Versões e branches ajudam você a gerenciar essas alterações com segurança enquanto colabora com sua equipe.  

* As **[versões](#versoes)** permitem preparar alterações para o futuro, rastrear edições, revisar estados anteriores do conteúdo e restaurar versões anteriores quando necessário.  
* As **[branches](#branches)** permitem agrupar várias versões de página para colaborar e evoluir o conteúdo antes de publicar no storefront.  

<video controls width="100%">
  <source src="https://raw.githubusercontent.com/vtexdocs/help-center-content/cms-branches-update/docs/pt/tutorials/cms/branching-and-versioning/Branches-pt.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

Neste guia, você aprenderá a usar versões e branches para rastrear alterações de conteúdo, testar com segurança, restaurar versões anteriores e gerenciar fluxos de publicação.

## Versões

Versões mantêm um histórico de cada alteração salva em um cadastro, permitindo revisar como o conteúdo evoluiu, comparar estados anteriores e restaurar uma versão anterior quando necessário. Cada vez que você salva um cadastro na branch `main` ou em outra, o CMS armazena uma nova versão no histórico de versões, junto com o nome do usuário que fez a alteração e a data. Com o tempo, isso gera um histórico de versões do cadastro.  

> ℹ️ O **tipo de conteúdo** serve como um template (por exemplo, `landing page`). Um **conteúdo**, como a **landing page** mostrada no vídeo abaixo, é uma página ou item de conteúdo específico derivado desse template para uma determinada loja e localidade, contendo valores únicos em seus campos (como `path`, `title` e `sections`).  

As versões mostram onde o cadastro está (por exemplo, qual versão está publicada na `main` e quais branches de rascunho estão disponíveis); assim, você pode alternar o contexto ou criar uma nova versão em uma branch.

![versions-modal](https://vtexhelp.vtexassets.com/assets/docs/src/cms-versions-pt___591efa3837cf849b9cbfd8af7044b934.png)

O controle de versões oferece diversas vantagens para o gerenciamento de conteúdo:

* **Capacidade de rollback:** permite [restaurar rapidamente uma versão publicada anteriormente](#restaurar-versões-anteriores) para corrigir problemas, como layouts quebrados ou edições incorretas.
* **Monitoramento de alterações:** mantém um registro claro de quem fez as alterações e quando, facilitando avaliações e aprovações.
* **Experimentação segura:** teste novos textos, layouts ou campanhas sem riscos, sabendo que você pode voltar à versão anterior caso os resultados não sejam satisfatórios.  
* **Reutilização de conteúdo:** ganhe tempo reutilizando conteúdos de campanhas anteriores em vez de começar do zero.

### Histórico de versões

O histórico de versões registra os eventos de ramificação e de merge do conteúdo, mostrando quem fez cada alteração e quando. Ele exibe a linha do tempo de eventos no conteúdo selecionado, permitindo revisar estados anteriores e restaurar uma versão anterior quando necessário.

![version-history-modal](https://vtexhelp.vtexassets.com/assets/docs/src/cms-version-history-pt___60bb41d1604aafb647df4e5e85c9bc05.png)

### Criar uma nova versão

Sempre que você altera um conteúdo, uma nova versão é criada. Por exemplo, se fizermos uma pequena alteração no **título da página padrão** na **landing page** abaixo, o CMS gera uma nova versão:

![creating-a-new-version](https://vtexhelp.vtexassets.com/assets/docs/src/cms-creating-version-pt___3f26025b18b9f06af3f2d4f13ed55f1a.gif)

Depois de realizar as alterações, você pode escolher entre as seguintes ações:

| Ação | Descrição |
| :---- | :---- |
| `Salvar na main` | Salva suas edições atuais diretamente na branch `main`, atualizando a versão publicada desse conteúdo e a vitrine visível aos compradores. |
| `Salvar na branch` | Salva suas edições como uma nova versão apenas na branch selecionada (por exemplo, `black-friday`), mantendo a branch `main` inalterada. Use isso para trabalhar em rascunhos ou campanhas sem afetar o que está publicado na vitrine. |
| `Descartar` | Exclui todas as alterações não salvas no formulário e restaura o conteúdo à sua última versão salva no `main` ou em outra branch, sem criar uma nova versão. Esta ação não pode ser desfeita. |

> ℹ️ Para mais informações sobre branches, acesse a seção [Branches](#branches).

### Restaurar versões anteriores

As versões salvas na branch `main` podem ser visualizadas e restauradas para publicar conteúdo do passado. No painel de Histórico de versões, ao passar o cursor sobre uma versão publicada anteriormente, é exibida a ação **Ver versão**.

![restore-past-versions](https://vtexhelp.vtexassets.com/assets/docs/src/restore-versions-pt___4a13ed35567902a81081448e5c0e09ef.png)

Após visualizar, você pode escolher entre as seguintes ações:

| Ação | Descrição |
| :---- | :---- |
| `Restaurar na main` | Duplica a versão e publica-a na branch `main` como uma nova versão na vitrine. |
| `Restaurar na branch` | Duplica a versão e a adiciona a um branch de destino para edição adicional, sem impactar a vitrine. |
| `Fechar` | Fecha a versão anterior e retorna ao branch `main` sem aplicar nenhuma restauração. |

> ℹ️ Para mais informações sobre branches, consulte a seção [Branches](#branches).

## Branches

Branches facilitam a colaboração em equipe, alterações em massa de conteúdo em múltiplas páginas e fluxos de aprovação. Elas permitem que você edite, avalie, pré-visualize e teste alterações antes de publicá-las. As branches são usadas comumente em projetos ou campanhas específicas de conteúdo, como a Black Friday, ou em outras atualizações especiais que envolvem a edição e a publicação de várias páginas simultaneamente.

> ⚠️ **Limites de branches**: lembre-se de que cada conta pode ter até 10 branches ativas.

![branches-overview](https://vtexhelp.vtexassets.com/assets/docs/src/branch-overview-pt___b39313c4040dec56574d85d599184d93.png)

| Funcionalidade | Descrição |
| :---- | :---- |
| **Branches (`+`)** | Lista todos os branches da loja. Use o **`+`** para criar um novo branch. |
| **Busca** | Encontra conteúdo pelo nome na branch e na loja atuais. |
| **Filtro por tipo de conteúdo** | Filtra a lista de conteúdo por tipo (por exemplo, `home`, `pdp`, `landingPage`). |
| **Filtro de última atualização** | Ordena ou filtra o conteúdo pelo tempo de atualização mais recente. |
| **Tabela de conteúdo** | Exibe o conteúdo na branch, incluindo informações de **Nome**, **Tipo de Conteúdo**, **Loja** e **Última atualização**. |
| **Mostrar apenas alterações** | Filtra a lista para exibir apenas o conteúdo modificado na branch ativa. |
| **Ícone de paginação** | Navega entre as páginas de conteúdo. |
| **Criar conteúdo** | Cria um novo conteúdo na branch e nas lojas atuais. |
| **Pré-visualização** (ícone de olho) | Abre uma pré-visualização para revisar o conteúdo de rascunho na vitrine. |
| **Mergear** | Mescla as alterações da branch no `main`, imediatamente ou em uma data agendada. Para mais detalhes, consulte [Publicar e agendar alterações](#publicar-e-agendar-alterações). |

### Entendendo a branch `main` e as demais branches**

A branch `main` contém o conteúdo publicado no storefront. Ao clicar em `Salvar na Main`, suas alterações são publicadas imediatamente.  

As demais branches são usadas para desenvolver e revisar o conteúdo antes da publicação na main. Ao clicar em `Salvar na branch`, suas alterações são salvas como uma nova versão dentro dessa branch, sem impactar o storefront.

### Publicar e agendar alterações

A página de **Branches** inclui a capacidade de `Mergear` o branch atual com o branch `main`, oferecendo duas formas de publicar conteúdo na vitrine:

* `Mergear agora` pega as alterações da branch e as mescla na branch `main`. Esta ação publica as alterações imediatamente na vitrine.

* `Agendar merge` permite planejar a mesclagem de um branch na branch main para uma data e hora futuras. O CMS executará automaticamente a mesclagem assim que a data e hora agendadas chegarem.

![publish-and-schedule-changes](https://vtexhelp.vtexassets.com/assets/docs/src/merge-schedule-pt___46148bf41908dd2a2d9842237174cb9f.gif)

> ⚠️ O conteúdo pode permanecer em cache mesmo após o merge e pode levar alguns minutos a mais para aparecer no storefront.

### Excluir branch

Esse processo exclui todas as versões que tenham alterações na branch. O conteúdo e outras versões em outras branches não serão afetados.

## Gerenciar remoção de conteúdo

Existem três formas distintas de remover ou reverter conteúdo.

### Excluir conteúdos

Exclui o conteúdo inteiro e todas as suas versões. Esta ação é irreversível. Para excluir um conteúdo, siga estes passos:

1. Escolha um dos conteúdos de um branch que você criou, por exemplo, **Home**.  
2. Em **Home**, clique no menu e escolha `Excluir`.  
3. Clique em `Segure para excluir` e o conteúdo será excluído.  

   ![delete-entry](https://vtexhelp.vtexassets.com/assets/docs/src/delete-entry-pt___1de60b59f60f7c3e1db7fcb242a3a859.gif)

### Desfazer alterações

Descarta suas alterações em um branch e restaura o conteúdo à sua última versão publicada.

![undo-changes](https://vtexhelp.vtexassets.com/assets/docs/src/undo-changes-pt___021dac72f282e4b9209ca08d52e907a3.png)

### Excluir da `main`

Você pode excluir um conteúdo da `main` de duas maneiras:

* **Excluir agora:** Exclui o conteúdo da `main` imediatamente, removendo-o da loja.
* **Excluir ao fazer merge:** Agenda a exclusão automática do conteúdo da versão principal quando uma branch escolhida for mesclada com `main`, em vez de excluí-lo manualmente. Isso mantém o conteúdo atual publicado até o momento exato em que o novo conteúdo substituir.

![delete-from-main-overview](https://vtexhelp.vtexassets.com/assets/docs/src/delete-from-main___e2abd167abc3ea7b587bfec95dd7c56e.gif)

Isso é útil para substituições de conteúdo, como em campanhas sazonais. Por exemplo, se um conteúdo de `Natal` estiver publicado na `main` e um conteúdo de `Ano-Novo` estiver sendo preparado em outra branch, você poderá agendar a exclusão do conteúdo de `Natal` na `main` para que ele seja removido automaticamente assim que a branch que contém o conteúdo de `Ano-Novo` passar por merge com `main`. Dessa forma, retirar o conteúdo desatualizado do ar não exige mais uma etapa manual adicional.

> ℹ️ Para mais informações sobre merge de branches, consulte [Publicar e agendar alterações](#publishing-and-scheduling-changes).
