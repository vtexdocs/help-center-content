---
title: 'Personalizando a tipografia da sua loja'
id: 2R0ByIjvJtuz99RK3OL5WP
status: PUBLISHED
createdAt: 2022-01-17T20:32:00.917Z
updatedAt: 2023-03-28T12:13:42.484Z
publishedAt: 2023-03-28T12:13:42.484Z
firstPublishedAt: 2022-01-17T21:12:52.262Z
contentType: tutorial
productTeam: VTEX IO
author: 1DedyaVUPp5wLAvjY7wKKv
slug: personalizando-a-tipografia-da-sua-loja
legacySlug: personalizando-a-tipografia-da-sua-loja
subcategory: 5HsDDU48ZP58JHWU3WbCPc
---

A tipografia da sua loja online é uma ferramenta para mostrar a identidade de sua marca para os seus clientes. 
No Admin, você tem flexibilidade para personalizar a tipografia da sua loja de acordo com as necessidades de seu negócio.

<div class="alert alert-warning">
  <p>Lembre-se de que as mudanças realizadas na tipografia da sua loja no <b>Storefront</b> substituem as mudanças de tipografia feitas no código da loja. Por favor, entre em contato com sua equipe de desenvolvimento e certifique-se de que essas mudanças serão definidas no Storefront ou pelo código da sua loja.</p>
</div>

## Adicionar famílias de fontes personalizadas

1. No Admin VTEX, acesse **Storefront > Styles (Estilos)**.
2. Selecione o ícone kebab (três pontos).

![Styles - Mais opções](//images.ctfassets.net/alneenqid6w5/7qhmfxaMzZ8Aw0F6mygs2i/e6f569468bccb9c85c309acd4b9fb066/styles-two-pt.png)

3. Clique em **Edit (Editar) > Typography (Tipografia) > Font Family (Família da fonte)**.

4. Depois, clique em **Add custom font (Adicionar fonte personalizada)** e faça o upload do arquivo da fonte desejada. No campo **Font Family (Família da fonte)**, crie um nome para a fonte.

<div class="alert alert-warning">
  <p>O arquivo da família de fontes deve ser baixado nas seguintes extensões de arquivo: <i>.ttf</i> ou <i>.woff</i>.</p>
</div>

5. Clique em `Save` (Salvar) para salvar as mudanças. 

## Mudar o estilo da fonte

Após adicionar novas famílias de fontes, você pode aplicá-las ao conteúdo de texto da sua loja. Entretanto, antes do passo a passo para mudar o estilo da fonte de sua loja, você precisa já conhecer sobre **Tokens de tipo**.

Consulte a seção [Tokens de tipo](#type-tokens) para obter mais informações sobre elas, e então verifique o passo-a-passo da mudança do estilo da fonte.

### Passo a passo

1. No Admin VTEX, acesse **Storefront > Styles (Estilos)**.
2. Selecione o ícone kebab (três pontos).
3. Clique em **Edit (Editar) > Typography (Tipografia) > Type Tokens (Tokens de tipo)**.

![Styles - Type tokens PT](//images.ctfassets.net/alneenqid6w5/6kw7SMB36fZsS0SKX00Kss/13e59fcc04d2034ff8e2c9928c165354/styles-three-pt.gif)

4. Escolha o tipo de ficha que você deseja personalizar como, por exemplo, **Heading 1** (Cabeçalho 1), e clique nele.

5. Em seguida, escolha qual propriedade do tipo ficha que você deseja personalizar:

| Propriedade | Descrição | Valor disponível |
| ----------- | --------------- | ----------------- |
| __Font Family__ | Define o tipo de fonte de um token de tipo. | `JosefinSans`, `Bold`, `Default` |
| __Font Weight __| Define o quão grosso ou fino os caracteres do tipo token devem ser exibidos. | `Thin', `Extra Light`, `Light', `Normal`, `Medium`, `Semi Bold`, `Bold`, `Extra Bold`, `Black`.   |
| __Tamanho da fonte__ | Define o tamanho da fonte de um token de tipo. | `48px`, `36px`, `24px`, `20px`, `16px`, `14px`, `12px`, |
| __Transformação do texto__ | Define o uso de letras maiúsculas do token de tipo. | `Initial`, `None`, `Capitalizar`, `Caixa maiúscula`, `Caixa minúscula`, |
| __Espaçamento das letras__ | Define o espaço entre os caracteres em um token de tipo. | `Normal`, `Tracked`, `Tracked Tight`, `Tracked Mega`, `Zero` |

6. Após realizar as mudanças em um token de tipo, clique em `Save` (Salvar) para exibir as mudanças em sua loja ao vivo.

### Tokens de tipo

A opção **Type Tokens** (Tokens de tipo) exibe todo o conteúdo de texto da sua loja que pode ser personalizado. 

Veja o que você pode personalizar usando os tokens de tipo:

- **Headings** (Cabeçalhos)
Eles são os primeiros elementos que os usuários leem e dão informações da maneira mais eficiente, não usando mais do que a quantidade necessária de palavras. Há seis cabeçalhos. O 'Heading 1' (Cabeçalho 1) é o estilo de cabeçalho mais comum, e 'Heading 6' (Cabeçalho 6) é o menos.

- **Body** (Corpo)
O corpo é o estilo de texto definido para alcançar a legibilidade do parágrafo, acrescentando o espaçamento entre as linhas. Existe um tipo de corpo.

- **Auxiliary (pequeno e mini)** (Auxiliar)
Eles são conhecidos como elementos secundários de uma interface, como legendas e texto em badges. Existem dois tipos de auxiliares: Pequeno e mini.

- **Action** (Ação)
Ação é o estilo de texto usado na ação principal da página e elementos interativos, tais como call to action (CTA), botões e abas. Existem três tipos: `Ação`, `Ação Pequena` e `Ação Grande`.

- **Code** (Código)
Código é o estilo de texto usado para indicar termos técnicos, tais como linguagem de programação, estimativa de envio e regras de parcelamento. Existe um tipo de corpo. 

