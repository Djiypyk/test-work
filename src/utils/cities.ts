import obj from '../Main/common/cities.json'

export type CitiesT = {
    city: string
    population: string
}

export const sortCities = (obj: CitiesT[]) => {
    const result: CitiesT[] = obj.filter(c => Number(c.population) >= 50000)
        .sort()
    const populationArr = result.map(c => Number(c.population))
    const biggestAmount = Math.max(...populationArr).toString()
    const biggestCityIndex = result.findIndex(b => b.population === biggestAmount)
    const biggestCity = result.splice(biggestCityIndex, 1)
    result.unshift(...biggestCity)
    return result
}