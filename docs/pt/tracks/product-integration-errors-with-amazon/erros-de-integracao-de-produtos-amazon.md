---
title: 'Erros de integração de produtos Amazon'
id: 4HsdzgoYxgQNtCBCRttKDA
status: PUBLISHED
createdAt: 2023-06-29T19:08:38.476Z
updatedAt: 2023-09-26T15:02:03.011Z
publishedAt: 2023-09-26T15:02:03.011Z
firstPublishedAt: 2023-06-29T22:27:35.313Z
contentType: trackArticle
productTeam: Channels
slugEN: product-integration-errors-with-amazon
locale: pt
trackId: 6sgd4Pagy3wNsWKBvmIFrP
trackSlugPT: erros-de-integracao-de-produtos-amazon
---

Há diversas razões pelas quais um produto entre a Amazon e sua loja VTEX pode não integrar, e para cada uma delas existe uma notificação que indica a natureza do erro. Você encontra a mensagem de erro no Admin VTEX, no módulo **Marketplace > Conexões > Produtos** ou na barra de busca. Ao acessar a página, filtre pelo marketplace Amazon e clique no produto para visualizar a mensagem.  

Após solucionar um erro, é necessário reprocessar manualmente a integração do estoque daquele SKU. Isso é feito no mesmo local onde o erro é visualizado, clicando em **Ações > Reprocessar.**  

Nesse artigo, listamos os seguintes erros:  

