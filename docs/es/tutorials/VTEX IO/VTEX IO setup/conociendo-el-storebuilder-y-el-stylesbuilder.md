---
title: 'Conociendo el StoreBuilder y el StylesBuilder'
id: 16r1nkCNqZI29V00JgmAlE
status: ARCHIVED
createdAt: 2019-03-07T21:45:31.460Z
updatedAt: 2020-03-13T21:25:01.256Z
publishedAt: 
firstPublishedAt: 2019-03-07T21:47:46.632Z
contentType: tutorial
productTeam: VTEX IO
author: 3aBBTLS9ZKO6IcY0Goe2y2
slugEN: understanding-storebuilder-and-stylesbuilder
locale: es
legacySlug: conociendo-el-storebuilder-y-el-stylesbuilder
subcategoryId: Z46a6rHVAaAucoiW0skQQ
---

![UI Blocks Voando.mp4](https://images.ctfassets.net/alneenqid6w5/4VRam6UukpPhsCBMtrhBbv/60bb012cd676ebcc8b8805de021529db/UI_Blocks_Voando.mp4.gif) 

Esta documentación se ha estructurado para explicar los conceptos detrás del StoreBuilder y StyleBuilder de la Store 2.xx. Durante toda la documentación, utilizaremos la DreamStore (una tienda template que utiliza la `Store 2.xx`) para entender los principales conceptos que le permitirán estructurar y estilizar su tienda.

__Términos importantes:__

Store o Store 2.xx: Un sistema que permite que tiendas ("theme apps") sean completamente construidas utilizando `builders`. A pesar de que no se utiliza directamente en el desarrollo, será útil para realizar un [download](https://github.com/vtex-apps/store/tree/2.x) y entender cómo funciona.

- __Builder__: un archivo `.json` que se procesa e interpreta por IO

- __StoreBuilder__: un builder responsable de definir la estructura de bloques, rutas y contenido.

- __Bloques__: objetos JSON dentro de builders.

- __Interfaces__: colecciones de bloques con restricciones que explican para los builders cómo organizar los bloques.

- __DreamStore 2.XX__: una app template que se puede descargar desde [nuestro repositorio de código abierto](https://github.com/vtex-apps/dreamstore/tree/2.x)

> __DreamStore es una aplicación template (una tienda) que utiliza StoreBuilder y StyleBuilder de la Store 2.xx para organizar rutas, estructura, contenido y estilo.__

La Store 2 hace grandes cambios de paradigma en la Store 1, introduciendo el concepto de __bloques, interfaces y builders__.

Vamos a mirar dentro del `/manifest.json` de DreamStore para ver lo que nuestra aplicación necesita para funcionar correctamente:

![Screen Shot 2019-01-25 at 16.40.06](//images.ctfassets.net/alneenqid6w5/xQg8Ok5B1SbpKnACXsT7E/0d796fc2af346e1e9caf71eca3f6ec43/Screen_Shot_2019-01-25_at_16.40.06.png)

Observe cómo tenemos dos builders especificados:

(Por ejemplo
"builders": {
"styles": "0.x",
"store": "0.x"
}


Si se desplaza hacia abajo, podemos ver que estamos importando varias `dependencias`. __La más importante es el `vtex.store`__. Bloques adicionales se pueden agregar a nuestra dependencia según sea necesario.

Como cualquier theme app (una tienda) hace uso de la aplicación `Store` (a través de la dependencia `vtex.store`) es importante separar algunos minutos para [descargarla](https://github.com/vtex-apps/store/tree/2.x) y entenderla bien.


## Visualizando la DreamStore

Ejecute "vtex link" y envie la app DreamStore a un workspace para que podamos estudiarla.

![Screen Shot 2019-01-27 at 22.24.47](//images.ctfassets.net/alneenqid6w5/6yCpuWYPBSqCIBkuv9oW14/47963f20fa8e85d76e57713a241eb583/Screen_Shot_2019-01-27_at_22.24.47.png)

Si está familiarizado con React o otros frameworks modernos de Javascript, usted estará familiarizado con el concepto de componentes en una página web. Como podemos observar, nuestra página web tiene un "header", un "carrusel" y un "estante". ¿Cómo se insertaron estos componentes?


## Mirando dentro de la aplicación DreamStore
Vaya a la aplicación DreamStore y ábrala con su editor de código favorito.

Nuestra aplicación DreamStore contiene tres archivos que tratan el 100% de toda la estructura, funcionalidad y estilo de su tienda.

#### Abra `/store/blocks.json`

//blocks.json
```
{
  "store.home": {
    "blocks": [
      "carousel#home",
      "shelf#home"
    ]
  },
```

El objeto JSON arriba define un objeto llamado store.home. Él hereda todos los bloques de `store` y añade el carrusel y el estante. Recuerda de cómo `manifest.json` tenía antes `"vtex.store": "2.0.0-beta.11", ...` dentro de sus dependencias?

`shelf # home` significa que una versión específica de un carrusel con el ID `home` fue creada sólo para `store.home`. Esto es particularmente útil cuando se reutiliza `shelf` en diferentes contextos en diferentes lugares de la tienda.

Como se puede notar, el `store.home` no parece contener una búsqueda o un header. ¿De dónde surgió?

Para entender mejor esto, debemos observar cómo funciona la aplicación `Store 2.xx`.


## La aplicación `Store 2.xx`

_Tenga en cuenta que usted no estará desarrollando en la aplicación Store 2, pero estará desarrollando una tienda (aplicación de tema) que heredará muchos atributos de la `store`._

Vamos a mirar dentro del archivo `/manifest.json` de la Store2.xx para ver lo que importa la aplicación.

![Screen Shot 2019-01-25 at 17.18.56](//images.ctfassets.net/alneenqid6w5/1E61SoeL536WyC8OIIi5YR/31e433f5cd9ed495e4cde33aa09d5faa/Screen_Shot_2019-01-25_at_17.18.56.png)

Podemos ver que es una estructura similar a la del `manifest.json` de la `Dreamstore`.

Como podemos ver la "vtex.store" importó la aplicación Store, que a su vez importó builders y dependencias críticas que nos permiten crear una tienda totalmente funcional.

Todos los componentes de una tienda de e-commerce se han convertido en bloques y todos están listos para ser utilizados por usted a través de los builders.

Ahora que entendemos como la Store2.xx le permite utilizar tantos componentes, es hora de entender cómo se organizan y se comunican entre sí.

## Rutas
Abra `/store/routes.json`.

Aquí podemos encontrar el ya conocido `store.home`.

```{
  "store.home": {
    "path": "/"
  },
  ```

El bloque de código anterior muestra que `store.home` es nuestra página de inicio, ya que su ruta está definida como `/`.

Más abajo, podemos ver que el próximo bloque tiene una propiedad adicional:

```
  "store.account": {
    "auth": true,
    "path": "/account"
  },
```

Tenga en cuenta que simplemente añadiendo `auth` y definiéndolo como 'true', implementamos un sistema completo de login y cuenta en nuestra tienda.

> Observación muy importante: el bloque `store.home` se ha convertido en página simplemente añadiendo una ruta dentro de `routes.json`.

Ahora vamos a explorar cómo los bloques dentro de una página se organizan.


## Interfaces y bloques
__Como cada página es definida por bloques y organizada por interfaces__, es hora de profundizarnos más y desarrollar nuestra comprensión.

Abra la carpeta `store` y después el archivo `interfaces.json`.

### Interfaces
![Screen Shot 2019-01-25 at 17.35.10](//images.ctfassets.net/alneenqid6w5/7oDltXNQMdYZ2uPTsk5b4G/97ff30d86ab194a331d9f2c2ef8d5c95/Screen_Shot_2019-01-25_at_17.35.10.png)

Una interfaz es un conjunto de `blocks` y existe exclusivamente dentro de la `Store2.xx`. Sirve como un contrato entre los bloques y determina cómo van a trabajar juntos.

Estos bloques se definen dentro de una matriz y se clasifican en 5 tipos diferentes:

- __Around:__ generalmente no es un componente visible. Un ejemplo sería un píxel de rastreo de Google Analytics o un wrapper.
- __Before:__ le dice a StoreBuilder que el bloque mencionado tiene prioridad y será visualmente ordenado desde arriba. Un ejemplo sería un header o una barra de navegación.
- __After:__ le dice a StoreBuilder que el bloque se encuentra después. Un ejemplo común son los pies de página.
- __Allowed:__ define qué bloques son permitidos por la tienda.
- __Required:__ lista bloques que son absolutamente obligatorios. El incumplimiento de este contrato bloqueará la aplicación en el build.

Vamos a seguir analizando el `store.home`. Tenga atención a los comentarios inline.

```
{ 
/
  "store": {
//Aquí, declaramos un componente invisible que servirá como un appshell, rellenando con contenido dinámicamente
    "around": [
      "storeWrapper"
    ],
    //El código abajo fuerza un header dentro de todo block `store`. Esto explica cómo nuestra página principal tenía un header incluso cuando no estaba explícito en la DreamStore.
    "before": [
      "header"
    ],
    "after": [
      "footer"
    ],
    "allowed": [
      "carousel",
      "shelf",
      "rebuy",
      "address-manager"
    ],
    //Preview es el tipo de animación de carga mientras se carga el contenido.
    "preview": {
      "type": "block"
    }
  },
//`store.home` se crea, heredando todos los bloques del bloque `store` 
  "store.home": {
  // un homeWrapper se ha añadido en conjunto con el `storeWrapper`
    "around": [
      "homeWrapper"
    ],
    //Vamos a usar una versión específica del header del `store` llamado `header.full`.
    "before": [
      "header.full"
    ],
    "allowed": [
      "search-result"
    ]
  },
```

Si descendemos podemos ver los mismos objetos JSON definiendo y configurando la organización de la página. Otro ejemplo es la página de resultados de la búsqueda:
![Screen Shot 2019-01-25 at 18.22.12](//images.ctfassets.net/alneenqid6w5/1xXBCG7xjBUz1CEmHVoOhc/cf0bf48f2653f8688c97fd20f0d16287/Screen_Shot_2019-01-25_at_18.22.12.png)

La información describe la siguiente información de interfaz:

- Permite que un bloque searchWrapper esté presente en todo el contenido;
- Inserta en la parte superior una versión `completa` del bloque `header` y garantiza que estará presente en la parte superior. Es interesante saber que los bloques pueden ser específicos para contextos específicos. Ejemplo: tenga un header más fino y menos ostentoso en la página de checkout;
- Define que un bloque `search-result` es obligatorio y debe estar presente en el bloque `search`;
- `Context` se utiliza para llamar a `SearchContext`, una función React responsable de manipular consultas de búsqueda.


## Configuración de nuestra DreamStore

Hasta ahora, entendemos que:

- Todo está configurado como bloque, incluyendo páginas web que son bloques con rutas definidas;
- DreamStore (nuestra aplicación template) hereda bloques de la aplicación Store;
- Store app tiene un archivo llamado `interface.json`, que sirve como un contrato entre los bloques.

Es hora de visitar el archivo blocks.json de Dreamstore y entender cómo todo el sitio puede ser reordenado y configurado a través de un solo archivo .json.

### Estructurando y configurando nuestra tienda con el `StoreBuilder`

![Codigo voando blocks.mp4](//images.ctfassets.net/alneenqid6w5/7FiPuNIljcVgvS8zIwKD5f/7f5b67d4f7314afc404680a96e5f3680/Codigo_voando_blocks.mp4.gif)

Abra `/ blocks.json` y encuentre nuestro ya conocido `store.home`. Vamos a empezar analizando el primer bloque dentro de `store.home : carrossel#home`.

Desplácese hacia abajo hasta que encuentre `carrossel#home`. A través de `props` podemos configurar nuestro `carrossel#home` y ajustar sus propiedades.

Es fácil ver cuán poderoso el constructor de tiendas puede ser cuando añadimos `ids` a nuestros bloques a través de `#` y los ajustamos con props.

```
"carrossel # home": {
    "inheritComponent": true
    "adereços": {
      "autoplay": true
      "autoplaySpeed": 4,
      "banners": [],
      "altura": 440,
      "showArrows": true
      "showDots": true
    }
  }, 
  ```

### Estilizando nuestra tienda con el `StylesBuilder`
![StyleBuilder.mp4](//images.ctfassets.net/alneenqid6w5/5a9gZSPvWcVRIzdEbVo3k2/7ae4968655fa1a1919da1612fc490761/StyleBuilder.mp4.gif)


El StylesBuilder es simple de entender porque toma su archivo styles.json durante el build y utiliza el generador de [Tachyons](https://tachyons.io/) para producir el CSS de su tienda.

Diseñamos el StylesBuilder para ser extremadamente intuitivo y autoexplicativo. Es tan simple como ajustar los códigos hexadecimales adecuadamente y ver los resultados en toda la tienda.

![Screen Shot 2019-01-28 at 00.40.17](//images.ctfassets.net/alneenqid6w5/3JswKIv8jfYAyZCgmhfZhB/8208650f2907bb300e1ae83199490892/Screen_Shot_2019-01-28_at_00.40.17.png)

