---
title: 'Erros de integração de estoque com a Amazon'
id: 3t05cXK2vDbKCA6rifMMWj
status: PUBLISHED
createdAt: 2021-10-28T13:54:04.797Z
updatedAt: 2023-03-29T14:38:55.490Z
publishedAt: 2023-03-29T14:38:55.490Z
firstPublishedAt: 2021-10-28T18:41:30.731Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slug: erros-de-integracao-de-estoque-com-a-amazon
locale: pt
legacySlug: erros-de-integracao-de-estoque-com-a-amazon
subcategory: 7lxg0kyL3TYIsrlSQlf1zP
---

Nos marketplaces para os quais a VTEX desenvolveu um [conector nativo](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-conector-nativo-vtex), por vezes ocorrem erros de integração de estoque. Este artigo reúne os erros mais comuns de integração de estoque com a Amazon e orienta sobre como solucioná-los.

Existem mensagens que identificam quais são os erros. Você pode visualizá-las no Admin VTEX, em **MARKETPLACE > Conexões > Estoque**, clicando sobre a mensagem de processo com erro.

Após solucionar um erro, é necessário reprocessar manualmente a integração do estoque daquele SKU. Isso é feito no mesmo local onde o erro é visualizado, clicando em **Ações > Reprocessar**.

Seguem abaixo as mensagens mais comuns de erros de integração de estoque com a Amazon:

#### Mensagem de erro

`Invalid seller id`

**Mensagem traduzida:** ID do seller inválida

