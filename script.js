fetch('https://whatyearisit-backend-kappa-five.vercel.app/year')
.then(response => response.json())
.then( data => 
    document.querySelector('#year').textContent = data.year
)