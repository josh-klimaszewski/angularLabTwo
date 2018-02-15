(function () {
    
    var taskForm = {

        templateUrl: "partials/taskForm.html",
        controller: function () {
            var vm = this;
            vm.items = [];
            vm.updateInfo = function (item) {
                vm.items.push(item);
                document.getElementById('addInput').value = "";
                console.log(item, vm.items)
            }
        }
    };
    angular
        .module("app")
        .component("taskForm", taskForm)
})();