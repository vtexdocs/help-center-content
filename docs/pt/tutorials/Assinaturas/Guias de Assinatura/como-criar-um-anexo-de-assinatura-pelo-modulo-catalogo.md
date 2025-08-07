---
title: 'Como criar um anexo de assinatura pelo módulo Catálogo'
id: 2bUuKyPflA8cOGLv8OvaKK
status: PUBLISHED
createdAt: 2021-07-06T15:31:40.648Z
updatedAt: 2025-02-25T18:41:12.723Z
publishedAt: 2025-02-25T18:41:12.723Z
firstPublishedAt: 2021-07-06T17:47:38.919Z
contentType: tutorial
productTeam: Post-purchase
author: 1malnhMX0vPThsaJaZMYm2
slugEN: how-to-create-a-subscription-attachment-via-the-catalog-module
legacySlug: como-criar-um-anexo-de-assinatura
locale: pt
subcategoryId: 1rA9wuuskW3PpjvMrhatAM
---

<div class = "alert alert-info">
Caso você utilize o módulo de <b>Assinaturas</b> no Admin VTEX, recomendamos criar um plano de assinatura por esse módulo. Para mais informações, veja o artigo <a href="https://help.vtex.com/pt/tutorial/como-criar-um-plano-de-assinatura-beta--1qGRoFczm98Wgt81f9mUqC">Como criar um plano de assinatura</a>. 
</div>

