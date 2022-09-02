const loadCocktail = (search) =>{
    const url=`https://thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCocktail(data.drinks))
}
const displayCocktail = drinks =>{
 const cocktailContainer=document.getElementById('cocktail-container');
//  ager search delete korte chaile
 cocktailContainer.innerHTML='';
 drinks.forEach(drink =>{
    // // alada alada vabe drinks dekhachhe ki nh
    // console.log(drink)
    // j chid ta repeat hbe ta div a add hbe...
    const cocktaiDiv=document.createElement('div')
    // col class a ahbe ..like bostrap card
    cocktaiDiv.classList.add ('col');
    cocktaiDiv.innerHTML=`
    
            <div onclick="loadCocktailDetail(${drink.idDrink})" class="card">
              <img src="${drink.strDrinkThumb}" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${drink.strDrink}</h5>
                <p class="card-text">
                  ${drink.strInstructions}
                
                </p>
              </div>
            </div>
          
    
    `;
    cocktailContainer.appendChild(cocktaiDiv);
 })
}

const searchCocktail= () =>{
    const searchField=document.getElementById('search-field');
    const searText=searchField.value ;

   loadCocktail(searText);
//    search field khali korte chaile
searchField.value='';
}

// id diye deatail pabo tai link open kore then add korte hbe https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007
const loadCocktailDetail= (idDrink) =>{
    // console.log('detail of',idDrink)
    const url=`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`
    // console.log(url)
    // load data
    fetch(url)
    .then(res => res.json())
    .then(data => displayCocktailDetail(data.drinks[0]));
}
// dynamic vabe dekhabo
const displayCocktailDetail = drink  =>{
    // ui a dekhabo
    const deatailContainer=document.getElementById('detail-container');

    const detailDiv=document.createElement('div');
    detailDiv.classList.add('card');
    detailDiv.innerHTML=`
  
    <img src="${drink.strDrinkThumb}" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">${drink.strDrink}</h5>
      <p class="card-text">
      ${drink.strInstructions}
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
 
    
    `;


 deatailContainer.appendChild(detailDiv);

}




loadCocktail('');