const btnAddIngredients = $("#btnAddIngredients");
const btnRemoveIngredients = $(".btnRemoveIngredients");
const ingredients = $("#ingredients");
const btnAnalize = $("#btnAnalize");

btnAddIngredients.on('click',()=>{
    $(`<div class="w-full ingredients">
    <div class="w-full flex justify-center gap-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
        </svg>
        <input type="text" name="food_name" class="w-[70%] xl:w-1/2 h-8 shadow-md rounded-md pl-3 border border-gray-400 focus:outline-gray-500" placeholder="Enter Food Name">
        <button type="button" class="btnRemoveIngredients" id="hello">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="fill-slate-500 bi bi-trash self-center hover:cursor-pointer" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg>
        </button>
    </div>
    <div class="w-full flex justify-center">
        <div class="w-[70%] xl:w-1/2 flex gap-4">
            <input type="number" name="food_quantity" class="w-[40%] h-8 shadow-md rounded-md pl-3 border border-gray-400 mt-3 focus:outline-gray-500" placeholder="Quantity">
            <!-- <input type="text" name="food_measure" class="w-[60%] h-8 shadow-md rounded-md pl-3 border border-gray-400 mt-3" placeholder="Measure"> -->
            <select class="w-[60%] h-8 shadow-md rounded-md pl-3 border border-gray-400 mt-3 focus:outline-gray-500 hover:cursor-pointer" placeholder="Measure" id="line-0" data-line="0" name="food_measure">	
                <option data-hints="food_ai215e5b85pdh5ajd4aafa3w2zm8" data-measureuri="http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram" value="Kilogram">Kilogram</option>
                <option data-hints="food_ai215e5b85pdh5ajd4aafa3w2zm8" data-measureuri="http://www.edamam.com/ontologies/edamam.owl#Measure_gram" value="Gram">Gram</option>
                <option data-hints="food_ai215e5b85pdh5ajd4aafa3w2zm8" data-measureuri="http://www.edamam.com/ontologies/edamam.owl#Measure_pound" value="Pound">Pound</option>
                <option data-hints="food_ai215e5b85pdh5ajd4aafa3w2zm8" data-measureuri="http://www.edamam.com/ontologies/edamam.owl#Measure_ounce" value="Ounce">Ounce</option>
                <option data-hints="food_ai215e5b85pdh5ajd4aafa3w2zm8" data-measureuri="http://www.edamam.com/ontologies/edamam.owl#Measure_liter" value="Liter">Liter</option>
                <option data-hints="food_ai215e5b85pdh5ajd4aafa3w2zm8" data-measureuri="http://www.edamam.com/ontologies/edamam.owl#Measure_milliliter" value="Milliliter">Milliliter</option>
                <option data-hints="food_ai215e5b85pdh5ajd4aafa3w2zm8" data-measureuri="http://www.edamam.com/ontologies/edamam.owl#Measure_cubic_inch" value="Cubic inch">Cubic inch</option>
                <option data-hints="food_ai215e5b85pdh5ajd4aafa3w2zm8" data-measureuri="http://www.edamam.com/ontologies/edamam.owl#Measure_quart" value="Quart">Quart</option>
                <option data-hints="food_ai215e5b85pdh5ajd4aafa3w2zm8" data-measureuri="http://www.edamam.com/ontologies/edamam.owl#Measure_drop" value="Drop">Drop</option>
                <option data-hints="food_ai215e5b85pdh5ajd4aafa3w2zm8" data-measureuri="http://www.edamam.com/ontologies/edamam.owl#Measure_gallon" value="Gallon">Gallon</option>
                <option data-hints="food_ai215e5b85pdh5ajd4aafa3w2zm8" data-measureuri="http://www.edamam.com/ontologies/edamam.owl#Measure_dash" value="Dash">Dash</option>
                <option data-hints="food_ai215e5b85pdh5ajd4aafa3w2zm8" data-measureuri="http://www.edamam.com/ontologies/edamam.owl#Measure_fluid_ounce" value="Fluid ounce">Fluid ounce</option>
                <option data-hints="food_ai215e5b85pdh5ajd4aafa3w2zm8" data-measureuri="http://www.edamam.com/ontologies/edamam.owl#Measure_pint" value="Pint">Pint</option>
                <option data-hints="food_ai215e5b85pdh5ajd4aafa3w2zm8" data-measureuri="http://www.edamam.com/ontologies/edamam.owl#Measure_pinch" value="Pinch">Pinch</option>
                <option data-hints="food_ai215e5b85pdh5ajd4aafa3w2zm8" data-measureuri="http://www.edamam.com/ontologies/edamam.owl#Measure_cup" value="Cup">Cup</option>
                <option data-hints="food_ai215e5b85pdh5ajd4aafa3w2zm8" data-measureuri="http://www.edamam.com/ontologies/edamam.owl#Measure_teaspoon" value="Teaspoon">Teaspoon</option>
                <option data-hints="food_ai215e5b85pdh5ajd4aafa3w2zm8" data-measureuri="http://www.edamam.com/ontologies/edamam.owl#Measure_tablespoon" value="Tablespoon">Tablespoon</option>
                <option data-hints="food_ai215e5b85pdh5ajd4aafa3w2zm8" data-measureuri="http://www.edamam.com/ontologies/edamam.owl#Measure_dessert_spoon" value="Dessert spoon">Dessert spoon</option>
                <option data-hints="food_ai215e5b85pdh5ajd4aafa3w2zm8" data-measureuri="http://www.edamam.com/ontologies/edamam.owl#Measure_strip" value="Strip">Strip</option>
                <option data-hints="food_ai215e5b85pdh5ajd4aafa3w2zm8" data-measureuri="http://www.edamam.com/ontologies/edamam.owl#Measure_serving" value="Serving">Serving</option>
                <option data-hints="food_ai215e5b85pdh5ajd4aafa3w2zm8" data-measureuri="http://www.edamam.com/ontologies/edamam.owl#Measure_slice" value="Slice">Slice</option>
                <option data-hints="food_ai215e5b85pdh5ajd4aafa3w2zm8" data-measureuri="http://www.edamam.com/ontologies/edamam.owl#Measure_bunch" value="Bunch">Bunch</option>
                <option data-hints="food_ai215e5b85pdh5ajd4aafa3w2zm8" data-measureuri="http://www.edamam.com/ontologies/edamam.owl#Measure_unit" value="Whole">Whole</option>
                <option data-hints="food_ai215e5b85pdh5ajd4aafa3w2zm8" data-measureuri="http://www.edamam.com/ontologies/edamam.owl#Measure_carrot" value="Carrot">Carrot</option>
            </select>
        </div>
    </div>
    
    <div class="w-full">
        <hr class="w-[20%] border-2 my-5 mx-auto">
    </div>
</div>`).insertBefore(btnAddIngredients)
})

