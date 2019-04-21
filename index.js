'use strict'
console.log('ready')
var rus = ['а','б','в','г','д','е','ё','ж','з','и','й','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','щ','ъ','ы','ь','э','ю','я']
var en = ['a','d','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var numbers = [0,1,2,3,4,5,6,7,8,9];
var sign = ['.', ',','\\','+','Пробел','-','*','!','&','?','$','%','^','#','№','@','"','(',')','[',']','{','}',':',';','_','='];
var bigRus = rus.map(e=>{ return e.toUpperCase()});
var bigEn = en.map(e=>{ return e.toUpperCase()});
var count = 0;

var param = {
    r: 1,
    m: 1
}
$('document').ready(function(){
    
    $('.count').text(count);

    var htmlText = toString(rus, 'rus') + toString(bigRus, 'rus') + toString(bigEn, 'en') + toString(en, 'en') + 
    toString(numbers, 'numbers') + toString(sign, 'sign');
    $('.alphabet__grid').append(htmlText);


    $('.alphabet__choose__set').click(function(event){
        var symbols = event.target.value;
        if(symbols && $(event.target).prop('checked')){
            $('.' + symbols).addClass('selected');
            $('.selected').css('background-color','#e7f5fc');
        }else{
            $('.' + symbols).css('background-color','#ffffff');
            $('.' + symbols).removeClass('selected');
        }  
        changeParam();
    })

    $('.item').click(function(){
        var self = $(this);
        if(self.hasClass('selected')){
            self.css('background-color','#ffffff');
            self.removeClass('selected');
        }else{
            self.css('background-color','#e7f5fc');
            self.addClass('selected');
        }
        changeParam();
    })

    //change m
    $('.input__data__count-value').change(function(){
        var m = $(this).val();
        param.m = m>0 ? m : 1;
        setOpportunityCountCode();
        setOpportunityLengthCode();
        setOpportunityErrorCode();
    });

    //change degree (r)
    $('.input__data__degree-value').change(function(){
        var r = $(this).val();
        param.r = r>0 ? r : 1;
        setOpportunityErrorCode();
    });

})

//alphabets to sting
function toString(array, nameClass){
    var str = "";
    array.forEach(e=>{
       str += "<div class='item " + nameClass + "'>"+ e +"</div>"+'\n' ;
    })
    return str;
}

function setOpportunityCountCode(){
    var k = 1;
    var m_fact = factorial(param.m);
    for(let i = 1; i<=param.r; i++){
        k += m_fact/(factorial(param.m-param.r)*factorial(param.r));
    }
    $('.block__data__count-value').val(Math.pow(2,Math.floor(k)));

}
function setOpportunityLengthCode(){
    $('.block__data__length-value').val(Math.pow(2,param.m));

}
function setOpportunityErrorCode(){
    var d = Math.pow(2, param.m - param.r);
    $('.block__data__findError-value').val(d-1);
    $('.block__data__fixError-value').val(Math.floor((d-1)/2));
}
function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
  }

