const mobiles = [
    {
        name: "Samsung Galaxy S21 5G",
        launch: "2021-01-14",
        display: "6.2 inches",
        memory: "128GB 8GB RAM, 256GB 8GB RAM",
        camera: "64 MP, 12 MP, 12 MP",
        pic: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s21-5g-r.jpg",
        
        link: "https://www.gsmarena.com/samsung_galaxy_s21_5g-10626.php"
    },
    {
        name: "Samsung Galaxy M51",
        launch: "2020-08-31",
        display: "6.7 inches",
        memory: "128GB 6GB RAM, 128GB 8GB RAM",
        camera: "64 MP, 12 MP, 5 MP, 5 MP",
        pic: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m51.jpg",
        link: "https://www.gsmarena.com/samsung_galaxy_m51-10477.php"
    },
    {
        name: "Samsung Galaxy A23",
        launch: "2022-03-04",
        display: "6.6 inches",
        memory: "64GB 4GB RAM, 128GB 4GB RAM, 128GB 6GB RAM, 128GB 8GB RAM",
        camera: "50 MP, 5 MP, 2 MP, 2 MP",
        pic: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a23.jpg",
        link: "https://www.gsmarena.com/samsung_galaxy_a23-11404.php"
    },
    {
        name: "Samsung Galaxy A12",
        launch: "2020-12-21",
        display: "6.5 inches",
        memory: "32GB 3GB RAM, 64GB 4GB RAM, 128GB 4GB RAM, 128GB 6GB RAM",
        camera: "48 MP, 5 MP, 2 MP, 2 MP",
        pic: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a12-sm-a125.jpg",
        link: "https://www.gsmarena.com/samsung_galaxy_a12-10578.php"
    },
    {
        name: "Samsung Galaxy A72",
        launch: "2021-03-17",
        display: "6.7 inches",
        memory: "128GB 6GB RAM, 256GB 8GB RAM",
        camera: "64 MP, 12 MP, 8 MP, 5 MP",
        pic: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a72-4g.jpg",
        link: "https://www.gsmarena.com/samsung_galaxy_a72-10625.php"
    },
    {
        name: "Samsung Galaxy A15",
        launch: "2023-12-21",
        display: "6.5 inches",
        memory: "64GB 4GB RAM, 128GB 6GB RAM",
        camera: "50 MP, 2 MP",
        pic: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a15-lte-.jpg",
        link: "https://www.gsmarena.com/samsung_galaxy_a15-12341.php"
    },
    {
        name: "Samsung Galaxy A55",
        launch: "2024-03-25",
        display: "6.6 inches",
        memory: "128GB 8GB RAM, 256GB 12GB RAM",
        camera: "50 MP, 12 MP, 5 MP",
        pic: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a55.jpg",
        link: "https://www.gsmarena.com/samsung_galaxy_a55-12399.php"
    },
    {
        name: "Samsung Galaxy S24",
        launch: "2024-01-09",
        display: "6.2 inches",
        memory: "128GB 8GB RAM, 256GB 12GB RAM, 512GB 12GB RAM",
        camera: "50 MP, 12 MP, 10 MP",
        pic: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-5g-sm-s921.jpg",
        link: "https://www.gsmarena.com/samsung_galaxy_s24-13151.php"
    },
    {
        name: "Samsung Galaxy M13",
        launch: "2022-05-27",
        display: "6.6 inches",
        memory: "64GB 4GB RAM, 128GB 6GB RAM",
        camera: "50 MP, 5 MP, 2 MP",
        pic: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m13.jpg",
        link: "https://www.gsmarena.com/samsung_galaxy_m13-11684.php"
    },
    {
        name: "Samsung Galaxy M04",
        launch: "2022-12-10",
        display: "6.5 inches",
        memory: "64GB 4GB RAM, 128GB 4GB RAM",
        camera: "13 MP, 2 MP",
        pic: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m04-.jpg",
        link: "https://www.gsmarena.com/samsung_galaxy_m04-12055.php"
    }
];


 var maind=document.getElementById('main');
  for(key in mobiles){
    maind.innerHTML +=`

    <div class="card m-4 p-2" style="width: 18rem;">
  <img src="${mobiles[key].pic}" class="card-img-top img-fluid " alt="...">
  <div class="card-body">
    <h5 class="card-title">${mobiles[key].name}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${mobiles[key].launch}</li>
    <li class="list-group-item">Display: ${mobiles[key].display}</li>
    <li class="list-group-item">Memory: ${mobiles[key].memory}</li>
    <li class="list-group-item">Camera: ${mobiles[key].camera}</li>
  </ul>
  <div class="card-body" >
    <a href="${mobiles[key].link}" class="card-link">More Specs</a>
    
  </div>
</div>
    `
  }
  