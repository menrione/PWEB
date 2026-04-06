let num1 = prompt("Digite o primeiro número: ");
let num2 = prompt("Digite o segundo número: ");

    function soma () {
        let soma = parseFloat(num1) + parseFloat(num2);
        return soma;
    }

    function sub () {
        let subtracao = parseFloat(num1) - parseFloat(num2);
        return subtracao;
    }

    function prod (){
        let produto = parseFloat(num1) * parseFloat(num2);
        return produto;
    }

    function div (){
        let div1 = parseFloat(num1)/parseFloat(num2);
        return div;
    }

    function resto (){
        let resto = parseFloat(num1)%parseFloat(num2);
        return resto;
    }

    alert ("O valor da soma dos números é: " + soma() + "\nO valor da subtração dos números é: " +sub() + "\nO valor do produto dos números é: " + prod() +"\nO valor da divisão dos números é: " + sub() + "\nO valor do resto da divisão dos númeroe é: " + resto());
