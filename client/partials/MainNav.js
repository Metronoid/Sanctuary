/**
 * Created by wander on 7/5/17.
 */
Template.MainNav.events({
    'click .login-toggle': ()=> {
        Session.set('nav-toggle', 'open');
    },
    'click .logout': ()=> {
        AccountsTemplates.logout();
    }
});