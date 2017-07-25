/**
 * Created by wander on 7/25/17.
 */
Template.HomeLayout.helpers({
    modalOpen: ()=> {
        let modal = Session.get('nav-toggle');
        return modal == 'open' ? true : false;
    }
});