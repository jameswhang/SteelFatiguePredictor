$(document).ready(function() {
        $('.predict').click(function(){
            var C = $('.C').val(),
                Si = $('.Si').val(),
                Mn = $('.Mn').val(),
                P = $('.P').val(),
                S = $('.S').val(),
                Ni = $('.Ni').val(),
                Cr = $('.Cr').val(),
                Cu = $('.Cu').val(),
                Mo = $('.Mo').val(),
                NT = $('.NT').val(),
                THT = $('.THT').val(),
                THt = $('.Thtt').val(),
                THQCr = $('.THQCr').val(),
                CT = $('.CT').val(),
                Ct = $('.Ctt').val(),
                DT = $('.DT').val(),
                Dt = $('.Dtt').val(),
                QmT = $('.QmT').val(),
                TT = $('.TT').val(),
                Tt = $('.Ttt').val(),
                TCr = $('.TCr').val(),
                RedRatio = $('.RedRatio').val(),
                dA = $('.dA').val(),
                dB = $('.dB').val(),
                dC = $('.dC').val();
        var result = 
            0.3248 * NT +
            0.3778 * THT +
            -0.6379 * THt +
            -4.1539 * THQCr +
            0.3345 * CT +
            0.1279 * Ct +
            -0.4129 * DT +
            -0.667  * Dt +
            -0.2306 * QmT +
            -0.9196 * TT +
            7.3843 * Tt +
            -0.6018 * TCr +
            540.2753 * C +
            58.138  * Si +
            -21.1052 * Mn +
            -861.7551 * P +
            698.6487 * S +
            21.3835 * Ni +
            68.1506 * Cr +
            -143.3001 * Cu +
            167.0982 * Mo +
            0.0052 * RedRatio +
            341.9743 * dA +
            -187.7271;
        console.log(result);
        $('.prediction').html("<p>Fatigue Strength Prediction: " + result + "</p>");
        });
});
