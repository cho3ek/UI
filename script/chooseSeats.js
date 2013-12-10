$(document).ready(function () {

    var settings = {
        rows: 5,
        cols: 15,
        rowCssPrefix: 'row-',
        colCssPrefix: 'col-',
        seatWidth: 35,
        seatHeight: 35,
        seatCss: 'seat',
        selectedSeatCss: 'selectedSeat',
        selectingSeatCss: 'selectingSeat'
    };

    var init = function (reservedSeat) {
        var count = 1;
        var str = [], seatNo, className;
        for (i = 0; i < settings.rows; i++) {
            for (j = 0; j < settings.cols; j++) {
                seatNo = count;
                className = settings.seatCss + ' ' + settings.rowCssPrefix + i.toString() + ' ' + settings.colCssPrefix + j.toString();
                if ($.isArray(reservedSeat) && $.inArray(seatNo, reservedSeat) != -1) {
                    className += ' ' + settings.selectedSeatCss;
                }
                str.push('<li class="' + className + '"' +
                  'style="top:' + (i * settings.seatHeight).toString() + 'px;left:' + (j * settings.seatWidth).toString() + 'px">' +
                  '<a title="' + seatNo + '">' + seatNo + '</a>' +
                  '</li>');
                count = count +1;
            }
        }
        $('#place').html(str.join(''));
    };

            //case I: Show from starting
            //init();

            //Case II: If already booked
            var bookedSeats = [50,51,52,53,54,55];
            init(bookedSeats);


            $('.' + settings.seatCss).click(function () {
             if ($(this).hasClass(settings.selectedSeatCss)){
                alert('This seat is already reserved');
            }
            else{
                $(this).toggleClass(settings.selectingSeatCss);
            }
        });

        //     $('#btnShow').click(function () {
        //         var str = [];
        //         $.each($('#place li.' + settings.selectedSeatCss + ' a, #place li.'+ settings.selectingSeatCss + ' a'), function (index, value) {
        //             str.push($(this).attr('title'));
        //         });
        //         alert(str.join(','));
        //     })

        //     $('#btnShowNew').click(function () {
        //         var str = [], item;
        //         $.each($('#place li.' + settings.selectingSeatCss + ' a'), function (index, value) {
        //             item = $(this).attr('title');                   
        //             str.push(item);                   
        //         });
        //         alert(str.join(','));
        //     })
        });
