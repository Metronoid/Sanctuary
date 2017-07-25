/**
 * Created by wander on 7/7/17.
 */
Template.AdminSideNav.onCreated(function() {
    Session.set('admin-nav', FlowRouter.current().route.name);
});

Template.AdminSideNav.helpers({
    active: (check)=> {
        return Session.get('admin-nav') == check ? 'active' : '';
    }
});


Template.AdminSideNav.events({
    'click .side-nav-admin': ()=> {
        Session.set('admin-nav', 'admin');
    },
    'click .side-nav-users': ()=> {
        Session.set('admin-nav', 'users');
    },
    'click .side-nav-database': ()=> {
        Session.set('admin-nav', 'data');
    },
    'click .admin-to-nav': ()=> {
        let pos = Session.get('side-nav');
        if(pos == undefined) FlowRouter.go('discover');
        else FlowRouter.go(pos);
    }
});