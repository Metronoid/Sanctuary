/**
 * Created by wander on 7/4/17.
 */


Template.RulesList.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('rules');

    });
});

Template.RulesList.helpers({
    rules: ()=> {
        return Rules.find({ "inRules": true});
    }
});