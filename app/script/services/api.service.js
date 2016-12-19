
(function () {
    angular
        .module('warehouse')
        .service('api', Service);

    function Service($http){
        this.token = "JWT ";
        var urlBase = 'http://localhost:1337/warehouse';
        var urlLogin = 'http://localhost:1337/user/login';
        this.createWarehouse = createWarehouse;
        this.deleteWarehouse = deleteWarehouse;
        this.getWarehouse = getWarehouse;
        this.getWarehouses = getWarehouses;
        this.login = login;
        this.registration = registration;
        this.updateWarehouse = updateWarehouse;

        function createWarehouse(warehouse){
            return $http({
                url: urlBase,
                method: 'POST',
                headers: {
                    Authorization: this.token
                },
                data: warehouse
            });
        }

        function deleteWarehouse(id) {
            return $http({
                url: urlBase + '/' + id,
                method: 'DELETE',
                headers: {
                    Authorization: this.token
                }
            });
        }

        function getWarehouse(id){
            return $http({
                url: urlBase + '/' + id,
                method: 'GET',
                headers: {
                    Authorization: this.token
                }
            });
        }

        function getWarehouses() {
            return $http({
                url: urlBase,
                method: 'GET',
                headers: {
                    Authorization: this.token
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

        function updateWarehouse(warehouse) {
            return $http({
                url: urlBase + '/' + warehouse.id,
                method: 'PUT',
                headers: {
                    Authorization: this.token
                },
                data: warehouse
            });
        }
    }

})();