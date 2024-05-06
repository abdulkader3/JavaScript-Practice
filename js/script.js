let ad = document .querySelector('.ad')
let likha = document .querySelector('.likha')
let batton = document .querySelector('.batton')

batton.addEventListener( 'click',()=>{
    ad.innerHTML = likha.value
    ad.style = 'color:red; font-size:100px;'}
 )
 let pas = prompt("First thing, first give us your password")
 if(pas == 696969){
     let fd = prompt('favorite days')
     if(fd >=100){
         alert('Congratulations')
     }
     else{alert("just get already")}
 }
 else(alert('get lost'))