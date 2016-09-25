(function () {
    'use strict';

    angular.module('ShoppingList', [])
        .controller('ToBuyShoppingController', ToBuyShoppingController)
        .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
        .service('ShoppingListService', ShoppingListService);

    function ShoppingListService() {
        var service = this;

        service.itemsList = [
          {
            quantity: 15,
            name: 'Cupcakes'
          }, {
            quantity: 16,
            name: 'Donuts'
          }, {
            quantity: 21,
            name: 'Eclairs'
          }, {
            quantity: 22,
            name: 'Froyos'
          }, {
            quantity: 23,
            name: 'Gingerbreads'
          }, {
            quantity: 30,
            name: 'Honeycombs'
          }, {
            quantity: 40,
            name: 'Ice Cream Sandwiches'
          }, {
            quantity: 41,
            name: 'Jelly Beans'
          }, {
            quantity: 44,
            name: 'KitKats'
          }, {
            quantity: 50,
            name: 'Lollipops'
          }, {
            quantity: 60,
            name: 'Marsmallows'
          }];

        service.boughtItems = [];

        service.markItem = function (itemIndex) {
            var item = service.itemsList[itemIndex];
            service.itemsList.splice(itemIndex, 1);
            service.boughtItems.push(item);
        }
    }

    ToBuyShoppingController.$inject = ['ShoppingListService'];

    function ToBuyShoppingController(ShoppingListService) {
        var toBuyCtrl = this;

        toBuyCtrl.itemsList = ShoppingListService.itemsList;
        // console.log(toBuyCtrl.itemsList);

        toBuyCtrl.markItem = function (itemIndex) {
            ShoppingListService.markItem(itemIndex);
        }
    }

    AlreadyBoughtShoppingController.$inject = ['ShoppingListService'];

    function AlreadyBoughtShoppingController(ShoppingListService) {
        var alreadyBoughtCtrl = this;

        alreadyBoughtCtrl.boughtItems = ShoppingListService.boughtItems;
    }
})();
