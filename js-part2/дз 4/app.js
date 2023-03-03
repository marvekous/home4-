const  projectA = document.getElementById('data1')
const  projectB = document.getElementById('data2')
const  projectC = document.getElementById('data3')
const  projectD = document.getElementById('data4')
const  projectE = document.getElementById('data5')
const  project = document.getElementById('data6')

const getData = async () =>{
    const dataElement = await fetch('https://jsonplaceholder.typicode.com/users')
    const  data = await dataElement.json()
    const data2 = data[0]
    console.log(data2);
 projectA.innerHTML = `<h2>1</h2><b>name:</b>${data2.name}<br><b>phone:</b>${data2.phone}
 <br><b>username:</b>${data2.username}<br><b>website:</b>${data2.website}<br><b>email:</b>${data2.email}`

 projectB.innerHTML = `<h2>1</h2><b>name:</b>${data2.name}<br><b>phone:</b>${data2.phone}
 <br><b>username:</b>${data2.username}<br><b>website:</b>${data2.website}<br><b>email:</b>${data2.email}`

 projectC.innerHTML = `<h2>1</h2><b>name:</b>${data2.name}<br><b>phone:</b>${data2.phone}
 <br><b>username:</b>${data2.username}<br><b>website:</b>${data2.website}<br><b>email:</b>${data2.email}`

 projectD.innerHTML = `<h2>1</h2><b>name:</b>${data2.name}<br><b>phone:</b>${data2.phone}
 <br><b>username:</b>${data2.username}<br><b>website:</b>${data2.website}<br><b>email:</b>${data2.email}`

 projectE.innerHTML = `<h2>1</h2><b>name:</b>${data2.name}<br><b>phone:</b>${data2.phone}
 <br><b>username:</b>${data2.username}<br><b>website:</b>${data2.website}<br><b>email:</b>${data2.email}`

 project.innerHTML = `<h2>1</h2><b>name:</b>${data2.name}<br><b>phone:</b>${data2.phone}
 <br><b>username:</b>${data2.username}<br><b>website:</b>${data2.website}<br><b>email:</b>${data2.email}`
}


getData()