[Assinaturas](https://help.vtex.com/pt/tutorial/como-funciona-a-assinatura--frequentlyAskedQuestions_4453) é a solução da VTEX que permite aos lojistas venderem de forma recorrente e automática para os clientes assinantes, de acordo com determinada frequência.

Existem duas formas pelas quais os produtos da sua loja podem ser adquiridos via assinatura:

* Criação de [planos de assinatura](https://help.vtex.com/pt/tutorial/como-criar-um-plano-de-assinatura-beta--1qGRoFczm98Wgt81f9mUqC) pelo módulo **Assinatura**.
* Criação de anexos de assinatura pelo módulo **Catálogo**.

Este artigo explica como criar anexos de assinatura pelo **Catálogo**, o que é recomendado quando a loja não utiliza o módulo **Assinaturas (Beta)**.

<div class="alert alert-warning">
<p>É importante compreender a utilização do termo anexo no contexto de assinaturas:<ul><li><a href="https://help.vtex.com/pt/tutorial/o-que-e-um-anexo--aGICk0RVbqKg6GYmQcWUm">Anexo</a>: é uma customização do SKU opcional e sem custos, uma forma do lojista adicionar informação a um item.</li><li><b>Anexo de assinatura:</b> é um tipo específico de anexo que possibilita a criação de assinaturas para um SKU. Os clientes podem criar assinaturas para obter o SKU periodicamente quando ele foi associado a um anexo de assinatura.</li><li><b>Assinatura de SKU com anexo:</b> quando o cliente cria uma assinatura a partir de um pedido com um SKU que possui anexo, para que o anexo do pedido original seja mantido nos pedidos da assinatura, o lojista precisa habilitar essa configuração na loja. Isso é feito somente por API usando o endpoint <a href="https://developers.vtex.com/docs/api-reference/subscriptions-api-v3#post-/api/rns/settings">Edit subscriptions settings</a>. Saiba mais em <a href="https://developers.vtex.com/docs/guides/how-to-keep-attachments-from-original-orders-in-subscriptions">How to keep attachments from original orders in subscriptions</a>.</li></ul></p>
</div>

## Anexo de assinatura do Catálogo

O anexo de assinatura é utilizado para configurar a funcionalidade de assinatura para o SKU associado a ele. Esse tipo de anexo contém a configuração da frequência e data de ciclo da assinatura.

Para criar um anexo de assinatura pelo Catálogo, você deverá realizar as seguintes ações:

1. [Criar anexo de assinatura](#1-criar-anexo-de-assinatura)
2. [Configurar frequência e data do ciclo de assinatura](#2-configurar-frequencia-e-data-do-ciclo-de-assinatura)
3. [Associar SKU ao anexo de assinatura](#3-associar-sku-ao-anexo-de-assinatura)

## 1. Criar anexo de assinatura

Siga os passos abaixo para criar um anexo de assinatura:

1. No Admin VTEX, acesse **Catálogo > Campos personalizados**, ou digite **Campos personalizados** na barra de busca no topo da página.
2. Na aba **Serviços e SKUs**, clique em `Novo anexo`.
3. No campo **Nome**, cadastre um valor no formato `vtex.subscription.{sufixo}`, e substitua `{sufixo}` pelo nome que você deseja utilizar para diferenciar essa assinatura, como nos exemplos a seguir:
  * `vtex.subscription.plano1`
  * `vtex.subscription.teste`
4. No campo **Anexo obrigatório**, deixe a caixa de seleção desmarcada.

  <div class="alert alert-danger">
O campo <b>Anexo obrigatório</b> não deve ser marcado. Se por acaso ele for marcado, o sistema de <b>Assinaturas</b> tentará enviar um pedido com assinatura para um item que já possui um anexo obrigatório (o anexo de assinatura), gerando um erro no sistema. Portanto, caso o campo <b>Anexo obrigatório</b> tenha sido marcado por engano, desmarque-o e solicite ao cliente da loja que realize o pedido novamente.
</div>

5. No campo **Status**, marque a caixa de seleção `Ativa/Desativa o anexo`.
6. Clique em `Salvar`.

## 2. Configurar frequência e data do ciclo de assinatura

Após criar o anexo de assinatura, você deverá configurar a frequência e a data do ciclo de assinatura. A frequência é a periodicidade da assinatura. Este valor é exibido para o seu cliente escolher no momento da criação da assinatura, e pode ser diário, semanal, mensal ou anual, dependendo da estratégia do seu negócio.

A data do ciclo de assinatura corresponde ao dia em que o pedido será repetido a cada ciclo de assinatura. Por exemplo, o cliente cria uma assinatura para obter ração para gatos no dia 15 de cada mês. Nesse caso, o dia 15 é a data do ciclo e a frequência da assinatura é mensal.

Para configurar as frequências e datas de ciclo de assinatura que deseja oferecer na sua loja, siga os passos abaixo:

1. No Admin VTEX, acesse **Catálogo > Campos personalizados**, ou digite **Campos personalizados** na barra de busca no topo da página.
2. Na aba **Serviços e SKUs**, na linha correspondente ao anexo criado anteriormente, clique em `Editar`.
3. No campo **Nome da chave**, insira o valor fixo `vtex.subscription.key.frequency`, que corresponde à frequência.
4. No campo **Valores permitidos**, defina os valores desejados para a frequência da assinatura (conforme as orientações da tabela abaixo).
5. Clique em `Adicionar novo`.
6. No campo **Nome da chave**, insira o valor fixo `vtex.subscription.key.purchaseday`, que corresponde a data do ciclo da assinatura.
7. No campo **Valores permitidos**, defina os valores desejados para a data do ciclo (conforme as orientações da tabela abaixo).

  <div class="alert alert-warning">
<p>Caso nenhum valor seja inserido no campo <b>Valores Permitidos</b> para o <code>vtex.subscription.key.purchaseday</code>, a data do ciclo de assinatura será o mesmo dia da semana (para frequência semanal) ou dia do mês (para frequência mensal) do pedido original.</p>
</div>

  <div class = "alert alert-info">
Não é necessário preencher o campo <b>Número máximo de caracteres</b>.
</div>

8. Clique em `Salvar`.

| **Nome da chave** | **Valores permitidos** |
| --- | --- |
| `vtex.subscription.key.frequency` | <p>Os valores permitidos são uma combinação de um número de 1 a 9 + espaço + algum dos seguintes valores:<ul><li>`day`: pedidos diários. Exemplo: `5 day`.</li><li>`week`: pedidos semanais. Exemplo: `4 week`.</li><li>`month`: pedidos mensais. Exemplo: `3 month`.</li><li>`year`: pedidos anuais. Exemplo: `2 year`.</li></ul></p><p>Para disponibilizar múltiplas opções de frequência, separe os valores usando vírgula. Não utilize espaço após a vírgula.<ul><li>Exemplo: para oferecer uma opção de assinatura mensal e outra semanal, preencha `1 month,1 week`.</li></ul></p> |
| `vtex.subscription.key.purchaseday` | <p><b>Frequência semanal</b></p><p>Os valores permitidos para a data do ciclo de assinaturas semanais vão de 0 a 6 e equivalem aos dias da semana:<ul><li>`0`: domingo</li><li>`1`: segunda</li><li>`2`: terça</li><li>`3`: quarta</li><li>`4`: quinta</li><li>`5`: sexta</li><li>`6`: sábado</li></ul></p><p>Para oferecer mais de um dia para o ciclo com frequência semanal, separe os valores usando vírgula.<ul><li>Exemplo: uma assinatura semanal com data do ciclo aos domingos, quartas e sextas seria `0,3,5`.</li></ul></p><br><p><b>Frequência mensal</b></p><p>Os valores permitidos vão de `1` a `28` e equivalem aos dias do mês, sendo `1` o primeiro dia do mês, `2` o segundo, e assim sucessivamente até `28`, o vigésimo oitavo dia do mês.</p><p>Se utilizar mais de um número, separe-os usando vírgula. Não utilize espaço após a vírgula.<ul><li>Exemplo: uma assinatura mensal com data do ciclo no primeiro ou último dia permitido seria `1,28`.</li></ul></p> |

As imagens a seguir apresentam exemplos de preenchimento no Admin VTEX:

* **Exemplo de frequência mensal:** a imagem apresenta uma assinatura mensal com pedidos que podem ser feitos todo dia 1, 15 ou 28 de cada mês:

  ![PT Assinatura Exemplo Valores month](//images.ctfassets.net/alneenqid6w5/3ogGjc6DLexe7YeL3qyiuI/748b3dd8e63870c539b58f3404521031/PT_Assinatura_Exemplo_Valores_month.png)

* **Exemplo de frequência a cada 3 semanas:** a imagem apresenta uma assinatura que cria novos pedidos a cada 3 semanas, e a compra pode acontecer aos domingos, terças ou sábados.

  ![PT Assinatura Exemplo Valores week](//images.ctfassets.net/alneenqid6w5/20va8G0uiw3jpHKM2a99Al/7ef796fd84e1328bcc0b6f637bdc30f1/PT_Assinatura_Exemplo_Valores_week.png)

## 3. Associar SKU ao anexo de assinatura

Para a última etapa da criação de um anexo de assinatura pelo Catálogo, você deve associar o anexo de assinatura aos SKUs desejados. Para isso, siga os passos abaixo:

1. No Admin VTEX, acesse **Catálogo > Todos os produtos**, ou digite **Todos os produtos** na barra de busca no topo da página.
2. Na coluna **SKU**, clique no nome do SKU que deseja associar ao anexo de assinatura.
3. Na aba **Configurações Avançadas**, no campo **Anexos**, marque a caixa de seleção do anexo de assinatura. 
4. Clique em `Salvar`.

Feito isso, os clientes poderão criar assinaturas na sua loja para adquirir de forma recorrente e automática o SKU associado ao anexo de assinatura.

### Saiba mais

* [Como funciona a assinatura](https://help.vtex.com/pt/tutorial/como-funciona-a-assinatura--frequentlyAskedQuestions_4453)
* [Como configurar Assinaturas na sua loja](https://help.vtex.com/pt/tutorial/como-configurar-assinaturas--1FA9dfE7vJqxBna9Nft5Sj)
* [How to keep attachments from original orders in subscriptions](https://developers.vtex.com/docs/guides/how-to-keep-attachments-from-original-orders-in-subscriptions)
