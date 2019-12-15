void main() {
  User userOne = User('luigi', 24);
  print(userOne.username);
  
  User userTwo = User('mario', 26);
  print(userTwo.username);
  
  SuperUser userThree = SuperUser('yoshi', 20);
  print(userThree.username);
  userThree.publish();
  userThree.login();
}

class User{
  
  String username;
  int age;
  
  User(String username, int age){
    this.username = username;
    this.age = age;
  }

  void login() {
    print('user logged in');
  }
  
}

class SuperUser extends User {
  
  SuperUser(String username, int age) : super(username, age);
  
  void publish(){
    print('published update');
  }
  
}
