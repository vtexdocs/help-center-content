---
title: "Gerenciando versões e branches"
createdAt: 2026-03-27T17:08:52.219Z
updatedAt: 2026-03-31T17:08:52.219Z
contentType: tutorial
productTeam: CMS
slugEN: managing-versions-and-branches
locale: pt
---

Ao trabalhar com conteúdo no CMS, as alterações ocorrem com frequência, seja atualizando uma página de produto, preparando uma campanha ou testando novos layouts. As versões e branches ajudam a gerenciar essas mudanças com segurança enquanto você colabora com sua equipe.

* **[Versões](#versoes)** permitem preparar mudanças para o futuro, rastrear edições, revisar estados de conteúdo anteriores e restaurar versões mais antigas quando necessário.
* **[Branches](#branches)** permitem agrupar múltiplas versões de páginas para colaborar e evoluir seu conteúdo antes de publicá-lo na vitrine.

Neste guia, saiba como usar versões e branches para rastrear mudanças de conteúdo, testar com segurança, restaurar conteúdo anterior e gerenciar fluxos de publicação.

## Versões

As versões mantêm um histórico de cada alteração salva em uma entrada para que você possa revisar como o conteúdo evoluiu, comparar estados anteriores e restaurar uma versão anterior quando necessário. Cada vez que você salva uma entrada no branch `main` ou em outro branch, o CMS armazena uma nova versão no histórico de versões, junto com o nome do usuário que fez a alteração e a data. Com o tempo, isso cria um histórico de versões para a entrada.

> ℹ️ O **Tipo de Conteúdo** funciona como um modelo (por exemplo, `Landing Page`). Uma **entrada**, como a **Landing Page** mostrada no vídeo abaixo, é uma página específica ou item de conteúdo derivado desse modelo para uma determinada loja e localidade, contendo valores únicos para seus campos (como `path`, `title` e `sections`).

As versões mostram onde a entrada existe (por exemplo, qual versão está publicada no `main` e quais branches de rascunho estão disponíveis), para que você possa alternar contextos ou criar uma nova versão em um branch.

![versions-modal](https://vtexhelp.vtexassets.com/assets/docs/src/cms-versions-pt___591efa3837cf849b9cbfd8af7044b934.png)

O controle de versões oferece várias vantagens para o gerenciamento de conteúdo:

* **Capacidade de reversão:** [Restaure rapidamente](#restaurar-versoes-anteriores) uma versão publicada anteriormente para corrigir problemas como layouts quebrados ou edições incorretas.  
* **Rastreamento de alterações:** Mantenha um registro claro de quem fez alterações e quando, para apoiar revisões e aprovações.  
* **Experimentação segura:** Teste novos textos, layouts ou campanhas sem risco, sabendo que você pode reverter para a versão anterior se os resultados forem insatisfatórios.  
* **Reutilização de conteúdo:** Economize tempo reutilizando conteúdo de uma campanha anterior em vez de começar do zero.

### Histórico de versões

O histórico de versões registra eventos de ramificação e mesclagem de entradas, mostrando quem fez quais alterações e quando. Ele exibe a linha do tempo de eventos dentro da entrada selecionada, permitindo revisar estados anteriores e restaurar uma versão passada quando necessário.

![version-history-modal](https://vtexhelp.vtexassets.com/assets/docs/src/cms-version-history-pt___60bb41d1604aafb647df4e5e85c9bc05.png)

### Criar uma nova versão

Sempre que você modifica uma entrada, uma nova versão é criada. Por exemplo, se fizermos uma pequena alteração no **Default page title** dentro do exemplo de **Landing Page** abaixo, o CMS gera uma nova versão:

![creating-a-new-version](https://vtexhelp.vtexassets.com/assets/docs/src/cms-creating-version-pt___3f26025b18b9f06af3f2d4f13ed55f1a.gif)

Após fazer as alterações, você tem as seguintes ações disponíveis:

| Ação | Descrição |
| :---- | :---- |
| `Salvar no main` | Salva suas edições atuais diretamente no branch `main`, atualizando a versão publicada dessa entrada e atualizando a vitrine visível para os Compradores. |
| `Salvar no branch` | Salva suas edições como uma nova versão apenas no branch selecionado (por exemplo, `black-friday`), mantendo o branch `main` inalterado. Use isso para trabalhar em rascunhos ou campanhas sem afetar o que está publicado na vitrine. |
| `Descartar` | Exclui todas as alterações não salvas no formulário e restaura a entrada para sua última versão salva no `main` ou em outro branch, sem criar uma nova versão. Esta ação não pode ser desfeita. |

> ℹ️ Para mais informações sobre branches, consulte a seção [Branches](#branches).

### Restaurar versões anteriores

As versões salvas no branch `main` podem ser visualizadas e restauradas para publicar conteúdo do passado. No painel de Histórico de versões, ao passar o cursor sobre uma versão publicada anteriormente, é exibida a ação **Ver versão**.

![restore-past-versions](https://vtexhelp.vtexassets.com/assets/docs/src/restore-versions-pt___4a13ed35567902a81081448e5c0e09ef.png)

Após visualizar, você pode escolher entre as seguintes ações:

| Ação | Descrição |
| :---- | :---- |
| `Restaurar no Main` | Duplica a versão e a publica no branch `main` como uma nova versão na vitrine. |
| `Restaurar no branch` | Duplica a versão e a adiciona a um branch de destino para edição adicional, sem impactar a vitrine. |
| `Fechar` | Fecha a versão anterior e retorna ao branch `main` sem aplicar nenhuma restauração. |

> ℹ️ Para mais informações sobre branches, consulte a seção [Branches](#branches).

## Branches

Os branches facilitam a colaboração em equipe, alterações de conteúdo em massa em múltiplas páginas e fluxos de aprovação. Os branches permitem editar, revisar, visualizar e testar alterações antes de publicá-las. São comumente usados para projetos de conteúdo ou campanhas específicas, como Black Friday, ou para outras atualizações especiais de conteúdo que envolvem edição e publicação de múltiplas páginas simultaneamente.

> ⚠️ **Limites de branches**: tenha em mente que cada conta pode ter até 10 branches ativos.

![branches-overview](https://vtexhelp.vtexassets.com/assets/docs/src/branch-overview-pt___b39313c4040dec56574d85d599184d93.png)

| Funcionalidade | Descrição |
| :---- | :---- |
| **Branches (`+`)** | Lista todos os branches da loja. Use o **`+`** para criar um novo branch. |
| **Busca** | Encontra entradas por nome dentro do branch e loja atuais. |
| **Filtro por tipo de conteúdo** | Filtra a lista de entradas por tipo de conteúdo (por exemplo, `home`, `pdp`, `landingPage`). |
| **Filtro de última atualização** | Ordena ou filtra entradas pelo tempo de atualização mais recente. |
| **Tabela de entradas** | Exibe as entradas no branch, incluindo informações de **Nome**, **Tipo de Conteúdo**, **Loja** e **Última atualização**. |
| **Mostrar apenas alterações** | Filtra a lista para mostrar apenas entradas modificadas no branch ativo. |
| **Ícone de paginação** | Navega entre páginas de entradas. |
| **Criar conteúdo** | Cria uma nova entrada no branch e loja atuais. |
| **Pré-visualização** (ícone de olho) | Abre uma pré-visualização para revisar o conteúdo de rascunho na vitrine. |
| **Mesclar** | Mescla as alterações do branch no `main`, imediatamente ou em uma data agendada. Para mais detalhes, consulte \[\](). |

### Entendendo o branch `main` e outros branches

O branch `main` contém o conteúdo publicado na vitrine. Quando você clica em `Salvar no main`, suas alterações são publicadas imediatamente.

Outros branches são usados para desenvolver e revisar conteúdo antes de publicá-lo no main. Quando você clica em `Salvar no branch`, suas alterações são salvas como uma [nova versão](#criar-uma-nova-versao) dentro desse branch, sem afetar a vitrine.

### Publicar e agendar alterações

A página de **Branches** inclui a capacidade de `Mesclar` o branch atual com o branch `main`, oferecendo duas formas de publicar conteúdo na vitrine:

* `Mesclar agora` pega as alterações contidas no branch e as mescla no branch `main`. Esta ação publica as alterações imediatamente na vitrine.

* `Mesclagem agendada` permite planejar a mesclagem de um branch no branch main para uma data e hora futuras. O CMS executará automaticamente a mesclagem assim que a data e hora agendadas chegarem.

![publish-and-schedule-changes](https://vtexhelp.vtexassets.com/assets/docs/src/merge-schedule-pt___46148bf41908dd2a2d9842237174cb9f.gif)

> ⚠️ O conteúdo pode estar em cache mesmo após a mesclagem e pode levar mais alguns minutos para aparecer na vitrine.

### Excluir branch

Este processo exclui todas as versões que contêm alterações dentro do branch. Entradas e outras versões de branches não serão afetadas.

## Gerenciamento de remoção de conteúdo

Existem três formas distintas de remover ou reverter conteúdo.

### Excluir entrada

Exclui a entrada inteira e todas as suas versões. Esta ação é irreversível. Para excluir uma entrada, siga estes passos:

1. Escolha uma das entradas de um branch que você criou, por exemplo, **Home**.  
2. Em **Home**, clique no menu e escolha `Excluir`.  
3. Clique em `Segure para excluir`, e a entrada será excluída.  

   ![delete-entry](https://vtexhelp.vtexassets.com/assets/docs/src/delete-entry-pt___1de60b59f60f7c3e1db7fcb242a3a859.gif)

### Desfazer alterações

Descarta suas alterações em um branch e restaura a entrada para sua última versão publicada.

![undo-changes](https://vtexhelp.vtexassets.com/assets/docs/src/undo-changes-pt___021dac72f282e4b9209ca08d52e907a3.png)

### Excluir do `main`

Remove a entrada do branch `main` mantendo as versões em outros branches. Isso cancela a publicação do conteúdo na vitrine.

![delete-from-main](https://vtexhelp.vtexassets.com/assets/docs/src/delete-from-main-pt___18c247ceaee82219b1aebddd28c6cb39.png)
