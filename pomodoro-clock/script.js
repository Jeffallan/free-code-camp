$(function() {
            //vars
            var work = parseInt($('#working').val());
            var rest = parseInt($('#resting').val());
            $('.workClock').hide();
            $('.restClock').hide();
            //buttons
            $('#pluswork').click(function(event) {
                    if (work <= 59) {
                        work = work + 1;
                        $('#working').val(function(i, old) {
                            return ++old;
                        });
                    }
                    else{
                        alert('Workaholic! take more fequent breaks.')
                    }
                });


                $('#minuswork').click(function(event) {
                if (work>=2){
                    work = work - 1;
                    $('#working').val(function(i, old) {
                        return --old;
                    });
                   }
                   else{
                    alert("Sorry I can't turn back time.")
                   }
                });

                $('#plusbreak').click(function(event) {
                if (rest<=59){
                    rest = rest + 1;
                    $('#resting').val(function(i, old) {
                        return ++old;
                    });
                   }
                   else{
                    alert('Sloth is one of the 7 deadly sins.')
                   }
                });

                $('#minusbreak').click(function(event) {
                if (rest>=2){
                    rest = rest - 1;
                    $('#resting').val(function(i, old) {
                        return --old;
                    });
                    }
                    else{
                        alert('All work and no play... well you know the rest.')
                    }
                });
                //countdown-clock
                $('.start-btn').click(function(event) {
                    var wclock = $('.workClock').FlipClock({
                        clockFace: 'MinuteCounter',
                        countdown: true,
                        autoStart: true
                    });
                    var rclock = $('.restClock').FlipClock({
                        clockFace: 'MinuteCounter',
                        countdown: true,
                        autoStart: true
                    });

                    $('.start-btn').hide()
                    $('.workClock').show();
                    $('<h3 style="text-align:center;" id="workTitle">Work Remaining</h3><br/>').insertBefore(".start-btn")
                    wclock.setTime(work * 60);
                    rclock.setTime(rest * 60);
                    wclock.start();
                    checkWorkTime();
                    checkRestTime();

                    function checkWorkTime() {

                        if (wclock.getTime() == 0) {
                            $('.workClock').hide();
                            $('#workTitle').remove();
                            $('.restClock').show();
                            wclock.stop();
                            $('<h3 style="text-align:center; margin-top:-5px;" id="restTitle">Rest Remaining</h3><br/>').insertBefore(".start-btn")
                            wclock.setTime(work * 60);
                            rclock.start()
                        }
                        setTimeout(function() {
                            checkWorkTime();
                        }, work * 60 * 1000);
                    }

                    function checkRestTime() {
                        if (rclock.getTime() == 0) {
                            rclock.stop()
                            $('#restTitle').remove();
                            $('.restClock').hide();
                            $('.start-btn').show();
                            rclock.setTime(rest * 60);
                        }
                        setTimeout(function() {
                            checkRestTime();
                        }, rest * 60 * 1000);
                    }
                });
                //end $(function)()
            });