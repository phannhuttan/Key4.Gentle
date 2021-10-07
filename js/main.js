$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 900)
            $("#scrolltop").hide("slow")
        else
            $("#scrolltop").show("slow")
    })
})
$(document).ready(function() {
    $("#gototop").hide()
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 100)
            $("#gototop").show()
        else
            $("#gototop").hide()
    })
    $("#gototop").click(function() {
        $("html,body").animate({
            scrollTop: 0
        }, 1500)
    })
})