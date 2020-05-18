$(document).ready(function () {
  
$('#rangeSum').ionRangeSlider({
    min: 10,
    max: 5000,
    step: 10,
    postfix: "$",
    onStart: function (data) {
        $('#sum').val(data.from);
    },
    onChange:function (data) {
        $('#sum').val(data.from);
    }
});

var sumRange = $('#rangeSum').data('ionRangeSlider'),
    min = 10,
    max = 5000;

$('#sum').on('change keyup', function () {
    var val = $(this).prop('value');
    if (val < min) {
        val = min;
    } else if (val > max) {
        val = max;
    }
    sumRange.update({
        from: val
    });
});
})