(function () {
    angular
        .module('warehouse')
        .service('api', Service);

    function Service($http, $q) {
        var urlBase = 'http://localhost:1337/';
        this.createWarehouse = createWarehouse;
        this.deleteWarehouse = deleteWarehouse;
        this.getAllData = getAllData;
        this.getProducts = getProducts;
        this.getUsers = getUsers;
        this.getWarehouse = getWarehouse;
        this.getWarehouses = getWarehouses;
        this.login = login;
        this.logout = logout;
        this.registration = registration;
        this.updateWarehouse = updateWarehouse;

        function createWarehouse(warehouse) {
            warehouse.quantities=[];
            return $http({
                url: urlBase + 'warehouse',
                method: 'POST',
                headers: {
                    Authorization: sessionStorage.getItem('token')
                },
                data: warehouse
            });
        }

        function deleteWarehouse(id) {
            return $http({
                url: urlBase + 'warehouse/' + id,
                method: 'DELETE',
                headers: {
                    Authorization: sessionStorage.getItem('token')
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

                    warehouses.forEach(function(wh) {
                        wh.products = [];
                        wh.quantities.forEach(function(q) {
                            const product = angular.copy(products.find(function(p) {
                                return p.id === q.id;
                            }));
                            product.quantity = q.value;
                            wh.products.push(product);
                        });
                    });

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
                    Authorization: sessionStorage.getItem('token')
                }
            });
        }

        function getWarehouse(id) {
            return $http({
                url: urlBase + 'warehouse/' + id,
                method: 'GET',
                headers: {
                    Authorization: sessionStorage.getItem('token')
                }
            });
        }

        function getWarehouses() {
            return $http({
                url: urlBase + 'warehouse',
                method: 'GET',
                headers: {
                    Authorization: sessionStorage.getItem('token')
                }
            });
        }

        function login(email, password) {
            return $http.post('http://localhost:1337' + '/user/login', {
                "email": email,
                "password": password
            })
                .then(function (respons) {
                    sessionStorage.setItem('token', 'JWT ' + respons.data.token);
                    console.log(sessionStorage.token);
                });
        }

        function logout() {
            sessionStorage.clear();
            console.log(sessionStorage);
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
                    Authorization: sessionStorage.getItem('token')
                },
                data: warehouse
            });
        }
    }
})();