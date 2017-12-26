var quoteArray = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis mollis pharetra. Donec a augue leo. Ut finibus malesuada sem, commodo faucibus ligula convallis sed. Vestibulum vitae dolor sit amet purus ultricies facilisis. Aenean eleifend sagittis justo, vestibulum tristique magna dignissim vitae. Phasellus non arcu aliquam, pretium magna quis, porttitor erat. Integer tincidunt diam mollis, rutrum enim ut, porta nunc. Integer metus diam, rhoncus non pulvinar mattis, tempus vel orci. Fusce eleifend mattis dapibus. Praesent vel ligula quis erat lacinia rhoncus eu a quam. Integer cursus vitae ligula sed varius. Pellentesque auctor odio a enim maximus tincidunt. Donec elementum dignissim fringilla. Praesent auctor, augue et accumsan ornare, turpis felis volutpat lorem, sollicitudin vehicula lorem tellus eget orci. ', 
    'Duis at lacinia diam. Nunc sodales maximus dapibus. Fusce efficitur augue nec nisi dignissim, sed auctor ligula aliquet. Curabitur consequat augue non nulla fringilla sodales. Sed porttitor efficitur rhoncus. Quisque ut viverra mauris. Suspendisse lacinia magna scelerisque volutpat aliquam. Nunc convallis elit ipsum, ut convallis sapien condimentum eget. Curabitur sed fringilla urna. Praesent eu porta justo. Donec aliquet sem est. Nunc ante ex, molestie eu augue eget, dignissim luctus tellus.', 
    'Aliquam erat volutpat. Aliquam ut ultricies nunc. Quisque faucibus nisi id tortor lacinia congue. Morbi velit purus, luctus vitae facilisis ac, aliquet ornare augue. Aliquam ut augue eget nisi ullamcorper efficitur id vitae lorem. Donec placerat sit amet elit non tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam ut mi tempor, faucibus dolor at, malesuada purus. Fusce laoreet maximus nisl vitae ultrices. Aliquam erat volutpat. Etiam non cursus quam. Fusce posuere elit sed lorem dictum, eget auctor augue porta. ', 
    'In sagittis posuere libero sit amet malesuada. Nulla eget mi nulla. Pellentesque fringilla tortor leo, eget pulvinar libero tempor eu. Suspendisse potenti. Nunc maximus odio et scelerisque vulputate. Quisque lectus ligula, venenatis vel ante et, ornare ullamcorper metus. Vivamus sed erat lacus. Vivamus semper faucibus nibh, quis congue eros imperdiet vitae. Aenean mattis velit ligula, non semper velit malesuada id. Suspendisse vitae arcu est. Fusce sapien nunc, ultrices at nisl quis, tristique dictum orci. '];
var i = 0;

$( document ).ready(function() {
    $('#quoteButton').click(function(){
        $('#quoteArea').html('<p>'+ quoteArray[i]+ '</p>');
        if(i < 3){
            i++;
        }else{
            i = 0;
        }

    });
});
