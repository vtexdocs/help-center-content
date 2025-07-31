---
title: 'Personalizando a tipografia da sua loja'
id: 2R0ByIjvJtuz99RK3OL5WP
status: PUBLISHED
createdAt: 2022-01-17T20:32:00.917Z
updatedAt: 2024-09-03T16:02:42.101Z
publishedAt: 2024-09-03T16:02:42.101Z
firstPublishedAt: 2022-01-17T21:12:52.262Z
contentType: tutorial
productTeam: VTEX IO
author: 1DedyaVUPp5wLAvjY7wKKv
slugEN: customizing-your-stores-typography
locale: pt
legacySlug: personalizando-a-tipografia-da-sua-loja
subcategoryId: 5HsDDU48ZP58JHWU3WbCPc
---

A tipografia da sua loja online é uma ferramenta para mostrar a identidade de sua marca para os seus clientes. 

No Admin, você tem flexibilidade para personalizar a tipografia da sua loja de acordo com as necessidades de seu negócio.

<div class="alert alert-warning">
  <p>Lembre-se de que as mudanças realizadas na tipografia da sua loja no <b>Storefront</b> substituem as mudanças de tipografia feitas no código da loja. Por favor, entre em contato com sua equipe de desenvolvimento e certifique-se de que essas mudanças serão definidas no Storefront ou pelo código da sua loja.</p>
</div>

## Adicionar famílias de fontes personalizadas

1. No Admin VTEX, acesse **Storefront > Estilos**.

2. Selecione o ícone kebab (três pontos).

3. Clique em **Editar > Tipografia > Família de fontes**.

4. Clique em **Adicionar fonte personalizada**.

5. No campo **Família de fontes**, crie um nome para a fonte.

    ![familia-de-fontes-giff-pt](https://images.ctfassets.net/alneenqid6w5/5GVDDJvzXVmlkEbU1OHPoR/d3a05b339370de4be136cc16685a0a99/familia-de-fontes-giff-pt.gif)

6. Clique em **Enviar** para fazer o upload do arquivo da fonte desejada.

<div class="alert alert-warning">
  <p>O arquivo da família de fontes deve ter uma das seguintes extensões: <i>.ttf</i> ou <i>.woff</i>.</p>
</div>

7. Após finalizar o upload dos arquivos, escolha um estilo para as fontes. Os valores aceitos são: `Thin`, `Extra Light`, `Light`, `Regular`, `Medium`, `Bold`, `Extra Bold`, `Black`, `Thin Italic`, `Extra Light Italic`, `Light Italic`, `Regular Italic`, `Medium Italic`, `Bold Italic`, `Extra Bold Italic` e `Black Italic`.

8. Clique em `Salvar`.

## Configurando os tokens de tipo

Após adicionar novas famílias de fontes, você pode aplicá-las ao conteúdo de texto da sua loja utilizando **Tokens de tipo**.

A opção **Tokens de tipo** exibe todo o conteúdo de texto da sua loja que pode ser personalizado. Veja o que você pode personalizar usando os tokens de tipo:

- **Headings (Cabeçalhos):** são os primeiros elementos que os usuários leem e dão informações da maneira mais eficiente, não usando mais do que a quantidade necessária de palavras. Há seis cabeçalhos. O 'Heading 1' (Cabeçalho 1) é o estilo de cabeçalho mais comum, e 'Heading 6' (Cabeçalho 6) é o menos comum.

- **Body (Corpo):** é o estilo de texto definido para alcançar a legibilidade do parágrafo, acrescentando o espaçamento entre as linhas. Existe um tipo de corpo.

- **Auxiliary small/mini (Auxiliar pequeno/mini):** são elementos secundários de uma interface, como legendas e texto em badges. Existem dois tipos de auxiliares: pequeno e mini.

- **Action (Ação):** é o estilo de texto usado na ação principal da página e elementos interativos, tais como call to action (CTA), botões e abas. Existem três tipos: `Action` (Ação), `Action Small` (Ação Pequena) e `Action Large` (Ação Grande).

- **Code (Código):** é o estilo de texto usado para indicar termos técnicos, tais como linguagem de programação, estimativa de envio e regras de parcelamento. 

Siga as instruções a seguir para configurar tokens de tipo:

1. No Admin VTEX, acesse **Storefront > Estilos**.

2. Selecione o ícone kebab (três pontos).

3. Clique em **Editar > Tipografia > Tokens de tipo**.

    ![tokens-tipo-giff-pt](https://images.ctfassets.net/alneenqid6w5/6O5G4MOA0vGlFLEzdcRQDa/ffb592b26d8e7702b566ddc2731e76c7/tokens-tipo-giff-pt.gif)

4. Escolha o token que você deseja personalizar como, por exemplo, **Heading 1** (Cabeçalho 1), e clique nele.

5. Em seguida, personalize cada propriedade conforme a tabela abaixo:

    | Propriedade | Descrição | Valores disponíveís |
    | ----------- | --------------- | ----------------- |
    | __Font Family__ | Define o tipo de fonte de um token de tipo. | `JosefinSans`, `Bold`, `Default` |
    | __Font Weight__ | Define o quão grosso ou fino os caracteres do tipo token devem ser exibidos. | `Thin`, `Extra Light`, `Light`, `Normal`, `Medium`, `Semi Bold`, `Bold`, `Extra Bold`, `Black`.   |
    | __Tamanho da fonte__ | Define o tamanho da fonte de um token de tipo. | `48px`, `36px`, `24px`, `20px`, `16px`, `14px`, `12px`, |
    | __Transformação do texto__ | Define o uso de letras maiúsculas do token de tipo. | `Initial`, `None`, `Capitalizar`, `Caixa maiúscula`, `Caixa minúscula`, |
    | __Espaçamento das letras__ | Define o espaço entre os caracteres em um token de tipo. | `Normal`, `Tracked`, `Tracked Tight`, `Tracked Mega`, `Zero` |

6. Clique em `Salvar`.
