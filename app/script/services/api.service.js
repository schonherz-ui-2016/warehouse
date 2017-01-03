(function () {
    angular
        .module('warehouse')
        .service('api', Service);

    function Service($http, $q) {
        var token = "JWT ";
        var urlBase = 'http://localhost:1337/';
        this.createWarehouse = createWarehouse;
        this.deleteWarehouse = deleteWarehouse;
        this.getAllData = getAllData;
        this.getProducts = getProducts;
        this.getUsers = getUsers;
        this.getWarehouse = getWarehouse;
        this.getWarehouses = getWarehouses;
        this.login = login;
        this.registration = registration;
        this.updateWarehouse = updateWarehouse;

        function createWarehouse(warehouse) {
            return $http({
                url: urlBase + 'warehouse',
                method: 'POST',
                headers: {
                    Authorization: token
                },
                data: warehouse
            });
        }

        function deleteWarehouse(id) {
            return $http({
                url: urlBase + 'warehouse/' + id,
                method: 'DELETE',
                headers: {
                    Authorization: token
                }
            });
        }

        const promises = {};

        function getAllData(){
            return $q.all({
                products: getProducts(),
                users: getUsers(),
                warehouses: getWarehouses()
            })
                .then(function (result) {
                    promises.products = result.products.data;
                    promises.users = result.users.data;
                    promises.warehouses = result.warehouses.data;

                    var warehouses = [];

                    for (var i = 0; i < promises.warehouses.length; i++) {
                        warehouses[i] = promises.warehouses[i];
                    }

                    for (i = 0; i < warehouses.length; i++) {
                        for (var j = 0; j < promises.users.length; j++) {
                            if (warehouses[i].owner == promises.users[j].id) {
                                warehouses[i].owner = promises.users[j];
                            }
                        }
                    }

                    for (i = 0; i < warehouses.length; i++) {
                        for (j = 0; j < warehouses[i].quantity.length; j++) {
                            for (var k = 0; k < promises.products.length; k++) {
                                if (warehouses[i].quantity[j].id == promises.products[k].id) {
                                    warehouses[i].quantity[j].name = promises.products[k].name;
                                    warehouses[i].quantity[j].price = promises.products[k].price;
                                    warehouses[i].quantity[j].category = promises.products[k].category.name;
                                }
                            }
                        }
                    }

                    return warehouses;

                });
        }

        function getProducts() {
            return $http.get(urlBase + 'product');
        }

        function getUsers() {
            return $http({
                url: urlBase + 'user',
                method: 'GET',
                headers: {
                    Authorization: token
                }
            });
        }

        function getWarehouse(id) {
            return $http({
                url: urlBase + 'warehouse/' + id,
                method: 'GET',
                headers: {
                    Authorization: token
                }
            });
        }

        function getWarehouses() {
            return $http({
                url: urlBase + 'warehouse',
                method: 'GET',
                headers: {
                    Authorization: token
                }
            });
        }

        function login(email, password) {
            return $http.post('http://localhost:1337' + '/user/login', {
                "email": email,
                "password": password
            })
                .then(function (respons) {
                    token += respons.data.token;
                    console.log("Token:", token);
                });
        }

        function registration(user) {
            return $http.post('http://localhost:1337' + '/user/registration', {
                "email": user.email,
                "password": user.password,
                "name": user.name
            });
        }

        function updateWarehouse(warehouse) {
            return $http({
                url: urlBase + 'warehouse/' + warehouse.id,
                method: 'PUT',
                headers: {
                    Authorization: token
                },
                data: warehouse
            });
        }
    }
})();