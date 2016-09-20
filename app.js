var app = angular.module('hTreeUI', ['checklist-model']);
app.controller('myCtrl', function ($scope, modelService) {
    var tablesInModel = modelService.getTablesInModel();
    $scope.tablesInModelObjects = [];
    for (var i = 0; i < tablesInModel.length; i++) {
        var tableRow = {};
        tableRow.name = tablesInModel[i];
        $scope.tablesInModelObjects.push(tableRow);
    }
    $scope.toggleSelectAll = function (table) {
        if (table.selectAll === 'false' || table.selectAll === undefined) {
            table.selected = angular.copy(table.columns);
            table.selectAll = 'true';
        }
        else {
            table.selected = [];
            table.selectAll = 'false';
        }
    }
    $scope.toggleTableSelection = function (table) {
        if (table.arrow === 'fa fa-chevron-circle-right') {
            table.arrow = 'fa fa-chevron-circle-down';
            if (table.columns === undefined) {
                table.columns = modelService.getColumnsInTable(table.name);
            }
            table.collapsed = 'block';
            if (table.selectAll) {
                table.selected = [];
                table.selected = angular.copy(table.columns);
            }
        }
        else {
            table.arrow = 'fa fa-chevron-circle-right';
            table.collapsed = 'none'
        }
    }
});
app.service('modelService', function () {
    this.getTablesInModel = function () {
        return ["table1", "table2"];
    }
    this.getColumnsInTable = function (tableName) {
        return ["column1", "column2"]
    }
})