---
title: 'Criar Regra de merchandising - Editor manual'
id: 3jrXB1MSvi14ezvKancorc
status: PUBLISHED
createdAt: 2024-06-27T17:14:53.957Z
updatedAt: 2024-06-27T17:15:56.346Z
publishedAt: 2024-06-27T17:15:56.346Z
firstPublishedAt: 2024-06-27T17:15:56.346Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: creating-merchandising-rules-manual-editor
locale: pt
legacySlug: criar-regra-de-merchandising-editor-manual
subcategoryId: 32zXHBMygA2dB6TbCjQJej
---

Para configurar uma [regra de merchandising](/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/5tBSYXb9EIdePa0MWTnFd0) no Editor manual do VTEX Intelligent Search, você precisa seguir os passos abaixo.

1. No Admin VTEX, acesse **Storefront**, ou digite **Storefront** na barra de busca.
2. Em **Intelligent Search**, clique em **Regras de merchandising**.
3. Clique no botão  `Novo`.
4. Preencha os seguintes campos:
    * **Nome**: nome da regra de merchandising. Exemplo: promover o produto A quando a pesquisa for Biscoito de chocolate.
    * **Data de início (opcional)**: agendamento da data a partir da qual a regra de merchandising será aplicada. A data segue o fuso horário UTC-0.
    * **Data de término (opcional)**: agendamento da data em que a regra de merchandising não será mais aplicada às buscas na loja. A data segue o fuso horário UTC-0.
    * **Aplicar aos idiomas:** idiomas aos quais a regra de merchandising será aplicada. Campo disponível apenas para lojas que utilizam [Configurações Multi-idioma (Beta)](/pt/tutorial/vtex-intelligent-search-configuracoes-multi-idioma-beta--2WahlTESLXIJ9XBdQMdTYO).
5. Clique em **Editor manual**. Para mais informações sobre cada editor, confira [Tipos de edição](/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/5tBSYXb9EIdePa0MWTnFd0#tipos-de-edicao).
6. Clique em `Próximo`.
7. Se necessário, altere as informações básicas já definidas sobre a nova regra de merchandising na seção [Informação Geral](#informacao-geral).
8. Defina as [Regras de ativação](#regras-de-ativacao), ou seja, o conjunto de condições que determinam quando a Regra de merchandising será aplicada.
9. Defina as [Regras de customização](#regras-de-customizacao), ou seja, o conjunto de condições para controlar o resultado das buscas que se encaixarem nas regras de ativação definidas no passo 8.
    Para aplicar o efeito de customização desejado, é necessário cadastrar uma ou mais condições nesta etapa. Para entender como funciona o cadastro de uma condição, leia [Condições de Regras de merchandising](/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3Dvava8LSVcFKeS2S6J7XW).
10. Clique em `Salvar`.

<div class="alert alert-info">
<p>Após salvar, as alterações de regras de merchandising levam em média dois minutos para serem atualizadas.</p>
</div>

## Exemplo

Considere o seguinte exemplo: você quer promover produtos da marca Beautyx durante a semana de Carnaval, ou seja, quando o cliente pesquisar por "sabonete" ou "shampoo", a busca precisa promover produtos da marca. Para isso, a configuração precisa ser feita da seguinte forma:

* **Nome**: Promoção Carnaval
* **Data de início**: selecionar o primeiro dia do Carnaval.
* **Data de término**: selecionar o último dia do Carnaval.
* **Regras de ativação:**
        * `Termo é sabonete`
        ou
        * `Termo é shampoo`
* **Regras de customização**:
    * **Promover**
        * `marca é beautyx`

## Campos do Editor manual

### Informação Geral

* **Nome**: nome da regra de merchandising. Exemplo: promover o produto A quando a pesquisa for Biscoito de chocolate.
* **Data de início**: agendamento da data a partir da qual a regra de merchandising será aplicada. A data segue o fuso horário UTC-0.
* **Data de término**: agendamento da data em que a regra de merchandising não será mais aplicada às buscas na loja. A data segue o fuso horário UTC-0.
* **Idiomas:** idiomas aos quais a regra de merchandising será aplicada.

### Regras de ativação

* **Ativação global**: se você ativar esta opção, a regra de merchandising vai estar sempre ativa e englobar todos os termos e filtros da pesquisa, sem necessidade de configurar condições para regras de ativação. Isso permite adicionar, remover, promover e despromover produtos de todas as buscas da loja.

    Por outro lado, se você optar por manter a ativação global desabilitada, será necessário cadastrar pelo menos uma condição para compor as regras de ativação. Para detalhes sobre o cadastro de uma condição, leia [Condições de Regras de merchandising](/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3Dvava8LSVcFKeS2S6J7XW).

* `Preencher a partir de uma URL`: adicione a URL da página de busca em que as regras de ativação serão aplicadas. A URL precisa incluir `map` e `query` para funcionar, respeitando o seguinte formato: `https://{accountName}.myvtex.com/busca/{termo}?map=ft&query={termo]`. É necessário substituir `{accountName}` pelo nome da conta VTEX e `{termo}` pelo termo de busca.
* `Adicionar condição`: ao criar uma condição, a regra de merchandising só se aplicará aos casos que cumprirem com a combinação de condições estabelecidas.  Para entender como criar condições, leia [Condições de Regras de merchandising](/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3Dvava8LSVcFKeS2S6J7XW).

### Regras de customização

* **Adicionar:** inclui as condições selecionadas no resultado, ou seja, adiciona produtos que não estariam no resultado de busca. A ordem dos produtos cadastrados não é levada em consideração no resultado da busca.

    Produtos adicionados também são colocados nas primeiras posições, contudo, possuem um peso menor do que o **Promover**. Portanto, caso tenha um produto sendo adicionado e outro promovido, primeiro apareceria o promovido e depois o adicionado.

* **Remover:** exclui as condições selecionadas do resultado, ou seja, remove produtos que estariam no resultado de busca.

  <div class="alert alert-info">
   <p><strong>Adicionar</strong> e <strong>Remover</strong> são compatíveis com outros tipos de ordenação que não são baseadas na relevância configurada. Ou seja, se você adicionar ou remover um produto através de uma regra de merchandising e o cliente da sua loja ordenar os resultados da busca por preço, por exemplo, os produtos serão ordenados por preço mas os produtos exibidos vão respeitar a regra de merchandising.</p>
  </div>

* **Promover:** oferece destaque às condições selecionadas no resultado. Isso concede maior relevância a um produto que já seria exibido no resultado de busca.

    A ordem das condições influencia a prioridade em que elas serão apresentadas. Além disso, um produto incluído neste campo só é promovido em um único resultado.

* **Despromover**: oculta as condições selecionadas no resultado. Isso permite despriorizar um produto que já seria exibido no resultado de busca.

  <div class="alert alert-info">
   <p><strong>Promover </strong>e <strong>Despromover </strong>funcionam somente quando o cliente da sua loja ordena os resultados da busca por relevância. Caso ele(a) ordene os resultados por preço, por exemplo, os produtos serão ordenados estritamente pelo preço e a regra de merchandising não será utilizada.</p>
  </div>

  <div class="alert alert-warning">
   <p>Não configure condições que afetem os mesmos produtos nas seções <strong>Promover</strong> e <strong>Despromover</strong>, pois são efeitos contrários. Essa configuração equivocada influencia negativamente no comportamento da funcionalidade e não apresenta os resultados desejados.</p>
  </div>
