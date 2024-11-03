const recepieId = location.hash.substr(1);
let recepie = recepies.find(function (recepie) {
    return recepie.id === recepieId;
})

if (recepie === undefined) {
    location.assign('/index.html');
}

$('#recepie-name').val(recepie.name);
$('#recepie-steps').val(recepie.description);
renderIngredients(recepie);

$('#recepie-name').on('input', function (e) {
    recepie.name = e.target.value;
    saveRecepies(recepies);
})

$('#recepie-steps').on('input', function (e) {
    recepie.description = e.target.value;
    saveRecepies(recepies);
})

$('#delete-recepie').click(function () {
    const recepieIndex = recepies.findIndex(recepie => recepie.id === recepieId);
    if(recepieIndex != -1){
        recepies.splice(recepieIndex, 1);
    }
    saveRecepies(recepies);
    location.assign('/index.html');
})

$('#btn-ingredient').click(function () {
    let ingredient = '';
    let id = uuidv4();
    if ($('#add-ingredient').val().length > 0) {
        ingredient = $('#add-ingredient').val();    
    }else{
        ingredient = '';
    }
    
    recepie.ingredients.push({
        id: id,
        name: ingredient,
        flag: false
    });

    saveRecepies(recepies);
    renderIngredients(recepie);
    $('#add-ingredient').val('');
})

function renderIngredients(recepie) {
    $('.ingredients').empty();
    $.each(recepie.ingredients, function (index, element) {
        $('.ingredients').append(generateIngredientDOM(element));
    })
}

function toggleIngredient(element) {
    element.flag = !element.flag;
}

function generateIngredientDOM(element) {
    const rootEl = $('<div>');
    const checkboxEl = $('<input type="checkbox" />');
    const textEl = $('<span>');
    const buttonEl = $('<a>');
    const labelEl = $('<label>');
    const spanEl = $('<span>');
    
    spanEl.addClass('spanStyle');
    buttonEl.attr('href', '#');
    rootEl.addClass('form-check');
    rootEl.addClass('ingredient-card');
    rootEl.addClass('col-sm-4');
    checkboxEl.addClass('form-check-input');
    
    buttonEl.text('Remove');
    checkboxEl.attr('checked', element.flag);

    buttonEl.click(function () {
        removeIngredient(element.id);
        saveRecepies(recepies);
        renderIngredients(recepie);
    })

    checkboxEl.change(function () {
        toggleIngredient(element);
        saveRecepies(recepies);
        renderIngredients(recepie);
    })

    if(element.name.length > 0){
        textEl.text(element.name);
    }else{
        textEl.text('Unnamed ingredient');
    }
    
    labelEl.append(checkboxEl);
    labelEl.append(textEl);
    rootEl.append(labelEl);
    spanEl.append(buttonEl);
    rootEl.append(spanEl);

    return rootEl;
}

function removeIngredient(id) {
    const ingredientIndex = recepie.ingredients.findIndex(ingredient => ingredient.id === id);
    if(ingredientIndex != -1){
        recepie.ingredients.splice(ingredientIndex, 1);
    }
}