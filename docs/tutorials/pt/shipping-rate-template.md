---
title: Planilha de frete
id: tutorials_127
status: PUBLISHED
createdAt: 2019-02-22T19:36:18.509Z
updatedAt: 2023-03-29T18:18:59.537Z
publishedAt: 2023-03-29T18:18:59.537Z
firstPublishedAt: 2019-02-22T19:36:22.375Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slug: planilha-de-frete
legacySlug: como-montar-a-planilha-de-frete, importar-planilha-de-frete
subcategory: 7fTH6bP0C4IaM8qWi0kkQC
---

A planilha de frete é uma maneira de cadastrar os preços de envio que serão oferecidos aos seus clientes. Ela contém informações como os intervalos de código postal, o peso aceito e o valor do serviço cobrado pela empresa que realizará a entrega.

As informações da planilha de frete devem ser preenchidas de acordo com o contrato do serviço de entrega que sua loja possui com transportadoras ou entregadores. 

Para cadastrar preços de envio pela planilha de frete é necessário:

1. [Preencher os campos da planilha](#preencher-os-campos-da-planilha)
2. [Enviar o arquivo pelo Admin VTEX](#enviar-o-arquivo-pelo-admin-vtex)

<div class="alert alert-info"> 
Há também como cadastrar preços de envio pelo módulo <a href="https://help.vtex.com/pt/tutorial/gerenciar-valores-de-frete--tutorials_141">Tarifas de Envio</a>. Recomendamos utilizar a <a href="https://help.vtex.com/pt/tutorial/planilha-de-frete--tutorials_127">Planilha de frete</a> ao incluir vários intervalos de código postal, e utilizar Tarifas de Envio para gerenciar os preços de frete já cadastrados e para cadastrar cada intervalo de código postal individualmente.
</div>

## Preencher os campos da planilha

Para o preenchimento dos campos da planilha é preciso certificar-se dos termos acordados com a empresa responsável pela entrega dos produtos da sua loja. É a partir do contrato realizado que os campos da planilha serão preenchidos.

Para auxiliar no preenchimento, baixe e utilize a planilha modelo disponível em **Envio > Estratégia de envio > Políticas de envio > Criar política de envio**, clicando em `Download de planilha modelo` na seção **Upload de tarifas de envio**.

De forma geral, você deve preencher as colunas considerando que para cada localidade há: 

* Um intervalo de código postal associado (ou um polígono de geolocalização)
* Faixas de peso aceitáveis
* Valores fixos e adicionais para realização da entrega
* Volume máximo para as entregas.

Confira a tabela a seguir para entender cada campo detalhadamente.

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
    <thead class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
        <tr class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">
            <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">
                <em class="i"><strong>Coluna</strong></em>
            </th>
            <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">
                <em class="i">Descrição</em>
            </th>
            <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">
                <em class="i">Observações</em>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">ZipCodeStart</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">  O início do intervalo de faixa do código postal (CEP).
            </td>
            <td rowspan="2" class="t-body pa5" style="min-width: 15rem;"> O preenchimento dos intervalos de código postal deverá ser feito apenas se o campo <b>PolygonName</b> não for preenchido, pois são dados de função equivalente.
            <p>
            Os  campos devem conter até 8 dígitos. Não se deve usar caracteres especiais, somente números e letras. <p>O preenchimento deve obedecer a seguinte regra:
                <body>
                  <ul>
                    <li>Para intervalos apenas numéricos, o limite aceito é de  <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">0000000</span> até  <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">99999999</span>.</li>
                    <li>Para intervalos apenas alfabéticos, o limite aceito é de  <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">AAAAAAAA</span> até  <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">ZZZZZZZZ</span>.</li>
                    <li>Para intervalos que utilizam letras e números, o limite final aceito é  <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">ZZZZZZZZ</span>.</li>
                  </ul>
                </body>
            </td>
        </tr>
        <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">ZipCodeEnd</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;"> O final do intervalo de faixa do código postal (CEP).
            </td>
        </tr>
        <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">PolygonName</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">Identificação do polígono definido na função de <a href="https://help.vtex.com/pt/tutorial/gerenciar-geolocalizacao/">geolocalização</a>.
            </td>
            <td class="t-body pa5" style="min-width: 15rem;"> Este campo deverá ser preenchido somente se os campos <b>ZipCodeStart </b>e <b>ZipCodeEnd </b>não forem preenchidos, pois são dados de função equivalente.
            </td>
        </tr>
    <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">WeightStart</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">Limite inicial do intervalo de peso aceito, em número decimal.
            </td>
            <td rowspan="2" class="t-body pa5" style="min-width: 15rem;">Considere que a unidade de peso é a mesma do <a href="https://help.vtex.com/pt/tutorial/campos-de-cadastro-de-sku--21DDItuEQc6mseiW8EakcY">preenchimento de campos de cadastro de SKU</a>. Por exemplo, se ao cadastrar os SKUs você utilizou gramas, esse será o padrão utilizado  em <b>WeightStart </b>e <b>WeightEnd</b>.
            </td>
        </tr>
        <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">WeightEnd</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">Limite final do intervalo de peso aceito, em número decimal.
            </td>
        </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">AbsoluteMoneyCost</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">O valor fixo de frete que deverá ser cobrado, em número decimal.
            </td>
            <td class="t-body pa5" style="min-width: 15rem;"> Caso haja valores adicionais, o preço final cobrado será o valor fixo acrescido do valor adicional. 
            </td>
        </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">PricePercent</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;"><a href="https://help.vtex.com/pt/tutorial/adicionais-de-frete--2vqGwMn0LabkOHY6zSHYNV">Adicional por preço,</a> calculado de acordo com o preço do carrinho, em número decimal. Para o preenchimento da tabela utilize o valor em porcentagem (por exemplo para um adicional de 10% preencha a tabela com 10).
            </td>
            <td class="t-body pa5" style="min-width: 15rem;"> Utilize o campo nos casos em que exista um adicional de preço para a entrega. Os <a href="https://help.vtex.com/pt/tutorial/adicionais-de-frete--2vqGwMn0LabkOHY6zSHYNV">adicionais de frete</a> são somados ao valor fixo.
            </td>
        </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">PriceByExtraWeight</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;"><a href="https://help.vtex.com/pt/tutorial/adicionais-de-frete--2vqGwMn0LabkOHY6zSHYNV">Adicional por peso</a>, calculado de acordo com o peso do carrinho, em número decimal. 
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">Utilize o campo nos casos em que exista um adicional de preço para a entrega. Os <a href="https://help.vtex.com/pt/tutorial/adicionais-de-frete--2vqGwMn0LabkOHY6zSHYNV">adicionais de frete</a> são somados ao valor fixo. Considere que a unidade de peso está relacionada às mesmas utilizadas no <a href="https://help.vtex.com/pt/tutorial/campos-de-cadastro-de-sku--21DDItuEQc6mseiW8EakcY">preenchimento de campos de cadastro de SKU</a> (por exemplo: grama, quilograma e oz).
            </td>
        </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">MaxVolume</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">Volume máximo aceito, em número decimal.
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">Considere que a unidade de volume está relacionada às dimensões  cadastradas no <a href="https://help.vtex.com/pt/tutorial/campos-de-cadastro-de-sku--21DDItuEQc6mseiW8EakcY">preenchimento de campos de cadastro de SKU</a>. Por exemplo, se as arestas (altura, largura e comprimento) estiverem em centímetros, o campo de<b> MaxVolume </b>deve estar em cm³.
            </td>
        </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">TimeCost</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">Tempo de entrega do pedido pela transportadora, no formato <b>DD.HH:MM:SS</b>.
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">Por exemplo: se o tempo para a realização da entrega é de 4 dias e meio, o campo deve ser preenchido da seguinte forma: 04.12:00:00.
            </td>
        </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Country</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">País onde a entrega será realizada, preenchido com o código ISO de 3 dígitos.
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">Para consultar o código ISO do país, acesse <a href="https://countrycode.org/">Country Codes</a>.
            </td>
        </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">MinimumValueInsurance</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;"><a href="https://help.vtex.com/pt/tutorial/adicionais-de-frete--2vqGwMn0LabkOHY6zSHYNV">Valor adicional de seguro</a>, configurado com um valor absoluto, em número decimal.
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">O valor cadastrado no campo é adicionado ao frete. No entanto, só será adicionado quando o <a href="https://help.vtex.com/pt/tutorial/adicionais-de-frete--2vqGwMn0LabkOHY6zSHYNV">Adicional por preço
</a> for menor que o campo  <em>MinimumValueInsurance</em>. Veja em <a href="https://help.vtex.com/pt/faq/para-que-serve-o-campo-na-tabela-de-frete-minimum-value-insurance">Para que serve o campo Minimum Value Insurance?</a>
            </td>
        </tr>
</tbody>
</table>

<div class="alert alert-info"> 
Para fins de usabilidade de termos, utilizamos em nossa documentação o termo "peso" ao invés de "massa". 
</div>

Veja abaixo um exemplo de preenchimento dos campos, considerando o formato aceito em cada coluna. 

![modelo_planilhanumerica](https://images.ctfassets.net/alneenqid6w5/15Dc2cfsXWbIwSt2vypWN3/20628e9acf5336c3fefcc84d334c08ec/freight_-_Debora_Moreno.png)

### Planilha para os Correios

Caso queira disponibilizar a entrega pelos Correios, é possível gerar uma planilha automática no padrão VTEX. Acesse o integrador Correios, e gere a planilha pela ferramenta oferecida pela XP Agência no link [XP planilhas](http://planilha.xpagencia.com.br/).

## Enviar o arquivo pelo Admin VTEX

A planilha é um arquivo enviado pelo Admin VTEX que deverá ser enviado no formato de **.xls** ou no formato compactado **.zip**. Após preencher os campos, envie o arquivo pela plataforma.

O envio da planilha é feito no cadastro ou na edição de **Política de Envio.** Para isso:

1. No Admin VTEX, acesse **Envio > Estratégia de Envio > Políticas de Envio** ou digite *Estratégia de envio* na barra de busca no topo da página.  
2. Clique no botão `Criar política de envio` caso queira utilizar uma nova Política de Envio ou clique no ícone de lápis ao lado de uma Política de Envio existente.
3. Após fazer download da planilha modelo e [preencher os campos](#preencher-os-campos-da-planilha), faça upload do arquivo na seção Upload de tarifas de envio.
4. Ao finalizar, clique em `Salvar Alterações`.

![upload tarifas envioPT]   (//images.contentful.com/alneenqid6w5/1qNl0ZaHhZMpshuBWRQhs9/f5814cef893c4f139a8497ec1985cbb2/upload_tarifas_envioPT.png)

<div class="alert alert-warning"> 
Para cadastrar uma <b>nova</b> Política de Envio, é preciso preencher outros campos além da Planilha de frete. Entenda como criar, editar e preencher todos os campos necessários no artigo <a href="https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140">Política de Envio</a>.
</div>

<div class="alert alert-danger"> 
Cada aba dentro da planilha não pode ultrapassar 65.536 linhas. É possível criar várias abas na mesma planilha, respeitando o limite de linhas. Não há limite de abas dentro do arquivo, no entanto o arquivo total não pode exceder 10Mb. Se preciso, compacte o arquivo em formato <b>.zip</b>. Se ainda não for suficiente, divida em dois arquivos e cadastre outra política de envio para fazer upload do segundo arquivo criado. 
</div>

Caso exista algum problema no preenchimento dos campos do arquivo enviado, você receberá um email informando o erro. Não esqueça de verificar o preenchimento correto antes de realizar uma nova tentativa de envio.

É possível que o upload e a confirmação de cadastro de planilha demore um pouco, pois o processamento do arquivo pode não ocorrer de imediato, pelo volume de informações. 

