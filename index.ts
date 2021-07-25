/**=============   Implementation with Interface   =======================**/

type CarProps = {
    [key: string]: number
}

interface CarMethods {
    getPriceWithEngine(): number
    getPriceWithPower(): number
    getPriceWithColor(): number
    getPriceWithDoors(): number
}

class Car implements CarMethods {
    engine: string
    power: number
    color: string
    doors: number

    getPriceWithEngine(): number {
        const myCarEngine: CarProps = {
            hybrid: 125,
            oil: 100,
        }

        return myCarEngine[this.engine] || 100
    }

    getPriceWithPower(): number {
        if (this.power > 350) {
            return 1800
        }

        return 1500
    }

    getPriceWithColor(): number {
        const priceWithColor: CarProps = {
            black: 1200,
            blue: 1000,
            white: 1500,
            silver: 800,
        }

        return priceWithColor[this.color] || 500
    }

    getPriceWithDoors(): number {
        if (this.doors > 2) {
            return 300
        }

        return 200
    }
}

class BMW extends Car {
    private cost: number = 25000

    constructor(
        public engine: string,
        public power: number,
        public color: string,
        public doors: number,
    ) {
        super()
    }

    getTotalPrice(): number {
        const allPrices: number[] = [
            this.getPriceWithEngine(),
            this.getPriceWithPower(),
            this.getPriceWithColor(),
            this.getPriceWithDoors(),
            this.cost
        ]

        return allPrices.reduce((totalPrice: number, currentPrice: number) => {
            return totalPrice + currentPrice
        }, 0)
    }

    getInfo(): string {
        return `BMW with color ${this.color} decorated and price ${this.getTotalPrice()}$ and your car has ${this.engine} engine`
    }
}

const bmw = new BMW('hibrid', 700, 'black', 4)
console.log(bmw.getInfo())

/**=============   Implementation with Abstract Class   =======================**/

abstract class Car {
    engine: string
    power: number
    doors: number
    color: string

    abstract getPriceWithEngine(): number
    abstract getPriceWithPower(): number
    abstract getPriceWithDoors(): number
    abstract getPriceWithColors(): number
}

class CarPrice extends Car {
    private defaultCostOfDecor: number = 500

    getPriceWithEngine(): number {
        const carEngines: { [key: string]: number } = {
            hybrid: 1500,
            oil: 1000,
        }

        return carEngines[this.engine] || this.defaultCostOfDecor
    }

    getPriceWithPower(): number {
        if (this.power > 300) {
            return 1200
        }
        return 800
    }

    getPriceWithDoors(): number {
        if (this.doors > 2) {
            return 800
        }

        return 600
    }

    getPriceWithColors(): number {
        const carColors: { [key: string]: number } = {
            black: 650,
            white: 600,
            blue: 630,
        }

        return carColors[this.color] || this.defaultCostOfDecor
    }
}

class BMW extends CarPrice {
    private cost: number = 15000

    constructor(
        public engine: string,
        public power: number,
        public doors: number,
        public color: string
    ) {
        super()
    }

    getTotalPrice(): number {
        const pricees: number[] = [
            this.getPriceWithEngine(),
            this.getPriceWithPower(),
            this.getPriceWithDoors(),
            this.getPriceWithColors(),
            this.cost,
        ]

        return pricees.reduce(
            (totalPrice: number, currentPrice: number) =>
                totalPrice + currentPrice,
            0
        )
    }

    getInfo(): string {
        return `BMW with color ${ this.color } decorated and price ${this.getTotalPrice()}$ and your car has ${ this.engine } engine`
    }
}

const bmw = new BMW('oil', 390, 4, 'blue')
console.log(bmw.getInfo())
