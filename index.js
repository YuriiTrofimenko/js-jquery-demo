$(window).ready(() => {
    $('form').submit((ev) => {
        ev.preventDefault()
        console.log($(ev.target))
        console.log($(ev.target).serialize())
        $(ev.target).fadeOut(2000).fadeIn(1000)
        $('form').find('input[type=submit]').val('Send')
        $('body').attr('lang', 'ru')
        console.log($('body').attr('lang'))
        console.log($('body').data('myAttr'))
        $('form').find('input').css('display', 'none').filter('input[type=submit]').css('display', 'block')
        $.get('https://api.github.com/users/userLogin').done((resp) => {
            console.log(resp)
        })
    })
})