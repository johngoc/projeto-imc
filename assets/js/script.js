const form = document.querySelector('#form');

form.addEventListener('submit', function(evento){
    evento.preventDefault();
    const peso = Number(evento.target.querySelector('#peso').value);
    const altura = Number(evento.target.querySelector('#altura').value);

    if(!peso){
        setResultado('Peso inválido', false);
        return;
    }
    if(!altura){
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getIMC(peso, altura);
    const nivelImc = getNivelImc(imc);
    
    const resposta = `Seu IMC é ${imc}, ${nivelImc}`;

    setResultado(resposta, true);
});

function setP(){
    const p = document.createElement('p');
    return p;
}

function getIMC(peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function getNivelImc(imc){
    const niveis = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if(imc >= 40) return niveis[5];
    if(imc >= 35) return niveis[4];
    if(imc >= 30) return niveis[3];
    if(imc >= 25) return niveis[2];
    if(imc >= 18.5) return niveis[1];
    if(imc < 18.5) return niveis[0];
}

function setResultado(msg, isValid){
    const resultado = document.querySelector('.resultado');
    
    resultado.innerHTML = '';
    
    const p = setP();
    
    if(isValid){
        p.classList.add('resultado-true');
    }else{
        p.classList.add('resultado-false');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
    
}