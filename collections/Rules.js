/**
 * Created by wander on 7/4/17.
 */
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Rules = new Mongo.Collection('rules');

Rules.allow({
    insert: function(userId, doc){
        return !!userId;
    },
    update: function (userId, doc) {
        return !!userId;
    },
    remove: function (userId) {
        return !!userId;
    }
});

RuleSchema = new SimpleSchema({
    rule: {
        type: String,
        label: "Rule ~ The title of the rule you want to submit.",
    },
    cat: {
        type: String,
        label: "Category ~ Suggest a category for which this rule falls under.",
    },
    desc: {
        type: String,
        label: "Explanation ~ Please explain the rule.",
    },
    inRules: {
        type: Boolean,
        defaultValue: false,
        optional: true,
        autoform: {
            type: "hidden",
        },
    },
    author: {
        type: String,
        label: "Author",
        autoValue: function() {
            return this.userId;
        },
        autoform: {
            type: "hidden",
        },
    },
    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function() {
            return new Date();
        },
        autoform: {
            type: "hidden",
        },
    },
});

Rules.attachSchema( RuleSchema );

Meteor.methods({
    toggleRule(id, currentState) {
        Rules.update(id, {
            $set: {
                inRules: !currentState
            }
        })
    },
    deleteRule(id) {
        Rules.remove(id)
    }
});