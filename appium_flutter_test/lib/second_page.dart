import 'package:flutter/material.dart';

class SecondPage extends StatelessWidget {
  const SecondPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Second Route"),
      ),
      body: ListView(
        padding: const EdgeInsets.all(8.0),
        children: <Widget>[
          Container(
            height: 100,
            color: Colors.amber[600],
            child: const Center(child: Text('This is 2nd route')),
          ),
          Container(
            height: 200,
            color: Colors.amber[500],
            child: const Center(child: Text('Entry B')),
          ),
          Container(
            height: 500,
            color: Colors.amber[100],
            child: const Center(child: Text('Entry C')),
          ),
          Container(
            height: 1000,
            color: Colors.amber[100],
            child: const Center(child: Text('Entry D')),
          ),
          Container(
            height: 1000,
            color: Colors.amber[100],
            child: const Center(
                child: TextField(
              decoration: InputDecoration(
                border: OutlineInputBorder(),
                labelText: 'Sample Input',
              ),
            )),
          ),
        ],
      ),
    );
  }
}
