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
            quantity: 4,
            name: 'Cupcakes'
          }, {
            quantity: 8,
            name: 'Donuts'
          }, {
            quantity: 16,
            name: 'Eclairs'
          }, {
            quantity: 32,
            name: 'Froyos'
          }, {
            quantity: 64,
            name: 'Gingerbreads'
          }, {
            quantity: 128,
            name: 'Honeycombs'
          }, {
            quantity: 256,
            name: 'Ice Cream Sandwiches'
          }, {
            quantity: 512,
            name: 'Jelly Beans'
          }, {
            quantity: 1024,
            name: 'KitKats'
          }, {
            quantity: 2065,
            name: 'Lollipops'
          }, {
            quantity: 6,
            name: 'Marsmallows'
          }, {
            quantity: 7,
            name: 'nougat'
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
        var ToBuyController = this;

        ToBuyController.itemsList = ShoppingListService.itemsList;

        ToBuyController.markItem = function (itemIndex) {
            ShoppingListService.markItem(itemIndex);
        }
    }

    AlreadyBoughtShoppingController.$inject = ['ShoppingListService'];

    function AlreadyBoughtShoppingController(ShoppingListService) {
        var AlreadyBoughtController = this;

        AlreadyBoughtController.boughtItems = ShoppingListService.boughtItems;
    }
})();
