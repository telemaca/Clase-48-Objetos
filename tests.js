describe("getBoxVolume()", (size) => {

    it("debería devolver el volumen de una caja cuando se le pase un objeto con las medidas de la misma", () => {
        const size = { width: 2, length: 5, height: 1 } 
        
        expect(getBoxVolume(size)).to.equal(10)
    })
})

describe("round()", (number) => {
    it("debería devolver un objeto", () => {
        const number = 13.3;
        const resultado = round(number);

        expect(resultado).to.be.an("object");
    })

    it("debería devolver un objeto con las propiedades floor, ciel y round de un número", () => {
        const number1 = 13.3;
        const number2 = 15.6;
        const resultado1 = round(number1);
        const resultado2 = round(number2);

        expect(resultado1).to.eql({ floor: 13, ceil: 14, round: 13 });
        expect(resultado2).to.eql({ floor: 15, ceil: 16, round: 16 });
    })
})

describe("merge()", (info1, info2) => {
    it("debería devolver un objeto", () => {
        const info1 = {a: 1, b: 2, c: 3}
        const info2 = {d: 4, b: 5}
        const resultado = merge(info1, info2);

        expect(resultado).to.be.an("object");
    })

    it("debería un objeto que sea la unión de dos objetos-argumento", () => {
        const info1 = { a: 1, b: 2, c: 3 }
        const info2 =  {d: 4, b: 5 }
        const resultado = merge(info1, info2);

        expect(resultado).to.eql({ a: 1, b: 2, c: 3, d: 4 });
    })
})

describe("differentiate()", () => {
    it("debería devolver un objeto", () => {
        const info1 = {a: 1, b: 2, c: 3}
        const info2 = {d: 4, b: 5}
        const resultado = differentiate(info1, info2);

        expect(resultado).to.be.an("object");
    })

    it("debería devolver un objeto que excluya las propiedades repetidas", () => {
        const info1 = {a: 1, b: 2, c: 3}
        const info2 = {d: 4, b: 5}
        const resultado = differentiate(info1, info2);

        expect(resultado).to.eql({ a: 1, c: 3, d: 4 });
    })
})

describe("removeProperties()", () => {
    it("debería devolver un objeto", () => {
        const data = {a: 1, b: 2, c: 3, d: 4, e: 5}
        const props = ["b", "c", "e"]
        const resultado = removeProperties(data, props);

        expect(resultado).to.be.an("object");
    })

    it("debería devolver un objeto sin la/s propiedad/es indicadas en un array", () => {
        const data2 = {a: 1, b: 2, c: 3, d: 4, e: 5}
        const props2 = ["b", "c", "e"]
        const resultado2 = removeProperties(data2, props2);

        expect(resultado2).to.eql({ a: 1, d: 4 });

    })
})

describe("filterProperties()", () => {
    it("debería devolver un objeto", () => {
        const data = {a: 1, b: 2, c: 3, d: 4, e: 5}
        const props = ["b", "c", "e"]
        const resultado = removeProperties(data, props);

        expect(resultado).to.be.an("object");
    })

    it("debería devolver un objeto solo con la/s propiedad/es indicadas en un array", () => {
        const data = {a: 1, b: 2, c: 3, d: 4, e: 5}
        const props = ["b", "c", "e"]
        const resultado = filterProperties(data, props);

        expect(resultado).to.eql({ b: 2, c: 3, e: 5 });

    })
})


describe("buyProducts()", (money, products) => {
    it("Debería devolver un objeto", () => {

        const products = { cookies: 60, chocolate: 110, soda: 120, }
        const money = 115

        const resultado = buyProducts(money, products);

        expect(resultado).to.be.an("object");

    })

    it("Debería devolver un objecto cuyas values sean booleanos", () => {

        const products = { cookies: 60, chocolate: 110, soda: 120, }
        const money = 115

        const resultado = buyProducts(money, products);

        expect(resultado).to.eql({ cookies: true, chocolate: true, soda: false });

    })

})

describe("canBuyAllProduct()", (money, products) => {
    it("Debería devolver un booleano", () => {

        const products = { cookies: 60, chocolate: 110, soda: 120, }
        const money = 115

        const resultado = canBuyAllProduct(money, products);

        expect(resultado).to.be.a("boolean");

    })

    it("Debería devolver false si el dinero no alcanza", () => {

        const products = { cookies: 60, chocolate: 110, soda: 120, }
        const money = 115

        const resultado = canBuyAllProduct(money, products);

        expect(resultado).to.be.false;

    })

})