- [Erros na planilha de mapeamento de categorias e atributos da Amazon](#Erros-na-planilha-de-mapeamento-de-categorias-e-atributos-da-Amazon)
- [Erros de ausência de atributos obrigatórios na Amazon](#Erros-de-ausencia-de-atributos-obrigatorios-na-Amazon)
- [Erros de divergência entre catálogos VTEX e Amazon (match de anúncios)](#Erros-de-divergencia-entre-catalogos-VTEX-e-Amazon-(match-de-anuncios))
- [Erros de Token/Permissão da Amazon](#Erros-de-Token/Permissao-da-Amazon)
- [Erros de configuração na integração da Amazon](#Erros-de-configuracao-na-integracao-da-Amazon)
- [Erros no envio da categoria global VTEX](#Erros-no-envio-da-categoria-global-VTEX)
- [Aviso de SKU Inativo](#Aviso-de-SKU-Inativo)

## Erros na planilha de mapeamento de categorias e atributos da Amazon  

- **A categoria global VTEX desse SKU não foi preenchida na planilha de mapeamento ou está preenchida incorretamente**  

  Esse erro ocorre quando a Categoria global não está configurada ou configurada incorretamente. A Amazon utiliza a categoria global cadastrada na VTEX para fazer o mapeamento dos produtos, por isso, é importante que seja feita de maneira correta a equivalência entre a categoria global da VTEX e as categorias gerais na Amazon. 
Para resolver esse erro, [configure a Categoria global](/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#configuracao-da-categoria-global) do seu produto.

- **A especificação (X) preenchida na planilha de mapeamento não foi encontrada na especificação do produto ou do SKU no seu catálogo da VTEX**

  Esse erro ocorre quando a planilha foi preenchida com uma especificação que não existe no catálogo VTEX. Para resolver esse erro, você deverá cadastrar uma [especificação de produto](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/4fcdmJzQ6QYA9zWf3bLWin) ou [SKU](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/6UjLHdAT5YLuflki10SXLr). Para visualizar os valores aceitos pela Amazon, acesse a [Planilha de atributos obrigatórios da Amazon](/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#2-planilha-de-atributos-obrigatorios-da-amazon) e busque pela aba `VALORES VÁLIDOS`.

- **O valor (X) preenchido na planilha de mapeamento não é um valor de atributo/especificação aceito pela Amazon**

  O erro ocorre quando a especificação X não é aceita pela Amazon. Você deverá [cadastrar uma especificação](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/4fcdmJzQ6QYA9zWf3bLWin) que seja aceita pela Amazon. Para visualizar os valores aceitos pela Amazon, acesse a [Planilha de atributos obrigatórios da Amazon](/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#2-planilha-de-atributos-obrigatorios-da-amazon) e busque pela aba `VALORES VÁLIDOS`.

- **O ID da categoria global VTEX desse produto não foi encontrado na planilha de mapeamento**

  Esse erro ocorre quando a Categoria global não está configurada ou configurada incorretamente. Para resolver esse erro, [configure a Categoria global](/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#configuracao-da-categoria-global) do seu produto.

- **O valor preenchido na planilha de mapeamento para a especificação "Material" ou “Departament” não é um valor de atributo/especificação aceito pela Amazon**

  Em ambos os erros, a [Categoria Global VTEX](/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD) do produto selecionado pelo seller exige o cadastro obrigatório dos atributos Department ou Material no produto, e o  preenchimento da [planilha de mapeamento](/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#4-planilha-de-mapeamento). [Cadastre](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/4fcdmJzQ6QYA9zWf3bLWin) o atributo no produto e preencha a planilha conforme o exemplo abaixo:  

| **CategoryID** | **VariationTheme** | **Type** | **VTEXSpecification** | **AmazonSpecification** | **VTEXValue** | **AmazonValue** |
|-----|-----|-----|-----|-----|-----|-----|
| 3 |  | Information | Gênero | Department | Feminino | Female |

- **Não foi feito o upload da planilha de mapeamento de categorias e atributos**

  Esse erro ocorreu porque não foi feito o upload da [planilha de mapeamento da Amazon](/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#4-planilha-de-mapeamento). Você deverá [preencher](/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#5-preenchimento-da-planilha-de-mapeamento) a planilha de mapeamento da Amazon e fazer o [upload](/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#6-upload-da-planilha-de-mapeamento) da planilha após o preenchimento. 

- **O valor da especificação (X) preenchido na planilha não existe na especificação desse produto na VTEX**

  No erro acima, o atributo citado não está cadastrado no SKU do catálogo VTEX. Você deverá [cadastrar o atributo](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/4fcdmJzQ6QYA9zWf3bLWin) e refazer o [mapeamento](/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD) do produto enviado.

- **A unidade da idade mínima preenchida na planilha de mapeamento não está de acordo com o que a Amazon espera receber**

- A unidade da idade mínima não está de acordo com o que a Amazon solicita. A Amazon aceita valores em anos ou meses, refaça o [mapeament](/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD)o com valores aceitos pelo marketplace.

- **A Amazon não aceita a(s) variação do SKU preenchida na planilha de mapeamento**

  O erro ocorre quando a coluna **VariationTheme** da planilha de mapeamento da Amazon é preenchida com um valor que não é aceito pela Amazon. [Verifique os valores aceitos](/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#5-preenchimento-da-planilha-de-mapeamento) e preencha um valor válido na planilha de mapeamento.

- **O valor preenchido na planilha de mapeamento para o atributo "SizeMap" não é um valor de atributo/especificação aceito pela Amazon**

  Você preencheu o valor do atributo `SizeMap` com um valor incorreto. Para visualizar os valores aceitos pela Amazon, acesse a [Planilha de atributos obrigatórios da Amazon](/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#2-planilha-de-atributos-obrigatorios-da-amazon) e busque pela aba `VALORES VÁLIDOS`.

- **O valor preenchido na planilha de mapeamento para a especificação "TargetGender" não é um valor de atributo/especificação aceito pela Amazon**

  Você preencheu o valor da especificação `TargetGender` com um valor incorreto. Para visualizar os valores aceitos pela Amazon, acesse a [Planilha de atributos obrigatórios da Amazon](/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#2-planilha-de-atributos-obrigatorios-da-amazon) e busque pela aba `VALORES VÁLIDOS`.

- **Os atributos de cor e de tamanho que constam nesse SKU não foram encontrados na planilha de mapeamento**

  Você não preencheu o valor das especificações Cor e Tamanho, obrigatórios para a categoria do produto que você quer enviar. Confira na [planilha de atributos obrigatórios da Amazon](/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#2-planilha-de-atributos-obrigatorios-da-amazon) para conferir os valores aceitos pela Amazon e preencha um valor válido na planilha de mapeamento.

- **O atributo "author" não está cadastrado no SKU ou não consta na planilha de mapeamento**

  Você não cadastrou o atributo obrigatório `Author` para o produto que você deseja enviar. Para visualizar os valores aceitos pela Amazon, acesse a [Planilha de atributos obrigatórios da Amazon](/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#2-planilha-de-atributos-obrigatorios-da-amazon), busque pela aba `VALORES VÁLIDOS` e [cadastre uma especificação de produto](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/4fcdmJzQ6QYA9zWf3bLWin) para esse atributo.

- **O valor preenchido na planilha de mapeamento para o atributo "Size" não é um valor de atributo/especificação aceito pela Amazon**

Você não preencheu o valor da especificação `Size` de maneira correta. Para visualizar os valores aceitos pela Amazon, acesse a [Planilha de atributos obrigatórios da Amazon](/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#2-planilha-de-atributos-obrigatorios-da-amazon) e busque pela aba `VALORES VÁLIDOS`.

- **O valor preenchido na planilha de mapeamento para o atributo "Color" não é um valor de atributo/especificação aceito pela Amazon**

  Você não preencheu o valor da especificação `Color` de maneira correta. Para visualizar os valores aceitos pela Amazon, acesse a [Planilha de atributos obrigatórios da Amazon](/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#2-planilha-de-atributos-obrigatorios-da-amazon) e busque pela aba `VALORES VÁLIDOS`.

## Erros de ausência de atributos obrigatórios na Amazon

- **O atributo Cor não está cadastrado no SKU ou não consta na planilha de mapeamento**

  O atributo `Cor` é obrigatório para a categoria do produto que você está enviando para a Amazon e não está cadastrado no SKU ou não foi mapeado na planilha de mapeamento. 
Você deverá cadastrar uma [especificação de SKU](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/6UjLHdAT5YLuflki10SXLr) para o atributo `Cor` e/ou refazer o [mapeamento](/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD) do produto enviado.

- **A especificação do produto TargetGender é obrigatória para integrar esse produto com a Amazon**

  A especificação do produto `TargetGender` é obrigatória para a categoria do produto que você está enviando. Dependendo da categoria, a Amazon pode chamar de Departamento ou TargetGender.
Faça o [cadastro da especificação do produto](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/4fcdmJzQ6QYA9zWf3bLWin) `TargetGender` e refaça o [mapeamento](/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD).

## Erros de divergência entre catálogos VTEX e Amazon (Match de anúncios)

- **SKU já existe no catálogo da Amazon e poderia ser feito o processo de matching dele entre VTEX e Amazon. Porém, o valor do atributo (x) deste SKU que consta na VTEX é diferente do valor que está cadastrado na Amazon para ele. Na VTEX ele é (x) e na Amazon, é (y).** 

  Esse erro ocorre quando há divergências de valores do atributo (informações das características do SKU) entre o catálogo da Amazon e da VTEX. Para corrigir esse erro, você deverá [ajustar o valor do atributo](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/6UjLHdAT5YLuflki10SXLr) na plataforma da VTEX para ficar equivalente ao [valor do atributo na plataforma da Amazon](https://drive.google.com/uc?export=download&id=1UkcrfPopMg-cnrSDOF0qt51NRIXgzi0r).  

## Erro de Atributos Ausentes  

- **`SKU XXXXX, Atributos Ausentes`. O SKU XXXXX não corresponde a nenhum ASIN. Certifique-se de que todos os identificadores de produtos padrão (como códigos UPC, ISBN, EAN ou JAN) estejam corretos.**  

Esse erro ocorre quando um SKU em seu feed não corresponde a nenhum ASIN no catálogo da Amazon e que os dados de atributos do produto não são suficientes para criação de um ASIN. Para solucioná-lo, certifique-se de que está enviando as informações corretamente, conforme os valores exigidos pela Amazon na [planilha de atributos obrigatórios](/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#2-planilha-de-atributos-obrigatorios-da-amazon).  

## Erros de Token e Permissão da Amazon

- **O token preenchido no formulário de configuração da Amazon na VTEX está expirado ou não tem permissão para acessar esse fluxo**

  Esse erro ocorreu porque o número de série do **Token de autorização do MWS** expirou. Entre em contato com a Amazon para resolver esse problema, e depois refaça a [configuração da integração da Amazon](/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5J9CWPIbYQdAegJJWGsxan).

- **Sua conta não possui permissão na Amazon MWS**  

  Falta de permissão na Amazon MWS. Para solucionar o erro é necessário entrar em contato com a Amazon pelo [Amazon Seller Central](https://sellercentral.amazon.com.br/). Mais informações sobre contas podem ser encontradas na documentação da Amazon [Gerenciar Conta da AWS](https://docs.aws.amazon.com/pt_br/accounts/latest/reference/managing-accounts.html). Para saber mais sobre política de segurança em contas de sellers na Amazon, consulte [Segurança em AWSGerenciamento de contas](https://docs.aws.amazon.com/pt_br/accounts/latest/reference/security.html).

## Erros de configuração na integração da Amazon

- **O valor que consta no campo "Nome para o tipo de frete" na configuração da integração da Amazon na VTEX não é igual ao que consta no Seller Central da Amazon**

  Esse erro ocorre quando não há equivalência no valor cadastrado no campo **Nome para o tipo de frete** na etapa [Configurar a integração da Amazo](/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5J9CWPIbYQdAegJJWGsxan)n na VTEX e o valor cadastrado no Seller Central da Amazon. Acesse a documentação do Seller Central da Amazon para tirar suas dúvidas e corrigir o problema.

- **O valor que consta no campo "SELLER ID" na configuração da integração da Amazon na VTEX não é igual ao que consta no Seller Central da Amazon**  

  Esse erro ocorre quando não há equivalência no valor cadastrado no campo **Seller ID** na etapa [Configurar a integração da Amazon](/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5J9CWPIbYQdAegJJWGsxan) na VTEX e o valor cadastrado no Seller Central da Amazon, lembrando que na configuração da integração, o valor de **Seller ID** solicitado é o que consta na Amazon.
[Acesse a documentação do Seller Central da Amazon](https://sellercentral.amazon.com.br/sw/AccountInfo/MerchantToken/step/MerchantToken?ref_=macs_aimertok_cont_acinfohm&) para tirar suas dúvidas e corrigir o problema.  

## Erro no envio da categoria global VTEX na Amazon

- **A categoria global VTEX (X) desse SKU não está configurada corretamente na integração**

  O erro ocorre quando a [categoria global](/pt/tutorial/configurando-a-categoria-global--tutorials_188) selecionada no mapeamento não existe na Amazon. Confira o [mapeamento da Categoria Global](/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#categoria-global) do produto, garantindo que a categoria selecionada está vinculada com a Amazon.

## Aviso de SKU Inativo

- **O SKU que você tentou enviar se encontra inativo na VTEX**

O [SKU](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/3mJbIqMlz6oKDmyZ2bKJoA) não está ativo na VTEX, e somente SKUs ativos são integrados. Em alguns casos, este erro é gerado por [coleções](/pt/tutorial/como-deletar-colecao--6C620yHzwsGoS8iaCocAM2) antigas vinculadas à política comercial da Amazon que contém SKUs inativos.

Verifique o status do SKU no seu Admin, no módulo _PRODUTOS > Catálogo > Produtos e SKUs_ e, se necessário, [ative o SKU](/pt/tutorial/ativar-skus-em-massa--4uMZATlSc0kEYiewWKSwEY).
