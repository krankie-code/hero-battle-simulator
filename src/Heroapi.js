'use strict'


function getHeroes(){
    const heroes = document.querySelector('.heroes');
    const col1 = document.querySelector('.col1')
    const col2 = document.querySelector('.col2')
       
            for(var i = 1; i<3;i++){

         fetch(`https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/599075271045222/${i}`)
        .then((response) =>{
            return response.json()
        })

        .then((data) => {
            const article = document.createElement('article');
            article.innerHTML = `<h3>${data.name}</h3>
            <img src = "${data.image.url}" alt = "${data.name}"/>
            <ul>
            <li>intelligence:${data.powerstats.intelligence}</li>
               <li>strength:${data.powerstats.strength}</li>
               <li>speed:${data.powerstats.speed}</li>
               <li>durability:${data.powerstats.durability}</li>
               <li>power:${data.powerstats.power}</li>
               
               <li>combat:${data.powerstats.combat}</li> </ul>`
                

               article.classList.add('stats')
            
            heroes.appendChild(article)
                 })
            .catch((err) =>{
            })
            }
            
    }

        getHeroes();


    

    
