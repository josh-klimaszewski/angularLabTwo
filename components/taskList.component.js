(function () {
    
   
    
    var taskList = {
        bindings: {
            items: "<"
        },
        templateUrl: "partials/taskList.html",
        controller: function () {
            var vm = this;
            vm.removeInfo = function (item) {
                var array = vm.items;
                var index = array.indexOf(item);
                array.splice(index, 1);
            }

        }
    };


    angular
        .module("app")
        .component("taskList", taskList)
})();