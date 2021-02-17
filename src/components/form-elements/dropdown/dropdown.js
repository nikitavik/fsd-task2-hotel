$(document).ready(function (){
    // $(".dropdown__field").click(function () {
    //     $(".dropdown__options").slideToggle()
    //     $(".dropdown__field").toggleClass("expand")
    // })

    const dropdown = {
        open: ()=>{
            $(".dropdown__options").slideToggle()
            $(".dropdown__field").toggleClass("expand")
        },
        plus: $(),
        minus:$(),
        reset:$(),
        confirm:$()
    }


    $(".dropdown__field").click(function () {dropdown.open()})
})
