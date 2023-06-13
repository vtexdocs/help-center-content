---
title: Cadastrar geolocalização
id: tutorials_138
status: PUBLISHED
createdAt: 2017-04-27T22:17:36.462Z
updatedAt: 2023-03-29T13:25:16.724Z
publishedAt: 2023-03-29T13:25:16.724Z
firstPublishedAt: 2017-04-27T23:00:44.871Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slug: gerenciar-geolocalizacao
legacySlug: gerenciar-geolocalizacao
subcategory: 5ckGPo3O5OG4AESKucmAaS
---

Geolocalização é o cadastro das localizações de entrega a partir da latitude e longitude dos endereços. Por meio dela, podemos montar polígonos para um atendimento logístico específico, normalmente utilizado em zonas rurais e industriais, onde há divisão por lotes, por exemplo, ou em áreas de risco, onde se faz necessário excluir determinados locais dentro de uma mesma região.

Sua estruturação é dinâmica. A região a ser delimitada pode ser fácil e literalmente desenhada no mapa. O polígono criado será usado na planilha de frete que é cadastrada na transportadora.

### Como gerar um polígono

Acessando o link [Gere seus polígonos com geojson.io](http://geojson.io/#map=2/20.0/0.0), aparecerá o mapa onde é possível desenhar a área que sua loja deseja atender. À medida que o desenho do polígono é feito, a tela da direita exibe o código JSON correspondente à área desenhada. É através desse código JSON que o sistema entenderá o local de entrega.

1. No Admin VTEX, acesse **Configurações da loja > Envio > Envio por geolocalização**, ou digite *Geolocalização* na barra de busca no topo da página.   
3. Clique no link **Gere seus polígonos com geojson.io**.  
4. Encontre no mapa a região em que será feita a entrega.  
5. Selecione a opção **Draw a polygon** ou **Draw a rectangle**. Essas opções ficam abaixo da lupa, no lado direito do mapa.  
6. Clique no mapa no local onde deseja que fique o primeiro ponto do polígono, e continue clicando para desenhar a área, de forma que a última linha encontre o primeiro ponto.
7. Com o polígono pronto, copie o JSON que fica na tela da direita e guarde-o em um arquivo.

Esse JSON será usado para adicionar o polígono na plataforma, que entenderá a partir dessa linguagem quais códigos postais estão inclusos nessa área.

### Como adicionar um polígono

Ao adicionar um polígono, é preciso nomeá-lo, de modo que ele seja identificado na planilha de frete, para que depois possa ser consultado por meio do código postal.

1. No Admin VTEX, acesse **Configurações da loja > Envio > Envio por geolocalização**, ou digite *Geolocalização* na barra de busca no topo da página.    
2. Clique no botão **Adicionar novo Polígono**.    
3. Digite no campo **ID** qualquer informação em formato de string (letra ou número) sem espaço, de forma que ela identifique o polígono e a área que ele atende. Exemplo: `ZonaLeste1`.  
4. Em coordenadas, cole o JSON copiado no passo anterior, a partir do segundo colchete depois do item **coordinates**, de forma que no início do código existam dois colchetes, assim como no final. Veja o exemplo abaixo.
5. Clique no botão **Salvar**.  

Exemplo:

```
[
[-43.199872970581055,-22.95491586987507],
[-43.18270683288574,-22.950331824285765],
[-43.16760063171387,-22.959736853678606],
[-43.18777084350586,-22.973013428819623],
[-43.199872970581055,-22.95491586987507]
];
```

Pronto, agora é só usar esse mesmo ID para preencher a coluna **PolygonName** da [planilha de frete](http://help.vtex.com/tutorial/como-montar-a-planilha-de-frete/).

<div class="alert alert-warning">É importante atentar para o fato de que, no caso de você usar geolocalização, preenchendo portanto a coluna <b>PolygonName</b> da planilha de frete, a transportadora em questão não usará as colunas <b>ZipCodeStart</b> e <b>ZipCodeEnd</b>, que deverão ser preenchidas com 0.
</div>

   Lembre-se também que para que a geolocalização funcione, deve estar preenchido o campo API Key em **Configurações da loja > Storefront > Checkout**, [na aba Checkout](https://help.vtex.com/pt/tutorial/geolocalizacao-no-checkout/), com a mesma chave que utilizou para habilitar a geolocalização.

Habilite também todas as APIs do Google Cloud Platform para garantir o funcionamento da chave:

*   [Geocoding API](https://developers.google.com/maps/documentation/geocoding/overview)
*   [Places API](https://developers.google.com/maps/documentation/places/web-service/overview)
*   [Maps JavaScript API ](https://developers.google.com/maps/documentation/javascript/overview)

### Como editar um polígono

Caso precise alterar algum local de entrega de um polígono já existente, é possível editá-lo. Para isso, siga os passos abaixo.

1. No Admin VTEX, acesse **Configurações da loja > Envio > Envio por geolocalização**, ou digite *Geolocalização* na barra de busca no topo da página.     
2. Clique em **Editar** no polígono desejado.
3. Clique no link **Gere seus polígonos com geojson.io**.
4. Refaça o desenho no mapa.
5. Copie as coordenadas.
6. Clique no link **Alterar Coordenadas**, que fica logo abaixo do campo de Coordenadas.
7. Cole os novos valores.
8. Clique no botão **Salvar**.

Depois disso, não será necessário alterar nenhuma informação na planilha de frete, visto que o ID do polígono continua o mesmo, e é por meio dele que o sistema faz a consulta.

<div class="alert alert-warning">
  Caso a transportadora e planilha de frete tenham sido criadas antes de cadastrar o Polígono, recomendamos que seja editada a transportadora que tem vínculo com esse Polígono, para atualizar o relacionamento. Com isso após a Criação ou Alteração de um Poligono, abra a transportadora e clique em Salvar, somente para sensibilizar uma atualização.
</div>
