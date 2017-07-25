/**
 * Created by wander on 7/6/17.
 */
Template.SideNav.onCreated(function() {
    Session.set('side-nav', FlowRouter.current().route.name);
});

Template.SideNav.helpers({
    active: (check)=> {
        return Session.get('side-nav') == check ? 'active' : '';
    },
    logged: ()=> {
        return !Meteor.userId();
    }
});


Template.SideNav.events({
    'click .side-nav-discover': ()=> {
        Session.set('side-nav', 'discover');
    },
    'click .side-nav-rules': ()=> {
        Session.set('side-nav', 'rules');
    },
    'click .side-nav-chat': ()=> {
        Session.set('side-nav', 'chat');
    },
    'click .nav-to-admin': ()=> {
        let pos = Session.get('admin-nav');
        if(pos == undefined || pos == 'admin') FlowRouter.go('admin');
        else FlowRouter.go('/admin/'+pos);
    }
});