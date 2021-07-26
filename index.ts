interface Car {
    price: number
    message: string

    setPower():void
    getPrice():number
    getMessage(): string
}

class MyCar implements Car {
    protected decorator: Car

    price: number = 10000
    message: string = 'BMW'

    setPower(): void {
        console.log('Power is set')
    }

    getPrice():number {
        return this.price
    }

    getMessage():string {
        return this.message
    }
}

class CarDoor extends MyCar {

    constructor(car: Car) {
        super()
        this.decorator = car
        this.price = this.decorator.price + 1500
    }

    getPrice():number {
        return this.price
    }
}

class CarColor extends MyCar{
    color: string
    
    constructor(car: Car, color: string) {
        super()
        this.decorator = car
        this.color = color
        this.price = this.decorator.price + 700
        this.message = this.decorator.message
    }

    getPrice():number {
        return this.price
    }

    getMessage(): string {
        return this.decorator.getMessage() + ` with color ${this.color} decorated`
    }

}


class CarEngine extends MyCar{
    engine: string

    constructor(car: Car, engine:string){
        super()
        this.decorator = car
        this.engine = engine
        this.price = this.decorator.price + 8000
        this.message = this.decorator.message
    }


    getPrice():number {
        return this.price
    }

    getMessage(): string {
        return this.decorator.getMessage() + ` and price ${this.price}$ and your car has ${this.engine}`
    }
}

let bmw = new MyCar()
bmw = new CarDoor(bmw)
bmw = new CarColor(bmw, 'black')
bmw = new CarEngine(bmw, 'hybrid')

console.log(bmw.getMessage())