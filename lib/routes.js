/**
 * Created by wander on 7/1/17.
 */
// if (Meteor.isClient) {
//     Accounts.onLogin(function () {
//         FlowRouter.go('recipe-book');
//     });
//
//     Accounts.onLogout(function () {
//         FlowRouter.go('home');
//     });
// }


FlowRouter.triggers.enter([function(context, redirect){
    let path = context.route.name;
    if(!Meteor.userId()){
        FlowRouter.go('home');
    }else{
        if(path == 'home') FlowRouter.go('discover');
        if(!Roles.userIsInRole(Meteor.userId(), 'user-admin')) {
            if(path == 'admin') FlowRouter.go('discover');
        }
    }
}]);

FlowRouter.route('/', {
    name: 'home',
    action() {
        GAnalytics.pageview();
        BlazeLayout.render('HomeLayout');
    },
});

FlowRouter.route('/rules', {
    name: 'rules',
    action() {
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout', {main: 'Rules'});
    },
});

FlowRouter.route('/discover', {
    name: 'discover',
    action() {
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout', {main: 'Discover'});
    },
});

FlowRouter.route('/chat', {
    name: 'chat',
    action() {
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout', {main: 'Chat'});
    },
});

var adminRoutes = FlowRouter.group({
    prefix: '/admin',
    name: 'admin'
});

adminRoutes.route('/', {
    name: 'admin',
    action() {
        BlazeLayout.render('AdminLayout', {main: 'Admin'});
    },
});

adminRoutes.route('/users', {
    name: 'users',
    action() {
        BlazeLayout.render('AdminLayout', {main: 'Users'});
    },
});

adminRoutes.route('/data', {
    name: 'data',
    action() {
        BlazeLayout.render('AdminLayout', {main: 'Data'});
    },
});

FlowRouter.route('/*', {
    name: 'other',
    action() {
        BlazeLayout.render('MainLayout', {main: ''});
    },
});