var app = {
    initialize: function() {
        var self = this;
        this.store = new MemoryStore(function() {
            $('body').html(new HomeView(self.store).render().el);
        });
        this.registerEvents();
    },
    
    showAlert: function (message, title) {
        if (navigator.notification) {
            navigator.notification.alert(message, null, title, 'OK');
        } else {
            alert(title ? (title + ": " + message) : message);
        }
    },
    
    registerEvents: function() {
        var self = this;
        // Check of browser supports touch events...
        if (document.documentElement.hasOwnProperty('ontouchstart')) {
            // ... if yes: register touch event listener to change the "selected" state of the item
            $('body').on('touchstart', 'a', function(event) {
                $(event.target).addClass('tappable-active');
            });
            $('body').on('touchend', 'a', function(event) {
                $(event.target).removeClass('tappable-active');
            });
        } else {
            // ... if not: register mouse events instead
            var body = $('body');
            var e = $('#eLdist');
            $(".header").mousedown(function(event) {
                alert("FUC");
                $(event.target).addClass('tappable-active');
            });
            
            $('a').on('mouseup', function(event) {
                alert("you");
                $(event.target).removeClass('tappable-active');
            });
        }
    }
};

app.initialize();