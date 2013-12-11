


$(document).ready(function () {

    var settings = {
        rows: 9,
        cols: 20,
        rowCssPrefix: 'row-',
        colCssPrefix: 'col-',
        seatWidth: 45,
        seatHeight: 45,
        seatCss: 'seat',
        selectedSeatCss: 'selectedSeat',
        selectingSeatCss: 'selectingSeat'
    };
	
		var price = 14.99;
    var init = function (reservedSeat) {
        var count = 1;
		var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","R","S","T","U","W","X","Y","Z"];
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
                  '<a style="font-size:9px;color:#888;font-weight:bold;background-color:#dadada;" title="<tr style=vertical-align:middle><td style=width:45px;><img src=images/seats/green.png style=float:left;padding:5px;padding-top:0px;width:35px; /></td><td style=width:55px;>Row: <b>' + letters[i] + '</b></td><td style=width:55px;>Seat: <b>' + j +'</b></td><td><small>&ensp; €' + price +'</small></td></tr>">' +'</a>' +
                  '</li>');
                count = count +1;
            }
        }
        $('#place').html(str.join(''));
    };

            //case I: Show from starting
            //init();

            //Case II: If already booked
            var bookedSeats = [54,55,56,82,83];
			var i = 108;
			while(i<200){
				i++;
				bookedSeats.push(i);
			}
            init(bookedSeats);


            $('.' + settings.seatCss).click(function () {
             if ($(this).hasClass(settings.selectedSeatCss)){
                alert('Sorry! This seat is already reserved');
            }
            else{
                $(this).toggleClass(settings.selectingSeatCss);
            }
        });

				 $("#tickets").text('');
                 $("#tickets").append('<span style="text-transform:uppercase;font-size:14px;text-decoration:underline;font-weight:bold;">Selected seats:</span>&nbsp;&nbsp; 0<br/>'); 
                

             $('#place li').click(function () {
                 var str = [], item;
                 $.each($('#place li.' + settings.selectingSeatCss + ' a'), function (index, value) {
                     item = $(this).attr('title');                   
                     str.push(item);                   
                 });
				
                 $("#tickets").text(''); 
                 $("#tickets").append('<span style="text-transform:uppercase;font-size:14px;text-decoration:underline;font-weight:bold;">Selected seats:</span>&nbsp;&nbsp;' + str.length +'&nbsp;&nbsp;<br/>&nbsp;<br/><table>' + str.join('') + '</table><div style="margin-left:170px;border-top:1px solid #dadada; padding:5px;"><b>€ '+price*(str.length)+'</b></div>'); 
				 //alert(str.join(','));
             })
        });
