angular.module('bms')
  .run(function (Config, $httpBackend, $log, APIBaseUrl, regexEscape, guid, mockRepository) {
    if (!Config.API.useMocks) return;

    var collectionUrl = APIBaseUrl + 'users';
    var IdRegExp = /[\d\w-_]+$/.toString().slice(1, -1);

    var users = collectionUrl;
    var UserById = new RegExp(regexEscape(collectionUrl + '/') + IdRegExp);

    $log.log('***************************************************************************************************************');
    $log.log('Overriding all calls to `' + collectionUrl + '` with mocks defined in *dev/user-mocks.js*');
    $log.log('***************************************************************************************************************');

    var seed = [
      {id: guid(), text: 'AngularJS'},
      {id: guid(), text: 'Karma'},
      {id: guid(), text: 'Yeoman'},
      {id: guid(), text: 'Generator-angular-xl'}
    ];

    var UserRepo = mockRepository.create();

    angular.forEach(seed, function (item, key) {
        UserRepo.insert(item.id, item);
    });

    //GET users/
    $httpBackend.whenGET(users).respond(function (method, url, data, headers) {
      $log.debug('Intercepted GET to `' + url + '`', data);
      return [200, UserRepo.getAll(), {/*headers*/}];
    });

    //POST users/
    $httpBackend.whenPOST(users).respond(function (method, url, data, headers) {
      $log.debug('Intercepted POST to `' + url + '`', data);

      var User = UserRepo.push(angular.fromJson(data));

      return [200, User, {/*headers*/}];
    });

    //GET users/<id>
    $httpBackend.whenGET(UserById).respond(function (method, url, data, headers) {
      $log.debug('Intercepted GET to `' + url + '`');
      var id = url.match(new RegExp(IdRegExp))[0];
      var item = UserRepo.getById(id);
      return [item ? 200 : 404, item || null, {/*headers*/}];
    });

    //PUT users/<id>
    $httpBackend.whenPUT(UserById).respond(function (method, url, data, headers) {
      $log.debug('Intercepted PUT to `' + url + '`');
      var id = url.match(new RegExp(IdRegExp))[0];

      if (!UserRepo.getById(id)) {
        return [404, {} , {/*headers*/}];
      }

      var User = UserRepo.insert(id, angular.fromJson(data));

      return [200, User, {/*headers*/}];
    });

    //DELETE users/<id>
    $httpBackend.whenDELETE(new RegExp(regexEscape(collectionUrl + '/') + IdRegExp)).respond(function (method, url, data, headers) {
      $log.debug('Intercepted DELETE to `' + url + '`');
      var id = url.match(new RegExp(IdRegExp))[0];

      var User = UserRepo.getById(id);
      if (!User) {
        return [404, {} , {/*headers*/}];
      }
      UserRepo.remove(User.id);

      return [200, User , {/*headers*/}];
    });

  });


