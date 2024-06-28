fetch('https://whatyearisit-backend-alpha-five.vercel.app/year')
.then(response => response.json())
.then( data => 
    document.querySelector('#year').textContent = data.year
)