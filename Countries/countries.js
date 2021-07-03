(function () {
    var countries = [
        {
            name: "Германия",
            cities: [
                {
                    name: "Берлин",
                    population: 3.645
                },
                {
                    name: "Мюнхен",
                    population: 1.472
                },
                {
                    name: "Гамбург",
                    population: 1.841
                }
            ]
        },
        {
            name: "Канада",
            cities: [
                {
                    name: "Торонто",
                    population: 2.93
                },
                {
                    name: "Монреаль",
                    population: 1.78
                },
                {
                    name: "Ванкувер",
                    population: 0.675
                }
            ]
        },
        {
            name: "Япония",
            cities: [
                {
                    name: "Токио",
                    population: 14
                },
                {
                    name: "Киото",
                    population: 1.475
                }
            ]
        },
        {
            name: "Россия",
            cities: [
                {
                    name: "Новосибирск",
                    population: 1.511
                },
                {
                    name: "Москва",
                    population: 11.92
                },
                {
                    name: "Красноярск",
                    population: 1.007
                },
                {
                    name: "Санкт-Петербург",
                    population: 4.991
                }
            ]
        }
    ];

    function getMaxCitiesCountCountries(countries) {
        var maxCitiesCount = 0;
        var maxCitiesCountCountries = [];

        countries.forEach(function (country) {
            if (country.cities.length > maxCitiesCount) {
                maxCitiesCount = country.cities.length;
                maxCitiesCountCountries = [country];
            } else if (country.cities.length === maxCitiesCount) {
                maxCitiesCountCountries.push(country);
            }
        });

        return maxCitiesCountCountries;
    }

    console.log("Страны с максимальным количеством городов: ");
    console.log(getMaxCitiesCountCountries(countries));

    function getCountriesPopulation(countries) {
        var countriesPopulation = {};

        function getCountryPopulation(country) {
            return country.cities.reduce(function (population, city) {
                return population + city.population;
            }, 0);
        }

        countries.forEach(function (country) {
            countriesPopulation[country.name] = getCountryPopulation(country);
        });

        return countriesPopulation;
    }

    console.log("Страны и их население: ");
    console.log(getCountriesPopulation(countries));
}());