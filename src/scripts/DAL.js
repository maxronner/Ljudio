// eslint-disable-next-line no-unused-vars
async function search(){
    let str = document.querySelector('#search').value
    let response = await fetch('http://localhost:3000/api/yt/search/' + str)
    let data = await response.json()
    document.querySelector('textarea').value = JSON.stringify(data, undefined, 4)
  }