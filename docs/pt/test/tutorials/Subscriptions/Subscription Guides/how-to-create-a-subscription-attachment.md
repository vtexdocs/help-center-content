---
title: 'Como criar um anexo de assinatura'
id: 2bUuKyPflA8cOGLv8OvaKK
status: PUBLISHED
createdAt: 2021-07-06T15:31:40.648Z
updatedAt: 2021-07-06T18:27:09.787Z
publishedAt: 2021-07-06T18:27:09.787Z
firstPublishedAt: 2021-07-06T17:47:38.919Z
contentType: tutorial
productTeam: Post-purchase
author: 1malnhMX0vPThsaJaZMYm2
slug: como-criar-um-anexo-de-assinatura
locale: pt
legacySlug: como-criar-um-anexo-de-assinatura
subcategoryId: 1rA9wuuskW3PpjvMrhatAM
---

 >ℹ️ Caso você utilize o módulo de **Assinaturas Beta**, o caminho mais recomendado para criar um plano de assinatura é diretamente no módulo de **Assinaturas**. Leia o artigo [Como criar um plano de assinatura (Beta)](https://help.vtex.com/pt/tutorial/como-criar-um-plano-de-assinatura-beta--1qGRoFczm98Wgt81f9mUqC) para mais informações.

O **Anexo de SKU** é responsável por indicar que a funcionalidade de Assinatura está ativa para esse SKU, e também quais são as frequências disponíveis.

Quando o cliente da sua loja finaliza um pedido e seleciona uma assinatura, essas informações são enviadas ao **Gerenciamento de pedidos**, onde o sistema de **Assinaturas** consulta os detalhes e programa as compras futuras. 

Veja a seguir como criar um anexo de assinatura.

* [Criar um anexo de SKU](#criar-um-anexo-de-sku)
* [Configurar frequência e data do ciclo de assinatura](#configurar-frequencia-e-data-do-ciclo-de-assinatura)
* [Associar o anexo a um SKU](#associar-o-anexo-a-um-sku)

### Criar um anexo de SKU

Para criar um anexo de SKU, siga os passos descritos abaixo.

1. Acesse o módulo do **Catálogo**.
2. Clique na seção **Anexos**.
3. Na aba de **Serviços e SKUs**, clique em `Novo anexo`.
4. Cadastre no campo **Nome** um valor no formato `vtex.subscription.{sufixo}`, em que `{sufixo}` precisa ser substituído pelo nome que você deseja utilizar para diferenciar essa assinatura, como nos exemplos a seguir:
     * `vtex.subscription.plano1`
     * `vtex.subscription.teste`
5. Deixe a caixa de seleção **Anexo obrigatório** desmarcada.

 >⚠️ O campo **Anexo obrigatório** não pode ser marcado. Se o anexo for marcado como obrigatório, o sistema de **Assinaturas** tenta enviar um pedido com assinatura para um item que já possui um anexo obrigatório, gerando um erro no sistema. Caso isso ocorra por engano, desmarque a obrigatoriedade do anexo e, em seguida, solicite ao cliente da sua loja uma nova tentativa de realizar o pedido.

6. Em **Status**, marque a caixa de seleção **Ativa/Desativa o anexo** e clique em `Salvar`.

### Configurar frequência e data do ciclo de assinatura

Após criar o anexo do SKU, você precisa configurar a **frequência** e a **data do ciclo de assinatura**.

A frequência é a periodicidade permitida para a assinatura. Este valor será exibido para que o cliente da loja escolha entre as opções de frequência de assinatura cadastradas para aquele SKU. É possível configurar a frequência da Assinatura para realizar pedidos diariamente, semanalmente, mensalmente ou anualmente, dependendo da sua estratégia de negócio.

Associada à frequência definida anteriormente, a data do ciclo de assinatura corresponde ao dia em que o pedido será repetido a cada ciclo de assinatura. Exemplo: o seu cliente pode escolher uma assinatura para comprar ração para gatos no dia 15 de cada mês. Nesse caso, 15 é a data do ciclo de assinatura e a frequência é mensal.

Siga o passo a passo abaixo para configurar as frequências e datas de ciclo de assinatura disponíveis. Os valores que você configurar serão exibidos no checkout para que o cliente da sua loja possa escolher qual a melhor frequência e data do ciclo.

1. Na página de **Anexos** > **Serviços e SKUs**, clique no botão `Alterar`, ao lado do anexo que você criou.
2. No campo **Nome da chave**, insira os valores fixos `vtex.subscription.key.frequency`, que corresponde à **frequência**, e `vtex.subscription.key.purchaseday`, que corresponde à **data do ciclo de assinatura**.
3. Defina os **Valores Permitidos** para cada chave de acordo com as frequências e datas que você deseja disponibilizar na loja.

   * Para a **frequência** (`vtex.subscription.key.frequency`), são permitidas as seguintes unidades: `day`, `week`, `month`, `year`. Deve haver um espaço entre o número e a frequência.

        **Exemplos de preenchimento**: `3 week` ou `8 month` ou `1 year` ou `7 day`. Caso você queira disponibilizar ao seu cliente a opção de assinar o item diariamente, você pode preencher com `1 day`. Caso você queira disponibilizar a opção de assinar um item a cada duas semanas, você pode preencher o campo  com `2 week`.

        Você pode disponibilizar múltiplas opções de frequência, se desejar. Nesse caso, você deve separar os valores com uma vírgula. Por exemplo: se quiser oferecer uma opção de assinatura mensal e outra semanal, será preciso preencher o campo da seguinte forma: `1 month,1 week`.

    * Para a **data do ciclo de assinatura** (`vtex.subscription.key.purchaseday`), o campo **Valores Permitidos** precisa seguir o padrão número para **Assinaturas** com frequência mensal ou semanal.

        * **Semanalmente**: os valores possíveis de preenchimento deste campo são = `0`, `1`, `2`, `3`, `4`, `5`, e `6`, equivalentes aos dias da semana. Considere `0` = domingo , `1` = segunda, `2` = terça, e assim sucessivamente até `6` = sábado. Separe os  valores por `,`, conforme ilustrado abaixo.

        ![PT Assinatura Exemplo Valores week](https://images.ctfassets.net/alneenqid6w5/20va8G0uiw3jpHKM2a99Al/7ef796fd84e1328bcc0b6f637bdc30f1/PT_Assinatura_Exemplo_Valores_week.png)

        * **Mensalmente**: os valores possíveis de preenchimento deste campo no checkout são = `1`, `2`, `3`, (...) até `28`, que são equivalentes aos dias do mês. Considere `1` = primeiro dia do mês, `2` = segundo dia do mês, e assim sucessivamente até `28` = vigésimo oitavo dia do mês. Separe os  valores por `,`, conforme ilustrado abaixo.

        ![PT Assinatura Exemplo Valores month](https://images.ctfassets.net/alneenqid6w5/3ogGjc6DLexe7YeL3qyiuI/748b3dd8e63870c539b58f3404521031/PT_Assinatura_Exemplo_Valores_month.png)

>ℹ️ Caso nenhum valor seja inserido no campo **Valores Permitidos**, a data do ciclo de assinatura será o mesmo dia da semana (caso a frequência seja semanal) ou dia do mês (caso a frequência seja mensal) do pedido original.

### Associar o anexo a um SKU

Após criar o anexo de SKU e configurar as frequências e datas do ciclo necessárias, você precisa associar o anexo criado a um ou mais SKUs existentes.

1. No módulo de **Catálogo**, acesse **Produtos e SKUs**.
2. Selecione o SKU que você deseja habilitar para assinatura.
3. Acesse a aba **Configurações Avançadas**.
4. Associe o anexo de assinatura que você criou, marcando a caixa de seleção.
5. Clique em `Salvar`.

#### **SAIBA MAIS**

* [Como configurar Assinaturas na sua loja](https://help.vtex.com/tutorial/como-configurar-assinaturas--1FA9dfE7vJqxBna9Nft5Sj)
