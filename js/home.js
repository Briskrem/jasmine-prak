document.addEventListener('DOMContentLoaded', getCards);
// const homeButton = document.querySelector('a[class="home"]')
const homeButton = document.querySelector('a.home');
const cardContainer = document.querySelector('.card-container');
const HOME = document.querySelector('#HOME')

async function getCards(){
    console.log('zesty')
    let url = 'http://localhost:3080/jobs';
    try{
        let results = (await axios.get(url, {withCredentials: true})).data.results;
        // console.log(results)
        // console.log(cardContainer.firstChild)
        // cardContainer.removeChild(cardContainer.firstChild)
        while(cardContainer.firstChild){
            cardContainer.removeChild(cardContainer.firstChild);
        }
        //USING FRAGMENTS INSTEAD OF APPPENDCHILD AND INNERHTML
        let fragment = document.createDocumentFragment();

        for(let i = 0; i < results.length; i++){
            let element = document.createElement('div');
            element.classList.add('data-card')
            let nameElemet = document.createElement('h1');
            let emailElement = document.createElement('h3');
            let timeElement = document.createElement('p');
            nameElemet.innerText = `Hello ${results[i].first_name} ${results[i].last_name}`;
            emailElement.textContent = `Email: ${results[i].email}`;
            timeElement.innerText = `Register Date: ${results[i].date_created}`
            element.append(nameElemet, emailElement, timeElement);
            fragment.appendChild(element)
            // cardContainer.appendChild(element);
            // console.log(cardContainer.children[0].matches('div'),'jomie')

            
        }
        cardContainer.appendChild(fragment);
        return results
    }catch(e){
        console.log(e,'errzz')
    }
    
}

homeButton.addEventListener('click', getCards)