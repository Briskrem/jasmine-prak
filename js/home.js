document.addEventListener('DOMContentLoaded', getCards);
// const homeButton = document.querySelector('a[class="home"]')
const homeButton = document.querySelector('a.home')

async function getCards(){
    console.log('zesty')
    let url = 'http://localhost:3080/jobs';
    try{
        await axios.get(url, {withCredentials: true}).then(x => console.log(x.data.results))
    }catch(e){
        console.log(e,'errzz')
    }
    
}

homeButton.addEventListener('click', getCards)