/**
 * Created by wander on 7/6/17.
 */
var postSignUp = function(userId, info) {
    Roles.addUsersToRoles(userId, ['user-normal', 'role-null', 'gender-null'])
}

AccountsTemplates.configure({
   postSignUpHook: postSignUp
});