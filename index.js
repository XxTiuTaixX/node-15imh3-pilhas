class No {
  constructor (elemento){
  this.elemento = elemento;
  this.proximo = undefined;
 }
}

class lista_encadeada{
  constructor(){
  this.head = undefined;
}


InsertFirst(elemento){
  const novo = new No (elemento);
  let atual;
  if (!this.head){
    this.head = novo;
  } else{
    atual = this.head;
    novo.proximo = atual;
    this.head = novo;
  }
  return elemento;
}

InsertLast (elemento){
  const novo = new No (elemento);
  let atual;
  if(!this.head){
    this.head = novo;
  } else{ 
    atual = this.head;
    
    while(atual.proximo){
      atual = atual.proximo;
    }
    atual.proximo = novo;
  }
  
  return elemento;
}

searchAt (posicao){
  let atual = this.head;
  for (let i = 0; i < posicao && atual; i++){
    atual = atual.proximo;
  }
  
  return atual;
}

 traversal(){
  if (!this.head){
    return undefined;
  } else{
    let atual = this.head
    let elementoLista = []
    while (atual){
      elementoLista.push(atual.elemento)
      atual = atual.proximo
    }
    return elementoLista;
  }
  
}
}

const trem = new lista_encadeada();
console.log(trem.InsertFirst('locomotiva'));
console.log(trem.InsertLast('vagão 1'));
console.log(trem.InsertLast('vagão 2'));
console.log(trem.InsertFirst('locomotiva2'));
console.table(trem.searchAt(1));
console.table(trem.traversal());