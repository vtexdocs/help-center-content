---
title: 'Crie um produto'
id: NgqTfNOte6KMsmWgasMIo
status: DRAFT
createdAt: 2018-05-02T20:51:24.416Z
updatedAt: 2020-05-21T23:48:43.076Z
publishedAt: 
firstPublishedAt: 2018-05-02T20:51:51.794Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slug: crie-um-produto
trackId: 7sORw9I7QIka24MCQaIO2g
trackSlugPT: vtex-getting-started
---

Antes de mais nada, é importante entender a diferença entre SKU e produto - esta diferença diz respeito à plataforma VTEX, mas também ao tratamento dado a esses conceitos pela maioria das operações de e-commerce.

<div class="alert alert-info">
<strong>SKU:</strong> a menor unidade possível dos itens vendidos na loja. Estoque e preço, por exemplo, são propriedades do SKU.
</div>

<div class="alert alert-info">
<strong>Produto:</strong> agregador de SKUs.
</div>

Veja os exemplos abaixo:

| Produto     | SKU 1     | SKU 2     | SKU 3     |
| ---------- | ---------- | ---------- | ---------- |
| __Calça jeans__       | Calça jeans P       | Calça jeans M       | Calça jeans G       |
| __Suco de laranja__       | Suco de laranja 300ml       | Suco de laranja 600ml       | Suco de laranja 1L       |

Na vitrine da loja, o cliente verá apenas o produto __Calça jeans__, e não três produtos separados: "Calça jeans P", "Calça jeans M" e "Calça jeans G". 
Já a gestão do seu estoque enxerga separadamente cada um dos SKUs que compõem esse produto. Assim ele consegue saber, por exemplo, que você tem 50 calças jeans M em estoque, mas apenas 2 calças jeans G.

<div class="alert alert-info">
<strong>Atenção</strong>: Sempre que for criar um SKU, você precisa antes criar o produto.
</div>

Vamos ver como criar o produto.

---

No módulo __Catalog__, siga os passos abaixo:

1. Passe o mouse na aba __Cadastro de Produtos__.
2. Vá até a opção __Produtos e SKUs__ e clique em __Cadastro de Produtos e SKUs__.![Produto1](//images.contentful.com/alneenqid6w5/4X1QYKrHz2ysAEAAW6gK6/85b81671add3f7573a9c4531b215ba82/Produto1.png)
3. Clique no botão __Adicionar Produto__.![Produto2](//images.contentful.com/alneenqid6w5/2HhkAREgQMMAkIMm8GaGgQ/7038413048c0611edb9079acd73020ba/Produto2.png)

Você será levado para a tela de cadastro de produto.

- Preencha o campo __Nome__ com o nome desejado para o produto.
- Preencha __Palavras substitutas__ com nomes que podem ser usados por engano por clientes em buscas internas ou sites de buscas, ou palavras que você deseja que apontem para esse produto. Por exemplo: o nome do produto pode ser "Geladeira", mas você pode desejar que buscas pelo nome "Refrigerador" também apontem para esse produto.
- Preencha __textLink__ com o texto que formará a URL do produto no site. Não são permitidos espaços nem acentuação.
- Preencha __Título da página (Tag Title)__ com o título que aparecerá na aba do navegador quando o usuário estiver na página do produto.
- No campo __Marca__, digite o nome da marca desse produto (possivelmente a que você criou no [passo anterior](/pt/getting-started/crie-uma-marca)) ou clique em __Busca avançada__ para buscá-la.
- Em __Categoria__, clique em __Selecionar categoria__ e clique no nome da categoria a que esse produto pertence.
- Marque a flag __Exibir no site__ para que a exibição do produto na loja fique ativa.

Para ver a lista completa de campos disponíveis nessa tela, veja o artigo [Campos de cadastro de produto](/pt/tutorial/campos-de-cadastro-de-produto).

Depois que terminar de preencher os campos, você encontra duas opções de salvamento:
- __Salvar:__ o cadastro do produto fica guardado, mas ele ainda não será exibido no site, porque não existe nenhum SKU atribuído a ele;
- __Salvar e cadastrar SKU:__ o cadastro do produto termina, e você é levado à tela de [configuração de SKU](/pt/getting-started/crie-um-sku) para criar um SKU que será atrelado ao produto que acabou de criar.
