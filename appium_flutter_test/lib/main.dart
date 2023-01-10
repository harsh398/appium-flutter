// Flutter imports:
import 'package:flutter/material.dart';
// Package imports:
// ignore: depend_on_referenced_packages
import 'package:flutter_driver/driver_extension.dart';

// Project imports:
import 'home_page.dart';

void main() {
  enableFlutterDriverExtension();
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: Colors.green,
      ),
      home: const HomePage(title: 'Appium Sample App'),
    );
  }
}
