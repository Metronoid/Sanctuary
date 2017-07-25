/**
 * Created by wander on 7/6/17.
 */
Meteor.methods({
    toggleAdmin(id) {
       if(Roles.userIsInRole(id, 'user-admin')){
           Roles.removeUsersFromRoles(id, 'user-admin');
       }else{
           Roles.addUsersToRoles(id, 'user-admin');
       }
    }
});