fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
    .then(res => {
        res.json()
            .then(data => displaymeals(data))
    })

const displaymeals = meals => {
    console.log(meals);
    // for (let i = 0; i < meals.length; i++) {
    //     const meal = meals[i];
    //     console.log (meal.name);
    // }
}