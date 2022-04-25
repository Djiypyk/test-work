import obj from '../Main/common/cities.json'

export const filterCities: string[] = []
for (let i of obj) {
    if (Number(i.population) >= 50000){
        filterCities.push(i.city)
    }
}
