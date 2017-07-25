/**
 * Created by wander on 7/5/17.
 */
Template.LoginModal.events({
   'click .close-login': ()=> {
       Session.set('nav-toggle', '');
   }
});