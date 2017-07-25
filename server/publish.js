Meteor.publish('rules', function(){
    return Rules.find();
});

Meteor.publish('allUsers', function(){
    if(Roles.userIsInRole(this.userId,'user-admin')) {
        return Meteor.users.find({});
    }
});