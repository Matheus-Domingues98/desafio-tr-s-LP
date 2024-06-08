class hero{
    constructor(name, age, typeHero, typeAtack){
      this.name = name
      this.age = age
      this.typeHero = typeHero[2]
      this.typeAtack = typeAtack[2]
    }

    atack(){
        console.log(`O ${this.typeHero} atacou usando ${this.typeAtack}`)
    }
}

typeHero = ["Mago", "Guerreiro", "Monge", "Ninja"]
typeAtack = ["magia", "espada", "artes marciais", "shuriken"]

    if(this.typeHero = 0){
      this.typeAtack = 0
    } else if(this.typeHero = 1){
      this.typeAtack = 1
    }else if(this.typeHero = 2){
      this.typeAtack = 2
    }else{
      this.typeAtack = 3
    }

let heroAtack = new hero("Matheus", 26, typeHero, typeAtack)

heroAtack.atack()