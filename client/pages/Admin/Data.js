/**
 * Created by wander on 7/7/17.
 */
import moment from 'moment';

Template.Data.onCreated(function() {
    var self = this;
    self.autorun(function() {
        Session.set('rules-new', false)
        self.subscribe('rules');
        self.subscribe('allUsers');
    });
});

Template.Data.helpers({
    rules: ()=> {
        return Rules.find({});
    },
    dateFormat: function () {
        return moment(this.createdAt).format('MMMM D YYYY')
    },
    createdBy: function (author) {
        return Meteor.users.findOne({ "_id": author}).username;
    },
    checkRules: function () {
        if (this.inRules) return "Yes"
        else return "No"
    },
    checkInRules: function () {
        return this.inRules;
    },
    rulesNew: function () {
        return Session.get('rules-new')
    },
    editMode: function () {
        return Session.get('currentRule') ? 'edit-mode' : '';
    },
    currentEdit: function () {
        let rule = Session.get('currentRule');
        if(rule != null) return rule._id === this._id;
    }
});

Template.Data.events({
    'click .rules-new': function () {
        Session.set('rules-new', !Session.get('rules-new'))
    },
    'click .user_id': function () {
        Session.set('currentRule', this)
    },
    'click .close-edit-mode': function () {
        Session.set('currentRule', null)
    },
    'click .toggle-rule': function () {
        Meteor.call('toggleRule', this._id, this.inRules)
    },
    'click .action-delete': function () {
        Meteor.call('deleteRule', this._id);
        Session.set('currentRule', null)
    },
});

