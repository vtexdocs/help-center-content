---
title: 'Importar e exportar imagens de produtos e SKUs via planilha (Beta)'
id: 6zBisMdxDYeBF49LPzvfqt
status: PUBLISHED
createdAt: 2025-09-26T15:59:03.761Z
updatedAt: 2025-10-13T22:40:44.722Z
publishedAt: 2025-10-13T22:40:44.722Z
firstPublishedAt: 2025-09-26T16:15:52.581Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: importing-and-exporting-product-and-sku-images-using-a-spreadsheet-beta
legacySlug: importacao-e-exportacao-de-imagens-de-produtos-e-skus-via-planilha-beta
locale: pt
subcategoryId: 6XPsLadoT3moZ7eTduCg3c
---

> ℹ️ Essa funcionalidade está em fase Beta, o que significa que estamos trabalhando para aprimorá-la. Em caso de dúvidas, entre em contato com nosso [Suporte](https://supporticket.vtex.com/support).

No Admin VTEX, você pode gerenciar a importação e a exportação de informações de imagens utilizando planilha, conforme apresentado nas seções:

* [Importar imagens de produtos e SKUs via planilha](#importar-imagens-de-produtos-e-skus-via-planilha)  
* [Exportar imagens de produtos e SKUs via planilha](#exportar-imagens-de-produtos-e-skus-via-planilha)  
* [Ver campos da planilha de imagens de produtos e SKUs](#ver-campos-da-planilha-de-imagens-de-produtos-e-skus)

## Importar imagens de produtos e SKUs via planilha

Para importações de imagens de produtos e SKUs por planilha, realize os seguintes passos:

1. No Admin VTEX, acesse **Catálogo > Produtos e SKUs**, ou digite [Produtos e SKUs](/pt/tutorial/produtos-e-skus--2ig7TmROlirWirZjFWZ3By) na barra de busca no topo da página.
2. No topo da página, clique em `Importar`.
3. Clique em `Imagens`.
4. Na janela aberta, clique em **Baixe o modelo de planilha de importação aqui** para obter o arquivo.
5. Preencha os dados da planilha, conforme orientado na seção [Ver campos da planilha de imagens de produtos e SKUs](#ver-campos-da-planilha-de-imagens-de-produtos-e-skus).
6. Adicione a planilha com extensão `.xls` ou `.xlsx`. Você pode arrastar o arquivo e soltá-lo sobre a área indicada, ou clicar sobre a janela e selecionar o arquivo localmente.
7. Clique em `Importar`.

Enquanto a importação estiver em andamento, aparecerá a mensagem de que o arquivo está sendo processado. A operação não será afetada, caso você saia da página. Após a conclusão da operação, você receberá um email de confirmação.

> ⚠️ Os produtos com imagens importadas com sucesso são automaticamente colocados na fila de [indexação](/pt/tutorial/entendendo-o-funcionamento-da-indexacao--tutorials_256). Caso isso não aconteça, veja o artigo [Por que o produto não aparece no site?](/pt/faq/por-que-o-produto-nao-aparece-no-site--frequentlyAskedQuestions_382).

## Exportar imagens de produtos e SKUs via planilha

Para exportar um arquivo `.xlsx` com as imagens do seu catálogo, realize os seguintes passos:

> ℹ️ As informações exportadas correspondem aos campos apresentados na seção [Ver campos da planilha de imagens de produtos e SKUs](#ver-campos-da-planilha-de-imagens-de-produtos-e-skus).

1. No Admin VTEX, acesse **Catálogo > Produtos e SKUs**, ou digite [Produtos e SKUs](/pt/tutorial/produtos-e-skus--2ig7TmROlirWirZjFWZ3By) na barra de busca no topo da página.
2. (Opcional) Caso queira exportar as imagens de determinados produtos e SKUs, [busque](/pt/tutorial/produtos-e-skus--2ig7TmROlirWirZjFWZ3By#buscar-produtos) ou [filtre](/pt/tutorial/produtos-e-skus--2ig7TmROlirWirZjFWZ3By#filtrar-produtos) os itens desejados. Este passo não é necessário para exportar as imagens de todos os itens do seu catálogo.
3. No topo da página, clique em `Exportar`. 
4. Clique em `Imagens`.

Enquanto a exportação estiver em andamento, aparecerá a mensagem de que o arquivo está sendo processado. Mesmo que você saia da página, a operação não será afetada. Você pode [acompanhar o andamento da exportação pela janela](/pt/tutorial/importar-e-exportar-produtos-e-skus-via-planilha-beta--5udKxWP1ZeBD7QB7Fy2BNl#acompanhar-janela-do-processo-de-exportacao) que surge na página. 

Após a finalização da exportação de imagens de produtos e SKUs, você receberá um email com um link para fazer o download do arquivo. O prazo para o download pelo link é de 24 horas, após este período o link expira. Também é possível baixar o arquivo pela janela que surgiu na página.

## Ver campos da planilha de imagens de produtos e SKUs

A tabela a seguir apresenta a descrição e o exemplo de preenchimento dos campos da planilha de importação de imagens do seu catálogo. Campos obrigatórios estão marcados com um asterisco (*).

> ℹ️ Para importar uma nova imagem, os únicos campos obrigatórios são **ID SKU** e **URL de importação Imagem**. Saiba quais são as [Boas práticas para o uso de imagens no Catálogo](/pt/tutorial/boas-praticas-para-o-uso-de-imagens-no-catalogo--738K2yfq5U86kUI2k4AQIk).

| Campo | Descrição | Exemplo |
| :--- | :--- | :--- |
| ID Produto | Código numérico único identificador do produto. | 310117603 |
| Nome Produto | Nome do produto apresentado para os clientes na experiência de navegação. | Corebiz camiseta |
| ID SKU* | Código numérico único que identifica o SKU. | 310119261 |
| Nome SKU | Nome do SKU, ou seja, que identifica a variação do produto. | M |
| Código de referência SKU | Código de referência único do SKU, utilizado apenas internamente pela loja. Utilize uma combinação única de letras e/ou números. | camisaVerao26 |
| ID Imagem | Código numérico que identifica a imagem do SKU. Para a importação de uma nova imagem, deixe o campo em branco, e para uma atualização de imagem existente mantenha o valor. | 167002 |
| Nome Imagem | Nome da imagem, utilizado apenas internamente na loja. Este campo não permite o uso de caracteres especiais, acentos ou espaços em branco. | lateral_camiseta_azul |
| Posição Imagem | Número da posição de exibição da imagem no site, onde `0` corresponde à primeira posição, `1` à segunda posição, e assim por diante. | 0 |
| Label Imagem | Nome que identifica a "etiqueta" da imagem, utilizado internamente pelo lojista para referenciar valores comuns às imagens. | Vista lateral |
| Texto Imagem | Texto que será associado à imagem, usado internamente na loja. Não utilize caracteres especiais ou acentos, e não repita valores dos campos **Nome Imagem** e **Label Imagem**. | lateral camiseta verao26 |
| Caminho Imagem | Nome que compõem parte da URL da imagem que está hospedada na plataforma VTEX. Ele aparece após a última barra `/`, incluindo a extensão do arquivo. Caso o campo não esteja preenchido, deixe-o em branco. | camiseta_azul_gola_redonda.jpg |
| URL de importação Imagem | Imagem a ser associada ao SKU. Para importar uma nova imagem, este campo é obrigatório e deve ser [preenchido com a URL](/pt/tutorial/como-definir-a-url-de-um-produto--frequentlyAskedQuestions_368) do arquivo hospedado. Ela deve começar com o identificador de protocolo HTTP (`http://`) e terminar com uma das seguintes extensões:<ul><li>jpg</li><li>png</li><li>gif</li><li>ico</li><li>svg</li><li>webp</li></ul>Para atualizar uma imagem existente, deixe o campo em branco. Caso contrário, a imagem será criada novamente, gerando uma duplicação. | `http://arquivos.com/ids/image/camiseta_azul_gola_redonda.jpg` |

## Saiba mais

* [Importar e exportar produtos e SKUs via planilha (Beta)](/pt/tutorial/importar-e-exportar-produtos-e-skus-via-planilha-beta--5udKxWP1ZeBD7QB7Fy2BNl)
* [Importar e exportar especificações de produtos via planilha (Beta)](/pt/tutorial/importar-e-exportar-especificacoes-de-produtos-via-planilha-beta--jQcmbocCb7kjHOr1JSWIL)
* [Importar e exportar especificações de SKUs via planilha (Beta)](/pt/tutorial/importar-e-exportar-especificacoes-de-skus-via-planilha-beta--5EAioeC33wHpIxKHaGQzbV)
