const but1 = document.querySelector('.hoeBut');
const but2 = document.querySelector('.hoeBut2');

it('should not be empty', () => {
    const cardContainer = document.querySelector('.card-container');
    expect(cardContainer.children).not.toEqual(null);
})

it('container should contain', async () => {
    let url = 'http://localhost:3080/jobs';
    const cardContainer = document.querySelector('.card-container');    
    let results = (await axios.get(url, {withCredentials: true})).data.results;
    expect(results).toBeTruthy()
})

it('container should contain2', async () => {
    let url = 'http://localhost:3080/jobs';
    const cardContainer = document.querySelector('.card-container');    
    let results = (await axios.get(url, {withCredentials: true})).data.results;
    // console.log(results,'results')
    expect(cardContainer.children[0].matches('div')).toBe(true);
})

it('element should exist on DOM', () => {
    
    expect(cardContainer.children).not.toEqual(null);
})

it('practice click events', () => {
    but1.click()
    but2.click()
    // expect(cardContainer.children).not.toEqual(null);
})