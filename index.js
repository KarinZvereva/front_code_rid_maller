'use strict'
console.log('ready')
var rus = ['а','б','в','г','д','е','ё','ж','з','и','й','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','щ','ъ','ы','ь','э','ю','я']
var en = ['a','d','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
$('document').ready(function(){
    rus.forEach(e=>{
        $('.alphabet__grid').append( "<div class='item'>"+ e +"</div>" );
    })

    $('.alphabet__choose__set').click(function(event){
        console.log(event)
        
    })
})