$(document).on("click",".btnRemoveIngredients", (e) => {
    // console.log(e.target.parentElement.parentElement.parentElement.parentElement)
    $(e.target).closest(".ingredients").remove();
})

btnAnalize.on("click", () => {
    let ingLength = $(".ingredients").length
    let ingr = [];
    for(a = 0; a < ingLength; a++){
        let ingredient = $(".ingredients").eq(a).find("[name=food_quantity]:first").val()+
        " "+$(".ingredients").eq(a).find("[name=food_measure]:first").val()+" "+$(".ingredients").eq(a).find("[name=food_name]:first").val()
        ingr.push(ingredient);

    }

    const data = {
        title : $("#title"),
        ingr,
    };

    axios({
        method: 'POST',
        url: "https://api.edamam.com/api/nutrition-details?app_id=5142b005&app_key=429fbc5c81937734d42c34c0240d9903%09",
        data: data,
        headers: {
            "Content-Type":"application/json",
            "Accept":"application/json"
        }
    })
    .then((res) => {
        let nutrition = res.data.totalNutrients;
        // console.log(res)
        $("#titleText").text($("#title").val())
        $("#calories").text(res.data.calories);
        $("#totalFat").text(nutrition.FAT.quantity.toFixed(0)+" "+nutrition.FAT.unit);
        $("#saturatedFat").text(nutrition.FASAT.quantity.toFixed(0)+" "+nutrition.FASAT.unit);
        $("#cholesterol").text(nutrition.CHOLE.quantity.toFixed(0)+" "+nutrition.CHOLE.unit);
        $("#sodium").text(nutrition.NA.quantity.toFixed(0)+" "+nutrition.NA.unit);
        $("#carbohydrate").text(nutrition.CHOCDF.quantity.toFixed(0)+" "+nutrition.CHOCDF.unit);
        $("#dietaryFiber").text(nutrition.FIBTG.quantity.toFixed(0)+" "+nutrition.FIBTG.unit);
        $("#totalsugar").text(nutrition.SUGAR.quantity.toFixed(0)+" "+nutrition.SUGAR.unit);
        $("#protein").text(nutrition.PROCNT.quantity.toFixed(0)+" "+nutrition.PROCNT.unit);
        $("#vitaminD").text(nutrition.VITD.quantity.toFixed(0)+" "+nutrition.VITD.unit);
        $("#calcium").text(nutrition.CA.quantity.toFixed(0)+" "+nutrition.CA.unit);
        $("#iron").text(nutrition.FE.quantity.toFixed(0)+" "+nutrition.FE.unit);
        $("#vitaminC").text(nutrition.VITC.quantity.toFixed(0)+" "+nutrition.VITC.unit);
        $("#zinc").text(nutrition.ZN.quantity.toFixed(0)+" "+nutrition.ZN.unit);
    })
})