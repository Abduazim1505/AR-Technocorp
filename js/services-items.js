$(document).on('click', '.services-items .services-item', function(){
    $(this).addClass('active_services').siblings().removeClass('active_services')
})