$(document).ready(function () {

    // Input only numbers
    $('.value-input').bind("change keyup input click", function() {
        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, '');
        }
    });

    // Send form after 'keypress' Enter
    $(document).on('keypress',function(e) {
        if(e.which == 13) {
            e.preventDefault();

            var form = $('.filter');
            var data = form.serialize();

            $.ajax({
                url: form.attr('action'),
                method: 'POST',
                data: data,
                success: function (response) {
                    var new_blog = $(response).find('.table1').html();
                    $('.table1').html(new_blog);
                }
            });

            // After click on reset button, returm first view of table
            $('.reset-form').click(function (e) {
                e.preventDefault();

                $('.filter')[1].reset();

                var form = $('.filter');
                var data = form.serialize();

                $.ajax({
                    url: form.attr('action'),
                    method: 'POST',
                    data: data,
                    success: function (response) {
                        var new_blog = $(response).find('.table1').html();
                        $('.table1').html(new_blog);
                    }
                });
            });
        }
    });

    // Send form and change table1 on table2
    $('.group-form').click(function (e) {
        e.preventDefault();

        var form = $('.form-group');
        var data = form.serialize();

        $.ajax({
            url: form.attr('action'),
            method: 'POST',
            data: data,
            success: function (response) {
                $('.table1').css('display', 'none'); // hide table1
                var table = $('.table2').css('display', 'block'); // show table2
                var new_blog = $(response).find('.table2').html();
                table.html(new_blog);
            }
        });

        // After click on reset button, returm first view of table1
        $('.reset-group').click(function (e) {
            e.preventDefault();

            $('.filter')[1].reset();

            var form = $('.filter');
            var data = form.serialize();
            var url = $(this).attr('data-toggle');

            $.ajax({
                url: url,
                method: 'POST',
                data: data,
                success: function (response) {
                    $('.table1').css('display', 'block');
                    var table = $('.table2').css('display', 'none');
                    var new_blog = $(response).find('.table1').html();
                    $('.table1').html(new_blog);
                }
            });
        });


    })


}); // end ready