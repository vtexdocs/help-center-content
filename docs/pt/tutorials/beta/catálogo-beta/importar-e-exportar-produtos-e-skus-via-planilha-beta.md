---
title: 'Importar e exportar produtos e SKUs via planilha (Beta)'
id: 5udKxWP1ZeBD7QB7Fy2BNl
status: PUBLISHED
createdAt: 2025-09-05T16:54:23.995Z
updatedAt: 2025-10-13T23:06:15.308Z
publishedAt: 2025-10-13T23:06:15.308Z
firstPublishedAt: 2025-09-05T18:41:30.755Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: importing-and-exporting-products-and-skus-using-a-spreadsheet-beta
legacySlug: importacao-e-exportacao-de-produtos-e-skus-via-planilha-beta
locale: pt
subcategoryId: 6XPsLadoT3moZ7eTduCg3c
---

> ℹ️ Essa funcionalidade está em fase Beta, o que significa que estamos trabalhando para aprimorá-la. Em caso de dúvidas, entre em contato com nosso [Suporte](/pt/support).

No Admin VTEX, você pode gerenciar a importação e a exportação de produtos e SKUs utilizando planilha, conforme apresentado nas seções:

- [Importar produtos e SKUs via planilha](#importar-produtos-e-skus-via-planilha)
- [Exportar produtos e SKUs via planilha](#exportar-produtos-e-skus-via-planilha)
- [Acompanhar janela do processo de exportação](#acompanhar-janela-do-processo-de-exportacao)
- [Ver campos da planilha de produtos e SKUs](#ver-campos-da-planilha-de-produtos-e-skus)

> ℹ️ Para saber como gerenciar manualmente pelo Admin VTEX os seus produtos e SKUs, veja os artigos [Adicionar ou editar produto](/pt/tutorial/adicionar-ou-editar-produto--29IkdEu6GofCFlltsZh2H8) e [Adicionar ou editar SKU](/pt/tutorial/adicionar-ou-editar-sku--4ryZ6J45kwn3jDiQBxGiiN). Para informações sobre [integrações de backend com ERP](/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/7euXDZR5CCnVFSrXyczIhu), confira o guia [Back office integration guide (ERP/PIM/WMS)](https://developers.vtex.com/docs/guides/erp-integration-guide).

## Importar produtos e SKUs via planilha

Para importações de produtos e SKUs por planilha, realize os seguintes passos:

1. No Admin VTEX, acesse **Catálogo > Produtos e SKUs**, ou digite [Produtos e SKUs](/pt/tutorial/produtos-e-skus--2ig7TmROlirWirZjFWZ3By) na barra de busca no topo da página.
2. No topo da página, clique em `Importar`.
3. Clique em `Produtos e SKUs`.
4. Na janela aberta, clique em **Baixe o modelo de planilha de importação aqui** para obter o arquivo.
5. Preencha os dados da planilha, conforme orientado na seção [Ver campos da planilha de produtos e SKUs](#ver-campos-da-planilha-de-produtos-e-skus).
6. Adicione a planilha com extensão `.xls` ou `.xlsx`. Você pode arrastar o arquivo e soltá-lo sobre a área indicada, ou clicar sobre a janela e selecionar o arquivo localmente.
7. Clique em `Importar`.

  > ❗ O tempo da operação vai depender do volume de informação sendo processada. A importação não será afetada, caso você saia da página.

Enquanto a operação estiver em andamento, aparecerá a mensagem de que o arquivo está sendo processado. Após a conclusão da operação, você verá a mensagem _"Produtos e SKUs importados com sucesso"_, e receberá um email de confirmação.

## Exportar produtos e SKUs via planilha

Para exportar um arquivo `.xlsx` com informações sobre o seu sortimento de produtos e SKUs, realize os seguintes passos:

> ℹ️ As informações exportadas correspondem aos campos apresentados na seção [Ver campos da planilha de produtos e SKUs](#ver-campos-da-planilha-de-produtos-e-skus).

1. No Admin VTEX, acesse **Catálogo > Produtos e SKUs**, ou digite [Produtos e SKUs](/pt/tutorial/produtos-e-skus--2ig7TmROlirWirZjFWZ3By) na barra de busca no topo da página.
2. (Opcional) Caso queira exportar uma seleção de produtos e SKUs, [busque](/pt/tutorial/produtos-e-skus--2ig7TmROlirWirZjFWZ3By#buscar-produtos) ou [filtre](/pt/tutorial/produtos-e-skus--2ig7TmROlirWirZjFWZ3By#filtrar-produtos) os itens desejados. Este passo não é necessário para exportar todos os produtos e/ou SKUs.
3. No topo da página, clique em `Exportar`.
4. Clique em `Produtos e SKUs`.
5. No modal de **Exportação**, selecione o ícone caixa correspondente aos **Campos de produto** e/ou **Campos de SKU**, conforme desejado. Os campos obrigatórios não podem ser desmarcados.

  > ⚠️ Somente planilhas que foram exportadas com todos os campos podem ser importadas futuramente.

6. Clique em `Exportar`.

Enquanto a operação estiver em andamento, aparecerá a mensagem de que o arquivo está sendo processado. Mesmo que você saia da página, a operação não será interrompida. Você pode acompanhar o andamento da exportação pela janela que surge na página, como será apresentado na próxima seção.

Após a finalização da exportação, você receberá um email com um link para fazer o download do arquivo. O prazo para o download pelo link é de 24 horas, após este período o link expira. Também é possível baixar o arquivo pela janela que surgiu na página.

## Acompanhar janela do processo de exportação

Enquanto a exportação estiver sendo processada, a página [Produtos e SKUs](/pt/tutorial/produtos-e-skus--2ig7TmROlirWirZjFWZ3By) apresentará uma janela na parte inferior como a imagem a seguir:

![export-pt-loading](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/catálogo-beta/importar-e-exportar-produtos-e-skus-via-planilha-beta_1.png)

* **Exportações 1:** informa o número de operações de exportação sendo realizadas, neste caso apenas uma.
* **Ícone de carregando:** indica que a operação de exportação está em andamento.
* **Produtos e SKUs:** identifica o tipo da exportação. Outras operações que existem são exportações de [especificações de produtos](/pt/tutorial/importar-e-exportar-especificacoes-de-produtos-via-planilha-beta--jQcmbocCb7kjHOr1JSWIL), [especificações de SKUs](/pt/tutorial/importar-e-exportar-especificacoes-de-skus-via-planilha-beta--5EAioeC33wHpIxKHaGQzbV) e [imagens de produtos e SKUs](/pt/tutorial/importar-e-exportar-imagens-de-produtos-e-skus-via-planilha-beta--6zBisMdxDYeBF49LPzvfqt).
* **Data e hora:** apresentam o horário do início da exportação, no formato `DD-MM-AAAA - hh:mm`.
* **Número em tag azul:** informa a quantidade de itens sendo exportados.
* **(Opcional) Ícone seta para baixo** <i class="fas fa-angle-down" aria-hidden="true"></i>: aparece quando há mais de uma exportação em andamento e, quando clicado, minimiza a visualização da janela, de forma que ela pode voltar a se expandir.
* **Ícone fechar** <i class="fas fa-times" aria-hidden="true"></i>: quando clicado, fecha a visualização da janela, mas não interfere na exportação em andamento.
* **Ícone cancelar** <i class="far fa-times-circle" aria-hidden="true"></i>: quando clicado, cancela a exportação.

Após a conclusão da operação, a janela apresentará as seguintes mudanças:

![export-pt-done](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/catálogo-beta/importar-e-exportar-produtos-e-skus-via-planilha-beta_2.png)

* **Ícone verde:** indica que a exportação foi finalizada.
* **Ícone fechar** <i class="fas fa-times" aria-hidden="true"></i>: quando clicado, fecha a visualização da janela, sem a opção de voltar a expandi-la.
* **Ícone para download** <i class="fas fa-download" aria-hidden="true"></i>: quando clicado, baixa o arquivo `.xlsx` no dispositivo.

## Ver campos da planilha de produtos e SKUs

A tabela a seguir apresenta a descrição e o exemplo de preenchimento dos campos da planilha de importação de produtos e SKUs. Campos obrigatórios estão marcados com um asterisco (*).

| Campo | Descrição | Exemplo |
| :--- | :--- | :--- |
| ID Produto | Número único identificador do produto. Caso esse campo já esteja preenchido, não é possível alterá-lo. Para adicionar um novo produto, deixe o campo vazio. | 310117603 |
| Nome Produto* | Nome do produto apresentado para os clientes na experiência de navegação, podendo ter até 150 caracteres. Por questões de [SEO](/pt/tutorial/melhorando-o-seo-das-paginas-de-lista-de-produtos--UrQtlKAMuSaLBP5wG9ftG), recomendamos:<ul><li>✅ Usar palavras simples</li><li>❌ Evitar outros idiomas</li><li>❌ Evitar escrita complexa</li></ul> | Corebiz camiseta |
| Produto ativo | Informa se o [status do produto](/pt/tutorial/produtos-e-skus--2ig7TmROlirWirZjFWZ3By#filtrar-por-status) será ativo ou inativo. Este campo não editável pela planilha, deve ser deixado vazio. | |
| Descrição | Texto com informações gerais sobre o produto. Este conteúdo é apresentado aos clientes na vitrine da loja, portanto recomendamos criar um resumo de fácil entendimento. | O modelo tem gola redonda e as mangas são curtas. |
| Descrição adicional | Conteúdo adicional do produto, como informações resumidas. Recomendamos não ultrapassar 150 caracteres, de forma que os mecanismos de busca mostrem o texto completo nas páginas de resultado. | Material 70% reciclado |
| ID Marca* | Código numérico que identifica a [marca](/pt/tutorial/o-que-e-uma-marca--QU07yhHoaWcEYseEucOQW) do produto. Esta informação pode ser encontrada no Admin VTEX, em **Catálogo > Marcas**, ou usando o endpoint [Get brand list](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog_system/pvt/brand/list). | 2000003 |
| Marca | Nome da [marca](/pt/tutorial/o-que-e-uma-marca--QU07yhHoaWcEYseEucOQW) do produto. Uma vez preenchido, este campo não pode ser editado. | AOC |
| ID Departamento | Código numérico que identifica a categoria de maior nível hierárquico do produto. Este campo não é editável pela planilha. Em caso de um novo produto, deixe o campo vazio. | 1000014 |
| Departamento | Nome da categoria de maior nível hierárquico do produto. | Roupas |
| ID Categoria* | Número único identificador da categoria de menor nível hierárquico do produto.  Essa informação pode ser encontrada no Admin VTEX, em **Catálogo > Categorias**, ou usando o endpoint [Get category tree](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog_system/pub/category/tree/-categoryLevels-). | 1000014 |
| Categoria | Nome relacionado à categoria de menor nível hierárquico do produto. É possível mover o produto de uma categoria para outra. | Blusas |
| Políticas comerciais | Número único identificador da [política comercial](/pt/tutorial/criar-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE). Essa informação pode ser encontrada no Admin VTEX, em **Configurações de loja > Políticas comerciais**. Para múltiplas políticas comerciais, separe os números por vírgula sem usar espaço. | 1,2,7 |
| ID Categoria global | Código identificador da [categoria global do produto](/pt/tutorial/configurando-a-categoria-global--tutorials_188), ou seja, a taxonomia criada pelo Google para o [Merchant Center](https://support.google.com/merchants/answer/6324436?hl=pt-BR), que fica pré-definida como uma árvore única na plataforma VTEX. Este campo é importante para questões de [SEO](/pt/tutorial/melhorando-o-seo-das-paginas-de-lista-de-produtos--UrQtlKAMuSaLBP5wG9ftG). | 166 |
| Categoria global | Nome da [categoria global](/pt/tutorial/configurando-a-categoria-global--tutorials_188). | Vestuário e acessórios |
| Título da página | Nome escolhido para aparecer tanto na página de detalhes do produto (PDP) quanto na aba do navegador. Este campo é especialmente importante para SEO. O limite são 150 caracteres. | Corebiz camiseta azul gola redonda |
| Meta descrição | Breve descrição do produto, preferencialmente usando menos de 160 caracteres. Isso permite que os mecanismos de busca possam apresentar a descrição de forma correta nas páginas de resultados. | Corebiz camiseta azul gola redonda em poliéster e lycra feita com 70% de material reciclado |
| Mostrar no site* | Se você deseja que o produto esteja visível na vitrine, preencha `sim`. Se prefere que ele fique oculto, preencha com `não`. | sim |
| Mostrar quando estiver fora de estoque* | Se deseja que o produto esgotado apareça na vitrine, preencha com `sim`. Isso permite usar a configuração [Avise-me](/pt/tutorial/configurar-a-opcao-avise-me--2VqVifQuf6Co2KG048Yu6e) para que o cliente informe seu email e seja avisado quando o produto estiver disponível. Se prefere que o produto esgotado se torne oculto na vitrine, preencha com `não`. | não |
| Data de lançamento | Data e hora na qual o produto será disponibilizado para venda. Este campo auxilia a ordenação de resultados de busca do site, influencia a criação de [coleções automáticas](/pt/tutorial/creating-collections-beta--yJBHqNMViOAnnnq4fyOye) e determina a data de [indexação](/pt/tutorial/entendendo-o-funcionamento-da-indexacao--tutorials_256) do produto. O formato aceito é `AAAA-MM-DD hh:mm:ss`. | 2025-11-25 10:30:00 |
| Palavras substitutas | Sinônimos do nome do produto, que permitem buscas mais abrangentes. O limite é de 8.000 caracteres, incluindo caracteres especiais. Para adicionar diversas palavras, separe-as por vírgula sem espaço. | camisa,blusa |
| Código de referência Produto | Código de referência único do produto, utilizado apenas internamente pela loja. Para preencher este campo, use uma combinação única de letras e/ou números. | 68ce4_azul |
| Código fiscal | Sequência numérica que identifica o produto. | 84509010 |
| ID SKU | Código numérico único que identifica o SKU. Caso esse campo já esteja preenchido, não é possível alterá-lo. Para adicionar um novo SKU, deixe o campo vazio. | 310119261 |
| Nome SKU* | Nome do SKU, ou seja, que identifica a variação do produto. | M | 
| Ativar SKU se possível* | Se deseja a ativação automática do SKU após a checagem dos [requisitos de disponibilidade](/pt/faq/por-que-o-produto-nao-aparece-no-site--frequentlyAskedQuestions_382), preencha com `sim`. Se não deseja que ele seja ativado, preencha com `não`. | sim |
| SKU Ativo | Este campo define se o SKU está ativo (`sim`) ou inativo (`não`). O campo não permite alteração e é utilizado somente para consulta.  | não |
| Kit | Este campo define se o SKU é um [kit](/pt/tutorial/o-que-e-um-kit--5ov5s3eHM4AqAAgqWwoc28). A ação de transformar um SKU em kit é irreversível. Caso esteja criando um novo SKU, deixe o campo vazio. | |
| Código de referência SKU | Código de referência único do SKU, criado para auxiliar o lojista na gestão do catálogo. Após ser criado, não é possível editá-lo pela planilha.Este campo é obrigatório, a menos que o campo **EAN/UPC** tenha sido preenchido. | |
| EAN/UPC | O EAN (European Article Number) e o UPC (Universal Product Code) são códigos de identificação internacionais e correspondem ao código de barras de um item. Cada SKU só pode ser associado a um deles e é possível diferenciá-los pelo número de caracteres alfanuméricos, que são 13 para o EAN e 12 para o UPC.Este campo é obrigatório, a menos que o campo **Código de referência SKU** tenha sido preenchido. | 8456971345604 |
| Código do fabricante | Código fornecido pelo fabricante para identificar o SKU. Caso algum SKU tenha um código específico, esse campo deve ser preenchido. | 7154-azul |
| Peso do pacote* | Valor absoluto de peso do pacote. | 0,8 |
| Largura do pacote* | Valor absoluto da largura do pacote. | 12 |
| Altura do pacote* | Valor absoluto da altura do pacote. | 5 |
| Comprimento do pacote* | Valor absoluto do comprimento do pacote. | 25 |
| Peso real | Valor absoluto do peso do produto, desconsiderando embalagens. | 0,6 |
| Largura real | Valor absoluto da largura do produto, desconsiderando embalagens. | 0,1 |
| Altura real | Valor absoluto da altura do produto, desconsiderando embalagens. | 1,2 |
| Comprimento real | Valor absoluto do comprimento do produto, desconsiderando embalagens. | 0,9 |
| Peso cúbico | Este campo não é mais utilizado pelo sistema e deve ser deixado vazio. | |
| Unidade de medida* | Identificação da unidade de medida considerada para a contagem de itens em estoque. Em geral, deve ser preenchido com `un`, referente à unidade. Utilize um valor diferente apenas se for necessário converter a unidade de medida para a venda. Os valores permitidos são:<ul><li>un: unidade</li><li>kg: quilograma</li><li>g: grama</li><li>mg: miligrama</li><li>m: metro</li><li>m²: metro quadrado</li><li>m³: metro cúbico</li><li>cm: centímetro</li><li>cm²: centímetro quadrado</li><li>cm³: centímetro cúbico</li><li>mm: milímetro</li><li>mm²: milímetro quadrado</li><li>mm³: milímetro cúbico</li><li>oz: onça</li><li>lb: libra</li><li>ft: pé</li><li>ft²: pé quadrado</li><li>ft³: pé cúbico</li><li>in: polegada</li><li>in²: polegada quadrada</li><li>in³: polegada cúbica</li></ul> | un |
| Multiplicador de unidade* | Valor numérico pelo qual o SKU será multiplicado para definir a quantidade no carrinho. Por exemplo, o multiplicador 5 significa que cada SKU representa 5 volumes no carrinho, permitindo somente compras de múltiplos de 5, como 10 ou 15 volumes. Valores fracionados podem ser separados tanto por ponto quanto por vírgula. Por exemplo, metade de um quilograma pode ser 0.5 ou 0,5. | 1 |
| Condição comercial | Código numérico único identificador da [condição comercial](/pt/tutorial/como-cadastrar-condicao-comercial--tutorials_445), que define quais promoções ou [condições de pagamento](/pt/tutorial/diferenca-entre-meios-de-pagamento-e-condicoes-de-pagamento--3azJenhGFyUy2gsocms42Q) devem ser válidas para o SKU. | Padrão |
| Valor fidelidade | Crédito que o cliente recebe ao concluir uma compra de 1 unidade de determinado SKU. Por exemplo, preenchendo este campo com o valor R$1,00, o cliente que adquirir este SKU vai obter um crédito de R$1,00 na loja para compras futuras. Esse campo deve ser preenchido com valores decimais da moeda padrão da loja. | 49,90 |
| Data de pré-venda | Data de pré-venda atribuída ao SKU, ou seja, a data prevista para a chegada do item nas lojas e sua disponibilização para venda. Para realizar essa configuração, é preciso considerar tanto a data de lançamento do item quanto o [cálculo do envio](/pt/tutorial/como-funciona-o-calculo-de-envio--tutorials_116) do item para os clientes. O formato aceito é `AAAA-MM-DD hh:mm:ss`. | 2025-10-30 10:30:00 |
| Anexos | Nome do [anexo](/pt/tutorial/o-que-e-um-anexo--aGICk0RVbqKg6GYmQcWUm) que pode ser selecionado pelo cliente como customização do SKU. | Customizar nome |
| Acessórios | Itens sugeridos como opções complementares para a venda. Para adicionar um item [acessório](/pt/tutorial/configurando-produto-similar-sugestoes-acessorios-e-genericos--tutorials_280), inclua o ID do SKU. Se quiser incluir diversos SKUs, separe-os usando vírgula sem espaço. | 320221270 |
| Sugestões | Itens apresentados como sugestões de compra. Para adicionar um item de [sugestão](/pt/tutorial/configurando-produto-similar-sugestoes-acessorios-e-genericos--tutorials_280), inclua o ID do SKU. Se quiser incluir diversos SKUs, separe-os usando vírgula sem espaço. | 320221279,320221280 |
| Produtos similares | Itens ofertados como uma alternativa de compra ou simplesmente algo similar. Para adicionar um item [similar](/pt/tutorial/configurando-produto-similar-sugestoes-acessorios-e-genericos--tutorials_280), inclua o ID do SKU. Se quiser incluir diversos SKUs, separe-os usando vírgula sem espaço. | 320221284 |
| Mostrar junto | Itens sugeridos para serem adquiridos conjuntamente. Para adicionar um item para [mostrar junto](/pt/tutorial/configurando-produto-similar-sugestoes-acessorios-e-genericos--tutorials_280), inclua o ID do SKU. Se quiser incluir diversos SKUs, separe-os usando vírgula sem espaço. | 320221293,320221294 |

## Saiba mais

* [Importar e exportar especificações de produtos via planilha (Beta)](/pt/tutorial/importar-e-exportar-especificacoes-de-produtos-via-planilha-beta--jQcmbocCb7kjHOr1JSWIL)
* [Importar e exportar especificações de SKUs via planilha (Beta)](/pt/tutorial/importar-e-exportar-especificacoes-de-skus-via-planilha-beta--5EAioeC33wHpIxKHaGQzbV)
* [Importar e exportar imagens de produtos e SKUs via planilha (Beta)](/pt/tutorial/importar-e-exportar-imagens-de-produtos-e-skus-via-planilha-beta--6zBisMdxDYeBF49LPzvfqt)
