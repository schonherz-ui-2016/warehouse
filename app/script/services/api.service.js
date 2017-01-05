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
            warehouse.quantities=[];
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

        function getAllData() {
            return $q.all({
                products: getProducts(),
                users: getUsers(),
                warehouses: getWarehouses()
            })
                .then(function (result) {
                    console.log(result);
                    const products = result.products.data;
                    const users = result.users.data;
                    const warehouses = result.warehouses.data;

                    warehouses.forEach(function (warehouse) {
                        const user = users.find(function(u) {
                            return u.id === warehouse.ownerId;
                        });
                        warehouse.owner = angular.copy(user);
                        warehouse.products = [];
                    });

                    /*for (var i = 0; i < warehouses.length; i++) {
                        for (var j = 0; j < warehouses[i].quantities.length; j++) {
                            for (var k = 0; k < products.length; k++) {
                                if (warehouses[i].quantities[j].id == products[k].id) {
                                    const product = {
                                        name: products[k].name,
                                        id: products[k].id,
                                        price: products[k].price,
                                        category: products[k].category.name,
                                        quantity: warehouses[i].quantities[j].value
                                    };
                                    warehouses[i].products[j].push(product);
                                }
                            }
                        }
                    }*/

                    /*
                    warehouses.forEach(function(wh) {
                        wh.products = [];
                        wh.quantities.forEach(function(q) {
                            const product = angular.copy(products.find(function(p) {
                                return p.id === q.id;
                            }));
                            product.quantity = q.value;
                            wh.products.push(product);
                        });
                    });*/

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