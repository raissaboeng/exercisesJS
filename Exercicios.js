
        /* 1) Implemente um método que crie um novo array baseado nos valores passados.
        Entradas do método (3,a), Resultado do método: ['a', 'a', 'a'] */
        const createArray = (num, obj) => { 
            var array = [];
            for (i = 0; i < num; i++) {
                array.push(obj)
            }
            return array;
        }
        console.log("1-", createArray(3, "a"))


        /* 2) Implemente um método que inverta um array, não utilize métodos nativos do array.
        Entrada do método ([1,2,3,4]), Resultado do método: [4,3,2,1] Right=direta
        */
        const reverseArray= (array) => {
            var length = array.length;
            for (i = 0, j = length - 1; i < j; i += 1, j -= 1) {
                var temporary = array[i];
                array[i] = array[j];
                array[j] = temporary;
            }
            return array;
        }
        console.log("2-",reverseArray([1, 2, 3, 4]))

        /* 3) Implemente um método que limpe os itens desnecessários de um array (false, undefined, strings vazias, zero, null).
        Entrada do método ([1,2,'', undefined]), Resultado do método: [1,2]
        */
        const cleanArray = (array) => {
            return array.filter((item) => {
                if (item === false || item === undefined || item === "" || item === 0 || item === null) return false
                return true
            })
        }
        console.log("3-",cleanArray([1, 2, '', undefined]))


        /* 4) Implemente um método que a partir de um array de arrays, converta em um objeto com chave e valor. Entrada do método ([["c",2],["d",4]]), Resultado do métdodo: {c:2, d:4} */
        const arrayToObj = (array) => {
            return array.reduce((acc, item) => {
                acc[item[0]] = item[1]
                return acc
                }, {})
        }
        console.log("4-",arrayToObj([["c", 2],["d", 4]]))


        /* 5) Implemente um método que retorne um array, sem os itens passados por parâmetro depois do array de entrada. Entrada do método ([5,4,3,2,5], 5,3), Resultado do método: [4,2] */
        const deleteItem = (array, x, y) => {
            return array.filter((item) => {
                if (item === x || item === y) return false
                return true
            })
        }
        console.log("5-",deleteItem([5, 4, 3, 2, 5], 5, 3))

        /* 6) Implemente um método que retorne um array, sem valores duplicados.
         Entrada do método ([1,2,3,3,2,4,5,4,7,3]), Resultado do método: [1,2,3,4,5,7]*/
        const deleteDouble = (array) => {
            return array.filter((elem, index) => {
                return array.indexOf(elem) === index;
            });
        }
        console.log("6-",deleteDouble([1, 2, 3, 3, 2, 4, 5, 4, 7, 3]))

        /* 7) Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.
         Entrada do método ([1,2,3,4],[1,2,3,4]), Resultado do método: true */
        const compare = (array1, array2) => {
            return array1.length == array2.length &&
                array1.every((item, index) => item === array2[index])
        }
        console.log("7-",compare([1, 2, 3, 4], [1, 2, 3, 4]))

        /* 8) Implemente um método que remova os aninhamentos de um array de arrays para um array unico. Entrada do método ([1, 2, [3], [4, 5]]), Resultado do método: [1, 2, 3, 4, 5] */
        const flat = (array) => array.flat() 
        console.log("8-",flat([1, 2, [3], [4, 5]]))

        
        /* 9) Implemente um método divida um array por uma quantidade passada por parâmetro. Entrada do método ([1, 2, 3, 4, 5], 2), Resultado do método: [[1, 2], [3, 4], [5]] */
        const division = (array, size) => {
            var newArray = []
            while(array.length){
                newArray.push(array.splice(0,size))
           }
           return newArray
        }
        console.log("9-",division([1, 2, 3, 4, 5],2))


        /* 10) Implemente um método que encontre os valores comuns entre dois arrays. Entrada do método ([6, 8], [8, 9]), Resultado do método: [8] */
        const intersection = (array1, array2) => array1.filter((item) => array2.includes(item))
        console.log("10-",intersection([6, 8], [8, 9]))