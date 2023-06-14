---
title: Criar Regra de merchandising - Editor visual (Beta)
id: 6xteumx9MsDt0uEppbChu3
status: PUBLISHED
createdAt: 2023-04-03T21:05:14.304Z
updatedAt: 2023-04-11T22:34:40.303Z
publishedAt: 2023-04-11T22:34:40.303Z
firstPublishedAt: 2023-04-03T21:30:34.359Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slug: criar-regra-de-merchandising-editor-visual-beta
legacySlug: criar-regra-de-merchandising-editor-visual-beta
subcategory: 23WdCYqmn2V2Z7SDlc14DF
---

<div class="alert alert-info">
  <p>Essa funcionalidade está na fase Beta fechado, o que significa que somente clientes selecionados têm acesso a ela no momento. Caso tenha interesse em implementá-la futuramente, entre em contato com <a href="https://support.vtex.com/hc/pt-br/requests">nosso Suporte</a>.</p>
</div>

O Editor visual (Beta) de [regras de merchandising](https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/5tBSYXb9EIdePa0MWTnFd0) do VTEX Intelligent Search permite realizar as ações ilustradas na imagem a seguir:

![visual-merch-rules-PT](https://images.ctfassets.net/alneenqid6w5/5Pah0D3Y9CfUyczqFR99bd/005f5072313e3587807cf0b334ce6177/visual-merch-rules-PT.png)

<ol class="mv7" type="I">
    <li class="t-body c-on-base mb5 lh-copy">Editar nome da regra de merchandising.</li>
    <li class="t-body c-on-base mb5 lh-copy">Definir termos de busca para aplicação da regra de merchandising.</li>
    <li class="t-body c-on-base mb5 lh-copy">Definir <a href="#adicionar-filtros-e-condicoes" rel="noopener noreferrer"
            target="_self"
            class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">filtros</a>
        para aplicação da regra de merchandising.</li>
    <li class="t-body c-on-base mb5 lh-copy">Definir quantidade de itens por linha.</li>
    <li class="t-body c-on-base mb5 lh-copy">Definir quantidade de itens por página.</li>
    <li class="t-body c-on-base mb5 lh-copy">Navegar entre páginas de resultados de busca.</li>
    <li class="t-body c-on-base mb5 lh-copy">Arrastar produto para a posição desejada nos resultados de busca. É
        possível apenas arrastar produtos que foram fixados (ação IX).</li>
    <li class="t-body c-on-base mb5 lh-copy">Ocultar produto nos resultados de busca. Esta ação não pode ser revertida,
        por isso, para que um produto volte a aparecer nos resultados, é necessário criar outra regra de merchandising.
    </li>
    <li class="t-body c-on-base mb5 lh-copy">Fixar produto nas primeiras posições dos resultados de busca. Ao fixar o
        produto A e, em seguida, fixar o produto B, eles aparecerão nesta ordem nos resultados de busca, antes dos
        demais.</li>
    <li class="t-body c-on-base mb5 lh-copy">Ver detalhes do produto.</li>
    <li class="t-body c-on-base mb5 lh-copy">Cancelar edição.</li>
    <li class="t-body c-on-base mb5 lh-copy">Salvar configurações.</li>
</ol>

## Configurar regra de merchandising

Para configurar uma regra de merchandising no Editor visual, siga os passos abaixo.

1. No Admin VTEX, acesse **Storefront**, ou digite **Storefront** na barra de busca.
2. Em **Intelligent Search**, clique em **Regras de merchandising**.
3. Clique no botão  `Novo`.
4. Preencha os seguintes campos:
    * **Nome**: nome da regra de merchandising. Exemplo: promover o produto A quando a pesquisa for Biscoito de chocolate.
    * **Data de início (opcional)**: agendamento da data a partir da qual a regra de merchandising será aplicada. A data segue o fuso horário UTC-0.
    * **Data de término (opcional)**: agendamento da data em que a regra de merchandising não será mais aplicada às buscas na loja. A data segue o fuso horário UTC-0.
    * **Idiomas:** idiomas aos quais a regra de merchandising será aplicada.
5. Clique em **Editor visual**. Para mais informações sobre cada editor, confira [Tipos de edição](https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/5tBSYXb9EIdePa0MWTnFd0#tipos-de-edicao).
6. Clique em `Próximo`.
7. Para definir um termo de busca que determina a aplicação da regra de merchandising, digite o termo na barra de busca (item II na imagem anterior). É necessário definir ao menos um termo ou um filtro (passo 8) para a aplicação da regra.
8. Para criar um filtro para aplicação da regra de merchandising (item III na imagem anterior), siga o passo a passo descrito na seção [Adicionar filtros e condições](#adicionar-filtros-e-condicoes). É necessário definir ao menos um filtro ou um termo (passo 7) para a aplicação da regra.
9. Se desejar, realize as demais ações opcionais para customizar os resultados de busca (itens IV, V, VII, VIII, IX na imagem anterior).
10. Clique em `Salvar`.

<div class="alert alert-info">
  <p>Após salvar, as alterações de regras de merchandising levam em média dois minutos para serem atualizadas.</p>
</div>

### Adicionar filtros e condições

O filtro é um atributo selecionável pré-definido que restringe os resultados da busca, por exemplo, possibilitando filtrar por todos os produtos de uma categoria ou marca, entre outras condições. Você pode adicionar uma ou mais condições a um filtro, conforme ilustrado a seguir.

![filtros-merchrules-pt](https://images.ctfassets.net/alneenqid6w5/5e2KtHyjaAmvBqRDaJe8EK/f8e0a4b955d517db17268eb1bdff6aa4/image2.gif)

Para adicionar uma condição no Editor visual, siga o passo a passo abaixo. 

1. Clique em `Filtro`.
2. Clique em `Adicionar condição`.
3. Preencha as condições desejadas. As opções disponíveis estão descritas em [Condições de Regras de merchandising](https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3Dvava8LSVcFKeS2S6J7XW).
4. Clique em `Salvar`.

As condições definidas podem funcionar de forma conjunta (`e`) ou de forma alternativa (`ou`).

No menu <i class="far fa-ellipsis-v"></i> de cada condição existente, é possível `Duplicar` ou `Excluir` a condição. Para desativar todas as condições criadas, clique em `Limpar filtros`.

