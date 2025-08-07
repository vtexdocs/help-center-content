---
title: 'Compreenda o valor da receita aprovada'
id: tutorials_4322
status: PUBLISHED
createdAt: 2017-04-27T21:51:05.741Z
updatedAt: 2025-02-28T13:48:02.348Z
publishedAt: 2025-02-28T13:48:02.348Z
firstPublishedAt: 2017-04-27T23:11:15.957Z
contentType: tutorial
productTeam: Billing
author: 46G4yHIZerH7B9Jo0Iw5KI
slugEN: understanding-the-value-of-approved-revenues
locale: pt
legacySlug: compreenda-o-valor-da-receita-aprovada
subcategoryId: 2t00bBkcAwIkgSCGKsMOwY
---

Para a VTEX, todo pedido financeiramente aprovado, tem seu valor total  considerado como receita, incluindo o frete e imposto aplicado sobre o preço final do produto. Todos os pedidos que passam por esse status são considerados na fatura, independentemente de cancelamentos ou devoluções subsequentes.

## 1. Entenda o que é considerado receita na VTEX
Para entender a fatura, é importante compreender o conceito de receita. Na VTEX, considera-se receita todos os pedidos que possuem a marcação de **aprovado** no módulo Pedidos. Isso inclui:

- O valor total do pedido incluindo frete e impostos.
- Pedidos cancelados, incluindo aqueles rejeitados por antifraude.
- Testes de compra. 

Em todos os casos citados, toda a infraestrutura da plataforma foi utilizada, já que este é o estágio em que o cliente conclui o processo de compra, por isso estes pedidos são considerados na receita.

### Identifique quando um pedido é marcado como aprovado
A marcação de um pedido como aprovado acontece no momento da autorização do pagamento. O processo varia conforme o meio de pagamento utilizado no pedido:

- **Cartão de crédito:** a marcação ocorre quando a adquirente valida o saldo e os dados do cartão.
- **PIX e Boleto:** a marcação ocorre somente após a confirmação de pagamento.

Uma vez marcado como aprovado, a VTEX não considera mais alterações no pedido para fins de faturamento.

## 2. Extraia o relatório financeiro da fatura
O relatório financeiro contém **todos os pedidos aprovados** no período correspondente à fatura, considerando apenas o ambiente de onde foi exportado. Caso tenha múltiplos ambientes, será necessário extrair um relatório para cada um. Após a extração, o relatório será enviado para o seu email.

O relatório financeiro é gerado no módulo de **Faturas**, para extrair siga os passos abaixo:

1. No Admin VTEX, clique na inicial do seu nome no canto superior direito.
2. Clique em  **Informações de Faturamento > Faturas**, ou digite **Faturas** na barra de busca.
3. Selecione a fatura desejada.
4. Clique em `Relatório Financeiro`.

<div class = "alert alert-info">
O relatório financeiro é estático e não sofre alterações após sua geração. Você pode acessá-lo a qualquer momento para conferir a receita.
</div>

## 3. Analise e manipule o relatório financeiro
O relatório financeiro está no formato **.csv** e apresenta diversas colunas que detalham cada pedido. Para validar os valores da sua fatura, aplique **filtros nas colunas** do relatório, conforme os critérios abaixo:

### Filtre e calcule o GMV transacionado
Use a função `=SOMASE` no Excel para calcular o total de pedidos em diferentes cenários:

| Tipo de Receita                           | Filtros Aplicados                                                     | Coluna Somada                        | Descrição                                                        |
|-------------------------------------------|-----------------------------------------------------------------------|--------------------------------------|------------------------------------------------------------------|
| Certified Marketplace                     | `IsCertifiedMarketplace (Q) = Verdadeiro (T)`                         | `Value STR (G)` (formato brasileiro) | `Value STR` contém o valor de cada pedido no formato brasileiro. |
| External Seller                           | `IsExternalSeller (S) = Verdadeiro (T)`                               | `Value STR (G)`                      | `G` indica a coluna usada para a soma.                           |
| B2B                                       | `IsB2B (O) = Verdadeiro (T) e IsCertifiedMarketplace (Q) = Falso (F)` | `Value STR (G)`                      | `O` e `Q` são colunas do relatório.                              |
| B2C                                       | `BillingType (O) = B2C`                                               | `Value STR (G)`                      | Os filtros são aplicados por coluna.                             |
| Internal Certified Seller & Child Account | `IsInternalCertifiedSellerAndIsChildAccount (AF) = Verdadeiro (T)`    | `Value STR (G)`                      | `T` e `F` indicam valores booleanos (True ou False).             |

Esses filtros permitem segmentar os dados e garantir que cada categoria de pedido seja contabilizada corretamente na fatura.

## 4. Correlacione os dados do relatório financeiro com os do módulo Pedidos
Apesar do relatório financeiro ser a fonte oficial para validação das faturas, você pode correlacionar essas informações com o relatório de pedidos para obter mais detalhes sobre os pedidos faturados.

### Exporte o relatório de Pedidos para conferência
Aqui, você verá o processo de extração do relatório gerado, incluindo os formatos disponíveis para download e como acessá-lo posteriormente.

1. No Admin VTEX, acesse Pedidos > Todos os pedidos ou digite Todos os pedidos na barra de busca.
2. Filtre a data de autorização do primeiro dia do mês desejado até o primeiro dia do mês seguinte, ambos às 00:00.
3. Clique em `Usar meu fuso horário` para desconsiderar o fuso.
4. Clique em `Aplicar`.
5. Clique em `Exportar`.

Após o download do relatório, use os **OrdersIDs** para correlacionar as informações com o relatório financeiro.
