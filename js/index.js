$(document).scroll(()=>{
    if($(document).scrollTop()>$("#Home").offset().top){
        
        $("#main-nav").css("backgroundColor","#fff")
        $("#main-nav").css("opacity","1")
    }else{
        $("#main-nav").css("backgroundColor","transparent")
    }
})
