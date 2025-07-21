---
title: 'Novas regras no formulário de promoções'
id: 6Waqgi9CTOvHlwr0CBcjlI
status: PUBLISHED
createdAt: 2025-03-10T11:12:54.341Z
updatedAt: 2025-03-11T16:25:14.071Z
publishedAt: 2025-03-11T16:25:14.071Z
contentType: updates
productTeam: Others
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: 2025-03-10-new-rules-in-promotion-forms
locale: pt
legacySlug: novas-regras-no-formulario-de-promocoes
announcementImageID: ''
announcementSynopsisPT: 'Novas regras no formulário de promoções garantem mais precisão na configuração, reduzindo erros.'
---

Implementamos melhorias nos formulários de promoção para garantir maior precisão e consistência na configuração de promoções, e reduzir casos de erros. As principais mudanças incluem ajustes nos limites de caracteres, novas regras para condições e restrições para descontos progressivos, e ofertas do tipo Compre Junto.

## O que mudou?
As atualizações incluem:

**Validações para informações gerais**
- **Nome da promoção:** novo limite máximo de 150 caracteres.
- **Descrição:** novo limite máximo de 10.000 caracteres.
- **Data de término:** deve ser posterior à data atual.

**Novas regras para condições de promoções**
- Cluster de clientes deve seguir um dos formatos abaixo:
    - *`field=value`*
    - *`field contains value`*
- UTMs agora aceitam apenas letras, números, hífens e sublinhados.
- Cupons criados a partir de UTMs: não é permitido nomear cupons como **new**, pois isso gera uma URL inválida.
- Cupons criados a partir de UTMs eram limitados com base no **maxItemsPerClient** (o cliente podia comprar até uma determinada quantidade de produtos, utilizando esse cupom em uma ou mais compras). Agora, os cupons são restritos pela **maxUsage** (a quantidade total de vezes que um cupom pode ser usado na loja).
- Local de envio, o CEP final deve ser maior que o CEP inicial do intervalo.

**Regras para descontos e ofertas Compre Junto**
Descontos progressivos:

- Descontos repetidos não são permitidos.
- Se um desconto for aplicado a uma quantidade específica de itens, as quantidades manterão o mesmo desconto, a menos que um novo intervalo seja configurado.

**Ofertas Compre Junto**
- Os SKUs das listas 1 e 2 devem ser diferentes.
- Nenhum SKU repetido na Lista 2 receberá desconto devido à forma como o processamento é executado:

1. São verificados os SKUs da Lista 1, associando-os aos itens do carrinho e removendo-os da lista.
2. Em seguida, são processados os SKUs da Lista 2 para aplicação dos descontos.
3. Se um SKU já foi removido na primeira etapa (por estar na Lista 1), ele não é encontrado na Lista 2 e, por isso, não recebe o desconto.

## O que precisa ser feito?
Nenhuma ação é necessária, as melhorias são aplicadas automaticamente aos novos formulários das lojas VTEX. 

Para mais informações, acesse as seguintes documentações:

- [Compre Junto](/pt/tutorial/compre-junto--tutorials_323)
- [Compre e Ganhe](/pt/tutorial/compre-e-ganhe--tutorials_322)
- [Desconto progressivo](/pt/tutorial/desconto-progressivo--tutorials_324)
- [Leve Mais por Menos](/pt/tutorial/leve-mais-por-menos--tutorials_325)
