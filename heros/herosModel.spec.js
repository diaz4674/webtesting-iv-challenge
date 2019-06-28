const db = require('../data/dbConfig')
const server = require('../api/server')
const Heros = require('./herosModel')

describe('the heros model', () => {

    afterEach( async() => {
        await db('heros').truncate()
     })

     describe('insert()', () => {
        it('should insert heros into the db', async () => {
            //using our model method
           await Heros.add({name: 'Samus'});
           await Heros.add({name: 'Donkey Kong'})

           //confirm w/kknex\
           const heros = await db('heros')
           expect(heros).toHaveLength(2)
           expect(heros[0].name).toBe('Samus')

        })

        it('should return the new hero on insert', async() => {
            const hero = await Heros.add({name: 'Mario'})

            expect(hero).toEqual({id:1, name: 'Mario'})
        })
    })
    describe('getAll()', () => {
        it('should return all heros from db', async () => {

           await Heros.add({name: 'Samus'});
           await Heros.add({name: 'Donkey Kong'})


           const heros = await Heros.getAll()
           expect(heros).toHaveLength(2)

        })

        it('should return the new hero on insert', async() => {
            const hero = await Heros.add({name: 'Mario'})

            expect(hero).toEqual({id:1, name: 'Mario'})
        })
    })

    describe('delete()', () => {
        
        afterEach( async() => {
            await db('heros').truncate()
        })

        it('should delete hero from db', async() => { 
            const hero = await Heros.add({id:1, name: 'Luigi'})
            expect(hero).toEqual({id:1, name: 'Luigi'})


            await Heros.remove(hero.id) 

            const heros = await Heros.getAll()
            expect(heros).toHaveLength(0)
    })


})

})