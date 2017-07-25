/**
 * Created by wander on 7/3/17.
 */
Template.BillboardBlock.helpers({
    getText: function () {
        return this.text;  // array
    },
    getAction: function () {
        return this.action;  // array
    },
    getButtons: function () {
        return JSON.parse(this.buttonSettings)
    }
});