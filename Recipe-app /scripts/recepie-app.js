let recepies = getSavedRecepies();

const filters = {
    searchText: ''
}

function getSummaryInfo(element) {
    const summaryEl = $('<p>');
    let falses=0,trues=0;
    $.each(element.ingredients, function name(index, element) {
        if (element.flag) {
            trues++;
        }else{
            falses++;
        }
    })

    if (element.ingredients.length == trues) {
        summaryEl.text('You have all ingredients');
    }else if(element.ingredients.length == falses){
        summaryEl.text('You have none of ingredients');
    }else{
        summaryEl.text('You have some of ingredients');
    }
    return summaryEl;
}

function renderRecepies(recepies, filters) {
    let filteredRecepies = $.grep(recepies, function (element) {
        return element.name.toLowerCase().includes(filters.searchText.toLowerCase());
    })
    $('.recepies').empty();
    $.each(filteredRecepies, function (index, element) {
        let summaryEl = getSummaryInfo(element);
        summaryEl.addClass('list-item__subtitle');
        let cardEl = $('<a>');
        cardEl.addClass('list-item');
        let titleEl = $('<p>');
        titleEl.addClass('list-item__title');
        if(element.name.length > 0){
            titleEl.text(element.name);
        }else{
            titleEl.text('Unnamed Recepie');
        }
        cardEl.attr('href', '/edit.html#'+element.id);
        cardEl.append(titleEl);
        cardEl.append(summaryEl);
        $('.recepies').append(cardEl);
    })
}

$('#filter-recepies').on('input', function (e) {
    filters.searchText = e.target.value;
    renderRecepies(recepies, filters);
})

$('#add-recepie').click(function () {
    const id = uuidv4();
    recepies.push({
        id: id,
        name: '',
        description: '',
        ingredients: []
    })
    saveRecepies(recepies);
    location.assign('/edit.html#'+id);
})

function getSavedRecepies() {
    const recepiesJSON = localStorage.getItem('recepies');
    if (recepiesJSON !== null) {
        return JSON.parse(recepiesJSON);    
    }else{
        return [];
    }
    
}

function saveRecepies(recepies) {
    localStorage.setItem('recepies', JSON.stringify(recepies));
}

renderRecepies(recepies, filters);