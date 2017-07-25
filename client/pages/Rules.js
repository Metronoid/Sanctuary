/**
 * Created by wander on 7/7/17.
 */

Template.Rules.onCreated(function () {
    this.autorun(() => {
        Session.set('rules-editMode', false)
    });
});

Template.Rules.helpers({
    logged: ()=> {
        return Meteor.userId();
    },
    editMode: function () {
        return Session.get('rules-editMode')
    }
});

Template.Rules.events({
    'click .rules-new': function () {
        Session.set('rules-editMode', !Session.get('rules-editMode'))
    },
});