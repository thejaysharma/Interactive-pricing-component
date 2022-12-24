var check = false;
var slider_value;
function Discount() {
    var checkBox = document.getElementById("myCheck");
    if (checkBox.checked == true) {
        check = true;
        document.getElementById('rangeValue').innerHTML = slider_value - (slider_value * 25 / 100);
    } else {
        check = false;
        document.getElementById('rangeValue').innerHTML = slider_value;
    }
};

function RangeSlider(value) {
    slider_value = value;

    if (check == true){
        document.getElementById('rangeValue').innerHTML = value-(value*25/100);
    }
    else{
        document.getElementById('rangeValue').innerHTML = value;
    }

    var x = value*2.6;
    var color = 'linear-gradient(90deg, hsl(174, 77%, 80%)' + x + '% , hsl(224, 65%, 95%)' + x + '%)';
    document.getElementById('myrange').style.background = color;

    const PageViewsValue = {
        0: "0K",
        8: "10K",
        12: "50K",
        16: "100K",
        24: "500K",
        36: "1M"
    };
    if (value in PageViewsValue) {
        document.getElementById('pageviews__value').innerHTML = PageViewsValue[value];
    }

};
