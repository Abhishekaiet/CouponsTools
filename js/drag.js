$('.draggable').draggable({
    revert: true,
    revertDuration: 0,
    stack: ".draggable",
    scope: "draggable"
    //helper: 'clone'

});
$('.droppable').droppable({
    accept: ".draggable",
    scope: "draggable",
    drop: function (event, ui) {
        var droppable = $(this);
        var draggable = ui.draggable;
        var clone = draggable.clone();
        clone.draggable({
            revert: true,
            revertDuration: 0,
            stack: ".draggable",
            scope: "draggableClone"
            //helper: 'clone'

        });
        // Move draggable into droppable
        $(this).append(clone);
        clone.css({
            top: '5px',
            left: '5px'
			
        });
        clone.addClass("draggableClone")
        //  clone.removeClass("draggable")
    }
});
$('.droppable2').droppable({
    accept: ".draggableClone",
    scope: "draggableClone",
    drop: function (event, ui) {
        $(this).append(ui.draggable)
        ui.draggable.css({
            top: '5px',
            left: '5px'
			
        });


    }
})