describe("getXP()", (money, products) => {
    it("Debería devolver número", () => {

        const score = { easy: 10, medium: 50, hard: 100 }
        const challenges = { easy: 3, medium: 4, hard: 2 }

        const resultado = getXP(score, challenges);

        expect(resultado).to.be.finite;

    })

    it("Debería devolver la suma del XP", () => {

        const score = { easy: 10, medium: 50, hard: 100 }
        const challenges = { easy: 3, medium: 4, hard: 2 }

        const resultado = getXP(score, challenges);

        expect(resultado).to.equal(430);

    })

})

describe("getStringInfo()", (string) => {
    it("Debería devolver objeto", () => {

        const string = "H3ll0 Wor1d";


        const resultado = getStringInfo(string);

        expect(resultado).to.be.an("object");

    })

    it("Debería recorrer un string y contar sus elementos", () => {

        const string = "H3ll0 Wor1d";
        const resultado = getStringInfo(string);

        expect(resultado).to.eql({ letters: 7, digits: 3, spaces: 1 });

    })
})

describe("getParagraphInfo()", (paragraph) => {
    it("Debería devolver un objeto", () => {
        const paragraph = "Do. Or do not. There is no try."
        const resultado = getParagraphInfo(paragraph);

        expect(resultado).to.be.an("object");
    })

    it("Debería recorrer un párrafo y contar cuántas letras, palabras y oraciones tiene", () => {

        const paragraph = "Do. Or do not. There is no try."
        const resultado = getParagraphInfo(paragraph);

        expect(resultado).to.eql({ letters: 21, words: 8, sentences: 3 });

    })
})

describe("countWords()", (text) => {
    it("Debería devolver un objeto", () => {
        const text = "El que compra Pocas Capas pocas capas paga"
        const resultado = countWords(text);

        expect(resultado).to.be.an("object");
    })

    it("Debería recorrer un texto y contar palabras; las repetidas se suman", () => {
        const text = "El que compra Pocas Capas pocas capas paga"
        const resultado = countWords(text);

        expect(resultado).to.eql({ el: 1, que: 1, compra: 1, pocas: 2, capas: 2, paga: 1 });

    })
})

describe("parseQueryParams()", (url) => {
    it("Debería devolver un objeto", () => {
        const url = "http://www.exercises.com?keyword=objects&language=javascript&level=intermediate"
        const resultado = parseQueryParams(url);

        expect(resultado).to.be.an("object");
    })

    it("debería devolver un objeto con cada parámetro como clave con su respectivo valor", () => {
        const url = "http://www.exercises.com?keyword=objects&language=javascript&level=intermediate"
        const resultado = parseQueryParams(url);

        expect(resultado).to.eql({ keyword: "objects", language: "javascript", level: "intermediate" });
    })
})

describe("findOcurrencies()", (text, array, caseSensitive = true) => {
    it("Debería devolver un objeto", () => {
        const text2 = "Hello World"
        const letterArray = ["o", "l"]
        const caseSensitive = true
        const resultado = findOcurrencies(text2, letterArray, caseSensitive);

        expect(resultado).to.be.an("object");
    })

    it("debería devolver un objeto con la cantidad de las letras de dado array que hay en cada palabra", () => {
        const text2 = "Hello World"
        const letterArray = ["o", "l"]
        const caseSensitive = false
        const resultado = findOcurrencies(text2, letterArray, caseSensitive);

        expect(resultado).to.eql({ hello: { o: 1, l: 2 }, world: { o: 1, l: 1 } });
    })
})

describe("fight()", () => {
    it("debería devolver un objeto", () => {
        const fighterA = { name: "Chun-Li", life: 100, attack: 40, defense: 10 }
        const fighterB = { name: "Cammy", life: 50, attack: 20, defense: 20 }
        const resultado = fight(fighterA, fighterB)
        expect(resultado).to.be.an("object");
    })

    it("debería devolver un objeto que indique la cantidad de rondas de duración y quién ganó", () => {
        const fighterA = { name: "Chun-Li", life: 100, attack: 40, defense: 10 }
        const fighterB = { name: "Cammy", life: 50, attack: 20, defense: 20 }
        const resultado = fight(fighterA, fighterB)
        expect(resultado).to.eql( { rounds: 3, winner: "Chun-Li"} );
    })
})