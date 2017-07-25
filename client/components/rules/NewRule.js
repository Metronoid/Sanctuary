/**
 * Created by wander on 7/7/17.
 */

Template.NewRule.events({
    'click .simple-close-edit': function () {
        Session.set('rules-new', !Session.get('rules-new'))
    },
});

Template.NewRule.helpers({
    rules: ()=> {
        return Rules.find({ "inRules": true});
    },
    check: function () {

        let foundRules = Rules.findOne({ "author": Meteor.userId()}, {sort: {createdAt: -1, limit: 1}});
        console.log(new Date() - foundRules.createdAt)
        if(new Date() - foundRules.createdAt < 43200000) return false;
        else return true
    }
});