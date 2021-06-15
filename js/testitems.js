
    var itemsJSON;
    function testfunc(){
        $.getJSON("js/items.json", function (data) {
            itemsJSON = data;
            alert(itemsJSON["boots"]["ms"]);
        });
    }; 