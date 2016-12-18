
(function () {
    angular
        .module('warehouse')
        .service('api', Service);

    function Service($http){
        var urlBase = 'http://localhost:1337/warehouse';
        var urlLogin = 'http://localhost:1337/user/login';
        this.createWarehouse = createWarehouse;
        this.deleteWarehouse = deleteWarehouse;
        this.getWarehouse = getWarehouse;
        this.getWarehouses = getWarehouses;
        this.login = login;
        this.registration = registration;
        this.updateWarehouse = updateWarehouse;

        function createWarehouse(warehouse, token){
            return $http({
                url: urlBase,
                method: 'POST',
                headers: {
                    Authorization: token
                },
                data: warehouse
            });
        }

        function deleteWarehouse(id, token) {
            return $http({
                url: urlBase + '/' + id,
                method: 'DELETE',
                headers: {
                    Authorization: token
                }
            });
        }

        function getWarehouse(id, token){
            return $http({
                url: urlBase + '/' + id,
                method: 'GET',
                headers: {
                    Authorization: token
                }
            });
        }

        function getWarehouses(token) {
            return $http({
                url: urlBase,
                method: 'GET',
                headers: {
                    Authorization: token
                }
            });
        }

        function login(user){
            return $http.post(urlLogin, user);
        }

        function registration(user) {
            return $http.post(domain+'/user/registration', {
                "email": user.email,
                "password": user.password,
                "name":user.name
            });
        }

        function updateWarehouse(warehouse, token) {
            return $http({
                url: urlBase + '/' + warehouse.id,
                method: 'PUT',
                headers: {
                    Authorization: token
                },
                data: warehouse
            });
        }
    }

})();