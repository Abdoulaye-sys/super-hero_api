// 5382638565188108	
// https://superheroapi.com/api/

let BASE_URL = 'https://superheroapi.com/api.php/5382638565188108/';
button = document.getElementById('button');
divImage = document.getElementById('divImage');
buttonSearch = document.getElementById('searchButton')
const searchInput = document.getElementById('searchInput')
const nameDiv = document.getElementById('nameDiv')



getHeroApi = (id) => {
    fetch(`${BASE_URL}/${id}`)
    .then(response=> response.json())
    .then(json=>{
        console.log(json)
        const name = `<h2> name : ${json.name}</h2>`
        divImage.innerHTML = ` ${name}<img src="${json.image.url}" with=500px height = 500px/>`;

    })
}

getSearchhero = (name) => {
    fetch(`${BASE_URL}/search/${name}`)
    .then(response=>response.json())
    .then(json=> {
        const hero = json.results[0]
        console.log(hero)
        divImage.innerHTML = `<img src="${hero.image.url}" with=500px height = 500px/>`
        nameDiv.innerHTML = `${hero.name}`

    })

}
const randomHero = () =>{
        const numberHero = 731;
        return Math.floor(Math.random()*numberHero)+1
}

button.onclick  = () => getHeroApi(randomHero());
buttonSearch.onclick = () => getSearchhero(searchInput.value);




