(function () {
    var countries = [
        {
            countryName: "Россия",
            cities: [
                {
                    cityName: "Новосибирск",
                    population: 1.511,
                },
                {
                    cityName: "Москва",
                    population: 11.92,
                },
                {
                    cityName: "Красноярск",
                    population: 1.007,
                },
                {
                    cityName: "Санкт-Петербург",
                    population: 4.991
                }
            ]
        },
        {
            countryName: "Германия",
            cities: [
                {
                    cityName: "Берлин",
                    population: 3.645,
                },
                {
                    cityName: "Мюнхен",
                    population: 1.472,
                },
                {
                    cityName: "Гамбург",
                    population: 1.841
                }
            ]
        },
        {
            countryName: "Канада",
            cities: [
                {
                    cityName: "Торонто",
                    population: 2.93,
                },
                {
                    cityName: "Монреаль",
                    population: 1.78,
                },
                {
                    cityName: "Ванкувер",
                    population: 0.675
                }
            ]
        },
        {
            countryName: "Япония",
            cities: [
                {
                    cityName: "Токио",
                    population: 14,
                },
                {
                    cityName: "Киото",
                    population: 1.475
                }
            ]
        }
    ]

    function getMaxCitiesCount(countries) {
        var maxCitiesCount = 0;
        var maxCitiesCountCountries = [];

        countries.forEach(function (country) {
            if (country.cities.length > maxCitiesCount) {
                maxCitiesCount = country.cities.length;
                maxCitiesCountCountries.push(country);
            } else if (country.cities.length === maxCitiesCount) {
                maxCitiesCountCountries.push(country);
            }
        });

        return maxCitiesCountCountries;
    }

    console.log("Страны с максимальным количеством городов: ");
    console.log(getMaxCitiesCount(countries));

    function getCountriesPopulation(countries) {
        var countriesPopulation = new Object();

        countries.forEach(function (country) {
            countriesPopulation[country.countryName] = getCountryPopulation(country);
        });

        function getCountryPopulation(country) {
            return country.cities.reduce(function (population, city) {
                return population + city.population;
            }, 0);
        }

        return countriesPopulation;
    }

    console.log("Страны и их население: ");
    console.log(getCountriesPopulation(countries));
}());