Este erro significa que o código de identificação do seller (seller ID) utilizado na configuração da integração com a Amazon foi considerado inválido. É necessário entrar em contato com a Amazon pelo [Amazon Seller Central](https://sellercentral.amazon.com.br/) para confirmar o código correto. Feito isso, corrija as configurações do conector da integração. No seu Admin VTEX, vá em **MARKETPLACE > Conexões > Configurações**. No _card_ da Amazon, clique sobre o ícone <i class="fas fa-cog"></i> engrenagem, e escolha a opção **Editar configuração**. Preencha o campo _Amazon Seller Id_ com o código correto e clique em **Salvar configuração**.

____

#### Mensagem de erro

`This SKU is not in the Amazon catalog. If you are receiving this message after submitting a multi-marketplace inventory file and the designated marketplace for this error is different than the marketplace in which you submitted your file, this error is an indication that the Detail page for this item does not exist in the designated marketplace. Amazon is attempting to create the Detail Page for this item on your behalf. If successful, your listing will be created in the designated marketplace within 48 hours.`

**Mensagem traduzida:** Este SKU não está no catálogo da Amazon. Se você carregou um arquivo de inventário para vários marketplaces e agora está recebendo esta mensagem em um marketplace diferente daquele em que você carregou o arquivo, este erro indica que a página de detalhes desse item não existe no marketplace em que a mensagem está sendo exibida. A Amazon está tentando criar a página de detalhes desse item em seu nome. Se tiver êxito, seu anúncio estará disponível no marketplace designado em até 48 horas.

Esta mensagem indica uma falha ao exportar o SKU para o catálogo da Amazon, provavelmente porque a planilha de mapeamento não foi preenchida corretamente para aquele SKU. Isso impossibilita a integração de estoque com a Amazon. Primeiro é necessário exportar novamente a categoria à qual pertence o SKU, o que pode ser feito consultando [Envio de produtos para a Amazon](https://help.vtex.com/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD). Em seguida, [atualize seu estoque](https://help.vtex.com/pt/tutorial/como-atualizar-estoque--2MDwYV1COA6YuoiY22AyGo). Isso automaticamente será refletido na Amazon, e, portanto, não é necessário fazer um reprocessamento manual do erro.

____

#### Mensagem de erro

`Amazon must approve your brand before you can use it to list products. Brands should be registered through Brand Registry, but if your brand is not eligible for Brand Registry, you can obtain an exception by contacting Seller Support and mentioning error code 5665. When contacting Seller Support, provide the following information: - The brand name used when creating the listing. - Images of the product and packaging, showing branding on either. The images can show the product and packaging held in hand, or placed on a table. The branding must be permanently affixed. - If using inventory file templates, please also provide the Batch ID of the inventory file process report. For more information, please review our Brand Name Policy.`

**Mensagem traduzida:** Para que você possa anunciar produtos com a sua marca, é necessário que ela seja aprovada pela Amazon. As marcas devem ser registradas no Cadastro de marcas, mas se a sua marca não for elegível, você pode obter uma exceção. Para fazer isso, entre em contato com o Suporte ao Vendedor e informe o _código de erro 5665_. Ao entrar em contato com o Suporte ao Vendedor, forneça as seguintes informações: - O nome da marca utilizada para criar o anúncio. - Imagens do produto e da embalagem mostrando o nome a marca. As imagens podem mostrar o produto e a embalagem em uma mão ou sobre uma mesa. A marca deve ser afixada de forma permanente. - Se você utiliza modelos de arquivos de inventário, forneça também a ID do lote do relatório de processamento do arquivo de inventário. Para mais informações, consulte a nossa Política de nome de marca.

A Amazon só aceita veicular um produto após aprovar a marca desse produto, que deve ser registrada por meio do [Cadastro de marcas da Amazon](https://brandservices.amazon.com.br/eligibility). Entretanto, se sua marca não for elegível para o cadastro, conforme a [Política de nome de marca da Amazon](https://sellercentral.amazon.com.br/gp/help/external/G2N3GKE5SGSHWYRZ), você pode obter uma exceção, entrando em contato com a Amazon pelo [Amazon Seller Central](https://sellercentral.amazon.com.br/). O _código de erro 5665_ deve ser informado ao suporte, juntamente com outras informações, descritas na Política de nome de marca da Amazon.

____

#### Mensagem de erro

`We have identified you may be misusing the Brand field and not complying with the Brand Name Policy. If you believe you are complying with our policy, please contact Seller Support and mention error code 5661. When contacting Seller Support, provide the following information: - The brand name used when creating the listing. - Images of the product and packaging, showing branding on either. The images can show the product and packaging held in hand, or placed on a table. The branding must be permanently affixed. - If using inventory file templates, please also provide the Batch ID of the inventory file process report. For more information, please review our Brand Name Policy.`

**Mensagem traduzida:** Identificamos que você pode estar fazendo uso indevido do campo Marca e violando a Política de nome da marca. Se você acredita estar em conformidade com a nossa política, entre em contato com o Suporte ao Vendedor e informe o _código de erro 5661_. Ao entrar em contato com o Suporte ao Vendedor, forneça as seguintes informações: - O nome da marca utilizada para criar o anúncio. - Imagens do produto e da embalagem mostrando o nome a marca. As imagens podem mostrar o produto e a embalagem em uma mão ou sobre uma mesa. A marca deve ser afixada de forma permanente. - Se você utiliza modelos de arquivos de inventário, forneça também a ID do lote do relatório de processamento do arquivo de inventário. Para mais informações, consulte a nossa Política de nome de marca.

A marca do seu produto foi considerada em desacordo com a [Política de nome de marca da Amazon](https://sellercentral.amazon.com.br/gp/help/external/G2N3GKE5SGSHWYRZ). Se após checar as exigências do marketplace você não identificar a origem do problema, entre em contato com a Amazon pelo [Amazon Seller Central](https://sellercentral.amazon.com.br/). Informe ao suporte o código do erro 5661 e as demais informações sobre o erro, listadas na Política de nome de marca da Amazon.

____

#### Mensagem de erro

`The seller does not have an eligible Amazon account to call Amazon MWS. For more information about eligible accounts, see the Amazon MWS documentation.`

**Mensagem traduzida:** O vendedor não tem uma conta elegível na Amazon para acionar a Amazon MWS. Para mais informações sobre contas elegíveis, consulte a documentação da Amazon MWS.

A conta de um usuário na Amazon pode ser considerada inelegível por diversas razões, desde o preenchimento incorreto de dados cadastrais, problemas de _token_, até a violação da política do marketplace. Para solucionar o erro é necessário entrar em contato com a Amazon pelo [Amazon Seller Central](https://sellercentral.amazon.com.br/). Mais informações sobre contas podem ser encontradas na documentação da Amazon [Gerenciar Conta da AWS](https://docs.aws.amazon.com/pt_br/accounts/latest/reference/managing-accounts.html). Para saber mais sobre política de segurança em contas de sellers na Amazon, consulte [Segurança em AWSGerenciamento de contas](https://docs.aws.amazon.com/pt_br/accounts/latest/reference/security.html).

____

#### Mensagens de erro

`Access to Feeds. SubmitFeed is denied.`<br>
</br>`Feed rejected`

**Mensagens traduzidas:** Acesso a Feeds. SubmitFeed negado. | Feed rejeitado

O sistema da Amazon [_Data feeds_](https://docs.aws.amazon.com/pt_br/marketplace/latest/userguide/data-feed.html) oferece ao seller a possibilidade de coletar e analisar informações sobre seus produtos, vendas, entre outros. Estes erros geralmente ocorrem por dois motivos: problemas de cadastro ou de _token_. Pode ser que algum campo do cadastro esteja pendente ou tenha sido preenchido incorretamente. Ou então pode ser que se trate de um problema com o _token_ da integração, que pode ter expirado, ou sido considerado suspeito em questão de segurança, por exemplo. Para solucionar os erros, entre em contato com a Amazon pelo [Amazon Seller Central](https://sellercentral.amazon.com.br/).

____

#### Mensagens de erro

`AuthToken is not valid for SellerId and AWSAccountId`<br>
</br>`Access denied`

**Mensagens traduzidas:** AuthToken não é válido para SellerId e AWSAccountId | Acesso negado

Estes erros ocorrem devido a problemas com _token_. Para a Amazon, um _token_ pode ser considerado inválido por diferentes motivos, como prazo de validade expirado, ou suspeita de ameaça à segurança, por exemplo. Problemas relacionados a _tokens_ devem ser tratados diretamente com a Amazon, por meio do [Amazon Seller Central](https://sellercentral.amazon.com.br/).

<br></br>
### Saiba mais

- [Integração com a Amazon](https://help.vtex.com/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP)
- [Controle de estoque mínimo para integrações](https://help.vtex.com/pt/tutorial/controle-de-estoque-minimo-para-integracoes--5hvUNIiSeJ5QCaZQYpYf1D)
- [Configurar o Alerta de Estoque Crítico](https://help.vtex.com/pt/tutorial/configurar-o-alerta-de-estoque-critico--6FD0GHeQPCsKIMgkQ88SGu)
