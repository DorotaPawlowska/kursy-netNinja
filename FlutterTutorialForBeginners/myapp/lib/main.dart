import 'package:flutter/material.dart';

void main() => runApp(MaterialApp(
  home: Home(),
));

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('my first app'),
        centerTitle: true,
        backgroundColor: Colors.red[600],
      ),
      body: Center(
        child: IconButton(
          onPressed: (){
            print('you mailed me');
          },
          icon: Icon(Icons.alternate_email),
          color: Colors.amber,
        ),

//        child: RaisedButton.icon(
//          onPressed: (){},
//          icon: Icon(
//            Icons.mail
//          ),
//          label: Text('mail me'),
//          color: Colors.amber,
//        ),

//        child: FlatButton(
//          onPressed: (){
//            print('you clicked me');
//          },
//          child: Text('click me'),
//          color: Colors.lightBlue,
//        ),

//        child: RaisedButton(
//          onPressed: (){},
//          child: Text('click me'),
//          color: Colors.lightBlue,
//        ),

//        child: Icon(
//          Icons.airport_shuttle,
//          color: Colors.lightBlue,
//          size: 50,
//        ),

//        child: Image.asset('assets/photo1.jpg'),

      ),
      floatingActionButton: FloatingActionButton(
        onPressed: (){},
        child: Text('click'),
        backgroundColor: Colors.red[600],
      ),
    );
  }
}

