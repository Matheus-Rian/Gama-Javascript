# TypeScript

**1) O que é o TypeScript? No que ele diferencia do JavaScript?**

É um superset, ou seja, uma camada em cima do JavaScript, auxiliando na tipagem e contando com algumas funcionalidades extras. A tipagem em si é um dos principais diferenciais, já que JavaScript, por si só, não é uma linguagem tipada.

**2) É possível executar TypeScript no navegador?**

-Não, o navegador interpreta apenas HTML, CSS e Js

**3) Quais os pontos positivos de se utilizar TypeScript em um projeto? Quais os pontos negativos?**

Os positivos são as tipagens e as checagens enquanto desenvolvemos, sem contar os auxílios como intellisense e autocomplete. Os negativos são a complexidade, já que utilizar TS vai demandar uma configuração extra e também pode ser algo novo para uma pessoa que não está acostumada além dos possíveis erros não muito claros do compilador.

**4) O que é análise estática de código?**

Podemos pensar que é uma análise feita em um código em tempo de desenvolvimento, por exemplo, os feedbacks de erro de ferramentas como o compilador do TS (tsc) e o ESLint.

**5) Para quê são utilizados os Enums? O que eles geram no código final em JavaScript?**

É uma estrutura que atua como um objeto/constante, gerando um objeto no código final mas mantendo a estrutura do código TS com valores humanamente legíveis.

**6) O que são Union Types e como utilizá-los?**

É um operador que define diferentes valores a serem aplicados em uma tipagem, oferecendo múltiplas escolhas. Utiliza o caracter | para encadear possíveis tipos/valores a serem utilizados:

``` ts
type Pessoa = {
    name: string;
    age: string | number;
    role: 'user' | 'admin'
}
```
**7) O que são Intersection Types e como utilizá-los?**

É um operador que une diferentes Type Aliases. Utiliza o caractere & para fazer essa união:

``` ts
type Pessoa = {
    name: string;
    age: number;
}

type PossuiPets = {
    pets: string[];
}

type PessoaComPets = Pessoa & PossuiPets;

```

**8) O que são Type Aliases e como utilizá-los?**

Type Aliases é uma forma de construir uma tipagem mais complexa. Utiliza a palavra reservada type, seguido de um nome e da tipagem necessária.

``` ts
type Pessoa = {
    name: string;
    age: number;
}
```

**9) O que são interfaces e quais suas semelhanças com Type Aliases?**

São bem parecidas na questão de criar um tipo mais robusto. Entretanto, Interfaces possuem uma união implícita quando redeclaramos uma interface com o nome de uma já utilizada. Interfaces também são tipagens muito utilizadas quando relacionadas à Orientação à Objetos tradicional.

**10) Inicie um projeto com TypeScript. Configure-o para fazer compilar os arquivos dentro da pasta src. Essa pasta deverá conter um arquivo exemplificando os tipos que aprendemos:**

String
Number
Boolean
Array
Tuple
Null e Undefined
Any
Unknown
Void
Never
Object
Function
Union Types
Intersection Types
Type Aliases