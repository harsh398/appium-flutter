// Flutter imports:
import 'package:flutter/material.dart';

class SecondPage extends StatefulWidget {
  const SecondPage({super.key});

  @override
  State<SecondPage> createState() => _SecondPageState();
}

class _SecondPageState extends State<SecondPage> {
  final _textController = TextEditingController();
  String _text = '';

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
            padding: const EdgeInsets.symmetric(horizontal: 8),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                TextField(
                  controller: _textController,
                  maxLines: 2,
                  onChanged: (_) {
                    setState(() {
                      _text = _textController.value.text.length <= 10
                          ? _textController.value.text
                          : '${_textController.value.text.substring(0, 10)}...';
                    });
                  },
                  decoration: const InputDecoration(
                    border: OutlineInputBorder(),
                    labelText: 'Write Something...',
                  ),
                ),
                const SizedBox(height: 8),
                Text(
                  _text,
                  style: const TextStyle(
                    color: Colors.black54,
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
