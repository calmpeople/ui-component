define([
    'uiComponent'
], function (Component) {
    'use strict';

    return Component.extend({
        defaults: {
            isVisibleModal: false,
            isVisibleMessage: false,
            textMessage: '',
            number: 50,
            inputValue: 0
        },
        initialize: function () {
            this._super();
            this.textButton = 'Click me bro';
        },
        toggleModal: function () {
            this.isVisibleModal(!this.isVisibleModal());
        },
        guess: function () {
            if (this.inputValue() < this.number) {
                this.textMessage("The number is less than hidden");
            } else if (this.inputValue() > this.number) {
                this.textMessage("The number is greater than hidden");
            } else {
                this.textMessage("You Win!");
            }
            this.isVisibleMessage(true);
        },
        restart: function () {
            this.isVisibleMessage(false);
            this.textMessage('');
            this.inputValue(0);
        },
        initObservable: function () {
            this._super().observe(['isVisibleModal', 'isVisibleMessage', 'textMessage', 'inputValue']);
            return this;
        }
    });
});
