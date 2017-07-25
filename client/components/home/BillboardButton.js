/**
 * Created by wander on 7/24/17.
 */
Template.BillboardButton.helpers({
    buttonClass: function (id) {
        if (this.action == null) {
            return Template.instance().data.button.replace(/\s+/g, '');
        }
    }
});

Template.BillboardButton.events({
    'click .register': function () {
        Session.set('nav-toggle', 'open')
        AccountsTemplates.linkClick('signUp');
    },
    'click .login': function () {
        Session.set('nav-toggle', 'open')
        AccountsTemplates.linkClick('signIn');
    },
});
