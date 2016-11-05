//NProgress Page Loader
NProgress.configure({ easing: 'ease', speed: 800 });
NProgress.start();
$(window).load(function() {
    NProgress.done();
});
