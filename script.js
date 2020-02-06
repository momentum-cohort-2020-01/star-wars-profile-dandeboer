let swapiData

let mainContent = document.querySelector(".main-content")

fetch('https://swapi.co/api/people/20/')
    .then(response => response.json())
    .then(function(data){
        swapiData = data
        console.log(swapiData)
        let img = document.createElement("img")
        mainContent.appendChild(img)
        img.src = "https://www.sideshow.com/storage/product-images/903656/yoda_star-wars_square.jpg"
        img.setAttribute("class", "br-100 h3 w3 dib")
        let h2 = document.createElement("h2")
        h2.innerText = swapiData.name
        mainContent.appendChild(h2)
        return swapiData.species
    })
    .then(species => fetch(species))
    .then(response => response.json())
    .then(function(data) {
        console.log(data)
        let yodaSpecies = data
        let p = document.createElement("p")
        p.innerText = "Species:"
        mainContent.appendChild(p)
        p = document.createElement("p")
        p.innerText = yodaSpecies.name
        p.setAttribute("class", "lh-copy measure center f6 black-70")
        mainContent.appendChild(p)
        let hr = document.createElement("hr")
        mainContent.appendChild(hr)
        hr.setAttribute("class", "mw3 bb bw1 b--black-10")
    })
fetch("https://swapi.co/api/people/20/")
    .then(response => response.json())
    .then(function(things){
        let swapiData = things
        console.log(swapiData.homeworld)
        return swapiData.homeworld
    })
    .then(homeworld => fetch(homeworld))
    .then(response => response.json())
    .then(function(data){
        let yodaHomeworld = data
        console.log(yodaHomeworld)
        let p = document.createElement("p")
        p.innerText = "Homeworld:"
        mainContent.appendChild(p)
        p = document.createElement("p")
        p.innerText = yodaHomeworld.name
        p.setAttribute("class", "lh-copy measure center f6 black-70")
        mainContent.appendChild(p)
        let hr = document.createElement("hr")
        mainContent.appendChild(hr)
        hr.setAttribute("class", "mw3 bb bw1 b--black-10")
    })