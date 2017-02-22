var employeeService = {
    getEmployees: function() {
        return {
            "employees" : [
                {
                    "id": 1878,
                    "login": "hill",
                    "firstName": "Patanapong",
                    "lastName": "Srisucharncharoen",
                    "displayName": "Hill",
                    "isFavorite": false,
                    "isNewUser": false,
                    "branchChatRoomName": null,
                    "mobile": "+86-2-6606-2999",
                    "branch": "Chonburi",
                    "jobLevel": "Assistant Restaurant Manager"
                },
                {
                    "id": 1872,
                    "login": "mod",
                    "firstName": "Sasiwara",
                    "lastName": "Boonjan",
                    "displayName": "Mod",
                    "isFavorite": true,
                    "isNewUser": false,
                    "branchChatRoomName": null,
                    "mobile": "+86-2-6606-2888",
                    "branch": "Chonburi",
                    "jobLevel": "Waiter/Waitress"
                },
                {
                    "id": 1873,
                    "login": "muey",
                    "firstName": "Thitinum",
                    "lastName": "Siriarpanont",
                    "displayName": "Muey",
                    "isFavorite": true,
                    "isNewUser": false,
                    "branchChatRoomName": null,
                    "mobile": "+86-2-6606-2777",
                    "branch": "Chonburi",
                    "jobLevel": "Waiter/Waitress"
                },
                {
                    "id": 1874,
                    "login": "biggu",
                    "firstName": "Dissaphong",
                    "lastName": "Thachasongtham",
                    "displayName": "Big",
                    "isFavorite": true,
                    "isNewUser": false,
                    "branchChatRoomName": null,
                    "mobile": "+86-2-6606-2666",
                    "branch": "Chonburi",
                    "jobLevel": "Waiter/Waitress"
                },
                {
                    "id": 1875,
                    "login": "toon",
                    "firstName": "Sagsun",
                    "lastName": "Disman",
                    "displayName": "Toon",
                    "isFavorite": true,
                    "isNewUser": false,
                    "branchChatRoomName": null,
                    "mobile": "+86-2-6606-2555",
                    "branch": "Chonburi",
                    "jobLevel": "Cook"
                },
                {
                    "id": 1876,
                    "login": "boom",
                    "firstName": "Chacrit",
                    "lastName": "Tuanngem",
                    "displayName": "Boom",
                    "isFavorite": false,
                    "isNewUser": false,
                    "branchChatRoomName": null,
                    "mobile": "+86-2-6606-2444",
                    "branch": "Rayong",
                    "jobLevel": "Cook"
                },
                {
                    "id": 1877,
                    "login": "punn",
                    "firstName": "Pakorn",
                    "lastName": "Techaveerapong",
                    "displayName": "Pun",
                    "isFavorite": false,
                    "isNewUser": false,
                    "branchChatRoomName": null,
                    "mobile": "+86-2-6606-2333",
                    "branch": "Rayong",
                    "jobLevel": "Cook"
                }
            ]
        }
    },
    getEmployeeByLoginName: function(name) {
        let {employees} = this.getEmployees();
        let result;
        employees.forEach((e) => {
            if (e.login === name) {
                result = e;
            }
        });

        return result;
    }
}

module.exports = employeeService;